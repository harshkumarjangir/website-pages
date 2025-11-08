"use client";
import Image from "next/image";
import Link from "next/link";
import { FiDownload } from "react-icons/fi"; // ✅ import icon

export default function CtaSection({ data }) {
    if (!data) return null;

    const { title, highlight, description, buttonText, buttonLink, bgGradient, leftImage, rightImage } = data;

    // ✅ Check if the button is for downloading a PDF
    const isDownload = buttonLink?.endsWith(".pdf");

    return (
        <section className="w-full py-14 px-6 md:px-20">
            <div
                className={`relative max-w-7xl mx-auto rounded-3xl overflow-hidden bg-gradient-to-r ${bgGradient} text-white`}
            >
                {/* === Decorative Images === */}
                {leftImage && (
                    <div className="absolute bottom-0 left-0 w-40 sm:w-56 opacity-90 select-none pointer-events-none">
                        <Image
                            src={leftImage}
                            alt="decor left"
                            width={300}
                            height={300}
                            className="object-contain"
                        />
                    </div>
                )}
                {rightImage && (
                    <div className="absolute top-0 right-0 w-40 sm:w-56 opacity-90 select-none pointer-events-none">
                        <Image
                            src={rightImage}
                            alt="decor right"
                            width={300}
                            height={300}
                            className="object-contain"
                        />
                    </div>
                )}

                {/* === CTA Content === */}
                <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-6 px-10 md:px-20 py-14">
                    {/* Text */}
                    <div className="text-center md:text-left">
                        <h2 className="text-2xl md:text-3xl font-semibold mb-3 leading-snug">
                            {title.split(highlight)[0]}
                            <span className="font-bold"> {highlight}</span>
                        </h2>
                        <p className="text-white/90 text-base md:text-lg max-w-xl">
                            {description}
                        </p>
                    </div>

                    {/* Button */}
                    {isDownload ? (
                        <a
                            href={buttonLink}
                            download="MetaBlock-Brochure.pdf"
                            className="flex items-center gap-2 bg-white text-[#00A859] font-medium px-8 py-3 rounded-md shadow hover:bg-blue-50 transition"
                        >
                            <FiDownload className="text-xl" />
                            {buttonText}
                        </a>
                    ) : (
                        <Link
                            href={buttonLink}
                            className="bg-white text-[#00A859] font-medium px-8 py-3 rounded-md shadow hover:bg-blue-50 transition"
                        >
                            {buttonText}
                        </Link>
                    )}
                </div>
            </div>
        </section>
    );
}









// "use client";
// import Image from "next/image";
// import Link from "next/link";

// export default function CtaSection({ data }) {
//     if (!data) return null;

//     const { title, highlight, description, buttonText, buttonLink, bgGradient, leftImage, rightImage } = data;

//     return (
//         <section className="w-full py-14 px-6 md:px-20">
//             <div
//                 className={`relative max-w-7xl mx-auto rounded-3xl overflow-hidden bg-gradient-to-r ${bgGradient} text-white`}
//             >
//                 {/* === Decorative Images === */}
//                 {leftImage && (
//                     <div className="absolute bottom-0 left-0 w-40 sm:w-56 opacity-90 select-none pointer-events-none">
//                         <Image
//                             src={leftImage}
//                             alt="decor left"
//                             width={300}
//                             height={300}
//                             className="object-contain"
//                         />
//                     </div>
//                 )}
//                 {rightImage && (
//                     <div className="absolute top-0 right-0 w-40 sm:w-56 opacity-90 select-none pointer-events-none">
//                         <Image
//                             src={rightImage}
//                             alt="decor right"
//                             width={300}
//                             height={300}
//                             className="object-contain"
//                         />
//                     </div>
//                 )}

//                 {/* === CTA Content === */}
//                 <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-6 px-10 md:px-20 py-14">
//                     {/* Text */}
//                     <div className="text-center md:text-left">
//                         <h2 className="text-2xl md:text-3xl font-semibold mb-3 leading-snug">
//                             {title.split(highlight)[0]}
//                             <span className="font-bold"> {highlight}</span>
//                         </h2>
//                         <p className="text-white/90 text-base md:text-lg max-w-xl">
//                             {description}
//                         </p>
//                     </div>

//                     {/* Button */}
//                     <Link
//                         href={buttonLink}
//                         className="bg-white text-[#00A859] font-medium px-8 py-3 rounded-md shadow hover:bg-blue-50 transition"
//                     >
//                         {buttonText}
//                     </Link>
//                 </div>
//             </div>
//         </section>
//     );
// }
