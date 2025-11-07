// "use client";

// import React, { useRef, useState } from "react";
// import Image from "next/image";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Navigation } from "swiper/modules";
// import { motion } from "framer-motion";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// import "swiper/css";
// import "swiper/css/navigation";

// export default function MobileMockUp({ data }) {
//     const { title, screens } = data;
//     const swiperRef = useRef(null);
//     const [activeIndex, setActiveIndex] = useState(0);

//     return (
//         <section className="py-16 bg-black text-white relative overflow-hidden">
//             {/* Title */}
//             <h2 className="text-3xl md:text-[40px] font-medium mb-16 text-center">
//                 {title}
//             </h2>

//             {/* Swiper Section */}
//             <div className="relative px-6 md:px-12">
//                 <Swiper
//                     modules={[Autoplay, Navigation]}
//                     centeredSlides={true}
//                     spaceBetween={30}
//                     slidesPerView={4.2}
//                     loop={true}
//                     autoplay={{
//                         delay: 2500,
//                         disableOnInteraction: false,
//                         pauseOnMouseEnter: true, // <-- stops autoplay on hover
//                     }}
//                     onSwiper={(swiper) => (swiperRef.current = swiper)}
//                     onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
//                     className="pb-12"
//                     breakpoints={{
//                         0: { slidesPerView: 1.1, centeredSlides: true },
//                         640: { slidesPerView: 1.4, centeredSlides: true },
//                         1024: { slidesPerView: 4.5, centeredSlides: true },
//                     }}
//                 >
//                     {screens.map((screen, index) => {
//                         // Compute distance from active slide (accounting for loop)
//                         const total = screens.length;
//                         const leftIndex = (activeIndex - 1 + total) % total;
//                         const rightIndex = (activeIndex + 1) % total;

//                         let scale = "scale-75 opacity-40"; // Default (far slides)
//                         if (index === activeIndex) scale = "scale-100 opacity-100";
//                         else if (index === leftIndex || index === rightIndex)
//                             scale = "scale-85 opacity-60";

//                         return (
//                             <SwiperSlide key={index} className="flex justify-center">
//                                 <motion.div
//                                     transition={{ duration: 0.4 }}
//                                     className={`relative flex flex-col items-center justify-center transition-all duration-300 ${scale}`}
//                                 >
//                                     {/* Realistic iPhone Mockup Frame */}
//                                     <div className="relative w-[260px] h-[520px] flex justify-center items-center">
//                                         {/* Outer frame */}
//                                         <div className="relative w-full h-full bg-gradient-to-b from-gray-900 to-black rounded-[3rem] p-[10px] shadow-[0_0_25px_rgba(0,0,0,0.6)] border border-gray-800 overflow-hidden">
//                                             {/* Inner glass effect */}
//                                             <div className="absolute inset-[4px] rounded-[2.7rem] bg-gradient-to-b from-gray-800/60 to-gray-900/80 z-0" />

//                                             {/* Notch */}
//                                             <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120px] h-[26px] bg-black rounded-b-2xl z-20"></div>

//                                             {/* Side buttons */}
//                                             <div className="absolute left-0 top-[90px] w-[3px] h-[40px] bg-gray-700 rounded-r-md"></div>
//                                             <div className="absolute left-0 top-[150px] w-[3px] h-[60px] bg-gray-700 rounded-r-md"></div>
//                                             <div className="absolute right-0 top-[120px] w-[3px] h-[60px] bg-gray-700 rounded-l-md"></div>

//                                             {/* Image (screen) */}
//                                             <div className="relative z-10 w-full h-full overflow-hidden rounded-[2.5rem]">
//                                                 <Image
//                                                     src={screen.img}
//                                                     alt={screen.caption}
//                                                     fill
//                                                     className="object-cover rounded-[2.5rem]"
//                                                 />
//                                                 <div className="absolute inset-0 bg-black/80 text-white w-full h-full z-50 p-4">
//                                                     {screen.description}
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>

