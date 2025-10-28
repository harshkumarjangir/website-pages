"use client";
import Image from "next/image";
import ourTeamData from "@/data/ourTeamData.json";
import {
    Linkedin,
    Twitter,
    Instagram,
    Github,
    Globe,
} from "lucide-react";

export default function OurTeam() {
    const { title, description, leaders, team } = ourTeamData;

    // Map platform names to icons
    const iconMap = {
        LinkedIn: Linkedin,
        Twitter: Twitter,
        Instagram: Instagram,
        GitHub: Github,
        Website: Globe,
    };

    return (
        <section className="bg-black text-white py-16">
            <div className="max-w-6xl mx-auto px-4">
                {/* Section Heading */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold">{title}</h2>
                    <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                        {description}
                    </p>
                </div>

                {/* Leaders Section */}
                <div className="space-y-20">
                    {leaders.map((person, index) => (
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
                                <h3 className="text-3xl font-semibold mb-3">
                                    {person.name}
                                </h3>
                                <p className="text-xl text-gray-400 mb-4">
                                    {person.designation}
                                </p>
                                <p className="text-gray-300 leading-relaxed">{person.bio}</p>

                                {person.buttonText && (
                                    <button className="mt-5 text-blue-400 hover:text-blue-500 font-medium">
                                        {person.buttonText}
                                    </button>
                                )}

                                {/* Social Icons */}
                                {person.socials && person.socials.length > 0 && (
                                    <div className="flex gap-4 mt-6">
                                        {person.socials.map((social) => {
                                            const Icon = iconMap[social.platform] || Globe;
                                            return (
                                                <a
                                                    key={social.platform}
                                                    href={social.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="p-2 bg-white/10 rounded-full hover:bg-blue-500/20 transition"
                                                    title={social.platform}
                                                >
                                                    <Icon className="w-5 h-5 text-blue-400 hover:text-blue-300 transition" />
                                                </a>
                                            );
                                        })}
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Team Members Section */}
                <div className="mt-24">
                    <h3 className="text-3xl font-bold text-center mb-6">
                        {team.title}
                    </h3>

                    <p className="text-gray-400 my-4 max-w-3xl mx-auto">
                        {team.description}
                    </p>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
                        {team.members.map((member) => (
                            <div
                                key={member.name}
                                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300"
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
                                <p className="text-gray-400 text-sm mb-3">
                                    {member.designation}
                                </p>
                                <p className="text-gray-300 text-sm">{member.bio}</p>

                                {/* Social Icons */}
                                {member.socials && member.socials.length > 0 && (
                                    <div className="flex justify-center gap-4 mt-4">
                                        {member.socials.map((social) => {
                                            const Icon = iconMap[social.platform] || Globe;
                                            return (
                                                <a
                                                    key={social.platform}
                                                    href={social.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="p-2 bg-white/10 rounded-full hover:bg-blue-500/20 transition"
                                                    title={social.platform}
                                                >
                                                    <Icon className="w-5 h-5 text-blue-400 hover:text-blue-300 transition" />
                                                </a>
                                            );
                                        })}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
