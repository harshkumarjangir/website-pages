// "use client";

// import { useState } from "react";
// import { ChevronDown } from "lucide-react";

// export default function FAQ({ data }) {
//     const { title, subtitle, faqs } = data;
//     const [openItems, setOpenItems] = useState(new Set());

//     const toggleItem = (id) => {
//         const updated = new Set(openItems);
//         if (updated.has(id)) updated.delete(id);
//         else updated.add(id);
//         setOpenItems(updated);
//     };

//     return (
//         <section className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4">
//             <div className="max-w-4xl mx-auto">
//                 {/* Header */}
//                 <div className="text-center mb-12">
//                     <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
//                         {title}
//                     </h2>
//                     <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-teal-600 mx-auto mb-6"></div>
//                     <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//                         {subtitle}
//                     </p>
//                 </div>

//                 {/* FAQ Items */}
//                 {/* <div className="space-y-4">
//                     {faqs.map((item) => (
//                         <div
//                             key={item.id}
//                             className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-all duration-300"
//                         >
//                             <button
//                                 onClick={() => toggleItem(item.id)}
//                                 className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
//                             >
//                                 <div className="flex items-center space-x-4">
//                                     <span className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-green-500 to-teal-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">
//                                         {item.id}
//                                     </span>
//                                     <h3 className="text-lg font-semibold text-gray-900 pr-4">
//                                         {item.question}
//                                     </h3>
//                                 </div>
//                                 <ChevronDown
//                                     className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${openItems.has(item.id) ? "rotate-180" : ""
//                                         }`}
//                                 />
//                             </button>

//                             <div
//                                 className={`transition-all duration-300 ease-in-out ${openItems.has(item.id)
//                                     ? "max-h-96 opacity-100"
//                                     : "max-h-0 opacity-0"
//                                     }`}
//                             >
//                                 <div className="px-6 pb-6 ml-12">
//                                     <div className="w-full h-px bg-gray-200 mb-4"></div>
//                                     <p className="text-gray-600 leading-relaxed">{item.answer}</p>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div> */}
//                 {/* FAQ Items */}
//                 <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2">
//                     {faqs.map((item) => (
//                         <div
//                             key={item.id}
//                             className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-all duration-300"
//                         >
//                             <button
//                                 onClick={() => toggleItem(item.id)}
//                                 className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
//                             >
//                                 <div className="flex items-center space-x-4">
//                                     <span className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-green-500 to-teal-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">
//                                         {item.id}
//                                     </span>
//                                     <h3 className="text-lg font-semibold text-gray-900 pr-4">
//                                         {item.question}
//                                     </h3>
//                                 </div>
//                                 <ChevronDown
//                                     className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${openItems.has(item.id) ? "rotate-180" : ""}`}
//                                 />
//                             </button>

//                             <div
//                                 className={`transition-all duration-300 ease-in-out ${openItems.has(item.id) ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
//                             >
//                                 <div className="px-6 pb-6 ml-12">
//                                     <div className="w-full h-px bg-gray-200 mb-4"></div>
//                                     <p className="text-gray-600 leading-relaxed">{item.answer}</p>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>

//             </div>
//         </section>
//     );
// }









// "use client";

// import { useState } from "react";
// import { ChevronDown } from "lucide-react";

// export default function FAQ({ data }) {
//     const { title, subtitle, faqs } = data;
//     const [openItemId, setOpenItemId] = useState(null); // store single open item

//     const toggleItem = (id) => {
//         if (openItemId === id) setOpenItemId(null); // close if already open
//         else setOpenItemId(id); // open the new one
//     };

//     return (
//         <section className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4">
//             <div className="max-w-7xl mx-auto">
//                 {/* Header */}
//                 <div className="text-center mb-12">
//                     <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
//                         {title}
//                     </h2>
//                     <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-teal-600 mx-auto mb-6"></div>
//                     <p className="text-lg text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
//                 </div>

//                 {/* FAQ Items Grid */}
//                 <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
//                     {faqs.map((item) => (
//                         <div key={item.id}>
//                             <div
//                                 className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-all duration-300"
//                             >
//                                 {/* Question Button */}
//                                 <button
//                                     onClick={() => toggleItem(item.id)}
//                                     className="w-full min-h-30 px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
//                                 >
//                                     <div className="flex items-center space-x-4">
//                                         <span className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-green-500 to-teal-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">
//                                             {item.id}
//                                         </span>
//                                         <h3 className="text-lg font-semibold text-gray-900 pr-4">
//                                             {item.question}
//                                         </h3>
//                                     </div>
//                                     <ChevronDown
//                                         className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${openItemId === item.id ? "rotate-180" : ""
//                                             }`}
//                                     />
//                                 </button>

//                                 {/* Answer Content */}
//                                 <div
//                                     className="overflow-hidden transition-[height] duration-300 ease-in-out"
//                                     style={{
//                                         height: openItemId === item.id ? "auto" : "0px",
//                                     }}
//                                 >
//                                     <div className="px-6 pb-6 ml-12">
//                                         <div className="w-full h-px bg-gray-200 mb-4"></div>
//                                         <p className="text-gray-600 leading-relaxed">{item.answer}</p>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </section >
//     );
// }






"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQ({ data }) {
    const { title, subtitle, faqs } = data;
    const [openItemId, setOpenItemId] = useState(null); // store single open item

    const toggleItem = (id) => {
        if (openItemId === id) setOpenItemId(null); // close if already open
        else setOpenItemId(id); // open the new one
    };

    return (
        <section className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        {title}
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-teal-600 mx-auto mb-6"></div>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
                </div>

                {/* FAQ Items Flex Container */}
                <div className="flex flex-wrap -mx-3">
                    {faqs.map((item) => (
                        <div
                            key={item.id}
                            className="w-full md:w-1/2 px-2 mb-3" // 1 per row on mobile, 2 per row on md+
                        >
                            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-all duration-300">
                                {/* Question Button */}
                                <button
                                    onClick={() => toggleItem(item.id)}
                                    className="w-full px-4 py-2 md:py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                                >
                                    <div className="flex items-center space-x-4">
                                        <span className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-green-500 to-teal-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                                            {item.id}
                                        </span>
                                        <h3 className="text-sm md:text-lg font-semibold text-gray-900 pr-4">
                                            {item.question}
                                        </h3>
                                    </div>
                                    <ChevronDown
                                        className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${openItemId === item.id ? "rotate-180" : ""
                                            }`}
                                    />
                                </button>

                                {/* Answer Content */}
                                <div
                                    className="overflow-hidden transition-[height] duration-300 ease-in-out"
                                    style={{
                                        height: openItemId === item.id ? "auto" : "0px",
                                    }}
                                >
                                    <div className="px-4 pb-2 ml-12">
                                        <div className="w-full h-px bg-gray-200 mb-4"></div>
                                        <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
