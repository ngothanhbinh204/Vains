import React from "react";

const SvgLightEffect = ({ className = "", style = {}, top = 0, left = 0 }) => {
  return (
    <div
      className={`absolute pointer-events-none ${className}`}
      style={{
        top: typeof top === "number" ? `${top}px` : top,
        left: typeof left === "number" ? `${left}px` : left,
        width: 660,
        height: 750,
        zIndex: 0,
        ...style,
      }}
    >
      <svg
        width="874"
        height="961"
        viewBox="0 0 874 961"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <g filter="url(#filter0_f_302_2232)">
          <path
            d="M373.952 495.044L106 234.469L332.729 106L463.674 461.108L768 664.72L554.608 855L373.952 495.044Z"
            fill="url(#paint0_radial_302_2232)"
            fillOpacity="0.8"
          />
        </g>
        <g filter="url(#filter1_f_302_2232)">
          <path
            d="M509.048 495.044L777 234.469L550.271 106L419.326 461.108L115 664.72L328.392 855L509.048 495.044Z"
            fill="url(#paint1_radial_302_2232)"
            fillOpacity="0.2"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_302_2232"
            x="0.7"
            y="0.7"
            width="872.6"
            height="959.6"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="52.65"
              result="effect1_foregroundBlur_302_2232"
            />
          </filter>
          <filter
            id="filter1_f_302_2232"
            x="33.9"
            y="24.9"
            width="824.2"
            height="911.2"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="40.55"
              result="effect1_foregroundBlur_302_2232"
            />
          </filter>
          <radialGradient
            id="paint0_radial_302_2232"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(437 480.5) rotate(60.6784) scale(374.536 330.969)"
          >
            <stop stopColor="#9BFFF9" />
            <stop offset="1" stopColor="#42C3D5" stopOpacity="0" />
          </radialGradient>
          <radialGradient
            id="paint1_radial_302_2232"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(446 480.5) rotate(119.322) scale(374.536 330.969)"
          >
            <stop stopColor="#9BFFF9" />
            <stop offset="1" stopColor="#42C3D5" stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
};

export default SvgLightEffect;
