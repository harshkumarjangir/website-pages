"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const LatestTechnologies = ({ data }) => {
    const techData = data;
    const [activeCategory, setActiveCategory] = useState(techData.categories[0]);

    return (
        <section className="bg-black text-white py-16 px-4 text-center relative overflow-hidden">
            {/* Background subtle glow */}
            <div className="absolute inset-0 bg-gradient-to-b from-green-900/10 via-black to-black pointer-events-none"></div>

            {/* Heading */}
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight relative z-10">
                {techData.heading}
            </h2>
            <p className="max-w-3xl mx-auto text-gray-300 mb-10 text-base md:text-lg relative z-10">
                {techData.description}
            </p>

            {/* Tabs */}
            <div className="flex flex-nowrap justify-start md:justify-center overflow-x-auto no-scrollbar gap-4 mb-12 relative z-10">
                {techData.categories.map((cat) => (
                    <button
                        key={cat.key}
                        onClick={() => setActiveCategory(cat)}
                        className={`px-6 py-2 rounded-full text-sm font-medium text-nowrap transition-all duration-300 cursor-pointer 
              ${activeCategory.key === cat.key
                                ? "bg-gradient-to-r from-green-600 to-green-400 text-white shadow-[0_0_15px_rgba(34,197,94,0.6)]"
                                : "bg-gray-800 hover:bg-gray-700 text-gray-300"
                            }`}
                    >
                        {cat.name}
                    </button>
                ))}
            </div>

            {/* Tech Icons Grid */}
            <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto relative z-10">
                {activeCategory.technologies.map((tech, index) => (
                    <motion.div
                        key={tech.name}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="relative w-28 h-28 md:w-32 md:h-32 flex flex-col items-center justify-center"
                    >
                        {/* Hexagon background */}
                        {/* <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 clip-hexagon shadow-md transition-all duration-300 group hover:from-green-800 hover:via-green-600 hover:to-green-800 hover:shadow-[0_0_20px_rgba(34,197,94,0.6)]"></div> */}
                        {/* <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 clip-hexagon shadow-md transition-all duration-300 group hover:from-green-400/20 hover:via-green-500/40 hover:to-green-400/20 hover:shadow-[0_0_30px_rgba(132,204,22,0.8)]"></div> */}
                        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 clip-hexagon shadow-md transition-all duration-300 group hover:from-gray-800 hover:via-green-400/30 hover:to-gray-800 hover:shadow-[0_0_18px_rgba(74,222,128,0.5)]"></div>


                        {/* Icon + Label */}
                        <div className="relative z-10 flex flex-col items-center justify-center group">
                            <div className="relative w-10 h-10 md:w-12 md:h-12 mb-2">
                                <Image
                                    src={tech.icon}
                                    alt={tech.name}
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <p className="text-sm text-gray-200 mt-1">{tech.name}</p>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Hexagon shape */}
            <style jsx>{`
        .clip-hexagon {
        //   clip-path: polygon(
        //     25% 5%,
        //     75% 5%,
        //     100% 50%,
        //     75% 95%,
        //     25% 95%,
        //     0% 50%
        //   );
        clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
        }
      `}</style>
        </section>
    );
};

export default LatestTechnologies;
