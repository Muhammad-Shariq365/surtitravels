import React from 'react';
import {
  FaCar,
  FaGlobe,
  FaHotel,
  FaChurch,
  FaUsers,
  FaBusinessTime,
  FaCity,
  FaTheaterMasks,
} from 'react-icons/fa';
import { FaMosque } from "react-icons/fa";
import { BsFillBalloonHeartFill } from "react-icons/bs";
import { motion } from 'framer-motion';

const fadeFromDirection = (direction, delay) => ({
  hidden: { opacity: 0, x: direction === 'left' ? -50 : 50 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.6, delay, ease: 'easeOut' },
  },
});
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

function App() {
  return (
    <div className="bg-black pt-12 pb-14 text-white flex flex-col justify-center items-center text-center">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading Section */}
        <div className="mb-8">
        <motion.div 
    initial="hidden"
    whileInView="visible" // Only animates the first time it comes into view
    variants={fadeInUpVariants}
    viewport={{ once: false, amount: 0.9 }}
  >
    <h2 className="text-[clamp(2rem,5vw,3rem)] text-center font-extrabold text-white uppercase">
     BESTEST SERVICE IN PAKISTAN
    </h2>
  </motion.div>
          <p className="text-base sm:text-lg md:text-xl text-white text-center leading-tight max-w-2xl mx-auto">
            Surti Tour and Travels, your trusted travel agency in Pakistan, offers
            comprehensive travel services.
          </p>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
          {/* Grid Items */}
          {[
            { Icon: FaGlobe, title: "Adventure Tours", color: "text-blue-500" },
            { Icon: FaCar, title: "Private Tours", color: "text-green-500" },
            { Icon: BsFillBalloonHeartFill, title: "Honeymoon Tours", color: "text-red-500" },
            { Icon: FaMosque, title: "Religious Tours", color: "text-teal-600" },
            { Icon: FaUsers, title: "Group Tours", color: "text-purple-500" },
            { Icon: FaBusinessTime, title: "Corporate Tours", color: "text-orange-500" },
            { Icon: FaCity, title: "City Tours", color: "text-yellow-500" },
            { Icon: FaTheaterMasks, title: "Cultural Tours", color: "text-pink-500" },
          ].map(({ Icon, title, color }, index) => (
            <motion.div
            key={index}
            className="bg-gray-800 p-6 sm:p-8 rounded-md flex flex-col items-center group"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: window.innerWidth < 768 ? 0.3 : 0.9 }}
            variants={fadeFromDirection(index % 2 === 0 ? 'left' : 'right', index * (window.innerWidth < 768 ? 0 : 0.2))}
          >
            <Icon
              className={`w-12 h-12 md:w-16 md:h-16 ${color} mb-4 transition-transform transform group-hover:scale-110`}
            />
            <h2 className="text-lg md:text-xl font-semibold">{title}</h2>
          </motion.div>
          
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
