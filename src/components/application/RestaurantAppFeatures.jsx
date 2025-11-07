// 'use client';

// import { useState } from "react";
// import { CheckCircle } from "lucide-react";
// import Image from "next/image";

// const panels = ["User Panel", "Restaurant Panel", "Driver Panel", "Admin Panel"];

// const features = [
//   "Easy Sign-Up",
//   "Restaurant Search",
//   "Online Ordering",
//   "Order Tracking",
//   "Reviews & Ratings",
//   "Wishlist & Favorites",
//   "Loyalty Rewards",
//   "Social Media Login",
//   "Referral Program",
//   "Profile Management",
//   "Table Reservations",
//   "Menu Browsing",
//   "Multiple Payment Options",
//   "Push Notifications",
//   "Promo Codes",
//   "Order History",
//   "Live Chat Support",
//   "Multi-Language Support",
// ];

// export default function RestaurantAppFeatures() {
//   const [activeTab, setActiveTab] = useState("User Panel");

//   return (
//     <section className="bg-black text-white py-16 sm:py-20 lg:py-24 px-4 sm:px-6 relative overflow-hidden">
//       {/* Subtle gradient overlay */}
//       <div className="absolute inset-0 bg-gradient-to-b from-neutral-900 via-black to-neutral-900 opacity-90" />

//       <div className="relative max-w-7xl mx-auto text-center">
//         {/* Heading */}
//         <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium mb-6 sm:mb-10 leading-tight tracking-tight">
//           Key Features of Our <span className="text-[#1163FB]">Restaurant App</span> Solutions
//         </h2>


//         {/* Tabs */}
//         <div className="mb-8 sm:mb-12 lg:mb-16 flex justify-center">
//           <div className="flex space-x-3 sm:space-x-5 overflow-x-auto no-scrollbar pb-2 sm:pb-0">
//             {panels.map((panel) => (
//               <button
//                 key={panel}
//                 onClick={() => setActiveTab(panel)}
//                 className={`px-4 sm:px-6 py-2 rounded-full font-medium text-sm sm:text-base transition-all duration-300 ${activeTab === panel
//                     ? "bg-[#1163FB] text-white shadow-lg shadow-[#00FF99]/30"
//                     : "bg-neutral-800 text-gray-300 hover:bg-neutral-700 hover:text-white"
//                   }`}
//               >
//                 {panel}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Main Content */}
//         <div className="relative bg-white/10 rounded-2xl border border-neutral-800 p-8 sm:p-10 lg:p-14 flex flex-col lg:flex-row items-center gap-10 lg:gap-14 shadow-2xl shadow-black/40">
//           {/* Features List */}
//           <div className="w-full lg:flex-1 order-2 lg:order-1">
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 text-left">
//               {features.map((feature, index) => (
//                 <div
//                   key={index}
//                   className="flex items-start space-x-3 group transition-all duration-300 hover:translate-x-1"
//                 >
//                   <CheckCircle className="w-5 h-5 text-[#1163FB] mt-1 flex-shrink-0 transition-transform group-hover:scale-110" />
//                   <span className="text-sm sm:text-base text-gray-300 group-hover:text-white transition-colors duration-300">
//                     {feature}
//                   </span>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Image Section */}
//           <div className="w-full sm:w-80 lg:w-96 lg:flex-1 order-1 lg:order-2 flex justify-center">

//             <Image
//               src="/assets/ResturantFeature/restaurent-app-hire.webp"
//               alt="Restaurant App Mockup"
//               width={400}          // ✅ Width defined
//               height={400}         // ✅ Height defined
//               className="object-contain rounded-xl w-full h-auto"
//               priority
//             />

//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }



// "use client";

// import { useState } from "react";
// import { CheckCircle } from "lucide-react";
// import Image from "next/image";

// export default function RestaurantAppFeatures({ data }) {
//   const { heading, highlight, panels, image } = data;

//   const [activeTab, setActiveTab] = useState(panels[0].name);

//   // Find features for the current active tab
//   const currentFeatures = panels.find(panel => panel.name === activeTab)?.features || [];

//   return (
//     <section className="bg-black text-white py-16 sm:py-20 lg:py-24 px-4 sm:px-6 relative overflow-hidden">
//       <div className="relative max-w-7xl mx-auto text-center">
//         <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium mb-6 sm:mb-10 leading-tight tracking-tight">
//           {heading} <span className="text-[#16a34a]">{highlight}</span>
//         </h2>

