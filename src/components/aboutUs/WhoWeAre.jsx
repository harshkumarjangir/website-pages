"use client";

import Image from "next/image";

export default function WhoWeAre({data}) {
    const { title, paragraphs, image } = data;

    return (
        <section className="w-full bg-white text-gray-800 py-16">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

                {/* ===== Left Image Section ===== */}
                <div className="relative flex justify-center">
                    <div className="relative w-[90%] aspect-[4/5] md:w-[80%] overflow-hidden">
                        <Image
                            src={image}
                            alt={title}
                            fill
                            className="object-contain object-center"
                        />
                    </div>
                </div>

                {/* ===== Right Text Section ===== */}
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
                    <div className="w-20 h-[3px] bg-blue-600 mb-6"></div>
                    <div className="space-y-5 text-lg leading-relaxed text-gray-700">
                        {paragraphs.map((para, index) => (
                            <p key={index}>{para}</p>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
