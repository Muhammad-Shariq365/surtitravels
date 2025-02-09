import React from 'react';
import Slider from 'react-slick';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { FaRegClock } from "react-icons/fa6";
import { motion } from 'framer-motion';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../assets/gallery/1.jpg";
import img2 from "../assets/gallery/2.jpg";
import img3 from "../assets/gallery/3.jpg";
import img4 from "../assets/gallery/4.jpg";
import img5 from "../assets/gallery/5.jpg";
import img6 from "../assets/gallery/6.jpg";
import img7 from "../assets/gallery/7.jpg";
import img8 from "../assets/gallery/8.jpg";
import img9 from "../assets/gallery/9.jpg";
import img10 from "../assets/gallery/10.jpg";
import one from "../assets/pdf/one.pdf";
import { useNavigate } from 'react-router-dom';

// Custom Next Arrow Component (Vertical Centered)
const CustomNextArrow = ({ onClick }) => (
  <div
    className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10 text-white text-4xl cursor-pointer hover:scale-110 transition"
    onClick={onClick}
  >
    <IoIosArrowForward />
  </div>
);

// Custom Previous Arrow Component (Vertical Centered)
const CustomPrevArrow = ({ onClick }) => (
  <div
    className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10 text-white text-4xl cursor-pointer hover:scale-110 transition"
    onClick={onClick}
  >
    <IoIosArrowBack />
  </div>
);

// Slick Slider Settings
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: true,
  nextArrow: <CustomNextArrow />,
  prevArrow: <CustomPrevArrow />,
  responsive: [
    {
      breakpoint: 1024,
      settings: { slidesToShow: 2 },
    },
    {
      breakpoint: 768,
      settings: { slidesToShow: 1 },
    },
  ],
};

// Tour Data
const tours = [
  {
    id: 1,
    title: "Islamabad",
    duration: "01 Days",
    price: "PKR 9,000/-",
    image: img1,
    itineraryPDF: one, // PDF for this tour
  },
  {
    id: 2,
    title: "Malam Jabba",
    duration: "02 Days",
    price: "PKR 50,000/-",
    image: img2,
    itineraryPDF: "/path/to/Malam-Jabba-itinerary.pdf", // PDF for this tour
  },
  {
    id: 3,
    title: "Muree",
    duration: "02 Days",
    price: "PKR 80,000/-",
    image: img3,
    itineraryPDF: "/path/to/Muree-itinerary.pdf", // PDF for this tour
  },
  {
    id: 4,
    title: "Kashmir",
    duration: "03 Days",
    price: "PKR 80,000/-",
    image: img4,
    itineraryPDF: "/path/to/Kashmir-itinerary.pdf", // PDF for this tour
  },
  {
    id: 5,
    title: "Shugran",
    duration: "02 Days",
    price: "PKR 50,000/-",
    image: img5,
    itineraryPDF: "/path/to/Shugran-itinerary.pdf", // PDF for this tour
  },
  {
    id: 6,
    title: "Sawat",
    duration: "03 Days",
    price: "PKR 80,000/-",
    image: img6,
    itineraryPDF: "/path/to/Sawat-itinerary.pdf", // PDF for this tour
  },
  {
    id: 7,
    title: "Kashmir",
    duration: "04 Days",
    price: "PKR 80,000/-",
    image: img7,
    itineraryPDF: "/path/to/Kashmir2-itinerary.pdf", // PDF for this tour
  },
  {
    id: 8,
    title: "Sawat",
    duration: "04 Days",
    price: "PKR 100,000/-",
    image: img8,
    itineraryPDF: "/path/to/Sawat2-itinerary.pdf", // PDF for this tour
  },
  {
    id: 9,
    title: "Kashmir-Shugran",
    duration: "05 Days",
    price: "PKR 120,000/-",
    image: img9,
    itineraryPDF: "/path/to/Kashmir-Shugran-itinerary.pdf", // PDF for this tour
  },
  {
    id: 10,
    title: "Swat",
    duration: "05 Days",
    price: "PKR 120,000/-",
    image: img10,
    itineraryPDF: "/path/to/Swat-itinerary.pdf", // PDF for this tour
  },
];

const PrivateTour = ({ tour })  => {

  

  const navigate = useNavigate();

  const viewPdf = (pdfUrl) => {
    navigate('/view-itinerary', { state: { pdfUrl } });
  };
  return (
    <div className="container mx-auto px-4 md:px-8 py-10">
      <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold text-center text-gray-800 mb-4 tracking-tight">
        PRIVATE TOURS
      </h1>
      <p className="text-base sm:text-lg md:text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto">
        Explore our top-selling customized tour packages across the beautiful landscapes of Pakistan.
      </p>
      <Slider {...settings}>
        {tours.map((tour) => (
          <div key={tour.id} className="p-6 flex justify-center items-center">
            <motion.div
              className="relative bg-[#E0F2FE] border-2 border-[#1D4ED8] rounded-lg overflow-hidden flex flex-col items-start  h-full"
              initial={{ borderColor: '#E0F2FE' }}
              animate={{
                borderColor: ['#E0F2FE', '#4AC9FF', '#00F5FF', '#4AC9FF'],
                scale: [1, 1.05, 1],
                transition: {
                  duration: 2,
                  repeat: Infinity,
                  repeatType: 'reverse',
                  ease: 'easeInOut',
                },
              }}
              whileHover={{
                scale: 1,
                rotate: 1,
              }}
            >
              <div className="relative w-full h-60 mb-2 overflow-hidden rounded-lg">
                <img
                  src={tour.image}
                  alt={tour.title}
                  className="w-full h-full object-fill"
                />
              </div>
              <div className="text-left px-2 pb-2">
                <p className="flex items-left text-yellow-600 text-sm font-medium ">
                  <span className="mr-1"><FaRegClock /></span> {tour.duration}
                </p>

                <h3 className="text-lg font-extrabold text-gray-800 leading-tight">
                  {tour.title}
                </h3>

                <p className="text-gray-600 text-sm">
                  Starting From
                  <span className="ml-2 text-red-500 font-bold">{tour.price}</span>
                </p>
              </div>

              <div className="flex w-full justify-center gap-3 pb-2">
      <a
        href="#"
        className="bg-green-500 flex items-center justify-center text-white font-medium text-xs p-2 rounded hover:bg-green-600"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp Logo"
          className="w-5 h-5"
        />
        TALK TO AGENT
      </a>

      <button
        onClick={() => viewPdf(tour.itineraryPDF)} // Navigate to PDF viewer
        className="flex items-center justify-center bg-blue-500 text-white text-xs p-2 font-medium rounded hover:bg-blue-600 transition"
      >
        VIEW ITINERARY
      </button>
    </div>
            </motion.div>
          </div>
        ))}
      </Slider>
      
    </div>
  );
};

export default PrivateTour;
