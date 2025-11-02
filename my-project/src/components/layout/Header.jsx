import React from "react";

const Header = () => {
  return (
    <header className="bg-green-200 text-gray-800 py-4 shadow-md">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-green-800">FreshGro</h1>
        <p className="text-sm font-medium text-green-700">Healthy. Organic. Local.</p>
      </div>
    </header>
  );
};

export default Header;
