// "use client";
// import React from "react";
// import * as Icons from "lucide-react";
// import { motion } from "framer-motion";

// const AppDevelopmentProcess = ({ data }) => {
//     const steps = data;
//     if (!steps) return null;

//     return (
//         <section className="bg-white py-16 text-gray-800 flex flex-col items-center relative overflow-hidden">
//             {/* Heading */}
//             <h2
//                 className="text-center text-3xl md:text-5xl font-bold mb-6 text-red-600"
//                 style={{ textShadow: "0px 4px 8px rgba(0, 0, 0, 0.15)" }}
//             >
//                 App Development Process
//             </h2>

//             <p className="text-center max-w-2xl mb-12 text-base md:text-lg text-gray-600 px-4">
//                 Our systematic development process ensures seamless execution from concept to completion.
//             </p>

//             {/* Central Vertical Line */}
//             <div
//                 style={{
//                     background:
//                         "linear-gradient(180deg, rgba(239,68,68,0) 0%, #fecaca 25%, #ef4444 50%, #fecaca 75%, rgba(239,68,68,0) 100%)",
//                 }}
//                 className="absolute left-1/2 top-48 w-[2px] h-full transform -translate-x-1/2 z-0 hidden md:block"
//             ></div>

//             {/* Left Line for Mobile */}
//             <div className="absolute left-10 top-48 w-[2px] bg-red-500/80 h-full md:hidden"></div>

//             {/* Steps Timeline */}
//             <div className="relative w-full max-w-6xl sm:px-5 px-2">
//                 {steps.map((step, index) => {
//                     const Icon = Icons[step.icon];
//                     const isLeft = index % 2 === 0;

//                     return (
//                         <motion.div
//                             key={step.id}
//                             initial={{ opacity: 0, y: 40 }}
//                             whileInView={{ opacity: 1, y: 0 }}
//                             transition={{ duration: 0.5, delay: index * 0.1 }}
//                             viewport={{ once: false, amount: 0.5 }}
//                             className={`relative flex md:flex-row items-center my-10
//                                 ${isLeft ? "md:justify-end" : "md:justify-start"} justify-start`}
//                         >
//                             {/* Circle Connector */}
//                             <div
//                                 className="absolute md:left-1/2 left-10 transform md:-translate-x-1/2 w-8 h-8 bg-white border-[3px] border-red-500 rounded-full z-10"
//                                 style={{ boxShadow: "0 0 12px rgba(0,0,0,0.15)" }}
//                             ></div>

//                             {/* Step Card */}
//                             <div
//                                 className={`relative bg-white border border-red-200 rounded-xl shadow-md p-6 sm:p-8 w-[80%] md:w-[40%] flex items-start gap-4
//                                     before:content-[''] before:absolute before:top-[50%]
//                                     ${isLeft
//                                         ? "md:before:left-[-26%] md:before:border-b-2 md:before:border-dashed md:before:border-red-300 md:before:w-[26%]"
//                                         : "md:before:right-[-26%] md:before:border-b-2 md:before:border-dashed md:before:border-red-300 md:before:w-[26%]"
//                                     }
//                                 `}
//                             >
//                                 <div className="p-3 bg-red-500 rounded-full text-white flex items-center justify-center">
//                                     <Icon size={24} />
//                                 </div>
//                                 <div>
//                                     <p className="text-sm font-bold text-red-500 mb-1">
//                                         {step.step}
//                                     </p>
//                                     <h3 className="text-lg md:text-xl font-semibold text-gray-800">
//                                         {step.title}
//                                     </h3>
//                                 </div>
//                             </div>
//                         </motion.div>
//                     );
//                 })}
//             </div>
//         </section>
//     );
// };

// export default AppDevelopmentProcess;











"use client";
import React from "react";
import * as Icons from "lucide-react";
import { motion } from "framer-motion";

