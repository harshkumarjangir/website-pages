// "use client";
// import React from "react";
// import * as Icons from "lucide-react";

// export default function OverviewSection({ data }) {
//   const overviewSection = data;

//   return (
//     <section className="py-20 bg-blue-50 relative overflow-hidden">
//       {/* Heading */}
//       <div className="text-center mb-10">
//         <h3 className="text-blue-600 text-lg font-semibold uppercase tracking-widest">
//           {overviewSection.heading}
//         </h3>
//         <h2 className="text-3xl font-bold text-blue-800 mt-2">
//           {overviewSection.subheading}{" "}
//           <span className="text-blue-600">{overviewSection.highlight}</span>
//         </h2>
//         <p className="text-gray-600 mt-4 max-w-xl mx-auto text-sm sm:text-base">
//           {overviewSection.description}
//         </p>
//       </div>

//       {/* Rotating Circle */}
//       <div className="relative flex items-center justify-center h-[500px] sm:h-[420px] md:h-[500px]">
//         {/* Rotating ring */}
//         <div className="absolute w-[280px] sm:w-[380px] md:w-[420px] h-[340px] sm:h-[380px] md:h-[420px] rounded-full border-[2px] border-blue-200 animate-spin-slow hover:[animation-play-state:paused]">
//           {overviewSection.features.map((feature, index) => {
//             const angle = (index / overviewSection.features.length) * 360;
//             // const radius = 160; // original
//             const radius = 220; // increased from 160 → pushes cards outside the circle
//             const x = radius * Math.cos((angle * Math.PI) / 180);
//             const y = radius * Math.sin((angle * Math.PI) / 180);

//             const LucideIcon = Icons[feature.icon];

//             return (
//               <div style={{
//                 top: "50%",
//                 left: "50%",
//                 transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
//               }} className="absolute transition-transform duration-300 hover:scale-110" key={index}>
//                 <div

//                   className=" w-28 sm:w-32 h-20 bg-white animate-spin-reverse2 rounded-xl shadow-md flex flex-col items-center justify-center text-center border border-blue-100 "

//                 >
//                   <div className="w-10 h-10 mb-1 flex items-center justify-center  text-blue-600">
//                     {LucideIcon ? (
//                       <LucideIcon size={28} strokeWidth={1.5} />
//                     ) : (
//                       <Icons.Circle size={28} />
//                     )}
//                   </div>
//                   <p className="text-xs sm:text-sm text-blue-700 font-medium">
//                     {feature.title}
//                   </p>
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//         {/* Center logo (can also be an icon if preferred) */}
//         <div className="absolute w-24 sm:w-28 h-24 sm:h-28 rounded-full bg-white shadow-md flex items-center justify-center border border-blue-200 z-10">
//           <Icons.ShoppingBag className="text-blue-600" size={48} strokeWidth={1.5} />
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

//         .animate-spin-reverse {
//           animation: spin-reverse 25s linear infinite;
//         }
//         .animate-spin-reverse2 {
//           animation: spin-reverse 25s linear infinite;
//         }
//       `}</style>
//     </section>
//   );
// }



// "use client";
// import React from "react";
// import * as Icons from "lucide-react";

// export default function OverviewSection({ data }) {
//   const overviewSection = data;

//   return (
//     <section className="py-20 bg-blue-50 relative overflow-hidden">
//       {/* Heading */}
//       <div className="text-center mb-10">
//         <h3 className="text-blue-600 text-lg font-semibold uppercase tracking-widest">
//           {overviewSection.heading}
//         </h3>
//         <h2 className="text-3xl font-bold text-blue-800 mt-2">
//           {overviewSection.subheading}{" "}
//           <span className="text-blue-600">{overviewSection.highlight}</span>
//         </h2>
//         <p className="text-gray-600 mt-4 max-w-xl mx-auto text-sm sm:text-base">
//           {overviewSection.description}
//         </p>
//       </div>

//       {/* Rotating Circle */}
//       <div className="relative flex items-center justify-center h-[500px] sm:h-[420px] md:h-[520px]">
//         {/* Rotating ring */}
//         <div className="absolute w-[280px] sm:w-[380px] md:w-[420px] h-[280px] sm:h-[380px] md:h-[420px] rounded-full border-[2px] border-blue-200 animate-spin-slow hover:[animation-play-state:paused]">
//           {overviewSection.features.map((feature, index) => {
//             const angle = (index / overviewSection.features.length) * 360;

//             // ✅ Responsive radius for balanced spacing
//             let radius = 0;
//             if (typeof window !== "undefined") {
//               const width = window.innerWidth;
//               if (width < 640) radius = 100; // mobile
//               else if (width < 1024) radius = 190; // tablet
//               else radius = 230; // desktop
//             } else {
//               radius = 230; // fallback for SSR
//             }

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
//                 <div className="w-28 sm:w-32 h-20 bg-white animate-spin-reverse2 rounded-xl shadow-md flex flex-col items-center justify-center text-center border border-blue-100">
//                   <div className="w-10 h-10 mb-1 flex items-center justify-center text-blue-600">
//                     {LucideIcon ? (
//                       <LucideIcon size={28} strokeWidth={1.5} />
//                     ) : (
//                       <Icons.Circle size={28} />
//                     )}
//                   </div>
//                   <p className="text-xs sm:text-sm text-blue-700 font-medium">
//                     {feature.title}
//                   </p>
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//         {/* Center icon */}
//         <div className="absolute w-24 sm:w-28 h-24 sm:h-28 rounded-full bg-white shadow-md flex items-center justify-center border border-blue-200 z-10">
//           <Icons.ShoppingBag className="text-blue-600" size={48} strokeWidth={1.5} />
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

//   return (
//     <section className="py-20 bg-green-50 relative overflow-hidden group">
//       {/* ✅ Background hexagons */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute top-10 left-10 w-40 h-40 bg-green-100 opacity-30 rotate-12 clip-hex"></div>
//         <div className="absolute bottom-16 right-20 w-52 h-52 bg-green-200 opacity-25 -rotate-6 clip-hex"></div>
//         <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-green-100 opacity-20 rotate-45 clip-hex"></div>
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
//         <p className="text-gray-700 mt-4 max-w-xl mx-auto text-sm sm:text-base">
//           {overviewSection.description}
//         </p>
//       </div>

//       {/* Rotating Circle */}
//       <div className="relative flex items-center justify-center h-[500px] sm:h-[420px] md:h-[520px] z-10">
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
//                 <div className="w-28 sm:w-32 h-20 bg-green-100/90 animate-spin-reverse2 group-hover:[animation-play-state:paused] rounded-xl shadow-md flex flex-col items-center justify-center text-center border border-green-200">
//                   <div className="w-10 h-10 mb-1 flex items-center justify-center text-green-700">
//                     {LucideIcon ? (
//                       <LucideIcon size={28} strokeWidth={1.5} />
//                     ) : (
//                       <Icons.Circle size={28} />
//                     )}
//                   </div>
//                   <p className="text-xs sm:text-sm text-green-800 font-medium">
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

//       {/* Animations + hex shape */}
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

//         /* ✅ Hexagon clip path */
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




"use client";
import React, { useEffect, useState } from "react";
import * as Icons from "lucide-react";

export default function OverviewSection({ data }) {
  const overviewSection = data;
  const [radius, setRadius] = useState(230);

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
    <section className="py-20 bg-white relative overflow-hidden group">
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
        <p className="text-gray-700 mt-4 max-w-xl mx-auto text-sm sm:text-base">
          {overviewSection.description}
        </p>
      </div>

      {/* Rotating Circle */}
      <div className="relative flex items-center justify-center h-[500px] sm:h-[420px] md:h-[520px] z-10">
        {/* ✅ Rotating ring (pauses on hover) */}
        <div className="absolute w-[280px] sm:w-[380px] md:w-[420px] h-[280px] sm:h-[380px] md:h-[420px] rounded-full border-[2px] border-green-200 animate-spin-slow group-hover:[animation-play-state:paused]">
          {overviewSection.features.map((feature, index) => {
            const angle = (index / overviewSection.features.length) * 360;
            const x = radius * Math.cos((angle * Math.PI) / 180);
            const y = radius * Math.sin((angle * Math.PI) / 180);
            const LucideIcon = Icons[feature.icon];

            return (
              <div
                key={index}
                style={{
                  top: "50%",
                  left: "50%",
                  transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                }}
                className="absolute transition-transform duration-300 hover:scale-110"
              >
                <div className="w-24 sm:w-32 h-20 bg-green-100/90 animate-spin-reverse2 group-hover:[animation-play-state:paused] rounded-xl shadow-md flex flex-col items-center justify-center text-center border border-green-200">
                  <div className="w-10 h-10 mb-1 flex items-center justify-center bg-[#364153]/20 text-green-700 rounded-full">
                    {LucideIcon ? (
                      <LucideIcon size={28} strokeWidth={1.5} />
                    ) : (
                      <Icons.Circle size={28} />
                    )}
                  </div>
                  <p className="text-xs sm:text-sm text-[#364153] font-medium">
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

      {/* Animations */}
      <style jsx>{`
        /* --- ROTATION ANIMATIONS --- */
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

        /* --- FLOATING BACKGROUND --- */
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

        /* ✅ Hexagon shape */
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
// import React from "react";
// import * as Icons from "lucide-react";
// import homeData from "@/data/homedata.json";

// export default function OverviewSection() {
//     const { overviewSection } = homeData;

//     return (
//         <section className="py-20 bg-blue-50 relative overflow-hidden">
//             {/* Heading */}
//             <div className="text-center mb-10">
//                 <h3 className="text-blue-600 text-lg font-semibold uppercase tracking-widest">
//                     {overviewSection.heading}
//                 </h3>
//                 <h2 className="text-3xl font-bold text-blue-800 mt-2">
//                     {overviewSection.subheading}{" "}
//                     <span className="text-blue-600">{overviewSection.highlight}</span>
//                 </h2>
//                 <p className="text-gray-600 mt-4 max-w-xl mx-auto text-sm sm:text-base">
//                     {overviewSection.description}
//                 </p>
//             </div>

//             {/* Rotating Circle */}
//             <div className="relative flex items-center justify-center h-[500px] sm:h-[420px] md:h-[500px]">
//                 {/* Rotating ring */}
//                 <div className="absolute w-[340px] sm:w-[380px] md:w-[420px] h-[340px] sm:h-[380px] md:h-[420px] rounded-full border-[2px] border-blue-200 animate-spin-slow hover:[animation-play-state:paused]">
//                     {overviewSection.features.map((feature, index) => {
//                         const angle = (index / overviewSection.features.length) * 360;
//                         const radius = 160;
//                         const x = radius * Math.cos((angle * Math.PI) / 180);
//                         const y = radius * Math.sin((angle * Math.PI) / 180);

//                         const LucideIcon = Icons[feature.icon];

//                         return (
//                             <div
//                                 key={index}
//                                 className="absolute w-28 sm:w-32 h-20 bg-white rounded-xl shadow-md flex flex-col items-center justify-center text-center border border-blue-100 transition-transform duration-300 hover:scale-110"
//                                 style={{
//                                     top: "50%",
//                                     left: "50%",
//                                     transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) rotate(${-angle}deg)`,
//                                 }}
//                             >
//                                 <div className="w-10 h-10 mb-1 flex items-center justify-center text-blue-600">
//                                     {LucideIcon ? (
//                                         <LucideIcon size={28} strokeWidth={1.5} />
//                                     ) : (
//                                         <Icons.Circle size={28} />
//                                     )}
//                                 </div>
//                                 <p className="text-xs sm:text-sm text-blue-700 font-medium">
//                                     {feature.title}
//                                 </p>
//                             </div>
//                         );
//                     })}
//                 </div>

//                 {/* Center logo (Lucide icon example) */}
//                 <div className="absolute w-24 sm:w-28 h-24 sm:h-28 rounded-full bg-white shadow-md flex items-center justify-center border border-blue-200 z-10">
//                     <Icons.ShoppingBag className="text-blue-600" size={48} strokeWidth={1.5} />
//                 </div>
//             </div>

//             {/* Animations */}
//             <style jsx>{`
//         @keyframes spin-slow {
//           from {
//             transform: rotate(0deg);
//           }
//           to {
//             transform: rotate(360deg);
//           }
//         }

//         .animate-spin-slow {
//           animation: spin-slow 25s linear infinite;
//         }
//       `}</style>
//         </section>
//     );
// }
