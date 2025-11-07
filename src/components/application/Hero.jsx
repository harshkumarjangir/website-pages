import Link from "next/link";
import React from "react";

const HeroSection = ({ data }) => {
  const { backgroundVideo, heading, description, buttons } = data;

  return (
    <div className="relative md:h-[90vh] w-full max-md:pb-10 px-2 flex max-md:flex-col flex-row items-center max-md:justify-center justify-between text-white">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover -z-10"
      >
        <source src={backgroundVideo} type="video/webm" />
        Your browser does not support the video tag.
      </video>

      {/* LEFT SIDE - TEXT + STATS */}
      <div className="lg:max-w-4xl px-4 max-md:py-12 md:px-8 relative z-10">
        <h2 className="text-3xl md:text-5xl mb-4">{heading}</h2>
        <p className="text md:text-lg mb-8 max-w-4xl">{description}</p>

        {/* Dynamic Buttons */}
        <div className="flex max-md:justify-center gap-6 mt-10">
          {buttons?.map((btn, index) => (
            <Link
              key={index}
              href={btn.link}
              className={`p-2 px-4 md:py-3 md:px-8 rounded-xl md:font-medium transition-all duration-300 ${index === 0
                  ? "bg-[#16A34A] hover:bg-white/20 border border-[#16A34A] hover:border-white text-white"
                  : "bg-white/20 hover:bg-[#16A34A] text-white border border-white/20"
                }`}
            >
              {btn.text}
            </Link>
          ))}
        </div>
      </div>

      {/* RIGHT SIDE - TRANSPARENT FORM */}
      <div className="md:mr-12 mt-10 md:mt-0 bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8 w-full max-w-md border border-white/20 shadow-lg shadow-black/20">
        <h3 className="text-2xl font-semibold mb-6 text-center text-white">
          Send Your Query
        </h3>

        <form className="space-y-5">
          <div>
            <label className="block text-sm mb-1 text-gray-200">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className="w-full p-2 rounded-md bg-white/20 text-white border border-white/30 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label className="block text-sm mb-1 text-gray-200">
              Phone <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className="w-full p-2 rounded-md bg-white/20 text-white border border-white/30 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter your phone number"
            />
          </div>

          <div>
            <label className="block text-sm mb-1 text-gray-200">
              Email Address
            </label>
            <input
              type="email"
              className="w-full p-2 rounded-md bg-white/20 text-white border border-white/30 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block text-sm mb-1 text-gray-200">
              Description (Interested Software){" "}
              <span className="text-red-500">*</span>
            </label>
            <textarea
              rows="3"
              className="w-full p-2 rounded-md bg-white/20 text-white border border-white/30 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Describe your interest..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-[#16A34A]/90 hover:bg-[#16A34A] transition-colors rounded-md py-3 font-medium text-white"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default HeroSection;
