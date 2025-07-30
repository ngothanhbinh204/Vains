import React from "react";

function ReadMoreButton({
  text = "READ MORE",
  className = "",
  onClick,
  variant = "black",
}) {
  const variants = {
    black: "text-baseGray border-b-black hover:text-black",
    white: "text-white border-b-white hover:text-white",
  };

  const variantClasses = variants[variant] || variants["black"];

  return (
    <a
      href="#"
      onClick={onClick}
      className={`group border-b text-baseGray pr-2 cursor-pointer font-grotesk justify-between min-h-10 w-full max-w-56 border-b-black inline-flex items-center gap-2 relative text-md uppercase transform transition-all duration-200 tracking-wide ${variantClasses} ${className}`}
    >
      <span className="relative">
        <span className="relative z-10">{text}</span>
      </span>

      <span className="w-5 h-5 ">
        <svg
          className="transform transition-transform duration-300
          group-hover:rotate-45 fill-current"
          data-bbox="19.117 18.918 161.766 162.164"
          viewBox="0 0 200 200"
          height="20"
          width="20"
          xmlns="http://www.w3.org/2000/svg"
          data-type="shape"
        >
          <g>
            <path d="M104.133 18.918l-9.431 8.947 61.913 65.269-137.498.938.089 13 138.096-.942-61.338 66.11 9.529 8.842 75.39-81.254-76.75-80.91z"></path>
          </g>
        </svg>
      </span>
    </a>
  );
}

export default ReadMoreButton;