//                                     {/* Caption */}
//                                     <p className="mt-4 text-gray-400 text-sm text-center w-[260px]">
//                                         {screen.caption}
//                                     </p>
//                                 </motion.div>
//                             </SwiperSlide>
//                         );
//                     })}
//                 </Swiper>

//                 {/* Navigation Buttons */}
//                 <div className="flex justify-center gap-4 mt-8">
//                     <motion.button
//                         whileHover={{ scale: 1.05 }}
//                         whileTap={{ scale: 0.95 }}
//                         onClick={() => swiperRef.current?.slidePrev()}
//                         className="bg-transparent hover:bg-[#116BFB] text-white p-3 rounded-full shadow border border-[#343434] cursor-pointer"
//                     >
//                         <ChevronLeft className="w-5 h-5" />
//                     </motion.button>
//                     <motion.button
//                         whileHover={{ scale: 1.05 }}
//                         whileTap={{ scale: 0.95 }}
//                         onClick={() => swiperRef.current?.slideNext()}
//                         className="bg-transparent hover:bg-[#116BFB] text-white p-3 rounded-full shadow border border-[#343434] cursor-pointer"
//                     >
//                         <ChevronRight className="w-5 h-5" />
//                     </motion.button>
//                 </div>
//             </div>
//         </section>
//     );
// }



"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Info } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";

