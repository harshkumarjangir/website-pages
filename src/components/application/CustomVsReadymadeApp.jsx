// "use client";
// import React from "react";
// import Image from "next/image";

// const CustomVsReadymadeApp = ({ data }) => {
//     const { title, headers, comparison } = data;

//     return (
//         <section className="bg-white py-16 px-4 md:px-10 lg:px-20">
//             <div className="max-w-6xl mx-auto">
//                 {/* Heading */}
//                 <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 border-b-4 border-green-500 inline-block pb-2">
//                     {title}
//                 </h2>

//                 {/* Table Container */}
//                 <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-200">
//                     {/* Header */}
//                     <div className="grid grid-cols-3 font-semibold text-gray-900 text-lg border-b border-gray-200">
//                         <div className="p-4"></div>
//                         <div className="p-4 text-center bg-green-50 border-x border-t border-green-500 text-green-700">
//                             {headers.customApp}
//                         </div>
//                         <div className="p-4 text-center">{headers.readymadeApp}</div>
//                     </div>

//                     {/* Rows */}
//                     {comparison.map((item, index) => (
//                         <div
//                             key={index}
//                             className="grid grid-cols-3 border-b border-gray-100 last:border-none"
//                         >
//                             {/* Feature Column */}
//                             <div className="flex max-md:flex-col flex-row items-start gap-4 p-4">
//                                 <Image
//                                     src={item.icon}
//                                     alt={item.title}
//                                     width={40}
//                                     height={40}
//                                     className="w-10 h-10"
//                                 />
//                                 <div>
//                                     <h3 className="font-semibold text-gray-900">{item.title}</h3>
//                                     <p className="text-gray-600 text-sm md:text-base mt-1">
//                                         {item.description}
//                                     </p>
//                                 </div>
//                             </div>

//                             {/* Custom Apps - Check */}
//                             <div className="flex items-center justify-center border-x  border-green-500 bg-green-50">
//                                 <span className="text-green-500 text-3xl font-bold">✓</span>
//                             </div>

//                             {/* Readymade Apps - Cross */}
//                             <div className="flex items-center justify-center text-red-500 text-3xl font-bold">
//                                 ✕
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default CustomVsReadymadeApp;




"use client";
import React from "react";
import Image from "next/image";

const CustomVsReadymadeApp = ({ data }) => {
    const { title, headers, comparison } = data;

    return (
        <section className="bg-white py-16 px-4 md:px-10 lg:px-20">
            <div className="max-w-6xl mx-auto">
                {/* Heading */}
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 border-b-4 border-green-500 inline-block pb-2">
                    {title}
                </h2>

                {/* Table Container with horizontal scroll */}
                <div className="overflow-x-auto">
                    <div className="min-w-[700px] bg-white rounded-2xl shadow-md overflow-hidden border border-gray-200">
                        {/* Header */}
                        <div className="grid grid-cols-3 font-semibold text-gray-900 text-lg border-b border-gray-200">
                            <div className="p-4"></div>
                            <div className="p-4 text-center bg-green-50 border-x border-t border-green-500 text-green-700">
                                {headers.customApp}
                            </div>
                            <div className="p-4 text-center">{headers.readymadeApp}</div>
                        </div>

                        {/* Rows */}
                        {comparison.map((item, index) => (
                            <div
                                key={index}
                                className="grid grid-cols-3 border-b border-gray-100 last:border-none"
                            >
                                {/* Feature Column */}
                                <div className="flex max-md:flex-col flex-row items-start gap-4 p-4">
                                    <Image
                                        src={item.icon}
                                        alt={item.title}
                                        width={40}
                                        height={40}
                                        className="w-10 h-10"
                                    />
                                    <div>
                                        <h3 className="font-semibold text-gray-900">{item.title}</h3>
                                        <p className="text-gray-600 text-sm md:text-base mt-1">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Custom Apps - Check */}
                                <div className="flex items-center justify-center border-x border-green-500 bg-green-50">
                                    <span className="text-green-500 text-3xl font-bold">✓</span>
                                </div>

                                {/* Readymade Apps - Cross */}
                                <div className="flex items-center justify-center text-red-500 text-3xl font-bold">
                                    ✕
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CustomVsReadymadeApp;
