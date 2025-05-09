import React, { useEffect, useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { Link as ScrollLink, scroller } from "react-scroll";
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(""); // Track active section
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === "/";

  const navItems = [
    { name: "Home", to: "home" },
    { name: "About Us", to: "about-us" },
    { name: "Our Services", to: "services" },
    { name: "Our Clinics", to: "clinics" },
  ];

  // On home page, scroll to section if query param exists
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const scrollTo = params.get("scrollTo");

    if (scrollTo && isHomePage) {
      scroller.scrollTo(scrollTo, {
        duration: 500,
        smooth: true,
        offset: -80,
      });
    }
  }, [location, isHomePage]);

  // Handle scroll event to track active section
  useEffect(() => {
    if (!isHomePage) return; // Skip IntersectionObserver if not on home page

    const sections = navItems.map(item => document.getElementById(item.to));

    if (sections.some(section => section === null)) return; // Avoid errors if any section is missing

    const observer = new IntersectionObserver(
      (entries) => {
        let activeSectionFound = false; // Flag to track if active section is found
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const activeItem = navItems.find(item => item.to === entry.target.id);
            if (activeItem) {
              setActiveSection(activeItem.to); // Set active section
              activeSectionFound = true;
            }
          }
        });
        
        // If no section was found, reset activeSection to ""
        if (!activeSectionFound) {
          setActiveSection(""); // Reset active section when no section is active
        }
      },
      { threshold: 0.5 } // Trigger when 50% of section is visible
    );
    sections.forEach(section => observer.observe(section));

    // Cleanup observer on route change or component unmount
    return () => {
      sections.forEach(section => observer.unobserve(section));
    };
  }, [isHomePage, location]); // Re-run observer when route changes

  const handleNavClick = (to) => {
    if (isHomePage) {
      scroller.scrollTo(to, {
        duration: 500,
        smooth: true,
        offset: -80,
      });
    } else {
      navigate(`/?scrollTo=${to}`);
    }
    setIsOpen(false);
  };

  return (
    <nav className="bg-primary border-b border-primary text-white font-Inter fixed w-full top-0 left-0 z-50 shadow-md">
      <div className="max-w-screen-2xl mx-auto flex items-center justify-between px-6 py-4 md:px-16">
        <RouterLink
          to="/"
          className="text-white text-lg font-[400] bg-tertiary px-4 py-2 rounded-sm"
        >
          The Logo
        </RouterLink>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white focus:outline-none"
        >
          {isOpen ? <HiX className="w-6 h-6" /> : <HiMenu className="w-6 h-6" />}
        </button>

        <div className="hidden md:flex space-x-8 items-center">
          {navItems.map(({ name, to }) => (
            <button
              key={name}
              onClick={() => handleNavClick(to)}
              className={`hover:text-secondary transition cursor-pointer bg-transparent border-none outline-none ${
                activeSection === to ? "text-tertiary" : "" // Highlight active menu item
              }`}
            >
              {name}
            </button>
          ))}
        </div>
      </div>

      <div
        className={`md:hidden transition-all duration-500 ease-in-out overflow-hidden ${
          isOpen ? "max-h-[300px] opacity-100 py-6" : "max-h-0 opacity-0 py-0"
        } bg-secondary text-black font-Inter font-[400] flex flex-col items-center gap-6 text-lg`}
      >
        {navItems.map(({ name, to }) => (
          <button
            key={name}
            onClick={() => handleNavClick(to)}
            className={`hover:text-tertiary transition cursor-pointer bg-transparent border-none outline-none ${
              activeSection === to ? "text-tertiary" : "" // Highlight active menu item
            }`}
          >
            {name}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
