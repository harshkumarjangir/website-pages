import Image from "next/image";
import React from "react";

const AbouUsForm = ({ data }) => {
    if (!data) return null; // Prevent destructuring error if data is undefined

    const { heading, description, button, image } = data;

    return (
        <div className="relative bg-black flex flex-col lg:flex-row justify-between items-center lg:items-start px-4 md:px-2 lg:px-12 py-12 lg:py-8 gap-10 text-white">




            {/* LEFT SIDE - TEXT */}
            

            <div className="relative w-full lg:w-1/2 h-[300px] md:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-xl">
                    <Image
                        src={image}
                        alt="About Us"
                        fill
                        className="object-contain rounded-2xl"
                        priority
                    />
                    {/* Optional gradient overlay for better contrast */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-black/30 to-transparent" />
                </div>


            {/* RIGHT SIDE - TRANSPARENT FORM */}
            <div className="w-full max-w-md bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-white/20 shadow-lg shadow-black/20">
                <h3 className="text-2xl font-semibold mb-6 text-center text-white">
                    Send Your Query
                </h3>

                <form className="space-y-5">
                    <div>
                        <label className="block text-sm mb-1 text-gray-200">
                            Name <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            className="w-full p-2 rounded-md bg-white/20 text-white border border-white/30 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your name"
                        />
                    </div>

                    <div>
                        <label className="block text-sm mb-1 text-gray-200">
                            Phone <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            className="w-full p-2 rounded-md bg-white/20 text-white border border-white/30 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your phone number"
                        />
                    </div>

                    <div>
                        <label className="block text-sm mb-1 text-gray-200">
                            Email Address
                        </label>
                        <input
                            type="email"
                            className="w-full p-2 rounded-md bg-white/20 text-white border border-white/30 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your email"
                        />
                    </div>

                    <div>
                        <label className="block text-sm mb-1 text-gray-200">
                            Description (Interested Software){" "}
                            <span className="text-red-500">*</span>
                        </label>
                        <textarea
                            rows="3"
                            className="w-full p-2 rounded-md bg-white/20 text-white border border-white/30 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Describe your interest..."
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-[#1163FB]/90 hover:bg-[#1163FB] transition-colors rounded-md py-3 font-medium text-white"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AbouUsForm;




// "use client";
// import Image from "next/image";
// import Link from "next/link";
// import React from "react";

// const AboutUsForm = ({ data }) => {
//     if (!data) return null;

//     const { image, heading, description, button } = data;

//     return (
//         <section className="relative bg-black text-white py-16 lg:py-20 px-6 md:px-12 overflow-hidden">
//             <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
//                 {/* LEFT SIDE — IMAGE */}
//                 <div className="relative w-full lg:w-1/2 h-[300px] md:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-xl">
//                     <Image
//                         src={image}
//                         alt="About Us"
//                         fill
//                         className="object-cover rounded-2xl"
//                         priority
//                     />
//                     {/* Optional gradient overlay for better contrast */}
//                     <div className="absolute inset-0 bg-gradient-to-tr from-black/30 to-transparent" />
//                 </div>

//                 {/* RIGHT SIDE — TEXT + FORM */}
//                 <div className="w-full lg:w-1/2 flex flex-col gap-8">
//                     {/* Text Section */}
//                     <div>
//                         {heading && (
//                             <h2 className="text-3xl md:text-5xl font-semibold mb-4">
//                                 {heading}
//                             </h2>
//                         )}
//                         {description && (
//                             <p className="text-gray-300 text-base md:text-lg mb-6">
//                                 {description}
//                             </p>
//                         )}

//                         {/* Button */}
//                         {button?.text && (
//                             <Link
//                                 href={button.link}
//                                 className="inline-block px-6 py-3 rounded-xl font-medium transition-all duration-300 bg-[#1163FB] hover:bg-white/20 border border-[#1163FB] hover:border-white text-white"
//                             >
//                                 {button.text}
//                             </Link>
//                         )}
//                     </div>

//                     {/* Transparent Form Card */}
//                     <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-white/20 shadow-lg shadow-black/20">
//                         <h3 className="text-2xl font-semibold mb-6 text-center">
//                             Send Your Query
//                         </h3>

//                         <form className="space-y-5">
//                             <div>
//                                 <label className="block text-sm mb-1 text-gray-200">
//                                     Name <span className="text-red-500">*</span>
//                                 </label>
//                                 <input
//                                     type="text"
//                                     className="w-full p-2 rounded-md bg-white/20 text-white border border-white/30 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                                     placeholder="Enter your name"
//                                 />
//                             </div>

//                             <div>
//                                 <label className="block text-sm mb-1 text-gray-200">
//                                     Phone <span className="text-red-500">*</span>
//                                 </label>
//                                 <input
//                                     type="text"
//                                     className="w-full p-2 rounded-md bg-white/20 text-white border border-white/30 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                                     placeholder="Enter your phone number"
//                                 />
//                             </div>

//                             <div>
//                                 <label className="block text-sm mb-1 text-gray-200">
//                                     Email Address
//                                 </label>
//                                 <input
//                                     type="email"
//                                     className="w-full p-2 rounded-md bg-white/20 text-white border border-white/30 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                                     placeholder="Enter your email"
//                                 />
//                             </div>

//                             <div>
//                                 <label className="block text-sm mb-1 text-gray-200">
//                                     Description (Interested Software)
//                                     <span className="text-red-500">*</span>
//                                 </label>
//                                 <textarea
//                                     rows="3"
//                                     className="w-full p-2 rounded-md bg-white/20 text-white border border-white/30 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                                     placeholder="Describe your interest..."
//                                 ></textarea>
//                             </div>

//                             <button
//                                 type="submit"
//                                 className="w-full bg-[#1163FB]/90 hover:bg-[#1163FB] transition-colors rounded-md py-3 font-medium text-white"
//                             >
//                                 Submit
//                             </button>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default AboutUsForm;
