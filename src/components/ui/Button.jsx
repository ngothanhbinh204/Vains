import React from "react";

const Button = React.forwardRef(
  (
    {
      children,
      variant = "fill",
      size = "md",
      className = "",
      onClick,
      disabled = false,
      as: Component = "button",
      type = "button",
      href,
      ...props
    },
    ref
  ) => {
    // Base styles
    const baseStyles =
      "inline-flex cursor-pointer items-center justify-center rounded-full " +
      "font-medium tracking-wider transition-all duration-200 " +
      "disabled:opacity-50 disabled:cursor-not-allowed";

    // Variant styles
    const variants = {
      fill: "transition-all duration-300 bg-primary text-white border-2 border-primary bg-gradient-to-r from-[rgba(58,180,191,1)] to-[rgba(66,195,213,1)] bg-[length:200%_100%] bg-left transition-all duration-500 hover:bg-right",
      fill_white:
        "bg-white text-primary hover:bg-primary hover:text-white border-2 border-white ",
      outline:
        "bg-transparent text-primary border-2 border-primary hover:bg-primary hover:text-white",
      outline_white:
        "bg-transparent text-white border-2 border-white hover:bg-white hover:text-primary focus:ring-white",
      ghost:
        "bg-transparent text-primary hover:bg-gray-100 border-2 border-transparent focus:ring-gray-400",
      primary:
        "bg-blue-600 text-white hover:bg-blue-700 border-2 border-blue-600 focus:ring-blue-500",
      danger:
        "bg-red-600 text-white hover:bg-red-700 border-2 border-red-600 focus:ring-red-500",
      success:
        "bg-green-600 text-white hover:bg-green-700 border-2 border-green-600 focus:ring-green-500",
    };

    // Size styles
    const sizes = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-md",
      lg: "px-8 py-4 text-base",
      xl: "px-10 py-5 text-lg",
    };

    // Combine all styles
    const buttonStyles = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

    // Props cụ thể cho từng loại component
    const componentProps = {
      className: buttonStyles,
      onClick: onClick,
      ref: ref, // Truyền ref đến phần tử DOM cơ bản
      ...props,
    };

    if (Component === "button") {
      componentProps.type = type;
      componentProps.disabled = disabled;
    } else if (Component === "a") {
      componentProps.href = href;
      // disabled attribute không áp dụng cho <a> tag.
      if (disabled) {
        componentProps["aria-disabled"] = true;
        componentProps.onClick = (e) => {
          e.preventDefault();
          if (onClick) onClick(e);
        };
      }
    }

    return <Component {...componentProps}>{children}</Component>;
  }
);

Button.displayName = "Button";

export default Button;
