"use client";

import { CentralSphere } from "@/sections/Shared/CentralSphere";
import { OrbitalRing } from "@/sections/Shared/OrbitalRing";
import { OrbitalDot } from "@/sections/Shared/OrbitalDot";

export default function PlanetarySystemBanner() {
  // Define orbital configurations
  const orbits = [
    // { radius: 100, dots: 2, speed: 1.2, dotSize: 6 },
    { radius: 300, dots: 3, speed: 0.8, dotSize: 5 },
    { radius: 350, dots: 4, speed: 0.6, dotSize: 5 },
    { radius: 400, dots: 5, speed: 0.4, dotSize: 5 },
    // { radius: 320, dots: 3, speed: 0.3, dotSize: 6 },
  ];

  return (
    <div className="relative w-full h-screen min-h-[600px] overflow-visible">
      <div className="absolute inset-0">
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-30 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Central container */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative">
          {/* Orbital Rings and Dots */}
          {orbits.map((orbit, orbitIndex) => (
            <OrbitalRing key={orbitIndex} radius={orbit.radius}>
              {Array.from({ length: orbit.dots }).map((_, dotIndex) => (
                <OrbitalDot
                  key={dotIndex}
                  radius={orbit.radius}
                  speed={orbit.speed}
                  size={orbit.dotSize}
                  delay={(360 / orbit.dots) * dotIndex + Math.random() * 360}
                />
              ))}
            </OrbitalRing>
          ))}
        </div>
      </div>

      {/* Responsive adjustments */}
      <style jsx>{`
        @media (max-width: 768px) {
          .planetary-system {
            transform: scale(0.7);
          }
        }
        @media (max-width: 480px) {
          .planetary-system {
            transform: scale(0.5);
          }
        }
      `}</style>
    </div>
  );
}
