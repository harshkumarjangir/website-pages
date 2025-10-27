"use client";

import React, { useState } from "react";
import Image from "next/image";
// import homeData from "@/data/homeData.json";
import { Check, Cpu, Globe, ImageIcon } from "lucide-react";

// Small service navigation button
const ServiceButton = ({ icon: Icon, label, isActive, onClick }) => (
    <button
        onClick={onClick}
        className={`min-w-32 flex flex-col items-center gap-2 px-6 py-4 rounded-2xl transition-all duration-300 cursor-pointer ${isActive
            ? "bg-white/10 border-2 border-white/20"
            : "bg-transparent border-2 border-transparent hover:bg-white/5"
            }`}
    >
        <Icon className="w-8 h-8 text-white" />
        <span className="text-white text-sm font-medium whitespace-nowrap">{label}</span>
    </button>
);

// Feature list item
const FeatureItem = ({ text }) => (
    <div className="flex items-center gap-3 mb-4">
        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#1163FB] flex items-center justify-center">
            <Check className="w-5 h-5 text-white" strokeWidth={3} />
        </div>
        <span className="text-white text-lg font-medium">{text}</span>
    </div>
);

export default function OurServices({data}) {
    const services = data || [];
    const [activeService, setActiveService] = useState(services[0]?.id || "");

    // Choose different icons for variety
    const iconMap = {
        blockchain: Cpu,
        metaverse: Globe,
        nft: ImageIcon,
        blockchain2: Cpu,
        metaverse2: Globe,
        nft2: ImageIcon,
        blockchain3: Cpu,
        metaverse3: Globe,
        nft3: ImageIcon,
        blockchain4: Cpu,
        metaverse4: Globe,
        nft4: ImageIcon,
    };

    const currentService =
        services.find((s) => s.id === activeService) || services[0];

    return (
        <section className="min-h-screen w-full bg-gradient-to-br bg-black p-8">
            {/* Top Buttons */}
            <div className="mb-16 overflow-x-auto no-scrollbar">
                <div className="flex gap-4 min-w-max max-sm:px-2 px-4 justify-center">
                    {services.map((service) => {
                        const Icon = iconMap[service.id] || Cpu;
                        return (
                            <ServiceButton
                                key={service.id}
                                icon={Icon}
                                label={service.id.charAt(0).toUpperCase() + service.id.slice(1)}
                                isActive={activeService === service.id}
                                onClick={() => setActiveService(service.id)}
                            />
                        );
                    })}
                </div>
            </div>

            <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

            {/* Main Section */}
            {currentService && (
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Text Content */}
                        <div className="transition-all duration-500">
                            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight">
                                {currentService.title}
                            </h2>

                            <div className="md:hidden relative">
                                <div className="rounded-3xl overflow-hidden shadow-2xl">
                                    <Image
                                        src={currentService.image}
                                        alt={currentService.title}
                                        width={800}
                                        height={600}
                                        className="w-full h-full object-cover transition-all duration-500"
                                    />
                                </div>
                                <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-blue-500/10 to-purple-500/10 pointer-events-none" />
                            </div>

                            <div className="mt-10 max-h-[280px] overflow-y-auto no-scrollbar pr-2">
                                {currentService.items?.map((item, i) => (
                                    <FeatureItem key={i} text={item} />
                                ))}
                            </div>
                        </div>

                        {/* Image */}
                        <div className="max-md:hidden relative">
                            <div className="rounded-3xl overflow-hidden shadow-2xl">
                                <Image
                                    src={currentService.image}
                                    alt={currentService.title}
                                    width={800}
                                    height={600}
                                    className="w-full h-full object-cover transition-all duration-500"
                                />
                            </div>
                            <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-blue-500/10 to-purple-500/10 pointer-events-none" />
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
