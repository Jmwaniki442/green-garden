import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

const Button = ({ text, variant = "primary", onClick, type = "button", disabled = false }) => {
  const baseClasses = "px-6 py-3 font-semibold rounded-lg transition focus:outline-none focus:ring-2 focus:ring-green-500";

  const variantClasses = {
    primary: "bg-green-700 text-white hover:bg-green-800",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
    outline: "border border-green-700 text-green-700 hover:bg-green-50",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={clsx(baseClasses, variantClasses[variant], disabled && "opacity-50 cursor-not-allowed")}
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
