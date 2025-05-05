import React from 'react';
import menImage from '../assets/menheader.svg';

const MenHeader = () => {
  return (
    <section className="bg-[#D7E1E2] px-6 py-12 md:py-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        
        {/* Text Section */}
        <div className="md:w-1/2">
          <h4 className="text-tertiary font-segoe font-semibold mb-2 text-lg">Men Clinic</h4>
          <h1 className="text-2xl md:text-3xl font-bold text-indigo-950 mb-4">
            Lorem ipsum dolor sit amet consectetur. At fringilla placerat cursus venenatis. Neque aliquet sed amet tellus auctor amet scelerisque mauris.
          </h1>
          <p className=" md:w-[80%] text-[#1E0C42] text-justify text-sm font-work font-[400] leading-relaxed">
            Lorem ipsum dolor sit amet consectetur. Lacus consectetur imperdiet amet proin morbi hac. At tristique tempus fusce id enim sapien vulputate. 
            Purus sapien vel ipsum bibendum et bibendum enim id. Ipsum cum suspendisse massa dui turpis sodales quam porta id. 
            Velt purus vestibulum et mauris commodo dictumst. Euismod vitae pellentesque lectus massa. 
            Id at malesuada nibh venenatis pretium platea amet eu sed.
          </p>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2">
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
