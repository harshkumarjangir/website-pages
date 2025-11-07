"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Grid } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/grid";
import { motion } from "framer-motion";

import {
    ChevronLeft,
    ChevronRight,
    HeartPulse,
    Wallet,
    UtensilsCrossed,
    ShoppingCart,
    Car,
    Cloud,
    Plane,
    Music,
    BookOpen,
    Truck,
    Leaf,
    Dumbbell,
    Building,
    BatteryCharging,
    Signal,
    Store,
} from "lucide-react";
import Link from "next/link";

const iconMap = {
    HeartPulse,
    Wallet,
    UtensilsCrossed,
    ShoppingCart,
    Car,
    Cloud,
    Plane,
    Music,
    BookOpen,
    Truck,
    Leaf,
    Dumbbell,
    Building,
    BatteryCharging,
    Signal,
    Store,
};

const cardVariants = {
    initial: {},
    hover: {
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const iconVariants = {
    initial: { y: 0, opacity: 1 },
    hover: {
        y: -12,
        opacity: 1,
        transition: { duration: 0.4, ease: "easeOut" },
    },
};

const textVariants = {
    initial: { opacity: 0, y: 20 },
    hover: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const IndustriesSection = ({ data }) => {
    const { title, buttonText, buttonUrl, industries } = data;
    const [titleFirstPart, titleSecondPart] = title.split("|");
    const swiperRef = useRef(null);

    return (
        <section className="py-16 bg-black text-white">
            <div className="container mx-auto px-6 relative">
                {/* Header */}
                <div className="flex justify-between items-center mb-12">
                    <div className="flex flex-col md:flex-row items-start justify-between w-full gap-6">
                        <h2 className="text-3xl max-w-2xl">
                            {titleFirstPart}
                            <br />
                            <span className="font-bold">{titleSecondPart}</span>
                        </h2>
                        <Link
                            href={buttonUrl}
                            className="bg-transparent group hover:bg-[#1163FB] border-2 border-white hover:border-[#1163FB] text-white py-1.5 px-3 pl-5 rounded-lg transition duration-300 inline-flex items-center"
                        >
                            {buttonText}
                            <style>
                                {`
                  @keyframes slide-horizontal {
                    0%, 100% { transform: translateX(0); }
                    50% { transform: translateX(8px); }
                  }
                  .group:hover .chevron-animate {
                    animation: slide-horizontal 0.7s infinite ease-in-out;
                  }
                `}
                            </style>
                            <ChevronRight size={22} className="inline-block ml-2 chevron-animate" />
                        </Link>
                    </div>
                </div>

                {/* Swiper */}
                <div className="relative">
                    <Swiper
                        modules={[Navigation, Grid]}
                        spaceBetween={24}
                        slidesPerView={1}
                        grid={{ rows: 2, fill: "row" }} // ✅ One row always on mobile
                        breakpoints={{
                            640: { slidesPerView: 2, grid: { rows: 2 } },
                            1024: { slidesPerView: 4, grid: { rows: 2 } },
                        }}
                        onSwiper={(swiper) => (swiperRef.current = swiper)}
                        className="pb-12"
                    >
                        {industries.map((item) => {
                            const Icon = iconMap[item.icon];
                            return (
                                // <SwiperSlide key={item.id}>
                                //     <motion.div
                                //         className={`group p-6 rounded-xl border border-[#343434] h-[320px] flex justify-center items-center cursor-pointer overflow-hidden text-center transition duration-300 bg-[#1163FB] md:bg-black md:hover:bg-[#1163FB]`}
                                //         variants={cardVariants}
                                //         initial="initial"
                                //         whileHover="hover"
                                //     >
                                //         <div className="flex flex-col items-center">
                                //             {Icon && (
                                //                 <motion.div variants={iconVariants}>
                                //                     <Icon className="w-10 h-10 mb-3" />
                                //                 </motion.div>
                                //             )}
                                //             <h3 className="font-semibold text-lg mb-2">{item.title}</h3>

                                //             {/* Always visible on mobile, hover on desktop */}
                                //             <motion.p
                                //                 variants={textVariants}
                                //                 className="text-sm text-white text-center" /* Always show on mobile */
                                //                 initial={{ opacity: 1, y: 0 }} // force visible on mobile
                                //                 animate={{ opacity: 1, y: 0 }} // override hover on mobile
                                //             >
                                //                 {item.description}
                                //             </motion.p>

                                //             <motion.p
                                //                 variants={textVariants}
                                //                 className="text-sm text-white text-center hidden md:hidden"  /* Only for desktop hover */

                                //             >
                                //                 {item.description}
                                //             </motion.p>



                                //         </div>
                                //     </motion.div>
                                // </SwiperSlide>

                                <SwiperSlide key={item.id}>
                                    <motion.div
                                        className={`group p-6 rounded-xl border border-white/20 h-[320px] flex justify-center items-center cursor-pointer overflow-hidden text-center transition duration-300 bg-white/10 backdrop-blur-md shadow-lg md:bg-white/10 md:hover:bg-[#1163FB]/60`}
                                        variants={cardVariants}
                                        initial="initial"
                                        whileHover="hover"
                                        style={{
                                            boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
                                            border: "1px solid rgba(255,255,255,0.18)",
                                        }}
                                    >
                                        <div className="flex flex-col items-center">
                                            {Icon && (
                                                <motion.div variants={iconVariants}>
                                                    <Icon className="w-10 h-10 mb-3 text-white" />
                                                </motion.div>
                                            )}
                                            <h3 className="font-semibold text-lg mb-2 text-white">{item.title}</h3>
                                            <motion.p
                                                variants={textVariants}
                                                className="text-sm text-white text-center"
                                                initial={{ opacity: 1, y: 0 }}
                                                animate={{ opacity: 1, y: 0 }}
                                            >
                                                {item.description}
                                            </motion.p>
                                        </div>
                                    </motion.div>
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>

                    {/* Nav Buttons */}
                    <div className="flex justify-center gap-4 mt-6">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => swiperRef.current?.slidePrev()}
                            className="bg-transparent hover:bg-[#116BFB] text-white p-3 rounded-full shadow border border-[#343434] cursor-pointer"
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => swiperRef.current?.slideNext()}
                            className="bg-transparent hover:bg-[#116BFB] text-white p-3 rounded-full shadow border border-[#343434] cursor-pointer"
                        >
                            <ChevronRight className="w-5 h-5" />
                        </motion.button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default IndustriesSection;

















