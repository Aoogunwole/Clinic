import React from 'react';
import background from '../assets/contact.svg';

const Contact = () => {
  return (
    <div
      className="relative w-full h-[70vh] bg-cover bg-center bg-fixed flex items-center justify-center"
      style={{ backgroundImage: `url(${background})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60 z-0"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-white text-2xl md:text-3xl font-semibold mb-6">
          Unlock Your Peak Performance at Washington Prime Medical
        </h1>
        <button className="bg-secondary text-primary font-medium px-6 py-3 rounded-md shadow-md hover:bg-blue-200 transition">
          Call +234-xxx-xxxx-xxxx for enquiries
        </button>
      </div>
    </div>
  );
};

export default Contact;
