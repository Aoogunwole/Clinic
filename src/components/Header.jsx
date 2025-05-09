import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import man from "../assets/man.svg";
import woman from "../assets/woman.svg";
import mancli from "../assets/Mancli.svg";
import womancli from "../assets/womancli.svg";
import { Link } from "react-scroll";

const Header = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div id="home" className="pt-[80px]">
      <div className="bg-gray px-4 md:px-0 md:pl-2 md:pr-4 py-12 rounded-lg">
        <div className="relative grid md:grid-cols-2 items-stretch">
          {/* Left Section */}
          <div
            className="flex flex-col justify-between h-full z-10 relative md:-mr-16 pr-4"
            data-aos="fade-right"
          >
            <div className="lg:translate-x-28">
              <h2 className="text-2xl md:text-3xl font-segoe font-bold text-[#1f2937] mb-4">
                Look Refreshed. Feel Rejuvenated. Love Yourself.
              </h2>
              <div className=" mb-8 text-[#140320]/50">
                <p className=" font-work text-[16px] leading-relaxed">
                  At Washington Prime Medical Services, we help people look
                  fresh, feel confident, and glow naturally. Our expert team
                  uses safe, modern treatments like facials, microneedling, and
                  advanced skin therapies to smooth, brighten, and renew your
                  skin. We also offer regenerative care like PRP and stem cell
                  treatments to boost your body’s natural healing power.
                </p>

                <p className="font-semibold">
                  Let’s bring out the best in your skin—gently and effectively.
                </p>
              </div>

              <div
                className="flex gap-4 mb-6"
                data-aos="zoom-in"
                data-aos-delay="200"
              >
                <Link to="contact" smooth={true} duration={500}>
                <button className="bg-tertiary hover:bg-[#db2777] text-white font-semibold py-2 md:py-4 px-6 md:px-10 rounded-lg shadow">
                  Contact us Now !
                </button>
                </Link>

                <Link to="services" smooth={true} duration={500}>
                  <button className="bg-secondary hover:bg-[#93c5fd] text-[#1f2937] font-semibold py-2 md:py-4 px-6 md:px-10 rounded-lg shadow">
                    Explore Our Services
                  </button>
                </Link>
              </div>
            </div>
            <img
              src={woman}
              alt="Facial treatment"
              className="rounded-lg object-cover w-full max-h-[300px] md:max-h-[250px] mt-4 hidden md:block"
              data-aos="fade-right"
              data-aos-delay="400"
            />
          </div>

          {/* Right Section */}
          <div
            className="w-full h-full pl-4 hidden md:block"
            data-aos="fade-left"
          >
            <img
              src={man}
              alt="Face mask"
              className="rounded-lg object-cover w-full h-full max-h-[600px]"
            />
          </div>
        </div>

        {/* Mobile Images */}
        <div
          className="flex justify-center items-center gap-4 mt-6 md:hidden"
          data-aos="fade-up"
        >
          <img
            src={mancli}
            alt="Small screen image 1"
            className="w-1/2 rounded-lg object-cover"
          />
          <img
            src={womancli}
            alt="Small screen image 2"
            className="w-1/2 rounded-lg object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
