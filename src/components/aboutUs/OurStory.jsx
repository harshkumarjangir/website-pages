"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function OurStory({ data, className = "" }) {
    const { title, timeline } = data;
    const [activeIndex, setActiveIndex] = useState(0);
    const active = timeline[activeIndex];
    const scrollRef = useRef(null);
    const [lineWidth, setLineWidth] = useState(0);

    // === Measure total timeline width ===
    useEffect(() => {
        const updateLineWidth = () => {
            if (scrollRef.current) {
                setLineWidth(scrollRef.current.scrollWidth);
            }
        };
        updateLineWidth();
        window.addEventListener("resize", updateLineWidth);
        return () => window.removeEventListener("resize", updateLineWidth);
    }, [timeline]);

    // === Framer Variants ===
    const imageVariants = {
        enter: { opacity: 0, x: -40, rotate: -10, scale: 0.98 },
        center: { opacity: 1, x: 0, rotate: -5, scale: 1 },
        exit: { opacity: 0, x: 40, rotate: 4, scale: 0.98 },
    };

    const textVariants = {
        enter: { opacity: 0, y: 20 },
        center: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -20 },
    };

    return (
        <section className={`w-full bg-black text-white py-16 overflow-hidden ${className}`}>
            <div className="max-w-7xl mx-auto px-6">
                {/* ===== Title ===== */}
                {/* <h3 className="text-center text-white/80 text-xl md:text-2xl mb-10 font-medium">
                    {title}
                </h3> */}
                <h2 className="text-2xl md:text-5xl font-bold text-center mb-12 leading-tight">
                    {title}
                </h2>

                {/* ===== Main Section ===== */}
                <div className="relative grid md:grid-cols-2 gap-10 items-center">
                    {/* Left Image */}
                    <div className="flex justify-center">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={active.year + "-img"}
                                variants={imageVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{ duration: 0.6, ease: "easeOut" }}
                                className="relative w-[80%] sm:w-[70%] md:w-[75%] lg:w-[65%] rotate-[-5deg] rounded-2xl overflow-hidden shadow-2xl"
                            >
                                <div className="relative w-full h-[280px] sm:h-[300px] md:h-[320px] lg:h-[350px]">
                                    <Image
                                        src={active.image}
                                        alt={`year-${active.year}`}
                                        fill
                                        className="object-cover object-center"
                                        priority
                                    />
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Right Text */}
                    <div className="relative flex flex-col justify-center">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={active.year + "-content"}
                                variants={textVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{ duration: 0.45, ease: "easeOut" }}
                                className="relative z-10"
                            >
                                {/* Large Background Year */}
                                <h2 className="absolute -top-20 max-md:-left-3 -left-10 z-[0] text-7xl sm:text-[120px] md:text-[160px] lg:text-[200px] font-extrabold text-[#1163FB] leading-none select-none">
                                    {active.year}
                                </h2>

                                {/* Description */}
                                <p className="relative z-[2] text-base sm:text-lg md:text-xl text-gray-200 max-w-xl md:pt-20 leading-relaxed">
                                    {active.description}
                                </p>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>

                {/* ===== Scrollable Timeline ===== */}
                <div className="mt-20 relative w-full overflow-x-auto no-scrollbar">
                    <div className="relative flex justify-center w-max mx-auto px-0">
                        {/* === Line Behind Circles === */}
                        <div className="absolute top-1/5 left-0 right-0 h-[2px] bg-[#1163FB]/40 -translate-y-1/2 z-0"></div>

                        {/* === Timeline Nodes === */}
                        <div
                            ref={scrollRef}
                            className="relative flex gap-14 z-10"
                        >
                            {timeline.map((item, index) => {
                                const isActive = index === activeIndex;
                                return (
                                    <div
                                        key={item.year}
                                        className="flex-shrink-0 flex flex-col items-center min-w-[80px]"
                                    >
                                        {/* Circle Node */}
                                        <button onClick={() => setActiveIndex(index)}>
                                            <div
                                                className={`w-6 h-4 rounded-full border-2 transition-all duration-300
                  ${isActive
                                                        ? "bg-[#1163FB] border-[#1163FB] scale-110"
                                                        : "border-[#1163FB] bg-black hover:bg-[#1163FB]/30"
                                                    }`}
                                            />
                                        </button>

                                        {/* Year Label */}
                                        <span
                                            onClick={() => setActiveIndex(index)}
                                            className={`mt-3 text-sm transition-all duration-300 cursor-pointer
                ${isActive
                                                    ? "text-white font-semibold"
                                                    : "text-gray-400"
                                                }`}
                                        >
                                            {item.year}
                                        </span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>


            </div>
        </section>
    );
}