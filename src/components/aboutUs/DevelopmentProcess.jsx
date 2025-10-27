"use client";
import React from "react";

const DevelopmentProcess = ({data}) => {
    const devData = data;

    if (!data || !data.steps || data.steps.length === 0) {
        return <p className="text-center text-gray-400">No data available</p>;
    }

    return (
        <section className="text-white py-16 bg-black max-md:px-4 overflow-hidden">
            <div className="max-w-[1140px] mx-auto text-center">
                {/* Heading */}
                {data.heading && (
                    <h2 className="text-[clamp(20px,4vw,35px)] font-bold uppercase leading-tight">
                        {devData.heading}
                        {/* <span className="text-[#FFC736]"> Process</span> */}
                    </h2>
                )}

                {/* Description */}
                {data.description && (
                    <p className="text-gray-400 max-w-5xl mx-auto mt-4 mb-10">
                        {/* {devData.description} */}
                        {devData.shortDescription}
                    </p>
                )}

                {/* Steps */}
                <div className="flex flex-wrap justify-center gap-y-16 mt-10">
                    {devData.steps.map((step, index) => (
                        <div
                            key={index}
                            className="w-full sm:w-1/2 lg:w-1/4 flex justify-center px-3"
                        >
                            <div
                                className="relative w-full max-w-[300px] h-[460px] bg-no-repeat bg-contain bg-center flex flex-col text-left transition-all duration-300 hover:scale-[1.03]"
                                style={{
                                    backgroundImage: `url('/assets/about-us/developmentProcess/${step.bgImage}')`,
                                }}
                            >
                                {/* Text Wrapper */}
                                <div
                                    className="absolute inset-0 flex flex-col text-left px-6 transition-all duration-300"
                                    style={{
                                        paddingLeft: step.paddingLeft,
                                        paddingTop: step.paddingTop,
                                    }}
                                >
                                    <h3 className="text-[#FFC736] text-lg font-semibold capitalize mb-3">
                                        {step.title}
                                    </h3>
                                    {step.points.map((point, i) => (
                                        <p
                                            key={i}
                                            className="text-[15px] text-white leading-relaxed mb-1"
                                        >
                                            {point}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default DevelopmentProcess;
