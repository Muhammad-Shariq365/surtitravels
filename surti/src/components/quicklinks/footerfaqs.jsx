import React, { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import HeaderReusable from "../HeaderResuable";

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What travel services do you offer?",
      answer: "We offer a variety of travel services including guided tours, transportation bookings, accommodation arrangements, and tailored travel packages for different destinations."
    },
    {
      question: "How to book a trip?",
      answer: "You can book a trip by visiting our website and selecting your desired destination, dates, and package. Alternatively, you can contact our customer service team for assistance."
    },
    {
      question: "Where can I join the Northern areas trip from? (Fixed Departure Tour)",
      answer: "You can join the Northern areas trip from our designated departure points in major cities, including Islamabad, Lahore, and Karachi."
    },
    {
      question: "Will you provide train/ bus/ air tickets to travel to Islamabad and back to my city?",
      answer: "Yes, we provide transportation tickets for travel to Islamabad from your city by bus, train, or air, depending on the tour package you select."
    },
    {
      question: "How many people are there in one trip? (Fixed Departure Tour)",
      answer: "The fixed departure tours are usually conducted with a group size ranging from 10 to 25 people, ensuring a comfortable and engaging travel experience."
    },
    {
      question: "What is the child policy for a tour?",
      answer: "Children below the age of 5 can travel free of charge if they do not require a separate seat. For children above 5 years, the applicable child fare will be charged."
    },
    {
      question: "What is the tour refund or cancellation policy?",
      answer: "We offer a flexible cancellation policy. You can cancel your booking up to 7 days before the departure date for a full refund. Cancellations within 7 days may incur a partial charge based on the booking terms."
    },
    {
      question: "In which city you are located?",
      answer: "Our office is located in Islamabad, but we serve travelers nationwide."
    }
  ];
  
  
  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  
  return (
    <>
      <HeaderReusable
        title="FREQUENT QUESTIONS"
        subtitle="Find answers to common queries."
        imageUrl="https://plus.unsplash.com/premium_photo-1679957332786-3fa042cc3ae2?q=80&w=1460&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold text-center text-gray-800 mb-4 tracking-tight">
          YOUR QUESTIONS
     
     
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Find answers to common questions below. Contact us if you need further assistance.
        </p>
        <div className="space-y-1">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-blue-800 text-white overflow-hidden shadow-md transition-all duration-300"
            >
              {/* Question */}
              <button
                className="flex justify-between items-center w-full px-4 py-3 text-left text-md sm:text-lg focus:outline-none hover:bg-blue-700"
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
                <div className="px-4 py-2 bg-blue-900 text-md sm:text-lg animate-fadeIn">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Faqs;
