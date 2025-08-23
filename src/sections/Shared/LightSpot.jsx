import React from "react";

const LightSpot = ({
  size = 700,
  top,
  left = 0,
  opacity = 1,
  className = "",
}) => {
  const formatValue = (value) => {
    if (typeof value === "number") {
      return `${value}px`;
    }
    return value;
  };

  return (
    <div
      className={`absolute pointer-events-none ${className}`}
      style={{
        width: formatValue(size),
        height: formatValue(size),
        top: formatValue(top),
        left: formatValue(left),
        background: `url('./images/Ellipse.png') no-repeat center center / contain`,
        borderRadius: "50%",
        zIndex: 0,
        opacity: opacity,
      }}
    />
  );
};

export default LightSpot;
