import React from 'react';
import Slider from 'react-slick';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { motion } from 'framer-motion';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Review1 from '../assets/reviews/review1.jpeg'
import Review2 from '../assets/reviews/review2.jpeg'
import Review3 from '../assets/reviews/review3.jpeg'
import Review4 from '../assets/reviews/review4.jpeg'
import Review5 from '../assets/reviews/review5.jpeg'
import Review6 from '../assets/reviews/review6.jpeg'
import Review7 from '../assets/reviews/review7.jpeg'

const fadeInUpVariants = {
  hidden: { opacity: 0, y:15 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.8, 
      delay: 0.5, // Adjust the delay as needed
      ease: "easeOut",
    },
  },
};

const CustomNextArrow = ({ onClick }) => (
  <div
    className="absolute top-1/2 right-6 transform -translate-y-1/2 z-10 text-white font-extrabold shadow-2xl text-4xl cursor-pointer hover:scale-110 transition"
    onClick={onClick}
  >
    <IoIosArrowForward />
  </div>
);

const CustomPrevArrow = ({ onClick }) => (
  <div
    className="absolute top-1/2 left-6 transform -translate-y-1/2 z-10 text-white font-extrabold shadow-2xl text-4xl cursor-pointer hover:scale-110 transition"
    onClick={onClick}
  >
    <IoIosArrowBack />
  </div>
);

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

const teamMembers = [
  {
    id: 1,
    name: "John Doe",
    role: "Team Leader",
    image: Review1,
    description: "Experienced leader with a passion for innovation.",
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "UI/UX Designer",
    image: Review2,
    description: "Crafting beautiful and user-friendly interfaces.",
  },
  {
    id: 3,
    name: "Mike Brown",
    role: "Backend Developer",
    image: Review3,
    description: "Ensuring seamless server-side functionality.",
  },
  {
    id: 4,
    name: "Emily White",
    role: "Frontend Developer",
    image: Review4,
    description: "Building dynamic and responsive web applications.",
  },
];

const TeamSection = () => {
  return (
    <div id='explore-reviews' className="container xl:max-w-5xl mx-auto px-4 md:px-8 pb-16">
    <div className="mb-4">
  <motion.div 
    initial="hidden"
    whileInView="visible" // Only animates the first time it comes into view
    variants={fadeInUpVariants}
    viewport={{ once: false, amount: 0.9 }}
  >
    <h2 className="text-[clamp(2rem,5vw,3rem)] text-center font-extrabold text-gray-800 uppercase">
      CLIENTS REVIEWS
    </h2>
  </motion.div>
  <p className="text-base sm:text-lg md:text-xl text-gray-600 text-center max-w-2xl mx-auto">
    Hear what our satisfied clients have to say about our services.
  </p>
</div>

      <Slider {...settings}>
        {teamMembers.map((member) => (
          <div key={member.id} className="p-6 flex justify-center items-center">
            <motion.div
              className="relative bg-[#E0F2FE] border-2 border-[#1D4ED8] rounded-lg overflow-hidden flex flex-col h-full"
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
              <div className="relative w-full h-80  overflow-hidden rounded-lg">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-"
                />
              </div>
            
            </motion.div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TeamSection;
