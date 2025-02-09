import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';



const HajjHero = ({ headerHeight = 80 }) => {
  const images = [
    "https://i.postimg.cc/Jz8qjv07/mosque-4549602-960-720.jpg",
    "https://i.postimg.cc/9Qpmwpct/kabba2.jpg",
    "https://i.postimg.cc/vmHtNn5p/al-masjid-an-nabawi-7489664.jpg"
  ];

  const texts = [
    "Begin Your Spiritual Journey",
    'Experience the Serenity of Hajj',
    'Discover Holiness of Umrah',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  // Preload images
  useEffect(() => {
    const preloadImages = async () => {
      const imagePromises = images.map((src) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = src;
          img.onload = resolve;
          img.onerror = reject;
        });
      });

      try {
        await Promise.all(imagePromises);
        setIsLoading(false);
      } catch (error) {
        console.error('Error preloading images:', error);
        setIsLoading(false);
      }
    };

    preloadImages();
  }, []);

  if (isLoading) {
    return (
      <div className="w-full h-screen flex items-center justify-center bg-gray-100">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="w-full relative h-auto">
      <div className="relative md:h-[85vh] h-96 flex justify-center items-center overflow-hidden">
        <AnimatePresence mode="sync">
          <motion.div
            key={currentIndex}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 1.5,
              ease: "easeInOut",
            }}
          >
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url(${images[currentIndex]})`,
                backgroundSize: '100% 100%', // Forces the image to stretch
                backgroundPosition: 'center', // Keeps the stretched image centered
                backgroundRepeat: 'no-repeat', // Prevents tiling
                filter: 'brightness(0.9)',
              }}
            >
              {/* Overlay for better contrast */}
              <div
                className="absolute inset-0 bg-black opacity-50"
              ></div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Overlay Content */}
        <div className="mb-20 sm:mb-0 text-white text-center relative z-10 px-4 sm:px-8 lg:px-16 flex flex-col items-center space-y-6 top-10 md:top-0">
          <motion.h1
            className="font-extrabold leading-tight tracking-wider text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 1.5, ease: [0.5, 0.05, 0.1, 0.3] }}
          >
            {texts[currentIndex]}
          </motion.h1>

          <p
            className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-3xl"
            style={{
              fontWeight: 300,
              lineHeight: 1.8,
              textShadow: '1px 1px 3px rgba(0, 0, 0, 0.6)',
              letterSpacing: '0.5px',
            }}
          >
            Join us in fulfilling your religious duty with peace and devotion. 
            Discover a seamless and spiritually uplifting Hajj and Umrah experience.
          </p>
          <button
  type="button"
  onClick={() => {
    const section = document.getElementById("explore-section");
    const offset = 70; // Adjust this based on your navbar height
    const sectionPosition = section.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top: sectionPosition, behavior: "smooth" });
  }}
  className="py-2 px-4 md:px-3 text-base sm:text-lg md:text-xl lg:text-2xl bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-lg duration-300 ease-all"
>
  Explore Now
</button>

         
        </div>
      </div>
    </div>
  );
};

export default HajjHero;
