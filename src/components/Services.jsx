import React from 'react';
import service1 from '../assets/service1.svg';
import service2 from '../assets/service2.svg';
import service3 from '../assets/service3.svg';
import service4 from '../assets/service4.svg';
import service5 from '../assets/service5.svg';
import service6 from '../assets/service6.svg';

const services = [
  {
    title: "Facial and Skin Rejuvenation",
    text: `Microneedling and PRP treatment. It is often used to treat acne scars, fine lines, and other skin imperfections.Microneedling and PRP treatment. It is often used to treat acne scars, fine lines, and other skin imperfections.Microneedling and PRP treatment. It is often used to treat acne scars, fine lines, and other skin imperfections.Microneedling and PRP treatment. It is often used to treat acne scars, fine lines, and other skin imperfections.`,
    images: [service1, service2, service3],
    reverse: false,
  },
  {
    title: "Knee pain and arthritis",
    text: `Don’t let knee pain slow you down—whether it’s arthritis, injury, or chronic discomfort, our expert team offers the latest non-surgical treatments to help you move pain-free
Don’t let knee pain slow you down—whether it’s arthritis, injury, or chronic discomfort, our expert team offers the latest non-surgical treatments to help you move pain-free
Don’t let knee pain slow you down—whether it’s arthritis, injury, or chronic discomfort, our expert team offers the latest non-surgical treatments to help you move pain-free
`,
    images: [service4, service5, service6],
    reverse: true,
  },
  {
    title: "Urinary Leakage",
    text: `Urinary incontinence refers to the involuntary leakage of urine, a condition that can affect people of all ages and genders but is particularly common among women. Leakage occurs during physical activities that increase abdominal pressure, such as coughing, sneezing, laughing, or exercising.Urinary incontinence refers to the involuntary leakage of urine, a condition that can affect people of all ages and genders but is particularly common among women. Leakage occurs during physical activities that increase abdominal pressure, such as coughing, sneezing, laughing, or exercising.`,
    images: [service4, service5, service6],
    reverse: false,
  },
];

export default function Services() {
  return (
    <div className="bg-white w-full ">
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
          <div className="w-full md:w-1/2 order-1 md:order-2">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              {service.title}
            </h3>
            <div className="border-l-4 border-pink-500 pl-4 text-justify text-gray-700 leading-relaxed text-sm">
              {service.text}
            </div>
          </div>

          {/* Image Section */}
          <div className="relative w-full md:w-1/2 max-w-md mx-auto order-2 md:order-1">
            {/* Small screen layout */}
            <div className="flex md:hidden w-full gap-2 justify-center">
              <img
                src={service.images[0]}
                alt="img1"
                className="w-32 h-48 object-cover shadow"
              />
              <div className="flex flex-col gap-2 h-48 justify-between">
                <img
                  src={service.images[1]}
                  alt="img2"
                  className="w-32 h-24 object-cover shadow"
                />
                <img
                  src={service.images[2]}
                  alt="img3"
                  className="w-32 h-24 object-cover shadow"
                />
              </div>
            </div>

            {/* Medium and larger screen layout */}
            <div className="hidden md:flex gap-4 w-full justify-center">
              <img
                src={service.images[0]}
                alt="img1"
                className="w-60 h-80 object-cover shadow"
              />
              <img
                src={service.images[1]}
                alt="img2"
                className="w-40 h-40 object-cover shadow"
              />
            </div>

            <div className="hidden md:block absolute -bottom-4 left-[80%] -translate-x-1/2 w-80">
              <img
                src={service.images[2]}
                alt="img3"
                className="w-full h-40 object-cover shadow"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
