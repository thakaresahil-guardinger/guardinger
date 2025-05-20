import React from "react";
import Slider from "react-slick";
import "../assets/css/Affiliation.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  DPIIT_cred,
  DYNALOG_cred,
  ENDUREAIR_cred,
  GOV_cred,
  IDEX_cred,
  IITD_cred,
  IITDIIC_cred,
  IITH_cred,
  IITT_cred,
  MSME_cred,
  IITTIRUPATI,
  NAVY_cred,
  STARTUP_cred,
  WESEE_cred,
} from "../assets/img/affiliations";

const images = [
  { src: DPIIT_cred, name: "DPIIT" },
  { src: DYNALOG_cred, name: "Dynalog" },
  { src: ENDUREAIR_cred, name: "EndureAir" },
  { src: GOV_cred, name: "Government" },
  { src: IDEX_cred, name: "IDEX" },
  { src: IITD_cred, name: "IIT Delhi" },
  { src: IITDIIC_cred, name: "IITD IIC" },
  { src: IITH_cred, name: "IIT Hyderabad" },
  { src: MSME_cred, name: "MSME" },
  { src: NAVY_cred, name: "Indian Navy" },
  { src: STARTUP_cred, name: "Startup India" },
  { src: WESEE_cred, name: "WESEE" },
  { src: IITTIRUPATI, name: "IIIT Tirupati" },
];

const Affiliation = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="main-affiliation">
      <div className="affiliation-text text-xs sm:text-xl md:text-2xl font-semibold text-center py-4 px-2">
      Associations
      </div>
      <div className="affiliation-container">
        <div className="slider-mask-left" />
        <div className="slider-mask-right" />
        <div className="affiliation-slider">
          <Slider {...settings}>
            {images.map((item, index) => (
              <div key={index} className="slider-item">
                <img src={item.src} alt={`Logo of ${item.name}`} loading="lazy" />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Affiliation;
