"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";

export default function CompanyOverview({ data }) {
    const { title, description, linkedin } = data;

    return (
        <section className="w-full bg-white text-gray-800 py-12">
            <div className="max-w-7xl mx-auto px-6 md:px-20 grid md:grid-cols-3 gap-10 items-center">
                {/* ===== Left Content ===== */}
                <div className="md:col-span-2">
                    <h2 className="text-3xl md:text-4xl font-bold mb-3">{title}</h2>
                    <div className="w-24 h-[3px] bg-[#016CD3] mb-6"></div>
                    <p className="text-base md:text-lg leading-relaxed text-gray-700">
                        {description}
                    </p>
                </div>

                {/* ===== Right LinkedIn Card ===== */}
                <div className="border rounded-lg overflow-hidden shadow-md">
                    {/* Header */}
                    <div className="bg-[#016CD3] text-white flex items-center gap-3 px-5 py-3">
                        <FaLinkedin className="text-3xl" />
                        <span className="text-xl font-semibold">{linkedin.headerText}</span>
                    </div>

                    {/* Body */}
                    <div className="bg-white text-center px-6 py-6">
                        <h3 className="text-3xl font-bold">
                            {linkedin.followers}
                            <span className="text-gray-500 font-medium"> {linkedin.followersLabel}</span>
                        </h3>

                        <div className="mt-4 flex justify-center">
                            <div className="relative w-40 h-28 rounded-lg overflow-hidden">
                                <Image
                                    src={linkedin.image}
                                    alt="Linkedin team"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>

                        <Link
                            href={linkedin.buttonUrl}
                            target="_blank"
                            className="group inline-flex items-center justify-center gap-2 bg-[#016CD3] text-white mt-5 py-2 px-6 rounded-md text-lg font-semibold hover:bg-blue-700 transition-all"
                        >
                            {linkedin.buttonText}
                            <div className="transition-transform group-hover:translate-x-1">
                                <ArrowRight className="w-5 h-5" />
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
