import React, { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    { question: "What are the required documents to apply for E-Visa?", answer: "You need a valid passport, recent passport-sized photograph, and supporting documents as per requirements." },
    { question: "What type of Umrah packages do we offer?", answer: "We offer budget, standard, and premium packages to suit diverse preferences and budgets." },
    { question: "Do you provide Umrah E-Visa only?", answer: "Yes, we offer standalone E-Visa services for Umrah." },
    { question: "What is the difference between transport included and without transport E-Visa?", answer: "A transport-included E-Visa covers intra-city travel, while a without-transport option does not." },
    { question: "Is vaccination required before going for Umrah?", answer: "Yes, mandatory vaccinations such as meningitis and COVID-19 are required." },
    { question: "When is the ideal time to go for Umrah on a limited budget?", answer: "Traveling during off-peak months is best for a budget-friendly Umrah experience." },
    { question: "How do I get an Umrah package?", answer: "You can select a package and book through our website or contact our customer service." },
    { question: "How much time is required for visa processing?", answer: "Visa processing typically takes 3-5 business days, depending on the requirements." },
    { question: "What is the duration of E-Visa and how long can I stay after securing my E-Visa?", answer: "The E-Visa is valid for 90 days, allowing a maximum stay of 30 days." },
    { question: "Can I perform Umrah more than once a year?", answer: "Yes, you are allowed to perform Umrah multiple times in a year." },
    { question: "How do I get an appointment to pray in Riaz-ul-Jannah in Madinah?", answer: "Appointments can be booked via the official Nusuk app or through authorized agents." },
    { question: "Can a lady travel by herself?", answer: "Yes, women can travel alone for Umrah if they meet the specific requirements set by Saudi authorities." },
  ];
  
  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 pt-14 pb-16">
      <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold text-center text-gray-800 mb-4 tracking-tight">
        FREQUENTLY ASKED QUESTIONS
      </h1>
      <p className="text-base sm:text-lg md:text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto">
      Find answers to common questions below. Contact us if you need further assistance.
</p>
      <div className="space-y-1">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-blue-800 text-white  overflow-hidden shadow-md transition-all duration-300"
          >
            {/* Question */}
            <button
              className="flex justify-between items-center w-full px-4 py-3 text-left text-md sm:text-lg  focus:outline-none hover:bg-blue-700"
              onClick={() => toggleFaq(index)}
            >
              <span>{faq.question}</span>
              <span>
                {openIndex === index ? (
                  <AiOutlineMinus className="text-xl transition-transform duration-300 transform rotate-180" />
                ) : (
                  <AiOutlinePlus className="text-xl transition-transform duration-300" />
                )}
              </span>
            </button>
            {/* Answer */}
            <div
              className={`transition-[max-height] duration-500 ease-in-out overflow-hidden ${
                openIndex === index ? "max-h-40" : "max-h-0"
              }`}
            >
              <div className="px-4 py-2 bg-blue-900 text:md sm:text-lg animate-fadeIn">
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faqs;
