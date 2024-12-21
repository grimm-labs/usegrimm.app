"use client";

import React, { useState, useEffect } from "react";
import { IoIosCloseCircle } from "react-icons/io";

interface ModalProps {
    isOpen: boolean;
    content: React.ReactNode;
    onClose: () => void;
    size?: 'small' | 'medium' | 'large' | 'xl';
}

export const Modal: React.FC<ModalProps> = ({ 
    isOpen, 
    content, 
    onClose, 
    size = 'medium' 
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
        small: 'sm:max-w-sm',
        medium: 'sm:max-w-lg',
        large: 'sm:max-w-2xl',
        xl: 'sm:max-w-4xl'
    };

    return (
        <div
            className={`fixed inset-0 z-10 transition-opacity duration-300 ${
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
            <div className="fixed inset-0 z-10 w-screen overflow-y-auto flex items-center justify-center">
                <div className={`relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all duration-300 ${
                    isOpen 
                        ? "scale-100 translate-y-0 opacity-100" 
                        : "scale-95 translate-y-4 opacity-0"
                } sm:w-full ${sizeClasses[size]}`}>
                    {/* Modal Content */}
                    <div className="grid justify-items-end pt-4 pr-4">
                        <IoIosCloseCircle
                            size={45}
                            onClick={onClose}
                            className="text-red-500 cursor-pointer"
                        />
                    </div>
                    {content}
                </div>
            </div>
        </div>
    );
};
