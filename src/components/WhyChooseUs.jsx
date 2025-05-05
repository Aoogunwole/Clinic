import React from "react";
import choose from '../assets/choose.svg';

const WhyChooseUs = () => {
  return (
    <div className="relative bg-gray px-4 pb-24 md:pb-32">
      <div className="max-w-[1600px] mx-auto">
        {/* Title */}
        <div className="lg:w-[40%] font-semibold bg-[#2f1b57] text-secondary px-6 py-3 text-lg mb-2">
          Why Choose Us?
        </div>

        {/* Responsive Layout */}
        <div className="mt-6 relative">
          {/* Mobile Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center lg:hidden">
            <Card number="01" title="Men Clinic" />
            <Card number="02" title="Women Clinic" />
            <Card number="03" title="Child Care" />
            <Card number="04" title="Specialists" />
            </div>

          {/* Desktop Layout */}
          <div className="hidden lg:flex justify-center relative">
            {/* Central Image */}
            <img
              src={choose}
              alt="Session"
              className="w-[400px] h-[600px] object-cover rounded-t-full z-10"
            />

            {/* Cards Positioned Around the Image */}
            <div className="absolute top-[5%] left-[16%] z-20">
              <Card number="01" title="Men Clinic" />
            </div>
            <div className="absolute top-[5%] right-[16%] z-20">
              <Card number="02" title="Women Clinic" />
            </div>
            <div className="absolute bottom-[-10%] left-[16%] z-20">
              <Card number="03" title="Child Care" />
            </div>
            <div className="absolute bottom-[-10%] right-[16%] z-20">
              <Card number="04" title="Specialists" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Card = ({ number, title }) => (
  <div className="bg-[#2D0B5C] text-white rounded-br-[30px] p-6 md:p-8 w-[340px] relative shadow-2xl">
    <div className="absolute -top-6 -left-6 bg-white text-black text-xl font-bold rounded-bl-[20px] rounded-br-[20px] px-5 py-2 shadow">
      {number}
    </div>
    <h3 className="text-tertiary font-segoe font-semibold text-xl mb-3">{title}</h3>
    <p className="text-base text-[18px] font-work font-[300] text-[#AEC7E8] leading-relaxed text-justify">
      Lorem ipsum dolor sit amet consectetur. Lacus consectetur imperdiet amet
      proin morbi hac. At tristique tempus fusce id enim sapien vulputate.
    </p>
  </div>
);

export default WhyChooseUs;
