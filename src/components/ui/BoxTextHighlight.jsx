import React from "react";
import { GoArrowRight } from "react-icons/go";

const BoxTextHighlight = ({
  children = "Contact us",
  as = "button",
  href,
  onClick,
  className = "",
  variant = "jade_green",
  ...props
}) => {
  const Component = as;

  // Định nghĩa color themes
  const colorThemes = {
    gold_button: {
      background: "bg-[rgb(74,67,36)]",
      borderGradient:
        "bg-gradient-to-r from-[rgba(163,93,7,0)] via-[rgba(252,178,54,1)] to-[rgba(163,93,7,0)]",
      borderGradientHover:
        "hover:from-[rgba(163,93,7,0.2)] hover:via-[rgba(252,178,54,1)] hover:to-[rgba(163,93,7,0.2)]",
      iconBackground: "bg-[rgba(255,255,255,0.12)]",
      shadowColor: "hover:shadow-amber-500/25",
    },
    jade_green: {
      background: "bg-[rgb(18,59,56)]",
      borderGradient:
        "bg-gradient-to-r from-[rgba(23,66,62,1)] via-[rgba(155,255,249,1)] to-[rgba(23,66,62,1)]",
      borderGradientHover:
        "hover:from-from-[rgba(36,137,126,0.12)] via-[rgba(155,255,249,1)] to-[rgba(23,66,62,1)]",
      iconBackground: "bg-[rgba(255,255,255,0.12)]",
      shadowColor: "hover:shadow-emerald-500/25",
    },
  };

  // Lấy theme hiện tại
  const currentTheme = colorThemes[variant] || colorThemes.gold_button;

  const buttonStyles = `
    relative inline-flex items-center justify-between
    w-auto h-[35px]
    px-5 py-2.5
    ${currentTheme.background}
    rounded-full
    text-white text-base
    transition-all duration-300 ease-in-out
    hover:shadow-lg ${currentTheme.shadowColor}
    active:scale-95 font-helvetica-light cursor-pointer
    ${className}
  `;

  // Wrapper với gradient border động
  const wrapperStyles = `
    max-w-fit relative p-[1px] rounded-full
    ${currentTheme.borderGradient}
    ${currentTheme.borderGradientHover}
    transition-all duration-150
    shadow-[0_0_25px_rgba(66,195,213,1)]

  `;

  const commonProps = {
    className: buttonStyles,
    ...props,
  };

  const ButtonContent = () => (
    <>
      <span className="flex-1 text-left">{children}</span>
    </>
  );

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

export default BoxTextHighlight;
