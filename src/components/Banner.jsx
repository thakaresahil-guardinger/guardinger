import React, { useState, useEffect, useCallback, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  EffectCoverflow,
  Pagination,
  Navigation,
  Autoplay,
  A11y,
} from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/a11y";

import {
  underwater_hero,
  condition_hero,
  situation_hero,
  measurementtestrig,
  climate,
  engineeringsoftware,
} from "../assets/img/topbanner";

// Configuration constants
const SLIDE_DELAY = 7000;
const ANIMATION_DURATION = 300;
const CYCLE_COMPLETION_TIMEOUT = 42000;

const images = [
  {
    url: underwater_hero,
    title: "Underwater Technology Solutions For Strategies Application",
    description:
      "Diving into underwater innovation with advanced signal processing and sustainable monitoring in maritime industries",
    alt: "Underwater technology equipment in marine environment",
  },
  {
    url: condition_hero,
    title: "Edge Computer-Based Sensor Suite For Strategic Applications",
    description:
      "Custom predictive maintenance hardware & software for defense & Industrial assets: Ships, Tanks & Aircrafts & Critical Industrial Machinery",
    alt: "Edge computing sensor suite used on industrial equipment",
  },
  {
    url: situation_hero,
    title: "Situational Awareness and Command Control Softwares",
    description:
      "Real-time sensor data integration directly within the user interface, enabling real-time monitoring, data visualization, and interaction",
    alt: "Command control interface showing situational awareness software",
  },
  {
    url: climate,
    title: "Climate Sciences and Weather Services",
    description:
      "Seamless integration of real-time sensor data for live weather monitoring, visualization, and rapid response.",
    alt: "Weather monitoring station with climate science equipment",
  },
  {
    url: measurementtestrig,
    title:
      "Measurement Systems and Fabrication of Test Rigs & Electromechanical Systems",
    description:
      "We design and build intelligent measurement systems and custom test rigs that enable real-time insights into critical components, processes, and experimental setups — where accuracy, repeatability, and robustness are essential.",
    alt: "Precision measurement test rig with electromechanical components",
  },
  {
    url: engineeringsoftware,
    title: "Advanced Software for Engineering & Strategic Applications",
    description:
      "We build mission-ready software for defense, science, and industry. Engineered for real-time performance, security, and reliability.",
    alt: "Software engineering interface for strategic applications",
  },
];

