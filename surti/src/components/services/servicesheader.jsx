import React from "react";

const Servicesheader = () => {
  return (
    <div className="relative h-[25vh] md:h-[50vh] flex items-center justify-center bg-gray-900">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://i.postimg.cc/yxyWbLtV/photo-1639034741369-1e0c771adaeb-q-80-w-1374-auto-format-fit-crop-ixlib-rb-4-0.jpg" // Replace with your image URL
          alt="Background"
          className="w-full h-full object-cover brightness-50"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center">
        <h1 className="text-5xl md:text-9xl font-bold text-slate-200
         drop-shadow-lg">
          SERVICES
        </h1>
      </div>
    </div>
  );
};

export default Servicesheader;
