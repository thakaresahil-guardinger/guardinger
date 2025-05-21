import React, { useState } from "react";
import "../assets/css/Contact.css";
import emailjs from "emailjs-com";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: "",
    phase: "",
  });
  const [selectedPhase, setSelectedPhase] = useState("");
  const [isSent, setIsSent] = useState(false);

  const phases = ["Conceptualise", "Design", "Develop", "Deliver Excellence"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePhaseClick = (phase) => {
    const newPhase = formData.phase === phase ? "" : phase;
    setSelectedPhase(newPhase);
    setFormData((prev) => ({ ...prev, phase: newPhase }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!selectedPhase) {
      alert("Please select one of the four phases before submitting.");
      return;
    }

    emailjs
      .sendForm(
        "service_vq12slp", // Service ID
        "template_klej9kc", // Template ID
        e.target,           // Must be the <form> element
        "duwvNpB4xS5b65L5R" // Public key (User ID)
      )
      .then(
        (result) => {
          console.log("EmailJS success:", result.text);
          setIsSent(true); // Show success message
        },
        (error) => {
          console.error("EmailJS error:", error.text);
        }
      );

    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      message: "",
      phase: "",
    });
    setSelectedPhase("");
    e.target.reset(); // Reset form DOM
  };

  return (
    <div className="bg-gray-50 min-h-screen py-12 md:px-4 px-2" id="collaborate">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl font-bold font-sora text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            Contact Us
          </h1>
          <p className="mt-4 text-gray-600 max-w-2xl">
            Connect with us to explore how we can assist you. Our team is
            dedicated to serving clients with tailored solutions.
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-3xl shadow-lg overflow-hidden p-8">
          <form className="space-y-8" onSubmit={handleSubmit}>
            {/* Name Fields */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block mb-2 font-medium text-gray-700">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  className="w-full border-b border-gray-300 md:px-3 py-2  focus:outline-none"
                  placeholder="Enter your first name"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label className="block mb-2 font-medium text-gray-700">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  className="w-full border-b border-gray-300 md:px-3 py-2 focus:outline-none"
                  placeholder="Enter your last name"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {/* Email & Phone Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className="block mb-2 font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  className="w-full border-b border-gray-300 px-3 py-2 focus:outline-none"
                  placeholder="Enter your email address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label className="block mb-2 font-medium text-gray-700">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phoneNumber"
                  className="w-full border-b border-gray-300 px-3 py-2 focus:outline-none"
                  placeholder="Enter your phone number"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Phase Selection */}
            <div>
              <label className="block mb-2 font-medium text-gray-700">
                Select a Phase
              </label>
              <div className="flex flex-wrap gap-3">
                {phases.map((phase) => (
                  <button
                    key={phase}
                    type="button"
                    onClick={() => handlePhaseClick(phase)}
                    className={`py-2 px-4 rounded-lg transition-all ${
                      formData.phase === phase
                        ? "bg-gradient-to-r from-blue-700 to-purple-600 text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {phase}
                  </button>
                ))}
              </div>
              {/* Hidden input to submit phase via emailjs */}
              <input type="hidden" name="phase" value={formData.phase} />
            </div>

            {/* Message Field */}
            <div>
              <label className="block mb-2 font-medium text-gray-700">
                Message
              </label>
              <textarea
                name="message"
                rows="4"
                className="w-full border-b border-gray-300 px-3 py-2 focus:outline-none"
                placeholder="Write your message..."
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-end">
              <button
                type="submit"
                className="px-6 py-3 bg-gradient-to-r from-blue-700 to-purple-600 text-white font-medium rounded-xl hover:opacity-90 transition-opacity flex items-center"
              >
                Send Message
              </button>
            </div>

            {/* Success Message */}
            {isSent && (
              <div className="text-green-600 font-medium text-center">
                Thank you for your message! We'll get back to you soon.
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
