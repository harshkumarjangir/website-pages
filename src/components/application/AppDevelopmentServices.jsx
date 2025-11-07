"use client";
import React from "react";
import {
    Utensils,
    Headphones,
    Smartphone,
    Apple,
    Wrench,
    Palette,
} from "lucide-react";
import { motion } from "framer-motion";

const ICONS = {
    Utensils,
    Headphones,
    Smartphone,
    Apple,
    Wrench,
    Palette,
};

const AppDevelopmentServices = ({ data }) => {
    const { title, services } = data;
    if (!data) return null;

    return (
        <section className="py-16 px-6 md:px-12 lg:px-20 bg-gradient-to-b from-green-50 to-white">
            {/* Heading */}
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-2xl md:text-3xl font-bold text-center mb-10 text-green-700"
            >
                {title}
            </motion.h2>

            {/* Services Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service, i) => {
                    const Icon = ICONS[service.icon];
                    return (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ y: -8 }}
                            transition={{
                                duration: 0.5,
                                delay: i * 0.1,
                                type: "spring",
                                stiffness: 100,
                            }}
                            viewport={{ once: true }}
                            className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center border border-green-100 hover:shadow-lg transition-all duration-300"
                        >
                            <div className="mb-4 bg-green-100 p-3 rounded-full">
                                <Icon className="w-8 h-8 text-green-600" />
                            </div>
                            <h3 className="font-semibold text-lg mb-2 text-green-800">
                                {service.title}
                            </h3>
                            <p className="text-gray-600 text-sm">{service.desc}</p>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}
export default AppDevelopmentServices;