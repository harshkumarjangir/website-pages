"use client";
import Image from "next/image";
import ourTeamData from "@/data/ourTeamData.json";

export default function OurVisionaries() {
    const { visionaries } = ourTeamData;

    return (
        <section className="bg-black text-white py-20">
            <div className="max-w-7xl mx-auto px-6 lg:px-24">
                <div className="grid lg:grid-cols-[1fr_2fr] gap-16 items-start">
                    {/* Left Section - Title & Description */}
                    <div className="lg:sticky top-2">
                        <h2 className="text-4xl md:text-4xl mb-6">
                            {visionaries.title}
                        </h2>
                        <p className="text-white text-base leading-relaxed max-w-md">
                            {visionaries.description}
                        </p>
                    </div>

                    {/* Right Section - Grid of Leaders */}
                    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {visionaries.members.map((person) => (
                            <div key={person.name} className="text-left">
                                <div className="relative w-full aspect-square rounded-2xl overflow-hidden mb-4 shadow-md">
                                    <Image
                                        src={person.image}
                                        alt={person.name}
                                        fill
                                        className="object-cover hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                                <h3 className="text-base font-semibold">{person.name}</h3>
                                <p className="text-gray-400 text-sm mt-1">
                                    {person.designation}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