const AppDevelopmentProcess = ({ data }) => {
    const { title, description, steps} = data;
    if (!steps) return null;

    return (
        <section className="bg-blue-50 py-16 text-gray-800 flex flex-col items-center relative overflow-hidden">
            {/* Heading */}
            <h2
                className="text-center text-3xl md:text-5xl font-bold mb-6 text-red-600"
                style={{ textShadow: "0px 4px 8px rgba(0, 0, 0, 0.15)" }}
            >
                {title}
            </h2>

            <p className="text-center max-w-2xl mb-12 text-base md:text-lg text-gray-600 px-4">
                {description}
            </p>

            {/* Desktop vertical line */}
            <div
                style={{
                    background:
                        "linear-gradient(180deg, rgba(239,68,68,0) 0%, #fecaca 25%, #ef4444 50%, #fecaca 75%, rgba(239,68,68,0) 100%)",
                }}
                className="absolute left-1/2 top-48 w-[2px] h-full transform -translate-x-1/2 z-0 hidden md:block"
            ></div>

            {/* Mobile vertical line */}
            <div className="absolute left-6 top-48 w-[2px] bg-red-500/80 h-full md:hidden"></div>

            {/* Steps */}
            <div className="relative w-full max-w-6xl sm:px-5 px-2">
                {steps.map((step, index) => {
                    const Icon = Icons[step.icon];
                    const isLeft = index % 2 === 0;

                    return (
                        <motion.div
                            key={step.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: false, amount: 0.5 }}
                            className={`relative flex items-center my-10 md:flex-row ${isLeft ? "md:justify-end" : "md:justify-start"
                                } justify-start`}
                        >
                            {/* Circle */}
                            <div
                                className={`absolute md:left-1/2 -left-0 transform md:-translate-x-1/2 w-8 h-8 bg-white border-[3px] border-red-500 rounded-full z-10`}
                                style={{ boxShadow: "0 0 12px rgba(0,0,0,0.15)" }}
                            ></div>

                            {/* Step card */}
                            <div
                                className={`relative bg-white border border-red-200 rounded-xl shadow-md p-6 sm:p-8 w-[80%] md:w-[40%] flex items-start gap-4 before:content-[''] before:absolute before:top-[50%]
                  ${isLeft
                                        ? "md:before:left-[-26%] md:before:border-b-2 md:before:border-dashed md:before:border-red-300 md:before:w-[26%]"
                                        : "md:before:right-[-26%] md:before:border-b-2 md:before:border-dashed md:before:border-red-300 md:before:w-[26%]"
                                    }
                  md:ml-0 ml-12  /* pushes cards right on mobile */
                `}
                            >
                                <div className={`absolute top-12 max-md:-left-2.5 w-5 h-5 rotate-45 max-md:border-l max-md:border-b max-md:border-red-200 bg-white ${!isLeft ? 'md:-right-2.5 border-t border-r border-red-200' : 'md:-left-2.5 border-b border-l border-red-200'}`}></div>
                                <div className="p-3 bg-red-500 rounded-full text-white flex items-center justify-center">
                                    <Icon size={24} />
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-red-500 mb-1">
                                        {step.step}
                                    </p>
                                    <h3 className="text-lg md:text-xl font-semibold text-gray-800">
                                        {step.title}
                                    </h3>
                                    {step.description && (
                                        <p className="text-gray-600 text-sm mt-1 leading-relaxed">
                                            {step.description}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
};

export default AppDevelopmentProcess;









// "use client";
// import React from "react";
// import * as Icons from "lucide-react";
// import { motion } from "framer-motion";

// const AppDevelopmentProcess = ({ data }) => {
//     const { title, description, steps } = data;
//     if (!data) return null;

//     return (
//         <section className="bg-green-50 py-16 text-gray-800 flex flex-col items-center relative overflow-hidden">
//             {/* Heading */}
//             <h2
//                 className="text-center text-3xl md:text-5xl font-bold mb-6 text-green-600"
//                 style={{ textShadow: "0px 4px 8px rgba(0, 0, 0, 0.15)" }}
//             >
//                 {title}
//             </h2>

//             <p className="text-center max-w-2xl mb-12 text-base md:text-lg text-gray-600 px-4">
//                 {description}
//             </p>

//             {/* Desktop vertical line */}
//             <div
//                 style={{
//                     background:
//                         "linear-gradient(180deg, rgba(34,197,94,0) 0%, #bbf7d0 25%, #22c55e 50%, #bbf7d0 75%, rgba(34,197,94,0) 100%)",
//                 }}
//                 className="absolute left-1/2 top-48 w-[2px] h-full transform -translate-x-1/2 z-0 hidden md:block"
//             ></div>

//             {/* Mobile vertical line */}
//             <div className="absolute left-6 top-48 w-[2px] bg-green-500/80 h-full md:hidden"></div>

//             {/* Steps */}
//             <div className="relative w-full max-w-6xl sm:px-5 px-2">
//                 {steps.map((step, index) => {
//                     const Icon = Icons[step.icon];
//                     const isLeft = index % 2 === 0;

//                     return (
//                         <motion.div
//                             key={step.id}
//                             initial={{ opacity: 0, y: 40 }}
//                             whileInView={{ opacity: 1, y: 0 }}
//                             transition={{ duration: 0.5, delay: index * 0.1 }}
//                             viewport={{ once: true, amount: 0.1 }}
//                             className={`relative flex items-center my-10 md:flex-row ${isLeft ? "md:justify-end" : "md:justify-start"
//                                 } justify-start`}
//                         >
//                             {/* Circle */}
//                             <div
//                                 className={`absolute md:left-1/2 -left-0 transform md:-translate-x-1/2 w-8 h-8 bg-white border-[3px] border-green-500 rounded-full z-10`}
//                                 style={{ boxShadow: "0 0 12px rgba(0,0,0,0.15)" }}
//                             ></div>

//                             {/* Step card */}
//                             <div
//                                 className={`relative bg-white border border-green-200 rounded-xl shadow-md p-6 sm:p-8 w-[80%] md:w-[40%] flex items-start gap-4 before:content-[''] before:absolute before:top-[50%]
//                   ${isLeft
//                                         ? "md:before:left-[-26%] md:before:border-b-2 md:before:border-dashed md:before:border-green-300 md:before:w-[26%]"
//                                         : "md:before:right-[-26%] md:before:border-b-2 md:before:border-dashed md:before:border-green-300 md:before:w-[26%]"
//                                     }
//                   md:ml-0 ml-12
//                 `}
//                             >
//                                 <div className={`absolute top-12 max-md:-left-2.5 w-5 h-5 rotate-45 max-md:border-l max-md:border-b max-md:border-green-200 bg-white ${!isLeft ? 'md:-right-2.5 border-t border-r border-green-200' : 'md:-left-2.5 border-b border-l border-green-200'}`}></div>
//                                 <div className="p-3 bg-green-400 rounded-full text-white flex items-center justify-center">
//                                     <Icon size={24} />
//                                 </div>
//                                 <div>
//                                     <p className="text-sm font-bold text-green-500 mb-1">
//                                         {step.step}
//                                     </p>
//                                     <h3 className="text-lg md:text-xl font-semibold text-gray-800">
//                                         {step.title}
//                                     </h3>
//                                     {step.description && (
//                                         <p className="text-gray-600 text-sm mt-1 leading-relaxed">
//                                             {step.description}
//                                         </p>
//                                     )}
//                                 </div>
//                             </div>
//                         </motion.div>
//                     );
//                 })}
//             </div>
//         </section>
//     );
// };

// export default AppDevelopmentProcess;
