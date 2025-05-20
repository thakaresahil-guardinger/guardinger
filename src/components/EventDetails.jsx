import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { eventandengagement } from "../utils/constants";
import paperbackground from "../assets/img/background/paperbackground.png";

export default function EventDetails() {
  const { eventId } = useParams();
  const navigate = useNavigate();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    const found = eventandengagement[0].events.find(
      (e) => e.id === parseInt(eventId, 10)
    );
    if (found) setEvent(found);
    else navigate("/events");
  }, [eventId, navigate]);

  if (!event) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900" />
      </div>
    );
  }

  return (
    <div
      className="min-h-screen py-16 px-4 bg-gray-50 bg-cover bg-center"
      style={{ backgroundImage: `url(${paperbackground})` }}
    >
      <div className="max-w-5xl mx-auto bg-white bg-opacity-90 shadow-2xl rounded-2xl overflow-hidden">
        <div className="p-8 md:p-12 space-y-10">
          
          {/* Masthead */}
          <header className="text-center space-y-4">
            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-bold text-gray-800">
              Guardinger Times
            </h1>
            <div className="flex items-center justify-center space-x-3 text-sm text-gray-500">
              <span>{event.displayDate}</span>
              <span className="inline-block h-4 w-px bg-gray-300" />
              <span>{event.location}</span>
            </div>
            <hr className="border-gray-300" />
          </header>
          
          {/* Hero: Image | Title */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {event.imgUrl && (
              <img
                src={event.imgUrl}
                alt={event.title}
                className="w-full h-auto object-cover rounded-lg shadow-lg"
              />
            )}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-semibold text-gray-900">
              {event.title}
            </h2>
          </section>
          
          {/* Body copy in two columns on lg+ */}
          <article className="prose prose-gray max-w-none columns-1 lg:columns-2 gap-8">
            {event.content.split("\n").map((para, idx) => (
              <p key={idx} className="text-justify">{para}</p>
            ))}
          </article>
        
        </div>
      </div>
    </div>
  );
}
