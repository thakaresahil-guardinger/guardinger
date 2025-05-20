import logo from "../assets/img/logo.svg";
import background from "../assets/img/footerbackground.png";
import { eventandengagement, experties, products } from "../utils/constants";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function FooterPage() {
  const [isOpen, setIsOpen] = useState(false);

  const { pathname } = useLocation();
  const navigate = useNavigate();

  const scrollToSection = (id) => {
    setIsOpen(false);

    // If we’re already on home, just scroll
    if (pathname === "/") {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      } else {
        console.warn(`Element with ID "${id}" not found.`);
      }
    } else {
      // Otherwise navigate _and_ pass the target id in state
      navigate("/", { state: { scrollToId: id } });
    }
  };

  const handleExplore = (id) => navigate(`/product/${id}`);
  const handleCardClick = (eventId) => navigate(`/event-details/${eventId}`);
  const handleExpertiexClick = () => navigate(`/ourexperties`);
  return (
    <footer
      className="text-black bg-fill bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${background})` }}
    >
      {/* Top bar */}
      <div className="flex  items-center justify-between gap-4 py-6 px-6 md:px-32">
        <img
          src={logo}
          alt="Guardinger Logo"
          className="w-40 md:w-52 h-auto"
          aria-label="Guardinger Logo"
        />
        <button
          className="border border-black rounded-full md:px-8 md:py-2 px-4 py-1 shadow-md hover:bg-black hover:text-white transition"
          onClick={() => scrollToSection("collaborate")}
          aria-label="Contact Us"
        >
          Contact Us
        </button>
      </div>

      {/* Gradient divider */}
      <div className="h-1 bg-gradient-to-r from-purple-500 to-blue-500 shadow-md shadow-purple-200 mx-6 md:mx-32" />

      {/* Bottom Grid */}
      <div className="md:hidden">
        <div className="grid grid-cols-2 gap-x-8 gap-y-10">
          {/* Products Section */}
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-bold mb-3">Product</h3>
            {products.map((product) => (
              <button
                key={product.id}
                className="font-medium text-sm text-left hover:text-purple-700 transition-colors"
                onClick={() => handleExplore(product.id)}
                aria-label={`Explore ${product.heading}`}
              >
                {product.heading}
              </button>
            ))}
          </div>

          {/* Events Section */}
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-bold mb-3">Events & Engagement</h3>
            {eventandengagement[0].events.map((event) => (
              <button
                key={event.id}
                className="font-medium text-sm text-left hover:text-purple-700 transition-colors"
                onClick={() => handleCardClick(event.id)}
                aria-label={`View details for ${event.shortTitle}`}
              >
                {event.shortTitle}
              </button>
            ))}
          </div>

          {/* Expertise Section */}
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-bold mb-3">Expertise</h3>
            {experties.map((expertise) => (
              <button
                key={expertise.id}
                className="font-medium text-sm text-left hover:text-purple-700 transition-colors"
                onClick={() => handleExpertiexClick()}
                aria-label={`Explore ${expertise.heading}`}
              >
                {expertise.shortTitle}
              </button>
            ))}
          </div>

          {/* Company Section */}
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-bold mb-3">Company</h3>
            <button
              className="font-medium text-sm text-left hover:text-purple-700 transition-colors"
              onClick={() => navigate("/about")}
              aria-label="About Us"
            >
              About Us
            </button>
            <button
              className="font-medium text-sm text-left hover:text-purple-700 transition-colors"
              onClick={() => navigate("/careers")}
              aria-label="Careers"
            >
              Careers
            </button>
            <button
              className="font-medium text-sm text-left hover:text-purple-700 transition-colors"
              onClick={() => scrollToSection("collaborate")}
              aria-label="Contact"
            >
              Contact
            </button>
          </div>
        </div>
      </div>

      {/* Desktop Footer (four columns) */}
      <div className="hidden md:block ">
        <div className="flex justify-around mt-2">
          {/* Products Section */}
          <div className="flex flex-col gap-2">
            <h3 className="text-xl font-bold mb-4">Product</h3>
            {products.map((product) => (
              <button
                key={product.id}
                className="font-medium text-base text-left hover:text-purple-700 transition-colors"
                onClick={() => handleExplore(product.id)}
                aria-label={`Explore ${product.heading}`}
              >
                {product.heading}
              </button>
            ))}
          </div>

          {/* Events Section */}
          <div className="flex flex-col gap-2">
            <h3 className="text-xl font-bold mb-4">Events & Engagement</h3>
            {eventandengagement[0].events.map((event) => (
              <button
                key={event.id}
                className="font-medium text-base text-left hover:text-purple-700 transition-colors"
                onClick={() => handleCardClick(event.id)}
                aria-label={`View details for ${event.shortTitle}`}
              >
                {event.shortTitle}
              </button>
            ))}
          </div>

          {/* Expertise Section */}
          <div className="flex flex-col gap-2">
            <h3 className="text-xl font-bold mb-4">Expertise</h3>
            {experties.map((expertise) => (
              <button
                key={expertise.id}
                className="font-medium text-base text-left hover:text-purple-700 transition-colors"
                onClick={() => handleExpertiexClick()}
                aria-label={`Explore ${expertise.heading}`}
              >
                {expertise.shortTitle}
              </button>
            ))}
          </div>

          {/* Company Section */}
          <div className="flex flex-col gap-2">
            <h3 className="text-xl font-bold mb-4">Company</h3>
            <button
              className="font-medium text-base text-left hover:text-purple-700 transition-colors"
              onClick={() => navigate("/about")}
              aria-label="About Us"
            >
              About Us
            </button>
            <button
              className="font-medium text-base text-left hover:text-purple-700 transition-colors"
              onClick={() => navigate("/careers")}
              aria-label="Careers"
            >
              Careers
            </button>
            <button
              className="font-medium text-base text-left hover:text-purple-700 transition-colors"
              onClick={() => scrollToSection("collaborate")}
              aria-label="Contact"
            >
              Contact
            </button>
          </div>
        </div>
      </div>

      {/* Copyright section - both mobile and desktop */}
      <div className="mt-12 pt-6 border-t border-gray-200">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} Your Company. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-600 hover:text-purple-700">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-600 hover:text-purple-700">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
