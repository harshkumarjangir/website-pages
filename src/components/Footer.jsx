// "use client";

// import { useState, useEffect } from "react";
// import {
//     Plus,
//     Minus,
//     MapPin,
//     Mail,
//     Phone,
// } from "lucide-react";
// import {
//     Facebook,
//     Twitter,
//     Linkedin,
//     Youtube,
//     Instagram,
//     Pinterest,
//     Globe,
// } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";
// import Image from "next/image";

// const iconMap = {
//     Instagram,
//     Twitter,
//     Linkedin,
// };

// // Add this map for address icons
// const addressIconMap = {
//     location: MapPin,
//     email: Mail,
//     phone: Phone,
// };

// export default function Footer() {
//     const [openIndex, setOpenIndex] = useState(null);
//     const [data, setData] = useState();
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         const fetchFooter = async () => {
//             try {
//                 // const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/footer`);
//                 const res = await fetch('/footer.json');
//                 if (!res.ok) throw new Error('Failed to fetch footer');
//                 const serverData = await res.json();

//                 // Merge with fallback data to ensure all fields exist
//                 setData({
//                     ...serverData,
//                     columns: serverData.columns,
//                     socials: serverData.socials,
//                     links: serverData.links,
//                 });
//             } catch (error) {
//                 console.warn('Using fallback footer data:', error);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchFooter();
//     }, []);

//     // console.log("Footer Data", data);


//     const toggleAccordion = (idx) => {
//         setOpenIndex(openIndex === idx ? null : idx);
//     };

//     if (loading) {
//         return <div className="bg-[#1D1D25] h-96"></div>; // Skeleton loading
//     }
//     const iconMap = {
//         Facebook,
//         Twitter,
//         Linkedin,
//         Youtube,
//         Instagram,
//         Pinterest,
//         GoogleMyBusiness: Globe, // placeholder for GMB
//     };

//     return (
//         <footer className="bg-[#1D1D25] text-gray-300">
//             {/* Footer Top */}
//             <div className="container mx-auto px-10 py-10">
//                 {/* Desktop Grid */}
//                 <div className="hidden md:grid md:grid-cols-6 gap-3">
//                     {data.columns.map((col, idx) => (
//                         <div key={idx}>
//                             <h3 className="text-lg font-semibold mb-4">{col.title}</h3>
//                             <ul className="space-y-2 text-sm">
//                                 {col.links?.map((link, i) => (
//                                     <li key={i} className="flex items-center first:items-start gap-2">
//                                         {col.title === "Address" && link.icon && (() => {
//                                             const AddressIcon = addressIconMap[link.icon];
//                                             return AddressIcon ? (
//                                                 <AddressIcon className="w-4 h-4 flex-shrink-0 " />
//                                             ) : null;
//                                         })()}
//                                         <a href={col.title === "Address" ? link.url : `/${link.url}`}
//                                             className="hover:underline inline-flex items-center">
//                                             {link.label}
//                                         </a>
//                                     </li>
//                                 ))}
//                             </ul>
//                         </div>
//                     ))}
//                 </div>

//                 {/* Mobile Accordion */}
//                 <div className="md:hidden space-y-4">
//                     {data.columns.map((col, idx) => (
//                         <div key={idx} className="border-b border-gray-700 pb-2">
//                             <button
//                                 onClick={() => toggleAccordion(idx)}
//                                 className="flex justify-between items-center w-full text-left text-lg font-semibold"
//                             >
//                                 {col.title}
//                                 {openIndex === idx ? (
//                                     <Minus className="w-5 h-5" />
//                                 ) : (
//                                     <Plus className="w-5 h-5" />
//                                 )}
//                             </button>

//                             <AnimatePresence initial={false}>
//                                 {openIndex === idx && (
//                                     <motion.div
//                                         key="content"
//                                         initial={{ height: 0, opacity: 0 }}
//                                         animate={{ height: "auto", opacity: 1 }}
//                                         exit={{ height: 0, opacity: 0 }}
//                                         transition={{ duration: 0.3, ease: "easeInOut" }}
//                                     >
//                                         <ul className="mt-2 space-y-2 text-sm overflow-hidden">
//                                             {col.links?.map((link, i) => (
//                                                 <li key={i}>
//                                                     <a href={`/${link.url}`} className="hover:underline">
//                                                         {link.label}
//                                                     </a>
//                                                 </li>
//                                             ))}
//                                         </ul>
//                                     </motion.div>
//                                 )}
//                             </AnimatePresence>
//                         </div>
//                     ))}
//                 </div>
//             </div>

//             {/* Footer Bottom */}
//             <div className="bg-[#15151F] py-8">
//                 <div className="container mx-auto px-6 flex flex-col gap-6">
//                     {/* DMCA + Description */}
//                     <motion.div
//                         className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
//                         initial={{ opacity: 0, y: 30 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.6 }}
//                     >
//                         <div className="flex items-center gap-4">
//                             <p className="max-w-md text-sm text-gray-400">
//                                 {data.description}
//                             </p>
//                         </div>

//                         <p className="text-sm text-gray-400">{data.copyright}</p>

//                         <motion.div
//                             className="flex flex-col md:flex-row justify-between items-center gap-6"
//                             initial={{ opacity: 0, y: 30 }}
//                             animate={{ opacity: 1, y: 0 }}
//                             transition={{ duration: 0.6, delay: 0.2 }}
//                         >

//                             {/* <div className="flex flex-col md:flex-row md:items-center gap-6">
//                                 <p className="text-sm text-gray-400">{data.copyright}</p>
//                                 <ul className="flex gap-6 text-sm">
//                                     {data.links?.map((l, i) => (
//                                         <li key={i}>
//                                             <a href={`/${l.url}`} className="hover:underline">
//                                                 {l.label}
//                                             </a>
//                                         </li>
//                                     ))}
//                                 </ul>
//                             </div> */}

//                             {/* <ul className="flex gap-4 text-xl">
//                                 {data.socials?.map((s, i) => {
//                                     const Icon = iconMap[s.icon];
//                                     return Icon ? (
//                                         <motion.li
//                                             key={i}
//                                             whileHover={{ scale: 1.2 }}
//                                             whileTap={{ scale: 0.9 }}
//                                         >
//                                             <a
//                                                 href={s.url}
//                                                 target="_blank"
//                                                 rel="noreferrer"
//                                                 className="hover:text-white"
//                                             >
//                                                 <Icon className="w-5 h-5" />
//                                             </a>
//                                         </motion.li>
//                                     ) : null;
//                                 })}
//                             </ul> */}
//                             <ul className="flex gap-4 text-xl">
//                                 {data.socials?.map((s, i) => {
//                                     const Icon = iconMap[s.icon];
//                                     return Icon ? (
//                                         <motion.li
//                                             key={i}
//                                             whileHover={{ scale: 1.2 }}
//                                             whileTap={{ scale: 0.9 }}
//                                         >
//                                             <a
//                                                 href={s.url}
//                                                 target="_blank"
//                                                 rel="noreferrer"
//                                                 aria-label={s.name}
//                                                 className="text-gray-400 hover:text-white transition-colors"
//                                             >
//                                                 <Icon className="w-5 h-5" />
//                                             </a>
//                                         </motion.li>
//                                     ) : null;
//                                 })}
//                             </ul>

//                         </motion.div>
//                     </motion.div>



//                 </div>
//             </div>
//         </footer>
//     );
// }





// "use client";

// import { useState, useEffect } from "react";
// import {
//     Plus,
//     Minus,
//     MapPin,
//     Mail,
//     Phone,
//     Facebook,
//     Twitter,
//     Linkedin,
//     Youtube,
//     Instagram,
//     Pinterest,
//     Globe,
// } from "lucide-react";
// import { FaPinterest } from "react-icons/fa";
// import { motion, AnimatePresence } from "framer-motion";
// import Image from "next/image";

// const addressIconMap = {
//     location: MapPin,
//     email: Mail,
//     phone: Phone,
// };

// const socialIconMap = {
//     Facebook,
//     Twitter,
//     Linkedin,
//     Youtube,
//     Instagram,
//     Pinterest: FaPinterest,
//     GoogleMyBusiness: Globe, // placeholder for GMB
// };

// export default function Footer() {
//     const [openIndex, setOpenIndex] = useState(null);
//     const [data, setData] = useState();
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         const fetchFooter = async () => {
//             try {
//                 // If footer.json is in /public
//                 const res = await fetch("/footer.json");
//                 if (!res.ok) throw new Error("Failed to fetch footer");
//                 const json = await res.json();

//                 setData({
//                     ...json,
//                     columns: json.columns || [],
//                     socials: json.socials || [],
//                     links: json.links || [],
//                 });
//             } catch (error) {
//                 console.warn("Using fallback footer data:", error);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchFooter();
//     }, []);

//     const toggleAccordion = (idx) => {
//         setOpenIndex(openIndex === idx ? null : idx);
//     };

//     if (loading) {
//         return <div className="bg-[#1D1D25] h-96"></div>;
//     }

//     return (
//         <footer className="bg-[#1D1D25] text-gray-300">
//             {/* ===== Top Section ===== */}
//             <div className="container mx-auto px-6 md:px-10 py-10">
//                 {/* Desktop Grid */}
//                 <div className="hidden md:grid md:grid-cols-6 gap-6">
//                     {data.columns.map((col, idx) => (
//                         <div key={idx}>
//                             <h3 className="text-lg font-semibold mb-4">{col.title}</h3>
//                             <ul className="space-y-2 text-sm">
//                                 {col.links?.map((link, i) => (
//                                     <li
//                                         key={i}
//                                         className="flex items-center first:items-start gap-2"
//                                     >
//                                         {col.title === "Address" && link.icon && (() => {
//                                             const AddressIcon = addressIconMap[link.icon];
//                                             return AddressIcon ? (
//                                                 <AddressIcon className="w-4 h-4 flex-shrink-0" />
//                                             ) : null;
//                                         })()}
//                                         <a
//                                             href={
//                                                 col.title === "Address"
//                                                     ? link.url
//                                                     : `/${link.url || "#"}`
//                                             }
//                                             className="hover:underline inline-flex items-center"
//                                         >
//                                             {link.label}
//                                         </a>
//                                     </li>
//                                 ))}
//                             </ul>
//                         </div>
//                     ))}
//                 </div>

//                 {/* Mobile Accordion */}
//                 <div className="md:hidden space-y-4">
//                     {data.columns.map((col, idx) => (
//                         <div key={idx} className="border-b border-gray-700 pb-2">
//                             <button
//                                 onClick={() => toggleAccordion(idx)}
//                                 className="flex justify-between items-center w-full text-left text-lg font-semibold"
//                             >
//                                 {col.title}
//                                 {openIndex === idx ? (
//                                     <Minus className="w-5 h-5" />
//                                 ) : (
//                                     <Plus className="w-5 h-5" />
//                                 )}
//                             </button>

//                             <AnimatePresence initial={false}>
//                                 {openIndex === idx && (
//                                     <motion.div
//                                         key="content"
//                                         initial={{ height: 0, opacity: 0 }}
//                                         animate={{ height: "auto", opacity: 1 }}
//                                         exit={{ height: 0, opacity: 0 }}
//                                         transition={{ duration: 0.3, ease: "easeInOut" }}
//                                     >
//                                         <ul className="mt-2 space-y-2 text-sm overflow-hidden">
//                                             {col.links?.map((link, i) => (
//                                                 <li key={i}>
//                                                     <a
//                                                         href={`/${link.url || "#"}`}
//                                                         className="hover:underline"
//                                                     >
//                                                         {link.label}
//                                                     </a>
//                                                 </li>
//                                             ))}
//                                         </ul>
//                                     </motion.div>
//                                 )}
//                             </AnimatePresence>
//                         </div>
//                     ))}
//                 </div>
//             </div>

//             {/* ===== Bottom Section ===== */}
//             <div className="bg-[#15151F] py-8">
//                 <div className="container mx-auto px-6 flex flex-col gap-6">
//                     <motion.div
//                         className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
//                         initial={{ opacity: 0, y: 30 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.6 }}
//                     >
//                         {/* Description */}
//                         <p className="max-w-md text-sm text-gray-400">
//                             {data.description}
//                         </p>

//                         {/* Copyright */}
//                         <p className="text-sm text-gray-400">{data.copyright}</p>

//                         {/* Social Icons */}
//                         <motion.ul
//                             className="flex gap-4 text-xl"
//                             initial={{ opacity: 0, y: 30 }}
//                             animate={{ opacity: 1, y: 0 }}
//                             transition={{ duration: 0.6, delay: 0.2 }}
//                         >
//                             {data.socials?.map((s, i) => {
//                                 const Icon = socialIconMap[s.icon];
//                                 return Icon ? (
//                                     <motion.li
//                                         key={i}
//                                         whileHover={{ scale: 1.2 }}
//                                         whileTap={{ scale: 0.9 }}
//                                     >
//                                         <a
//                                             href={s.url}
//                                             target="_blank"
//                                             rel="noreferrer"
//                                             aria-label={s.name}
//                                             className="text-gray-400 hover:text-white transition-colors"
//                                         >
//                                             <Icon className="w-5 h-5" />
//                                         </a>
//                                     </motion.li>
//                                 ) : null;
//                             })}
//                         </motion.ul>
//                     </motion.div>
//                 </div>
//             </div>
//         </footer>
//     );
// }







// "use client";

// import { useState, useEffect } from "react";
// import {
//     Plus,
//     Minus,
//     MapPin,
//     Mail,
//     Phone,
//     Facebook,
//     Twitter,
//     Linkedin,
//     Youtube,
//     Instagram,
//     Globe,
// } from "lucide-react";
// import { FaPinterest, FaGoogle } from "react-icons/fa";
// import { motion, AnimatePresence } from "framer-motion";

// // --- Icon Maps ---
// const addressIconMap = {
//     location: MapPin,
//     email: Mail,
//     phone: Phone,
// };

// const socialIconMap = {
//     Facebook,
//     Twitter,
//     Linkedin,
//     Youtube,
//     Instagram,
//     Pinterest: FaPinterest,
//     GoogleMyBusiness: FaGoogle,
// };

// // --- Hover Color Map ---
// const hoverColors = {
//     Facebook: "hover:text-[#1877F2]", // Blue
//     Twitter: "hover:text-[#1DA1F2]", // Sky Blue
//     Linkedin: "hover:text-[#0077B5]", // LinkedIn Blue
//     Youtube: "hover:text-[#FF0000]", // Red
//     Instagram: "hover:text-[#E4405F]", // Pink
//     Pinterest: "hover:text-[#E60023]", // Red
//     GoogleMyBusiness: "hover:text-[#4285F4]", // Google Blue
// };

// export default function Footer() {
//     const [openIndex, setOpenIndex] = useState(null);
//     const [data, setData] = useState();
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         const fetchFooter = async () => {
//             try {
//                 const res = await fetch("/footer.json");
//                 if (!res.ok) throw new Error("Failed to fetch footer");
//                 const serverData = await res.json();

//                 setData({
//                     ...serverData,
//                     columns: serverData.columns,
//                     socials: serverData.socials,
//                     links: serverData.links,
//                 });
//             } catch (error) {
//                 console.warn("Using fallback footer data:", error);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchFooter();
//     }, []);

//     const toggleAccordion = (idx) => {
//         setOpenIndex(openIndex === idx ? null : idx);
//     };

//     if (loading) return <div className="bg-[#1D1D25] h-96"></div>;

//     return (
//         <footer className="bg-[#1D1D25] text-gray-300">
//             {/* Footer Top */}
//             <div className="container mx-auto px-10 py-10">
//                 {/* Desktop Grid */}
//                 <div className="hidden md:grid md:grid-cols-6 gap-3">
//                     {data.columns?.map((col, idx) => (
//                         <div key={idx}>
//                             <h3 className="text-lg font-semibold mb-4">{col.title}</h3>
//                             <ul className="space-y-2 text-sm">
//                                 {col.links?.map((link, i) => (
//                                     <li
//                                         key={i}
//                                         className="flex items-center first:items-start gap-2"
//                                     >
//                                         {col.title === "Address" && link.icon && (() => {
//                                             const AddressIcon = addressIconMap[link.icon];
//                                             return AddressIcon ? (
//                                                 <AddressIcon className="w-4 h-4 flex-shrink-0" />
//                                             ) : null;
//                                         })()}
//                                         <a
//                                             href={
//                                                 col.title === "Address" ? link.url : `/${link.url}`
//                                             }
//                                             className="hover:underline inline-flex items-center"
//                                         >
//                                             {link.label}
//                                         </a>
//                                     </li>
//                                 ))}
//                             </ul>
//                         </div>
//                     ))}
//                 </div>

//                 {/* Mobile Accordion */}
//                 <div className="md:hidden space-y-4">
//                     {data.columns?.map((col, idx) => (
//                         <div key={idx} className="border-b border-gray-700 pb-2">
//                             <button
//                                 onClick={() => toggleAccordion(idx)}
//                                 className="flex justify-between items-center w-full text-left text-lg font-semibold"
//                             >
//                                 {col.title}
//                                 {openIndex === idx ? (
//                                     <Minus className="w-5 h-5" />
//                                 ) : (
//                                     <Plus className="w-5 h-5" />
//                                 )}
//                             </button>

//                             <AnimatePresence initial={false}>
//                                 {openIndex === idx && (
//                                     <motion.div
//                                         key="content"
//                                         initial={{ height: 0, opacity: 0 }}
//                                         animate={{ height: "auto", opacity: 1 }}
//                                         exit={{ height: 0, opacity: 0 }}
//                                         transition={{ duration: 0.3, ease: "easeInOut" }}
//                                     >
//                                         <ul className="mt-2 space-y-2 text-sm overflow-hidden">
//                                             {col.links?.map((link, i) => (
//                                                 <li key={i}>
//                                                     <a
//                                                         href={`/${link.url}`}
//                                                         className="hover:underline"
//                                                     >
//                                                         {link.label}
//                                                     </a>
//                                                 </li>
//                                             ))}
//                                         </ul>
//                                     </motion.div>
//                                 )}
//                             </AnimatePresence>
//                         </div>
//                     ))}
//                 </div>
//             </div>

//             {/* Footer Bottom */}
//             <div className="bg-[#15151F] py-8">
//                 <div className="container mx-auto px-6 flex flex-col gap-6">
//                     <motion.div
//                         className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
//                         initial={{ opacity: 0, y: 30 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.6 }}
//                     >
//                         <p className="max-w-md text-sm text-gray-400">{data.description}</p>

//                         <p className="text-sm text-gray-400 max-md:order-3">{data.copyright}</p>

//                         <ul className="flex gap-4 text-xl">
//                             {data.socials?.map((s, i) => {
//                                 const Icon = socialIconMap[s.icon];
//                                 const colorClass = hoverColors[s.icon] || "hover:text-white";
//                                 return Icon ? (
//                                     <motion.li
//                                         key={i}
//                                         whileHover={{ scale: 1.2 }}
//                                         whileTap={{ scale: 0.9 }}
//                                     >
//                                         <a
//                                             href={s.url}
//                                             target="_blank"
//                                             rel="noreferrer"
//                                             aria-label={s.name}
//                                             className={`text-gray-400 transition-colors ${colorClass}`}
//                                         >
//                                             <Icon className="w-8 h-8" />
//                                         </a>
//                                     </motion.li>
//                                 ) : null;
//                             })}
//                         </ul>
//                     </motion.div>
//                 </div>
//             </div>
//         </footer>
//     );
// }







"use client";

import { useState, useEffect } from "react";
import {
    Plus,
    Minus,
    MapPin,
    Mail,
    Phone,
    Facebook,
    Twitter,
    Linkedin,
    Youtube,
    Instagram,
    Globe,
} from "lucide-react";
import { IconBrandX } from "@tabler/icons-react";
import { FaPinterest, FaGoogle } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

// --- Icon Maps ---
const addressIconMap = {
    location: MapPin,
    email: Mail,
    phone: Phone,
};

const socialIconMap = {
    Facebook,
    IconBrandX,
    Linkedin,
    Youtube,
    Instagram,
    Pinterest: FaPinterest,
    GoogleMyBusiness: FaGoogle,
};

// --- Hover Color Map ---
const hoverColors = {
    Facebook: "hover:text-[#1877F2]", // Blue
    Twitter: "hover:text-[#1DA1F2]", // Sky Blue
    Linkedin: "hover:text-[#0077B5]", // LinkedIn Blue
    Youtube: "hover:text-[#FF0000]", // Red
    Instagram: "hover:text-[#E4405F]", // Pink
    Pinterest: "hover:text-[#E60023]", // Red
    GoogleMyBusiness: "hover:text-[#4285F4]", // Google Blue
};

export default function Footer() {
    const [openIndex, setOpenIndex] = useState(null);
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchFooter = async () => {
            try {
                const res = await fetch("/footer.json");
                if (!res.ok) throw new Error("Failed to fetch footer");
                const serverData = await res.json();

                setData({
                    ...serverData,
                    columns: serverData.columns,
                    socials: serverData.socials,
                    links: serverData.links,
                });
            } catch (error) {
                console.warn("Using fallback footer data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchFooter();
    }, []);

    const toggleAccordion = (idx) => {
        setOpenIndex(openIndex === idx ? null : idx);
    };

    if (loading) return <div className="bg-[#1D1D25] h-96"></div>;

    return (
        <footer className="bg-[#1D1D25] text-gray-300">
            {/* Footer Top */}
            <div className="mx-auto px-10 py-10">
                {/* Desktop Grid */}
                <div className="hidden md:grid md:grid-cols-3 xl:grid-cols-6 gap-3">
                    {data.columns?.map((col, idx) => (
                        <div key={idx}>
                            {/* Special layout for logo + QR column */}
                            {col.logo ? (
                                <div className="flex flex-col items-start gap-4">
                                    <Image
                                        src={col.logo}
                                        alt="Company Logo"
                                        width={200}
                                        height={120}
                                        className=" object-contain"
                                    />
                                    {col.description && (
                                        <p className="text-sm text-gray-400">{col.description}</p>
                                    )}
                                    {col.qrCode && (
                                        // <img
                                        //     src={col.qrCode}
                                        //     alt="Company QR Code"
                                        //     className="w-30 h-30 object-contain border border-gray-700 rounded-lg p-1"
                                        // />
                                        <Image
                                            src={col.qrCode}
                                            alt="Company QR Code"
                                            width={120} // approximate 30 * 4px
                                            height={120}
                                            className="object-contain border border-gray-700 rounded-lg p-1"
                                        />
                                    )}
                                </div>
                            ) : (
                                <>
                                    <h3 className="text-lg font-semibold mb-4">{col.title}</h3>
                                    <ul className="space-y-2 text-sm">
                                        {col.links?.map((link, i) => (
                                            <li
                                                key={i}
                                                className="flex items-center first:items-start gap-2"
                                            >
                                                {col.title === "Address" &&
                                                    link.icon &&
                                                    (() => {
                                                        const AddressIcon = addressIconMap[link.icon];
                                                        return AddressIcon ? (
                                                            <AddressIcon className="w-4 h-4 flex-shrink-0" />
                                                        ) : null;
                                                    })()}
                                                <a
                                                    href={
                                                        col.title === "Address"
                                                            ? link.url
                                                            : `/${link.url}`
                                                    }
                                                    className="hover:underline inline-flex items-center"
                                                >
                                                    {link.label}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </>
                            )}
                        </div>
                    ))}
                </div>

                {/* Mobile Accordion */}
                <div className="md:hidden space-y-4">
                    {data.columns?.map((col, idx) => (
                        <div key={idx} className="border-b border-gray-700 pb-2">
                            {col.logo ? (
                                <div className="flex flex-col items-center gap-3 py-4">
                                    <Image
                                        src={col.logo}
                                        alt="Company Logo"
                                        width={112}      // w-28 → 112px
                                        height={100}
                                        className="h-auto"
                                    />

                                    {col.qrCode && (
                                        // <img
                                        //     src={col.qrCode}
                                        //     alt="Company QR Code"
                                        //     className="w-20 h-20 object-contain border border-gray-700 rounded-lg p-1"
                                        // />
                                        <div className="w-20 h-20 border border-gray-700 rounded-lg p-1 relative">
                                            <Image
                                                src={col.qrCode}
                                                alt="Company QR Code"
                                                fill
                                                className="object-contain"
                                            />
                                        </div>
                                    )}
                                    {col.description && (
                                        <p className="text-center text-sm text-gray-400">
                                            {col.description}
                                        </p>
                                    )}
                                </div>
                            ) : (
                                <>
                                    <button
                                        onClick={() => toggleAccordion(idx)}
                                        className="flex justify-between items-center w-full text-left text-lg font-semibold"
                                    >
                                        {col.title}
                                        {openIndex === idx ? (
                                            <Minus className="w-5 h-5" />
                                        ) : (
                                            <Plus className="w-5 h-5" />
                                        )}
                                    </button>

                                    <AnimatePresence initial={false}>
                                        {openIndex === idx && (
                                            <motion.div
                                                key="content"
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                            >
                                                <ul className="mt-2 space-y-2 text-sm overflow-hidden">
                                                    {col.links?.map((link, i) => (
                                                        <li key={i}>
                                                            <a
                                                                href={`/${link.url}`}
                                                                className="hover:underline"
                                                            >
                                                                {link.label}
                                                            </a>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="bg-[#15151F] py-8">
                <div className="mx-auto px-6 flex flex-col gap-6">
                    <motion.div
                        className="flex flex-col lg:flex-row items-center md:items-center justify-between gap-6"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        {/* max-w-md */}
                        <p className="max-lg:w-fit lg:max-w-md text-sm text-gray-400">
                            {data.description}
                        </p>

                        <p className="text-sm text-gray-400 max-lg:order-3">
                            {data.copyright}
                        </p>

                        <ul className="flex gap-4 text-xl">
                            {data.socials?.map((s, i) => {
                                const Icon = socialIconMap[s.icon];
                                const colorClass = hoverColors[s.icon] || "hover:text-white";
                                return Icon ? (
                                    <motion.li
                                        key={i}
                                        whileHover={{ scale: 1.2 }}
                                        whileTap={{ scale: 0.9 }}
                                    >
                                        <a
                                            href={s.url}
                                            target="_blank"
                                            rel="noreferrer"
                                            aria-label={s.name}
                                            className={`text-gray-400 transition-colors ${colorClass}`}
                                        >
                                            <Icon className="w-8 h-8" />
                                        </a>
                                    </motion.li>
                                ) : null;
                            })}
                        </ul>
                    </motion.div>
                </div>
            </div>
        </footer>
    );
}
