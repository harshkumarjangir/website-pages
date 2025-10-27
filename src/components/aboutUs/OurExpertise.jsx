// "use client";

// import * as Icons from "lucide-react";

// export default function OurExpertise({ data }) {
//     const { title, description, expertises } = data;

//     return (
//         <section className="w-full bg-white text-gray-800 py-16">
//             <div className="max-w-7xl mx-auto px-6 text-center">
//                 {/* === Title === */}
//                 <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
//                 <p className="text-gray-600 max-w-2xl mx-auto mb-12">{description}</p>

//                 {/* === Expertise Grid === */}
//                 <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
//                     {expertises.map((item, index) => {
//                         const LucideIcon = Icons[item.icon] || Icons.Circle;
//                         return (
//                             <div
//                                 key={index}
//                                 className="group flex flex-col items-center p-6 bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-blue-500"
//                             >
//                                 <div className="w-16 h-16 flex items-center justify-center bg-gray-50 rounded-lg mb-4 group-hover:bg-blue-50 transition">
//                                     <LucideIcon className="w-8 h-8 text-gray-800 group-hover:text-blue-600 transition-transform duration-300 group-hover:scale-110" />
//                                 </div>
//                                 <h3 className="text-base md:text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition">
//                                     {item.name}
//                                 </h3>
//                             </div>
//                         );
//                     })}
//                 </div>
//             </div>
//         </section>
//     );
// }





// "use client";

// import * as Icons from "lucide-react";

// export default function OurExpertise({ data }) {
//     const { title, bgTitle ,description, expertises } = data;

//     return (
//         <section className="relative w-full bg-white text-gray-800 py-20 overflow-hidden">
//             {/* ===== Background Title (faint text) ===== */}
//             <h2 className="absolute top-8 left-1/2 -translate-x-1/2 uppercase text-[100px] md:text-[160px] font-extrabold text-gray-100 tracking-wider opacity-50 select-none pointer-events-none">
//                 {bgTitle}
//             </h2>

//             <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
//                 {/* ===== Section Title ===== */}
//                 <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
//                 <p className="text-gray-600 max-w-2xl mx-auto mb-14">
//                     {description}
//                 </p>

//                 {/* ===== Expertise Grid ===== */}
//                 <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10">
//                     {expertises.map((item, index) => {
//                         const LucideIcon = Icons[item.icon] || Icons.Circle;

//                         return (
//                             <div
//                                 key={index}
//                                 className="group flex flex-col items-center p-8 bg-white rounded-2xl shadow-sm border border-gray-200 hover:border-blue-500 hover:shadow-lg transition-all duration-300"
//                             >
//                                 <div className="w-20 h-20 flex items-center justify-center bg-gray-50 rounded-xl mb-5 group-hover:bg-blue-50 transition">
//                                     <LucideIcon className="w-10 h-10 text-gray-800 group-hover:text-blue-600 transition-transform duration-300 group-hover:scale-110" />
//                                 </div>
//                                 <h3 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition text-center">
//                                     {item.name}
//                                 </h3>
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
import * as LucideIcons from "lucide-react";

export default function OurExpertise({ data }) {
    const { title, bgTitle, description, expertises } = data;
    const [activeCategory, setActiveCategory] = useState(expertises[0].name);

    return (
        <section className="relative w-full bg-black text-white py-20 overflow-hidden">
            {/* ===== Background Faint Title ===== */}
            {/* <h2 className="absolute top-8 left-1/2 -translate-x-1/2 uppercase text-[90px] md:text-[150px] font-extrabold text-gray-100 tracking-wider opacity-40 select-none pointer-events-none">
                {bgTitle}
            </h2> */}

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* ===== Heading ===== */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
                    <p className="text-gray-300 max-w-3xl mx-auto">{description}</p>
                </div>

                {/* ===== Desktop Layout ===== */}
                <div className="hidden h-[80vh] md:grid grid-cols-2 rounded-2xl overflow-hidden custom-scrollbar">
                    {/* Left Tabs */}
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

                    {/* Right Content */}
                    <div className="bg-white text-black p-8 flex flex-col items-center justify-center">
                        {expertises.map(
                            (item, i) =>
                                activeCategory === item.name && (
                                    <div key={i} className="text-center transition-all duration-500">
                                        <div className="w-24 h-24 mx-auto mb-6 flex items-center justify-center bg-blue-50 rounded-full">
                                            {(() => {
                                                const Icon = LucideIcons[item.icon] || LucideIcons.Circle;
                                                return <Icon className="w-12 h-12 text-blue-600" />;
                                            })()}
                                        </div>
                                        <h3 className="text-2xl font-semibold mb-3 text-blue-600">{item.name}</h3>
                                        <p className="text-gray-600 max-w-md mx-auto">
                                            We deliver exceptional expertise in <span className="font-semibold text-blue-600">{item.name}</span>, helping clients succeed with modern technology solutions.
                                        </p>
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
                                    {isActive && <LucideIcons.ArrowRight className="w-5 h-5" />}
                                </div>

                                {/* Content */}
                                {isActive && (
                                    <div className="bg-white text-black p-5 rounded-xl mt-2 shadow-sm">
                                        <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-blue-50 rounded-full">
                                            <Icon className="w-8 h-8 text-blue-600" />
                                        </div>
                                        <p className="text-sm text-center text-gray-700">
                                            We provide tailored <span className="font-semibold text-blue-600">{item.name}</span> services to help your business innovate.
                                        </p>
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
