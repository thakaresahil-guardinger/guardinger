import React, { useState } from "react";
import letsConnect from "../assets/img/background/lets_connect.png";
import Conceptualise from "../assets/img/letstart/Conceptualise.png";
import Develop from "../assets/img/letstart/Develop.png";
import Design from "../assets/img/letstart/Design.png";
import deliverexcellence from "../assets/img/letstart/deliverexcellence.png";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { Scroll } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Letsgetstarted() {
  const navigate = useNavigate();
  // State to track hover state for each card
  const [hoveredCard, setHoveredCard] = useState(null);
  const { pathname } = useLocation();

  // Helper function to handle hover state
  const handleMouseEnter = (cardId) => {
    setHoveredCard(cardId);
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
  };

  const scrollToSection = (id) => {
    // If we’re already on home, just scroll
    if (pathname === "/") {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    } else {
      // Otherwise navigate _and_ pass the target id in state
      navigate("/", { state: { scrollToId: id } });
    }
  };

  // Card data for easier mapping
  const cards = [
    {
      id: 1,
      title: "Conceptualise",
      image: Conceptualise,
      description:
        "Turn your dreams into reality with actionable plans that lead to success!",
      colSpan: "md:col-span-4",
      // For first card: content moves down, button moves up
      contentAnimation:
        hoveredCard === 1 ? "transform translate-y-full opacity-0" : "",
      buttonAnimation:
        hoveredCard === 1 ? "" : "transform -translate-y-full opacity-0",
    },
    {
      id: 2,
      title: "Design",
      image: Design,
      description:
        "Create a detailed solution tailored to your needs. Already sketched it out? We'll refine it into a build-ready blueprint.",
      colSpan: "md:col-span-8",
      // For second card: content moves left to right, button appears from right to left
      contentAnimation:
        hoveredCard === 2 ? "transform translate-x-full opacity-0" : "",
      buttonAnimation:
        hoveredCard === 2 ? "" : "transform translate-x-full opacity-0",
    },
    {
      id: 3,
      title: "Develop",
      image: Develop,
      description:
        "Build and refine the solution with precision—from hardware to smart systems and software.",
      colSpan: "md:col-span-7",
      // For third card: content moves right to left, button appears from left to right
      contentAnimation:
        hoveredCard === 3 ? "transform -translate-x-full opacity-0" : "",
      buttonAnimation:
        hoveredCard === 3 ? "" : "transform -translate-x-full opacity-0",
    },
    {
      id: 4,
      title: "Deliver Excellence",
      image: deliverexcellence,
      description:
        "Implement and exceed expectations. We field, test, and ensure your system excels in the real world.",
      colSpan: "md:col-span-5",
      imageBottom: true,
      // For fourth card: content moves top to bottom, button moves bottom to top
      contentAnimation:
        hoveredCard === 4 ? "transform -translate-y-full opacity-0" : "",
      buttonAnimation:
        hoveredCard === 4 ? "" : "transform translate-y-full opacity-0",
    },
  ];

  return (
    <div
      className="container mx-auto
        bg-cover bg-center bg-no-repeat 
        rounded-none md:rounded-3xl 
        overflow-hidden
      "
      style={{ backgroundImage: `url(${letsConnect})` }}
    >
      {/* Content container: full‑width on mobile, constrained on md+ */}
      <div className="py-24 sm:px-6 md:px-16 lg:px-24">
        {/* Headings */}
        <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-white to-[#E1A0EE] text-4xl sm:text-5xl md:text-6xl font-bold font-sora">
          Let's Get Started
        </h1>
        <h2 className="mt-2 bg-clip-text text-transparent bg-gradient-to-r from-white to-[#E1A0EE] text-2xl sm:text-3xl md:text-4xl font-semibold font-sora">
          Let's Build What's Next — Together
        </h2>
        <p className="mt-4 text-[#A997FB] text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl font-inter">
          Whether you're just getting started or ready to deploy, Guardinger is
          your partner at every stage. Share your vision — we'll help you
          Conceptualise, Design, Develop, and Deliver mission-ready solutions.
        </p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-10 pt-12">
          {cards.map((card) => (
            <div
              key={card.id}
              className={`${card.colSpan} bg-white/10 backdrop-blur-md rounded-2xl p-6  transition duration-400 ease-in-out shadow-md overflow-hidden relative`}
              onMouseEnter={() => handleMouseEnter(card.id)}
              onMouseLeave={handleMouseLeave}
            >
              {/* Regular content with specific animation direction */}
              <div
                className={`relative transition-transform duration-500 ease-in-out ${card.contentAnimation}`}
              >
                {!card.imageBottom && (
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full mb-4 rounded-lg"
                  />
                )}
                <h3 className="text-white text-xl font-semibold mb-2">
                  {card.title}
                </h3>
                <p className="text-[#D0CEFF] text-sm sm:text-base">
                  {card.description}
                </p>
                {card.imageBottom && (
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full rounded-lg mt-4"
                  />
                )}
              </div>

              {/* Get in touch content with specific animation direction */}
              <div
                className={`absolute inset-0 flex flex-col items-center justify-center bg-black/60 text-white text-center px-6 rounded-2xl transition-all duration-500 ease-in-out ${
                  hoveredCard === card.id
                    ? "opacity-100 scale-100 z-10"
                    : "opacity-0 scale-95 z-0 pointer-events-none"
                }`}
              >
                <h3 className="text-xl font-semibold mb-4">
                  Start Your Journey
                </h3>
                <p className="text-sm mb-4">
                  Ready to collaborate? Engage with us at any stage of your
                  project. Whether you're at the conceptual phase or ready for
                  implementation, we're here to help.
                </p>
                <button
                  className="font-medium text-white inline-flex items-center gap-2"
                  onClick={() => navigate("/contactus")}
                >
                  Get in Touch
                  <FaArrowUpRightFromSquare />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
