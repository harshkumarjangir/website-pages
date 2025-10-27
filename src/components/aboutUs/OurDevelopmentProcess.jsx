"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import * as LucideIcons from "lucide-react";

export default function OurDevelopmentProcess({data}) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const { title, description, steps } = data;

    return (
        <section className="py-20 bg-gray-50 text-gray-800" id="development-process">
            <div className="max-w-6xl mx-auto px-6 text-center">
                {/* Section Header */}
                <motion.h2
                    className="text-4xl md:text-5xl font-bold mb-6"
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    {title}
                </motion.h2>

                <motion.p
                    className="text-gray-600 max-w-4xl mx-auto mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.2, duration: 0.6 }}
                >
                    {description}
                </motion.p>

                {/* Steps */}
                <div
                    ref={ref}
                    className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-10"
                >
                    {steps.map((step, index) => {
                        const Icon = LucideIcons[step.icon];
                        return (
                            <motion.div
                                key={index}
                                className="relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 group"
                                initial={{ opacity: 0, y: 50 }}
                                animate={
                                    isInView
                                        ? { opacity: 1, y: 0 }
                                        : {}
                                }
                                transition={{
                                    delay: index * 0.15,
                                    duration: 0.6,
                                    type: "spring",
                                }}
                            >
                                {/* Icon */}
                                <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                                    {Icon && <Icon size={30} />}
                                </div>

                                {/* Step Title */}
                                <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-600 transition">
                                    {step.title}
                                </h3>

                                {/* Step Description */}
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    {step.description}
                                </p>

                                {/* Hover Border Animation */}
                                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-blue-500 transition-all duration-300"></div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
