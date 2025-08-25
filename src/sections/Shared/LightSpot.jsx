import React from "react";

const LightSpot = ({
  size = 700,
  top,
  left,
  mobileTop,
  mobileLeft,
  opacity = 1,
  className = "",
}) => {
  const formatValue = (value) => {
    if (typeof value === "number") return `${value}px`;
    return value;
  };

  return (
    <div
      className={`absolute pointer-events-none ${className}`}
      style={{
        width: formatValue(size),
        height: formatValue(size),
        background: `url('./images/Ellipse.png') no-repeat center center / contain`,
        borderRadius: "50%",
        zIndex: 0,
        opacity,

        // default PC
        top: formatValue(top),
        left: formatValue(left),

        // mobile override bằng media query
        ...(mobileTop || mobileLeft
          ? {
              ["@media (max-width: 1023px)"]: {
                top: formatValue(mobileTop ?? top),
                left: formatValue(mobileLeft ?? left),
              },
            }
          : {}),
      }}
    />
  );
};

export default LightSpot;
