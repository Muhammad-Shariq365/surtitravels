import React from 'react';
import { FaPlane, FaHotel, FaCar, FaSearchLocation } from 'react-icons/fa';

const HajjUmrahSection = () => {
  return (
    <section className=" px-4 sm:px-6 lg:px-8 pt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Left Side: Image */}
      <div className="flex justify-center items-center  w-[100%] h-[100%]">
        <img
          src="https://images.unsplash.com/photo-1586811388230-21835e10b83d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Hajj/Umrah"
          className="w-full h-full object-cover rounded-lg shadow-lg "
        />
      </div>

      {/* Right Side: Text Content */}
      <div className="flex flex-col   lg:items-start text-left">
        <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold text-left text-gray-800 mb-4 tracking-tight">
          Best Hajj/Umrah Packages in Pakistan
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-left text-gray-600 mb-6 leading-relaxed">
          Surti Tour and Travels offers a comprehensive range of services, taking care of every aspect of your trip,
          from visa processing and accommodation arrangements to transportation and guidance throughout your journey.
        </p>

        {/* Our Services */}
        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-gray-800 mb-4 ">
          Our Services
        </h2>
        <ul className="space-y-4 text-sm sm:text-base md:text-lg text-left text-gray-700">
          <li className="flex  space-x-4">
            <FaPlane className="text-xl sm:text-2xl text-blue-500" />
            <span>Umrah E-Visa</span>
          </li>
          <li className="flex space-x-4">
            <FaHotel className="text-xl sm:text-2xl text-green-500" />
            <span>Direct Flights Tickets</span>
          </li>
          <li className="flex space-x-4">
            <FaCar className="text-xl sm:text-2xl text-red-500" />
            <span>Hotels Accommodation</span>
          </li>
          <li className="flex space-x-4">
            <FaSearchLocation className="text-xl sm:text-2xl text-yellow-500" />
            <span>Luxury Transportation</span>
          </li>
        </ul>

        {/* Learn More Button */}
        <div className="mt-6">
        <button
  type="button"
  className="py-2 px-4 md:px-3 text-base sm:text-lg md:text-xl lg:text-2xl bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-lg  duration-300 ease-all "
>
  Learn More
</button>
        </div>
      </div>
    </section>
  );
};

export default HajjUmrahSection;
