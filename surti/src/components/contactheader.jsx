

import React from "react";
import Contactus from '../assets/surti-images/contactus.jpg';

const Contactheader = () => {
  return (
    <div className="relative h-[25vh] md:h-[50vh] flex items-center justify-center bg-gray-900">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={Contactus} // Replace with your image URL
          alt="Background"
          className="w-full h-full object-cover brightness-50"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center">
        <h1 className="text-5xl md:text-9xl font-bold text-slate-200 drop-shadow-2xl">
          CONTACT
        </h1>
      </div>
    </div>
  );
};

export default Contactheader;
