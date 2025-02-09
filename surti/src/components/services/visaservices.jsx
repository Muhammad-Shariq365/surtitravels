import React from "react";
import { FaRegCalendarAlt, FaMoneyBillAlt } from "react-icons/fa";

const visaData = [
  {
    country: "USA",
    flag: "https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States.svg",
    workingDays: 10,
    cost: "$160",
  },
  {
    country: "Canada",
    flag: "https://upload.wikimedia.org/wikipedia/commons/c/cf/Flag_of_Canada.svg",
    workingDays: 15,
    cost: "$100",
  },
  {
    country: "Germany",
    flag: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Flag_of_Germany.svg",
    workingDays: 12,
    cost: "$140",
  },
  {
    country: "Japan",
    flag: "https://upload.wikimedia.org/wikipedia/commons/9/9e/Flag_of_Japan.svg",
    workingDays: 15,
    cost: "$110",
  },
  {
    country: "United Kingdom",
    flag: "https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg",
    workingDays: 14,
    cost: "$150",
  },
  {
    country: "France",
    flag: "https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg",
    workingDays: 10,
    cost: "$120",
  },
  {
    country: "Italy",
    flag: "https://upload.wikimedia.org/wikipedia/en/0/03/Flag_of_Italy.svg",
    workingDays: 11,
    cost: "$130",
  },
  {
    country: "Australia",
    flag: "https://upload.wikimedia.org/wikipedia/en/b/b9/Flag_of_Australia.svg",
    workingDays: 20,
    cost: "$180",
  },
];

const VisaCard = ({ country, flag, workingDays, cost }) => {
  return (
    <div className="bg-slate-300 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <img src={flag} alt={country} className="w-20 h-20 object-cover rounded-full mx-auto mb-4" />
      <h3 className="text-2xl font-semibold text-center mb-2">{country}</h3>
      <div className="flex justify-center items-center space-x-3">
        <div className="flex items-center">
          <FaRegCalendarAlt className="text-green-700 mr-2 h-4 w-4" />
          <span>{workingDays} Days</span>
        </div>
        <div className="flex items-center">
          <FaMoneyBillAlt className="text-green-700 mr-2 h-5 w-5" />
          <span>{cost}</span>
        </div>
      </div>
    </div>
  );
};

const VisaSection = () => {
  return (
    <section className="bg-gray-50 px-4 container mx-auto">
      <div className="text-center pt-16 pb-20">
        <div className="text-center mb-8">
          <h1 className="text-[clamp(2rem,5vw,3rem)] lg:text-5xl font-bold text-gray-800 mb-2 tracking-tight">
            VISA MANAGEMENT
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Simplify your traveling plan and explore countries around the globe.
          </p>
        </div>
        <div className="grid mx-auto grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl xl:max-w-5xl">
          {visaData.map((visa, index) => (
            <VisaCard
              key={index}
              country={visa.country}
              flag={visa.flag}
              workingDays={visa.workingDays}
              cost={visa.cost}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisaSection;
