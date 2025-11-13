import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

const Button = ({ text, variant = "primary", onClick, type = "button", disabled = false }) => {
  const baseStyle = "px-6 py-3 rounded-lg font-semibold transition-colors border";

  const variantStyles = {
    primary: "bg-white text-green-500 border-green-500 hover:bg-green-50",
    secondary: "bg-secondary text-white hover:bg-yellow-600",
    outline: "bg-white text-primary border-primary hover:bg-primary hover:text-white",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={clsx(baseStyle, variantStyles[variant])}
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(["primary", "secondary", "outline"]),
  onClick: PropTypes.func,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  disabled: PropTypes.bool,
};

export default Button;
