import React from "react";
import { GoArrowRight } from "react-icons/go";

const ButtonLinear = ({
  children = "Contact us",
  as = "button",
  href,
  onClick,
  className = "",
  variant,
  transparent = false,
  outline = false,
  // Thêm prop showIcon với giá trị mặc định là true
  showIcon = true,
  ...props
}) => {
  const Component = as;

  // Định nghĩa color themes
  const colorThemes = {
    basic: {},
    gold_button: {
      background: outline
        ? "bg-transparent"
        : transparent
        ? "bg-transparent"
        : "bg-[rgb(74,67,36)]",
      borderGradient: outline
        ? "bg-gradient-to-r from-[rgba(163,93,7,1)] via-[rgba(252,178,54,1)] to-[rgba(163,93,7,1)]"
        : "bg-gradient-to-r from-[rgba(163,93,7,0)] via-[rgba(252,178,54,1)] to-[rgba(163,93,7,0)]",
      borderGradientHover: outline
        ? "hover:from-[rgba(163,93,7,0.8)] hover:via-[rgba(252,178,54,1)] hover:to-[rgba(163,93,7,0.8)]"
        : "hover:from-[rgba(163,93,7,0.2)] hover:via-[rgba(252,178,54,1)] hover:to-[rgba(163,93,7,0.2)]",
      iconBackground: outline
        ? "bg-transparent border border-[rgba(252,178,54,0.5)]"
        : transparent
        ? "bg-[rgba(252,178,54,0.2)]"
        : "bg-[rgba(255,255,255,0.12)]",
      shadowColor: "hover:shadow-amber-500/25",
      textColor: outline
        ? "text-white"
        : transparent
        ? "text-gray-800"
        : "text-white",
    },
    jade_green: {
      background: outline
        ? "bg-transparent"
        : transparent
        ? "bg-transparent"
        : "bg-[rgb(18,59,56)]",
      borderGradient: outline
        ? "bg-gradient-to-r from-[rgba(23,66,62,1)] via-[rgba(155,255,249,1)] to-[rgba(23,66,62,1)]"
        : "bg-gradient-to-r from-[rgba(23,66,62,1)] via-[rgba(155,255,249,1)] to-[rgba(23,66,62,1)]",
      borderGradientHover: outline
        ? "hover:from-[rgba(23,66,62,0.8)] hover:via-[rgba(155,255,249,1)] hover:to-[rgba(23,66,62,0.8)]"
        : "hover:from-[rgba(36,137,126,0.12)] hover:via-[rgba(155,255,249,1)] hover:to-[rgba(23,66,62,1)]",
      iconBackground: outline
        ? "bg-transparent border border-[rgba(155,255,249,0.5)]"
        : transparent
        ? "bg-[rgba(155,255,249,0.2)]"
        : "bg-[rgba(255,255,255,0.12)]",
      shadowColor: "hover:shadow-emerald-500/25",
      textColor: outline
        ? "text-white"
        : transparent
        ? "text-gray-800"
        : "text-white",
    },
    rainbow: {
      background: outline
        ? "bg-transparent"
        : transparent
        ? "bg-transparent"
        : "bg-white",
      borderGradient: outline
        ? "bg-gradient-to-r from-[rgba(250,181,60,1)] via-[rgba(155,255,249,1)] to-[rgba(66,195,213,1)]"
        : "bg-gradient-to-r from-[rgba(250,181,60,1)] via-[rgba(155,255,249,1)] to-[rgba(66,195,213,1)]",
      borderGradientHover: outline
        ? "hover:from-[rgba(250,181,60,0.8)] hover:via-[rgba(155,255,249,1)] hover:to-[rgba(66,195,213,0.8)]"
        : "hover:from-[rgba(250,181,60,1)] hover:via-[rgba(155,255,249,1)] hover:to-[rgba(66,195,213,1)]",
      iconBackground: outline
        ? "bg-transparent border border-[rgba(66,195,213,0.5)]"
        : transparent
        ? "bg-[rgba(66,195,213,0.2)]"
        : "bg-[rgba(255,255,255,0.12)]",
      shadowColor: "hover:shadow-cyan-500/25",
      textColor: outline
        ? "text-white"
        : transparent
        ? "text-gray-800"
        : "text-gray-800",
    },
  };

  const currentTheme = colorThemes[variant] || colorThemes.gold_button;

  const buttonStyles = `
  min-w-[140px]
    relative inline-flex items-center justify-between
    w-auto h-11
    pl-5 pr-[10px] py-3
    ${currentTheme.background}
    rounded-full
    ${currentTheme.textColor} text-base
    transition-all duration-300 ease-in-out
    hover:shadow-lg ${currentTheme.shadowColor}
    active:scale-95 cursor-pointer
    ${transparent ? "backdrop-blur-sm" : ""}
    ${className}
  `;

  // Wrapper styles khác nhau cho outline và normal
  const wrapperStyles = outline
    ? `
      max-w-fit relative rounded-full overflow-hidden
      before:content-[''] before:absolute before:inset-0 before:p-[1px] 
      before:${currentTheme.borderGradient} before:${currentTheme.borderGradientHover}
      before:rounded-full before:transition-all before:duration-150
      before:mask-border before:mask-composite
    `.replace(/\s+/g, " ")
    : `
      max-w-fit relative p-[1px] rounded-full
      ${currentTheme.borderGradient}
      ${currentTheme.borderGradientHover}
      transition-all duration-150
    `;

  const commonProps = {
    className: buttonStyles,
    ...props,
  };

  const ButtonContent = () => (
    <>
      <span className="flex-1 text-center">{children}</span>
      {/* Sử dụng showIcon để render icon có điều kiện */}
      {showIcon && (
        <div
          className={`ml-2.5 w-8 h-8 ${currentTheme.iconBackground} rounded-full flex items-center justify-center transition-colors`}
        >
          <GoArrowRight size={20} />
        </div>
      )}
      {/* {!showIcon && <span className="ml-2.5 w-8 h-8"></span>} */}
    </>
  );

  // Render outline button với CSS mask
  if (outline) {
    const OutlineButton = () => (
      <div className="max-w-fit relative">
        {/* Gradient border background */}
        <div
          className={`absolute inset-0 rounded-full ${currentTheme.borderGradient} ${currentTheme.borderGradientHover} transition-all duration-150`}
        ></div>

        {/* Inner transparent area */}
        <div className="relative m-[1px] rounded-full bg-transparent">
          {as === "a" ? (
            <Component href={href} {...commonProps}>
              <ButtonContent />
            </Component>
          ) : (
            <Component onClick={onClick} {...commonProps}>
              <ButtonContent />
            </Component>
          )}
        </div>
      </div>
    );
    return <OutlineButton />;
  }

  // Normal button render
  if (as === "a") {
    return (
      <div className={wrapperStyles}>
        <Component href={href} {...commonProps}>
          <ButtonContent />
        </Component>
      </div>
    );
  }

  return (
    <div className={wrapperStyles}>
      <Component onClick={onClick} {...commonProps}>
        <ButtonContent />
      </Component>
    </div>
  );
};

export default ButtonLinear;
