import React from 'react';
import { Link } from 'react-router-dom';
import { FaUsers, FaSuitcase, FaGlobeAmericas } from 'react-icons/fa';

const tours = [
  {
    id: 1,
    icon: <FaUsers className="text-5xl" />,
    title: "Group Tours",
    description: "Join like-minded travelers and explore exciting destinations with us",
    bgColor: "bg-gradient-to-r from-blue-400 to-blue-500",
    cta: "Learn More",
    link: "/tours#group-tours"  // Link updated to navigate with hash
  },
  {
    id: 2,
    icon: <FaSuitcase className="text-5xl" />,
    title: "Private Tours",
    description: "Experience exclusive tours tailored to your personal preferences.",
    bgColor: "bg-gradient-to-r from-blue-400 to-blue-500",
    cta: "Learn More",
    link: "/tours#private-tours"  // Link updated to navigate with hash
  },
  {
    id: 3,
    icon: <FaGlobeAmericas className="text-5xl" />,
    title: "International Tours",
    description: "Explore the world’s most famous destinations with our expert guides.",
    bgColor: "bg-gradient-to-r from-blue-400 to-blue-500",
    cta: "Learn More",
    link: "/tours#honeymoon-tours"  // Link updated to navigate with hash
  }
];

const TourSections = () => {
  return (
    <section className="bg-g px-4">
      <div className="container mx-auto text-center xl:max-w-5xl pt-16 pb-20">
        <div className="text-center mb-8">
          <h1 className="text-[clamp(2rem,5vw,3rem)] lg:text-5xl font-bold text-center text-gray-800 mb-2 tracking-tight">
            OUR TOURS
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 text-center max-w-2xl mx-auto">
            Embark on unforgettable journeys with our curated tour packages. Discover new destinations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {tours.map((tour) => (
            <div key={tour.id} className="relative group rounded-lg shadow-xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-400 opacity-100"></div>

              <div className="relative py-8 text-white text-center space-y-6">
                <div className="transition-all px-8 duration-500">
                  {tour.icon}
                </div>
                <h3 className="text-3xl font-semibold  ">{tour.title}</h3>
                <p className="text-lg px-8">{tour.description}</p>
                <Link
                  to={tour.link} // Using Link component for React Router
                  className="hover:scale-105 inline-block bg-white text-lg text-blue-500 px-3 py-2 rounded-lg font-bold transition-all duration-300"
                >
                  {tour.cta}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TourSections;
