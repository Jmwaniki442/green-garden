import React, { useState, useEffect } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const links = [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Products", href: "#products" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="bg-white text-black shadow-md">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-black">GreenGarden</h1>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-6">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-bold text-black hover:text-gray-700 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="focus:outline-none">
            <span className="block w-6 h-0.5 bg-black mb-1"></span>
            <span className="block w-6 h-0.5 bg-black mb-1"></span>
            <span className="block w-6 h-0.5 bg-black"></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white px-6 pb-4">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block py-2 font-bold text-black hover:text-gray-700 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
