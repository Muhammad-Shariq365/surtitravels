import React from "react";
import { FaMapMarkedAlt, FaSuitcaseRolling } from "react-icons/fa";

const VisionMission = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">
          Our Vision & Mission
        </h2>

        <div className="flex flex-col md:flex-row md:justify-between gap-8">
          {/* Vision Section */}
          <div className="bg-white shadow-lg rounded-lg p-6 flex-1 hover:shadow-2xl transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <FaMapMarkedAlt className="text-green-600 text-3xl mr-3" />
              <h3 className="text-2xl font-semibold text-gray-800">
                Our Vision
              </h3>
            </div>
            <ul className="list-disc pl-8 text-gray-600 leading-relaxed">
              <li>To be the most trusted travel companion worldwide.</li>
              <li>
                Enabling seamless travel experiences filled with joy and
                exploration.
              </li>
              <li>Promoting sustainable and responsible tourism globally.</li>
            </ul>
          </div>

          {/* Mission Section */}
          <div className="bg-white shadow-lg rounded-lg p-6 flex-1 hover:shadow-2xl transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <FaSuitcaseRolling className="text-blue-600 text-3xl mr-3" />
              <h3 className="text-2xl font-semibold text-gray-800">
                Our Mission
              </h3>
            </div>
            <ul className="list-disc pl-8 text-gray-600 leading-relaxed">
              <li>
                To craft personalized journeys that inspire unforgettable
                memories.
              </li>
              <li>
                Offering top-notch services to make travel stress-free and
                enjoyable.
              </li>
              <li>
                Building a global community of happy travelers through trust,
                innovation, and integrity.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
