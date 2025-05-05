import React from 'react';
import whyImage from '../assets/why.svg'; // Update the path as needed

const WhyYouNeedIt = () => {
  return (
    <section className="bg-white">
      {/* Header */}
      <div className="bg-indigo-950 text-white py-4 text-center text-lg font-semibold">
        WHY YOU NEED IT?
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Left Text Block */}
        <div>
        <h2 className="text-xl md:text-2xl font-bold text-[#1E0C42] text-[26px] mb-8 leading-loose max-w-xl">
        Lorem ipsum dolor sit amet consectetur. At fringilla placerat cursus venenatis. Neque aliquet sed amet tellus auctor amet scelerisque mauris.
        </h2>

          <p className="text-gray-700 text-sm mb-8 leading-loose">
            Lorem ipsum dolor sit amet consectetur. Lacus consectetur imperdiet amet proin morbi hac. At tristique tempus fusce id enim sapien vulputate.
            Purus sapien vel ipsum bibendum et bibendum enim id. Ipsum cum suspendisse massa dui turpis sodales quam porta id.
            Velt purus vestibulum et mauris commodo dictumst. Euismod vitae pellentesque lectus massa. Id at malesuada nibh venenatis pretium platea amet eu sed.
          </p>
          <p className="text-gray-700 text-sm leading-loose">
            Lorem ipsum dolor sit amet consectetur. Lacus consectetur imperdiet amet proin morbi hac. At tristique tempus fusce id enim sapien vulputate.
            Purus sapien vel ipsum bibendum et bibendum enim id. Ipsum cum suspendisse massa dui turpis sodales quam porta id.
            Velt purus vestibulum et mauris commodo dictumst.
          </p>
        </div>

        {/* Center Image */}
        <div className="flex justify-center items-center">
          <img
            src={whyImage}
            alt="Why You Need It"
            className="rounded-lg w-full h-auto object-cover"
          />
        </div>

        {/* Right Clinic List */}
        <div className="space-y-8">
          {Array(4).fill().map((_, idx) => (
            <div key={idx}>
              <h3 className="font-semibold text-[#1E0C42] text-[26px] mb-1">Men Clinic</h3>
              <p className="text-gray-700 text-sm leading-loose">
                Lorem ipsum dolor sit amet consectetur. Lacus consectetur imperdiet amet proin morbi hac. At tristique tempus fusce id enim sapien vulputate.
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyYouNeedIt;
