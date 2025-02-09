import React from "react";
import Reel from '../components/reel'
import { motion } from 'framer-motion';

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

const Affiliations = () => {
  return (
   <div className=" py-8">
         <div className='mb-8'>
         <motion.div 
    initial="hidden"
    whileInView="visible" // Only animates the first time it comes into view
    variants={fadeInUpVariants}
    viewport={{ once: false, amount: 0.9 }}
  >
    <h2 className="text-[clamp(2rem,5vw,3rem)] text-center font-extrabold text-gray-800 uppercase">
     OUR AFFILIATION
    </h2>
  </motion.div>
        <p className="text-base sm:text-lg md:text-xl text-gray-600 text-center leading-tight max-w-2xl px-3 md:mx-auto ">
    Our affiliation with esteemed organizations allows us to provide unparalleled travel services.
  </p>
       </div>
    <Reel />
   </div>
  );
};

export default Affiliations;
