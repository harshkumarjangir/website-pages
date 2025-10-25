// "use client";

// import { useState } from "react";
// import Image from "next/image";

// export default function OurStory({data}) {
//   const { title, timeline } = data;
//   const [activeIndex, setActiveIndex] = useState(0);
//   const active = timeline[activeIndex];

//   return (
//     <section className="w-full bg-black text-white py-16 overflow-hidden">
//       <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
//         {/* ===== Title ===== */}
//         <h2 className="text-3xl md:text-5xl font-semibold text-center mb-12">
//           <span className="text-gray-300">{title.split(" ")[0]} </span>
//           <span className="text-blue-500">{title.split(" ")[1]}</span>{" "}
//           {title.split(" ").slice(2).join(" ")}
//         </h2>

//         {/* ===== Content Section ===== */}
//         <div className="grid md:grid-cols-2 gap-10 items-center w-full mb-16">
//           {/* Left Image */}
//           <div className="relative flex justify-center">
//             <div className="relative w-[90%] md:w-[80%] aspect-[4/3] overflow-hidden rounded-xl transform rotate-[-5deg] shadow-2xl">
//               <Image
//                 src={active.image}
//                 alt={active.year}
//                 fill
//                 className="object-cover object-center"
//               />
//             </div>
//           </div>

//           {/* Right Text */}
//           <div className="relative">
//             <h1 className="text-[140px] md:text-[200px] font-extrabold text-blue-600 leading-none absolute -top-10 -left-4 opacity-20 select-none">
//               {active.year}
//             </h1>
//             <h2 className="relative z-10 text-[100px] md:text-[140px] font-extrabold text-blue-600 leading-none mb-4">
//               {active.year}
//             </h2>
//             <p className="text-gray-300 text-lg md:text-xl leading-relaxed relative z-10">
//               {active.description}
//             </p>
//           </div>
//         </div>

//         {/* ===== Timeline Navigation ===== */}
//         <div className="flex items-center justify-center gap-6 w-full overflow-x-auto scrollbar-hide">
//           {timeline.map((item, index) => (
//             <button
//               key={item.year}
//               onClick={() => setActiveIndex(index)}
//               className={`flex flex-col items-center text-sm font-medium transition-colors ${
//                 index === activeIndex ? "text-blue-500" : "text-gray-400"
//               }`}
//             >
//               <div
//                 className={`w-5 h-5 rounded-full border-2 ${
//                   index === activeIndex
//                     ? "bg-blue-500 border-blue-500"
//                     : "border-gray-600"
//                 }`}
//               ></div>
//               <span className="mt-2">{item.year}</span>
//             </button>
//           ))}
//         </div>

//         {/* ===== Connecting Line ===== */}
//         <div className="relative w-full mt-4">
//           <div className="absolute left-0 right-0 top-2 h-[2px] bg-gray-700"></div>
//         </div>
//       </div>
//     </section>
//   );
// }




// "use client";

// import { useState } from "react";
// import Image from "next/image";
// import { motion, AnimatePresence } from "framer-motion";



// export default function OurStory({ data, className = "" }) {
//     const { title, timeline } = data;
//     const [activeIndex, setActiveIndex] = useState(0);
//     const active = timeline[activeIndex];

//     const imageVariants = {
//         enter: { opacity: 0, x: -40, rotate: -10, scale: 0.98 },
//         center: { opacity: 1, x: 0, rotate: -5, scale: 1 },
//         exit: { opacity: 0, x: 40, rotate: 4, scale: 0.98 }
//     };

//     const textVariants = {
//         enter: { opacity: 0, y: 20 },
//         center: { opacity: 1, y: 0 },
//         exit: { opacity: 0, y: -20 }
//     };

//     return (
//         <section className={`w-full bg-black text-white py-16 overflow-hidden ${className}`}>
//             <div className="max-w-7xl mx-auto px-6">
//                 {/* Title */}
//                 <h3 className="text-center text-white/80 text-xl md:text-2xl mb-8 font-medium">{title}</h3>

