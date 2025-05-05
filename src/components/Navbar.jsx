import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Men Clinic", path: "/men-clinic" },
    { name: "Women Clinic", path: "/women-clinic" },
  ];

  const isActive = (path) => location.pathname === path;

  const activeClass =
    "text-secondary font-semibold border-b-2 border-secondary transition";
  const defaultClass =
    "hover:text-secondary transition";

  return (
    <nav className="bg-primary border-b border-primary text-white font-Inter relative z-50">
      <div className="max-w-screen-2xl mx-auto flex items-center justify-between px-6 py-4 md:px-16">
        <Link
          to="/"
          className="text-white text-lg font-[400] bg-tertiary px-4 py-2 rounded-sm"
        >
          The Logo
        </Link>

        {/* Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? <HiX className="w-6 h-6" /> : <HiMenu className="w-6 h-6" />}
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center">
          {navItems.map(({ name, path }) => (
            <Link
              key={name}
              to={path}
              className={isActive(path) ? activeClass : defaultClass}
            >
              {name}
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-500 ease-in-out overflow-hidden ${
          isOpen ? "max-h-[300px] opacity-100 py-6" : "max-h-0 opacity-0 py-0"
        } bg-secondary text-black font-Inter font-[400] flex flex-col items-center gap-6 text-lg`}
      >
        {navItems.map(({ name, path }) => (
          <Link
            key={name}
            to={path}
            onClick={() => setIsOpen(false)}
            className={
              isActive(path)
                ? "text-tertiary font-semibold underline underline-offset-4"
                : "hover:text-tertiary transition"
            }
          >
            {name}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
