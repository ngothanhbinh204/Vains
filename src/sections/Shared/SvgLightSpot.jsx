const SvgLightSpot = ({ className = "", style = {}, top = 0, left = 0 }) => {
  return (
    <div
      className={`absolute pointer-events-none ${className}`}
      style={{
        top: typeof top === "number" ? `${top}px` : top,
        left: typeof left === "number" ? `${left}px` : left,
        width: 874,
        height: 774,
        zIndex: 0,
        ...style,
      }}
    >
      <svg
        width="874"
        height="774"
        viewBox="0 0 874 774"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <g filter="url(#filter0_f_57_186)">
          <path
            d="M373.952 454.044L106 193.469L332.729 65L463.674 420.108L768 623.72L554.608 814L373.952 454.044Z"
            fill="url(#paint0_radial_57_186)"
            fillOpacity="0.8"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_57_186"
            x="0.7"
            y="-40.3"
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
              result="effect1_foregroundBlur_57_186"
            />
          </filter>
          <radialGradient
            id="paint0_radial_57_186"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(437 439.5) rotate(60.6784) scale(374.536 330.969)"
          >
            <stop stopColor="#9BFFF9" />
            <stop offset="1" stopColor="#42C3D5" stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
};

export default SvgLightSpot;
