import React from "react";
import { FaRegClock } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import img1 from "../../assets/gallery/18.jpg";
import img2 from "../../assets/gallery/1.jpg";
import img3 from "../../assets/gallery/19.jpg";
import img4 from "../../assets/gallery/4.jpg";
import img5 from "../../assets/gallery/5.jpg";
import img6 from "../../assets/gallery/6.jpg";
import img7 from "../../assets/gallery/7.jpg";
import img8 from "../../assets/gallery/8.jpg";
import img9 from "../../assets/gallery/9.jpg";
import img10 from "../../assets/gallery/10.jpg"
import one from "../../assets/pdf/one.pdf";
import malamjabba from '../../assets/pdf/2 DAYS MALAM JABBA PRIVATE TOUR.pdf';
import muree from '../../assets/pdf/2 DAYS MURREE PRIVATE TOUR.pdf';
import shogran from '../../assets/pdf/2 DAYS SHOGRAN PRIVATE TOUR.pdf';
import kashmir from '../../assets/pdf/3 DAYS KAHSMIR PRIVATE TOUR.pdf';
import kashmir4 from '../../assets/pdf/4 DAYS KAHSMIR PRIVATE TOUR.pdf';
import sawat from '../../assets/pdf/3 DAYS SWAT PRIVATE TOUR.pdf';
import kashmirshogran from '../../assets/pdf/5 DAYS KASHMIR SHOGRAN PRIVATE TOUR.pdf';
import sawat4 from '../../assets/pdf/4 DAYS SWAT PRIVATE TOUR.pdf';
import sawat5 from '../../assets/pdf/5 DAYS SWAT PRIVATE TOUR.pdf';


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
    itineraryPDF: malamjabba, // PDF for this tour
  },
  {
    id: 3,
    title: "Muree",
    duration: "02 Days",
    price: "PKR 80,000/-",
    image: img3,
    itineraryPDF: muree, // PDF for this tour
  },
  {
    id: 4,
    title: "Kashmir",
    duration: "03 Days",
    price: "PKR 80,000/-",
    image: img4,
    itineraryPDF: kashmir, // PDF for this tour
  },
  {
    id: 5,
    title: "Shugran",
    duration: "02 Days",
    price: "PKR 50,000/-",
    image: img5,
    itineraryPDF: shogran, // PDF for this tour
  },
  {
    id: 6,
    title: "Sawat",
    duration: "03 Days",
    price: "PKR 80,000/-",
    image: img6,
    itineraryPDF: sawat, // PDF for this tour
  },
  {
    id: 7,
    title: "Kashmir",
    duration: "04 Days",
    price: "PKR 80,000/-",
    image: img7,
    itineraryPDF: kashmir4, // PDF for this tour
  },
  {
    id: 8,
    title: "Sawat",
    duration: "04 Days",
    price: "PKR 100,000/-",
    image: img8,
    itineraryPDF: sawat4, // PDF for this tour
  },
  {
    id: 9,
    title: "Kashmir-Shugran",
    duration: "05 Days",
    price: "PKR 120,000/-",
    image: img9,
    itineraryPDF: kashmirshogran, // PDF for this tour
  },
  {
    id: 10,
    title: "Swat",
    duration: "05 Days",
    price: "PKR 120,000/-",
    image: img10,
    itineraryPDF: sawat5, // PDF for this tour
  },
  
];

const fadeInUpVariants = {
  hidden: { opacity: 0, y: 15 },
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

const TourSlider = () => {
  const navigate = useNavigate();

  const viewPdf = (pdfUrl) => {
    navigate("/view-itinerary", { state: { pdfUrl } });
  };

  return (
    <section>
      <div className="container mx-auto px-4  pt-14 xl:max-w-7xl">
      <div className="mb-4 text-center">
  <motion.div
    initial="hidden"
    whileInView="visible"
    variants={fadeInUpVariants}
    viewport={{ once: false, amount: 0.9 }}
  >
    <h2 className="text-[clamp(2rem,5vw,3rem)] font-extrabold text-gray-800 uppercase">
      INTERNATIONAL TOURS
    </h2>
  </motion.div>
  <p className="text-base sm:text-lg md:text-xl text-gray-600 px-3 max-w-2xl mx-auto">
    Discover handcrafted international tours to the world's most captivating destinations. 
   
  </p>
</div>
        <div className="flex flex-wrap justify-center gap-6">
          {tours.map((tour) => (
            <motion.div
              key={tour.id}
              className="relative bg-[#E0F2FE] border-2 border-[#1D4ED8] rounded-lg overflow-hidden flex flex-col h-full w-72"
              initial={{ borderColor: "#E0F2FE" }}
              animate={{
                borderColor: ["#E0F2FE", "#4AC9FF", "#00F5FF", "#4AC9FF"],
                transition: {
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                },
              }}
            >
              <div className="relative w-full h-60 mb-2 overflow-hidden rounded-md">
                <img
                  src={tour.image}
                  alt={tour.title}
                  className="w-full h-full object-fill"
                />
              </div>
              <div className="text-left px-4 pb-4">
                <p className="flex items-center text-yellow-600 text-sm font-medium">
                  <FaRegClock className="mr-1" /> {tour.duration}
                </p>
                <h3 className="text-lg font-extrabold text-gray-800 leading-tight">
                  {tour.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  Starting From <span className="ml-2 text-red-500 font-bold">{tour.price}</span>
                </p>
              </div>
              <div className="flex items-center justify-center px-4 pb-4">
              <button
        onClick={() => viewPdf(tour.itineraryPDF)} // Navigate to PDF viewer
        className="flex items-center justify-center w-auto h-auto bg-blue-500 text-white  text-xs py-2.5  px-4 font-semibold rounded hover:bg-blue-600 transition"
      >
        VIEW ITINERARY
      </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TourSlider;
