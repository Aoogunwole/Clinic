import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import menImage from '../assets/menheader.svg';

const MenHeader = () => {
  const [aosAnimation, setAosAnimation] = useState('fade-up');

  useEffect(() => {
    if (window.innerWidth >= 768) {
      setAosAnimation('fade-left');
    } else {
      setAosAnimation('fade-up');
    }
    AOS.init({ duration: 1200, easing: 'ease-in-out' });
  }, []);


  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="bg-[#D7E1E2] px-6 py-12 md:py-20 mt-[80px]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        
        {/* Text Section */}
        <div className="md:w-1/2" data-aos="fade-right">
          <h4 className="text-tertiary font-segoe font-semibold mb-2 text-lg">Men Clinic</h4>
          <h1 className="text-2xl md:text-3xl font-bold text-indigo-950 mb-4">
            Our specialists provide targeted therapy for pain relief and functional recovery. Treatments are evidence-based, non-invasive, and tailored to your condition.
          </h1>
          <p className="md:w-[80%] text-[#1E0C42] text-justify text-sm font-work font-[400] leading-relaxed">
            At Washington Prime Medical, we offer expert musculoskeletal and physical therapy care designed to relieve pain, improve mobility, and enhance recovery—whether from injury, joint strain, or chronic conditions.
            Our licensed therapists use a hands-on, personalized approach to help restore strength, flexibility, and balance. Whether you’re an athlete, a professional, or simply want to move with more ease, we tailor every session to meet your unique needs and goals.
          </p>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2" data-aos={aosAnimation}>
      <img
        src={menImage}
        alt="Men Clinic Therapy"
        className="rounded-lg w-full object-cover"
      />
    </div>
      </div>
    </section>
  );
};

export default MenHeader;
