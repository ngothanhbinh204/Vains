"use client";

import { useEffect, useState } from "react";

export function OrbitalDot({ radius, speed, size = 8, delay = 0 }) {
  const [rotation, setRotation] = useState(delay);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prev) => prev + speed);
    }, 50);

    return () => clearInterval(interval);
  }, [speed]);

  const x = Math.cos((rotation * Math.PI) / 180) * (radius * 1.25);
  const y = Math.sin((rotation * Math.PI) / 180) * (radius * 1.25);

  return (
    <div
      className="absolute top-1/2 left-1/2 rounded-full bg-white shadow-lg transition-all duration-75 ease-linear"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        transform: `translate(${x - size / 2}px, ${y - size / 2}px)`,
        boxShadow: `0 0 ${size}px rgba(255, 255, 255, 0.3)`,
      }}
    />
  );
}
