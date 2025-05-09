import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import whyImage from '../assets/why.svg'; // Adjust path if needed

const WomenWhyYouNeedIt = () => {
   const [enableAnimation, setEnableAnimation] = useState(true);
  
    useEffect(() => {
      const isLargeScreen = window.innerWidth >= 768; // md breakpoint
      setEnableAnimation(isLargeScreen);
  
      if (isLargeScreen) {
        AOS.init({ duration: 1200, easing: 'ease-in-out' });
      }
    }, []);
  

  return (
     <section className="bg-white">
          {/* Header */}
          <div
            className="bg-indigo-950 text-white py-4 text-center text-lg font-semibold"
            {...(enableAnimation ? { 'data-aos': 'fade-down' } : {})}
          >
            WHY YOU NEED IT?
          </div>
    
          {/* Content */}
          <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Left Text Block */}
            <div {...(enableAnimation ? { 'data-aos': 'fade-right' } : {})}>
              <h2 className="text-xl md:text-2xl font-bold text-[#F0077B] text-[26px] mb-8 leading-loose max-w-xl">
                Our Women Clinic is here to help you restore balance—whether you’re navigating hormonal shifts, stress, fatigue, or simply need time to reconnect with your body and mind.
              </h2>
    
              <p className="text-gray-700 text-sm mb-8 leading-loose">
                Women experience unique changes across different life stages—pregnancy, postpartum, perimenopause, or burnout from daily life. At Washington Prime, our Women Clinic provides personalized care tailored to your body’s needs. With gentle, evidence-based treatments, we’re here to help you feel lighter, stronger, and more in tune with yourself.
              </p>
              <p className="text-gray-700 text-sm leading-loose">
                Our approach blends science with empathy—offering support for physical recovery, hormonal health, and emotional clarity in a safe, nurturing space. Whether you need relief, renewal, or simply a reset, our care is focused on you.
              </p>
            </div>
    
            {/* Center Image */}
            <div
              className="hidden md:flex justify-center items-center"
              {...(enableAnimation ? { 'data-aos': 'zoom-out' } : {})}
            >
              <img
                src={whyImage}
                alt="Why You Need It"
                className="rounded-lg w-full h-auto object-cover"
              />
            </div>
    
            {/* Right Clinic List */}
            <div className="space-y-8" {...(enableAnimation ? { 'data-aos': 'fade-left' } : {})}>
              {Array(4).fill().map((_, idx) => (
                <div key={idx}>
                  <h3 className="font-semibold text-[#1E0C42] text-[20px] mb-1">
                    {idx === 0
                      ? '1.  Ease Hormonal Imbalances'
                      : idx === 1
                      ? '2. Relieve Stress and Restore Calm'
                      : idx === 2
                      ? '3. Support Postpartum and Pelvic Recovery'
                      : '4. Boost Energy and Emotional Resilience'}
                  </h3>
                  <p className="text-gray-700 text-sm leading-loose">
                    {idx === 0
                      ? 'From mood swings to fatigue, hormonal changes can affect how you feel daily. Our therapies help regulate and support hormonal health naturally and safely.'
                      : idx === 1
                      ? 'Chronic stress can impact your energy and emotional well-being. Our calming therapies relax both body and mind to restore a deep sense of balance.'
                      : idx === 2
                      ? 'We provide safe, supportive care for women healing after childbirth or managing pelvic discomfort—strengthening core muscles and restoring mobility.'
                      : 'Our treatments help renew your energy, lift brain fog, and rebuild emotional strength—so you can show up fully for yourself and those you love.'}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
  );
};

export default WomenWhyYouNeedIt;
