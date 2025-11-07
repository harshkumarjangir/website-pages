// "use client";
// import React from "react";
// import Image from "next/image";

// const DashboardFeatures = () => {
//     const features = [
//         {
//             title: (
//                 <>
//                     Multi Business{" "}
//                     <span className="bg-green-200 px-2 rounded">in One Dashboard</span>
//                 </>
//             ),
//             points: ["Grocery", "Pharmacy", "eCommerce", "Food", "Parcel"],
//             img: "/assets/home/dashboard/multi-business.png",
//             bg: "bg-white",
//         },
//         {
//             title: (
//                 <>
//                     Easy to Manage{" "}
//                     <span className="bg-green-200 px-2 rounded">Multi-Store</span>
//                 </>
//             ),
//             points: ["Total Stores", "Inactive Stores", "New Stores", "Store Requests"],
//             img: "/assets/home/dashboard/multi-store.png",
//             bg: "bg-green-50",
//         },
//         {
//             title: (
//                 <>
//                     Smart{" "}
//                     <span className="bg-green-200 px-2 rounded">Dispatch Management</span>
//                 </>
//             ),
//             points: [
//                 "Module-Based Overview",
//                 "Map With Satellite-Based Tracking",
//                 "Dispatch Overview",
//             ],
//             img: "/assets/home/dashboard/dispatch-management.png",
//             bg: "bg-white",
//         },
//         {
//             title: (
//                 <>
//                     Store-Wise{" "}
//                     <span className="bg-green-200 px-2 rounded">Dedicated POS</span>
//                 </>
//             ),
//             points: [
//                 "Product Section",
//                 "Billing Section",
//                 "Customer Selection",
//                 "Delivery Information",
//                 "Payment Method",
//             ],
//             img: "/assets/home/dashboard/dedicated-pos.png",
//             bg: "bg-green-50",
//         },
//         {
//             title: (
//                 <>
//                     Manage{" "}
//                     <span className="bg-green-200 px-2 rounded">
//                         Promotions to Boost Sales
//                     </span>
//                 </>
//             ),
//             points: [
//                 "Customized campaign",
//                 "Zone-wise banners",
//                 "Coupon creation",
//                 "Push notifications",
//                 "Customer-specific campaign",
//             ],
//             img: "/assets/home/dashboard/promotions.png",
//             bg: "bg-white",
//         },
//         {
//             title: (
//                 <>
//                     User <span className="bg-green-200 px-2 rounded">Overview</span>
//                 </>
//             ),
//             points: [
//                 "Customer statistics",
//                 "Customer growth",
//                 "Total employee",
//                 "Delivery Man activity",
//                 "Top delivery man",
//             ],
//             img: "/assets/home/dashboard/user-overview.png",
//             bg: "bg-green-50",
//         },
//     ];

//     return (
//         <div className="w-full">
//             {features.map((feature, i) => (
//                 <div key={i} className={`${feature.bg} py-16 px-6 lg:px-20`}>
//                     <div
//                         className={`max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10 ${i % 2 === 1 ? "md:flex-row-reverse" : ""
//                             }`}
//                     >
//                         {/* Image */}
//                         <div className="w-full md:w-1/2">
//                             <Image
//                                 src={feature.img}
//                                 alt="feature"
//                                 width={600}
//                                 height={400}
//                                 className="rounded-2xl shadow-lg"
//                             />
//                         </div>

//                         {/* Content */}
//                         <div className="w-full md:w-1/2">
//                             <h2 className="text-2xl lg:text-3xl font-bold text-green-700 mb-6">
//                                 {feature.title}
//                             </h2>
//                             <ul className="space-y-3">
//                                 {feature.points.map((point, idx) => (
//                                     <li key={idx} className="flex items-start gap-2 text-gray-700">
//                                         <span className="text-green-500 mt-1">✔</span>
//                                         <span>{point}</span>
//                                     </li>
//                                 ))}
//                             </ul>
//                         </div>
//                     </div>
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default DashboardFeatures;




"use client";
import React from "react";
import Image from "next/image";

const DashboardFeatures = ({ data }) => {
    const { title, description, features } = data;

    if (!features.length) return null;

    return (
        <section className="w-full py-20">
            {/* Section Heading */}
            <div className="text-center mb-16 px-6">
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
                    {title}
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    {description}
                </p>
            </div>

            {/* Feature Blocks */}
            {features.map((feature, i) => (
                <div key={i} className={`${feature.bg} py-16 px-6 lg:px-20`}>
                    <div
                        className={`max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 transition-all duration-500 ${i % 2 === 1 ? "md:flex-row-reverse" : ""
                            }`}
                    >
                        {/* Image */}
                        <div className="w-full md:w-1/2 flex justify-center">
                            <div className="relative w-full max-w-md h-72">
                                <Image
                                    src={feature.img}
                                    alt={feature.title}
                                    fill
                                    className="object-contain rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                        </div>

                        {/* Text Content */}
                        <div className="w-full md:w-1/2 max-md:mx-auto flex flex-col justify-center items-center">
                            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 leading-snug">
                                {feature.title.split(feature.highlight)[0]}
                                <span className="bg-green-200 px-2 py-1 rounded text-green-800">
                                    {feature.highlight}
                                </span>
                            </h3>

                            <ul className="space-y-3 text-gray-700">
                                {feature.points.map((point, idx) => (
                                    <li
                                        key={idx}
                                        className="flex items-start gap-3 text-lg hover:text-green-700 transition-colors"
                                    >
                                        {/* Green dot */}
                                        <span className="w-2.5 h-2.5 bg-green-500 rounded-full mt-2.5 flex-shrink-0"></span>
                                        {point}
                                    </li>
                                ))}
                            </ul>

                        </div>
                    </div>
                </div>
            ))}
        </section>
    );
};

export default DashboardFeatures;
