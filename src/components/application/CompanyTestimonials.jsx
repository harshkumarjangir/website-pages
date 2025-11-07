'use client';

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import Image from "next/image";

const CompanyTestimonials = ({ data }) => {
    const { heading, description, stats, reviewsHeader, reviews } = data;
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const nextSlide = () =>
        setCurrentSlide((prev) => (prev + 1) % data.reviews.length);
    const prevSlide = () =>
        setCurrentSlide((prev) => (prev - 1 + data.reviews.length) % data.reviews.length);

    const renderStars = (rating) =>
        Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-green-500 text-green-500" />
        ));

    return (
        <section className="relative bg-black text-white min-h-screen py-16 px-6 overflow-hidden">

            <div className="max-w-7xl mx-auto">
                {/* Heading */}
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4">
                    {heading}
                </h2>
                <p className="text-gray-300 text-lg md:text-xl mb-12">{description}</p>

                {/* Stats Section */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
                    {stats.map((stat, i) => (
                        <div
                            key={i}
                            className="bg-gray-900 border border-gray-800 rounded-2xl p-4 md:p-6 text-center"
                        >
                            <div className="text-2xl md:text-4xl font-bold mb-2">
                                {stat.value}
                            </div>
                            <div className="text-gray-400">{stat.label}</div>
                        </div>
                    ))}
                </div>

                {/* Testimonials Header */}
                <div className="bg-white text-black p-6 rounded-t-xl">
                    <div className="flex max-md:flex-col flex-row items-center justify-between">
                        <div>
                            <h3 className="text-xl font-semibold mb-1">
                                {reviewsHeader.title}
                            </h3>
                        </div>
                        <div className="flex max-md:flex-col flex-row items-center gap-4">
                            <div className="flex items-center gap-2">
                                <span className="text-2xl font-bold">
                                    {reviewsHeader.rating}
                                </span>
                                <div className="flex">{renderStars(data.reviewsHeader.rating)}</div>
                                <span className="text-sm text-gray-600">
                                    {reviewsHeader.reviewsCount} REVIEWS
                                </span>
                            </div>
                            <div className="flex items-center gap-1 text-sm text-gray-600">
                                <span>Powered by</span>
                                <span className="font-bold">{reviewsHeader.poweredBy}</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Reviews Section */}
                <div className="relative bg-white text-black rounded-b-xl overflow-hidden">
                    <div
                        className="flex transition-transform duration-500 ease-in-out"
                        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                    >
                        {reviews.map((review, index) => (
                            <div key={index} className="w-full flex-shrink-0 p-8">
                                <div className={`grid ${isMobile ? "grid-cols-1" : "md:grid-cols-3"} gap-6`}>
                                    {isMobile ? (
                                        <SingleReviewCard review={review} renderStars={renderStars} />
                                    ) : (
                                        Array.from({ length: 3 }).map((_, offset) => {
                                            const reviewIndex = (index + offset) % data.reviews.length;
                                            return (
                                                <SingleReviewCard
                                                    key={reviewIndex}
                                                    review={data.reviews[reviewIndex]}
                                                    renderStars={renderStars}
                                                />
                                            );
                                        })
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Navigation Arrows */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-100 text-black p-2 rounded-full shadow-lg transition"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-100 text-black p-2 rounded-full shadow-lg transition"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>
                </div>
            </div>
        </section>
    );
}
export default CompanyTestimonials;

const SingleReviewCard = ({ review, renderStars }) => {
    return (
        <div className="bg-gray-900 text-white p-6 rounded-xl">
            <div className="flex items-center gap-2 mb-4">
                <span className="text-xl font-bold">{review.rating}</span>
                <div className="flex">{renderStars(review.rating)}</div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">"{review.text}"</p>
            <div className="text-sm text-gray-400 mb-2">{review.author}</div>
            {review.verified && (
                <div className="flex items-center gap-2 text-blue-400 text-sm">
                    <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span>Verified Review</span>
                </div>
            )}
        </div>
    );
}
