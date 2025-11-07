"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import Image from "next/image";

const VideoTestimonialsSection = ({data}) => {
    const testimonialdata = data;
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef(null);

    // Play video when switching from thumbnail to video
    useEffect(() => {
        if (isPlaying && videoRef.current) {
            videoRef.current.play().catch(() => { });
        }
    }, [isPlaying, currentIndex]);

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev === 0 ? testimonialdata.videos.length - 1 : prev - 1));
        setIsPlaying(false);
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev === testimonialdata.videos.length - 1 ? 0 : prev + 1));
        setIsPlaying(false);
    };

    const handlePlay = () => {
        setIsPlaying(true);
    };

    return (
        <section className="bg-white p-6 md:p-10 my-10">
            <div className="grid md:grid-cols-2 gap-10 items-center">
                {/* LEFT SIDE TEXT */}
                <div>
                    <h2 className="text-4xl font-bold text-black mb-4">
                        {/* Stories from <br /> Our Happy Clients */}
                        {testimonialdata.title}
                    </h2>
                    <p className="text-gray-600 mb-6">{testimonialdata.subtitle}</p>

                    <ul className="space-y-3">
                        {testimonialdata.features.map((feature, i) => (
                            <li key={i} className="flex items-start space-x-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={2}
                                    stroke="#00C950"
                                    className="w-6 h-6 flex-shrink-0"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M5 13l4 4L19 7"
                                    />
                                </svg>
                                <span className="text-gray-800">{feature}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* RIGHT SIDE VIDEO */}
                <div className="relative flex flex-col items-center">
                    <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-black">
                        {!isPlaying ? (
                            <>
                                <Image
                                    src={testimonialdata.videos[currentIndex].thumbnail}
                                    alt="Client testimonial thumbnail"
                                    fill
                                    className="object-cover"
                                />
                                <button
                                    onClick={handlePlay}
                                    className="absolute inset-0 flex items-center justify-center"
                                >
                                    <div className="bg-[#00C950] w-16 h-16 flex items-center justify-center rounded-full shadow-lg hover:scale-105 transition-transform cursor-pointer">
                                        <Play className="w-8 h-8 text-white" />
                                    </div>
                                </button>
                            </>
                        ) : (
                            <video
                                ref={videoRef}
                                src={testimonialdata.videos[currentIndex].videoSrc}
                                controls
                                autoPlay
                                onEnded={() => setIsPlaying(false)}
                                className="w-full h-full object-cover"
                            />
                        )}
                    </div>

                    {/* NAVIGATION BUTTONS */}
                    <div className="flex space-x-4 mt-6">
                        <button
                            onClick={handlePrev}
                            className="w-10 h-10 flex items-center justify-center border border-black text-black rounded-full hover:bg-[#00C950] hover:text-white transition cursor-pointer"
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button
                            onClick={handleNext}
                            className="w-10 h-10 flex items-center justify-center border border-black text-black rounded-full hover:bg-[#00C950] hover:text-white transition cursor-pointer"
                        >
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VideoTestimonialsSection;
