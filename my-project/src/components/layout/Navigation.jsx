import React from "react";

const Navigation = () => {
  return (
    <nav className="bg-green-100 text-gray-800 shadow-sm">
      <div className="container mx-auto px-6 py-3 flex justify-center space-x-8 font-medium">
        <a href="#home" className="hover:text-green-700 transition-colors">Home</a>
        <a href="#products" className="hover:text-green-700 transition-colors">Products</a>
        <a href="#about" className="hover:text-green-700 transition-colors">About</a>
        <a href="#contact" className="hover:text-green-700 transition-colors">Contact</a>
      </div>
    </nav>
  );
};

export default Navigation;
