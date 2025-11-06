"use client";

import { useState, useEffect } from "react";
import {
    Instagram,
    Twitter,
    Linkedin,
    Plus,
    Minus,
    MapPin,
    Mail,
    Phone,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const iconMap = {
    Instagram,
    Twitter,
    Linkedin,
};

// Add this map for address icons
const addressIconMap = {
    location: MapPin,
    email: Mail,
    phone: Phone,
};

export default function Footer() {
    const [openIndex, setOpenIndex] = useState(null);
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchFooter = async () => {
            try {
                // const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/footer`);
                const res = await fetch('/footer.json');
                if (!res.ok) throw new Error('Failed to fetch footer');
                const serverData = await res.json();

                // Merge with fallback data to ensure all fields exist
                setData({
                    ...serverData,
                    columns: serverData.columns,
                    socials: serverData.socials,
                    links: serverData.links,
                });
            } catch (error) {
                console.warn('Using fallback footer data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchFooter();
    }, []);

    // console.log("Footer Data", data);


    const toggleAccordion = (idx) => {
        setOpenIndex(openIndex === idx ? null : idx);
    };

    if (loading) {
        return <div className="bg-[#1D1D25] h-96"></div>; // Skeleton loading
    }

    return (
        <footer className="bg-[#1D1D25] text-gray-300">
            {/* Footer Top */}
            <div className="container mx-auto px-10 py-10">
                {/* Desktop Grid */}
                <div className="hidden md:grid md:grid-cols-6 gap-3">
                    {data.columns.map((col, idx) => (
                        <div key={idx}>
                            <h3 className="text-lg font-semibold mb-4">{col.title}</h3>
                            <ul className="space-y-2 text-sm">
                                {col.links?.map((link, i) => (
                                    <li key={i} className="flex items-center first:items-start gap-2">
                                        {col.title === "Address" && link.icon && (() => {
                                            const AddressIcon = addressIconMap[link.icon];
                                            return AddressIcon ? (
                                                <AddressIcon className="w-4 h-4 flex-shrink-0 " />
                                            ) : null;
                                        })()}
                                        <a href={col.title === "Address" ? link.url : `/${link.url}`}
                                            className="hover:underline inline-flex items-center">
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Mobile Accordion */}
                <div className="md:hidden space-y-4">
                    {data.columns.map((col, idx) => (
                        <div key={idx} className="border-b border-gray-700 pb-2">
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
                                                    <a href={`/${link.url}`} className="hover:underline">
                                                        {link.label}
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="bg-[#15151F] py-8">
                <div className="container mx-auto px-6 flex flex-col gap-6">
                    {/* DMCA + Description */}
                    <motion.div
                        className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="flex items-center gap-4">
                            <p className="max-w-md text-sm text-gray-400">
                                {data.description}
                            </p>
                        </div>

                        <motion.div
                            className="flex flex-col md:flex-row justify-between items-center gap-6"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >

                            <div className="flex flex-col md:flex-row md:items-center gap-6">
                                <p className="text-sm text-gray-400">{data.copyright}</p>
                                <ul className="flex gap-6 text-sm">
                                    {data.links?.map((l, i) => (
                                        <li key={i}>
                                            <a href={`/${l.url}`} className="hover:underline">
                                                {l.label}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <ul className="flex gap-4 text-xl">
                                {data.socials?.map((s, i) => {
                                    const Icon = iconMap[s.icon];
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
                                                className="hover:text-white"
                                            >
                                                <Icon className="w-5 h-5" />
                                            </a>
                                        </motion.li>
                                    ) : null;
                                })}
                            </ul>
                        </motion.div>
                    </motion.div>

                    {/* <hr className="border-gray-700" /> */}


                </div>
            </div>
        </footer>
    );
}