export default function MobileMockUp({ data }) {
    const { title, screens, description } = data;
    const swiperRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [openDescriptionIndex, setOpenDescriptionIndex] = useState(null);

    const toggleDescription = (index) => {
        setOpenDescriptionIndex(openDescriptionIndex === index ? null : index);
    };

    return (
        <section className="py-16 bg-black text-white relative overflow-hidden">
            <h2 className="text-3xl md:text-[40px] font-medium text-center">
                {title}
            </h2>

            <p className="max-w-3xl mx-auto my-5 text-gray-400">{description}</p>

            <div className="relative px-6 md:px-12"
                onClick={() => setOpenDescriptionIndex(null)} // Close overlay if click outside
            >

                <Swiper
                    modules={[Autoplay, Navigation]}
                    centeredSlides={true}
                    spaceBetween={30}
                    slidesPerView={4.2}
                    loop={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                    }}
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                    onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                    className="pb-12"
                    breakpoints={{
                        0: { slidesPerView: 1.1, centeredSlides: true },
                        640: { slidesPerView: 1.4, centeredSlides: true },
                        1024: { slidesPerView: 4.5, centeredSlides: true },
                    }}
                >
                    {screens.map((screen, index) => {
                        const total = screens.length;
                        const leftIndex = (activeIndex - 1 + total) % total;
                        const rightIndex = (activeIndex + 1) % total;

                        let scale = "scale-75 opacity-40";
                        if (index === activeIndex) scale = "scale-100 opacity-100";
                        else if (index === leftIndex || index === rightIndex)
                            scale = "scale-85 opacity-60";

                        const isDescriptionOpen = openDescriptionIndex === index;

                        return (
                            <SwiperSlide key={index} className="flex justify-center">
                                <motion.div
                                    transition={{ duration: 0.4 }}
                                    className={`relative flex flex-col items-center justify-center transition-all duration-300 ${scale}`}
                                >
                                    <div className="relative w-[260px] h-[520px] flex justify-center items-center">
                                        <div className="relative w-full h-full bg-gradient-to-b from-gray-900 to-black rounded-[3rem] p-[10px] shadow-[0_0_25px_rgba(0,0,0,0.6)] border border-gray-800 overflow-hidden">
                                            <div className="absolute inset-[4px] rounded-[2.7rem] bg-gradient-to-b from-gray-800/60 to-gray-900/80 z-0" />

                                            {/* Notch */}
                                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120px] h-[26px] bg-black rounded-b-2xl z-20"></div>

                                            {/* Side buttons */}
                                            <div className="absolute left-0 top-[90px] w-[3px] h-[40px] bg-gray-700 rounded-r-md"></div>
                                            <div className="absolute left-0 top-[150px] w-[3px] h-[60px] bg-gray-700 rounded-r-md"></div>
                                            <div className="absolute right-0 top-[120px] w-[3px] h-[60px] bg-gray-700 rounded-l-md"></div>

                                            {/* Image (screen) */}
                                            <div className="relative z-10 w-full h-full overflow-hidden rounded-[2.5rem]">
                                                <Image
                                                    src={screen.img}
                                                    alt={screen.caption}
                                                    fill
                                                    className="object-cover rounded-[2.5rem]"
                                                />

                                                {/* Info Icon */}
                                                <button
                                                    onClick={(e) => {
                                                        e.stopPropagation(); // Prevent closing immediately
                                                        toggleDescription(index);
                                                    }}
                                                    className="absolute bottom-2 right-2 z-50 bg-black/50 p-2 rounded-full hover:bg-black/70 transition cursor-pointer"
                                                >
                                                    <Info className="w-5 h-5 text-white" />
                                                </button>

                                                {/* Description Overlay */}
                                                {isDescriptionOpen && (
                                                    <div
                                                        onClick={() => setOpenDescriptionIndex(null)}
                                                        className="absolute inset-0 bg-black/80 text-white text-justify z-40 overflow-y-auto no-scrollbar flex items-center justify-center rounded-[2.5rem] cursor-pointer"
                                                    >
                                                        <p className="h-[95%] p-4">
                                                            {screen.description}
                                                        </p>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Caption */}
                                    <p className="mt-4 text-gray-400 text-sm text-center w-[260px]">
                                        {screen.caption}
                                    </p>
                                </motion.div>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>

                {/* Navigation Buttons */}
                <div className="flex justify-center gap-4 mt-8">
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
        </section>
    );
}







// Pause on Hover complete slide

// "use client";

// import React, { useRef, useState } from "react";
// import Image from "next/image";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Navigation } from "swiper/modules";
// import { motion } from "framer-motion";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// import "swiper/css";
// import "swiper/css/navigation";

// export default function MobileMockUp({ data }) {
//     const { title, screens } = data;
//     const swiperRef = useRef(null);
//     const [activeIndex, setActiveIndex] = useState(0);

//     return (
//         <section className="py-16 bg-black text-white relative overflow-hidden">
//             {/* Title */}
//             <h2 className="text-3xl md:text-[40px] font-medium mb-16 text-center">
//                 {title}
//             </h2>

//             {/* Swiper Section */}
//             <div
//                 className="relative px-6 md:px-12"
//                 onMouseEnter={() => swiperRef.current?.autoplay.stop()}
//                 onMouseLeave={() => swiperRef.current?.autoplay.start()}
//             >
//                 <Swiper
//                     modules={[Autoplay, Navigation]}
//                     centeredSlides={true}
//                     spaceBetween={30}
//                     slidesPerView={4.2}
//                     loop={true}
//                     autoplay={{
//                         delay: 2500,
//                         disableOnInteraction: false,
//                     }}
//                     onSwiper={(swiper) => (swiperRef.current = swiper)}
//                     onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
//                     className="pb-12"
//                     breakpoints={{
//                         0: { slidesPerView: 1.1, centeredSlides: true },
//                         640: { slidesPerView: 1.4, centeredSlides: true },
//                         1024: { slidesPerView: 4.5, centeredSlides: true },
//                     }}
//                 >
//                     {screens.map((screen, index) => {
//                         const total = screens.length;
//                         const leftIndex = (activeIndex - 1 + total) % total;
//                         const rightIndex = (activeIndex + 1) % total;

//                         let scale = "scale-75 opacity-40"; // Default (far slides)
//                         if (index === activeIndex) scale = "scale-100 opacity-100";
//                         else if (index === leftIndex || index === rightIndex)
//                             scale = "scale-85 opacity-60";

//                         return (
//                             <SwiperSlide key={index} className="flex justify-center">
//                                 <motion.div
//                                     transition={{ duration: 0.4 }}
//                                     className={`relative flex flex-col items-center justify-center transition-all duration-300 ${scale}`}
//                                 >
//                                     {/* Realistic iPhone Mockup Frame */}
//                                     <div className="relative w-[260px] h-[520px] flex justify-center items-center">
//                                         {/* Outer frame */}
//                                         <div className="relative w-full h-full bg-gradient-to-b from-gray-900 to-black rounded-[3rem] p-[10px] shadow-[0_0_25px_rgba(0,0,0,0.6)] border border-gray-800 overflow-hidden">
//                                             {/* Inner glass effect */}
//                                             <div className="absolute inset-[4px] rounded-[2.7rem] bg-gradient-to-b from-gray-800/60 to-gray-900/80 z-0" />

//                                             {/* Notch */}
//                                             <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120px] h-[26px] bg-black rounded-b-2xl z-20"></div>

//                                             {/* Side buttons */}
//                                             <div className="absolute left-0 top-[90px] w-[3px] h-[40px] bg-gray-700 rounded-r-md"></div>
//                                             <div className="absolute left-0 top-[150px] w-[3px] h-[60px] bg-gray-700 rounded-r-md"></div>
//                                             <div className="absolute right-0 top-[120px] w-[3px] h-[60px] bg-gray-700 rounded-l-md"></div>

//                                             {/* Image (screen) */}
//                                             <div className="relative z-10 w-full h-full overflow-hidden rounded-[2.5rem]">
//                                                 <Image
//                                                     src={screen.img}
//                                                     alt={screen.caption}
//                                                     fill
//                                                     className="object-cover rounded-[2.5rem]"
//                                                 />
//                                                 <div className="absolute bottom-0 inset-x-0 bg-black/80 text-white w-full h-40 z-50 p-2">
//                                                     Build a powerful restaurant platform development solution like go4food with seamless table reservations, real-time availability, and an easy-to-use booking system.
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>

//                                     {/* Caption */}
//                                     <p className="mt-4 text-gray-400 text-sm text-center w-[260px]">
//                                         {screen.caption}
//                                     </p>
//                                 </motion.div>
//                             </SwiperSlide>
//                         );
//                     })}
//                 </Swiper>

//                 {/* Navigation Buttons */}
//                 <div className="flex justify-center gap-4 mt-8">
//                     <motion.button
//                         whileHover={{ scale: 1.05 }}
//                         whileTap={{ scale: 0.95 }}
//                         onClick={() => swiperRef.current?.slidePrev()}
//                         className="bg-transparent hover:bg-[#116BFB] text-white p-3 rounded-full shadow border border-[#343434] cursor-pointer"
//                     >
//                         <ChevronLeft className="w-5 h-5" />
//                     </motion.button>
//                     <motion.button
//                         whileHover={{ scale: 1.05 }}
//                         whileTap={{ scale: 0.95 }}
//                         onClick={() => swiperRef.current?.slideNext()}
//                         className="bg-transparent hover:bg-[#116BFB] text-white p-3 rounded-full shadow border border-[#343434] cursor-pointer"
//                     >
//                         <ChevronRight className="w-5 h-5" />
//                     </motion.button>
//                 </div>
//             </div>
//         </section>
//     );
// }





// "use client";

// import React, { useRef, useState } from "react";
// import Image from "next/image";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Navigation } from "swiper/modules";
// import { motion } from "framer-motion";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// import "swiper/css";
// import "swiper/css/navigation";

// export default function MobileMockUp({ data }) {
//     const { title, screens } = data;
//     const swiperRef = useRef(null);
//     const [activeIndex, setActiveIndex] = useState(0);

//     return (
//         <section className="py-16 bg-black text-white relative overflow-hidden">
//             <h2 className="text-3xl md:text-[40px] font-medium mb-16 text-center">
//                 {title}
//             </h2>

//             <div className="relative px-6 md:px-12">
//                 <Swiper
//                     modules={[Autoplay, Navigation]}
//                     centeredSlides={true}
//                     spaceBetween={30}
//                     slidesPerView={4.2}
//                     loop={true}
//                     autoplay={{
//                         delay: 2500,
//                         disableOnInteraction: false,
//                     }}
//                     onSwiper={(swiper) => (swiperRef.current = swiper)}
//                     onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
//                     className="pb-12"
//                     breakpoints={{
//                         0: { slidesPerView: 1.1, centeredSlides: true },
//                         640: { slidesPerView: 1.4, centeredSlides: true },
//                         1024: { slidesPerView: 4.5, centeredSlides: true },
//                     }}
//                 >
//                     {screens.map((screen, index) => {
//                         const total = screens.length;
//                         const leftIndex = (activeIndex - 1 + total) % total;
//                         const rightIndex = (activeIndex + 1) % total;

//                         let scale = "scale-75 opacity-40";
//                         if (index === activeIndex) scale = "scale-100 opacity-100";
//                         else if (index === leftIndex || index === rightIndex)
//                             scale = "scale-85 opacity-60";

//                         return (
//                             <SwiperSlide key={index} className="flex justify-center">
//                                 {/* Only pause autoplay when this slide is hovered */}
//                                 <div
//                                     onMouseEnter={() => swiperRef.current?.autoplay.stop()}
//                                     onMouseLeave={() => swiperRef.current?.autoplay.start()}
//                                 >
//                                     <motion.div
//                                         transition={{ duration: 0.4 }}
//                                         className={`relative flex flex-col items-center justify-center transition-all duration-300 ${scale}`}
//                                     >
//                                         <div className="relative w-[260px] h-[520px] flex justify-center items-center">
//                                             <div className="relative w-full h-full bg-gradient-to-b from-gray-900 to-black rounded-[3rem] p-[10px] shadow-[0_0_25px_rgba(0,0,0,0.6)] border border-gray-800 overflow-hidden">
//                                                 <div className="absolute inset-[4px] rounded-[2.7rem] bg-gradient-to-b from-gray-800/60 to-gray-900/80 z-0" />
//                                                 <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120px] h-[26px] bg-black rounded-b-2xl z-20"></div>
//                                                 <div className="absolute left-0 top-[90px] w-[3px] h-[40px] bg-gray-700 rounded-r-md"></div>
//                                                 <div className="absolute left-0 top-[150px] w-[3px] h-[60px] bg-gray-700 rounded-r-md"></div>
//                                                 <div className="absolute right-0 top-[120px] w-[3px] h-[60px] bg-gray-700 rounded-l-md"></div>
//                                                 <div className="relative z-10 w-full h-full overflow-hidden rounded-[2.5rem]">
//                                                     <Image
//                                                         src={screen.img}
//                                                         alt={screen.caption}
//                                                         fill
//                                                         className="object-cover rounded-[2.5rem]"
//                                                     />
//                                                     <div className="absolute bottom-0 inset-x-0 bg-black/80 text-white w-full h-40 z-50 p-2">
//                                                         Build a powerful restaurant platform development solution like go4food with seamless table reservations, real-time availability, and an easy-to-use booking system.
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                         <p className="mt-4 text-gray-400 text-sm text-center w-[260px]">
//                                             {screen.caption}
//                                         </p>
//                                     </motion.div>
//                                 </div>
//                             </SwiperSlide>
//                         );
//                     })}
//                 </Swiper>

//                 <div className="flex justify-center gap-4 mt-8">
//                     <motion.button
//                         whileHover={{ scale: 1.05 }}
//                         whileTap={{ scale: 0.95 }}
//                         onClick={() => swiperRef.current?.slidePrev()}
//                         className="bg-transparent hover:bg-[#116BFB] text-white p-3 rounded-full shadow border border-[#343434] cursor-pointer"
//                     >
//                         <ChevronLeft className="w-5 h-5" />
//                     </motion.button>
//                     <motion.button
//                         whileHover={{ scale: 1.05 }}
//                         whileTap={{ scale: 0.95 }}
//                         onClick={() => swiperRef.current?.slideNext()}
//                         className="bg-transparent hover:bg-[#116BFB] text-white p-3 rounded-full shadow border border-[#343434] cursor-pointer"
//                     >
//                         <ChevronRight className="w-5 h-5" />
//                     </motion.button>
//                 </div>
//             </div>
//         </section>
//     );
// }
