import React from "react";
import MascotImg from "@/assets/icons/MascotVainMain.svg"; // đổi path cho đúng file mascot của bạn

/**
 * Mascot Component
 * @param {string} size - Chiều rộng tối đa (vd: "200px" | "10rem" | "100%")
 * @param {string} shadowWidth - Chiều rộng shadow (vd: "120px")
 * @param {string} shadowHeight - Chiều cao shadow (vd: "15px")
 * @param {string} className - Thêm custom class bên ngoài
 */
const Mascot = ({
  size = "200px",
  shadowWidth = "120px",
  shadowHeight = "15px",
  className = "",
}) => {
  return (
    <div className={`relative inline-block ${className}`}>
      {/* Mascot */}
      <img
        className="h-full max-w-full mx-auto animate-float"
        src={MascotImg}
        alt="Mascot - Vains"
        style={{ width: size }}
      />

      {/* Shadow */}
      <div
        className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 
        rounded-full bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,1)_0%,rgba(0,0,0,0)_80%)] 
        blur-sm animate-shadow-scale"
        style={{ width: shadowWidth, height: shadowHeight }}
      ></div>
    </div>
  );
};

export default Mascot;
