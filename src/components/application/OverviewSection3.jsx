"use client";
import React, { useEffect, useState } from "react";
import * as Icons from "lucide-react";

export default function OverviewSection3({ data }) {
    const overviewSection = data;
    const [radius, setRadius] = useState(230);
    const [selectedFeature, setSelectedFeature] = useState(null);

    // ✅ Handle responsive radius
    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            if (width < 640) setRadius(120);
            else if (width < 1024) setRadius(190);
            else setRadius(230);
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <section className="py-20 bg-white relative overflow-hidden">
            {/* ✅ Floating Background Hexagons */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-10 left-10 w-40 h-40 bg-green-100 opacity-50 rotate-12 clip-hex animate-float-slow"></div>
                <div className="absolute bottom-16 right-20 w-52 h-52 bg-green-200 opacity-25 -rotate-6 clip-hex animate-float-slower"></div>
                <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-green-100 opacity-20 rotate-45 clip-hex animate-float-alt"></div>
            </div>

            {/* Heading */}
            <div className="text-center mb-10 relative z-10">
                <h3 className="text-green-600 text-lg font-semibold uppercase tracking-widest">
                    {overviewSection.heading}
                </h3>
                <h2 className="text-3xl font-bold text-green-800 mt-2">
                    {overviewSection.subheading}{" "}
                    <span className="text-green-600">{overviewSection.highlight}</span>
                </h2>
                <p className="text-gray-700 mt-4 max-w-4xl mx-auto text-sm sm:text-base">
                    {overviewSection.description}
                </p>
            </div>

            {/* Rotating Circle */}
            <div className="relative group flex items-center justify-center max-w-max mx-auto h-[500px] sm:h-[420px] md:h-[520px] z-10">
                {/* ✅ Rotating ring (pauses on hover) */}
                <div className="absolute w-[280px] sm:w-[380px] md:w-[420px] h-[280px] sm:h-[380px] md:h-[420px] rounded-full border-[2px] border-green-200 animate-spin-slow group-hover:[animation-play-state:paused]">
                    {overviewSection.features.map((feature, index) => {
                        const angle = (index / overviewSection.features.length) * 360;
                        const x = radius * Math.cos((angle * Math.PI) / 180);
                        const y = radius * Math.sin((angle * Math.PI) / 180);
                        const LucideIcon = Icons[feature.icon];

                        const isActive = selectedFeature?.title === feature.title;

                        return (
                            <div
                                key={index}
                                onClick={() =>
                                    setSelectedFeature(feature) // open modal
                                }
                                style={{
                                    top: "50%",
                                    left: "50%",
                                    transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                                }}
                                className={`absolute cursor-pointer transition-transform duration-300 hover:scale-110 ${isActive ? "scale-110" : ""
                                    }`}
                            >
                                <div
                                    className={`w-24 sm:w-32 h-20 rounded-xl shadow-md flex flex-col items-center justify-center text-center border animate-spin-reverse2 group-hover:[animation-play-state:paused]
                  ${isActive
                                            ? "bg-green-600 text-white border-green-600"
                                            : "bg-green-100/90 text-[#364153] border-green-200"
                                        }`}
                                >
                                    <div
                                        className={`w-10 h-10 mb-1 flex items-center justify-center rounded-full ${isActive ? "bg-white/20" : "bg-[#364153]/20 text-green-700"
                                            }`}
                                    >
                                        {LucideIcon ? (
                                            <LucideIcon size={26} strokeWidth={1.5} />
                                        ) : (
                                            <Icons.Circle size={26} />
                                        )}
                                    </div>
                                    <p className="text-xs sm:text-sm font-medium">
                                        {feature.title}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Center icon */}
                <div className="absolute w-24 sm:w-28 h-24 sm:h-28 rounded-full bg-white shadow-md flex items-center justify-center border border-green-200 z-10">
                    <Icons.ShoppingBag className="text-green-700" size={48} strokeWidth={1.5} />
                </div>
            </div>

            {/* ✅ Popup Modal */}
            {selectedFeature && (
                <div
                    className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 backdrop-blur-sm"
                    onClick={() => setSelectedFeature(null)} // close on backdrop click
                >
                    <div
                        className="bg-white rounded-2xl shadow-xl max-w-lg w-full mx-4 p-6 relative animate-fadeIn"
                        onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
                    >
                        {/* Close button */}
                        <button
                            onClick={() => setSelectedFeature(null)}
                            className="absolute top-3 right-3 text-gray-500 hover:text-green-600"
                        >
                            <Icons.X size={22} />
                        </button>

                        {/* Icon + Title */}
                        <div className="flex flex-col items-center mb-4">
                            {selectedFeature.icon && (
                                <div className="w-12 h-12 mb-2 flex items-center justify-center bg-green-100 rounded-full text-green-700">
                                    {React.createElement(Icons[selectedFeature.icon], {
                                        size: 28,
                                        strokeWidth: 1.5,
                                    })}
                                </div>
                            )}
                            <h4 className="text-green-700 font-semibold text-xl mb-2">
                                {selectedFeature.title}
                            </h4>
                        </div>

                        {/* Description */}
                        <p className="text-gray-700 text-center text-sm sm:text-base leading-relaxed">
                            {selectedFeature.description}
                        </p>
                    </div>
                </div>
            )}

            {/* Animations */}
            <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes spin-reverse {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        .animate-spin-slow {
          animation: spin-slow 25s linear infinite;
        }
        .animate-spin-reverse2 {
          animation: spin-reverse 25s linear infinite;
        }
        @keyframes float {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
          100% {
            transform: translateY(0);
          }
        }
        @keyframes float-alt {
          0% {
            transform: translateY(0) rotate(45deg);
          }
          50% {
            transform: translateY(25px) rotate(45deg);
          }
          100% {
            transform: translateY(0) rotate(45deg);
          }
        }
        .animate-float-slow {
          animation: float 12s ease-in-out infinite;
        }
        .animate-float-slower {
          animation: float 18s ease-in-out infinite;
        }
        .animate-float-alt {
          animation: float-alt 15s ease-in-out infinite;
        }
        .clip-hex {
          clip-path: polygon(
            25% 5.77%,
            75% 5.77%,
            100% 50%,
            75% 94.23%,
            25% 94.23%,
            0% 50%
          );
        }
      `}</style>
        </section>
    );
}
