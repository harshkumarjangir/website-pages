import Link from "next/link";
import { Linkedin, Twitter, Instagram, Github, Globe } from "lucide-react";
import Image from "next/image";



const OurLeaders = ({ data }) => {
    const leaders = data;

    const iconMap = {
        LinkedIn: Linkedin,
        Twitter: Twitter,
        Instagram: Instagram,
        GitHub: Github,
        Website: Globe,
    };

    return (

        <section className="relative bg-gradient-to-b from-black via-[#0a0a0a] to-black text-white py-20 overflow-hidden">
            {/* Subtle glow background */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(30,64,175,0.15)_0%,_transparent_60%)]"></div>

            <div className="relative max-w-6xl mx-auto px-4">
                {/* Section Heading */}
                {/* <div className="text-center mb-20">
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-[#1163FB] to-blue-400 bg-clip-text text-transparent">
                            {title}
                        </h2>
                        <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg leading-relaxed">
                            {description}
                        </p>
                    </div> */}

                {/* Leaders Section */}
                <div className="space-y-28">
                    {leaders.map((person, index) => (
                        <div
                            key={person.name}
                            className={`flex flex-col md:flex-row items-center gap-12 ${index % 2 !== 0 ? "md:flex-row-reverse" : ""
                                }`}
                        >
                            {/* Image */}
                            <div className="relative w-full md:w-1/2 group flex justify-center">
                                <div className="relative w-[380px] h-[380px] aspect-square rounded-3xl overflow-hidden shadow-2xl">
                                    <Image
                                        src={person.image}
                                        alt={person.name}
                                        fill
                                        className="object-cover object-center transform group-hover:scale-110 transition-transform duration-700 ease-out"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                </div>
                            </div>

                            {/* Text */}
                            <div className="w-full md:w-1/2">
                                <h3 className="text-3xl font-bold mb-2">
                                    {person.name}
                                </h3>
                                <p className="text-lg text-blue-400 mb-4">
                                    {person.designation}
                                </p>
                                <p className="text-gray-300 leading-relaxed text-base">
                                    {person.bio}
                                </p>

                                {person.buttonText && (
                                    <Link href={person.buttonUrl}>
                                        <button className="mt-6 px-6 py-2 border border-blue-400 text-blue-400 rounded-full hover:bg-blue-500 hover:text-white transition-all duration-300 cursor-pointer">
                                            {person.buttonText}
                                        </button>
                                    </Link>
                                )}

                                {/* Social Icons */}
                                {person.socials?.length > 0 && (
                                    <div className="flex gap-4 mt-6">
                                        {person.socials.map((social) => {
                                            const Icon = iconMap[social.platform] || Globe;
                                            return (
                                                <a
                                                    key={social.platform}
                                                    href={social.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="p-2 rounded-full bg-white/10 hover:bg-blue-500/30 transition-all duration-300"
                                                    title={social.platform}
                                                >
                                                    <Icon className="w-5 h-5 text-blue-400 hover:text-white transition-transform duration-300 hover:scale-110" />
                                                </a>
                                            );
                                        })}
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>



            </div>
        </section>

    )
}

export default OurLeaders