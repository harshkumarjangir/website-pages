"use client";
import React, { useEffect, useState } from "react";
import * as Icons from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function OverviewSection({ data }) {
  const overviewSection = data;
  const [radius, setRadius] = useState(230);
  const [selectedFeature, setSelectedFeature] = useState(null);
  const [autoIndex, setAutoIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);

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

  // ✅ Auto rotate active feature every 3s
  useEffect(() => {
    if (!overviewSection?.features?.length) return;

    const interval = setInterval(() => {
      setAutoIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % overviewSection.features.length;
        setSelectedFeature(overviewSection.features[nextIndex]);
        return nextIndex;
      });
    }, 3000);

    setSelectedFeature(overviewSection.features[0]);
    return () => clearInterval(interval);
  }, [overviewSection]);

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

      {/* ✅ Rotating Circle + Tooltip + Mobile Description */}
      <div className="flex flex-col lg:flex-row-reverse items-center justify-center gap-10 lg:gap-16 relative z-10">
        {/* ✅ Description Box (only visible on mobile/tablet) */}
        <AnimatePresence mode="wait">
          {selectedFeature && (
            <motion.div
              key={selectedFeature.title}
              initial={{ opacity: 0, x: 0 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 30 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="order-2 lg:hidden text-center transition-all duration-500 ease-in-out px-4"
            >
              <h4 className="text-green-700 font-semibold text-xl mb-2">
                {selectedFeature.title}
              </h4>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                {selectedFeature.description}
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ✅ Rotating Circle */}
        <div className="order-1 relative flex items-center justify-center max-w-max mx-auto h-[500px] sm:h-[420px] md:h-[520px] z-10">
          <div className="absolute w-[280px] sm:w-[380px] md:w-[420px] h-[280px] sm:h-[380px] md:h-[420px] rounded-full border-[2px] border-green-200 animate-spin-slow hover:[animation-play-state:paused]">
            {overviewSection.features.map((feature, index) => {
              const angle = (index / overviewSection.features.length) * 360;
              const x = radius * Math.cos((angle * Math.PI) / 180);
              const y = radius * Math.sin((angle * Math.PI) / 180);
              const LucideIcon = Icons[feature.icon];
              const isActive = selectedFeature?.title === feature.title;
              const isHovered = hoveredIndex === index;

              return (
                <div
                  key={index}
                  onClick={() => setSelectedFeature(feature)}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  style={{
                    top: "50%",
                    left: "50%",
                    transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                  }}
                  className={`absolute cursor-pointer transition-transform duration-300 hover:scale-110 ${isActive ? "scale-110" : ""
                    }`}
                >
                  <div
                    className={`relative w-24 sm:w-32 h-20 rounded-xl shadow-md flex flex-col items-center justify-center text-center border animate-spin-reverse2 hover:[animation-play-state:paused] ${isActive
                        ? "bg-green-600 text-white border-green-600"
                        : "bg-green-100/90 text-[#364153] border-green-200"
                      }`}
                  >
                    <div
                      className={`w-10 h-10 mb-1 flex items-center justify-center rounded-full ${isActive
                          ? "bg-white/20"
                          : "bg-[#364153]/20 text-green-700"
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

                    {/* ✅ Tooltip visible on hover or active (lg only) */}
                    {(isHovered || isActive) && (
                      <div className="hidden lg:block absolute -top-28 left-1/2 -translate-x-1/2 w-64 bg-white text-gray-700 text-sm rounded-lg shadow-md p-3 border border-green-200 transition-opacity duration-300 pointer-events-none z-50">
                        <p className="font-semibold text-green-700 mb-1">
                          {feature.title}
                        </p>
                        <p className="text-xs leading-snug">
                          {feature.description}
                        </p>
                        <div className="absolute bottom-[-8px] left-1/2 -translate-x-1/2 w-3 h-3 bg-white border-l border-t border-green-200 rotate-45"></div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Center Icon */}
          <div className="absolute w-24 sm:w-28 h-24 sm:h-28 rounded-full bg-white shadow-md flex items-center justify-center border border-green-200 z-10">
            <Image
              src={overviewSection.image}
              alt="Overview Logo"
              width={50}
              height={50}
              className="object-contain"
            />
          </div>
        </div>
      </div>

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







// "use client";
// import React, { useEffect, useState } from "react";
// import * as Icons from "lucide-react";
// import Image from "next/image";
// import { motion, AnimatePresence } from "framer-motion";

// export default function OverviewSection({ data }) {
//   const overviewSection = data;
//   const [radius, setRadius] = useState(230);
//   const [selectedFeature, setSelectedFeature] = useState(null);
//   const [autoIndex, setAutoIndex] = useState(0);

//   // ✅ Handle responsive radius
//   useEffect(() => {
//     const handleResize = () => {
//       const width = window.innerWidth;
//       if (width < 640) setRadius(120);
//       else if (width < 1024) setRadius(190);
//       else setRadius(230);
//     };
//     handleResize();
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   // ✅ Auto rotate active feature every 3s
//   useEffect(() => {
//     if (!overviewSection?.features?.length) return;

//     const interval = setInterval(() => {
//       setAutoIndex((prevIndex) => {
//         const nextIndex = (prevIndex + 1) % overviewSection.features.length;
//         setSelectedFeature(overviewSection.features[nextIndex]);
//         return nextIndex;
//       });
//     }, 3000);

//     setSelectedFeature(overviewSection.features[0]);
//     return () => clearInterval(interval);
//   }, [overviewSection]);

//   return (
//     <section className="py-20 bg-white relative overflow-hidden">
//       {/* ✅ Floating Background Hexagons */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute top-10 left-10 w-40 h-40 bg-green-100 opacity-50 rotate-12 clip-hex animate-float-slow"></div>
//         <div className="absolute bottom-16 right-20 w-52 h-52 bg-green-200 opacity-25 -rotate-6 clip-hex animate-float-slower"></div>
//         <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-green-100 opacity-20 rotate-45 clip-hex animate-float-alt"></div>
//       </div>

//       {/* Heading */}
//       <div className="text-center mb-10 relative z-10">
//         <h3 className="text-green-600 text-lg font-semibold uppercase tracking-widest">
//           {overviewSection.heading}
//         </h3>
//         <h2 className="text-3xl font-bold text-green-800 mt-2">
//           {overviewSection.subheading}{" "}
//           <span className="text-green-600">{overviewSection.highlight}</span>
//         </h2>
//         <p className="text-gray-700 mt-4 max-w-4xl mx-auto text-sm sm:text-base">
//           {overviewSection.description}
//         </p>
//       </div>

//       {/* ✅ Only Rotating Circle + Tooltip */}
//       <div className="flex flex-col items-center justify-center gap-10 relative z-10">
//         <div className="relative group flex items-center justify-center max-w-max mx-auto h-[500px] sm:h-[420px] md:h-[520px] z-10">
//           {/* Rotating Ring */}
//           <div className="absolute w-[280px] sm:w-[380px] md:w-[420px] h-[280px] sm:h-[380px] md:h-[420px] rounded-full border-[2px] border-green-200 animate-spin-slow group-hover:[animation-play-state:paused]">
//             {overviewSection.features.map((feature, index) => {
//               const angle = (index / overviewSection.features.length) * 360;
//               const x = radius * Math.cos((angle * Math.PI) / 180);
//               const y = radius * Math.sin((angle * Math.PI) / 180);
//               const LucideIcon = Icons[feature.icon];
//               const isActive = selectedFeature?.title === feature.title;

//               return (
//                 <div
//                   key={index}
//                   onClick={() => setSelectedFeature(feature)}
//                   style={{
//                     top: "50%",
//                     left: "50%",
//                     transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
//                   }}
//                   className={`absolute cursor-pointer transition-transform duration-300 hover:scale-110 ${isActive ? "scale-110" : ""
//                     }`}
//                 >
//                   <div
//                     className={`relative w-24 sm:w-32 h-20 rounded-xl shadow-md flex flex-col items-center justify-center text-center border animate-spin-reverse2 group-hover:[animation-play-state:paused] ${isActive
//                       ? "bg-green-600 text-white border-green-600"
//                       : "bg-green-100/90 text-[#364153] border-green-200"
//                       }`}
//                   >
//                     <div
//                       className={`w-10 h-10 mb-1 flex items-center justify-center rounded-full ${isActive
//                         ? "bg-white/20"
//                         : "bg-[#364153]/20 text-green-700"
//                         }`}
//                     >
//                       {LucideIcon ? (
//                         <LucideIcon size={26} strokeWidth={1.5} />
//                       ) : (
//                         <Icons.Circle size={26} />
//                       )}
//                     </div>
//                     <p className="text-xs sm:text-sm font-medium">
//                       {feature.title}
//                     </p>

//                     {/* ✅ Tooltip for Large Screens */}
//                     <div className="hidden lg:block absolute -top-28 left-1/2 -translate-x-1/2 w-64 bg-white text-gray-700 text-sm rounded-lg shadow-md p-3 border border-green-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
//                       <p className="font-semibold text-green-700 mb-1">
//                         {feature.title}
//                       </p>
//                       <p className="text-xs leading-snug">
//                         {feature.description}
//                       </p>
//                       <div className="absolute bottom-[-8px] left-1/2 -translate-x-1/2 w-3 h-3 bg-white border-l border-t border-green-200 rotate-45"></div>
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>

//           {/* Center Icon */}
//           <div className="absolute w-24 sm:w-28 h-24 sm:h-28 rounded-full bg-white shadow-md flex items-center justify-center border border-green-200 z-10">
//             <Image
//               src={overviewSection.image}
//               alt="Overview Logo"
//               width={50}
//               height={50}
//               className="object-contain"
//             />
//           </div>
//         </div>
//       </div>

//       {/* Animations */}
//       <style jsx>{`
//         @keyframes spin-slow {
//           from {
//             transform: rotate(0deg);
//           }
//           to {
//             transform: rotate(360deg);
//           }
//         }
//         @keyframes spin-reverse {
//           from {
//             transform: rotate(360deg);
//           }
//           to {
//             transform: rotate(0deg);
//           }
//         }
//         .animate-spin-slow {
//           animation: spin-slow 25s linear infinite;
//         }
//         .animate-spin-reverse2 {
//           animation: spin-reverse 25s linear infinite;
//         }
//         @keyframes float {
//           0% {
//             transform: translateY(0);
//           }
//           50% {
//             transform: translateY(-20px);
//           }
//           100% {
//             transform: translateY(0);
//           }
//         }
//         @keyframes float-alt {
//           0% {
//             transform: translateY(0) rotate(45deg);
//           }
//           50% {
//             transform: translateY(25px) rotate(45deg);
//           }
//           100% {
//             transform: translateY(0) rotate(45deg);
//           }
//         }
//         .animate-float-slow {
//           animation: float 12s ease-in-out infinite;
//         }
//         .animate-float-slower {
//           animation: float 18s ease-in-out infinite;
//         }
//         .animate-float-alt {
//           animation: float-alt 15s ease-in-out infinite;
//         }
//         .clip-hex {
//           clip-path: polygon(
//             25% 5.77%,
//             75% 5.77%,
//             100% 50%,
//             75% 94.23%,
//             25% 94.23%,
//             0% 50%
//           );
//         }
//       `}</style>
//     </section>
//   );
// }







// "use client";
// import React, { useEffect, useState } from "react";
// import * as Icons from "lucide-react";
// import Image from "next/image";
// import { motion, AnimatePresence } from "framer-motion";

// export default function OverviewSection({ data }) {
//   const overviewSection = data;
//   const [radius, setRadius] = useState(230);
//   const [selectedFeature, setSelectedFeature] = useState(null);
//   const [autoIndex, setAutoIndex] = useState(0);

//   // Handle responsive radius
//   useEffect(() => {
//     const handleResize = () => {
//       const width = window.innerWidth;
//       if (width < 640) setRadius(120);
//       else if (width < 1024) setRadius(190);
//       else setRadius(230);
//     };
//     handleResize();
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   // ✅ Auto rotate active feature every 3 seconds
//   useEffect(() => {
//     if (!overviewSection?.features?.length) return;

//     const interval = setInterval(() => {
//       setAutoIndex((prevIndex) => {
//         const nextIndex = (prevIndex + 1) % overviewSection.features.length;
//         setSelectedFeature(overviewSection.features[nextIndex]);
//         return nextIndex;
//       });
//     }, 3000);

//     setSelectedFeature(overviewSection.features[0]);
//     return () => clearInterval(interval);
//   }, [overviewSection]);

//   return (
//     <section className="py-20 bg-white relative overflow-hidden">
//       {/* ✅ Floating Background Hexagons */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute top-10 left-10 w-40 h-40 bg-green-100 opacity-50 rotate-12 clip-hex animate-float-slow"></div>
//         <div className="absolute bottom-16 right-20 w-52 h-52 bg-green-200 opacity-25 -rotate-6 clip-hex animate-float-slower"></div>
//         <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-green-100 opacity-20 rotate-45 clip-hex animate-float-alt"></div>
//       </div>

//       {/* Heading */}
//       <div className="text-center mb-10 relative z-10">
//         <h3 className="text-green-600 text-lg font-semibold uppercase tracking-widest">
//           {overviewSection.heading}
//         </h3>
//         <h2 className="text-3xl font-bold text-green-800 mt-2">
//           {overviewSection.subheading}{" "}
//           <span className="text-green-600">{overviewSection.highlight}</span>
//         </h2>
//         <p className="text-gray-700 mt-4 max-w-4xl mx-auto text-sm sm:text-base">
//           {overviewSection.description}
//         </p>
//       </div>

//       {/* ✅ Responsive Layout: Description (left) + Rotating Circle (right) */}
//       <div className="flex flex-col lg:flex-row-reverse items-center justify-center gap-10 lg:gap-16 relative z-10">
//         {/* Description Box */}
//         <AnimatePresence mode="wait">
//           {selectedFeature && (
//             <motion.div
//               key={selectedFeature.title}
//               initial={{ opacity: 0, x: 0 }}
//               animate={{ opacity: 1, x: 0 }}
//               exit={{ opacity: 0, x: 30 }}
//               transition={{ duration: 0.5, ease: "easeInOut" }}
//               className="order-2 lg:order-1 lg:w-1/3 text-center lg:text-left transition-all duration-500 ease-in-out px-4"
//             >
//               <h4 className="text-green-700 font-semibold text-xl mb-2">
//                 {selectedFeature.title}
//               </h4>
//               <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
//                 {selectedFeature.description}
//               </p>
//             </motion.div>
//           )}
//         </AnimatePresence>

//         {/* Rotating Circle */}
//         <div className="order-1 lg:order-2 relative group flex items-center justify-center max-w-max mx-auto h-[500px] sm:h-[420px] md:h-[520px] z-10">
//           <div className="absolute w-[280px] sm:w-[380px] md:w-[420px] h-[280px] sm:h-[380px] md:h-[420px] rounded-full border-[2px] border-green-200 animate-spin-slow group-hover:[animation-play-state:paused]">
//             {overviewSection.features.map((feature, index) => {
//               const angle = (index / overviewSection.features.length) * 360;
//               const x = radius * Math.cos((angle * Math.PI) / 180);
//               const y = radius * Math.sin((angle * Math.PI) / 180);
//               const LucideIcon = Icons[feature.icon];
//               const isActive = selectedFeature?.title === feature.title;

//               return (
//                 <div
//                   key={index}
//                   onClick={() => setSelectedFeature(feature)}
//                   style={{
//                     top: "50%",
//                     left: "50%",
//                     transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
//                   }}
//                   className={`absolute cursor-pointer transition-transform duration-300 hover:scale-110 ${isActive ? "scale-110" : ""
//                     }`}
//                 >
//                   <div
//                     className={`w-24 sm:w-32 h-20 rounded-xl shadow-md flex flex-col items-center justify-center text-center border animate-spin-reverse2 group-hover:[animation-play-state:paused] ${isActive
//                         ? "bg-green-600 text-white border-green-600"
//                         : "bg-green-100/90 text-[#364153] border-green-200"
//                       }`}
//                   >
//                     <div
//                       className={`w-10 h-10 mb-1 flex items-center justify-center rounded-full ${isActive
//                           ? "bg-white/20"
//                           : "bg-[#364153]/20 text-green-700"
//                         }`}
//                     >
//                       {LucideIcon ? (
//                         <LucideIcon size={26} strokeWidth={1.5} />
//                       ) : (
//                         <Icons.Circle size={26} />
//                       )}
//                     </div>
//                     <p className="text-xs sm:text-sm font-medium">
//                       {feature.title}
//                     </p>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>

//           {/* Center Icon */}
//           <div className="absolute w-24 sm:w-28 h-24 sm:h-28 rounded-full bg-white shadow-md flex items-center justify-center border border-green-200 z-10">
//             <Image
//               src={overviewSection.image}
//               alt="Overview Logo"
//               width={50}
//               height={50}
//               className="object-contain"
//             />
//           </div>
//         </div>
//       </div>

//       {/* Animations */}
//       <style jsx>{`
//         @keyframes spin-slow {
//           from {
//             transform: rotate(0deg);
//           }
//           to {
//             transform: rotate(360deg);
//           }
//         }
//         @keyframes spin-reverse {
//           from {
//             transform: rotate(360deg);
//           }
//           to {
//             transform: rotate(0deg);
//           }
//         }
//         .animate-spin-slow {
//           animation: spin-slow 25s linear infinite;
//         }
//         .animate-spin-reverse2 {
//           animation: spin-reverse 25s linear infinite;
//         }
//         @keyframes float {
//           0% {
//             transform: translateY(0);
//           }
//           50% {
//             transform: translateY(-20px);
//           }
//           100% {
//             transform: translateY(0);
//           }
//         }
//         @keyframes float-alt {
//           0% {
//             transform: translateY(0) rotate(45deg);
//           }
//           50% {
//             transform: translateY(25px) rotate(45deg);
//           }
//           100% {
//             transform: translateY(0) rotate(45deg);
//           }
//         }
//         .animate-float-slow {
//           animation: float 12s ease-in-out infinite;
//         }
//         .animate-float-slower {
//           animation: float 18s ease-in-out infinite;
//         }
//         .animate-float-alt {
//           animation: float-alt 15s ease-in-out infinite;
//         }
//         .clip-hex {
//           clip-path: polygon(
//             25% 5.77%,
//             75% 5.77%,
//             100% 50%,
//             75% 94.23%,
//             25% 94.23%,
//             0% 50%
//           );
//         }
//       `}</style>
//     </section>
//   );
// }













// "use client";
// import React, { useEffect, useState } from "react";
// import * as Icons from "lucide-react";
// import Image from "next/image";

// export default function OverviewSection({ data }) {
//   const overviewSection = data;
//   const [radius, setRadius] = useState(230);
//   const [selectedFeature, setSelectedFeature] = useState(null);
//   const [autoIndex, setAutoIndex] = useState(0);

//   // ✅ Handle responsive radius
//   useEffect(() => {
//     const handleResize = () => {
//       const width = window.innerWidth;
//       if (width < 640) setRadius(120);
//       else if (width < 1024) setRadius(190);
//       else setRadius(230);
//     };
//     handleResize();
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   // Auto rotate active feature every 10 seconds
//   useEffect(() => {
//     if (!overviewSection?.features?.length) return;

//     const interval = setInterval(() => {
//       setAutoIndex((prevIndex) => {
//         const nextIndex = (prevIndex + 1) % overviewSection.features.length;
//         setSelectedFeature(overviewSection.features[nextIndex]);
//         return nextIndex;
//       });
//     }, 3000); // 3 seconds

//     // Set initial feature
//     setSelectedFeature(overviewSection.features[0]);

//     return () => clearInterval(interval);
//   }, [overviewSection]);

//   return (
//     <section className="py-20 bg-white relative overflow-hidden">
//       {/* ✅ Floating Background Hexagons */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute top-10 left-10 w-40 h-40 bg-green-100 opacity-50 rotate-12 clip-hex animate-float-slow"></div>
//         <div className="absolute bottom-16 right-20 w-52 h-52 bg-green-200 opacity-25 -rotate-6 clip-hex animate-float-slower"></div>
//         <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-green-100 opacity-20 rotate-45 clip-hex animate-float-alt"></div>
//       </div>

//       {/* Heading */}
//       <div className="text-center mb-10 relative z-10">
//         <h3 className="text-green-600 text-lg font-semibold uppercase tracking-widest">
//           {overviewSection.heading}
//         </h3>
//         <h2 className="text-3xl font-bold text-green-800 mt-2">
//           {overviewSection.subheading}{" "}
//           <span className="text-green-600">{overviewSection.highlight}</span>
//         </h2>
//         <p className="text-gray-700 mt-4 max-w-4xl mx-auto text-sm sm:text-base">
//           {overviewSection.description}
//         </p>
//       </div>

//       {/* Rotating Circle */}
//       <div className="relative group flex items-center justify-center max-w-max mx-auto h-[500px] sm:h-[420px] md:h-[520px] z-10">
//         <div className="absolute w-[280px] sm:w-[380px] md:w-[420px] h-[280px] sm:h-[380px] md:h-[420px] rounded-full border-[2px] border-green-200 animate-spin-slow group-hover:[animation-play-state:paused]">
//           {overviewSection.features.map((feature, index) => {
//             const angle = (index / overviewSection.features.length) * 360;
//             const x = radius * Math.cos((angle * Math.PI) / 180);
//             const y = radius * Math.sin((angle * Math.PI) / 180);
//             const LucideIcon = Icons[feature.icon];
//             const isActive = selectedFeature?.title === feature.title;

//             return (
//               <div
//                 key={index}
//                 onClick={() => setSelectedFeature(feature)}
//                 style={{
//                   top: "50%",
//                   left: "50%",
//                   transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
//                 }}
//                 className={`absolute cursor-pointer transition-transform duration-300 hover:scale-110 ${isActive ? "scale-110" : ""
//                   }`}
//               >
//                 <div
//                   className={`w-24 sm:w-32 h-20 rounded-xl shadow-md flex flex-col items-center justify-center text-center border animate-spin-reverse2 group-hover:[animation-play-state:paused] ${isActive
//                     ? "bg-green-600 text-white border-green-600"
//                     : "bg-green-100/90 text-[#364153] border-green-200"
//                     }`}
//                 >
//                   <div
//                     className={`w-10 h-10 mb-1 flex items-center justify-center rounded-full ${isActive ? "bg-white/20" : "bg-[#364153]/20 text-green-700"
//                       }`}
//                   >
//                     {LucideIcon ? (
//                       <LucideIcon size={26} strokeWidth={1.5} />
//                     ) : (
//                       <Icons.Circle size={26} />
//                     )}
//                   </div>
//                   <p className="text-xs sm:text-sm font-medium">{feature.title}</p>
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//         {/* Center icon */}
//         <div className="absolute w-24 sm:w-28 h-24 sm:h-28 rounded-full bg-white shadow-md flex items-center justify-center border border-green-200 z-10">
//           {/* <Icons.ShoppingBag
//             className="text-green-700"
//             size={48}
//             strokeWidth={1.5}
//           /> */}
//           <Image
//             src={overviewSection.image}
//             alt="Overview Logo"
//             width={50}
//             height={50}
//             className="object-contain"
//           />
//         </div>
//       </div>

//       {/* Description box */}
//       {selectedFeature && (
//         <div className="mt-10 px-2 text-center transition-all duration-500 ease-in-out max-w-3xl mx-auto">
//           <h4 className="text-green-700 font-semibold text-xl mb-2">
//             {selectedFeature.title}
//           </h4>
//           <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
//             {selectedFeature.description}
//           </p>
//         </div>
//       )}

//       {/* Animations */}
//       <style jsx>{`
//         @keyframes spin-slow {
//           from {
//             transform: rotate(0deg);
//           }
//           to {
//             transform: rotate(360deg);
//           }
//         }
//         @keyframes spin-reverse {
//           from {
//             transform: rotate(360deg);
//           }
//           to {
//             transform: rotate(0deg);
//           }
//         }
//         .animate-spin-slow {
//           animation: spin-slow 25s linear infinite;
//         }
//         .animate-spin-reverse2 {
//           animation: spin-reverse 25s linear infinite;
//         }
//         @keyframes float {
//           0% {
//             transform: translateY(0);
//           }
//           50% {
//             transform: translateY(-20px);
//           }
//           100% {
//             transform: translateY(0);
//           }
//         }
//         @keyframes float-alt {
//           0% {
//             transform: translateY(0) rotate(45deg);
//           }
//           50% {
//             transform: translateY(25px) rotate(45deg);
//           }
//           100% {
//             transform: translateY(0) rotate(45deg);
//           }
//         }
//         .animate-float-slow {
//           animation: float 12s ease-in-out infinite;
//         }
//         .animate-float-slower {
//           animation: float 18s ease-in-out infinite;
//         }
//         .animate-float-alt {
//           animation: float-alt 15s ease-in-out infinite;
//         }
//         .clip-hex {
//           clip-path: polygon(
//             25% 5.77%,
//             75% 5.77%,
//             100% 50%,
//             75% 94.23%,
//             25% 94.23%,
//             0% 50%
//           );
//         }
//       `}</style>
//     </section>
//   );
// }












// "use client";
// import React, { useEffect, useState } from "react";
// import * as Icons from "lucide-react";

// export default function OverviewSection({ data }) {
//   const overviewSection = data;
//   const [radius, setRadius] = useState(230);

//   // ✅ Handle responsive radius
//   useEffect(() => {
//     const handleResize = () => {
//       const width = window.innerWidth;
//       if (width < 640) setRadius(120);
//       else if (width < 1024) setRadius(190);
//       else setRadius(230);
//     };

//     handleResize();
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return (
//     <section className="py-20 bg-white relative overflow-hidden">
//       {/* ✅ Floating Background Hexagons */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute top-10 left-10 w-40 h-40 bg-green-100 opacity-50 rotate-12 clip-hex animate-float-slow"></div>
//         <div className="absolute bottom-16 right-20 w-52 h-52 bg-green-200 opacity-25 -rotate-6 clip-hex animate-float-slower"></div>
//         <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-green-100 opacity-20 rotate-45 clip-hex animate-float-alt"></div>
//       </div>

//       {/* Heading */}
//       <div className="text-center mb-10 relative z-10">
//         <h3 className="text-green-600 text-lg font-semibold uppercase tracking-widest">
//           {overviewSection.heading}
//         </h3>
//         <h2 className="text-3xl font-bold text-green-800 mt-2">
//           {overviewSection.subheading}{" "}
//           <span className="text-green-600">{overviewSection.highlight}</span>
//         </h2>
//         <p className="text-gray-700 mt-4 max-w-4xl mx-auto text-sm sm:text-base">
//           {overviewSection.description}
//         </p>
//       </div>

//       {/* Rotating Circle */}
//       <div className="relative group flex items-center justify-center max-w-max mx-auto h-[500px] sm:h-[420px] md:h-[520px] z-10">
//         {/* ✅ Rotating ring (pauses on hover) */}
//         <div className="absolute w-[280px] sm:w-[380px] md:w-[420px] h-[280px] sm:h-[380px] md:h-[420px] rounded-full border-[2px] border-green-200 animate-spin-slow group-hover:[animation-play-state:paused]">
//           {overviewSection.features.map((feature, index) => {
//             const angle = (index / overviewSection.features.length) * 360;
//             const x = radius * Math.cos((angle * Math.PI) / 180);
//             const y = radius * Math.sin((angle * Math.PI) / 180);
//             const LucideIcon = Icons[feature.icon];

//             return (
//               <div
//                 key={index}
//                 style={{
//                   top: "50%",
//                   left: "50%",
//                   transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
//                 }}
//                 className="absolute transition-transform duration-300 hover:scale-110"
//               >
//                 <div className="w-24 sm:w-32 h-20 bg-green-100/90 animate-spin-reverse2 group-hover:[animation-play-state:paused] rounded-xl shadow-md flex flex-col items-center justify-center text-center border border-green-200">
//                   <div className="w-10 h-10 mb-1 flex items-center justify-center bg-[#364153]/20 text-green-700 rounded-full">
//                     {LucideIcon ? (
//                       <LucideIcon size={28} strokeWidth={1.5} />
//                     ) : (
//                       <Icons.Circle size={28} />
//                     )}
//                   </div>
//                   <p className="text-xs sm:text-sm text-[#364153] font-medium">
//                     {feature.title}
//                   </p>
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//         {/* Center icon */}
//         <div className="absolute w-24 sm:w-28 h-24 sm:h-28 rounded-full bg-white shadow-md flex items-center justify-center border border-green-200 z-10">
//           <Icons.ShoppingBag className="text-green-700" size={48} strokeWidth={1.5} />
//         </div>
//       </div>

//       {/* Animations */}
//       <style jsx>{`
//         /* --- ROTATION ANIMATIONS --- */
//         @keyframes spin-slow {
//           from {
//             transform: rotate(0deg);
//           }
//           to {
//             transform: rotate(360deg);
//           }
//         }

//         @keyframes spin-reverse {
//           from {
//             transform: rotate(360deg);
//           }
//           to {
//             transform: rotate(0deg);
//           }
//         }

//         .animate-spin-slow {
//           animation: spin-slow 25s linear infinite;
//         }

//         .animate-spin-reverse2 {
//           animation: spin-reverse 25s linear infinite;
//         }

//         /* --- FLOATING BACKGROUND --- */
//         @keyframes float {
//           0% {
//             transform: translateY(0);
//           }
//           50% {
//             transform: translateY(-20px);
//           }
//           100% {
//             transform: translateY(0);
//           }
//         }

//         @keyframes float-alt {
//           0% {
//             transform: translateY(0) rotate(45deg);
//           }
//           50% {
//             transform: translateY(25px) rotate(45deg);
//           }
//           100% {
//             transform: translateY(0) rotate(45deg);
//           }
//         }

//         .animate-float-slow {
//           animation: float 12s ease-in-out infinite;
//         }

//         .animate-float-slower {
//           animation: float 18s ease-in-out infinite;
//         }

//         .animate-float-alt {
//           animation: float-alt 15s ease-in-out infinite;
//         }

//         /* ✅ Hexagon shape */
//         .clip-hex {
//           clip-path: polygon(
//             25% 5.77%,
//             75% 5.77%,
//             100% 50%,
//             75% 94.23%,
//             25% 94.23%,
//             0% 50%
//           );
//         }
//       `}</style>
//     </section>
//   );
// }
