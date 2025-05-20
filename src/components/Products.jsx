import React, { useState } from "react";
import { products } from "../utils/constants";
import { RiArrowRightSFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

export default function Products() {
  const navigate = useNavigate();
  const handleExplore = (id) => navigate(`/product/${id}`);

  // chunk into rows
  const rows = [products.slice(0, 2), products.slice(2, 4)];

  return (
    <section
      className="md:py-16 py-8 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50"
      id="products"
    >
      <div className="container mx-auto px-6 flex flex-col justify-center items-center">
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-2xl md:text-5xl font-bold font-sora text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            Delivered Excellence
          </h1>
          <p className="text-base text-black max-w-4xl mx-auto font-inter">
            Showcasing our cutting-edge solutions and products proudly delivered
            to the defense sector—where innovation meets reliability, and
            excellence is a commitment.
          </p>
        </div>

        {/* Rows */}
        {rows.map((row, rowIndex) => {
          const isSingle = row.length === 1;
          return (
            <div
              key={rowIndex}
              className={`grid grid-cols-1 md:gap-28 gap-8 mb-8 ${
                isSingle
                  ? "md:grid-cols-1 md:justify-items-center"
                  : "md:grid-cols-2"
              }`}
            >
              {row.map((prod) => (
                <ProductCard
                  key={prod.id}
                  product={prod}
                  onExplore={handleExplore}
                />
              ))}
            </div>
          );
        })}
      </div>
    </section>
  );
}

// Separated product card component to better manage state
function ProductCard({ product, onExplore }) {
  return (
    <div
      className="relative bg-white backdrop-blur-md rounded-2xl shadow-md p-6 w-full max-w-lg flex flex-col justify-between "
      style={{
        backgroundImage: `url(${product.background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div>
        <div className="flex items-center">
          <div
            className="w-10 h-10 
             [background-image:linear-gradient(140deg,_#4F46E5,_#9333EA)] 
             rounded-lg flex items-center justify-center 
             text-white font-bold"
          >
            {product.id}
          </div>

          <h3 className="ml-2 text-lg md:text-xl font-semibold text-[#070e58]  transition-colors">
            {product.heading}
          </h3>
        </div>

        <p className="mt-2 text-sm   text-black leading-relaxed text-justify font-inter transition-colors">
          {product.description}
        </p>
      </div>

      {/* Explore More */}
      <button
        onClick={() => onExplore(product.id)}
        className=" inline-flex items-center text-black font-medium hover:underline font-inter relative z-10  transition-colors"
      >
        Explore More&nbsp;
        <RiArrowRightSFill />
      </button>
    </div>
  );
}
