import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  underwater_hero,
  condition_hero,
  situation_hero,
  geo_hero,
  introcarousal,
} from "../assets/img/topbanner";
import SwiperBanner from "./Banner";
import { useLocation, useNavigate } from "react-router-dom";

const introImages = [underwater_hero, condition_hero, situation_hero, geo_hero];

const BannerWrapper = () => {
  const [showIntro, setShowIntro] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (showIntro) {
      const timer = setTimeout(() => setShowIntro(false), 7600);
      return () => clearTimeout(timer);
    }
  }, [showIntro]);

  const handleSwiperComplete = () => setShowIntro(true);

  return (
    <div className={`w-full ${showIntro ? "min-h-[60vh] md:min-h-[90vh]" : "min-h-[50vh] md:min-h-[90vh]"} flex items-center justify-center relative bg-gradient-to-br from-[#f7f7fa] via-[#f0f0ff] to-[#f7f7fa] overflow-hidden  transition-all duration-[600ms] delay-[400ms]`}>
      <AnimatePresence mode="wait">
        {showIntro ? (
          <motion.div
            key="intro"
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: 1, scale: 1.05 }}
            exit={{ opacity: 0, scale: 1.15 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="absolute inset-0 z-20"
          >
            <IntroSlide images={introImages} windowWidth={windowWidth} />
          </motion.div>
        ) : (
          <motion.div
            key="swiper"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 z-10"
          >
            <SwiperBanner onCycleComplete={handleSwiperComplete} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const IntroSlide = ({ images, windowWidth }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  // Determine text sizes based on screen width
  const getTextSizes = () => {
    if (windowWidth <= 320) {
      // Extra small mobile
      return {
        firstText: "text-base",
        designText: "text-lg",
        developText: "text-xl",
        excellenceText: "text-2xl",
        engineeredText: "text-base",
        descriptionText: "text-[10px]",
        carouselHeight: "h-[80px]",
      };
    } else if (windowWidth <= 375) {
      // Small mobile
      return {
        firstText: "text-lg",
        designText: "text-xl",
        developText: "text-2xl",
        excellenceText: "text-3xl",
        engineeredText: "text-lg",
        descriptionText: "text-[10px]",
        carouselHeight: "h-[90px]",
      };
    } else if (windowWidth < 640) {
      // Mobile
      return {
        firstText: "text-lg",
        designText: "text-xl",
        developText: "text-2xl",
        excellenceText: "text-3xl",
        engineeredText: "text-lg",
        descriptionText: "text-[10px]",
        carouselHeight: "h-[90px]",
      };
    } else if (windowWidth < 768) {
      // Small tablet
      return {
        firstText: "text-2xl",
        designText: "text-3xl",
        developText: "text-4xl",
        excellenceText: "text-5xl",
        engineeredText: "text-xl",
        descriptionText: "text-xs",
        carouselHeight: "h-[140px]",
      };
    } else if (windowWidth < 1024) {
      // Tablet/small laptop
      return {
        firstText: "text-3xl",
        designText: "text-4xl",
        developText: "text-5xl",
        excellenceText: "text-6xl",
        engineeredText: "text-2xl",
        descriptionText: "text-sm",
        carouselHeight: "h-[260px]",
      };
    } else {
      // Desktop and larger
      return {
        firstText: "text-3xl",
        designText: "text-4xl",
        developText: "text-5xl",
        excellenceText: "text-6xl",
        engineeredText: "text-2xl",
        descriptionText: "text-sm",
        carouselHeight: "h-[260px]",
      };
    }
  };

  const textSizes = getTextSizes();

  const scrollTo = (id) => {
    // If we're not on home, navigate _with state_ so Home can pick up the scroll target
    if (pathname !== "/") {
      navigate("/", { state: { scrollToId: id } });
      return;
    }
    // Already on home: just scroll
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-full h-full  flex flex-wrap flex-col items-center justify-center px-4 text-center">
      <motion.h1
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="mb-4 leading-tight font-sora"
      >
        <span className={`${textSizes.firstText} font-bold`}>
          Conceptualise
        </span>
        <span className={`text-blue-600 ${textSizes.firstText} font-bold`}>
          .
        </span>{" "}
        <span className={`${textSizes.designText} font-bold`}> Design </span>{" "}
        <span className={`text-blue-600 ${textSizes.designText} font-bold`}>
          .
        </span>{" "}
        <span className={`text-black ${textSizes.developText} font-bold`}>
          Develop
        </span>{" "}
        <span className={`text-blue-600 ${textSizes.developText} font-bold`}>
          .
        </span>{" "}
        <span
          className={`bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text ${textSizes.excellenceText} font-bold`}
        >
          Deliver Excellence
        </span>
        <span className={`text-blue-600 ${textSizes.excellenceText} font-bold`}>
          .
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className={`bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text ${textSizes.engineeredText} max-w-[90%] sm:max-w-2xl md:max-w-3xl mb-2 sm:mb-4 font-sora font-extrabold`}
      >
        Engineered for the Edge.
      </motion.p>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className={`${textSizes.descriptionText} text-gray-900 max-w-[95%] sm:max-w-3xl md:max-w-4xl lg:max-w-5xl mb-4 sm:mb-6 font-inter`}
      >
        Advanced Edge Computer Based Sensor Suite for Strategic Application
        | Design and Fabrication of Electromechanical Systems & Test Rigs |
        Underwater Technology Solutions for Strategies Application | 
        Advanced Softwares for Engineering & Strategic Applications | Climate Sciences and
        Weather Services — all powered by intelligent software, built for
        precision in the toughest environments.
      </motion.p>

      <motion.div
        className="relative w-full flex justify-center items-center mb-4 sm:mb-6 px-2 sm:px-6 overflow-x-auto scrollbar-hide"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <div className="flex items-center justify-center max-w-3xl">
          <img
            src={introcarousal}
            alt="intro carousel"
            className={`w-full ${textSizes.carouselHeight} object-contain`}
          />
        </div>
      </motion.div>

      <motion.button
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.6, duration: 0.5 }}
        onClick={() => scrollTo("collaborate")}
        className="px-4 py-2 sm:px-6 sm:py-3 rounded-full bg-gradient-to-r from-blue-600 to-pink-500 text-white text-xs sm:text-base font-semibold shadow-lg hover:scale-105 transition-transform"
      >
        Connect with us
      </motion.button>
    </div>
  );
};

export default BannerWrapper;
