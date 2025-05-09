import React from "react";
import { motion } from "framer-motion";
import choose from "../assets/choose.svg";

// Animation Variants
const fromTop = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const fromBottom = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const fromLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const fromRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const WhyChooseUs = () => {
  return (
    <div className="relative bg-gray px-4 pb-14 md:pb-32">
      <div className="max-w-[1600px] mx-auto">
        {/* Title */}
        <div
          initial="hidden"
          whileInView="visible"
          variants={fromLeft}
          className="lg:w-[40%] font-semibold bg-[#2f1b57] text-secondary px-6 py-3 mt-0 text-lg mb-16 md:mb-24"
        >
          Why Choose Us?
        </div>

        {/* Responsive Layout */}
        <div className="mt-6 relative">
          {/* Mobile Layout */}
          <motion.div
            initial="hidden"
            whileInView="visible"

            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center lg:hidden"
          >
            <Card number="01" title="Men Clinic" variant={fromBottom} des="At Washington Prime, we tailor every treatment to your unique skin, health goals, and lifestyle—no matter your gender or background." />
            <Card number="02" title="Women Clinic" variant={fromBottom} des="At Washington Prime, we tailor every treatment to your unique skin, health goals, and lifestyle—no matter your gender or background." />
            <Card number="03" title="Child Care" variant={fromBottom} des="Your comfort and privacy are our priority. Our space is welcoming, inclusive, and designed to make you feel at ease from the moment you arrive."/>
            <Card number="04" title="Specialists" variant={fromBottom} des="Our experienced team combines medical knowledge with aesthetic care to deliver real results that help you feel confident, healthy, and renewed."/>
          </motion.div>

          {/* Desktop Layout */}
          <div className="hidden lg:flex justify-center relative">
            {/* Central Image */}
            <motion.img
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
  
              transition={{ duration: 0.6 }}
              src={choose}
              alt="Session"
              className="w-[400px] h-[600px] object-cover rounded-t-full z-10"
            />

            {/* Cards Positioned Around the Image */}
            <motion.div
              variants={fromLeft}
              initial="hidden"
              whileInView="visible"
  
              className="absolute top-[5%] left-[16%] z-20"
            >
              <Card number="01" title="Personalized Treatments for Every Body" des="At Washington Prime, we tailor every treatment to your unique skin, health goals, and lifestyle—no matter your gender or background." />
            </motion.div>

            <motion.div
              variants={fromRight}
              initial="hidden"
              whileInView="visible"
  
              className="absolute top-[5%] right-[16%] z-20"
            >
              <Card number="02" title="Comfortable and Confidential Environment" des="Your comfort and privacy are our priority. Our space is welcoming, inclusive, and designed to make you feel at ease from the moment you arrive." />
            </motion.div>

            <motion.div
              variants={fromLeft}
              initial="hidden"
              whileInView="visible"
  
              className="absolute bottom-[-10%] left-[16%] z-20"
            >
              <Card number="03" title="Modern, Non-Invasive Technology" des="We use the latest in regenerative medicine and skincare technology to ensure safe, effective results with minimal downtime." />
            </motion.div>

            <motion.div
              variants={fromRight}
              initial="hidden"
              whileInView="visible"
  
              className="absolute bottom-[-10%] right-[16%] z-20"
            >
              <Card number="04" title="Trusted Experts in Skin and Wellness" des="Our experienced team combines medical knowledge with aesthetic care to deliver real results that help you feel confident, healthy, and renewed." />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Card = ({ number, title, variant = fromBottom, des }) => (
  <motion.div
    variants={variant}
    className="bg-[#2D0B5C] text-white rounded-br-[30px] p-6 md:p-8 w-[340px] relative shadow-2xl"
  >
    <div className="absolute -top-6 -left-6 bg-white text-black text-xl font-bold rounded-bl-[20px] rounded-br-[20px] px-5 py-2 shadow">
      {number}
    </div>
    <h3 className="text-tertiary font-segoe font-semibold text-lg mb-3">
      {title}
    </h3>
    <p className="text-base text-[15px] font-work font-[300] text-[#AEC7E8] leading-relaxed text-justify">
      {des}
    </p>
  </motion.div>
);

export default WhyChooseUs;
