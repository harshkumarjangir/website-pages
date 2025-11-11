"use client";
import React from "react";
import { motion } from "framer-motion";

const CultureOfMetablock = ({ data }) => {
    const culture = data;

    if (!culture) return null;

    // Animation Variants
    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.25, // Delay between each card animation
            },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, x: 80 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.6, ease: "easeOut" },
        },
    };

    return (
        <section className="w-full bg-gradient-to-b from-[#F0F4FF] to-white py-16 px-6 flex flex-col items-center text-center overflow-hidden">
            {/* Heading */}
            <motion.h2
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-3xl md:text-5xl font-bold text-[#0066FF] mb-6"
                style={{ textShadow: "0 2px 8px rgba(0,0,0,0.1)" }}
            >
                {culture.heading}
            </motion.h2>

            {/* Description */}
            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                viewport={{ once: true }}
                className="max-w-3xl text-gray-700 mb-12 text-base md:text-lg leading-relaxed"
            >
                {culture.description}
            </motion.p>

            {/* Four Pillars - Animated from Right to Left */}
            <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
            >
                {culture.pillars.map((pillar, index) => (
                    <motion.div
                        key={index}
                        variants={cardVariants}
                        className="bg-white shadow-md border border-gray-200 rounded-2xl p-6 hover:shadow-xl transition-all duration-300"
                    >
                        <h3 className="text-xl font-semibold text-[#0066FF] mb-3">
                            {pillar.title}
                        </h3>
                        <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                            {pillar.text}
                        </p>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default CultureOfMetablock;








// "use client";
// import React from "react";
// import { motion } from "framer-motion";

// const CultureOfMetablock = ({ data }) => {
//     const culture = data;

//     if (!culture) return null;

//     return (
//         <section className="w-full bg-gradient-to-b from-[#F0F4FF] to-white py-16 px-6 flex flex-col items-center text-center">
//             {/* Heading */}
//             <motion.h2
//                 initial={{ opacity: 0, y: -30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6 }}
//                 className="text-3xl md:text-5xl font-bold text-[#0066FF] mb-6"
//                 style={{ textShadow: "0 2px 8px rgba(0,0,0,0.1)" }}
//             >
//                 {culture.heading}
//             </motion.h2>

//             {/* Description */}
//             <motion.p
//                 initial={{ opacity: 0 }}
//                 whileInView={{ opacity: 1 }}
//                 transition={{ delay: 0.3, duration: 0.8 }}
//                 className="max-w-3xl text-gray-700 mb-12 text-base md:text-lg leading-relaxed"
//             >
//                 {culture.description}
//             </motion.p>

//             {/* Four Pillars */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl">
//                 {culture.pillars.map((pillar, index) => (
//                     <motion.div
//                         key={index}
//                         initial={{ opacity: 0, y: 30 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.6, delay: index * 0.15 }}
//                         className="bg-white shadow-md border border-gray-200 rounded-2xl p-6 hover:shadow-xl transition-all duration-300"
//                     >
//                         <h3 className="text-xl font-semibold text-[#0066FF] mb-3">
//                             {pillar.title}
//                         </h3>
//                         <p className="text-gray-600 text-sm md:text-base leading-relaxed">
//                             {pillar.text}
//                         </p>
//                     </motion.div>
//                 ))}
//             </div>
//         </section>
//     );
// };

// export default CultureOfMetablock;







// "use client";
// import React from "react";
// import Image from "next/image";

// const CultureOfMetablock = ({ data }) => {
//     const whyChooseUs = data;

//     if (!whyChooseUs) return null;
//     const { heading, description, steps, processImage } = whyChooseUs;

//     return (
//         <section className="bg-[#0066FF] py-12 text-white flex flex-col items-center relative overflow-x-auto">
//             {/* Heading */}
//             <h1
//                 style={{
//                     textShadow: "0px 4px 8px rgba(0, 0, 0, 0.5)",
//                 }}
//                 className="text-center text-3xl md:text-5xl font-bold mb-6"
//             >
//                 {heading}
//             </h1>

//             {/* Description */}
//             <p className="text-center max-w-3xl mb-12 text-base md:text-lg text-white/90 px-4">
//                 {description}
//             </p>

//             {/* Center process icon */}
//             <div className="text-center sticky top-[10%] z-10 mb-8">
//                 <Image
//                     src={processImage}
//                     className="object-cover aspect-square rounded-full mx-auto"
//                     alt={heading}
//                     title={heading}
//                     width={80}
//                     height={80}
//                 />
//             </div>

//             {/* Horizontal Timeline */}
//             <div className="relative w-full flex items-center justify-center px-10 max-w-7xl">
//                 {/* Horizontal line */}
//                 <div
//                     style={{
//                         background:
//                             "linear-gradient(90deg, rgba(86, 27, 126, 0) 0%, #EDD4FE 31.25%, #FFFFFF 50.52%, #F2DEFF 80.73%, rgba(86, 27, 126, 0) 100%)",
//                     }}
//                     className="absolute top-1/2 transform -translate-y-1/2 h-[2px] w-full"
//                 ></div>

//                 {/* Steps horizontally */}
//                 <div className="flex flex-nowrap gap-12 md:gap-20 relative z-10 overflow-x-auto pb-4">
//                     {steps?.map((step, index) => (
//                         <div key={step.number} className="relative flex flex-col items-center min-w-[200px] md:min-w-[250px]">
//                             {/* Dot connector */}
//                             <div
//                                 style={{
//                                     boxShadow: "0px 0px 15px #000000",
//                                     zIndex: 2,
//                                     border: "2px solid #FFFFFF",
//                                 }}
//                                 className="w-8 h-8 bg-[#0066FF] rounded-full mb-4"
//                             ></div>

//                             {/* Step Card */}
//                             <div className="bg-white/10 border border-white/10 rounded-lg p-4 shadow-lg text-center w-full">
//                                 <p
//                                     className="text-[50px] md:text-[70px] font-bold text-transparent bg-gradient-to-b from-white/90 to-white/0 bg-clip-text leading-[60px] md:leading-[82px] mb-0"
//                                     style={{ fontFamily: "kenyan-coffee-rg" }}
//                                 >
//                                     {step.number}
//                                 </p>
//                                 <p className="text-base md:text-lg font-semibold mt-2">{step.title}</p>
//                                 <p className="text-xs md:text-sm mt-2">{step.description}</p>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default CultureOfMetablock;
