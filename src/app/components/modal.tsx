"use client";

import React, { useState, useEffect } from "react";
import { CloseIcon } from "./icons";

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
  const [prevIsOpen, setPrevIsOpen] = useState(false);

  // Adjust state during render (React recommended pattern for deriving state from props)
  if (isOpen && !prevIsOpen) {
    setPrevIsOpen(true);
    setIsVisible(true);
  } else if (!isOpen && prevIsOpen) {
    setPrevIsOpen(false);
  }

  // Delayed hide for exit animation
  useEffect(() => {
    if (!isOpen && isVisible) {
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen, isVisible]);

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
            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900 transition-colors"
            >
              <CloseIcon size={18} />
            </button>
          </div>

          {/* Modal Content */}
          {content}
        </div>
      </div>
    </div>
  );
};
