// src/components/Careers.jsx
import React, { useState } from "react";
import plansvg from "../assets/img/background/plansvg.svg";
import { jobs } from "../utils/constants";
import { lag1, lag2, lag3 } from "../assets/img/lifeatgat";
import productive from "../assets/img/background/productive.jpg";
import career from "../assets/img/background/career.jpg";
import teamwork from "../assets/img/background/teamwork.jpg";

export default function Careers() {
  const [selectedJob, setSelectedJob] = useState(null);
  const whyJoin = [
    {
      bgimg: productive,
      heading: "Innovative Work Environment",
      text: "Immerse yourself in a culture of innovation, where your ideas are not just welcomed but encouraged. Guardinger is a place where creativity flourishes.",
    },
    {
      bgimg: career,
      heading: "Career Growth",
      text: "We invest in our team's professional development. From workshops to mentorship programs, we are committed to help you reach your goals.",
    },
    {
      bgimg: teamwork,
      heading: "Collaborative Team",
      text: "Join a team that values collaboration. At Guardinger, we believe that great ideas come from diverse minds working together towards a common vision.",
    },
  ];

  const images = [lag1, lag2, lag3];

  return (
    <div className="font-sans text-gray-800">
      {/* Hero */}
      <section className="bg-gradient-to-br from-purple-50 to-white md:py-20 py-4 relative overflow-hidden">
        <div className="md:mx-12 flex flex-col items-start md:h-[70vh] justify-between md:space-y-6 md:px-6 px-4">
          <h1 className="text-3xl md:text-7xl text-gray-900 leading-tight font-sora">
            Explore Exciting
            <br />
            <span>Opportunities at&nbsp;</span>
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              GUARDINGER
              <br />
            </span>
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              ADVANCED TECHNOLOGIES
            </span>
          </h1>
          <div className="bg-black bg-opacity-80 text-white rounded-b-2xl p-6 w-full">
            <p className="md:text-2xl text-base font-sora">
              We believe in fostering a dynamic and collaborative work
              environment that empowers our team to deliver excellence.
            </p>
            <p className="mt-2 text-sm md:text-lg opacity-70">
              Join us on this journey of creativity, growth, and meaningful
              impact.
            </p>
          </div>
        </div>
        <img
          src={plansvg}
          alt="Decorative background"
          className="absolute top-7 right-7 h-[60vh] hidden md:block pointer-events-none"
        />
      </section>

      {/* Image Grid */}
      <section className="max-w-5xl mx-auto py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6">
        {images.map((imag, i) => (
          <div key={i} className="h-40 bg-gray-200 rounded-lg overflow-hidden">
            <img
              src={imag}
              alt="Life at guardinger"
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </section>

      {/* Current Openings */}
      <section className="md:mx-12 bg-gray-950 text-white py-16 rounded-2xl relative">
        <div className="md:max-w-3xl md:mx-auto md:text-center md:space-y-5 px-6">
          <h2 className="md:text-5xl font-semibold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent pb-4">
            Current Openings
          </h2>
          <p className="opacity-70">
            If you think you might be a good fit for our team, we'd love to hear
            from you!
          </p>
        </div>
        <ul className="max-w-4xl mx-auto mt-8 flex flex-col divide-y divide-gray-700 px-6">
          {jobs.map((job, i) => (
            <li key={i} className="flex justify-between items-center py-4">
              <h3 className="text-lg font-medium">{job.title}</h3>
              <button
                onClick={() => setSelectedJob(job)}
                className="text-sm px-4 py-2 border border-purple-500 rounded hover:bg-purple-600 transition"
              >
                View Details
              </button>
            </li>
          ))}
        </ul>

        {/* Modal Popup */}
        {selectedJob && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-gray-900 text-white rounded-xl max-w-lg w-full p-6 relative">
              <button
                onClick={() => setSelectedJob(null)}
                className="absolute top-3 right-3 text-2xl leading-none hover:text-purple-400"
              >
                &times;
              </button>
              <h3 className="text-2xl font-semibold mb-4">
                {selectedJob.title}
              </h3>

              {/* Safe object rendering */}
              <p className="italic mb-4">
                {typeof selectedJob.description === "string"
                  ? selectedJob.description
                  : selectedJob.description?.instructions}
              </p>

              <ul className="list-disc list-inside space-y-1 mb-4 text-sm">
                {Array.isArray(selectedJob.requirements)
                  ? selectedJob.requirements.map((req, idx) => (
                      <li key={idx}>
                        {typeof req === "string" ? req : JSON.stringify(req)}
                      </li>
                    ))
                  : null}
              </ul>

              <div className="mt-4 text-sm">
                <strong>Email Your Resume At : </strong>{" "}
                <p>careers@guardinger.in</p>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Why Join */}
      <section className="bg-gradient-to-br from-white to-purple-50 py-16 px-6">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-semibold">
            Why Join <span className="text-purple-600">Guardinger</span>?
          </h2>
          <p className="mt-4 text-gray-600">
            Discover our innovative solutions for Underwater Domain Awareness
            (UDA), including Multi-Platform and Multi-Modal Data Fusion,
            Underwater Noise Measurement and Ranging, and Magnetic Signature
            Degaussing.
          </p>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {whyJoin.map((card) => (
            <div
              key={card.heading}
              className="bg-white rounded-2xl shadow-lg p-6"
              style={{
                backgroundImage: `url(${card.bgimg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="bg-white/60 backdrop-blur-md p-2 rounded-xl">
                <h3 className="text-xl font-medium mb-2 text-black">{card.heading}</h3>
                <p className="text-black text-sm">{card.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
