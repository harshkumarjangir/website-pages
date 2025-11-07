"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";

const VideoInsights = ({ data }) => {
    if (!data) return null;

    const { heading, description, videos } = data;
    const [playingIndex, setPlayingIndex] = useState(null);

    return (
        <section className="bg-black text-white py-16 px-4 md:px-10">
            {/* Top Text Section */}
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
                <h2 className="text-3xl md:text-4xl font-bold leading-tight max-w-2xl">
                    {heading}
                </h2>
                <p className="text-white/80 text-base md:text-lg max-w-xl">
                    {description}
                </p>
            </div>

            {/* Video Cards */}
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                {videos.map((video, index) => (
                    <div
                        key={index}
                        className="bg-gray-200 text-black rounded-2xl overflow-hidden shadow-lg"
                    >
                        {/* Video/Image Section */}
                        <div className="relative w-full aspect-video bg-black rounded-2xl overflow-hidden">
                            {playingIndex === index ? (
                                <video
                                    src={video.videoSrc}
                                    controls
                                    autoPlay
                                    className="w-full h-full object-cover"
                                />
                            ) : (
                                <>
                                    <Image
                                        src={video.thumbnail}
                                        alt={video.title}
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 hover:bg-black/50 transition">
                                        <button
                                            onClick={() => setPlayingIndex(index)}
                                            className="bg-green-500 rounded-full p-4 hover:bg-green-600 transition cursor-pointer"
                                        >
                                            <Play size={28} className="text-white" />
                                        </button>
                                        <p className="mt-2 text-white font-medium">
                                            {video.buttonText}
                                        </p>
                                    </div>
                                </>
                            )}
                        </div>

                        {/* Speaker Info */}
                        <div className="p-4">
                            <div className="bg-green-500 text-white font-bold text-lg px-4 py-2 inline-block rounded-lg">
                                {video.name}
                            </div>
                            <p className="text-sm text-gray-600 font-semibold mt-1 uppercase">
                                {video.designation}
                            </p>
                        </div>

                        {/* Video Title */}
                        <div className="px-4 pb-6">
                            <p className="text-lg font-semibold">{video.title}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default VideoInsights;
