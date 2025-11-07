"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ArrowRight } from "lucide-react";

const LatestBlogs = ({ data }) => {
    const { title, subtitle, viewAllUrl, viewAllText, blogs } = data;

    return (
        <section className="bg-[#0a0a0f] text-white py-16 px-4 md:px-10 lg:px-20">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10">
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-3">
                        {title}
                    </h2>
                    <p className="text-gray-300 text-lg">{subtitle}</p>
                </div>
                <Link
                    href={viewAllUrl}
                    className="mt-6 md:mt-0 w-fit inline-flex items-center gap-2 bg-[#00C950] hover:bg-transparent border border-[#00C950] hover:border-white text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
                >
                    {viewAllText} <ArrowRight className="w-4 h-4" />
                </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogs.map((blog, index) => (
                    <div
                        key={index}
                        className="group bg-[#12121a] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300 relative"
                    >
                        {/* Image Section */}
                        <div className="relative w-full h-56 md:h-64 overflow-hidden">
                            <Image
                                src={blog.image}
                                alt={blog.title}
                                fill
                                className="object-cover transform transition-transform duration-500 group-hover:scale-110"
                            />
                        </div>

                        {/* Tag in Top Left Corner */}
                        <span className="absolute top-4 left-4 bg-gray-900/50 border text-white text-xs font-semibold px-3 py-1 rounded-full z-10">
                            {blog.maintag}
                        </span>

                        {/* Content Section */}
                        <div className="p-6">
                            <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-green-400 transition-colors duration-300">
                                {blog.title}
                            </h3>
                            <p className="text-gray-400 mb-5 text-sm leading-relaxed">
                                {blog.description}
                            </p>
                            <Link
                                href={blog.url}
                                className="text-green-400 hover:text-white font-medium inline-flex items-center gap-1 transform transition-transform duration-500 group-hover:scale-110"
                            >
                                <ArrowUpRight className="w-4 h-4" />
                                {blog.readMoreText}
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default LatestBlogs;
