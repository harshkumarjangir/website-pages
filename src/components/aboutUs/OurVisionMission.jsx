"use client";

import Image from "next/image";

export default function OurVisionMission({ data }) {
    const { ourVision, ourMission } = data;

    const Section = ({ title, paragraphs, image, imageAlt, reverse }) => (
        <div
            className={`grid md:grid-cols-2 gap-12 items-center mb-0 ${reverse ? "md:flex-row-reverse" : ""
                }`}
        >
            {/* === Image === */}
            <div className={`relative flex justify-center ${reverse ? "md:order-2" : ""}`}>
                <div className="relative w-[90%] aspect-[4/5] md:w-[80%] overflow-hidden">
                    <Image
                        src={image}
                        alt={imageAlt}
                        fill
                        className="object-contain object-center"
                    />
                </div>
            </div>

            {/* === Text === */}
            <div className={`space-y-5 ${reverse ? "md:order-1" : ""}`}>
                <h2 className="text-3xl md:text-4xl font-bold mb-3">{title}</h2>
                <div className="w-20 h-[3px] bg-blue-600 mb-4"></div>
                {paragraphs.map((para, idx) => (
                    <p
                        key={idx}
                        className="text-base md:text-lg leading-relaxed text-gray-700"
                    >
                        {para}
                    </p>
                ))}
            </div>
        </div>
    );

    return (
        <section className="w-full bg-white text-gray-800 py-0">
            <div className="max-w-7xl mx-auto px-6 md:px-20">
                {/* Vision: image left, text right */}
                <Section
                    title={ourVision.title}
                    paragraphs={ourVision.paragraphs}
                    image={ourVision.image}
                    imageAlt={ourVision.imageAlt}
                    reverse={false}
                />

                {/* Mission: text left, image right */}
                <Section
                    title={ourMission.title}
                    paragraphs={ourMission.paragraphs}
                    image={ourMission.image}
                    imageAlt={ourMission.imageAlt}
                    reverse={true}
                />
            </div>
        </section>
    );
}










// "use client";

// import Image from "next/image";

// export default function OurVisionMission({ data }) {
//     const { ourVision, ourMission, image, imageAlt } = data;

//     return (
//         <section className="w-full bg-white text-gray-800 py-16">
//             <div className="max-w-7xl mx-auto px-6 md:px-20 grid md:grid-cols-2 gap-12 items-center">

//                 {/* ===== Left Image Section ===== */}
//                 <div className="relative flex justify-center">
//                     <div className="relative w-[90%] aspect-[4/5] md:w-[80%] overflow-hidden">
//                         <Image
//                             src={image}
//                             alt={imageAlt}
//                             fill
//                             className="object-contain object-center"
//                         />
//                     </div>
//                 </div>

//                 {/* ===== Right Text Section ===== */}
//                 <div className="space-y-10">
//                     {/* === Vision === */}
//                     <div>
//                         <h2 className="text-3xl md:text-4xl font-bold mb-3">
//                             {ourVision.title}
//                         </h2>
//                         <div className="w-20 h-[3px] bg-blue-600 mb-4"></div>
//                         <p className="text-base md:text-lg leading-relaxed text-gray-700">
//                             {ourVision.paragraphs}
//                         </p>
//                     </div>

//                     {/* === Mission === */}
//                     <div>
//                         <h2 className="text-3xl md:text-4xl font-bold mb-3">
//                             {ourMission.title}
//                         </h2>
//                         <div className="w-20 h-[3px] bg-blue-600 mb-4"></div>
//                         <p className="text-base md:text-lg leading-relaxed text-gray-700">
//                             {ourMission.paragraphs}
//                         </p>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// }
