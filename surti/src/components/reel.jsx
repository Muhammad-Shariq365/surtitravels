import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import fbr from '../assets/gov-logos/fbr.png';
import matta from '../assets/gov-logos/matta.png';
import nadra from '../assets/gov-logos/nadra.png';
import ptdc from '../assets/gov-logos/ptdc-1.png';
import atm from '../assets/gov-logos/atm-1.png';

const PartnerLogos = () => {
  const settings = {
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    dots: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  const logos = [
    fbr,
    matta,
    nadra,
    ptdc,
    atm,
    fbr,
    matta,
    nadra,
    ptdc,
    atm,
    fbr,
    matta,
    nadra,
    ptdc,
    atm,
    fbr,
    matta,
    nadra,
    ptdc,
    atm,
    fbr,
    matta,
    nadra,
    ptdc,
    atm,
    fbr,
    matta,
    nadra,
    ptdc,
    atm,
    fbr,
    matta,
    nadra,
    ptdc,
    atm,
    fbr,
    matta,
    nadra,
    ptdc,
    atm,
    fbr,
    matta,
    nadra,
    ptdc,
    atm,
  ];

  return (
    <div className="max-w-7xl mx-auto relative">
      <Slider {...settings}>
        {logos.map((logo, index) => (
          <div key={index} className="px-2 relative w-36 h-36">
            <img
              src={logo}
              alt={`Partner Logo ${index + 1}`}
              className="w-full h-full rounded-lg object-fill"
              loading="lazy"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default PartnerLogos;
