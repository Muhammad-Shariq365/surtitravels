import React from 'react';
import { FaMosque } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const HajjUmrahService = () => {
  return (
    <section className="relative pt-9 pb-20 md:py-20 px-4 bg-gradient-to-r from-green-300 to-blue-300 text-white">
      <div className=" mx-auto container xl:max-w-5xl 2xl:max-w-7xl flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Image on the Left */}
        <div className="flex-1 mt-12 md:mt-0 h-[85vh]">
          <img
            src="https://i.postimg.cc/sf9XYQM7/makkah.jpg"
            alt="Hajj"
            className="w-full h-full object-cover rounded-lg shadow-lg brightness-125 min-h-[68vh]"
            style={{ borderRadius: '100% 100% 100% 100% / 30% 30% 30% 30%' }}
          />
        </div>
  
        {/* Text on the Right */}
        <div className="flex-1 mt-12 md:mt-0 space-y-6 md:space-y-8">
          <h2 className="text-[clamp(2rem,5vw,3rem)] lg:text-5xl font-bold text-black mb-2">
            Embark on a Spiritual Journey
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-black text-left max-w-2xl mx-auto">
            Fulfill your spiritual duties with our dedicated Hajj and Umrah services. Experience a journey of a lifetime with peace, comfort, and exceptional guidance to the holiest destinations.
          </p>
          <div className="flex items-center space-x-4">
            <FaMosque className="text-green-500 text-2xl" />
            <span className="text-lg text-green-600 md:text-xl">Strengthen your faith with every step.</span>
          </div>
          <Link to="/hajj-umrah">
            <button className="mt-6 px-5
             py-3 bg-green-500 text-white rounded-full hover:bg-green-600 transition-all duration-300 cursor-pointer z-20 relative">
              View Packages
            </button>
          </Link>
        </div>
      </div>
      {/* Decorative Overlay */}
      <div className="absolute inset-0 bg-black opacity-30 z-10"></div>
    </section>
  );
};

export default HajjUmrahService;
