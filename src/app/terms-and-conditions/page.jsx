"use client";

import Image from "next/image";
import Link from "next/link";
import termsData from "@/data/termsData.json";

export default function TermsAndConditions() {

    const { banner, aboutCompany, sections } = termsData;

    return (
        <div className="w-full bg-white text-gray-800">
            {/* ===== Banner Section ===== */}
            <section className="relative w-full h-[80vh] flex items-center md:justify-start md:pl-10 overflow-hidden">
                {/* Background image */}
                <Image
                    src={banner.image}
                    alt={banner.title}
                    fill
                    className="object-cover"
                    priority
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/70 backdrop-blur-none"></div>

                {/* Banner text */}
                <div className="relative z-10 px-4 md:w-1/2 max-w-3xl text-white">
                    <h1 className="text-3xl md:text-4xl font-semibold mb-4">
                        {banner.title}
                    </h1>
                    <p className="text-sm md:text-lg leading-relaxed mb-6">
                        {banner.description}
                    </p>
                    <Link
                        href={banner.buttonLink}
                        className="inline-block bg-transparent hover:bg-white text-white hover:text-black border font-medium px-6 py-3 rounded-full transition-all duration-300"
                    >
                        {banner.buttonText}
                    </Link>
                </div>
            </section>

            {/* ===== About Company ===== */}
            <section className="bg-[#011C44] text-white mx-auto px-6 md:px-20 py-12">
                <h2 className="text-2xl font-semibold mb-4 border-l-4 border-blue-600 pl-3">
                    {aboutCompany.title}
                </h2>
                <p className="text-gray-300 leading-relaxed">
                    {aboutCompany.content}
                </p>
            </section>

            {/* ===== Sections ===== */}
            <section className="max-w-6xl mx-auto px-6 py-16 space-y-16">
                {sections.map((section) => (
                    <div key={section.id} id={section.id}>
                        {/* Section Heading */}
                        <h2 className="text-2xl font-semibold text-gray-900 mb-8">
                            {section.heading}
                            <div className="h-1 w-24 bg-blue-600 mt-2"></div>
                        </h2>

                        {/* Timeline / Stepper Layout */}
                        <div className="relative border-l border-gray-300 ml-5 space-y-10">
                            {section.content.map((paragraph, i) => (
                                <div
                                    key={i}
                                    className="relative pl-10 group transition-all duration-300"
                                >
                                    {/* Circle */}
                                    <div
                                        className={`absolute -left-[13px] top-1 w-6 h-6 rounded-full border-4 bg-white transition-all duration-300 
              ${i === 0 ? "border-gray-300" : "border-gray-300"} 
              group-hover:border-blue-600`}
                                    ></div>

                                    {/* Text */}
                                    <p className="text-gray-700 leading-relaxed transition-colors duration-300">
                                        {paragraph}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </section>



        </div>
    );
}












{/* <section className="max-w-5xl mx-auto px-6 py-16 space-y-12">
                {sections.map((section) => (
                    <div key={section.id} id={section.id}>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                            {section.heading}
                            <div className="h-1 w-24 bg-blue-600"></div>
                        </h2>

                        <div className="space-y-4 text-gray-700 leading-relaxed">
                            {section.content.map((paragraph, i) => (
                                <p key={i} className="whitespace-pre-line">
                                    {paragraph}
                                </p>
                            ))}
                        </div>
                    </div>
                ))}
            </section> */}