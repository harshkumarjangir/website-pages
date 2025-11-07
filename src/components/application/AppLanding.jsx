// import React from 'react';

// export default function AppLanding() {
//     return (
//         <div className="relative min-h-[50vh] flex items-center justify-center">
//             {/* Background Image with Overlay */}
//             <div
//                 className="absolute inset-0 bg-cover bg-center bg-no-repeat"
//                 style={{
//                     backgroundImage: `url('/assets/home/appLanding/applanding.jpg')`
//                 }}
//             >
//                 <div className="absolute inset-0 bg-black/80 bg-opacity-90"></div>
//             </div>

//             {/* Content */}
//             <div className="relative z-10 text-center px-4 max-w-4xl mx-auto py-5">
//                 {/* Main Heading */}
//                 <h2 className="text-4xl md:text-4xl lg:text-4xl font-bold text-white mb-6 leading-tight">
//                     Let's Build Your Restaurant App Today!
//                 </h2>

//                 {/* Subheading */}
//                 <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
//                     Get a custom, feature-rich restaurant app development solution tailored to your business needs. Start
//                     your digital transformation now!
//                 </p>

//                 {/* CTA Button */}
//                 <button className="bg-red-500 hover:bg-red-600 text-white font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
//                     Get a Free Consultation
//                 </button>
//             </div>
//         </div>
//     );
// }






"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function AppLanding({ data }) {
    const { backgroundImage, heading, subheading, buttonText, buttonUrl } = data;

    return (
        <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 -z-10">
                <Image
                    src={backgroundImage}
                    alt="App Landing Background"
                    fill
                    priority
                    className="object-cover object-center"
                />
            </div>

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/80 -z-0"></div>

            {/* Foreground Content */}
            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto py-10">
                {/* Heading */}
                <h2 className="text-4xl md:text-4xl lg:text-4xl font-bold text-white mb-6 leading-tight">
                    {heading}
                </h2>

                {/* Subheading */}
                <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
                    {subheading}
                </p>

                {/* CTA Button */}
                <Link href={buttonUrl} className="bg-green-500 border border-green-500 hover:bg-transparent text-white font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                    {buttonText}
                </Link>
            </div>
        </section>
    );
}