//         {/* Tabs */}
//         <div className="mb-8 sm:mb-12 lg:mb-16 flex justify-center">
//           <div className="flex space-x-3 sm:space-x-5 overflow-x-auto no-scrollbar pb-2 sm:pb-0">
//             {panels.map((panel) => (
//               <button
//                 key={panel.name}
//                 onClick={() => setActiveTab(panel.name)}
//                 className={`px-4 sm:px-6 py-2 rounded-lg font-medium text-sm sm:text-base text-nowrap transition-all duration-300 cursor-pointer ${activeTab === panel.name
//                     ? "bg-[#16a34a] text-white"
//                     : "bg-neutral-800 text-gray-300 hover:bg-neutral-700 hover:text-white"
//                   }`}
//               >
//                 {panel.name}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Main Content */}
//         <div className="relative bg-white/10 rounded-2xl border border-neutral-800 p-8 sm:p-10 lg:p-14 flex flex-col lg:flex-row items-center gap-10 lg:gap-14 shadow-2xl shadow-black/40">
//           {/* Features List */}
//           <div className="w-full lg:flex-1 order-2 lg:order-1">
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 text-left">
//               {currentFeatures.map((feature, index) => (
//                 <div
//                   key={index}
//                   className="flex items-start space-x-3 group transition-all duration-300 hover:translate-x-1"
//                 >
//                   <CheckCircle className="w-5 h-5 text-[#16a34a] mt-1 flex-shrink-0 transition-transform group-hover:scale-110" />
//                   <span className="text-sm sm:text-base text-gray-300 group-hover:text-white transition-colors duration-300">
//                     {feature}
//                   </span>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Image */}
//           <div className="w-full sm:w-80 lg:w-96 bg-white/5 lg:flex-1 order-1 lg:order-2 flex justify-center p-2 rounded-xl">
//             <Image
//               src={image}
//               alt="Restaurant App Mockup"
//               width={400}
//               height={400}
//               className="object-contain rounded-xl w-full h-auto"
//               priority
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }





"use client";

import { useState } from "react";
import { CheckCircle } from "lucide-react";
import Image from "next/image";

export default function RestaurantAppFeatures({ data }) {
  const { heading, highlight, panels } = data;

  const [activeTab, setActiveTab] = useState(panels[0].name);

  // Get features and image for current panel
  const currentPanel = panels.find(panel => panel.name === activeTab);
  const currentFeatures = currentPanel?.features || [];
  const currentImage = currentPanel?.image || "";

  return (
    <section className="bg-black text-white py-16 sm:py-20 lg:py-24 px-4 sm:px-6 relative overflow-hidden">
      <div className="relative max-w-7xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium mb-6 sm:mb-10 leading-tight tracking-tight">
          {heading} <span className="text-[#16a34a]">{highlight}</span>
        </h2>

        {/* Tabs */}
        <div className="mb-8 sm:mb-12 lg:mb-16 flex justify-center">
          <div className="flex space-x-3 sm:space-x-5 overflow-x-auto no-scrollbar pb-2 sm:pb-0">
            {panels.map((panel) => (
              <button
                key={panel.name}
                onClick={() => setActiveTab(panel.name)}
                className={`px-4 sm:px-6 py-2 rounded-lg font-medium text-sm sm:text-base text-nowrap transition-all duration-300 cursor-pointer ${activeTab === panel.name
                    ? "bg-[#16a34a] text-white"
                    : "bg-neutral-800 text-gray-300 hover:bg-neutral-700 hover:text-white"
                  }`}
              >
                {panel.name}
              </button>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="relative bg-white/10 rounded-2xl border border-neutral-800 p-8 sm:p-10 lg:p-14 flex flex-col lg:flex-row items-center gap-10 lg:gap-14 shadow-2xl shadow-black/40">
          {/* Features List */}
          <div className="w-full lg:flex-1 order-2 lg:order-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 text-left">
              {currentFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-3 group transition-all duration-300 hover:translate-x-1"
                >
                  <CheckCircle className="w-5 h-5 text-[#16a34a] mt-1 flex-shrink-0 transition-transform group-hover:scale-110" />
                  <span className="text-sm sm:text-base text-gray-300 group-hover:text-white transition-colors duration-300">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="w-full sm:w-80 lg:w-96 bg-white/5 lg:flex-1 order-1 lg:order-2 flex justify-center p-2 rounded-xl">
            {currentImage && (
              <Image
                src={currentImage}
                alt={`${activeTab} Mockup`}
                width={400}
                height={400}
                className="object-contain rounded-xl w-full h-auto"
                priority
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
