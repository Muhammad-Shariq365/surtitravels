import React from "react";
import { FaWhatsapp, FaPhone, FaEnvelope, FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import { SiTiktok } from "react-icons/si"; // TikTok icon
import Logo from '../assets/surti-tranparent.png';
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <div className="h-auto">
      <footer
        className="bg-gradient-to-b from-green-200 to-blue-900 text-white py-6 h-full relative"
        style={{
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-blue-600 opacity-40"></div>

        <div className="container mx-auto px-6 relative z-10 h-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Left Section */}
            <div className="space-y-6">
              <img src={Logo} alt="Surti Tour and Travels Logo" className="w-48 h-auto mb-4" />
              <p className="text-md font-semi-bold leading-relaxed opacity-80">
                Surti Tour and Travels is a premier government-licensed tour operations and destination management company
                committed to creating unique travel experiences for our clients.
              </p>
            </div>

            {/* Center Section */}
            <div className="md:mx-auto md:mr-4 md:my-auto">
              <h2 className="text-3xl font-semibold mb-6">Quick Links</h2>
              <ul className="space-y-3 font-semibold">
                <li>
                  <Link to="/refund-policy" className="hover:text-blue-600 transition duration-300">
                    Refund Policy
                  </Link>
                </li>
                <li>
                  <Link to="/terms&conditions" className="hover:text-blue-600 transition duration-300">
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link to="/travelers-instructions" className="hover:text-blue-600 transition duration-300">
                    Traveler's Instructions
                  </Link>
                </li>
                <li>
                  <Link to="/FAQS" className="hover:text-blue-600 transition duration-300">
                    Frequently Asked Questions
                  </Link>
                </li>
              </ul>
            </div>

            {/* Right Section */}
            <div className="md:mx-auto md:mr-0 md:my-auto">
              <h2 className="text-3xl font-semibold mb-4">Get In Touch</h2>
              <ul className="space-y-3 font-semibold">
                <li className="flex items-center space-x-3">
                  <FaWhatsapp className="text-green-400 w-7 h-[30px]" />
                  <span>0335-2629979</span>
                </li>
                <li className="flex items-center space-x-3">
                  <FaPhone className="text-red-400 w-6 h-6" />
                  <span>0314-9523994</span>
                </li>
                <li className="flex items-center space-x-3">
                  <FaEnvelope className="text-gray-500 w-6 h-6" />
                  <span>official.surtitrips@gmail.com</span>
                </li>
              </ul>
              {/* Social Media Buttons */}
              <div className="flex space-x-6 mt-6">
                <a href="https://www.facebook.com/surtitoursandtravels/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition duration-300">
                  <FaFacebookF className="w-6 h-6"/>
                </a>
                <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition duration-300">
                  <FaTwitter className="w-6 h-6"/>
                </a>
                <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition duration-300">
                  <FaYoutube className="w-6 h-6"/>
                </a>
                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition duration-300">
                  <FaInstagram className="w-6 h-6"/>
                </a>
                <a href="https://www.tiktok.com/@surti.tours.and.t" target="_blank" rel="noopener noreferrer" className="hover:text-black transition duration-300">
                  <SiTiktok className="w-6 h-6"/>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-10 flex flex-col md:flex-row justify-between items-center border-t border-white pt-6">
            <p className="text-sm font-semibold opacity-70">&copy; All Rights Reserved 2018 - 2024</p>
            {/* Motion Button for Bounce Animation */}
            <motion.div
              whileHover={{
                y: -3,  
                scale: 1,
              }}
              transition={{
                type: 'spring',
                stiffness: 300,
                damping: 8,     
              }}
            >
              <a
                href="https://wa.me/+923352629979"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 mt-6 md:mt-0 text-white p-3 font-bold rounded-md hover:bg-green-600 flex items-center"
              >
                <FaWhatsapp className="mr-1 w-6 h-6" /> Talk to Agent
              </a>
            </motion.div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