//                 {/* Main area */}
//                 <div className="relative grid md:grid-cols-2 gap-8 items-center">
//                     {/* left: tilted image */}
//                     <div className="flex justify-start md:justify-center">
//                         <div className="relative w-[70%] md:w-[60%] lg:w-[50%]">
//                             <div className="relative rounded-2xl overflow-visible">
//                                 <AnimatePresence mode="wait">
//                                     <motion.div
//                                         key={active.year + "-img"}
//                                         variants={imageVariants}
//                                         initial="enter"
//                                         animate="center"
//                                         exit="exit"
//                                         transition={{ duration: 0.55, ease: "easeOut" }}
//                                         className="rounded-2xl shadow-2xl"
//                                         style={{ transformOrigin: "center" }}
//                                     >
//                                         {/* Use a wrapper with fixed aspect to avoid cropping; image uses object-cover */}
//                                         <div className="relative w-full h-[340px] md:h-[420px] lg:h-[520px] overflow-hidden rounded-2xl" >
//                                             <Image
//                                                 src={active.image}
//                                                 alt={`year-${active.year}`}
//                                                 fill
//                                                 className="object-cover object-center"
//                                                 priority
//                                             />
//                                         </div>
//                                     </motion.div>
//                                 </AnimatePresence>

//                                 {/* decorative tilt effect (CSS rotate for visual) */}
//                                 <style jsx>{`
//                   .rounded-2xl > .motion-div {
//                     transform: rotate(-8deg);
//                   }
//                 `}</style>
//                                 {/* tilt transform applied via inline style below */}
//                                 <div aria-hidden className="pointer-events-none absolute inset-0" />
//                             </div>
//                         </div>
//                     </div>

//                     {/* right: big year + description */}
//                     <div className="relative flex flex-col justify-center">
//                         {/* giant backdrop year */}
//                         <motion.div
//                             key={active.year + "-bg"}
//                             initial={{ opacity: 0 }}
//                             animate={{ opacity: 0.08 }}
//                             transition={{ duration: 0.6 }}
//                             className="absolute -left-6 top-0 select-none pointer-events-none"
//                         >
//                             <div className="hidden md:block text-blue-600 font-extrabold leading-none" style={{ fontSize: "220px", lineHeight: 0.8 }}>
//                                 {active.year}
//                             </div>
//                         </motion.div>

//                         <AnimatePresence mode="wait">
//                             <motion.div
//                                 key={active.year + "-content"}
//                                 variants={textVariants}
//                                 initial="enter"
//                                 animate="center"
//                                 exit="exit"
//                                 transition={{ duration: 0.45, ease: "easeOut" }}
//                                 className="relative z-10"
//                             >
//                                 <div className="flex items-start md:items-center gap-6">
//                                     {/* Visible year in front */}
//                                     <h2 className="text-6xl md:text-[140px] lg:text-[180px] font-extrabold text-blue-500 leading-none mr-6">
//                                         {active.year}
//                                     </h2>

//                                     {/* description */}
//                                     <div className="max-w-xl">
//                                         <p className="text-base md:text-lg text-gray-200 mb-4">
//                                             {active.description}
//                                         </p>
//                                     </div>
//                                 </div>
//                             </motion.div>
//                         </AnimatePresence>
//                     </div>
//                 </div>

//                 {/* Timeline controls */}
//                 <div className="mt-14">
//                     <div className="relative max-w-full">
//                         {/* connecting line */}
//                         <div className="absolute left-8 right-8 top-4 h-[2px] bg-gray-700" />

//                         <div className="flex items-center justify-between px-8 space-x-6 overflow-x-auto no-scrollbar">
//                             {timeline.map((item, index) => {
//                                 const isActive = index === activeIndex;
//                                 return (
//                                     <div key={item.year} className="flex-shrink-0 flex flex-col items-center text-center">
//                                         <button
//                                             onClick={() => setActiveIndex(index)}
//                                             className="relative focus:outline-none"
//                                             aria-current={isActive}
//                                         >
//                                             {/* Outer node */}
//                                             <div className={`w-9 h-5 rounded-full ${isActive ? "bg-blue-600" : "bg-gray-800 border border-gray-600"}`}></div>

//                                             {/* Circle on top */}
//                                             <motion.div
//                                                 layout
//                                                 transition={{ type: "spring", stiffness: 300, damping: 24 }}
//                                                 className={`absolute -top-3 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full ${isActive ? "bg-blue-500 shadow-[0_0_0_6px_rgba(59,130,246,0.12)]" : "bg-transparent border-2 border-gray-600"
//                                                     }`}
//                                             />
//                                         </button>

//                                         <span className={`mt-6 text-sm ${isActive ? "text-white" : "text-gray-500"}`}>{item.year}</span>
//                                     </div>
//                                 );
//                             })}
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// }





