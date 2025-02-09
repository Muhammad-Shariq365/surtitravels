import React from 'react';
import Slider from 'react-slick';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Custom Next Arrow Component for Client Reviews (Vertical Centered)
const CustomNextArrow = ({ onClick }) => (
  <div
    className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10 text-white text-4xl cursor-pointer hover:scale-110 transition"
    onClick={onClick}
  >
    <IoIosArrowForward />
  </div>
);

// Custom Previous Arrow Component for Client Reviews (Vertical Centered)
const CustomPrevArrow = ({ onClick }) => (
  <div
    className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10 text-white text-4xl cursor-pointer hover:scale-110 transition"
    onClick={onClick}
  >
    <IoIosArrowBack />
  </div>
);

// Slick Slider Settings for Client Reviews (3 cards at a time)
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3, // Set to 3 cards at a time
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

// Client Reviews Data
const clientReviews = [
  {
    id: 1,
    name: 'Alice Brown',
    position: 'CEO, Tech Innovators',
    image: 'https://via.placeholder.com/100x100',
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.",
  },
  {
    id: 2,
    name: 'Mark Wilson',
    position: 'CTO, Web Solutions',
    image: 'https://via.placeholder.com/100x100',
    review:
      "Phasellus posuere neque ac eros convallis, sed eleifend orci ultricies. Curabitur malesuada.",
  },
  {
    id: 3,
    name: 'Sarah Thompson',
    position: 'Marketing Manager, RetailX',
    image: 'https://via.placeholder.com/100x100',
    review:
      "Aliquam erat volutpat. Ut at nisl non mauris ultricies venenatis. Cras ut elit id est cursus.",
  },
  {
    id: 4,
    name: 'David Lee',
    position: 'Lead Designer, DreamWorks',
    image: 'https://via.placeholder.com/100x100',
    review:
      "Donec tincidunt libero sed feugiat faucibus. Nulla facilisi. Integer euismod elit at magna laoreet.",
  },
];

const ClientReviewSection = () => {
  return (
    <div className="container mx-auto px-4 py-10 min-h-[500px] bg-[#F9FAFB]">
        <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl  font-bold text-center text-gray-800 mb-4 tracking-tight">
        CLIENTS REVIEWS
      </h1>
      <p className="text-lg text-[#374151] text-center mb-8 max-w-2xl mx-auto">
        Hear from our satisfied clients who have experienced the best service from our team.
      </p>
      <Slider {...settings}>
        {clientReviews.map((review) => (
          <div key={review.id} className="p-6">
            <div className="bg-[#E0F2FE] border-2 border-[#1D4ED8] p-6 rounded-lg shadow-xl transform transition-all hover:scale-105 hover:shadow-2xl">
              {/* Client Review Card */}
              <div className="relative bg-white min-h-[250px] px-2 rounded-lg shadow-md">
                {/* Image Container */}
                <div className="flex items-center justify-center absolute top-[-20px] left-[-20px] w-20 h-20 bg-white rounded-full overflow-hidden border-4 border-white shadow-lg">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Review Text */}
                <p className="text-lg text-[#1F2937] italic mb-4 pt-16">{review.review}</p>
              </div>
              {/* Client Name & Position */}
              <div className="text-center pt-6">
                <h2 className="text-xl font-semibold text-[#1F2937]">{review.name}</h2>
                <p className="text-[#6B7280] text-sm">{review.position}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ClientReviewSection;
