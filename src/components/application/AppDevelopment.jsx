// import React from 'react';
// import {
//     Users,
//     Lightbulb,
//     Monitor,
//     Zap,
//     Palette,
//     Settings,
//     Shield,
//     Headphones,
//     UserCheck
// } from 'lucide-react';

// const ServiceCard = ({ icon: Icon, title, description, isOrange = false }) => (
//     <div className="flex items-start space-x-4 mb-8">
//         <div className={`flex-shrink-0 p-3 rounded-lg ${isOrange ? 'bg-orange-100' : 'bg-blue-100'}`}>
//             <Icon className={`w-6 h-6 ${isOrange ? 'text-orange-600' : 'text-blue-600'}`} />
//         </div>
//         <div className="flex-1">
//             <div className="flex items-center space-x-2 mb-2">
//                 <div className="w-1 h-6 bg-orange-500 rounded"></div>
//                 <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
//             </div>
//             <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
//         </div>
//     </div>
// );

// export default function AppDevelopment() {
//     const services = [
//         {
//             icon: Users,
//             title: "Industry Expertise",
//             description: "With years of experience in restaurant mobile app development, we build solutions that align with the latest industry trends and technologies.",
//             isOrange: false
//         },
//         {
//             icon: Lightbulb,
//             title: "Custom Solutions",
//             description: "Our custom restaurant app development services ensure tailored features, unique branding, and seamless functionality specific to your business model.",
//             isOrange: true
//         },
//         {
//             icon: Monitor,
//             title: "Scalable Development",
//             description: "Our apps are designed for scalability, making it easy to add features or expand as your business grows.",
//             isOrange: false
//         },
//         {
//             icon: Zap,
//             title: "Cutting-Edge Technology",
//             description: "Our team utilizes AI, cloud computing, and secure payment gateways to enhance restaurant app solutions with next-gen capabilities.",
//             isOrange: true
//         },
//         {
//             icon: Palette,
//             title: "User-Centric Design",
//             description: "We focus on intuitive restaurant app design, ensuring a smooth user experience that increases customer retention and satisfaction.",
//             isOrange: false
//         },
//         {
//             icon: Settings,
//             title: "End-to-End Development",
//             description: "From consultation to deployment, we handle the complete app development services process with precision and quality.",
//             isOrange: true
//         },
//         {
//             icon: Shield,
//             title: "Secure & Reliable",
//             description: "Our restaurant app developers implement high-security standards, ensuring data protection, smooth transactions, and app reliability.",
//             isOrange: false
//         },
//         {
//             icon: Headphones,
//             title: "24/7 Support & Maintenance",
//             description: "We provide continuous app support and maintenance to keep your app updated, secure, and optimized.",
//             isOrange: true
//         },
//         {
//             icon: UserCheck,
//             title: "Flexible Hiring Models",
//             description: "Hire dedicated restaurant app developers based on your project needs—full-time, part-time, or hourly engagement options available.",
//             isOrange: false
//         }
//     ];

//     return (
//         <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4">
//             <div className="max-w-6xl mx-auto">
//                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
//                     {/* Left Column - Title */}
//                     <div className="lg:sticky lg:top-12">
//                         <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
//                             Why Choose <span className="text-orange-500">JPLoft</span> for
//                             <br />
//                             <span className="text-gray-700">Restaurant App</span>
//                             <br />
//                             <span className="text-gray-700">Development?</span>
//                         </h2>
//                         <p className="mt-6 text-gray-600 text-lg leading-relaxed">
//                             As a leading restaurant app development company, we deliver custom, feature-rich solutions tailored to your business needs. From seamless UI to advanced integrations, our expert developers ensure high performance, scalability, and customer engagement.
//                         </p>
//                     </div>

//                     {/* Right Column - Services */}
//                     <div className="space-y-2">
//                         {services.map((service, index) => (
//                             <ServiceCard
//                                 key={index}
//                                 icon={service.icon}
//                                 title={service.title}
//                                 description={service.description}
//                                 isOrange={service.isOrange}
//                             />
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }




"use client";

import React from "react";
import * as Icons from "lucide-react";

const ServiceCard = ({ icon: Icon, title, description, isGreen = false }) => (
    <div className="flex items-start space-x-4 mb-8">
        <div className={`flex-shrink-0 p-3 rounded-lg ${isGreen ? "bg-green-100" : "bg-blue-100"}`}>
            <Icon className={`w-6 h-6 ${isGreen ? "text-green-600" : "text-blue-600"}`} />
        </div>
        <div className="flex-1">
            <div className="flex items-center space-x-2 mb-2">
                <div className={`w-1 h-6 ${isGreen ? "bg-green-500" : "bg-blue-500"} rounded`}></div>
                <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
        </div>
    </div>
);

export default function AppDevelopment({ data }) {
    const { heading, description, services } = data;

    return (
        <section className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Left Column - Title & Description from JSON */}
                    <div className="lg:sticky lg:top-12">
                        <h3 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                            {heading.line1} 
                            <br />
                            <span className="text-green-500">{heading.highlight}</span> {heading.highlightSuffix ? " " + heading.highlightSuffix : ""}
                            {/* <br /> */}
                            <span className="text-gray-700">{heading.line2}</span>
                            <br />
                            <span className="text-gray-700">{heading.line3}</span>
                        </h3>
                        <p className="mt-6 text-gray-600 text-lg leading-relaxed">
                            {description}
                        </p>
                    </div>

                    {/* Right Column - Services */}
                    <div className="space-y-2">
                        {services.map((service, index) => {
                            const Icon = Icons[service.icon] || Icons.Users; // fallback icon
                            return (
                                <ServiceCard
                                    key={index}
                                    icon={Icon}
                                    title={service.title}
                                    description={service.description}
                                    isGreen={service.isGreen}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
