import React from 'react';
import { motion } from 'framer-motion';

const coreValues = [
  {
    title: "Adventure Awaits",
    description: "Explore breathtaking destinations and immerse yourself in unforgettable experiences.",
    icon: "🌍",
  },
  {
    title: "Customer First For Us",
    description: "We prioritize your journey and create tours that perfectly match with your taste and preferences.",
    icon: "🏖️",
  },
  {
    title: "Sustainable Travel",
    description: "We promote eco-friendly tourism to preserve our planet's ecosystem for our future generations.",
    icon: "🌱",
  },
  {
    title: "Safety With Comfort",
    description: "We ensure your safety with comfort and  offering secure safe and hassle-free travel experiences.",
    icon: "🛡️",
  },
];

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





    
   
    
    const CoreValues = () => {
      return (
        <section className="pt-14 pb-20 relative overflow-hidden">
          {/* Parallax Background Image */}
          <div 
            className="absolute top-0 left-0 brightness-50 w-full h-full bg-cover bg-center  md:bg-fixed"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1622957404515-e3cf1899f82d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}
          ></div>
    
          <div className="max-w-7xl mx-auto px-6  relative z-10">
         <div className='mb-8'>
         <motion.div 
    initial="hidden"
    whileInView="visible" // Only animates the first time it comes into view
    variants={fadeInUpVariants}
    viewport={{ once: false, amount: 0.9 }}
  >
    <h2 className="text-[clamp(2rem,5vw,3rem)] text-center font-extrabold text-white uppercase">
      WHY TRAVEL WITH US
    </h2>
  </motion.div>
          <p className="text-base sm:text-lg md:text-xl text-white text-center  max-w-2xl mx-auto">
              At <span className="font-semibold">ExploreMore</span>, we’re committed to making your journey unforgettable.
            </p>
         </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8 px-6 ">
              {coreValues.map((value, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow"
                >
                  <div className="text-5xl mb-4 text-blue-500">{value.icon}</div>
                  <h3 className="text-2xl font-semibold mb-3 h-16 ">{value.title}</h3>
                  <p className="text-gray-600 text-balance text-left">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      );
    };
    
    export default CoreValues;
    


