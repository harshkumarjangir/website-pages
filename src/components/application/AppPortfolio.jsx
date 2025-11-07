// "use client";

// import { motion, useAnimation } from "framer-motion";
// import Image from "next/image";
// import { useEffect } from "react";

// const AppPortfolio = ({ data }) => {
//     const { title, subtitle, appScreens, brandName } = data;
//     const controls = useAnimation();

//     // Infinite scroll animation loop
//     useEffect(() => {
//         const loopAnimation = async () => {
//             while (true) {
//                 await controls.start({
//                     x: ["0%", "-50%"],
//                     transition: {
//                         duration: 20,
//                         ease: "linear",
//                     },
//                 });
//                 controls.set({ x: "0%" });
//             }
//         };
//         loopAnimation();
//     }, [controls]);

//     return (
//         <section className="bg-white py-16 px-6 lg:px-20 overflow-hidden">
//             {/* Heading */}
//             <div className="text-center mb-10">
//                 <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
//                     {title || "Our Restaurant App Development Portfolio"}
//                 </h2>
//                 <p className="text-gray-600 mt-3 max-w-3xl mx-auto">
//                     {subtitle ||
//                         "We have delivered cutting-edge restaurant app solutions for businesses of all sizes, from single-location eateries to large restaurant chains."}
//                 </p>
//             </div>

//             {/* Portfolio Showcase */}
//             <div className="relative bg-[#0E9F9F] rounded-3xl p-6 md:p-10 flex flex-col md:flex-row items-center justify-center overflow-hidden">
//                 {/* Scrolling Screens */}
//                 <div className="relative w-full overflow-hidden md:flex-1">
//                     <motion.div
//                         animate={controls}
//                         className="flex gap-6 md:gap-8 w-max"
//                     >
//                         {[...appScreens, ...appScreens].map((src, i) => (
//                             <div
//                                 key={i}
//                                 className="bg-white rounded-2xl shadow-lg overflow-hidden w-[160px] sm:w-[180px] md:w-[200px] lg:w-[220px] flex-shrink-0 hover:scale-105 transition-transform duration-300"
//                             >
//                                 <Image
//                                     src={src}
//                                     alt={`App Screen ${i + 1}`}
//                                     width={220}
//                                     height={440}
//                                     className="w-full h-auto"
//                                 />
//                             </div>
//                         ))}
//                     </motion.div>

//                     {/* Gradient fade edges */}
//                     <div className="absolute top-0 left-0 h-full w-10 bg-gradient-to-r from-[#0E9F9F] to-transparent pointer-events-none"></div>
//                     <div className="absolute top-0 right-0 h-full w-10 bg-gradient-to-l from-[#0E9F9F] to-transparent pointer-events-none"></div>
//                 </div>

//                 {/* Brand Block */}
//                 <motion.div
//                     initial={{ x: 100, opacity: 0 }}
//                     whileInView={{ x: 0, opacity: 1 }}
//                     transition={{ duration: 0.8 }}
//                     viewport={{ once: true }}
//                     className="mt-10 md:mt-0 md:w-[220px] lg:w-[280px] bg-[#078C8C] rounded-2xl md:rounded-l-3xl flex items-center justify-center text-center py-8 md:py-0"
//                 >
//                     <h3 className="text-3xl md:text-4xl font-bold text-orange-400">
//                         {brandName || "Brand"}
//                     </h3>
//                 </motion.div>
//             </div>
//         </section>
//     );
// };

// export default AppPortfolio;





// "use client";

// import { motion, useAnimation } from "framer-motion";
// import Image from "next/image";
// import { useEffect, useState } from "react";

// const AppPortfolio = ({ data }) => {
//     const { title, subtitle, tabs } = data;
//     const [activeTab, setActiveTab] = useState(tabs[0]); // default first tab
//     const controls = useAnimation();

//     // Infinite scroll animation loop
//     useEffect(() => {
//         const loopAnimation = async () => {
//             while (true) {
//                 await controls.start({
//                     x: ["0%", "-50%"],
//                     transition: { duration: 20, ease: "linear" },
//                 });
//                 controls.set({ x: "0%" });
//             }
//         };
//         loopAnimation();
//     }, [controls, activeTab]); // restart animation when tab changes

//     return (
//         <section className="bg-white py-16 px-6 lg:px-20 overflow-hidden">
//             {/* Heading */}
//             <div className="text-center mb-10">
//                 <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
//                     {title || "Our Restaurant App Development Portfolio"}
//                 </h2>
//                 <p className="text-gray-600 mt-3 max-w-3xl mx-auto">
//                     {subtitle ||
//                         "We have delivered cutting-edge restaurant app solutions for businesses of all sizes."}
//                 </p>
//             </div>

//             {/* Portfolio Showcase */}
//             <div className="relative bg-[#0E9F9F] rounded-3xl p-6 md:p-10 flex flex-col md:flex-row items-center justify-center overflow-hidden">
//                 {/* Scrolling Screens */}
//                 <div className="relative w-full overflow-hidden md:flex-1">
//                     <motion.div animate={controls} className="flex gap-6 md:gap-8 w-max">
//                         {[...activeTab.appScreens, ...activeTab.appScreens].map((src, i) => (
//                             <div
//                                 key={i}
//                                 className="bg-white rounded-2xl shadow-lg overflow-hidden w-[160px] sm:w-[180px] md:w-[200px] lg:w-[220px] flex-shrink-0 hover:scale-105 transition-transform duration-300"
//                             >
//                                 <Image
//                                     src={src}
//                                     alt={`App Screen ${i + 1}`}
//                                     width={220}
//                                     height={440}
//                                     className="w-full h-auto"
//                                 />
//                             </div>
//                         ))}
//                     </motion.div>

