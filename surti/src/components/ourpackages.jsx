import React from "react";

const DiscoverOurServices = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text Content on the Left */}
          <div className="w-full text-center md:text-left">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Discover Our Services</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              <strong>Explore Our Exclusive Packages</strong><br />
              At Surti Tour and Travels, we take great pride in offering a variety of premium travel packages that cater to every need and preference. With our extensive experience in both domestic and international tourism, each package is carefully designed to provide you with a seamless and unforgettable travel experience.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              From luxurious stays to meticulously planned itineraries, we ensure that every aspect of your journey is thoughtfully curated for maximum comfort and convenience. Our expert team is dedicated to providing exceptional service, ensuring every detail is taken care of, so you can focus on enjoying your trip.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              Whether you're planning a family holiday, an adventurous trip, or a peaceful pilgrimage, Surti Tour and Travels has something special for you. Explore our exclusive packages today and let us help you create memories that will last a lifetime.
            </p>
          
          
          
          </div>

          {/* Image on the Right */}
          <div className="w-full h-full">
            <img
              src="https://plus.unsplash.com/premium_photo-1690921287956-951c72949aec?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Surti Tour and Travels"
              className="rounded-lg shadow-lg w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscoverOurServices;
