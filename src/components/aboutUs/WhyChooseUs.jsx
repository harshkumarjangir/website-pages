"use client";
import React from "react";
import Image from "next/image";

const WhyChooseUs = ({ data }) => {
    const whyChooseUs = data;

    if (!whyChooseUs) return null;
    const { heading, description, steps, processImage } = whyChooseUs;

    return (
        <div className="bg-[#0066FF] py-10 text-white flex flex-col items-center relative">
            <h1
                style={{
                    // fontFamily: "kenyan-coffee-rg",
                    textShadow: "0px 4px 8px rgba(0, 0, 0, 0.5)",
                }}
                className="text-center text-3xl md:text-5xl font-bold mb-6"
            >
                {heading}
            </h1>

            <p className="text-center max-w-3xl mb-12 text-base md:text-lg text-white/90 px-4">
                {description}
            </p>

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
                {/* Vertical line in center */}
                <div
                    style={{
                        background:
                            "linear-gradient(180deg, rgba(86, 27, 126, 0) 0%, #EDD4FE 31.25%, #FFFFFF 50.52%, #F2DEFF 80.73%, rgba(86, 27, 126, 0) 100%)",
                    }}
                    className="absolute left-1/2 transform -translate-x-1/2 w-[2px] h-full"
                ></div>

                {/* Steps */}
                {steps?.map((step, index) => (
                    <div
                        key={step.number}
                        className={`flex ${index % 2 === 0 ? "justify-end" : "justify-start"
                            } items-center my-6 relative`}
                    >
                        {/* Connector dot */}
                        <div
                            style={{
                                boxShadow: "0px 0px 15px #000000",
                                zIndex: "1",
                                border: "2px solid #FFFFFF",
                            }}
                            className="w-8 h-8 bg-[#0066FF] rounded-full absolute left-1/2 transform -translate-x-1/2"
                        ></div>

                        {/* Step Card */}
                        <div
                            className={`bg-white/10 border border-white/10 rounded-lg p-1 sm:p-6 shadow-lg w-[35%] text-left relative 
              before:content-[''] before:absolute before:top-[51%] 
              ${index % 2 === 0 ? "before:left-[-47%]" : "before:right-[-47%]"
                                } 
              before:border-b-2 before:border-dashed before:border-white before:w-[47%]`}
                        >
                            <p
                                className="sm:text-[70px] text-[50px] font-bold text-transparent bg-gradient-to-b from-white/90 to-white/0 bg-clip-text leading-[82px] mb-0 mt-[-69px] sm:mt-[-75px]"
                                style={{ fontFamily: "kenyan-coffee-rg" }}
                            >
                                {step.number}
                            </p>
                            <p className="max-sm:text-sm sm:text-lg text-wrap text-base font-semibold mt-2">
                                {step.title}
                            </p>
                            <p className="sm:text-sm text-xs mt-2">{step.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WhyChooseUs;
