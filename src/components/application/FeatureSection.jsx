// import { LayoutDashboard, Store, MapPin, MonitorSmartphone, Settings, Languages } from "lucide-react";

// export default function FeatureSection() {
//   return (
//     <section className="bg-gradient-to-b from-green-700 to-green-600 text-white py-16 px-6">
//       <div className="max-w-7xl mx-auto">
//         {/* Heading */}
//         <h2 className="text-center text-3xl md:text-4xl font-bold mb-4">
//           TOP FEATURES
//         </h2>
//         <p className="text-center text-sm md:text-base max-w-2xl mx-auto mb-12 text-gray-100">
//           Our vast modules & features are designed to make your business
//           unique from others in the market for rapid growth.
//         </p>

//         {/* Top Features */}
//         <div className="grid md:grid-cols-2 gap-6 items-center">
//           {/* Feature List */}
//           <div className="space-y-6">
//             <div className="flex items-start bg-white text-gray-800 p-4 rounded-xl shadow">
//               <LayoutDashboard className="w-10 h-10 text-green-600 mr-4" />
//               <div>
//                 <h3 className="font-semibold text-lg">Multi-Business in One Dashboard</h3>
//                 <p className="text-sm text-gray-600">
//                   Manage different types of businesses centrally.
//                 </p>
//               </div>
//             </div>

//             <div className="flex items-start bg-white text-gray-800 p-4 rounded-xl shadow">
//               <Store className="w-10 h-10 text-green-600 mr-4" />
//               <div>
//                 <h3 className="font-semibold text-lg">Multi-Vendor Management</h3>
//                 <p className="text-sm text-gray-600">
//                   Add unlimited vendors in each business module.
//                 </p>
//               </div>
//             </div>

//             <div className="flex items-start bg-white text-gray-800 p-4 rounded-xl shadow">
//               <MapPin className="w-10 h-10 text-green-600 mr-4" />
//               <div>
//                 <h3 className="font-semibold text-lg">Zone-Wise Business Management</h3>
//                 <p className="text-sm text-gray-600">
//                   Manage business in a target area smoothly.
//                 </p>
//               </div>
//             </div>

//             <div className="flex items-start bg-white text-gray-800 p-4 rounded-xl shadow">
//               <MonitorSmartphone className="w-10 h-10 text-green-600 mr-4" />
//               <div>
//                 <h3 className="font-semibold text-lg">Dedicated POS for Each Module</h3>
//                 <p className="text-sm text-gray-600">
//                   Get a dedicated POS integrated for each business module.
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Feature Images */}
//           <div className="flex flex-col md:flex-row justify-center items-center gap-4 relative">
//             <img
//               src="/assets/home/featureSection/dashboard.png"
//               alt="Dashboard Preview"
//               className="md:absolute md:-top-52 max-md:mt-10 rounded-xl shadow-lg w-72 md:w-96 h-72 -rotate-12"
//             />
//             <img
//               src="/assets/home/featureSection/dashboardmobile.png"
//               alt="Mobile App Preview"
//               className="md:absolute md:-bottom-80 md:right-20 rounded-xl shadow-lg w-32 md:w-32 h-64 -rotate-12"
//             />
//           </div>
//         </div>

//         {/* Advanced Features */}
//         <div className="mt-20">
//           <h3 className="text-center text-2xl md:text-3xl font-bold text-white mb-12">
//             Advanced Features
//           </h3>

//           <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 text-gray-800">
//             <div className="bg-white p-6 rounded-xl shadow text-center">
//               <Settings className="w-10 h-10 mx-auto text-green-600 mb-3" />
//               <h4 className="font-semibold">Module Management</h4>
//               <p className="text-sm text-gray-600 mt-2">
//                 Manage, update & add new business modules anytime.
//               </p>
//             </div>

//             <div className="bg-white p-6 rounded-xl shadow text-center">
//               <MonitorSmartphone className="w-10 h-10 mx-auto text-green-600 mb-3" />
//               <h4 className="font-semibold">Web & App Settings</h4>
//               <p className="text-sm text-gray-600 mt-2">
//                 Set up your landing page, mobile apps, and APIs easily.
//               </p>
//             </div>

//             <div className="bg-white p-6 rounded-xl shadow text-center">
//               <Languages className="w-10 h-10 mx-auto text-green-600 mb-3" />
//               <h4 className="font-semibold">Multi-Language Setup</h4>
//               <p className="text-sm text-gray-600 mt-2">
//                 Add unlimited languages to give a native feel to customers.
//               </p>
//             </div>

//             <div className="bg-white p-6 rounded-xl shadow text-center">
//               <Store className="w-10 h-10 mx-auto text-green-600 mb-3" />
//               <h4 className="font-semibold">POS Integration</h4>
//               <p className="text-sm text-gray-600 mt-2">
//                 Integrate POS for smooth business operations.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }





"use client";
import React from "react";
import Image from "next/image";
import {
  LayoutDashboard,
  Store,
  MapPin,
  MonitorSmartphone,
  Settings,
  Languages,
} from "lucide-react";

const ICONS = {
  LayoutDashboard,
  Store,
  MapPin,
  MonitorSmartphone,
  Settings,
  Languages,
};

