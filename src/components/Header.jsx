import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home"); // Initially "Home" is active

  const handleNavClick = (section) => {
    setActiveSection(section);
    setMenuOpen(false); // Close menu on mobile after clicking
  };

  return (
    <header className="fixed w-full top-0 left-0 bg-gray-800 shadow-md z-50 px-6 md:px-16">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-blue-400">
          Portfolio
        </Link>

        {/* Hamburger / Close Button */}
        <button
          className="md:hidden text-white text-2xl focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <IoCloseSharp /> : <GiHamburgerMenu />}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 text-white">
          {["home", "about", "services", "portfolio", "contact"].map((section) => (
            <Link
              key={section}
              to={`${section==="home"? "/" : section}`}
              className={`hover:text-blue-400 ${activeSection === section ? "text-blue-400" : ""}`}
              onClick={() => handleNavClick(section)}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Link>
          ))}
        </nav>
      </div>

      {/* Mobile Navigation (Vertical Menu) */}
      <div
        className={`md:hidden fixed top-16 left-0 w-full bg-gray-900 transition-all duration-300 ${
          menuOpen ? "h-auto opacity-100" : "h-0 opacity-0"
        } overflow-hidden`}
      >
        <nav className="flex flex-col items-center space-y-4 py-4 text-white">
          {["home", "about", "services", "portfolio", "contact"].map((section) => (
            <Link
              key={section}
              to={`${section==="home"? "/" : section}`}
              className={`hover:text-blue-400 ${activeSection === section ? "text-blue-400" : ""}`}
              onClick={() => handleNavClick(section)}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