// "use client";

// import { useState } from "react";
// import Image from "next/image";
// import { motion, AnimatePresence } from "framer-motion";

// export default function OurStory({ data, className = "" }) {
//     const { title, timeline } = data;
//     const [activeIndex, setActiveIndex] = useState(0);
//     const active = timeline[activeIndex];

//     const imageVariants = {
//         enter: { opacity: 0, x: -40, rotate: -10, scale: 0.98 },
//         center: { opacity: 1, x: 0, rotate: -5, scale: 1 },
//         exit: { opacity: 0, x: 40, rotate: 4, scale: 0.98 },
//     };

//     const textVariants = {
//         enter: { opacity: 0, y: 20 },
//         center: { opacity: 1, y: 0 },
//         exit: { opacity: 0, y: -20 },
//     };

//     return (
//         <section
//             className={`w-full bg-black text-white py-16 overflow-hidden ${className}`}
//         >
//             <div className="max-w-7xl mx-auto px-6">
//                 {/* Title */}
//                 <h3 className="text-center text-white/80 text-xl md:text-2xl mb-8 font-medium">
//                     {title}
//                 </h3>

//                 {/* Main area */}
//                 <div className="relative grid md:grid-cols-2 gap-10 items-center">
//                     {/* Left Image Section */}
//                     <div className="flex justify-center">
//                         <AnimatePresence mode="wait">
//                             <motion.div
//                                 key={active.year + "-img"}
//                                 variants={imageVariants}
//                                 initial="enter"
//                                 animate="center"
//                                 exit="exit"
//                                 transition={{ duration: 0.6, ease: "easeOut" }}
//                                 className="relative w-[80%] sm:w-[70%] md:w-[75%] lg:w-[65%] rotate-[-5deg] rounded-2xl overflow-hidden shadow-2xl"
//                             >
//                                 <div className="relative w-full h-[280px] sm:h-[300px] md:h-[300px] lg:h-[320px]">
//                                     <Image
//                                         src={active.image}
//                                         alt={`year-${active.year}`}
//                                         fill
//                                         className="object-cover object-center"
//                                         priority
//                                     />
//                                 </div>
//                             </motion.div>
//                         </AnimatePresence>
//                     </div>

//                     {/* Right Text Section */}
//                     <div className="relative flex flex-col justify-center">
//                         <AnimatePresence mode="wait">
//                             <motion.div
//                                 key={active.year + "-content"}
//                                 variants={textVariants}
//                                 initial="enter"
//                                 animate="center"
//                                 exit="exit"
//                                 transition={{ duration: 0.45, ease: "easeOut" }}
//                                 className="relative z-10"
//                             >
//                                 {/* Large Blue Year */}
//                                 <h2 className="absolute -top-20 -left-30 z-[800] text-7xl sm:text-[120px] md:text-[160px] lg:text-[200px] font-extrabold text-blue-500 leading-none mb-6">
//                                     {active.year}
//                                 </h2>

//                                 {/* Description */}
//                                 <p className="z-[999] text-base sm:text-lg md:text-xl text-gray-200 max-w-xl leading-relaxed">
//                                     {active.description}
//                                 </p>
//                             </motion.div>
//                         </AnimatePresence>
//                     </div>
//                 </div>

//                 {/* Timeline Controls */}
//                 <div className="mt-14">
//                     <div className="relative max-w-full">
//                         {/* Line */}
//                         <div className="absolute left-8 right-8 top-4 h-[2px] bg-gray-700" />

//                         <div className="flex items-center justify-between px-8 overflow-x-auto no-scrollbar">
//                             {timeline.map((item, index) => {
//                                 const isActive = index === activeIndex;
//                                 return (
//                                     <div
//                                         key={item.year}
//                                         className="flex-shrink-0 flex flex-col items-center text-center"
//                                     >
//                                         <button
//                                             onClick={() => setActiveIndex(index)}
//                                             className="relative focus:outline-none"
//                                             aria-current={isActive}
//                                         >
//                                             {/* Node */}
//                                             <div
//                                                 className={`w-8 h-8 rounded-full transition-all duration-300 ${isActive
//                                                         ? "bg-blue-600 shadow-[0_0_10px_3px_rgba(37,99,235,0.6)]"
//                                                         : "bg-gray-800 border border-gray-600"
//                                                     }`}
//                                             ></div>
//                                         </button>

