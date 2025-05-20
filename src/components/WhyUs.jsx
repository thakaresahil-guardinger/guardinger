// src/components/WhyUs.jsx

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

import climate from "../assets/img/whyus/climate.jpeg";
import rocket from "../assets/img/whyus/rocket.jpg";
import software from "../assets/img/whyus/software.png";
import testrig from "../assets/img/whyus/testrig.jpeg";
import underwater from "../assets/img/whyus/underwater.jpeg";

/**
 * Individual card component. Receives:
 *  - id:        unique index
 *  - section:   { title, img, description }
 *  - showing:   boolean (false → show title+image; true → show description)
 *  - onToggle:  () => void  (called on click or Enter/Space)
 */
function WhyUsCard({ id, section, showing, onToggle }) {
  const cardVariants = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    exit:    { opacity: 0, y: -10 },
  };

  return (
    <motion.div
      as="button"
      type="button"
      onClick={() => onToggle()}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onToggle();
        }
      }}
      tabIndex={0}
      className="relative bg-white rounded-2xl p-3 max-w-[400px] h-full border-l-4 border-[#090EDB] shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition overflow-hidden cursor-pointer min-h-[234px] flex flex-col"
      layout
      initial="initial"
      animate="animate"
      exit="exit"
      variants={cardVariants}
    >
      <AnimatePresence mode="wait">
        {!showing ? (
          <motion.div
            key={`image-${id}`}
            layout
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            <h3 className="text-lg sm:text-xl font-sora font-semibold mb-3 h-12">
              {section.title}
            </h3>
            <div className="overflow-hidden rounded-md h-[140px]">
              <img
                src={section.img}
                alt={section.title}
                className="w-full h-full object-cover object-center"
              />
            </div>
          </motion.div>
        ) : (
          <motion.div
            key={`desc-${id}`}
            layout
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="flex-grow flex items-start justify-center p-2"
          >
            <p className="text-sm sm:text-base font-inter text-gray-800 text-justify">
              {section.description}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

/**
 * Main WhyUs component: all cards share the same toggle state and timers.
 * Clicking any card pauses all animations; after 15s, they resume in sync.
 */
export default function WhyUs() {
  const mainSections = [
    {
      title: "Tailored Innovation for Mission Success",
      img: rocket,
      description:
        "We specialize in Predictive Maintenance Systems, Underwater Technologies, and Geospatial Applications, built from the ground up to meet your unique operational needs. Every product is precision-engineered with deep domain knowledge and tested for real-world performance.",
    },
    {
      title: "Multi-Platform, Multi-Modal Data Fusion",
      img: testrig,
      description:
        "Our solutions integrate diverse sensor data — from land, sea, air, or satellite — into a single intelligent picture. With seamless multi-platform, multi-modal data fusion, we empower faster, more informed decisions in high-stakes environments.",
    },
    {
      title: "Smart Systems, Smarter Decisions",
      img: climate,
      description:
        "We combine compact sensor design, analog-to-digital conversion, and onboard edge computing to deliver actionable insights where and when you need them. From wired and wireless to satellite communication, our systems stay connected and responsive — anywhere.",
    },
    {
      title: "Future-Ready Software Experience",
      img: software,
      description:
        "Our software platforms are not only functionally powerful but user-centric, offering a modern UI/UX that simplifies complex operations. Whether in the field or command center, our interfaces are designed for clarity, speed, and reliability.",
    },
    {
      title: "Proven Partner for Critical Applications",
      img: underwater,
      description:
        "Trusted by defence and industry leaders, we deliver mission-critical systems that perform under pressure. Our agile development approach ensures rapid deployment, adaptability, and long-term support.",
    },
  ];

  // Shared state: whether to show descriptions (true) or images (false) for all cards
  const [showingAll, setShowingAll] = useState(false);
  // Shared paused state: when true, auto-cycling is paused for all cards
  const [pausedAll, setPausedAll] = useState(false);

  const toggleTimerRef = useRef(null);
  const resumeTimerRef = useRef(null);

  const delayShow = 5000;    // 5 seconds to show images
  const delayDesc = 8000;    // 8 seconds to show descriptions
  const pauseDuration = 11000; // 15 seconds pause after a click

  // Effect: whenever showingAll or pausedAll changes, (re)start the shared toggle timer
  useEffect(() => {
    // Clear any existing toggle timer
    clearTimeout(toggleTimerRef.current);

    if (pausedAll) {
      // If paused, do not schedule a new toggle
      return;
    }

    // Determine appropriate delay
    const delay = showingAll ? delayDesc : delayShow;
    toggleTimerRef.current = setTimeout(() => {
      setShowingAll((prev) => !prev);
    }, delay);

    return () => clearTimeout(toggleTimerRef.current);
  }, [showingAll, pausedAll]);

  // Cleanup on unmount: clear both timers
  useEffect(() => {
    return () => {
      clearTimeout(toggleTimerRef.current);
      clearTimeout(resumeTimerRef.current);
    };
  }, []);

  // Called when any card is clicked (or activated via keyboard)
  const handleGlobalToggle = () => {
    // Immediately flip all cards
    setShowingAll((prev) => !prev);
    // Pause further auto-cycling
    setPausedAll(true);

    // Clear any existing resume timer
    clearTimeout(resumeTimerRef.current);
    // After pauseDuration, un-pause auto-cycling
    resumeTimerRef.current = setTimeout(() => {
      setPausedAll(false);
    }, pauseDuration);
  };

  return (
    <div className="container mx-auto px-4 py-12 md:mt-64 md:py-24 flex flex-col gap-12">
      <div className="flex flex-col gap-2">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          <h1
            className="text-3xl sm:text-5xl md:text-8xl font-bold leading-tight font-sora
                       text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"
          >
            Why Us
          </h1>
          <p className="text-base sm:text-lg md:text-xl font-inter text-black max-w-3xl pt-1 md:pt-10 text-justify">
            At Guardinger, we don’t just build systems — we engineer confidence. We
            are our clients’ end-to-end partner in conceptualizing, designing, and
            developing advanced solutions tailored to defence and industrial
            challenges. Our expertise lies at the intersection of cutting-edge
            technology and mission-critical reliability.
          </p>
        </div>

        <div className="space-y-6">
          <div className="flex flex-col md:flex-row flex-wrap items-center justify-center gap-6 md:gap-8">
            {mainSections.map((section, idx) => (
              <WhyUsCard
                key={idx}
                id={idx}
                section={section}
                showing={showingAll}
                onToggle={handleGlobalToggle}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
