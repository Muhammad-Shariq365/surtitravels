import React from "react";

const OurMission = () => {
  return (
    <section id="explore-mission" className="relative bg-gradient-to-r from-teal-50 to-blue-50 pb-12 pt-9 px-9 lg:px-24 overflow-hidden">
      {/* Background Decorative Shapes */}
      <div className="absolute -top-16 -right-20 w-96 h-96 bg-gradient-to-tr from-teal-300 via-white to-blue-200 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute -bottom-12 -left-16 w-80 h-80 bg-gradient-to-bl from-blue-300 via-white to-teal-200 rounded-full blur-3xl opacity-30"></div>

      <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Section: Image */}
        <div className="relative">
          <div className="relative w-full h-72 lg:h-[28rem] rounded-lg overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1675649957485-6efa196ae9c8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Mission Journey"
              className="w-full h-full object-center"
            />
          </div>
          <div className="absolute -top-8 -left-8 bg-blue-500 p-4 rounded-full shadow-md rotate-12">
            <span className="text-white font-bold text-2xl">🌍</span>
          </div>
          
        </div>

        {/* Right Section: Content */}
        <div>
        <h2 className="text-[clamp(2rem,5vw,3rem)] text-left font-bold text-gray-800 uppercase leading-tight">
            Our <span className="text-blue-500">Mission</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 text-left  max-w-2xl mt-6 mx-auto">
            At <span className="text-blue-500 font-bold">Surti Tour and Travels</span>, 
            our mission is to craft exceptional travel experiences that resonate 
            with your passions and dreams.
          </p>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 text-left  max-w-2xl mb-6 mx-auto">
            We believe in sustainable travel that not only explores the beauty 
            of our planet but also supports local communities, promotes 
            environmental stewardship, and creates meaningful connections.
          </p>
          <button
  className="inline-block px-4 py-3 bg-gradient-to-l from-blue-500 to-blue-400 text-white font-semibold rounded-md shadow-lg hover:shadow-xl hover:scale-105 transition transform duration-300"
  onClick={() => {
    const section = document.getElementById("explore-reviews");
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
      </div>
    </section>
  );
};

export default OurMission;
