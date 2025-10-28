"use client";
import Image from "next/image";

import ourTeamData from "@/data/ourTeamData.json"

export default function OurTeam() {
    const { founders, team } = ourTeamData.ourTeamData;

    return (
        <section className="bg-black text-white py-16">
            <div className="max-w-6xl mx-auto px-4">
                {/* Section Heading */}
                <h2 className="text-4xl font-bold text-center mb-12">Our Team</h2>

                {/* Founder & CTO Section */}
                <div className="space-y-20">
                    {founders.map((person, index) => (
                        <div
                            key={person.name}
                            className={`flex flex-col md:flex-row items-center gap-10 ${index % 2 !== 0 ? "md:flex-row-reverse" : ""
                                }`}
                        >
                            {/* Image */}
                            <div className="w-full md:w-1/2">
                                <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-lg">
                                    <Image
                                        src={person.image}
                                        alt={person.name}
                                        fill
                                        className="object-cover hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                            </div>

                            {/* Text */}
                            <div className="w-full md:w-1/2">
                                <h3 className="text-3xl font-semibold mb-3">{person.name}</h3>
                                <p className="text-xl text-gray-400 mb-4">{person.role}</p>
                                <p className="text-gray-300 leading-relaxed">{person.bio}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Team Members Section */}
                <div className="mt-24">
                    <h3 className="text-3xl font-bold text-center mb-12">
                        Meet Our Team
                    </h3>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
                        {team.map((member) => (
                            <div
                                key={member.name}
                                className="bg-gray-900 rounded-2xl p-6 text-center hover:bg-gray-800 transition"
                            >
                                <div className="relative w-40 h-40 mx-auto mb-5 rounded-full overflow-hidden">
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <h4 className="text-xl font-semibold">{member.name}</h4>
                                <p className="text-gray-400 text-sm mb-3">{member.role}</p>
                                <p className="text-gray-300 text-sm">{member.bio}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
