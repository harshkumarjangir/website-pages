// "use client";

// import React from "react";
// import Image from "next/image";

// export default function AppOperations({ data }) {
//     const { title, description, image } = data;

//     return (
//         <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-0">
//             <div className="max-w-6xl mx-auto">
//                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
//                     {/* Left Column - Title */}
//                     <div className="lg:sticky lg:top-12">
//                         <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
//                             Why Choose <span className="text-green-500">JPLoft</span> for
//                             <br />
//                             <span className="text-gray-700">Restaurant App</span>
//                             <br />
//                             <span className="text-gray-700">Development?</span>
//                         </h2>
//                         <p className="mt-6 text-gray-600 text-lg leading-relaxed">{description}</p>
//                     </div>

//                     {/* Right Column - Image */}
//                     <div className="relative max-md:w-[95vw] w-full h-[3500px] md:h-[3500px] lg:h-[3500px] rounded-xl overflow-hidden">
//                         <Image
//                             src={image}
//                             alt={title}
//                             fill
//                             className="max-md:object-contain object-cover"
//                         />
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }




// First Image Not Taking Full Height Issue

// "use client";

// import React from "react";
// import Image from "next/image";

// export default function AppOperations({ data }) {
//     const { title, description, image } = data;

//     return (
//         <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4">
//             <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

//                 {/* Left Column - Title */}
//                 <div className="lg:sticky lg:top-12">
//                     <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
//                         Why Choose <span className="text-green-500">JPLoft</span> for
//                         <br />
//                         <span className="text-gray-700">Restaurant App</span>
//                         <br />
//                         <span className="text-gray-700">Development?</span>
//                     </h2>
//                     <p className="mt-6 text-gray-600 text-lg leading-relaxed">{description}</p>
//                 </div>

//                 {/* Right Column - Images (Vertical Scroll) */}
//                 <div className="flex flex-col gap-8 max-w-full">
//                     {image.map((img, idx) => (
//                         <div
//                             key={idx}
//                             className="relative w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[500px] rounded-xl overflow-hidden"
//                         >
//                             <Image
//                                 src={img.src}
//                                 alt={img.alt}
//                                 fill
//                                 className="object-cover rounded-xl"
//                             />
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// }





"use client";

import React from "react";
import Image from "next/image";

export default function AppOperations({ data }) {
    const { heading, description, image } = data;

    return (
        <div className="min-h-screen bg-gray-100 py-12 px-4">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

                {/* Left Column - Sticky Text */}
                <div className="lg:sticky lg:top-12">
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                        {heading.line1} <span className="text-green-500">{heading.highlight}</span>{heading.highlightSuffix ? " " + heading.highlightSuffix : ""}
                        <br />
                        <span className="text-gray-700">{heading.line2}</span>
                        <br />
                        <span className="text-gray-700">{heading.line3}</span>
                    </h2>
                    <p className="mt-6 text-gray-600 text-lg leading-relaxed">{description}</p>
                </div>

                {/* Right Column - Scrollable long images */}
                <div className="flex flex-col gap-8 max-w-full overflow-y-auto">
                    {image.map((img, idx) => (
                        <div key={idx} className="w-full rounded-xl overflow-hidden">
                            <Image
                                src={img.src}
                                alt={img.alt}
                                width={1000}  // adjust according to actual image
                                height={3500} // actual height of your long image
                                className="w-full h-auto rounded-xl"
                            />
                        </div>
                    ))}
                </div>


            </div>
        </div>
    );
}
