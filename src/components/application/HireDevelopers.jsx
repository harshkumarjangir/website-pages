// "use client";
// import React from "react";
// import Image from "next/image";

// const HireDevelopers = ({ data }) => {
//     const { title, paragraphs, buttonText, images } = data;

//     return (
//         <section className="bg-[#F8FBFC] py-16 px-4 md:px-10 lg:px-20">
//             <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10">
//                 {/* Left Images */}
//                 <div className="flex-1 grid grid-cols-2 gap-4">
//                     <div className="space-y-4">
//                         <div className="bg-white rounded-3xl overflow-hidden shadow-sm">
//                             <Image
//                                 src={images[0]}
//                                 alt="developer 1"
//                                 width={400}
//                                 height={400}
//                                 className="w-full h-auto object-cover"
//                             />
//                         </div>
//                         <div className="bg-white rounded-3xl overflow-hidden shadow-sm">
//                             <Image
//                                 src={images[1]}
//                                 alt="developer 2"
//                                 width={400}
//                                 height={400}
//                                 className="w-full h-auto object-cover"
//                             />
//                         </div>
//                     </div>
//                     <div className="bg-white rounded-3xl overflow-hidden shadow-sm self-center">
//                         <Image
//                             src={images[2]}
//                             alt="developer 3"
//                             width={400}
//                             height={600}
//                             className="w-full h-auto object-cover"
//                         />
//                     </div>
//                 </div>

//                 {/* Right Content */}
//                 <div className="flex-1 text-left">
//                     <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
//                         {title}
//                     </h2>

//                     {paragraphs.map((p, index) => (
//                         <p key={index} className="text-gray-700 mb-4 leading-relaxed">
//                             {p}
//                         </p>
//                     ))}

//                     <button className="mt-6 bg-[#E63946] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#d62839] transition">
//                         {buttonText}
//                     </button>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default HireDevelopers;




"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const HireDevelopers = ({ data }) => {
    const { title, paragraphs, buttonText, buttonUrl, image } = data;

    return (
        <section className="bg-[#F8FBFC] py-16 px-4 md:px-10 lg:px-20">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10">
                {/* Left Image */}
                <div className="flex-1">
                    <div className="bg-white rounded-3xl overflow-hidden shadow-sm">
                        <Image
                            src={image}
                            alt="Hire Developers"
                            width={800}
                            height={600}
                            className="w-full h-auto object-cover"
                            priority
                        />
                    </div>
                </div>

                {/* Right Content */}
                <div className="flex-1 text-left">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                        {title}
                    </h2>

                    {paragraphs.map((p, index) => (
                        <p key={index} className="text-gray-700 mb-4 leading-relaxed">
                            {p}
                        </p>
                    ))}

                    <Link
                        href={buttonUrl}
                        className="mt-8 inline-block bg-gradient-to-r from-green-500 to-green-700 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-700 transition"
                    >
                        {buttonText}
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default HireDevelopers;
