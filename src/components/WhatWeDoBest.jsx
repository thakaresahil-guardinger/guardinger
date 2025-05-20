import React from "react";
import { aboutUs } from "../utils/constants";

function WhatWeDoBest() {
  const rows = [aboutUs.slice(0, 2), aboutUs.slice(2, 4)];
  return (
    <div className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <div className="md:py-16 py-8 container mx-auto flex flex-col justify-center items-center">
        <h1 className="text-center text-2xl md:text-5xl font-sora font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
          We Do Best
        </h1>
        <p className="mt-4 text-black max-w-4xl mx-auto text-center font-inter">
          We design and build Advanced Edge Computer Based Sensor Suite for
          Strategic Application & Electromechanical Systems & Test Rigs,
          Underwater Technology Solutions for Strategies Application,
          Engineering Advanced Softwares for Strategic Applications, Climate
          Sciences and Weather Services — all powered by intelligent software,
          built for precision in the toughest environments.
        </p>
        {rows.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className="grid md:grid-cols-2 grid-cols-1 gap-16 mb-16 w-full max-w-6xl"
          >
            {row.map((item, colIndex) => (
              <div
                key={colIndex}
                className="bg-white rounded-2xl shadow-md p-6 flex flex-col justify-start"
              >
                <div className="flex items-start min-h-16">
                  <img
                    src={item.titleiconimg}
                    alt=""
                    className="w-10 h-10 mr-3"
                  />
                  <h3 className="text-lg font-semibold text-black font-sora">
                    {item.title}
                  </h3>
                </div>
                <p className="text-black text-sm md:text-base leading-relaxed text-justify font-inter">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default WhatWeDoBest;
