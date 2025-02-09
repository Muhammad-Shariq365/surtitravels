import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const TermsSection = () => {
  const sectionRefTerms = useRef(null);
  const [visibleItems, setVisibleItems] = useState([]);

  const terms = [
    "Changes to the Umrah package may be made up to 30 days prior to departure. Any changes made will incur a fee.",
    "The above mentioned hotels are subject to availability at the time of booking. In case of non-availability, an equivalent hotel will be booked for the members.",
    "Surti Tour & Travels is not responsible for personal injuries and accidents.",
    "Surti Tour & Travels is not responsible for the loss of any kind of valuable item.",
    "Surti Tour & Travels is not responsible for any taxi charges or any charges not included in the package.",
    "Surti Tour & Travels is not responsible in case any member misses shared bus transport due to late arrival, etc.",
    "Surti Tour & Travels is not responsible for any delays or cancellations caused by acts of God, war, civil unrest, or other unforeseen circumstances."
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
    <div
      ref={sectionRefTerms}
      className="max-w-7xl mx-auto  px-8 rounded-lg pb-12 pt-14"
    >
      <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold text-center text-gray-800 mb-4 tracking-tight">
        TERMS & CONDITIONS
      </h1>
      <ul className="mt-4">
        {terms.map((term, index) => (
          <motion.li
            key={index}
            data-index={index}
            className="term-item text-lg text-gray-700 flex items-start space-x-3 p-3 text-justify"
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
  );
};

export default TermsSection;
