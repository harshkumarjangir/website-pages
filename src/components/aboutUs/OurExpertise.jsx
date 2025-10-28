// "use client";

// import { useState } from "react";
// import * as LucideIcons from "lucide-react";

// export default function OurExpertise({ data }) {
//     const { title, bgTitle, description, expertises } = data;
//     const [activeCategory, setActiveCategory] = useState(expertises[0].name);

//     return (
//         <section className="relative w-full bg-black text-white py-20 overflow-hidden">
//             {/* ===== Background Faint Title ===== */}
//             <h2 className="absolute top-8 left-1/2 -translate-x-1/2 uppercase text-[90px] md:text-[150px] font-extrabold text-gray-100 tracking-wider opacity-40 select-none pointer-events-none">
//                 {bgTitle}
//             </h2>

//             <div className="max-w-7xl mx-auto px-6 relative z-10">
//                 {/* ===== Heading ===== */}
//                 <div className="text-center mb-12">
//                     <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
//                     <p className="text-gray-300 max-w-3xl mx-auto">{description}</p>
//                 </div>

//                 {/* ===== Desktop Layout ===== */}
//                 <div className="hidden h-[80vh] md:grid grid-cols-2 rounded-2xl overflow-hidden custom-scrollbar">
//                     {/* Left Tabs */}
//                     <div className="bg-blue-600 p-6 overflow-y-auto">
//                         {expertises.map((item, i) => {
//                             const Icon = LucideIcons[item.icon] || LucideIcons.Circle;
//                             const isActive = activeCategory === item.name;
//                             return (
//                                 <div
//                                     key={i}
//                                     onClick={() => setActiveCategory(item.name)}
//                                     className={`flex items-center justify-between gap-3 px-4 py-3 rounded-lg cursor-pointer mb-3 transition-all duration-300 
//                     ${isActive ? "bg-blue-500 text-white" : "hover:bg-blue-500 text-white/80"}`}
//                                 >
//                                     <div className="flex items-center gap-3">
//                                         <Icon className="w-5 h-5" />
//                                         <span className="font-medium">{item.name}</span>
//                                     </div>
//                                 </div>
//                             );
//                         })}
//                     </div>

//                     {/* Right Content */}
//                     <div className="bg-white text-black p-8 flex flex-col items-center justify-center">
//                         {expertises.map(
//                             (item, i) =>
//                                 activeCategory === item.name && (
//                                     <div key={i} className="text-center transition-all duration-500">
//                                         <div className="w-24 h-24 mx-auto mb-6 flex items-center justify-center bg-blue-50 rounded-full">
//                                             {(() => {
//                                                 const Icon = LucideIcons[item.icon] || LucideIcons.Circle;
//                                                 return <Icon className="w-12 h-12 text-blue-600" />;
//                                             })()}
//                                         </div>
//                                         <h3 className="text-2xl font-semibold mb-3 text-blue-600">{item.name}</h3>
//                                         <p className="text-gray-600 max-w-md mx-auto">
//                                             We deliver exceptional expertise in <span className="font-semibold text-blue-600">{item.name}</span>, helping clients succeed with modern technology solutions.
//                                         </p>
//                                     </div>
//                                 )
//                         )}
//                     </div>
//                 </div>

//                 {/* ===== Mobile Layout (Accordion) ===== */}
//                 <div className="block md:hidden">
//                     {expertises.map((item, i) => {
//                         const Icon = LucideIcons[item.icon] || LucideIcons.Circle;
//                         const isActive = activeCategory === item.name;
//                         return (
//                             <div key={i} className="mb-4">
//                                 <div
//                                     onClick={() =>
//                                         setActiveCategory(isActive ? "" : item.name)
//                                     }
//                                     className={`flex items-center justify-between px-4 py-3 rounded-lg cursor-pointer transition-all duration-300 
//                     ${isActive ? "bg-blue-600 text-white" : "bg-blue-500 text-white/80 hover:bg-blue-600"}`}
//                                 >
//                                     <div className="flex items-center gap-3">
//                                         <Icon className="w-5 h-5" />
//                                         <span className="font-semibold">{item.name}</span>
//                                     </div>
//                                     {isActive && <LucideIcons.ArrowRight className="w-5 h-5" />}
//                                 </div>

//                                 {/* Content */}
//                                 {isActive && (
//                                     <div className="bg-white text-black p-5 rounded-xl mt-2 shadow-sm">
//                                         <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-blue-50 rounded-full">
//                                             <Icon className="w-8 h-8 text-blue-600" />
//                                         </div>
//                                         <p className="text-sm text-center text-gray-700">
//                                             We provide tailored <span className="font-semibold text-blue-600">{item.name}</span> services to help your business innovate.
//                                         </p>
//                                     </div>
//                                 )}
//                             </div>
//                         );
//                     })}
//                 </div>
//             </div>
//         </section>
//     );
// }





"use client";

import { useState } from "react";
import Image from "next/image";
import * as LucideIcons from "lucide-react";

