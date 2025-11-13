"use client";
import Image from "next/image";


export default function Team({ data }) {
    const team = data;

    return (
        <section className="bg-black text-white py-20">
            <div className="max-w-7xl mx-auto px-6 lg:px-24">
                {/* ===== Header ===== */}
                <div className="bg-black text-center mx-auto mb-12 py-2">
                    <h2 className="text-4xl md:text-4xl mb-4">{team.title}</h2>
                    <p className="text-white text-base leading-relaxed">{team.description}</p>
                </div>

                {/* ===== Team Grid ===== */}
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {team.members.map((member, index) => (
                        <div key={index} className="text-center">
                            <div className="relative w-full h-32 md:h-36 lg:h-40 aspect-[4/5] rounded-xl overflow-hidden mb-4">
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    fill
                                    className="object-cover object-center hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <h3 className="text-base font-semibold">{member.name}</h3>
                            <p className="text-gray-400 text-sm">{member.designation}</p>
                            <p className="text-gray-400 text-sm">{member.experience}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
