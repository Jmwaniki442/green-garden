import React from "react";

const Button = ({ text, variant = "primary" }) => {
  const styles = {
    primary: "bg-primary text-white hover:bg-green-700",
    secondary: "bg-secondary text-neutralDark hover:bg-yellow-400",
    outline: "border border-primary text-primary hover:bg-primary hover:text-white",
  };

  return (
    <button className={`px-6 py-3 rounded-full font-semibold transition ${styles[variant]}`}>
      {text}
    </button>
  );
};

export default Button;