export default function OurExpertise({ data }) {
    const { title, bgTitle, description, expertises } = data;
    const [activeCategory, setActiveCategory] = useState(expertises[0].name);

    return (
        <section className="relative w-full bg-black text-white py-20 overflow-hidden">

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* ===== Section Heading ===== */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
                    <p className="text-gray-300 max-w-3xl mx-auto">{description}</p>
                </div>

                {/* ===== Desktop Layout ===== */}
                <div className="hidden h-[80vh] md:grid grid-cols-2 rounded-2xl overflow-hidden custom-scrollbar">
                    {/* Left Side: Tabs */}
                    <div className="bg-blue-600 p-6 overflow-y-auto">
                        {expertises.map((item, i) => {
                            const Icon = LucideIcons[item.icon] || LucideIcons.Circle;
                            const isActive = activeCategory === item.name;
                            return (
                                <div
                                    key={i}
                                    onClick={() => setActiveCategory(item.name)}
                                    className={`flex items-center justify-between gap-3 px-4 py-3 rounded-lg cursor-pointer mb-3 transition-all duration-300 
                    ${isActive ? "bg-blue-500 text-white" : "hover:bg-blue-500 text-white/80"}`}
                                >
                                    <div className="flex items-center gap-3">
                                        <Icon className="w-5 h-5" />
                                        <span className="font-medium">{item.name}</span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Right Side: Content */}
                    <div className="relative bg-white text-black flex flex-col justify-center items-center overflow-hidden p-12">
                        {expertises.map(
                            (item, i) =>
                                activeCategory === item.name && (
                                    <div
                                        key={i}
                                        className="w-full max-w-2xl mx-auto text-center transition-all duration-500 z-10"
                                    >
                                        {/* ===== Background Image ===== */}
                                        {item.image && (
                                            <div className="absolute inset-0 w-full h-full">
                                                <Image
                                                    src={item.image}
                                                    alt={item.name}
                                                    fill
                                                    className="object-cover object-center opacity-90 mix-blend-multiply transition-opacity duration-500"
                                                />
                                                {/* Soft white overlay */}
                                                <div className="absolute inset-0 bg-white/10 backdrop-blur-[1px]"></div>
                                            </div>
                                        )}

                                        {/* ===== Foreground Content ===== */}
                                        <div className="relative z-10 bg-white/20 backdrop-blur-md rounded-2xl px-8 py-10">
                                            {/* Icon */}
                                            <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center bg-blue-100 rounded-full shadow-inner">
                                                {(() => {
                                                    const Icon = LucideIcons[item.icon] || LucideIcons.Circle;
                                                    return <Icon className="w-10 h-10 text-[#155DFC]" />;
                                                })()}
                                            </div>

                                            {/* Title */}
                                            <h3 className="text-3xl font-bold mb-3  text-[#80d4ff] drop-shadow-[0_0_6px_rgba(128,212,255,0.3)]">
                                                {item.name}
                                            </h3>

                                            {/* Prefix + Suffix */}
                                            <p className="text-[#e6eeff] leading-relaxed text-base">
                                                {item["name-prefix"]}{" "}
                                                <span className="font-semibold text-[#80d4ff] drop-shadow-[0_0_6px_rgba(128,212,255,0.3)]">{item.name}</span>,{" "}
                                                {item["name-suffix"]}
                                            </p>

                                            {/* Description */}
                                            {item.description && (
                                                <p className="text-[#d6e0ff] mt-4 text-sm leading-relaxed">
                                                    {item.description}
                                                </p>
                                            )}


                                        </div>
                                    </div>
                                )
                        )}
                    </div>


                </div>

                {/* ===== Mobile Layout (Accordion) ===== */}
                <div className="block md:hidden">
                    {expertises.map((item, i) => {
                        const Icon = LucideIcons[item.icon] || LucideIcons.Circle;
                        const isActive = activeCategory === item.name;
                        return (
                            <div key={i} className="mb-4">
                                {/* Accordion Header */}
                                <div
                                    onClick={() =>
                                        setActiveCategory(isActive ? "" : item.name)
                                    }
                                    className={`flex items-center justify-between px-4 py-3 rounded-lg cursor-pointer transition-all duration-300 
                    ${isActive ? "bg-blue-600 text-white" : "bg-blue-500 text-white/80 hover:bg-blue-600"}`}
                                >
                                    <div className="flex items-center gap-3">
                                        <Icon className="w-5 h-5" />
                                        <span className="font-semibold">{item.name}</span>
                                    </div>
                                    {isActive && <LucideIcons.ChevronDown className="w-5 h-5" />}
                                </div>

                                {/* Accordion Content */}
                                {isActive && (
                                    <div className="bg-white text-black p-5 rounded-xl mt-2 shadow-sm relative">
                                        {/* Image Absolute */}
                                        {item.image && (
                                            <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-20">
                                                {/* <div className="relative w-full h-full">
                                                    <Image
                                                        src={item.image}
                                                        alt={item.name}
                                                        fill
                                                        className="object-contain"
                                                    />
                                                </div> */}
                                            </div>
                                        )}

                                        <div className="relative z-10">
                                            <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-blue-50 rounded-full">
                                                <Icon className="w-8 h-8 text-blue-600" />
                                            </div>
                                            <p className="text-sm text-center text-gray-700 leading-relaxed">
                                                {item["name-prefix"]}{" "}
                                                <span className="font-semibold text-blue-600">{item.name}</span>,{" "}
                                                {item["name-suffix"]}
                                            </p>
                                            {item.description && (
                                                <p className="text-xs text-gray-600 mt-3 text-center">
                                                    {item.description}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
