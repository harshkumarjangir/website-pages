// "use client";

// export default function OurAchievements({ data }) {
//     const { title, achievements } = data;

//     return (
//         <section className="w-full bg-gradient-to-b from-white to-gray-50 text-gray-900 py-20">
//             <div className="max-w-7xl mx-auto px-6 text-center">
//                 {/* ===== Section Title ===== */}
//                 <h2 className="text-3xl md:text-4xl font-bold mb-14">{title}</h2>

//                 {/* ===== Achievements Grid ===== */}
//                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
//                     {achievements.map((item, index) => (
//                         <div
//                             key={index}
//                             className="group bg-white rounded-2xl shadow-sm hover:shadow-lg border border-gray-200 hover:border-blue-500 transition-all duration-300 p-8 flex flex-col items-center text-center"
//                         >
//                             <h3 className="text-3xl md:text-4xl font-bold text-blue-600 mb-2 group-hover:scale-110 transition-transform duration-300">
//                                 {item.number}
//                             </h3>
//                             <p className="text-gray-800 font-medium text-lg">{item.text}</p>
//                             <span className="mt-1 text-sm text-gray-500">{item.subtext}</span>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// }




"use client";

import { useEffect, useRef, useState } from "react";
import * as LucideIcons from "lucide-react";

export default function OurAchievements({ data }) {
    const { title, achievements } = data;
    const [visible, setVisible] = useState(false);
    const sectionRef = useRef(null);

    // Count-up logic
    const [counts, setCounts] = useState(achievements.map(() => 0));

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (visible) {
            const interval = setInterval(() => {
                setCounts((prev) =>
                    prev.map((val, i) =>
                        val < achievements[i].count ? val + Math.ceil(achievements[i].count / 40) : achievements[i].count
                    )
                );
            }, 30);
            return () => clearInterval(interval);
        }
    }, [visible, achievements]);

    return (
        <section ref={sectionRef} className="w-full bg-gray-50 py-16">
            <div className="max-w-7xl mx-auto px-6 text-center">
                {/* ===== Title ===== */}
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
                    {title}
                </h2>

                {/* ===== Achievements Grid ===== */}
               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
    {achievements.map((item, index) => {
        const Icon = LucideIcons[item.icon];
        return (
            <div
                key={index}
                className="group relative overflow-hidden bg-white shadow-md rounded-2xl py-10 px-6 flex flex-col items-center justify-center 
                transform transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_25px_rgba(17,99,251,0.25)]"
            >
                {/* === Blue Hover Overlay (behind content) === */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-500 translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-0" />

                {/* === Content === */}
                <div className="relative z-10 flex flex-col items-center justify-center text-center">
                    {/* Icon Wrapper */}
                    <div
                        className="w-16 h-16 mb-5 flex items-center justify-center rounded-full bg-blue-50 
                        text-blue-600 transition-all duration-500 group-hover:bg-white group-hover:text-blue-700"
                    >
                        <Icon size={34} className="transition-transform duration-500 group-hover:scale-110" />
                    </div>

                    {/* Animated Number */}
                    <h3 className="text-3xl font-extrabold text-gray-900 transition-colors duration-300 group-hover:text-white">
                        {counts[index]}
                        {item.suffix}
                    </h3>

                    {/* Label */}
                    <p className="mt-2 text-gray-600 font-medium group-hover:text-white">
                        {item.label}
                    </p>
                </div>
            </div>
        );
    })}
</div>


            </div>
        </section>
    );
}