//                     {/* Gradient fade edges */}
//                     <div className="absolute top-0 left-0 h-full w-10 bg-gradient-to-r from-[#0E9F9F] to-transparent pointer-events-none"></div>
//                     <div className="absolute top-0 right-0 h-full w-10 bg-gradient-to-l from-[#0E9F9F] to-transparent pointer-events-none"></div>
//                 </div>

//                 {/* Brand Block */}
//                 <motion.div
//                     initial={{ x: 100, opacity: 0 }}
//                     whileInView={{ x: 0, opacity: 1 }}
//                     transition={{ duration: 0.8 }}
//                     viewport={{ once: true }}
//                     className="mt-10 md:mt-0 md:w-[220px] lg:w-[280px] bg-[#078C8C] rounded-2xl md:rounded-l-3xl flex flex-col items-center justify-center text-center py-8 md:py-0"
//                 >
//                     {activeTab.brandImage && (
//                         <Image
//                             src={activeTab.brandImage}
//                             alt={activeTab.brandName}
//                             width={120}
//                             height={120}
//                             className="mb-4 object-contain"
//                         />
//                     )}
//                     <h3 className="text-3xl md:text-4xl font-bold text-orange-400">
//                         {activeTab.brandName}
//                     </h3>
//                 </motion.div>
//             </div>

//             {/* Tabs */}
//             <div className="flex justify-center gap-4 mt-10 flex-wrap">
//                 {tabs.map((tab) => (
//                     <button
//                         key={tab.brandName}
//                         onClick={() => setActiveTab(tab)}
//                         className={`px-6 py-2 rounded-full font-semibold transition-colors duration-300 ${activeTab.brandName === tab.brandName
//                                 ? "bg-orange-400 text-white"
//                                 : "bg-white text-gray-900 shadow hover:shadow-md"
//                             }`}
//                     >
//                         {tab.brandName}
//                     </button>
//                 ))}
//             </div>
//         </section>
//     );
// };

// export default AppPortfolio;




"use client";

import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const AppPortfolio = ({ data }) => {
    const { title, subtitle, tabs } = data;
    const [activeTab, setActiveTab] = useState(tabs[0]);
    const controls = useAnimation();
    const [isHovered, setIsHovered] = useState(false);

    // Smooth infinite scroll with instant pause on hover
    useEffect(() => {
        let active = true;

        const animateLoop = async () => {
            while (active) {
                if (!isHovered) {
                    await controls.start({
                        x: ["0%", "-50%"],
                        transition: { duration: 20, ease: "linear" },
                    });
                    controls.set({ x: "0%" });
                } else {
                    // Instantly stop animation when hovered
                    controls.stop();
                    await new Promise((resolve) => setTimeout(resolve, 100));
                }
            }
        };

        animateLoop();

        return () => {
            active = false;
            controls.stop();
        };
    }, [controls, activeTab, isHovered]);

    return (
        <section className="bg-green-50 py-16 px-6 lg:px-20 rounded-3xl">
            {/* Heading */}
            <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-bold text-green-900">
                    {title || "Our Restaurant App Development Portfolio"}
                </h2>
                <p className="mt-3 max-w-3xl mx-auto text-green-700">
                    {subtitle ||
                        "We have delivered cutting-edge restaurant app solutions for businesses of all sizes."}
                </p>
            </div>

            {/* Portfolio Showcase */}
            <div className="relative rounded-3xl p-6 md:p-10 flex flex-col md:flex-row items-center justify-center overflow-hidden bg-gradient-to-r from-green-100 via-green-200 to-green-100 shadow-lg">
                {/* Scrolling Screens */}
                <div
                    className="relative w-full overflow-hidden md:flex-1"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <motion.div animate={controls} className="flex gap-6 md:gap-8 w-max">
                        {[...activeTab.appScreens, ...activeTab.appScreens].map(
                            (src, i) => (
                                <div
                                    key={i}
                                    className="rounded-2xl overflow-hidden w-[160px] sm:w-[180px] md:w-[200px] lg:w-[220px] flex-shrink-0 hover:scale-105 transition-transform duration-300"
                                >
                                    <Image
                                        src={src}
                                        alt={`App Screen ${i + 1}`}
                                        width={220}
                                        height={440}
                                        className="w-full h-auto"
                                    />
                                </div>
                            )
                        )}
                    </motion.div>
                </div>

                {/* Brand Block */}
                <motion.div
                    initial={{ x: 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mt-10 md:mt-0 md:w-[220px] lg:w-[280px] flex flex-col items-center justify-center text-center py-6"
                >
                    {activeTab.brandImage && (
                        <Image
                            src={activeTab.brandImage}
                            alt={activeTab.brandName}
                            width={120}
                            height={120}
                            className="mb-4 object-contain rounded-full"
                        />
                    )}
                    <h3 className="text-2xl md:text-3xl font-bold text-green-900">
                        {activeTab.brandName}
                    </h3>
                </motion.div>
            </div>

            {/* Tabs */}
            <div className="flex flex-nowrap justify-start md:justify-center overflow-x-auto no-scrollbar gap-4 mt-10">
                {tabs.map((tab) => (
                    <button
                        key={tab.brandName}
                        onClick={() => setActiveTab(tab)}
                        className={`px-6 py-2 text-nowrap rounded-full font-semibold transition-colors duration-300 ${activeTab.brandName === tab.brandName
                            ? "bg-green-600 text-white shadow-md"
                            : "bg-white text-green-800 shadow hover:shadow-md"
                            }`}
                    >
                        {tab.brandName}
                    </button>
                ))}
            </div>
        </section>
    );
};

export default AppPortfolio;
