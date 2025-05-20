import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/img/logo.svg";
import logo_opc from "../assets/img/logo_opc.svg";
import logo_opc_light from "../assets/img/logo_opc_light.svg";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSmall, setIsSmall] = useState(false);
  const [visible, setVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;

  // Media query for logo swap
  useEffect(() => {
    const qm = window.matchMedia("(max-width: 520px)");
    const onChange = () => setIsSmall(qm.matches);

    // Modern approach to avoid deprecated addListener
    try {
      qm.addEventListener("change", onChange);
      onChange();
      return () => qm.removeEventListener("change", onChange);
    } catch (e) {
      // Fallback for older browsers
      qm.addListener(onChange);
      onChange();
      return () => qm.removeListener(onChange);
    }
  }, []);

  // Scroll handling for navbar visibility
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isVisible =
        prevScrollPos > currentScrollPos || currentScrollPos < 10;

      setVisible(isVisible);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  // Handle scrolling after navigation
  useEffect(() => {
    // Check if we have a section to scroll to in location state
    if (location.state?.scrollToId) {
      const sectionId = location.state.scrollToId;

      // Wait for DOM to be fully rendered after navigation
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });

          // Clear the state to prevent scrolling on subsequent renders
          // We need to replace state rather than navigate to avoid creating new history entries
          navigate(pathname, { replace: true, state: {} });
        }
      }, 100);
    }
  }, [location, navigate, pathname]);

  const handleNav = (path) => {
    setIsOpen(false);
    navigate(path);
  };

  const scrollToSection = (id) => {
    setIsOpen(false);

    if (pathname === "/") {
      // If we're already on the homepage, just scroll
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Otherwise navigate and pass the target id in state
      navigate("/", { state: { scrollToId: id } });
    }
  };

  return (
    <nav
      className={`fixed w-full bg-white shadow-md transition-transform duration-300 top-0 z-50 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="flex items-center justify-between h-20 px-4 md:px-8 lg:px-16">
        {/* Logo */}
        <div onClick={() => handleNav("/")} className="cursor-pointer">
          <img src={logo} alt="Guardinger" className="h-12 md:h-16" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6  items-center">
          <button
            onClick={() => navigate("/")}
            className="text-base text-gray-700 hover:text-indigo-600"
          >
            Home
          </button>
          <button
            onClick={() => handleNav("/about")}
            className="text-base text-gray-700 hover:text-indigo-600"
          >
            About Us
          </button>
          <button
            onClick={() => scrollToSection("products")}
            className="text-base text-gray-700 hover:text-indigo-600"
          >
            Delivered Excellence
          </button>
          <button
            onClick={() => navigate("/ourexperties")}
            className="text-base text-gray-700 hover:text-indigo-600"
          >
            Expertise
          </button>
          <button
            onClick={() => scrollToSection("events")}
            className="text-base text-gray-700 hover:text-indigo-600"
          >
            Event & Engagement
          </button>
          <button
            onClick={() => scrollToSection("collaborate")}
            className="text-base text-gray-700 hover:text-indigo-600"
          >
            Contact Us
          </button>
          <button
            onClick={() => handleNav("/careers")}
            className="text-base text-gray-700 hover:text-indigo-600"
          >
            GuardLife
          </button>
          <img
            src={isSmall ? logo_opc_light : logo_opc}
            alt="OPC Logo"
            className="h-10 ml-4 cursor-pointer"
            onClick={() => handleNav("/")}
          />
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-2xl text-gray-700"
          onClick={() => setIsOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          &#9776;
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`
          md:hidden bg-white shadow-inner overflow-hidden
          transition-[max-height] duration-300 ease-in-out
          ${isOpen ? "max-h-screen" : "max-h-0"}
        `}
      >
        <ul className="flex flex-col items-center space-y-4 py-6">
          <li>
            <button
              onClick={() => handleNav("/")}
              className="text-lg text-gray-700 hover:text-indigo-600"
            >
              Home
            </button>
          </li>
          <li>
            <button
              onClick={() => handleNav("/about")}
              className="text-lg text-gray-700 hover:text-indigo-600"
            >
              About Us
            </button>
          </li>
          <li>
            <button
              onClick={() => navigate("/ourexperties")}
              className="text-base text-gray-700 hover:text-indigo-600"
            >
              Experties
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("products")}
              className="text-lg text-gray-700 hover:text-indigo-600"
            >
              Delivered Excellence
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("collaborate")}
              className="text-lg text-gray-700 hover:text-indigo-600"
            >
              Contact Us
            </button>
          </li>
          <li>
            <button
              onClick={() => handleNav("/careers")}
              className="text-lg text-gray-700 hover:text-indigo-600"
            >
              GuardLife
            </button>
          </li>
          <li>
            <img
              src={isSmall ? logo_opc_light : logo_opc}
              alt="OPC Logo"
              className="h-10 cursor-pointer"
              onClick={() => handleNav("/opc")}
            />
          </li>
        </ul>
      </div>
    </nav>
  );
}
