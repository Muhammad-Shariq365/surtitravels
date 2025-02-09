import React from 'react';
import { Link } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa';

const Honeymoonservice = () => {
  return (
    <section className="relative py-20 px-4 bg-gradient-to-r from-pink-300 to-blue-300 text-white">
      <div className="container mx-auto xl:max-w-5xl 2xl:max-w-7xl flex flex-col md:flex-row items-center ">
        {/* Text on the Left */}
        <div className="flex-1 space-y-6 md:space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold text-black leading-tight">
            The Perfect Honeymoon Awaits
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-black text-left md:pr-[15px] max-w-2xl mx-auto">
            Escape to paradise with your loved one and create unforgettable memories. Explore serene beaches, luxurious resorts, and breathtaking destinations that will make your honeymoon a once-in-a-lifetime experience.
          </p>
          <div className="flex items-center space-x-4">
            <FaHeart className="text-red-500 text-2xl" />
            <span className="text-lg text-pink-600 md:text-xl">Experience love like never before.</span>
          </div>
          <Link to="/tours#honeymoon-tours">
            <button className="mt-6 px-5
             py-3 bg-red-500 text-white rounded-full hover:bg-red-600 transition-all duration-300 cursor-pointer z-20 relative">
              View Packages
            </button>
          </Link>
        </div>

        {/* Image on the Right */}
        <div className="flex-1 mt-12 md:mt-0 h-[85vh]">
          <img
            src="https://images.unsplash.com/photo-1512141633501-8eb74114f568?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Honeymoon Destination"
            className="w-full h-full object-cover rounded-lg shadow-lg brightness-125 "
            style={{ borderRadius: '100% 100% 100% 100% / 30% 30% 30% 30%' }}
          />
        </div>
      </div>
      {/* Decorative Overlay */}
      <div className="absolute inset-0 bg-black opacity-30"></div>
    </section>
  );
};

export default Honeymoonservice;
