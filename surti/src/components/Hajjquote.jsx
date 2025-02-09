import React, { useRef, useEffect, useState } from "react";

const GetAQuoteForm = () => {
  const [offset, setOffset] = useState(0);
  const parallaxRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        setOffset(scrollTop);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative">
      {/* Parallax Background */}
      <div





        ref={parallaxRef}
        className="absolute inset-0 -z-10 w-screen h-full brightness-75 bg-cover md:bg-fixed "
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1667454872134-c25973237138?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
         
        }}
      ></div>

      {/* Form Section */}
      <div className="container mx-auto  sm:p-20
      
      ">
        <div className="md:bg-white bg-opacity-80 py-12 px-4 sm:px-6 lg:px-8 rounded-lg shadow-lg max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold text-center text-gray-800 mb-10 tracking-tight">
            GET A QUOTE
          </h1>
          <form className="space-y-6">
            {/* Row 1 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-green-500"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-green-500"
              />
            </div>
            {/* Row 2 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <input
                type="text"
                placeholder="Phone Number"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-green-500"
              />
              <input
                type="number"
                placeholder="How Many Persons"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-green-500"
              />
              <input
                type="date"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-green-500"
              />
            </div>
            {/* Row 3 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <select className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-green-500">
                <option>Select Hotels Category</option>
                <option>3 Stars</option>
                <option>4 Stars</option>
                <option>5 Stars</option>
              </select>
              <select className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-green-500">
                <option>Select No of Days</option>
                <option>1-3 Days</option>
                <option>4-7 Days</option>
                <option>7+ Days</option>
              </select>
            </div>
            {/* Row 4 */}
            <textarea
              placeholder="Any Specific Instruction"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-green-500"
              rows="3"
            ></textarea>
            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="px-6 py-3 bg-black text-white font-bold rounded-lg shadow-md hover:bg-gray-800 transition duration-300"
              >
                Get A Quote
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GetAQuoteForm;
