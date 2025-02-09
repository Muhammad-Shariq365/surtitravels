import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FaListAlt,
  FaBus,
  FaHotel,
  FaChalkboardTeacher,
  FaUtensils,
  FaClock,
} from "react-icons/fa";

// Import PDFs
import BudgetPackagePDFA from "../assets/pdf/png2pdf (1).pdf";
import BudgetPackagePDFB from "../assets/pdf/png2pdf (2).pdf";
import EconomyPackagePDFA from "../assets/pdf/png2pdf (4).pdf";
import EconomyPackagePDFB from "../assets/pdf/png2pdf (3).pdf";
import EconomyPlusPDFA from "../assets/pdf/png2pdf (5).pdf";
import EconomyPlusPDFB from "../assets/pdf/png2pdf (6).pdf";

const HajjPackages = () => {
  const navigate = useNavigate();

  const packages = [
    {
      name: "Budget Package (A)",
      duration: "32 - 38 Days",
      price: "PKR 1,220,000/",
      details: BudgetPackagePDFA,
      services: [
        { icon: <FaListAlt />, text: "Maktab-D" },
        { icon: <FaUtensils />, text: "Lunch 3 Times" },
        { icon: <FaBus />, text: "Transportation" },
        { icon: <FaHotel />, text: "Sharing 4 to 6 Bed" },
        { icon: <FaChalkboardTeacher />, text: "Training Classes" },
      ],
      image:
        "https://images.pexels.com/photos/2895295/pexels-photo-2895295.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      name: "Economy Package (A)",
      duration: "20 -22 Days",
      price: "PKR 1,320,000/",
      details: EconomyPackagePDFA,
      services: [
        { icon: <FaListAlt />, text: "Maktab-D" },
        { icon: <FaUtensils />, text: "Lunch 3 Times" },
        { icon: <FaBus />, text: "Transportation" },
        { icon: <FaHotel />, text: "Sharing 4 to 6 Bed" },
        { icon: <FaChalkboardTeacher />, text: "Training Classes" },
      ],
      image:
        "https://images.pexels.com/photos/26436656/pexels-photo-26436656/free-photo-of-long-exposure-photo-of-kaaba-surrounded-by-crowds-of-people.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      name: "Economy Plus (A)",
      duration: "20 - 22 Days ",
      price: "PKR 1,450,000",
      details: EconomyPlusPDFA,
      services: [
        { icon: <FaListAlt />, text: "Maktab-D" },
        { icon: <FaUtensils />, text: "Lunch 3 Times" },
        { icon: <FaBus />, text: "Transportation" },
        { icon: <FaHotel />, text: "Sharing 4 to 6 Bed" },
        { icon: <FaChalkboardTeacher />, text: "Training Classes" },
      ],
      image:
        "https://images.pexels.com/photos/2787826/pexels-photo-2787826.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      name: "Budget Package (B)",
      duration: "32 - 38 Days",
      price: "PKR 1,175,000/",
      details: BudgetPackagePDFB,
      services: [
        { icon: <FaListAlt />, text: "Maktab-D" },
        { icon: <FaUtensils />, text: "Lunch 3 Times" },
        { icon: <FaBus />, text: "Transportation" },
        { icon: <FaHotel />, text: "Sharing 4 to 6 Bed" },
        { icon: <FaChalkboardTeacher />, text: "Training Classes" },
      ],
      image:
        "https://images.pexels.com/photos/2895295/pexels-photo-2895295.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      name: "Economy Package (B)",
      duration: "20 - 22 Days",
      price: "PKR 1,275,000/",
      details: EconomyPackagePDFB,
      services: [
        { icon: <FaListAlt />, text: "Maktab-D" },
        { icon: <FaUtensils />, text: "Lunch 3 Times" },
        { icon: <FaBus />, text: "Transportation" },
        { icon: <FaHotel />, text: "Sharing 4 to 6 Bed" },
        { icon: <FaChalkboardTeacher />, text: "Training Classes" },
      ],
      image:
        "https://images.pexels.com/photos/26436656/pexels-photo-26436656/free-photo-of-long-exposure-photo-of-kaaba-surrounded-by-crowds-of-people.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      name: "Economy Plus (B)",
      duration: "32 - 38 Days",
      price: "PKR 1,350,000/",
      details: EconomyPlusPDFB,
      services: [
        { icon: <FaListAlt />, text: "Maktab-D" },
        { icon: <FaUtensils />, text: "Lunch 3 Times" },
        { icon: <FaBus />, text: "Transportation" },
        { icon: <FaHotel />, text: "Sharing 4 to 6 Bed" },
        { icon: <FaChalkboardTeacher />, text: "Training Classes" },
      ],
      image:
        "https://images.pexels.com/photos/2787826/pexels-photo-2787826.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];

  const viewPdf = (pdfUrl) => {
    navigate("/view-itinerary", { state: { pdfUrl } });
  };

  return (
    <div className="bg-gray-100 py-10">
      <div className="container mx-auto px-6 lg:max-w-screen-xl">
        {/* Header Section */}
        <div className="text-center mb-8">
        <h2 className="text-[clamp(2rem,5vw,3rem)] text-center font-extrabold text-gray-800 uppercase">
      HAJJ PACKAGES
    </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Choose from our exclusive Hajj packages tailored to provide comfort,
            convenience, and an unforgettable spiritual experience.
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg pb-4 overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              {/* Image Section */}
              <div className="relative">
                <img
                  src={pkg.image}
                  alt={pkg.name}
                  className="w-full h-60 object-cover"
                />
                <span className="absolute top-4 left-4 bg-blue-600 text-white text-sm font-medium px-3 py-1 rounded-md shadow flex items-center space-x-2">
                  <FaClock className="text-white" />
                  <span>{pkg.duration}</span>
                </span>
              </div>

              {/* Content Section */}
              <div className="px-6">
                <h3 className="text-2xl font-semibold py-2 text-gray-800">
                  {pkg.name}
                </h3>
                <ul className="space-y-1">
                  {pkg.services.map((service, i) => (
                    <li key={i} className="flex items-center space-x-3">
                      <span className="text-blue-600 text-lg">
                        {service.icon}
                      </span>
                      <span className="text-blue-600">{service.text}</span>
                    </li>
                  ))}
                </ul>

                {/* Pricing Section */}
                <div className="mt-4">
                  <span className="text-lg text-gray-800 font-semibold">
                    Starting from:
                  </span>
                  <span className="text-xl font-bold text-red-500 ml-2">
                    {pkg.price}
                  </span>
                </div>

                {/* View Details Button */}
                <div className="flex mt-4  items-center justify-around full px-1  pb-2">
      

      <button
        onClick={() => viewPdf(pkg.details)} // Navigate to PDF viewer
        className="flex items-center justify-center w-auto h-auto bg-blue-500 text-white  text-xs py-2.5  px-4 font-semibold rounded hover:bg-blue-600 transition"
      >
        VIEW ITINERARY
      </button>
    </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HajjPackages;