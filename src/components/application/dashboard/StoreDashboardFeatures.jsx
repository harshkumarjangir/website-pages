// "use client";
// import React from "react";
// import Image from "next/image";

// const StoreDashboardFeatures = ({data}) => {
//     const { storeSection, liveChatSection } = data;

//     return (
//         <div className="w-full">
//             {/* Section 1: Store Dashboard */}
//             <section className="bg-gradient-to-b from-green-100 to-green-50 py-16 px-6 lg:px-20 text-center text-white">
//                 <h2 className="text-3xl lg:text-4xl font-bold mb-2">{storeSection.title}</h2>

//                 <h3 className="text-4xl lg:text-5xl font-extrabold mb-6">
//                     <span className="inline-block bg-white text-green-700 px-4 py-1 rounded">
//                         {storeSection.highlight}
//                     </span>
//                 </h3>

//                 <div className="flex justify-center">
//                     <div className="relative w-[90%] md:w-[75%] lg:w-[65%] rounded-2xl overflow-hidden">
//                         <Image
//                             src={storeSection.image}
//                             alt={storeSection.highlight}
//                             width={1000}
//                             height={600}
//                             className="object-contain w-full h-auto"
//                             priority
//                         />
//                     </div>
//                 </div>
//             </section>

//             {/* Section 2: Live Chat */}
//             <section className="bg-green-50 py-16 px-6 lg:px-20">
//                 <div className="text-center mb-10">
//                     <h2 className="text-3xl lg:text-4xl font-bold text-green-700">
//                         {liveChatSection.title}
//                     </h2>
//                 </div>

//                 <div className="max-w-6xl mx-auto flex flex-col items-center">
//                     <div className="relative w-[90%] md:w-[75%] lg:w-[65%] rounded-2xl overflow-hidden">
//                         <Image
//                             src={liveChatSection.image}
//                             alt="Live Chat Interface"
//                             width={1000}
//                             height={600}
//                             className="object-cover w-full h-auto"
//                         />
//                     </div>
//                 </div>
//             </section>
//         </div>
//     );
// };

// export default StoreDashboardFeatures;





// "use client";
// import React from "react";
// import Image from "next/image";

// const StoreDashboardFeatures = ({ data }) => {
//     const { storeSection, liveChatSection } = data;

//     return (
//         <div className="w-full">
//             {/* Section 1: Store Dashboard */}
//             <section className="bg-gradient-to-b from-green-600 to-green-400 py-16 px-6 lg:px-20 text-center text-white">
//                 <h2 className="text-3xl lg:text-4xl font-bold mb-2">
//                     {storeSection.title}
//                 </h2>

//                 <h3 className="text-4xl lg:text-5xl font-extrabold mb-6">
//                     <span className="inline-block bg-white text-green-700 px-4 py-1 rounded">
//                         {storeSection.highlight}
//                     </span>
//                 </h3>

//                 <div className="flex justify-center">
//                     <div className="relative w-[90%] md:w-[75%] lg:w-[65%] rounded-2xl overflow-hidden shadow-xl">
//                         <Image
//                             src={storeSection.image}
//                             alt={storeSection.highlight}
//                             width={1000}
//                             height={600}
//                             className="object-contain w-full h-auto"
//                             priority
//                         />
//                     </div>
//                 </div>
//             </section>

//             {/* Section 2: Live Chat */}
//             <section className="bg-green-50 py-16 px-6 lg:px-20">
//                 <div className="text-center mb-10">
//                     <h2 className="text-3xl lg:text-4xl font-bold text-green-700">
//                         {liveChatSection.title}
//                     </h2>
//                 </div>

//                 <div className="max-w-6xl mx-auto flex flex-col items-center">
//                     <div className="relative w-[90%] md:w-[75%] lg:w-[65%] rounded-2xl overflow-hidden shadow-md">
//                         <Image
//                             src={liveChatSection.image}
//                             alt="Live Chat Interface"
//                             width={1000}
//                             height={600}
//                             className="object-cover w-full h-auto"
//                         />
//                     </div>
//                 </div>
//             </section>
//         </div>
//     );
// };

// export default StoreDashboardFeatures;



"use client";
import React from "react";
import Image from "next/image";

const StoreDashboardFeatures = ({ data }) => {
    const { storeSection, liveChatSection } = data;

    return (
        <section className="bg-gradient-to-b from-green-600 via-0% to-green-50 py-16 px-6 lg:px-20 text-center">
            {/* Store Dashboard Section */}
            <div className="mb-20 text-white">
                <h2 className="text-3xl lg:text-4xl font-bold mb-2">
                    {storeSection.title}
                </h2>

                <h3 className="text-4xl lg:text-5xl font-extrabold mb-8">
                    <span className="inline-block bg-white text-green-700 px-4 py-1 rounded">
                        {storeSection.highlight}
                    </span>
                </h3>

                <div className="flex justify-center -mb-16 relative z-10">
                    <div className="relative w-[90%] md:w-[75%] lg:w-[65%] rounded-2xl overflow-hidden">
                        <Image
                            src={storeSection.image}
                            alt={storeSection.highlight}
                            width={1000}
                            height={600}
                            className="object-contain w-full h-auto"
                            priority
                        />
                    </div>
                </div>
            </div>

            {/* Live Chat Section */}
            <div className="relative z-0">
                <div className="max-w-6xl mx-auto flex flex-col items-center">
                    <h2 className="text-3xl lg:text-4xl font-bold text-green-700 mb-10">
                        {liveChatSection.title}
                    </h2>

                    <div className="relative w-[90%] md:w-[75%] lg:w-[65%] rounded-2xl overflow-hidden">
                        <Image
                            src={liveChatSection.image}
                            alt="Live Chat Interface"
                            width={1000}
                            height={600}
                            className="object-cover w-full h-auto"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StoreDashboardFeatures;
