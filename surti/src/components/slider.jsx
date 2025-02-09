import React from 'react';
import Slider from 'react-slick';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import '../../src/App';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import honeymoon from '../assets/surti-images/honeymoon.jpeg'
import karachi from '../assets/surti-images/karachi.jpeg'
import dubai from '../assets/surti-images/dubai.jpeg'
import pakistan from '../assets/surti-images/pakistan.jpeg'
import umrah from '../assets/surti-images/umrah.jpeg'



import visa from '../assets/surti-images/visa.jpeg'

// Custom Next Arrow Component
const CustomNextArrow = ({ onClick }) => (
  <div
    className="absolute top-1/2 right-4 z-10 transform -translate-y-1/2 text-white text-3xl md:text-4xl bg-black/70 rounded-full p-2 cursor-pointer hover:scale-110 transition"
    onClick={onClick}
  >
    <IoIosArrowForward />
  </div>
);

// Custom Previous Arrow Component
const CustomPrevArrow = ({ onClick }) => (
  <div
    className="absolute top-1/2 left-4 z-10 transform -translate-y-1/2 text-white text-3xl md:text-4xl bg-black/70 rounded-full p-2 cursor-pointer hover:scale-110 transition"
    onClick={onClick}
  >
    <IoIosArrowBack />
  </div>
);

// Slider Settings
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
      breakpoint: 1024, // On screens smaller than 1024px
      settings: {
        slidesToShow: 2, // Show 2 slides
      },
    },
    {
      breakpoint: 768, // On screens smaller than 768px
      settings: {
        slidesToShow: 1, // Show 1 slide
      },
    },
  ],
};

const images = [
  honeymoon,
  karachi,
  dubai,
  pakistan,
  umrah,
  visa

  
];

const ImageSlider = () => {
  return (
    <div id='explore-section' className="relative max-w-7xl mx-auto mb-3 px-4 sm:px-6 lg:px-8 pt-9">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="relative group w-full h-[50vh] sm:h-[70vh] outline-none border-none ">
            <img
              src={image}
              alt={`slide-${index}`}
              className="w-full h-full  border-none outline-none object-fill   transition-transform duration-500 "
            />
          </div>
        ))}
      </Slider>
      {/* Dots Styling */}
      <style>
        {`
          .slick-dots {
            bottom: -25px; /* Adjust dots position */
          }
          .slick-dots li button:before {
            font-size: 12px;
            color: #aaa; /* Default dot color */
          }
          .slick-dots li.slick-active button:before {
            color: #000; /* Active dot color */
          }
        `}
      </style>
    </div>
  );
};

export default ImageSlider;
