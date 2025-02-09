import React from "react";
import { FaFacebookF, FaInstagram, FaYoutube, FaWhatsapp, FaTiktok, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";

const fadeInUpVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: 0.5, ease: "easeOut" },
  },
};

const socialLinks = [
  { name: "Facebook", icon: <FaFacebookF />, link: "https://www.facebook.com/surtitoursandtravels/", bgColor: "bg-blue-500" },
  { name: "Instagram", icon: <FaInstagram />, link: "https://www.instagram.com/surtitravels/", bgColor: "bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500" },
  { name: "YouTube", icon: <FaYoutube />, link: "https://youtube.com", bgColor: "bg-red-500" },
  { name: "WhatsApp", icon: <FaWhatsapp />, link: "https://wa.me/", bgColor: "bg-green-600" },
  { name: "TikTok", icon: <FaTiktok />, link: "https://www.tiktok.com/@surti.tours.and.t", bgColor: "bg-black" },
  { name: "Twitter", icon: <FaTwitter />, link: "https://twitter.com", bgColor: "bg-blue-400" },
];

const ContactSocialMedia = () => {
  return (
    <section className="mt-10 mb-12 px-4">
      <div className="container mx-auto text-center">
        {/* Animated heading */}
        <motion.h2
          className="text-[clamp(2rem,5vw,3rem)] font-extrabold text-black uppercase mb-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={fadeInUpVariants}
        >
          OUR SOCIAL MEDIA
        </motion.h2>

        {/* Social Media Icons */}
        <div className="flex flex-wrap justify-center items-center gap-10 sm:gap-16 md:gap-20">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center group"
            >
              <div
                className={`${social.bgColor} text-white p-5 rounded-full text-5xl sm:text-6xl md:text-7xl transition-transform transform group-hover:scale-110 shadow-lg`}
              >
                {social.icon}
              </div>
              <p className="mt-2 text-lg font-semibold text-gray-800 group-hover:text-blue-500 transition-colors">
                {social.name}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSocialMedia;
