import React from "react";
import { FaRegHandshake, FaCogs, FaRegSmile, FaRegClock } from "react-icons/fa";
import { motion } from "framer-motion";

const fadeInUpVariants = {
  hidden: { opacity: 0, y:15 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.8, 
      delay: 0.5, // Adjust the delay as needed
      ease: "easeOut",
    },
  },
};

const prideData = [
  {
    title: "Expert Guidance",
    description: "Our expert team takes pride in their thoughtful approach to planning your tour.",
    icon: <FaRegHandshake />,
    bgColor: "bg-gradient-to-r from-blue-400 to-blue-500",
  },
  {
    title: "Desired Services",
    description: "We provide tailored services that perfectly match our clients' needs and preferences.",
    icon: <FaCogs />,
    bgColor: "bg-gradient-to-r from-blue-400 to-blue-500",
  },
  {
    title: "Flexible Payment",
    description: "Affordable prices and secure payment options to make your journey seamless.",
    icon: <FaRegSmile />,
    bgColor: "bg-gradient-to-r from-blue-400 to-blue-500",
  },
  {
    title: "Flexible Planning",
    description: "Personalized plans that cater to your requirements for an unforgettable journey.",
    icon: <FaRegClock />,
    bgColor: "bg-gradient-to-r from-blue-400 to-blue-500",
  },
];

const OurPride = () => {
  return (
    <section className="pb-12  bg-gradient-to-r from-teal-50 to-blue-50 relative">
      {/* Section Header */}
      <div className="text-center mb-8 ">
      <motion.div 
    initial="hidden"
    whileInView="visible" // Only animates the first time it comes into view
    variants={fadeInUpVariants}
    viewport={{ once: false, amount: 0.9 }}
  >
    <h2 className="text-[clamp(2rem,5vw,3rem)] text-center font-extrabold text-gray-800 uppercase">
      WE PUT OUR PRIDE
    </h2>
  </motion.div>
        <p className="text-base sm:text-lg md:text-xl text-gray-600 text-center  max-w-2xl mx-auto">
          Discover why we're trusted by countless travelers around the world.
        </p>
      </div>

      {/* Pride Cards */}
      <div className="container xl:max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-6">
        {prideData.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`relative rounded-lg shadow-lg overflow-hidden ${item.bgColor}`}
          >
            <div className="p-6 text-white text-center">
              <div className="text-6xl mb-4">{item.icon}</div>
              <h3 className="text-2xl  font-extrabold mb-2">{item.title}</h3>
              <p className="text-white text-balance text-center  w-30">{item.description}</p>
            </div>
            <div className="absolute inset-0 bg-black opacity-10 hover:opacity-0 transition-all duration-300"></div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default OurPride;
