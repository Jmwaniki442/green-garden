import React, { useState, useEffect } from "react";

const Header = () => {
  const [isDark, setIsDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Initialize dark mode
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    if (isDark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    setIsDark(!isDark);
  };

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const links = [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Products", href: "#products" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="bg-neutralLight dark:bg-neutralDark text-gray-900 dark:text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <h1 className="text-2xl font-bold">GreenGarden</h1>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-6">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-primary dark:hover:text-green-400 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={toggleDarkMode}
            className="ml-4 px-3 py-1 rounded-md border border-gray-300 dark:border-gray-600 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          >
            {isDark ? "Light Mode" : "Dark Mode"}
          </button>
        </nav>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleDarkMode} className="mr-3 px-2 py-1 rounded-md border border-gray-300 dark:border-gray-600 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors text-sm">
            {isDark ? "Light" : "Dark"}
          </button>

          <button onClick={toggleMenu} className="focus:outline-none">
            <span className="block w-6 h-0.5 bg-gray-900 dark:bg-white mb-1"></span>
            <span className="block w-6 h-0.5 bg-gray-900 dark:bg-white mb-1"></span>
            <span className="block w-6 h-0.5 bg-gray-900 dark:bg-white"></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-neutralLight dark:bg-neutralDark px-6 pb-4">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block py-2 hover:text-primary dark:hover:text-green-400 transition-colors"
              onClick={() => setMenuOpen(false)} // close menu on link click
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
