/**
 * @jest-environment jsdom
 */
import React from "react";
import "@testing-library/jest-dom";
import { act, fireEvent, render, screen } from "@testing-library/react";
import { BitcoinPrice } from "../../../src/app/components/bitcoin-price";

type Deferred = {
  promise: Promise<Response>;
  resolve: (usd: number) => void;
  reject: () => void;
};

function priceResponse(usd: number) {
  return {
    ok: true,
    json: async () => ({ bitcoin: { usd } }),
  } as Response;
}

function deferredResponse(): Deferred {
  let resolve!: (r: Response) => void;
  let reject!: (e: Error) => void;
  const promise = new Promise<Response>((res, rej) => {
    resolve = res;
    reject = rej;
  });
  return {
    promise,
    resolve: (usd) => resolve(priceResponse(usd)),
    reject: () => reject(new Error("network down")),
  };
}

const fetchMock = jest.fn();

describe("BitcoinPrice", () => {
  beforeEach(() => {
    fetchMock.mockReset();
    global.fetch = fetchMock as unknown as typeof fetch;
    jest.spyOn(console, "error").mockImplementation(() => {});
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  test("shows the price once it is loaded", async () => {
    fetchMock.mockResolvedValueOnce(priceResponse(75814));
    render(<BitcoinPrice />);

    expect(await screen.findByText("$75,814.00")).toBeInTheDocument();
    expect(fetchMock).toHaveBeenCalledTimes(1);
  });

  test("shows an error when the request fails", async () => {
    fetchMock.mockRejectedValueOnce(new Error("network down"));
    render(<BitcoinPrice />);

    expect(await screen.findByText("Failed to load")).toBeInTheDocument();
  });

  test("the refresh button loads the latest price", async () => {
    fetchMock
      .mockResolvedValueOnce(priceResponse(75814))
      .mockResolvedValueOnce(priceResponse(80000));
    render(<BitcoinPrice />);
    await screen.findByText("$75,814.00");

    fireEvent.click(screen.getByRole("button", { name: "Refresh price" }));

    expect(await screen.findByText("$80,000.00")).toBeInTheDocument();
    expect(fetchMock).toHaveBeenCalledTimes(2);
  });

  test("the price refreshes every 60 seconds", async () => {
    jest.useFakeTimers();
    try {
      fetchMock
        .mockResolvedValueOnce(priceResponse(75814))
        .mockResolvedValueOnce(priceResponse(80000));
      render(<BitcoinPrice />);
      await screen.findByText("$75,814.00");

      await act(async () => {
        jest.advanceTimersByTime(60_000);
      });

      expect(await screen.findByText("$80,000.00")).toBeInTheDocument();
      expect(fetchMock).toHaveBeenCalledTimes(2);
    } finally {
      jest.useRealTimers();
    }
  });

  test("ignores a slow response that arrives after a newer one", async () => {
    jest.useFakeTimers();
    const first = deferredResponse();
    const second = deferredResponse();
    fetchMock
      .mockReturnValueOnce(first.promise)
      .mockReturnValueOnce(second.promise);
    render(<BitcoinPrice />);

    // The 60 s timer fires while the first request is still pending.
    await act(async () => {
      jest.advanceTimersByTime(60_000);
    });
    expect(fetchMock).toHaveBeenCalledTimes(2);
    jest.useRealTimers();

    await act(async () => second.resolve(80000));
    expect(await screen.findByText("$80,000.00")).toBeInTheDocument();

    // The first (older) response lands late and must not win.
    await act(async () => first.resolve(60000));
    expect(screen.getByText("$80,000.00")).toBeInTheDocument();
    expect(screen.queryByText("$60,000.00")).not.toBeInTheDocument();
  });
});
