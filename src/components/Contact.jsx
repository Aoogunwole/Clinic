import React from 'react';
import background from '../assets/contact.svg';

const Contact = () => {
  return (
    <div
      id="contact"
      className="relative w-full h-[70vh] bg-cover bg-center bg-fixed flex items-center justify-center"
      style={{ backgroundImage: `url(${background})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60 z-0"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 flex flex-col justify-center items-center">
        <h1 className="text-white text-2xl md:text-3xl font-semibold">
          Rejuvenate, Restore, and Thrive at Washington Prime Medical
        </h1>
        <p className='max-w-3xl text-[#F0077B] text-[18px] font-semibold pt-2 pb-5'>Experience personalized care in regenerative medicine and skin wellness designed to help you feel and look your absolute best.</p>
        <a href="tel:+234xxxxxxxxxx">
          <button className="bg-secondary text-primary font-medium px-6 py-3 rounded-md shadow-md hover:bg-blue-200 transition">
            Call +234-xxx-xxxx-xxxx for enquiries and Appointments
          </button>
        </a>

      </div>
    </div>
  );
};

export default Contact;
