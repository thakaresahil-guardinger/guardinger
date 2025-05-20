import React from "react";
import {
  DPIIT_cred,
  GOV_cred,
  IITH_cred,
  IITT_cred,
  IITD_cred,
  IITDIIC_cred,
  DYNALOG_cred,
  SMARTLEAVEN_cred,
  ENDUREAIR_cred,
  MSME_cred,
  NAVSTAR_cred,
  NAVY_cred,
  IDEX_cred,
  STARTUP_cred,
  anil_engineers,
  ascent_ind,
} from "../assets/img/affiliations";

const logos = [
  { src: DPIIT_cred, alt: "DPIIT" },
  { src: GOV_cred, alt: "Govt. of India" },
  { src: IITH_cred, alt: "IIT Hyderabad" },
  { src: IITT_cred, alt: "IIT Tirupati" },
  { src: IITD_cred, alt: "IIIT Delhi" },
  { src: IITDIIC_cred, alt: "IIITD Incubation" },
  { src: DYNALOG_cred, alt: "Dynalog" },
  { src: SMARTLEAVEN_cred, alt: "SmartLeaven" },
  { src: ENDUREAIR_cred, alt: "EndureAir" },
  { src: MSME_cred, alt: "MSME" },
  { src: NAVSTAR_cred, alt: "Navstar" },
  { src: NAVY_cred, alt: "Indian Navy" },
  { src: IDEX_cred, alt: "IDEX" },
  { src: STARTUP_cred, alt: "Startup India" },
  { src: anil_engineers, alt: "Anil Engineers" },
  { src: ascent_ind, alt: "Ascent Industries" },
];

export default function ValuableClients() {
  return (
    <section className="md: py-16">
      <div className="px-4 flex flex-col items-start text-center">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-purple-600">
        Our Valuable Associations
        
        </h2>
        <p className="mt-2 text-gray-500 text-sm md:text-base">
          We are proudly serving our federal, state, municipal and commercial
          clients
        </p>

        {/* Card */}
        <div className="relative w-full mt-6 bg-white rounded-3xl shadow-lg p-6 md:p-10 overflow-hidden">
          {/* Side-gradient “glow” */}
          <div className="absolute top-0 right-0 h-full w-1/3  pointer-events-none" />

          {/* Logo grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 lg:grid-cols-7 gap-6 items-center">
            {logos.map((logo, idx) => (
              <div key={idx} className="flex justify-center items-center p-2">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="max-h-12 md:max-h-16  md:max-w-32 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
