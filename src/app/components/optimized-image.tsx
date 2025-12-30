"use client";

import React from "react";
import Image from "next/image";

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  sizes?: string;
}

export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width = 1200,
  height = 630,
  className = "",
  priority = false,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
}) => {
  // Vérifier si l'image est locale
  const isLocal = !src.startsWith('http');
  const imageSrc = isLocal ? src : src;

  return (
    <Image
      src={imageSrc}
      alt={alt}
      width={width}
      height={height}
      className={`${className} rounded-lg`}
      priority={priority}
      sizes={sizes}
      quality={85} // Optimisation de la qualité
      placeholder="blur"
      blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
    />
  );
};