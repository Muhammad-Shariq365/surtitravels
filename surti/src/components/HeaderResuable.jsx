import React from "react";

const HeaderReusable = ({ title, subtitle, imageUrl }) => {
  return (
    <div className="relative h-[25vh] md:h-[50vh] flex items-center justify-center bg-gray-900">
      {/* Background Image */}
      {imageUrl && (
        <div className="absolute inset-0">
          <img
            src={imageUrl} // Use the dynamic image URL
            alt={title || "Header Image"} // Fallback alt text
            className="w-full h-full object-cover brightness-50"
          />
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 text-center">
        {title && (
          <h1 className="text-5xl flex justify-center items-center leading-tight md:text-[8vw] font-bold text-white drop-shadow-lg">
            {title}
          </h1>
        )}
      </div>
    </div>
  );
};

export default HeaderReusable;
