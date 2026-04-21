"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaBitcoin, FaSync } from "react-icons/fa";

export const BitcoinPrice = () => {
  const [price, setPrice] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);

  const fetchPrice = async () => {
    try {
      setLoading(true);
      setError(false);
      const response = await fetch(
        "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd"
      );
      if (!response.ok) throw new Error("Failed to fetch");
      const data = await response.json();
      setPrice(data.bitcoin.usd);
      setLastUpdated(new Date());
    } catch (err) {
      console.error("Error fetching Bitcoin price:", err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPrice();
    // Rafraîchir toutes les 60 secondes
    const interval = setInterval(fetchPrice, 60000);
    return () => clearInterval(interval);
  }, []);

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
          <FaBitcoin className="text-2xl text-orange-500" />
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
            onClick={fetchPrice}
            disabled={loading}
            className="p-2 text-gray-500 hover:text-green-600 transition-colors disabled:opacity-50"
            aria-label="Refresh price"
          >
            <FaSync className={loading ? "animate-spin" : ""} size={14} />
          </button>
        </div>
      </div>
    </motion.div>
  );
};