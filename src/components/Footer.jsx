import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-indigo-950 text-white pt-8 pb-2 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start text-center md:text-left space-y-8 md:space-y-0 md:space-x-8">
        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-2 text-secondary">Quick Links</h3>
          <ul className="space-y-1 text-sm text-center">
            <li>Home</li>
            <li>About us</li>
            <li>Contact us</li>
          </ul>
        </div>

        {/* Our Services */}
        <div>
          <h3 className="font-semibold mb-2 text-secondary">Our Services</h3>
          <ul className="space-y-1 text-sm text-center">
            <li>Health Check</li>
            <li>Consultation</li>
            <li>Telemedicine</li>
          </ul>
        </div>

        {/* Our Clinics */}
        <div>
          <h3 className="font-semibold mb-2 text-secondary">Our Clinics</h3>
          <ul className="space-y-1 text-sm text-center">
            <li>Men Clinic</li>
            <li>Women Clinic</li>
          </ul>
        </div>

        {/* Widget Area */}
        <div className="w-full md:w-64 bg-white rounded shadow-md p-4 flex flex-col items-center text-black text-sm">
          <div className="mb-2 w-full text-left">
            <p className="text-gray-700 font-medium">Get Directions</p>
            <div className="mt-1 w-full h-16 bg-gray-200 rounded" />
          </div>
          <div className="flex justify-center space-x-4 mt-2 text-indigo-950">
            <FaFacebookF className="hover:text-indigo-700 cursor-pointer" />
            <FaTwitter className="hover:text-indigo-700 cursor-pointer" />
            <FaInstagram className="hover:text-indigo-700 cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Footer Bottom Text */}
      <div className="text-center mt-6 text-pink-600 font-semibold">
        Prime Medical 2025
      </div>
    </footer>
  );
};

export default Footer;
