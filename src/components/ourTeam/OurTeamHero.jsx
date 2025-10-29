"use client";
import Image from "next/image";
import Link from "next/link";

export default function OurTeamHero({ data }) {
    const { title, highlight, description, buttonText, buttonUrl, bgImage, image } = data;

    return (
        <section className="relative bg-cover bg-center bg-no-repeat text-white py-10 px-6 md:px-10 overflow-hidden"
            style={{ backgroundImage: `url(${bgImage})` }}>
            {/* bg-gradient-to-br from-[#0a0a2a] to-[#000] */}
            {/* Gradient Glow Background */}
            {/* <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-blue-800/50 to-transparent blur-[120px] -z-10" /> */}

            <div className="max-w-6xl mx-auto text-center">
                {/* Heading */}
                <h2 className="absolute top-2 text-3xl md:text-6xl leading-tight mb-0 text-left z-10">
                    {title}{" "} <br />
                    <span className="font-semibold text-white block md:inline">
                        {highlight}
                    </span>
                </h2>

                {/* Image Card */}
                {/* bg-[#111]/50 backdrop-blur-sm */}
                <div className="relative inline-block rounded-3xl overflow-hidden shadow-xl max-w-4xl w-full max-sm:pt-10 pt-10
                ">
                    <div className="relative w-full md:w[700px] h-[250px] sm:h-[400px] md:h-[480px]">
                        <Image
                            src={image}
                            alt="Our Team"
                            fill
                            className="object-contain opacity-90"
                            priority
                        />
                    </div>


                </div>

                {/* Text Overlay (bottom-right) */}
                <div className="sm:absolute sm:bottom-0 sm:right-0 lg:right-10 w-full md:w-[50%] bg-gradient-to-t from-black/80 to-transparent p-2 sm:p4 md:p-10 text-left">
                    <p className="text-sm md:text-sm text-gray-200 leading-relaxed mb-6">
                        {description}
                    </p>
                    <Link
                        href={buttonUrl}
                        className="inline-block px-6 py-3 bg-white text-black border font-medium rounded-full hover:bg-transparent hover:text-white hover:border-white transition tranduration-300"
                    >
                        {buttonText}
                    </Link>
                </div>
            </div>
        </section>
    );
}
