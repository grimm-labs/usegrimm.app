/**
 * @jest-environment jsdom
 */
import React, { act } from "react";
import { renderToString } from "react-dom/server";
import { hydrateRoot } from "react-dom/client";
import {
  LanguageProvider,
  useLanguage,
} from "../../../src/contexts/LanguageContext";

(globalThis as { IS_REACT_ACT_ENVIRONMENT?: boolean }).IS_REACT_ACT_ENVIRONMENT =
  true;

function CurrentLanguage() {
  const { language, setLanguage } = useLanguage();
  return (
    <button type="button" onClick={() => setLanguage("fr")}>
      {language}
    </button>
  );
}

const app = (
  <LanguageProvider>
    <CurrentLanguage />
  </LanguageProvider>
);

// Mirrors production: HTML is rendered on the server (where there is no
// localStorage nor navigator), then hydrated in the browser.
async function renderOnServerThenHydrate() {
  const container = document.createElement("div");
  container.innerHTML = renderToString(app);
  document.body.appendChild(container);
  await act(async () => {
    hydrateRoot(container, app);
  });
  return container;
}

describe("LanguageProvider", () => {
  beforeEach(() => {
    localStorage.clear();
    document.body.innerHTML = "";
    jest.restoreAllMocks();
  });

  test("restores the saved language after hydration", async () => {
    localStorage.setItem("language", "fr");
    const container = await renderOnServerThenHydrate();
    expect(container.textContent).toBe("fr");
  });

  test("uses the browser language when nothing is saved", async () => {
    jest.spyOn(navigator, "language", "get").mockReturnValue("fr-FR");
    const container = await renderOnServerThenHydrate();
    expect(container.textContent).toBe("fr");
  });

  test("defaults to english", async () => {
    jest.spyOn(navigator, "language", "get").mockReturnValue("de-DE");
    const container = await renderOnServerThenHydrate();
    expect(container.textContent).toBe("en");
  });

  test("switching language updates the page and is saved", async () => {
    const container = await renderOnServerThenHydrate();
    expect(container.textContent).toBe("en");
    await act(async () => {
      container.querySelector("button")!.click();
    });
    expect(container.textContent).toBe("fr");
    expect(localStorage.getItem("language")).toBe("fr");
  });
});
