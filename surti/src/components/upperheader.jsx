import React from 'react';
import { FaPhoneAlt } from "react-icons/fa"; // Importing a better phone icon

const Header = () => {
  return (
    <header className="hidden md:flex overflow-hidden bg-blue-600 text-white py-2 px-4 md:px-16 flex-col md:flex-row justify-between items-center">
      <div className="flex items-center space-x-4">
        <ContactItem href="tel:0335-2629979" icon={<FaPhoneAlt className="h-5 w-5 text-white" />} text="0335-2629979" />
        <div className="hidden md:block border-l-2 border-white h-6 mx-4" /> {/* Vertical line */}
        <ContactItem href="tel:03149523994" icon={<FaPhoneAlt className="h-5 w-5 text-white" />} text="0314-9523994" />
      </div>
    
      <div className="flex items-center space-x-4">
        <span>F-60/61, RJ Mall Karachi, Gulistan-e-Johar, Karachi,</span>
        <div className="hidden md:block border-l-2 border-white h-6 mx-4" /> {/* Vertical line between address and timings */}
        <span>Mon - Sat 11:00 AM - 07:00 PM</span>
      </div>
    </header>
  );
};

const ContactItem = ({ href, icon, text }) => {
  return (
    <a href={href} className="flex items-center space-x-2">
      {icon}
      <span>{text}</span>
    </a>
  );
};

export default Header;