const SwiperBanner = ({
  onCycleComplete = () => {},
  slideDelay = SLIDE_DELAY,
  cycleTimeout = CYCLE_COMPLETION_TIMEOUT,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animateTitle, setAnimateTitle] = useState(true);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  const totalSlides = images.length;
  const swiperRef = useRef(null);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Handle slide change with animation
  const handleSlideChange = useCallback(
    (swiper) => {
      setAnimateTitle(false);

      setTimeout(() => {
        setActiveIndex(swiper.realIndex);
        setAnimateTitle(true);

        // Check if we've reached the last slide
        if (swiper.realIndex === totalSlides - 1) {
          setTimeout(() => onCycleComplete(), slideDelay);
        }
      }, ANIMATION_DURATION);
    },
    [onCycleComplete, totalSlides, slideDelay]
  );

  // Get responsive title text sizes based on screen width
  const getTitleTextClasses = () => {
    if (windowWidth < 320) {
      return "text-sm leading-tight";
    } else if (windowWidth < 480) {
      return "text-base leading-tight";
    } else if (windowWidth < 640) {
      return "text-base leading-tight";
    } else if (windowWidth < 768) {
      return "text-lg leading-tight";
    } else if (windowWidth < 1024) {
      return "text-xl leading-tight";
    } else {
      return "text-2xl";
    }
  };

  // Get responsive description text sizes based on screen width
  const getDescriptionTextClasses = () => {
    if (windowWidth < 320) {
      return "text-xs leading-tight";
    } else if (windowWidth < 480) {
      return "text-xs leading-tight";
    } else if (windowWidth < 640) {
      return "text-sm leading-tight";
    } else if (windowWidth < 768) {
      return "text-sm leading-normal";
    } else if (windowWidth < 1024) {
      return "text-base leading-normal";
    } else {
      return "text-lg";
    }
  };

  // Get responsive slidesPerView based on screen width
  const getSlidesPerView = () => {
    if (windowWidth < 320) {
      return 1;
    } else if (windowWidth < 480) {
      return 1.02;
    } else if (windowWidth < 640) {
      return 1.05;
    } else if (windowWidth < 768) {
      return 1.1;
    } else if (windowWidth < 1024) {
      return 1.2;
    } else if (windowWidth < 1280) {
      return 1.3;
    } else {
      return 1.4;
    }
  };

  // Get CSS classes for animated text elements
  const getAnimatedTextClasses = (isTitle = true) => {
    const baseClasses = isTitle
      ? `${getTitleTextClasses()} font-bold text-center transition-all duration-500 ease-out font-sora text-2xl`
      : `${getDescriptionTextClasses()} text-center transition-all duration-500 ease-out delay-100 font-inter`;

    const animationClasses = animateTitle
      ? " blur-0 opacity-100"
      : " blur-md opacity-0";

    return `${baseClasses} ${animationClasses}`;
  };

  // Calculate image height based on screen size
  const getImageHeight = () => {
    if (windowWidth < 320) {
      return "h-[30vh]";
    } else if (windowWidth < 480) {
      return "h-[35vh]";
    } else if (windowWidth < 640) {
      return "h-[40vh]";
    } else if (windowWidth < 768) {
      return "h-[50vh]";
    } else if (windowWidth < 1024) {
      return "h-[60vh]";
    } else if (windowWidth < 1280) {
      return "h-[65vh]";
    } else {
      return "h-[70vh]";
    }
  };

  // Setting up cycle completion timer
  useEffect(() => {
    const timer = setTimeout(() => {
      onCycleComplete();
    }, cycleTimeout);

    return () => clearTimeout(timer);
  }, [onCycleComplete, cycleTimeout]);

  // Set up optimal coverflow effect based on screen width
  const getCoverflowSettings = () => {
    if (windowWidth < 480) {
      return {
        rotate: 0,
        stretch: 30,
        depth: 50,
        modifier: 2,
      };
    } else {
      return {
        rotate: 0,
        stretch: 130,
        depth: 100,
        modifier: 5,
      };
    }
  };

  return (
    <div className="w-full h-[70vh] md:h-[95vh] flex items-center">
      <div className="w-full h-[70vh] md:h-[95vh]  px-2 pt-16 sm:pt-18 md:pt-10 sm:px-4 md:px-6 lg:px-10 pb-6 sm:pb-8 md:pb-10 flex flex-col items-center justify-center">
        {/* Title and description section */}
        <div className="text-center sm:max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mb-2 sm:mb-3 md:mb-4 space-y-1 sm:space-y-2 px-1 sm:px-2 min-h-[40px] sm:min-h-[60px] md:min-h-[60px]">
          <h2 className={getAnimatedTextClasses(true)}>
            {images[activeIndex]?.title}
          </h2>
          {/* <p className={getAnimatedTextClasses(false)}>
            {images[activeIndex]?.description}
          </p> */}
        </div>

        {/* Swiper carousel section */}
        <div className="w-full md:w-[80vw] lg:w-[90vw]  relative">
          <Swiper
            ref={swiperRef}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            autoplay={{
              delay: slideDelay,
              disableOnInteraction: false,
            }}
            loop={true}
            slidesPerView={getSlidesPerView()}
            coverflowEffect={getCoverflowSettings()}
            pagination={{
              el: ".swiper-pagination-custom",
              clickable: true,
              bulletClass:
                "w-1 h-1 sm:w-2 sm:h-2 mx-1 rounded-full bg-gray-300 inline-block cursor-pointer",
              bulletActiveClass: "bg-blue-500",
            }}
            navigation={{
              prevEl: ".custom-prev",
              nextEl: ".custom-next",
            }}
            a11y={{
              enabled: true,
              prevSlideMessage: "Previous slide",
              nextSlideMessage: "Next slide",
            }}
            modules={[EffectCoverflow, Pagination, Navigation, Autoplay, A11y]}
            onSlideChange={handleSlideChange}
            className="w-full"
          >
            {images.map((item, index) => (
              <SwiperSlide
                key={index}
                className="relative bg-white rounded-lg sm:rounded-xl shadow-md overflow-hidden transition-transform duration-300"
              >
                <img
                  src={item.url}
                  alt={item.alt || item.title}
                  className={`w-full ${getImageHeight()} object-cover`}
                  loading={index === 0 ? "eager" : "lazy"}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </SwiperSlide>
            ))}

            {/* Custom navigation controls */}
            <div className="absolute bottom-2 sm:bottom-3 md:bottom-4 left-1/2 transform -translate-x-1/2 z-10 flex items-center gap-2 sm:gap-3 text-white">
              <button
                className="custom-prev w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center bg-black/40 hover:bg-black/60 rounded-full transition-colors duration-300"
                aria-label="Previous Slide"
              >
                <span className="sr-only">Previous</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  className="sm:w-4 sm:h-4"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
                  />
                </svg>
              </button>

              <div className="swiper-pagination-custom" />

              <button
                className="custom-next w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center bg-black/40 hover:bg-black/60 rounded-full transition-colors duration-300"
                aria-label="Next Slide"
              >
                <span className="sr-only">Next</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  className="sm:w-4 sm:h-4"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                  />
                </svg>
              </button>
            </div>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default SwiperBanner;
