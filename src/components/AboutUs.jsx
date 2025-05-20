import React, { useState } from "react";
import {
  DPIIT_cred,
  ENDUREAIR_cred,
  IDEX_cred,
  IITD_cred,
  IITH_cred,
  IITT_cred,
  MSME_cred,
  NAVSTAR_cred,
  NAVY_cred,
  SMARTLEAVEN_cred,
  WESEE_cred,
} from "../assets/img/affiliations";
import { aboutus } from "../assets/img/aboutus";
import { aboutUs } from "../utils/constants";
import { motion, AnimatePresence } from "framer-motion";
import AffiliationWidget from "./AffiliationWidget";

export default function AboutUs() {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const toggleExpand = (idx) => {
    setExpandedIndex(expandedIndex === idx ? null : idx);
  };

  return (
    <div className="text-white  md:p-10 md:px-28 min-h-screen font-sans">
      {/* Hero Section */}
      <div className="p-2">
        <div className="">
          <div
            className="h-[60vh] md:h-[85vh] relative rounded-3xl overflow-hidden"
            style={{
              backgroundImage: `url(${aboutus})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 flex justify-center items-center">
              <h1 className="text-4xl md:text-8xl bg-gradient-to-r from-white to-purple-300 text-transparent bg-clip-text font-semibold text-center px-4">
                About Us
              </h1>
            </div>
            <div className="absolute bottom-3 left-3 md:bottom-10 md:left-10 right-3 md:right-10">
              <h2 className="text-xl md:text-4xl font-semibold text-fuchsia-400 mb-2">
                Engineered for the Edge.
              </h2>
              <p className="text-sm md:text-2xl text-gray-200 leading-relaxed">
                We design and build advanced Systems For Strategic Applications — all
                powered by intelligent software, built for precision in the
                toughest environments.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className=" md:mx-28 md:my-6 mx-2 my-4">
        <h1 className="text-3xl md:text-7xl mb-6 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text font-semibold">
          What We Do Best
        </h1>
        <p className="text-black text-justify">
          We design and deliver cutting-edge systems that empower defence
          forces, industrial innovators, and scientific pioneers to see more
          clearly, act more decisively, and operate more effectively — whether
          on land, underwater, or in the lab. From advanced measurement systems
          and custom test rigs to edge computer based sensor suite for Stategic
          Applications, Underwater Technologies for Strategic Applications, and
          Climate Sciences and Weather Services, everything we build is made to
          perform with resilience, accuracy, and insight — in the environments
          where it matters most.
        </p>

        <div className="space-y-4">
          {aboutUs.map((item, idx) => {
            const isOpen = expandedIndex === idx;
            return (
              <div
                key={idx}
                className="relative flex flex-col items-start gap-1 cursor-pointer bg-white p-4 rounded-2xl border border-gray-300 shadow-sm md:flex-row md:gap-6 md:p-3"
                onClick={() => toggleExpand(idx)}
              >
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-black rounded-full flex items-center justify-center z-10">
                    <img
                      src={item.titleiconimg}
                      alt={`${item.title} icon`}
                      className="w-5 h-5 md:w-6 md:h-6"
                    />
                  </div>

                  <div
                    className="w-[2px] bg-purple-400 transition-all duration-300"
                    style={{ height: isOpen ? "45px" : "0px" }}
                  />

                  <div
                    className="hidden md:block border-l-2 border-b-2 border-purple-400 rounded-bl-md -mt-1 ml-[1.3rem] transition-all duration-300"
                    style={{
                      height: isOpen ? "1.5rem" : "0px",
                      width: isOpen ? "1.5rem" : "0px",
                    }}
                  />
                </div>

                <div className="flex-1 relative">
                  <h2 className="text-base md:text-2xl font-semibold text-black">
                    {item.title}
                  </h2>
                  <p className="text-gray-600 mt-1 text-justify text-xs md:text-sm">
                    {item.desc}
                  </p>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden mt-0 md:mt-6 space-y-1 flex gap-2 justify-between items-start md:space-y-4 text-gray-700"
                      >
                        <div className="w-full max-w-xl text-justify">
                          <div className="flex flex-col md:flex-row items-start gap-2 md:gap-3">
                            <img
                              src={item.appiconimg}
                              alt="app icon"
                              className="w-6 h-6 md:w-8 md:h-8 mt-1 flex-shrink-0"
                            />
                            <p className="text-sm md:text-base text-justify w-full ">
                              {item.appdescription}
                            </p>
                          </div>

                          <ul className="list-disc pl-5 md:ml-12 space-y-1 text-sm md:text-base">
                            {item.bulletpoint.map((pt, i) => (
                              <li key={i} className="w-full ">
                                {pt}
                              </li>
                            ))}
                          </ul>

                          <p className="italic text-gray-500 text-sm md:text-base pb-28 md:pb-0 w-full ">
                            {item.appfooter}
                          </p>
                        </div>

                        <div className="hidden lg:block w-full max-w-lg">
                          <img
                            src={item.backgroundimg}
                            alt=""
                            className=" object-fill rounded-2xl"
                          />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <AffiliationWidget />
    </div>
  );
}
