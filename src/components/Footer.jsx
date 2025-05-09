import React from 'react';
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';
import { scroller } from 'react-scroll';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';

  const handleScrollLink = (to) => {
    if (isHomePage) {
      scroller.scrollTo(to, {
        duration: 500,
        smooth: true,
        offset: -80,
      });
    } else {
      navigate(`/?scrollTo=${to}`);
    }
  };

  return (
    <footer className="bg-indigo-950 text-white pt-8 pb-4 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left space-y-8 md:space-y-0">
        
        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-2 text-secondary">Quick Links</h3>
          <ul className="space-y-1 text-sm">
            <li>
              <button
                onClick={() => handleScrollLink("home")}
                className="cursor-pointer hover:text-secondary transition duration-300 bg-transparent border-none outline-none"
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => handleScrollLink("about-us")}
                className="cursor-pointer hover:text-secondary transition duration-300 bg-transparent border-none outline-none"
              >
                About
              </button>
            </li>
            <li>
              <button
                onClick={() => handleScrollLink("services")}
                className="cursor-pointer hover:text-secondary transition duration-300 bg-transparent border-none outline-none"
              >
                Our Services
              </button>
            </li>
          </ul>
        </div>

        {/* Our Services */}
        <div>
          <h3 className="font-semibold mb-2 text-secondary">Our Services</h3>
          <ul className="space-y-1 text-sm">
            <li>Health Check</li>
            <li>Consultation</li>
            <li>Telemedicine</li>
          </ul>
        </div>

        {/* Our Clinics */}
        <div>
          <h3 className="font-semibold mb-2 text-secondary">Our Clinics</h3>
          <ul className="space-y-1 text-sm">
            <li>
              <RouterLink
                to="/men-clinic"
                className="hover:text-secondary transition duration-300"
              >
                Men Clinic
              </RouterLink>
            </li>
            <li>
              <RouterLink
                to="/women-clinic"
                className="hover:text-secondary transition duration-300"
              >
                Women Clinic
              </RouterLink>
            </li>
          </ul>
        </div>

        {/* Map & Social Links */}
        <div className="w-full md:w-64 bg-white rounded shadow-md p-4 flex flex-col items-center text-black text-sm">
          <div className="mb-2 w-full text-left">
            <p className="text-gray-700 font-medium">Get Directions</p>
            <div className="mt-1 w-full h-16 bg-gray-200 rounded" />
          </div>
          <div className="flex justify-center space-x-4 mt-2 text-indigo-950">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF className="hover:text-indigo-700 transition duration-300 cursor-pointer" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="hover:text-indigo-700 transition duration-300 cursor-pointer" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="hover:text-indigo-700 transition duration-300 cursor-pointer" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="text-center mt-6 text-pink-600 font-semibold">
        &copy; Prime Medical 2025
      </div>
    </footer>
  );
};

export default Footer;
