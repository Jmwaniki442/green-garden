import React, { useEffect, useState } from "react";

const Header = () => {
  const [isDark, setIsDark] = useState(false);

  // Initialize dark mode based on localStorage
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

  return (
    <header className="bg-neutralLight dark:bg-neutralDark text-gray-900 dark:text-white py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-6">
        <h1 className="text-2xl font-bold">GreenGarden</h1>

        {/* Navigation (optional) */}
        <nav className="space-x-4">
          <a href="#hero" className="hover:text-primary dark:hover:text-green-400">
            Home
          </a>
          <a href="#about" className="hover:text-primary dark:hover:text-green-400">
            About
          </a>
          <a href="#products" className="hover:text-primary dark:hover:text-green-400">
            Products
          </a>
          <a href="#contact" className="hover:text-primary dark:hover:text-green-400">
            Contact
          </a>
        </nav>

        {/* Dark Mode Toggle */}
        <button
          onClick={toggleDarkMode}
          className="ml-4 px-3 py-1 rounded-md border border-gray-300 dark:border-gray-600 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
        >
          {isDark ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    </header>
  );
};

export default Header;
