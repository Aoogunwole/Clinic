import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import about1 from "../assets/about1.svg";
import about2 from "../assets/about2.svg";
import about3 from "../assets/about3.svg";

const AboutUs = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div  id="about-us" className="">
      <div className="font-semibold lg:hidden bg-[#2f1b57] text-secondary px-6 py-3 text-lg">
        About us
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr]">
        {/* Left - Images */}
        <div className="order-2 lg:order-1">
          <div className="hidden lg:block bg-[#2f1b57] text-secondary px-6 py-3 text-lg font-semibold">
            About us
          </div>

          <div className="grid grid-cols-2 gap-4 p-6">
            <img
              data-aos="fade-up"
              src={about1}
              alt="Lab tools"
              className="w-full max-h-[140px] object-cover rounded shadow"
            />
            <img
              data-aos="fade-up"
              data-aos-delay="100"
              src={about2}
              alt="Doctor"
              className="w-full max-h-[140px] object-cover rounded shadow"
            />
            <img
              data-aos="fade-up"
              data-aos-delay="200"
              src={about3}
              alt="Injection"
              className="col-span-2 w-full max-h-[150px] object-cover rounded shadow"
            />
          </div>
        </div>

        {/* Right - Text Content */}
        <div
         
          className="p-6 space-y-4 order-1 lg:order-2 lg:pr-10"
          data-aos="fade-right"
        >
          <h2 className="text-[#ec0070] text-2xl font-semibold">
            At Washington Prime Medical Services, we care for your skin, your health, your confidence.
          </h2>
          <p className="text-gray-700 leading-relaxed text-justify">
             Our clinic is built on years of medical expertise, combining modern regenerative medicine with advanced skin care techniques. From our trained professionals to our state-of-the-art equipment, every detail is focused on giving you quality care that works.
          </p>
          <div className="flex justify-center" data-aos="fade-up" data-aos-delay="100">
            <div className="border-r-4 border-[#ec0070] pr-6">
              <p className="text-center italic text-gray-800 font-semibold max-w-xl leading-loose">
                “We believe true beauty begins with healthy skin, advanced science, compassionate care, and treatments that bring out your natural glow.”
              </p>
            </div>
          </div>
          <p className="text-gray-700 leading-relaxed text-justify">
            Whether you’re dealing with acne, wrinkles, uneven tone, or simply want to feel renewed from the inside out, Washington Prime Medical Services is here to help. Our personalized treatments are designed to support your skin and body’s natural healing process. With us, your wellness journey is in expert hands—your glow, confidence, and vitality fully restored.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
