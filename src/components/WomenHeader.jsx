import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import womenImage from '../assets/womenheader.svg';

const WomenHeader = () => {
  const [aosAnimation, setAosAnimation] = useState('fade-up');
  
    useEffect(() => {
      if (window.innerWidth >= 7) {
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
          <h4 className="text-tertiary font-segoe font-semibold mb-2 text-lg">Women Clinic</h4>
          <h1 className="text-2xl md:text-3xl font-bold text-indigo-950 mb-4">
            Compassionate care designed for women’s bodies, rhythms, and recovery. Our treatments are gentle, effective, and tailored to support your strength and well-being.
          </h1>
          <p className="md:w-[80%] text-[#1E0C42] text-justify text-sm font-work font-[400] leading-relaxed">
            At Washington Prime Medical, we understand the unique physical challenges women face—from hormonal changes and postnatal recovery to chronic pain and everyday fatigue. Our women-centered therapy focuses on relieving discomfort, improving flexibility, and restoring balance—physically and emotionally.
          </p>
          <p className="md:w-[80%] text-[#1E0C42] text-justify text-sm font-work font-[400] leading-relaxed">
            Using a hands-on, supportive approach, our licensed therapists create safe, personalized sessions that honor your needs. Whether you're a mother, athlete, or professional, we’re here to help you move with grace, strength, and confidence—every step of the way.
          </p>
        </div>
    
        {/* Image Section */}
        <div className="md:w-1/2" data-aos={aosAnimation}>
          <img
            src={womenImage}
            alt="Women Clinic Therapy"
            className="rounded-lg w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default WomenHeader;
