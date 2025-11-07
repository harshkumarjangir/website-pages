// "use client";

// import React from "react";
// import Image from "next/image";

// const MistakesToAvoid = ({ data }) => {
//     console.log(data)
//     const { title, cards } = data;

//     if (!title || !cards) return null;

//     return (
//         <section className="bg-gray-50 py-16 px-4">
//             <div className="max-w-7xl mx-auto">
//                 {/* Header */}
//                 <div className="text-center mb-16">
//                     <h2 className="text-4xl font-bold text-gray-800 mb-4">
//                         {title}
//                     </h2>
//                     <div className="w-20 h-1 bg-green-500 mx-auto rounded-full"></div>
//                 </div>

//                 {/* Cards Grid */}
//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//                     {cards.map((card, index) => (
//                         <div
//                             key={index}
//                             className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow flex flex-col"
//                         >
//                             {/* For alternating layout (image top or bottom) */}
//                             {index === 1 && (
//                                 <div className="mb-6 bg-green-50 rounded-2xl p-6 h-48 flex items-center justify-center">
//                                     <Image
//                                         src={card.image}
//                                         alt={card.title}
//                                         width={300}
//                                         height={300}
//                                         className="max-h-full object-contain"
//                                     />
//                                 </div>
//                             )}

//                             <h3 className="text-2xl font-bold text-gray-800 mb-4">
//                                 {card.title}
//                             </h3>
//                             <p className="text-gray-600 leading-relaxed mb-6">
//                                 {card.description}
//                             </p>

//                             {index !== 1 && (
//                                 <div className="mt-auto bg-green-50 rounded-2xl p-6 h-48 flex items-center justify-center">
//                                     <Image
//                                         src={card.image}
//                                         alt={card.title}
//                                         width={300}
//                                         height={300}
//                                         className="max-h-full object-contain"
//                                     />
//                                 </div>
//                             )}
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default MistakesToAvoid;




"use client";

import React from "react";
import Image from "next/image";

const MistakesToAvoid = ({ data }) => {
    const { title, cards } = data || {};

    if (!title || !cards) return null;

    return (
        <section className="bg-gray-50 py-16 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">
                        {title}
                    </h2>
                    <div className="w-20 h-1 bg-green-500 mx-auto rounded-full"></div>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {cards.map((card, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow flex flex-col"
                        >
                            {/* For alternating layout (image top or bottom) */}
                            {index === 1 && (
                                <div className="mb-6 bg-green-50 rounded-2xl p-6 h-48 flex items-center justify-center relative">
                                    <div className="relative w-40 h-40">
                                        <Image
                                            src={card.image}
                                            alt={card.title}
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                </div>
                            )}

                            <h3 className="text-2xl font-bold text-gray-800 mb-4">
                                {card.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                {card.description}
                            </p>

                            {index !== 1 && (
                                <div className="mt-auto bg-green-50 rounded-2xl p-6 h-48 flex items-center justify-center relative">
                                    <div className="relative w-40 h-40">
                                        <Image
                                            src={card.image}
                                            alt={card.title}
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MistakesToAvoid;