//                                         {/* Year Label */}
//                                         <span
//                                             className={`mt-3 text-sm sm:text-base transition-all duration-300 ${isActive ? "text-white font-semibold" : "text-gray-500"
//                                                 }`}
//                                         >
//                                             {item.year}
//                                         </span>
//                                     </div>
//                                 );
//                             })}
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// }






"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion";

export default function OurStory({ data, className = "" }) {
    const { title, timeline } = data;
    const [activeIndex, setActiveIndex] = useState(0);
    const active = timeline[activeIndex];
    const scrollRef = useRef(null);

    // Animation variants
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
                <h3 className="text-center text-white/80 text-xl md:text-2xl mb-10 font-medium">
                    {title}
                </h3>

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
                                <p className="relative z-[2] text-base sm:text-lg md:text-xl text-gray-200 max-w-xl leading-relaxed">
                                    {active.description}
                                </p>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>


                {/* ===== Scrollable Timeline ===== */}
                <div className="mt-20 relative">

                    {/* Line Behind Circles */}
                    <div className="absolute left-0 right-0 top-1/2 h-[2px] bg-blue-700/40 z-0 transform -translate-y-1/2"></div>

                    {/* Scrollable & Draggable Timeline */}
                    <motion.div
                        ref={scrollRef}
                        className="flex gap-14 px-8 overflow-x-auto no-scrollbar cursor-grab active:cursor-grabbing"
                        drag="x"
                        dragConstraints={{ left: -200, right: 0 }}
                    >
                        {timeline.map((item, index) => {
                            const isActive = index === activeIndex;
                            return (
                                <div
                                    key={item.year}
                                    className="flex-shrink-0 flex flex-col items-center min-w-[80px]"
                                >
                                    {/* Circle Node Button */}
                                    <button onClick={() => setActiveIndex(index)}>
                                        <div
                                            className={`w-6 h-3 rounded-full border-2 transition-all duration-300
                                ${isActive
                                                    ? "bg-[#1163FB] border-[#1163FB] scale-125"
                                                    : "border-[#1163FB] bg-transparent hover:bg-[#1163FB]/30"
                                                }
                            `}
                                        />
                                    </button>

                                    {/* Year Text */}
                                    <span
                                        onClick={() => setActiveIndex(index)}
                                        className={`mt-3 text-sm transition-all duration-300 cursor-pointer
                            ${isActive ? "text-white font-semibold" : "text-gray-400"}
                        `}
                                    >
                                        {item.year}
                                    </span>
                                </div>
                            );
                        })}
                    </motion.div>
                </div>

            </div>
        </section>
    );
}





const xyz = () => {
    return (
        <div className="mt-20 relative">
            {/* Line behind bars */}
            {/* <div className="absolute left-0 right-0 top-[22px] h-[2px] bg-gray-700 z-0"></div> */}
            <div className="absolute left-0 right-0 top-1/2 h-[2px] bg-gray-700 z-0 transform -translate-y-1/2"></div>

            {/* Scrollable area */}
            <motion.div
                ref={scrollRef}
                className="flex gap-10 px-8 overflow-x-auto cursor-grab active:cursor-grabbing no-scrollbar"
                drag="x"
                dragConstraints={{ left: -200, right: 0 }}
                whileTap={{ cursor: "grabbing" }}
            >
                {timeline.map((item, index) => {
                    const isActive = index === activeIndex;
                    return (
                        <div
                            key={item.year}
                            className="flex-shrink-0 flex flex-col items-center text-center min-w-[100px]"
                        >
                            <button
                                onClick={() => setActiveIndex(index)}
                                className="relative focus:outline-none"
                            >
                                {/* Rectangular Node */}
                                <div
                                    className={`w-12 h-4 rounded-md transition-all duration-300 ${isActive
                                        ? "bg-[#1163FB] scale-110"
                                        : "bg-gray-700 hover:bg-gray-600"
                                        }`}
                                ></div>
                            </button>

                            {/* Year Label */}
                            <span
                                onClick={() => setActiveIndex(index)}
                                className={`mt-3 text-sm sm:text-base transition-all duration-300 ${isActive
                                    ? "text-white font-semibold"
                                    : "text-gray-500"
                                    }`}
                            >
                                {item.year}
                            </span>
                        </div>
                    );
                })}
            </motion.div>
        </div>
    );
}