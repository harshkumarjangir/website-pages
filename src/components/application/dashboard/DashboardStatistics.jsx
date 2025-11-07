// "use client";

// import React, { useState, useEffect } from "react";
// import {
//     BarChart,
//     Bar,
//     XAxis,
//     YAxis,
//     Tooltip,
//     ResponsiveContainer,
//     PieChart,
//     Pie,
//     Cell,
// } from "recharts";


// // Dummy Sales Data
// const salesData = [
//     { name: "Jan", sales: 150 },
//     { name: "Feb", sales: 250 },
//     { name: "Mar", sales: 200 },
//     { name: "Apr", sales: 300 },
//     { name: "May", sales: 180 },
//     { name: "Jun", sales: 350 },
//     { name: "Jul", sales: 220 },
//     { name: "Aug", sales: 170 },
//     { name: "Sep", sales: 260 },
//     { name: "Oct", sales: 150 },
//     { name: "Nov", sales: 210 },
//     { name: "Dec", sales: 190 },
// ];

// // Dummy Payment Data
// const paymentData = [
//     { name: "Cash Payments", value: 56000000 },
//     { name: "Digital Payments", value: 4783 },
//     { name: "Wallet", value: 75439 },
// ];

// const COLORS = ["#16a34a", "#3b82f6", "#facc15"];

// const DashboardStatistics = () => {
//     const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

//     useEffect(() => {
//         const handleResize = () => setIsDesktop(window.innerWidth >= 768);
//         window.addEventListener("resize", handleResize);
//         return () => window.removeEventListener("resize", handleResize);
//     }, []);

//     return (
//         <div
//             className="relative min-h-screen max-md:p-2 p-6 mx-auto max-md:w-full w-[80%] bg-white"
//             style={{
//                 backgroundImage: isDesktop ? `url('/assets/home/dashboard/dashboard.png')` : "none",
//                 backgroundSize: "contain",
//                 backgroundPosition: "center",
//                 backgroundRepeat: "no-repeat",
//             }}
//         >
//             {/* Heading */}
//             <h2 className="text-2xl md:text-3xl font-bold text-center text-green-700 mb-6">
//                 Dashboard With Statistics
//             </h2>

//             {/* Feature List */}
//             <div className="flex flex-wrap justify-center gap-6 mb-10 text-green-600 font-medium">
//                 <span>Total Orders</span>
//                 <span>Overall Sales</span>
//                 <span>User Statistics</span>
//                 <span>Top Delivery Man</span>
//                 <span>Income Stats</span>
//             </div>

//             {/* Summary Cards */}
//             <div className="grid grid-cols-1 mx-auto gap-6 w-fit">
//                 <div className="p-6 bg-white rounded-2xl shadow text-center">
//                     <h3 className="text-lg font-semibold">Orders</h3>
//                     <p className="text-3xl font-bold text-green-600">30M+</p>
//                     <span className="text-sm text-gray-500">12 newly added</span>
//                 </div>
//             </div>

//             {/* Show dashboard image ONLY on mobile */}
//             <div className="w-full mt-10 flex justify-center sm:hidden">
//                 <img
//                     src="/assets/home/dashboard/dashboard.png"
//                     className="w-full"
//                     alt="mobile dashboard img"
//                 />
//             </div>

//             {/* Charts */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-20">
//                 {/* Sales Statistics */}
//                 <div className="max-md:p-2 p-6 bg-white rounded-2xl shadow">
//                     <h3 className="text-lg font-semibold mb-4">Sales Statistics</h3>
//                     <ResponsiveContainer width="100%" height={250}>
//                         <BarChart data={salesData}>
//                             <XAxis dataKey="name" />
//                             <YAxis />
//                             <Tooltip />
//                             <Bar dataKey="sales" fill="#16a34a" radius={[8, 8, 0, 0]} />
//                         </BarChart>
//                     </ResponsiveContainer>
//                 </div>

