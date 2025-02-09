import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import HeaderReusable from "../HeaderResuable";

const RefundPolicySection = () => {
  const sectionRefRefund = useRef(null);
  const [visibleItems, setVisibleItems] = useState([]);

  const groupTourRefundPolicy = [
    "50% Refund if Cancellation 7 days before the trip.",
    "30% Refund if Cancellation 5 days before the trip.",
    "0% Refund if Cancellation Less than 5 days before the trip.",
  ];

  const privateTourRefundPolicy = {
    hotel: [
      "Before 2 weeks: 100% refund to be made.",
      "Before 1 week: 75% refund to be made.",
      "Between 1 week and 24 hours: 60% refund to be made.",
      "Within 24 hours for flight cancellation or road block or slides: 60% refund to be made or booking can be adjusted within the same calendar year subject to availability.",
      "*Some hotels don't proceed with refunds as per above policies and only allow adjustment within the next calendar year. Kindly confirm with your agent before booking if any hotel included in your itinerary is the same.",
    ],
    transport: [
      "Before 1 week: 100% refund to be made.",
      "Between 1 week and 24 hours: 90% refund to be made.",
      "Within 24 hours: 80% refund to be made.",
    ],
    serviceCharges: [
      "Cash Refund: In any sort of cancellation, 10% of the total package price will be deducted as Surti Tour & Travels service charges.",
      "Payment Adjustment: In any sort of cancellation, the total package price can be adjusted after deduction of 5% service charges within the next 3 months of the booking. (Package price may vary depending on the booking month: shoulder/peak/off-season month.)",
    ],
  };

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
        threshold: 0.5,
      }
    );

    const items = document.querySelectorAll(".refund-item");
    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, [visibleItems]);

  const renderPolicyList = (policies, title, startIndex) => (
    <div className="mb-8">
      <h2 className="text-2xl px-3 font-semibold text-gray-800 mb-4">{title}</h2>
      <ul className="mt-4">
        {policies.map((policy, index) => (
          <motion.li
            key={index}
            data-index={startIndex + index}
            className="term-item text-base   sm:text-lg md:text-xl py-2  text-gray-700 flex items-start px-3 space-x-2 text-left"
            initial={{ opacity: 0, y: 20 }}
            viewport={{ once: false, amount: 0.9 }}
            animate={
              visibleItems.includes(startIndex + index)
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: 20 }
            }
            transition={{ duration: 0.5 }}
          >
            <span className="text-blue-600">•</span>
            <span>{policy}</span>
          </motion.li>
        ))}
      </ul>
    </div>
  );

  const renderPrivateTourPolicies = (title, categories) => (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4 px-3">{title}</h2>
      {Object.entries(categories).map(([category, policies], categoryIndex) => (
        <div key={categoryIndex} className="mb-6">
          <h3 className="text-xl font-semibold text-gray-700 mb-3 px-3 capitalize">
            {category}
          </h3>
          <ul>
            {policies.map((policy, index) => (
              <motion.li
                key={index}
                data-index={index}
                className="refund-item text-lg text-gray-700 flex items-start space-x-2 p-3 text-justify"
                initial={{ opacity: 0, y: 20 }}
                animate={
                  visibleItems.includes(index)
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.5 }}
              >
                <span className="text-blue-600">•</span>
                <span>{policy}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );

  return (
    <>
      <HeaderReusable
        title="REFUND POLICY"
        subtitle="Understand the refund terms for our trips."
        imageUrl="https://images.unsplash.com/photo-1518458028785-8fbcd101ebb9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <div
        ref={sectionRefRefund}
        className="container mx-auto pt-16 pb-8 rounded-lg"
      >
        <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold text-center text-gray-800 mb-8 tracking-tight">
          REFUND AMOUNT 
        </h1>
        {renderPolicyList(
          groupTourRefundPolicy,
          "Group Tours Refund Policy",
          0
        )}
        {renderPrivateTourPolicies(
          "Private Tours Refund Policy",
          privateTourRefundPolicy
        )}
      </div>
    </>
  );
};

export default RefundPolicySection;
