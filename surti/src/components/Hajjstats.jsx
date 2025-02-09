import React, { useState, useEffect, useRef } from "react";
import { FaUsers, FaSuitcaseRolling, FaMapMarkerAlt, FaClock } from "react-icons/fa";

const StatsSection = () => {
  const stats = [
    { label: "Happy Customers", value: 450 * 5, icon: <FaUsers /> },
    { label: "Tours", value: 50 * 5, icon: <FaSuitcaseRolling /> },
    { label: "Destinations", value: 7 * 5, icon: <FaMapMarkerAlt /> },
    { label: "Traveling Hours", value: 8500 * 5, icon: <FaClock /> },
  ];

  const [counters, setCounters] = useState(stats.map(() => 0));
  const [isStatsVisible, setIsStatsVisible] = useState(false);
  const sectionRefStats = useRef(null);

  useEffect(() => {
    const observerStats = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsStatsVisible(true);
          observerStats.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRefStats.current) {
      observerStats.observe(sectionRefStats.current);
    }

    return () => {
      if (sectionRefStats.current) {
        observerStats.disconnect();
      }
    };
  }, []);

  useEffect(() => {
    if (isStatsVisible) {
      stats.forEach((stat, index) => {
        const increment = Math.ceil(stat.value / 100);
        let currentValue = 0;

        const intervalSpeed = 150;
        const duration = 3000;

        const interval = setInterval(() => {
          if (currentValue < stat.value) {
            currentValue += increment;
            setCounters((prev) => {
              const newCounters = [...prev];
              newCounters[index] = Math.min(currentValue, stat.value);
              return newCounters;
            });
          }
        }, intervalSpeed);

        setTimeout(() => {
          clearInterval(interval);
        }, duration);
      });
    }
  }, [isStatsVisible]);

  return (
    <div
      ref={sectionRefStats}
      className="mx-auto  relative grid grid-cols-1 px-14  gap-16 sm:gap-0 md:px-0 py-16 sm:py-10 md:grid-cols-4  "
    >
      {/* Background Layer with Parallax and Brightness */}
      <div
        className="absolute inset-0  brightness-75  bg-center md:bg-cover md:bg-fixed "
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1564769625905-50e93615e769?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          
        }}
      ></div>

      {stats.map((stat, index) => (
       <div className=""> 
         <div className="sm:p-6" key={stat.label}>
          <div className="flex  justify-center  py-6  flex-col items-center bg-white  shadow-lg rounded-lg hover:scale-105 transform transition duration-300">
            <div className=" text-6xl sm:text-7xl text-blue-600 ">{stat.icon}</div>
            <h3 className="text-6xl sm:text-7xl font-extrabold text-gray-800">
              {counters[index]}+
            </h3>
            <p className="text-xl sm:text-2xl font-medium text-gray-600 ">{stat.label}</p>
          </div>
        </div>
       </div>
      ))}
    </div>
  );
};

export default StatsSection; 