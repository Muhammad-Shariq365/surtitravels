import React from "react";

const Aboutheader = () => {
  return (
    <div className="relative h-[25vh] md:h-[50vh] flex items-center justify-center bg-gray-900">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://img.freepik.com/free-vector/airplane-flying-sky_1308-30087.jpg?t=st=1735823698~exp=1735827298~hmac=b9e7d0234572d037835e71af22f13b57c35c752b8ee53545f12c7799746937d6&w=740" // Replace with your image URL
          alt="Background"
          className="w-full h-full object-cover brightness-50"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center flex justify-center items-center">
        <h1 className="text-6xl flex justify-center items-center md:text-9xl font-bold text-slate-200 drop-shadow-lg">
          ABOUT US
        </h1>
      </div>
    </div>
  );
};

export default Aboutheader;
