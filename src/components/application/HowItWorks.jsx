"use client";
import React from "react";
import Image from "next/image";

const HowItWorks = ({ data }) => {
    const howItWorks = data;
    if (!howItWorks) return null;
    const { heading, description, steps, processImage } = howItWorks;

    return (
        <div className="bg-green-700 py-10 text-white flex flex-col items-center relative">
            {/* Heading */}
            <h2
                style={{
                    textShadow: "0px 4px 8px rgba(0, 0, 0, 0.5)",
                }}
                className="text-center text-3xl md:text-5xl font-bold mb-6"
            >
                {heading}
            </h2>

            {/* Description */}
            <p className="text-center max-w-3xl mb-12 text-base md:text-lg text-white/90 px-4">
                {description}
            </p>

            {/* Sticky Process Image */}
            <div className="scrlImg text-center sticky top-[10%] left-0 right-0 z-10">
                <Image
                    src={processImage}
                    className="object-cover aspect-square rounded-full"
                    alt={heading}
                    title={heading}
                    width={80}
                    height={80}
                />
            </div>

            <div className="relative w-full max-w-7xl sm:px-5 px-2">
                {/* Vertical Line */}
                <div
                    style={{
                        background:
                            "linear-gradient(180deg, rgba(22,163,74,0) 0%, #BBF7D0 25%, #22C55E 50%, #BBF7D0 75%, rgba(22,163,74,0) 100%)",
                    }}
                    className="absolute left-1/2 transform -translate-x-1/2 w-[2px] h-full"
                ></div>

                {/* Steps */}
                {steps?.map((step, index) => (
                    <div
                        key={step.number}
                        className={`flex ${index % 2 === 0 ? "justify-end" : "justify-start"} items-center my-6 relative`}
                    >
                        {/* Connector Dot */}
                        <div
                            style={{
                                boxShadow: "0px 0px 15px #000000",
                                zIndex: "1",
                                border: "2px solid #BBF7D0",
                            }}
                            className="w-8 h-8 bg-green-600 rounded-full absolute left-1/2 transform -translate-x-1/2"
                        ></div>

                        {/* Step Card */}
                        <div
                            className={`bg-white/10 border border-green-300/20 rounded-lg px-2 pb-3 sm:p-6 shadow-lg w-[35%] text-left relative 
                            before:content-[''] before:absolute before:top-[51%] 
                            ${index % 2 === 0 ? "before:left-[-47%]" : "before:right-[-47%]"} 
                            before:border-b-2 before:border-dashed before:border-green-300 before:w-[47%]`}
                        >
                            <p
                                className="text-[50px] sm:text-[70px] font-bold text-transparent bg-gradient-to-b from-green-200 to-green-400 bg-clip-text leading-[82px] mb-0 mt-[-69px] sm:mt-[-75px]"
                                style={{ fontFamily: "kenyan-coffee-rg" }}
                            >
                                {step.number}
                            </p>
                            <p className="sm:text-lg text-base font-semibold sm:mt-2">{step.title}</p>
                            <p className="sm:text-sm text-xs mt-2">{step.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HowItWorks;
