import React from "react";

const WhoWeAre = () => {
  return (
    <section className="relative bg-blue-50 pt-20 pb-[50px] md:py-20 px-7 lg:px-24 overflow-hidden">
      {/* Background Decorative Shapes */}
      <div className="absolute -top-12 -left-16 w-80 h-80 bg-gradient-to-br from-blue-200 via-white to-blue-100 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute -bottom-12 -right-16 w-96 h-96 bg-gradient-to-tl from-blue-300 via-white to-blue-200 rounded-full blur-3xl opacity-40"></div>

      <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Section: Image */}
        <div className="relative m-2 md:m-0">
          <div className="relative w-full h-72 lg:h-[28rem] rounded-lg overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1521336575822-6da63fb45455?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Travel Journey"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -top-8 -left-8 bg-blue-500 p-4 rounded-full shadow-md rotate-12">
            <span className="text-white font-bold text-2xl">✈️</span>
          </div>
         
        </div>

        {/* Right Section: Content */}
        <div className=" h-full">
        <h2 className="text-[clamp(2rem,5vw,3rem)] text-left font-bold text-gray-800 uppercase leading-tight">
            YOUR ADVENTURE <span className="text-blue-500">STARTS HERE</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 text-left  max-w-2xl mt-6 mx-auto">
            We are <span className="text-blue-500 font-bold">Surti Tour and Travels</span>, 
            your travel companions. With a passion for exploration and a 
            commitment to excellence, we design journeys that inspire and 
            create lifelong memories.
          </p>
           <p className="text-base sm:text-lg md:text-xl text-gray-600 text-left  max-w-2xl mx-auto mb-6">
            Our team brings years of expertise and a personal touch to ensure 
            that every trip is not just a destination, but an experience. 
            From serene beaches to bustling cities, let us take you there.
          </p>
          
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
