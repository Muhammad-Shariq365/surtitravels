import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import HeaderReusable from "../HeaderResuable";
const TermsSection = () => {
  const sectionRefTerms = useRef(null);
  const [visibleItems, setVisibleItems] = useState([]);

  const terms = [
    "Minimum number to carry out a trip is 10-12. In case a trip is called off by Sutri Tour and Travels due to low registration, the members who have paid will be entitled to a 100% refund or transfer the amount to the next trip.",
    "The above-mentioned hotels are subject to availability during peak season.",
    "2 Person Sharing for ONLY Married Couple or Family or 2 Males or 2 Females.",
    "Don't pollute the environment or you will be charged for it.",
    "Please ensure to follow the team leader's orders.",
    "Be thoughtful of not failing any ethical integrity.",
    "Members should report an hour before departure time. In case of late arrival, the tour bus will leave after 15 minutes of waiting. Sutri Tour and Travels will take no responsibility and bear no extra expense in case of such an incident.",
    "Members must behave ethically with his/her fellow group members; otherwise, Sutri Tour and Travels can cancel his/her trip at any time.",
    "Sutri Tour and Travels is not responsible for personal injuries and accidents.",
    "Sutri Tour and Travels is not responsible for the loss of any kind of valuable item.",
    "No refunds shall be made in any case if a member leaves/exits during the trip.",
    "No refunds shall be made in case of a natural disaster or any unforeseen circumstance beyond human control including but not limited to rains, storms, land sliding, road closure, accident, flat tires, engine failure, or other vehicle malfunctions, etc.",
    "Sutri Tour and Travels can cancel the booking at any time.",
    "Sutri Tour and Travels can change terms and conditions at any time without prior notice.",
    "Personal weapons/drugs are strictly prohibited.",
    "Rooms are provided on Quad/4 persons sharing basis (including mattress).",
    "Sight tickets for forts/national parks are not included in the package.",
    "Bus/Air/Train tickets are subject to availability. If available upon checking, reservation will only be guaranteed upon transfer of payment.",
    "Fare & availability are based upon continuous change, and any sudden change after payment will be communicated.",
    "The above price of the trip quoted is as per the current fuel prices. Any hike in fuel price before/on the trip will lead to a change in the package price.",
    "All prices for PRIVATE/CUSTOMIZED tours are net amounts payable to the company and are exclusive of taxes. Taxes can be added upon request.",
    "If accommodation is given in triple/quad sharing, then rooms will be provided with master/triple beds with mattresses.",
    "At least 50% payment must be cleared at the time of confirmation, with the remaining 50% before departure.",
    "Total payment must be made before the start of the trip.",
    "Payment should be done via CASH/BANK TRANSFER/CHEQUE.",
    "Any drastic change in fuel price before the tour start will increase the cost of the tour.",
    "Every member must keep his/her original CNIC OR Passport/Visa in case of foreign nationality.",
    "Sutri Tour and Travels is not responsible for personal injuries and accidents.",
    "Sutri Tour and Travels is not responsible for the loss of any kind of valuable item."
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
    title="TERMS & CONDITIONS"
    subtitle="Find answers to common queries."
    imageUrl="https://images.unsplash.com/photo-1562564055-71e051d33c19?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  />
    <div
      ref={sectionRefTerms}
      className="container mx-auto  rounded-lg py-16"
    >
      <h1 className="text-3xl sm:text-4xl flex justify-center items-center md:text-4xl lg:text-5xl font-bold text-center text-gray-800 mb-4 tracking-tight">
        FOR ALL TRAVELERS
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
