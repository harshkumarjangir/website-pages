"use client";

import Image from "next/image";

const BusinessInterfaces = ({ data }) => {
    // console.log(data)
    const { heading, image } = data;

    return (
        <section className="bg-green-50 py-16 px-6 lg:px-20 text-center">
            {/* Heading */}
            {/* <h2 className="text-3xl lg:text-4xl font-bold text-green-700 mb-12">
                {heading.split(" for ").map((part, idx) => (
                    <React.Fragment key={idx}>
                        {part}
                        {idx === 0 && <br className="hidden md:block" />}
                        {idx === 0 && " for "}
                    </React.Fragment>
                ))}
            </h2> */}

            {/* Phone mockup image */}
            <div className="flex justify-center z-50">
                <div className="relative rounded-2xl max-w-full w-[90%] md:w-[70%] lg:w-[60%] h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
                    <Image
                        src={image}
                        alt={heading}
                        fill
                        style={{ objectFit: "contain" }}
                    />
                </div>

            </div>
        </section>
    );
};

export default BusinessInterfaces;