//                 {/* Payment Statistics */}
//                 <div className="max-md:p-2 p-6 bg-white rounded-2xl shadow">
//                     <h3 className="text-lg font-semibold mb-4">Payment Statistics</h3>
//                     <ResponsiveContainer width="100%" height={250}>
//                         <PieChart>
//                             <Pie
//                                 data={paymentData}
//                                 cx="50%"
//                                 cy="50%"
//                                 innerRadius={60}
//                                 outerRadius={90}
//                                 paddingAngle={5}
//                                 dataKey="value"
//                             >
//                                 {paymentData.map((entry, index) => (
//                                     <Cell key={index} fill={COLORS[index]} />
//                                 ))}
//                             </Pie>
//                         </PieChart>
//                     </ResponsiveContainer>
//                     <div className="text-center font-bold text-green-700 text-xl">
//                         $86M+ Completed Payments
//                     </div>
//                     <ul className="mt-4 text-sm text-gray-600 space-y-1">
//                         <li>💵 Cash Payments ($56M)</li>
//                         <li>💳 Digital Payments ($4,783)</li>
//                         <li>👛 Wallet ($75,439)</li>
//                     </ul>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default DashboardStatistics;




"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    PieChart,
    Pie,
    Cell,
} from "recharts";

const COLORS = ["#16a34a", "#3b82f6", "#facc15"];

export default function DashboardStatistics({ data }) {
    const stasdata = data;

    if (!stasdata) {
        return <p className="text-center text-gray-400">No dashboard data available</p>;
    }

    return (
        <div className="relative min-h-screen max-md:p-2 p-6 mx-auto max-md:w-full w-[80%] bg-white overflow-hidden rounded-2xl">
            {/* Background Image for Desktop */}

            <div className="absolute inset-0 z-0 flex justify-center items-center opacity-90 max-md:hidden">
                <Image
                    src={stasdata.image}
                    alt="Dashboard background"
                    fill
                    style={{ objectFit: "contain", objectPosition: "center" }}
                    priority
                />
            </div>


            {/* Foreground Content */}
            <div className="relative z-10">
                {/* Heading */}
                <h2 className="text-2xl md:text-3xl font-bold text-center text-green-700 mb-6">
                    {stasdata.heading}
                </h2>

                {/* Feature List */}
                <div className="flex flex-wrap justify-center gap-6 mb-10 text-green-600 font-medium">
                    {stasdata.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                            <span>{feature}</span>
                        </div>
                    ))}
                </div>


                {/* Summary Card */}
                <div className="grid grid-cols-1 mx-auto gap-6 w-fit">
                    <div className="p-6 bg-white rounded-2xl shadow text-center">
                        <h3 className="text-lg font-semibold">{stasdata.summary.title}</h3>
                        <p className="text-3xl font-bold text-green-600">{stasdata.summary.value}</p>
                        <span className="text-sm text-gray-500">{stasdata.summary.note}</span>
                    </div>
                </div>

                {/* Mobile Dashboard Image */}
                <div className="w-full mt-10 flex justify-center md:hidden">
                    <Image
                        src="/assets/home/dashboard/dashboard.png"
                        width={600}
                        height={400}
                        className="w-full h-auto"
                        alt="Mobile dashboard"
                    />
                </div>

                {/* Charts */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-20">
                    {/* Sales Statistics */}
                    <div className="max-md:p-2 p-6 bg-white/80 rounded-2xl shadow">
                        <h3 className="text-lg font-semibold mb-4">{stasdata.salesStatistics.salesTitle}</h3>
                        <ResponsiveContainer width="100%" height={250}>
                            <BarChart data={stasdata.salesStatistics.salesData}>
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Bar dataKey="sales" fill="#16a34a" radius={[8, 8, 0, 0]} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>

                    {/* Payment Statistics */}
                    <div className="max-md:p-2 p-6 bg-white/80 rounded-2xl shadow">
                        <h3 className="text-lg font-semibold mb-4">{stasdata.paymentStatistics.paymentTitle}</h3>
                        <ResponsiveContainer width="100%" height={250}>
                            <PieChart>
                                <Pie
                                    data={stasdata.paymentStatistics.paymentData}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={60}
                                    outerRadius={90}
                                    paddingAngle={5}
                                    dataKey="value"
                                >
                                    {stasdata.paymentStatistics.paymentData.map((entry, index) => (
                                        <Cell key={index} fill={COLORS[index]} />
                                    ))}
                                </Pie>
                            </PieChart>
                        </ResponsiveContainer>

                        <div className="text-center font-bold text-green-700 text-xl">
                            {stasdata.paymentStatistics.completedPayments}
                        </div>

                        <ul className="mt-4 text-sm text-gray-600 space-y-1">
                            {stasdata.paymentStatistics.paymentBreakdown.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
