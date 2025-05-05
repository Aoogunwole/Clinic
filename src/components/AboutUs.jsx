import React from "react";
import about1 from "../assets/about1.svg";
import about2 from "../assets/about2.svg";
import about3 from "../assets/about3.svg";

const AboutUs = () => {
  return (
    <div>
      <div className="font-semibold lg:hidden bg-[#2f1b57] text-secondary px-6 py-3 text-lg ">
        About us
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr]">
        <div className="order-2 lg:order-1">
          <div className="hidden lg:block bg-[#2f1b57] text-secondary px-6 py-3 text-lg font-semibold">
            About us
          </div>

          <div className="grid grid-cols-2 gap-4 p-6">
            <img
              src={about1}
              alt="Lab tools"
              className="w-full max-h-[140px] object-cover rounded shadow"
            />
            <img
              src={about2}
              alt="Doctor"
              className="w-full max-h-[140px] object-cover rounded shadow"
            />
            <img
              src={about3}
              alt="Injection"
              className="col-span-2 w-full max-h-[150px] object-cover rounded shadow"
            />
          </div>
        </div>

        <div className="p-6 space-y-4 order-1 lg:order-2 lg:pr-10">
          <h2 className="text-[#ec0070] text-2xl font-semibold">
            Lorem ipsum non pretium integer amet ultrices tortor egestas
            ullamcorper.
          </h2>
          <p className="text-gray-700 leading-relaxed text-justify">
            Lorem ipsum dolor sit amet consectetur. Nunc sed nulla diam vitae
            amet arcu purus a tristique. Nulla non malesuada consequat viverra
            maecenas interdum. Lectus tellus mattis at quisque ut. Sit quam sed
            odio proin et. Dolor id dictum
          </p>
          <div className="flex justify-center">
            <div className="border-r-4 border-[#ec0070] pr-6">
              <p className="text-center italic text-gray-800 font-semibold max-w-xl leading-loose">
                "ed accumsan ornare eget. Libero volutpat pellentesque enim
                sagittis quam faucibus. Mi sed nisl eleifend sagittis purus est
                morbi".
              </p>
            </div>
          </div>

          <p className="text-gray-700 leading-relaxed text-justify">
            sed accumsan ornare eget. Libero volutpat pellentesque enim sagittis
            quam faucibus. Mi sed nisl eleifend sagittis purus est morbi. Risus
            donec sapien tellus arcu massa. Placerat volutpat et molestie nisi.
            Posuere nec sollicitudin quis lobortis tempor. Eu risus in nulla
            felis condimentum posuere. Elementum in et diam nunc integer
            phasellus tortor.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
