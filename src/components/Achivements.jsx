import React, { useState } from "react";
import {  useNavigate } from "react-router-dom";
import { eventandengagement } from "../utils/constants";
import paperbackground from "../assets/img/background/paperbackground.png";

// Extract events from the data structure and sort by newest first
const allEvents = eventandengagement[0].events;
const sortedEvents = [...allEvents].sort(
  (a, b) => new Date(b.date) - new Date(a.date)
);

export default function Achievements() {
  const [currentPage, setCurrentPage] = useState(0);
  const navigate = useNavigate();
  const itemsPerPage = 6;
  const totalPages = Math.ceil(sortedEvents.length / itemsPerPage);

  const handlePrevious = () => {
    setCurrentPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  };

  const handleCardClick = (eventId) => {
    navigate(`/event-details/${eventId}`);
  };

  const startIndex = currentPage * itemsPerPage;
  const visibleEvents = sortedEvents.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <div
      className="w-full py-14 md:py-20 mt-0 md:mt-20 bg-cover bg-no-repeat flex justify-center bg-gray-200" id="events"
      // style={{ backgroundImage: `url(${paperbackground})` }}
    >
      <div className="flex flex-col items-center w-full">
        {/* Header */}
        <div className="text-left md:mb-10 px-2">
          <h2 className="text-3xl font-semibold text-gray-800 leading-tight tracking-tight">
            EVENTS & <br className="sm:hidden" />
            <span className="text-3xl md:text-6xl font-bold text-gray-900">
              ENGAGEMENTS
            </span>
          </h2>
          <p className="md:mt-4 text-gray-600 text-base sm:text-lg max-w-2xl text-left md:text-center">
            Showcasing Our Achievements, Milestones, and Notable Representations
          </p> 
        </div>

        {/* Cards */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-6 transition-all duration-500 sm:overflow-hidden overflow-x-auto px-2">
          {visibleEvents.map((item) => (
            <div
              key={item.id}
              className="md:w-64 w-full rounded-md bg-white border border-gray-200 shadow-sm hover:shadow-lg overflow-hidden transition-all duration-300 cursor-pointer"
              onClick={() => handleCardClick(item.id)}
            >
              <div className="p-3 flex justify-between items-center text-xs text-black">
                <span>{item.displayDate}</span>
                {item.location && (
                  <span className="px-2 py-0.5 bg-gray-200 rounded-full text-[10px] font-semibold uppercase">
                    {item.location}
                  </span>
                )}
              </div>
              {item.imgUrl && (
                <img
                  src={item.imgUrl}
                  alt={item.title || "achievement"}
                  className="w-full h-56 object-cover bg-gray-100"
                  onError={(e) => (e.currentTarget.style.display = "none")}
                />
              )}
              <div className="p-3">
                <h3 className="text-base font-semibold text-gray-800 mb-2 line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 leading-snug line-clamp-3">
                  {item.content.substring(0, 200)}...
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center mt-10 space-x-6">
          <button
            onClick={handlePrevious}
            className="p-2 hover:bg-gray-100 rounded-full transition"
            aria-label="Previous page"
          >
            <svg
              width="20"
              height="20"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          <div className="flex space-x-2">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index)}
                aria-label={`Go to page ${index + 1}`}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-200 ${
                  index === currentPage
                    ? "bg-gray-800 scale-110"
                    : "bg-gray-400"
                }`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="p-2 hover:bg-gray-100 rounded-full transition"
            aria-label="Next page"
          >
            <svg
              width="20"
              height="20"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}