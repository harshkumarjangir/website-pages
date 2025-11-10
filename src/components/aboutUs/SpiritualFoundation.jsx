"use client";
import React from "react";
import { motion } from "framer-motion";
import { Flower2, Hand, Music2, Volume2 } from "lucide-react";

export default function SpiritualFoundation({ data }) {
    const spiritualSection = data;

    const iconMap = {
        Flower2: <Flower2 size={28} />,
        Candle: <Hand size={28} />,
        Music2: <Music2 size={28} />,
        Volume2: <Volume2 size={28} />,
    };

    return (
        <section className="py-16 bg-blue-50">
            <div className="max-w-6xl mx-auto text-center px-4">
                {/* Heading */}
                <h2 className="text-3xl font-bold text-[#1163FB] mb-2">
                    {spiritualSection.title}
                </h2>
                {/* <p className="text-gray-600 mb-10">{spiritualSection.subtitle[0]}</p> */}
                {/* <p className="text-gray-600 mb-10">{spiritualSection.subtitle[1]}</p> */}
                {/* <p className="text-gray-600 mb-10">{spiritualSection.subtitle[2]}</p> */}

                {spiritualSection.subtitle.map((text, index) => (
                    <p key={index} className="text-gray-600 mb-4">
                        {text}
                    </p>
                ))}

                {/* Included Items */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                    {spiritualSection.items
                        .map((item, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ y: -5 }}
                                className="bg-white rounded-2xl shadow-md p-6 text-center border border-blue-100"
                            >
                                <div className="flex justify-center mb-4">
                                    <div
                                        className="w-14 h-14 flex items-center justify-center rounded-full"
                                        style={{ backgroundColor: item.bgColor }}
                                    >
                                        {iconMap[item.icon]}
                                    </div>
                                </div>
                                <h3 className="text-lg font-semibold text-[#1163FB] mb-2">
                                    {item.title}
                                </h3>
                                <p className="text-gray-600 text-sm">{item.description}</p>
                            </motion.div>
                        ))}
                </div>

                <p className="text-gray-600 max-w-4xl mx-auto mb-10">{spiritualSection.description}</p>

            </div>
        </section>
    );
}
