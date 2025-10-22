"use client";

import React, { useState } from "react";
import { IoMdAdd, IoMdRemove } from "react-icons/io";

interface FAQItemProps {
  title: string;
  content: string;
  defaultOpen?: boolean;
}

export const FAQItem: React.FC<FAQItemProps> = ({
  title,
  content,
  defaultOpen = false,
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="group p-6 border-b border-gray-100 last:border-b-0">
      <div
        className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900"
        onClick={toggleOpen}
      >
        <h2 className="text-lg font-bold">{title}</h2>
        <span className="relative size-5 shrink-0 text-primary-600">
          {!isOpen ? (
            <IoMdAdd className="size-5 transition-all duration-300 ease-in-out" />
          ) : (
            <IoMdRemove className="size-5 transition-all duration-300 ease-in-out" />
          )}
        </span>
      </div>
      {isOpen && (
        <div
          className="overflow-hidden transition-all duration-300 ease-in-out 
                     origin-top transform scale-y-100 opacity-100"
        >
          <p className="mt-4 leading-relaxed text-gray-700 py-2">{content}</p>
        </div>
      )}
    </div>
  );
};
