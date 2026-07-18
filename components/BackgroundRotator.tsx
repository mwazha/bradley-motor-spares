"use client"
import React, { useEffect, useState } from "react";

type Props = {
  images: string[];
  interval?: number; // milliseconds
  children?: React.ReactNode;
};

export default function BackgroundRotator({ images, interval = 5000, children }: Props) {
  const [index, setIndex] = useState(0);

  // Preload images
  useEffect(() => {
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, [images]);

  useEffect(() => {
    if (!images || images.length === 0) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % images.length), interval);
    return () => clearInterval(id);
  }, [images, interval]);

  return (
    <div className="rotator-root">
      <div className="rotator-bg">
        {images.map((src, i) => (
          <div
            key={src + i}
            className={`rotator-layer ${i === index ? "active" : ""}`}
            style={{ backgroundImage: `url(${src})` }}
            aria-hidden="true"
          />
        ))}
      </div>
      <div className="rotator-content">{children}</div>
    </div>
  );
}
