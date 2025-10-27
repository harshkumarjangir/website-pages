import Image from "next/image";

const PartnershipSection = ({ data }) => {
    const { title, logos } = data;

    return (
        <section className="bg-white text-black py-16 px-6 md:px-16">
            <div className="mx-auto">
                <h2 className="text-3xl md:text-4xl mb-12">
                    {title}
                </h2>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10 place-items-center">
                    {logos.map((logo, index) => (
                        <div key={index} className="grayscale hover:grayscale-0 transition">
                            <Image
                                src={logo.src}
                                alt={logo.name}
                                width={150}
                                height={60}
                                className="object-contain"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
export default PartnershipSection;