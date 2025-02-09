import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import HeaderReusable from "../HeaderResuable";

const TermsSection = () => {
  const sectionRefTerms = useRef(null);
  const [visibleItems, setVisibleItems] = useState([]);

  const terms = [
    "Every participant must keep his/her original CNIC. Also, a Photocopy of Nikahnama or updated CNIC is mandatory for those married couples who need a separate room.",
    "Travel lightly! More luggage means more time for packing and unpacking (Ideal luggage weight should be 10 KG). Also, carry a bag pack to avoid carrying luggage everywhere.",
    "Keep a thermal, thermals are useful in case of extreme cold. (Optional)",
    "For Gents, keep 2-3 pairs of jeans, a trouser, a couple of shirts, T-shirts, a pair of joggers, a jacket and you're good to go.",
    "For Ladies, keep 3-4 suits, a couple of uppers, warm boots and a shawl.",
    "Bring your toiletries. (Tooth paste, face wash, etc.)",
    "Keep a water bottle with you throughout the trip.",
    "Keep a Raincoat/Umbrella.",
    "Please read the terms and conditions carefully. Any violation can lead to abandoning your trip on the spot.",
    "Please be Punctual throughout the trip. Being late means we will have to skip a few stops for sightseeing to cover up the time.",
    "Make sure you travel like a family and make all its members safe and connected to each other while respecting the locals."
  ];
  
  

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = parseInt(entry.target.dataset.index, 10);
          if (entry.isIntersecting && !visibleItems.includes(index)) {
            setVisibleItems((prev) => [...prev, index]);
          }
        });
      },
      {
        threshold: 0.5, // Trigger when 50% of the element is visible
      }
    );

    const items = document.querySelectorAll(".term-item");
    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, [visibleItems]);

  return (
    <>
     <HeaderReusable
        title="TRAVEL INSTRUCTIONS"
        subtitle="Find answers to common queries."
        imageUrl="https://plus.unsplash.com/premium_photo-1681487906725-ecd65970ac66?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
    <div
      ref={sectionRefTerms}
      className="container mx-auto py-16 rounded-lg"
    >
      <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold text-center text-gray-800 mb-4 tracking-tight">
        
      FOR THE MEMBERS WHO BOOKED US
      </h1>
      <ul className="mt-4">
        {terms.map((term, index) => (
          <motion.li
            key={index}
            data-index={index}
            className="term-item text-base   sm:text-lg md:text-xl py-2  text-gray-700 flex items-start px-3 space-x-3 text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={
              visibleItems.includes(index)
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: 20 }
            }
            transition={{ duration: 0.5 }}
          >
            <span className="text-blue-600">•</span>
            <span>{term}</span>
          </motion.li>
        ))}
      </ul>
    </div>
    </>
  );
};

export default TermsSection;
