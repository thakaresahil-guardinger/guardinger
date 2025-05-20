import React, { useState } from "react";
import "../assets/css/TargetMarket.css";
import { targetMarket } from "../utils/constants";
import {
  underwater_target,
  defense_target,
  geo_target,
  space_target,
  target_image_mobile,
} from "../assets/img";

export default function TargetMarket() {
  const images = [underwater_target, defense_target, geo_target, space_target];
  const [hoveredIndex, setHoveredIndex] = useState(null); // State to track hovered index

  return (
    <div className="">
      <div className="target">
        <div className="target-images">
          {images.map((image, index) => (
            <img
              src={image}
              alt=""
              className={hoveredIndex === index ? "hovered" : ""} // Apply class if hovered
              onMouseEnter={() => setHoveredIndex(index)} // Set index on hover
              onMouseLeave={() => setHoveredIndex(null)} // Reset index on leave
              key={index} // Added key for list items
            />
          ))}
        </div>
        <div className="target-text">
          <h1>Our Target Market</h1>
          <p>
            We specialize in conceptualizing, designing, and building custom
            applications tailored for the maritime and underwater, aerospace,
            defense, and geospatial sectors.
          </p>
          <ul>
            {targetMarket.map((target, index) => (
              <li
                key={index}
                onMouseEnter={() => setHoveredIndex(index)} // Set index on hover
                onMouseLeave={() => setHoveredIndex(null)} // Reset index on leave
                style={{
                  fontWeight: hoveredIndex === index ? "700" : "normal", // Change font weight on hover
                  color: hoveredIndex === index ? "#0c2681" : "#fff", // Change font weight on hover
                  transition: "font-weight 0.2s, font-size 0.2s", // Smooth transition
                  cursor: "pointer"
                }}
              >
                {target}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="target-mobile">
        <div className="target-text-mobile">
          <h1>Our Target Market</h1>
          <p>
            "We specialize in conceptualizing, designing, and building custom
            applications tailored for the maritime and underwater, aerospace,
            defense, and geospatial sectors."
          </p>
        </div>
        <ul>
          {targetMarket.map((target, index) => (
            <li key={index}>{target}</li>
          ))}
        </ul>
        <img src={target_image_mobile} alt="Target Market" />
      </div>
    </div>
  );
}