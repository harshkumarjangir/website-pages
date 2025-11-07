"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function DemoSection({ data, colorTheme }) {
    const { leftText, rightButton, rightButtonUrl, colorGreen, colorWhite } = data;

    // detect if theme is white or green
    const isWhiteTheme = colorTheme === colorWhite;
    const bgColor = colorTheme;
    const textColor = isWhiteTheme ? colorGreen : colorWhite;
    const arrowBg = isWhiteTheme ? colorGreen : colorWhite;
    const arrowColor = isWhiteTheme ? colorWhite : colorGreen;

    return (
        <section
            style={{ backgroundColor: bgColor }}
            className="relative mt-0 py-12 px-6 flex flex-col md:flex-row items-center justify-between gap-6"
        >
            {/* Left Section */}
            <div
                className="flex flex-row items-center gap-3 text-2xl font-semibold transition-all"
                style={{ color: textColor }}
            >
                <span>{leftText}</span>
                <ArrowRight
                    className="rounded-full p-1 w-8 h-8 transition-all"
                    style={{ backgroundColor: arrowBg, color: arrowColor }}
                />
            </div>

            {/* Right Section - Button */}
            <Link
                href={rightButtonUrl}
                className="rounded-lg px-6 py-3 font-bold text-xl border transition-all duration-300"
                style={{
                    backgroundColor: arrowBg,
                    color: arrowColor,
                    borderColor: arrowBg,
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "transparent";
                    e.currentTarget.style.color = textColor;
                    e.currentTarget.style.borderColor = textColor;
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = arrowBg;
                    e.currentTarget.style.color = arrowColor;
                    e.currentTarget.style.borderColor = arrowBg;
                }}
            >
                {rightButton}
            </Link>
        </section>
    );
}





// import { ArrowRight } from "lucide-react";

// export default function DemoSection({ data }) {
//     const { leftText, rightButton } = data;

//     return (
//         <section className="relative mt-0 bg-[#1E3A8A] py-12 px-6 flex flex-col md:flex-row items-center justify-between gap-6">
//             <div className="flex flex-row items-center gap-3 text-white text-2xl font-semibold">
//                 <span>{leftText}</span>
//                 <ArrowRight className="bg-white text-[#1E3A8A] rounded-full p-1 w-8 h-8" />
//             </div>
//             <div className="bg-white rounded-lg px-6 py-3">
//                 <span className="text-[#1E3A8A] font-bold text-xl">{rightButton}</span>
//             </div>
//         </section>

//     );
// }
