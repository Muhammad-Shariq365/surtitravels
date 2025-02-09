import React from "react";

const OurVision = () => {
  return (
    <section className="relative bg-gradient-to-r from-teal-50 to-blue-50 pb-9 pt-20 px-9 lg:px-24 overflow-hidden">
      {/* Background Decorative Shapes */}
      <div className="absolute -top-16 -right-20 w-96 h-96 bg-gradient-to-tr from-teal-300 via-white to-blue-200 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute -bottom-12 -left-16 w-80 h-80 bg-gradient-to-bl from-blue-300 via-white to-teal-200 rounded-full blur-3xl opacity-30"></div>

      <div className="relative z-10 max-w-7xl mx-auto  grid md:grid-cols-2 gap-12 items-center">
        {/* Left Section: Content */}
        <div className="order-2 md:order-1">
        <h2 className="text-[clamp(2rem,5vw,3rem)] text-left font-bold text-gray-800 uppercase leading-tight">
            Our <span className="text-blue-500">Vision</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 text-left  max-w-2xl mt-6 mx-auto">
            At <span className="text-blue-500 font-bold">Surti Tour and Travels</span>, 
            our vision is to ignite the spirit of adventure in every traveler. 
            We aim to make every journey as meaningful and transformative as 
            the destination itself.
          </p>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 text-left  max-w-2xl mb-6 mx-auto">
            By blending innovation, authenticity, and sustainability, we strive 
            to be the leading travel agency that inspires connections, bridges 
            cultures, and empowers individuals to explore the beauty of our 
            world.
          </p>
          <button
  className="inline-block px-4 py-3 bg-gradient-to-l from-blue-500 to-blue-400 text-white font-semibold rounded-md shadow-lg hover:shadow-xl hover:scale-105 transition transform duration-300"
  onClick={() => {
    const section = document.getElementById("explore-mission");
    if (section) {
      const offset = 100; // Increase offset to ensure full visibility
      const sectionPosition = section.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: sectionPosition, behavior: "smooth" });
    }
  }}
>
  Discover More
</button>

        </div>

        {/* Right Section: Image */}
        <div className="relative order-1 md:order-2">
          <div className="relative w-full h-72 lg:h-[28rem] rounded-lg overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1504542982118-59308b40fe0c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Vision Journey"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -top-8 -left-8 bg-blue-500 p-4 rounded-full shadow-md rotate-12">
            <span className="text-white font-bold text-2xl">🌟</span>
          </div>
         
        </div>
      </div>
    </section>
  );
};

export default OurVision;
