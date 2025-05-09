import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import service1 from '../assets/service1.svg';
import service2 from '../assets/service2.svg';
import service3 from '../assets/service3.svg';
import service4 from '../assets/service4.svg';
import service5 from '../assets/service5.svg';
import service6 from '../assets/service6.svg';


const services = [
  {
    title: "Facial and Skin Rejuvenation",
    text: `Restore your skin’s natural beauty with our advanced facial treatments. At Washington Prime, we offer microneedling, PRP therapy, and other innovative skin solutions that help reduce acne scars, smooth fine lines, and improve overall texture. Whether you're looking to fight signs of aging or simply brighten dull skin, our personalized care helps you achieve a youthful, radiant glow—safely, naturally, and with visible results you’ll love.`,
    images: [service1, service2, service3],
    reverse: false,
  },
  {
    title: "Knee pain and arthritis",
    text: `Don’t let joint pain keep you from enjoying life. Whether it’s caused by arthritis, injury, or inflammation, our non-surgical therapies help relieve pain, reduce swelling, and restore mobility. At Washington Prime, we focus on improving joint health through targeted treatments that support healing naturally. With a personalized approach to pain management, we’re here to help you move easier, feel stronger, and get back to doing the things you love.
`,
    images: [service4, service5, service6],
    reverse: true,
  },
  {
    title: "Urinary Leakage",
    text: `Urinary incontinence is a common condition that can affect your comfort, confidence, and quality of life. It often occurs during daily activities like laughing, coughing, or exercising—especially among women. At Washington Prime, we provide discreet, non-invasive treatments that strengthen the pelvic floor and improve bladder control. Our compassionate team creates customized care plans to help you regain control, reduce leakage, and feel like yourself again—without surgery or downtime.`,
    images: [service4, service5, service6],
    reverse: false,
  },
];

export default function Services() {

  useEffect(() => {
  AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true, // animate only once
  });
}, []);


  return (
    <div id="services" className="bg-white w-full ">
      <div className="md:w-[40%] font-semibold bg-[#2f1b57] text-secondary px-6 py-3 text-lg ">
        Our Services
      </div>

{services.map((service, idx) => (
  <div
    key={idx}
    className={`mt-12 mb-16 px-4 md:px-6 flex flex-col md:flex-row ${
      service.reverse ? 'md:flex-row-reverse' : ''
    } items-center justify-center gap-10`}
  >
    {/* Text Content */}
    <div
      className="w-full md:w-1/2 order-1 md:order-2"
      data-aos={service.reverse ? 'fade-right' : 'fade-right'}
    >
      <h3 className="text-xl font-semibold text-gray-900 mb-3">
        {service.title}
      </h3>
      <div className="border-l-4 border-pink-500 pl-4 text-justify text-gray-700 leading-relaxed text-sm">
        {service.text}
      </div>
    </div>

    {/* Image Section */}
    <div
      className="relative w-full md:w-1/2 max-w-md mx-auto order-2 md:order-1"
      data-aos="zoom-in-up"
    >
      {/* Small screen layout */}
      <div className="md:hidden flex flex-col items-center gap-4">
        {/* First Image stays in place (left column) */}
        <div className="w-64 h-64">
          <img
            src={service.images[0]}
            alt="img1"
            className="w-full h-full object-cover shadow"
            data-aos="fade-up"
          />
        </div>
        {/* Second Image below the first one */}
        <div className="w-64 h-32">
          <img
            src={service.images[1]}
            alt="img2"
            className="w-full h-full object-cover shadow"
            data-aos="fade-left"
          />
        </div>
      </div>

      {/* Medium and larger screen layout */}
      <div className="hidden md:flex gap-6 w-full justify-center relative">
        <div className="w-48 h-64 relative">
          <img
            src={service.images[0]}
            alt="img1"
            className="w-full h-full object-cover shadow"
            data-aos="flip-left"
          />
        </div>
        <div className="w-32 h-32 relative">
          <img
            src={service.images[1]}
            alt="img2"
            className="w-full h-full object-cover shadow"
            data-aos="flip-right"
          />
        </div>
        {/* Absolute positioning for third image on large screens only */}
        <div
          className="absolute bottom-[-25px] left-[45%] -translate-x-1/2 w-64 h-32"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <img
            src={service.images[2]}
            alt="img3"
            className="w-full h-full object-cover shadow"
          />
        </div>
      </div>
    </div>
  </div>
))}









    </div>
  );
}
