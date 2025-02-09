import React, { useState } from "react";
import { FaTimes, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import image1 from "../assets/gallery/1.jpg";
import image2 from "../assets/gallery/2.jpg";
import image3 from "../assets/gallery/3.jpg";
import image4 from "../assets/gallery/4.jpg";
import image5 from "../assets/gallery/5.jpg";
import image6 from "../assets/gallery/6.jpg";
import image7 from "../assets/gallery/7.jpg";
import image8 from "../assets/gallery/8.jpg";
import image9 from "../assets/gallery/9.jpg";
import image10 from "../assets/gallery/9.jpg";
import image11 from "../assets/gallery/10.jpg";
import image12 from "../assets/gallery/11.jpg";
import image13 from "../assets/gallery/12.jpg";
import image14 from "../assets/gallery/13.jpg";
import image15 from "../assets/gallery/14.jpg";
import image16 from "../assets/gallery/16.jpg";
import image17 from "../assets/gallery/17.jpg";
import image18 from "../assets/gallery/18.jpg";
import image19 from "../assets/gallery/19.jpg";
import image20 from "../assets/gallery/20.jpg";

import { motion } from 'framer-motion';



const Gallery = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [transitioning, setTransitioning] = useState(false);


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

  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
    image12,
    image13,
    image14,
    image15,
    image16,
    image17,
    image18,
    image19,
    image20,
  
  

  ];

  const openModal = (index) => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const nextSlide = () => {
    if (transitioning) return;
    setTransitioning(true);

    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    if (transitioning) return;
    setTransitioning(true);

    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleTransitionEnd = () => {
    setTransitioning(false);
  };

  return (
    <div className="max-w-6xl mx-auto px-auto  pt-10">
      {/* Heading and Paragraph */}
      <div className="text-center mb-8">
      <motion.div 
    initial="hidden"
    whileInView="visible" // Only animates the first time it comes into view
    variants={fadeInUpVariants}
    viewport={{ once: false, amount: 0.9 }}
  >
    <h2 className="text-[clamp(2rem,5vw,3rem)] text-center font-extrabold text-gray-800 uppercase">
     OURGALLERY
    </h2>
  </motion.div>
        <p className="text-base sm:text-lg md:text-xl text-gray-600 text-center  max-w-2xl px-4 md:mx-auto">
          Explore our collection of stunning images, showcasing moments of beauty and creativity.
        </p>
      </div>

      {/* Gallery G
      rid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4  lg:grid-cols-5 gap-4">
        {images.map((image, index) => (
          <div key={index} className="relative cursor-pointer">
            <img
              src={image}
              alt={`Gallery ${index + 1}`}
              className="w-full h-auto object-cover rounded-lg"
              onClick={() => openModal(index)}
            />
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
          <div className="relative bg-white p-4 rounded-lg w-[90%] sm:max-w-[600px] h-auto sm:h-[90%] flex flex-col justify-center items-center overflow-hidden">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white bg-black rounded-full p-2 sm:p-3 focus:outline-none z-10"
              aria-label="Close"
            >
              <FaTimes size={20} />
            </button>

            {/* Image Carousel */}
            <div className="relative w-full h-full flex items-center overflow-hidden">
              {/* Previous Button */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black text-white p-3 rounded-full focus:outline-none hover:scale-110 transition-transform z-10"
                aria-label="Previous"
              >
                <FaArrowLeft size={20} />
              </button>

              {/* Slide Effect */}
              <div
                className="w-full h-full flex justify-center items-center overflow-hidden"
                onTransitionEnd={handleTransitionEnd} // Reset transition on end
              >
                <div
                  className="w-full h-full flex transition-transform duration-700 ease-in-out"
                  style={{
                    transform: `translateX(-${currentImageIndex * 100}%)`,
                  }}
                >
                  {images.map((image, index) => (
                    <div key={index} className="w-full flex-shrink-0 h-full">
                      <img
                        src={image}
                        alt={`Slide ${index + 1}`}
                        className="w-full h-full object-fill rounded-lg"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Next Button */}
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black text-white p-3 rounded-full focus:outline-none hover:scale-110 transition-transform z-10"
                aria-label="Next"
              >
                <FaArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