export default function FeatureSection({ data }) {
  const { title, subtitle, features, images, advancedFeatures } = data;
  if (!data) return null;

  return (
    <section className="bg-gradient-to-b from-green-900 to-green-700 text-white py-20 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Heading */}
        <h2 className="text-center text-3xl md:text-4xl font-extrabold mb-4 tracking-wide">
          {title.toUpperCase()}
        </h2>
        <p className="text-center text-sm md:text-base max-w-2xl mx-auto mb-12 text-green-100">
          {subtitle}
        </p>

        {/* Top Features */}
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Feature List */}
          <div className="space-y-6">
            {features.map((feature, i) => {
              const Icon = ICONS[feature.icon];
              return (
                <div
                  key={i}
                  className="flex items-start bg-white text-gray-800 p-5 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
                >
                  <div className="p-3 bg-green-100 rounded-xl mr-4">
                    <Icon className="w-7 h-7 text-green-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-green-800">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Feature Images */}
          <div className="flex flex-col md:flex-col justify-center items-center gap-6 relative">
            <Image
              src={images.dashboard}
              alt="Dashboard Preview"
              width={550}
              height={450}
              className="rounded-2xl shadow-lg md:rotate-[-8deg] hover:rotate-0 transition-transform duration-500"
            />
            <Image
              src={images.mobile}
              alt="Mobile App Preview"
              width={150}
              height={280}
              className="rounded-2xl shadow-lg md:rotate-[10deg] hover:rotate-0 transition-transform duration-500"
            />
          </div>
        </div>

        {/* Advanced Features */}
        <div className="mt-24">
          <h3 className="text-center text-2xl md:text-3xl font-bold mb-12 text-green-50">
            Advanced Features
          </h3>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {advancedFeatures.map((feature, i) => {
              const Icon = ICONS[feature.icon];
              return (
                <div
                  key={i}
                  className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition-all duration-300 text-center text-gray-800"
                >
                  <Icon className="w-10 h-10 mx-auto text-green-700 mb-3" />
                  <h4 className="font-semibold text-lg">{feature.title}</h4>
                  <p className="text-sm text-gray-600 mt-2">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-green-500/20 via-transparent to-transparent blur-3xl"></div>
    </section>
  );
}







// "use client";
// import React from "react";
// import Image from "next/image";
// import {
//   LayoutDashboard,
//   Store,
//   MapPin,
//   MonitorSmartphone,
//   Settings,
//   Languages,
// } from "lucide-react";

// const ICONS = {
//   LayoutDashboard,
//   Store,
//   MapPin,
//   MonitorSmartphone,
//   Settings,
//   Languages,
// };

// export default function FeatureSection({ data }) {
//   const { title, subtitle, features, images, advancedFeatures } = data;
//   if (!data) return null;

//   return (
//     <section className="bg-gradient-to-b from-blue-900 to-blue-700 text-white py-20 px-6 relative overflow-hidden">
//       <div className="max-w-7xl mx-auto relative z-10">
//         {/* Heading */}
//         <h2 className="text-center text-3xl md:text-4xl font-extrabold mb-4 tracking-wide">
//           {title.toUpperCase()}
//         </h2>
//         <p className="text-center text-sm md:text-base max-w-2xl mx-auto mb-12 text-blue-100">
//           {subtitle}
//         </p>

//         {/* Top Features */}
//         <div className="grid md:grid-cols-2 gap-8 items-center">
//           {/* Feature List */}
//           <div className="space-y-6">
//             {features.map((feature, i) => {
//               const Icon = ICONS[feature.icon];
//               return (
//                 <div
//                   key={i}
//                   className="flex items-start bg-white text-gray-800 p-5 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
//                 >
//                   <div className="p-3 bg-blue-100 rounded-xl mr-4">
//                     <Icon className="w-7 h-7 text-blue-700" />
//                   </div>
//                   <div>
//                     <h3 className="font-semibold text-lg text-blue-800">
//                       {feature.title}
//                     </h3>
//                     <p className="text-sm text-gray-600 mt-1">
//                       {feature.description}
//                     </p>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>

//           {/* Feature Images */}
//           <div className="flex flex-col md:flex-row justify-center items-center gap-6 relative">
//             <Image
//               src={images.dashboard}
//               alt="Dashboard Preview"
//               width={400}
//               height={400}
//               className="rounded-2xl shadow-lg md:rotate-[-8deg] hover:rotate-0 transition-transform duration-500"
//             />
//             <Image
//               src={images.mobile}
//               alt="Mobile App Preview"
//               width={180}
//               height={320}
//               className="rounded-2xl shadow-lg md:rotate-[10deg] hover:rotate-0 transition-transform duration-500"
//             />
//           </div>
//         </div>

//         {/* Advanced Features */}
//         <div className="mt-24">
//           <h3 className="text-center text-2xl md:text-3xl font-bold mb-12 text-blue-50">
//             Advanced Features
//           </h3>

//           <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
//             {advancedFeatures.map((feature, i) => {
//               const Icon = ICONS[feature.icon];
//               return (
//                 <div
//                   key={i}
//                   className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition-all duration-300 text-center text-gray-800"
//                 >
//                   <Icon className="w-10 h-10 mx-auto text-blue-700 mb-3" />
//                   <h4 className="font-semibold text-lg">{feature.title}</h4>
//                   <p className="text-sm text-gray-600 mt-2">
//                     {feature.description}
//                   </p>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </div>

//       {/* Decorative gradient overlay */}
//       <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-500/20 via-transparent to-transparent blur-3xl"></div>
//     </section>
//   );
// }
