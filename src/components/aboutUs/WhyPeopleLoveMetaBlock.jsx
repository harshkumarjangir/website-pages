"use client";
import React from "react";
import Image from "next/image";

const WhyPeopleLoveMetaBlock = ({ data }) => {
    const { image, loveSection, growthSection } = data;

    return (
        <section className="bg-[#F8FBFC] py-16 px-4 md:px-10 lg:px-20">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-10">
                {/* Left Image */}
                <div className="flex-1">
                    <div className="rounded-3xl overflow-hidden">
                        <Image
                            src={image}
                            alt="MetaBlock Culture"
                            width={1000}
                            height={800}
                            className="w-full h-auto object-cover"
                            priority
                        />
                    </div>
                </div>

                {/* Right Content */}
                <div className="flex-1 text-left space-y-10">
                    {/* Why People Love MetaBlock */}
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                            {loveSection.title}
                        </h2>
                        <div className="w-20 h-[3px] bg-blue-600 mb-4"></div>


                        <ul className="space-y-3 mb-6">
                            {loveSection.points.map((point, i) => (
                                <li
                                    key={i}
                                    className="text-gray-700 flex items-center leading-relaxed "
                                >
                                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>{point}
                                </li>
                            ))}
                        </ul>

                        {loveSection.description.map((line, i) => (
                            <p key={i} className="text-gray-700 mb-2 leading-relaxed">
                                {line}
                            </p>
                        ))}
                    </div>

                    <hr className="border-gray-300" />

                    {/* Together, We Grow */}
                    <div>
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                            {growthSection.title}
                        </h3>
                        <div className="w-20 h-[3px] bg-blue-600 mb-4"></div>


                        {growthSection.description.map((line, i) => (
                            <p key={i} className="text-gray-700 mb-4 leading-relaxed">
                                {line}
                            </p>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyPeopleLoveMetaBlock;
