import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import whyImage from '../assets/why.svg';

const WhyYouNeedIt = () => {
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
          <h2 className="text-xl md:text-2xl font-bold text-[#1E0C42] text-[26px] mb-8 leading-loose max-w-xl">
            Our Men Clinic is designed to support your wellness journey—whether you're facing fatigue, hormonal changes, muscle tension, or just need time to recover and recharge.
          </h2>

          <p className="text-gray-700 text-sm mb-8 leading-loose">
            Modern men face unique health challenges—stress, fatigue, hormonal imbalance, and physical strain from work or workouts. The Men Clinic at Washington Prime is designed specifically to address these concerns with personalized, science-based treatments. Whether you’re dealing with low energy, muscle tension, or age-related changes, our expert team provides the care you need to stay strong, focused, and in control.
          </p>
          <p className="text-gray-700 text-sm leading-loose">
            We go beyond quick fixes by offering targeted therapies that support long-term wellness—physically and mentally. From hormone support and performance recovery to stress relief and muscle therapy, our clinic is a safe, private space for men to recharge, rebuild, and return to life at their peak.
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
                  ? '1. Restore Physical Strength and Energy'
                  : idx === 1
                  ? '2. Support Hormonal Balance Naturally'
                  : idx === 2
                  ? '3. Reduce Stress and Muscle Tension'
                  : '4. Improve Mental Clarity and Confidence'}
              </h3>
              <p className="text-gray-700 text-sm leading-loose">
                {idx === 0
                  ? 'Fatigue can slow you down and affect your performance. Our treatments help boost stamina and restore your body’s natural energy levels.'
                  : idx === 1
                  ? 'Low testosterone can impact mood, strength, and focus. We offer personalized, non-invasive therapies to help balance hormones and improve overall vitality.'
                  : idx === 2
                  ? 'Chronic stress and tight muscles can lead to discomfort and poor posture. Our hands-on therapies relax the body and ease physical tension effectively.'
                  : 'Mental fog and low self-esteem can interfere with daily life. We help you feel clear-headed, focused, and confident in your body and mind.'}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyYouNeedIt;
