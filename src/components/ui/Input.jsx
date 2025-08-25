import React, { useState, forwardRef } from "react";

const Input = forwardRef(
  (
    {
      label,
      error,
      leftIcon,
      rightIcon,
      onRightIconClick,
      containerClassName = "",
      inputClassName = "",
      variant = "default",
      className,
      type = "text",
      ...props
    },
    ref
  ) => {
    const [isFocused, setIsFocused] = useState(false);

    const baseInputStyles =
      "w-full rounded-full py-[10px] text-white border-0 outline-none transition-all duration-300 backdrop-blur-sm bg-transparent";

    const variantStyles = {
      default:
        "border border-primary rounded-full backdrop-blur-sm focus:border-primary",
      outlined: "border-2 border-gray-600 rounded-full focus:border-primary",
      filled: "rounded-full",
    };

    const containerStyles = `relative ${variantStyles[variant]} ${
      isFocused ? "" : ""
    } ${containerClassName}`;

    const leftPadding = leftIcon ? "pl-[50px]" : "pl-4";
    const rightPadding = rightIcon ? "pr-[50px]" : "pr-4";

    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-medium mb-2">{label}</label>
        )}

        <div className={containerStyles}>
          {/* Left Icon */}
          {leftIcon && (
            <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none z-10">
              <div className=" transition-colors duration-300">{leftIcon}</div>
            </div>
          )}

          {/* Input Field */}
          <input
            ref={ref}
            type={type}
            className={`${baseInputStyles} ${leftPadding} ${rightPadding} ${inputClassName} ${
              className || ""
            }`}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            {...props}
          />

          {/* Right Icon */}
          {rightIcon && (
            <div
              className={`absolute inset-y-0 right-0 pr-4 flex items-center ${
                onRightIconClick
                  ? "cursor-pointer hover:text-white"
                  : "pointer-events-none"
              }`}
              onClick={onRightIconClick}
            >
              <div className="text-gray-400 hover:text-white transition-colors duration-300">
                {rightIcon}
              </div>
            </div>
          )}

          {/* Focus Ring Effect */}
          {isFocused && (
            <div className="absolute inset-0 rounded-full border-2  pointer-events-none animate-pulse"></div>
          )}
        </div>

        {/* Error Message */}
        {error && (
          <p className="mt-2 text-sm text-red-400 animate-fadeIn">{error}</p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
