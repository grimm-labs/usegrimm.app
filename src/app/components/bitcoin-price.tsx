"use client";

import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { BitcoinIcon, RefreshIcon } from "./icons";

const PRICE_URL =
  "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd";
const REFRESH_INTERVAL_MS = 60_000;

async function fetchBitcoinPrice(): Promise<number> {
  const response = await fetch(PRICE_URL);
  if (!response.ok) throw new Error("Failed to fetch");
  const data = await response.json();
  return data.bitcoin.usd;
}

export const BitcoinPrice = () => {
  const [price, setPrice] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);
  // Incremented to request a new fetch (refresh button and timer).
  const [refreshKey, setRefreshKey] = useState(0);

  // Fetch on mount and on each refresh. State is only updated in the
  // promise callbacks, and a response that arrives after a newer request
  // started is ignored.
  useEffect(() => {
    let cancelled = false;
    fetchBitcoinPrice()
      .then((value) => {
        if (cancelled) return;
        setPrice(value);
        setLastUpdated(new Date());
        setError(false);
      })
      .catch((err) => {
        if (cancelled) return;
        console.error("Error fetching Bitcoin price:", err);
        setError(true);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, [refreshKey]);

  const refreshPrice = useCallback(() => {
    setLoading(true);
    setError(false);
    setRefreshKey((key) => key + 1);
  }, []);

  // Rafraîchir toutes les 60 secondes
  useEffect(() => {
    const interval = setInterval(refreshPrice, REFRESH_INTERVAL_MS);
    return () => clearInterval(interval);
  }, [refreshPrice]);

  const formatPrice = (value: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value);
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString(undefined, {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 border border-gray-200 shadow-sm inline-block"
    >
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <BitcoinIcon className="text-2xl text-orange-500" />
          <span className="text-gray-700 font-medium">BTC/USD</span>
        </div>
        <div className="flex items-center gap-3">
          {loading && !price ? (
            <div className="w-24 h-8 bg-gray-200 animate-pulse rounded"></div>
          ) : error ? (
            <span className="text-red-500 text-sm">Failed to load</span>
          ) : (
            <>
              <span className="text-2xl font-bold text-gray-800">
                {price && formatPrice(price)}
              </span>
              {lastUpdated && (
                <span className="text-xs text-gray-500">
                  Updated {formatTime(lastUpdated)}
                </span>
              )}
            </>
          )}
          <button
            onClick={refreshPrice}
            disabled={loading}
            className="p-2 text-gray-500 hover:text-green-600 transition-colors disabled:opacity-50"
            aria-label="Refresh price"
          >
            <RefreshIcon className={loading ? "animate-spin" : ""} size={16} />
          </button>
        </div>
      </div>
    </motion.div>
  );
};