"use client";

import React, { useState, useEffect } from "react";
import { IoIosCloseCircle } from "react-icons/io";

interface ModalProps {
  isOpen: boolean;
  content: React.ReactNode;
  onClose: () => void;
  size?: "small" | "medium" | "large" | "xl";
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  content,
  onClose,
  size = "medium",
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
    } else {
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!isVisible) return null;

  const sizeClasses = {
    small: "max-w-sm",
    medium: "max-w-lg",
    large: "max-w-2xl",
    xl: "max-w-4xl",
  };

  return (
    <div
      className={`fixed inset-0 z-50 transition-opacity duration-300 ${
        isOpen ? "opacity-100" : "opacity-0"
      }`}
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-gray-500/75 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
        aria-hidden="true"
        onClick={onClose}
      ></div>

      {/* Modal Container */}
      <div className="fixed inset-0 z-50 w-screen overflow-y-auto flex items-center justify-center p-4">
        <div
          className={`relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all duration-300 w-full ${
            isOpen
              ? "scale-100 translate-y-0 opacity-100"
              : "scale-95 translate-y-4 opacity-0"
          } ${sizeClasses[size]} mx-auto`}
        >
          {/* Close Button */}
          <div className="absolute top-2 right-2 z-10">
            <IoIosCloseCircle
              size={32}
              onClick={onClose}
              className="text-red-500 cursor-pointer hover:text-red-600 transition-colors"
            />
          </div>

          {/* Modal Content */}
          {content}
        </div>
      </div>
    </div>
  );
};
