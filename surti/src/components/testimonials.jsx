import React from 'react';
import Vd1 from '../assets/videos/1.mp4';
import Vd2 from '../assets/videos/2.mp4';
import Vd3 from '../assets/videos/3.mp4';
import Vd4 from '../assets/videos/4.mp4';
import Vd5 from '../assets/videos/5.mp4';
import Vd6 from '../assets/videos/6.mp4';
import { motion } from 'framer-motion';

const fadeInUpVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: 0.5,
      ease: 'easeOut',
    },
  },
};

const VideoCards = () => {
  const videos = [Vd1, Vd2, Vd3, Vd4, Vd5, Vd6];

  return (
    <div className="lg:max-w-5xl xl:max-w-5xl 2xl:max-w-5xl mx-auto px-6 md:px-8 pt-12 mb-14">
      {/* Heading Section */}
      <div className="text-center mb-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInUpVariants}
          viewport={{ once: false, amount: 0.9 }}
        >
          <h2 className="text-[clamp(2rem,5vw,3rem)] font-extrabold text-gray-800 uppercase">
            TESTIMONIALS
          </h2>
        </motion.div>
        <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
          We take immense pride in delivering exceptional travel experiences, and nothing speaks louder than the words
        </p>
      </div>
      {/* Video Flexbox */}
      <div className="flex flex-wrap justify-center gap-8 ">
        {videos.map((url, index) => (
          <div
            key={index}
            className="flex justify-center items-center bg-white rounded-lg overflow-hidden transform transition-transform hover:scale-105"
            style={{
              width: '100%',
              maxWidth: '280px', // Maximum width
              aspectRatio: '9 / 16', // Maintain video aspect ratio
            }}
          >
            <video
              src={url}
              controls
              className="w-full h-full bg-white" // Ensures the video matches its parent size
            ></video>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoCards;
