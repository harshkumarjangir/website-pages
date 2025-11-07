// import Image from "next/image";
// import React from "react";

// const Section3 = ({ data }) => {
//   const { heading, description, image } = data;

//   return (
//     <div className="relative md:h-[90vh] w-full px-4 max-md:pb-5 flex max-md:flex-col flex-row items-center max-md:justify-center justify-between text-white bg-gradient-to-r from-[#064e3b] via-[#065f46] to-[#047857]">
//       {/* LEFT SIDE - TEXT */}
//       <div className="lg:w-1/2 px-4 max-md:py-12 md:px-8 relative z-10">
//         <h2 className="text-3xl md:text-5xl font-semibold mb-6 leading-tight">
//           {heading}
//         </h2>
//         <p className="text-base md:text-lg text-white/90 mb-8 max-w-3xl leading-relaxed">
//           {description}
//         </p>

//         {/* Decorative Line */}
//         <div className="w-32 h-1 bg-gradient-to-r from-white to-[#a7f3d0] rounded-full"></div>
//       </div>

//       {/* RIGHT SIDE - IMAGE */}
//       <div className="flex-1 flex justify-center items-center max-md:mt-8">
//         <div className="relative">
//           <div className="absolute inset-0 bg-green-400/20 blur-3xl rounded-full -z-10" />
//           <Image
//             src={image}
//             alt="Section Visual"
//             width={1000}
//             height={800}
//             className="rounded-2xl object-cover"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Section3;





import Image from "next/image";
import React from "react";

const Section3 = ({ data }) => {
  const { heading, description,description2, image } = data;

  return (
    <div className="relative md:h-[90vh] w-full px-4 max-md:pb-5 flex max-md:flex-col flex-row items-center max-md:justify-center justify-between text-white bg-gradient-to-r from-[#064e3b] via-[#216d58] to-[#144235]">

      {/* LEFT SIDE - TEXT */}
      <div className="lg:w-1/2 px-4 max-md:py-12 md:px-8 relative z-10 max-md:text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-6 leading-tight drop-shadow-lg">
          {heading}
        </h2>
        <p className="text-base md:text-lg text-white/90 mb-8 max-w-3xl leading-relaxed drop-shadow">
          {description}
        </p>
        <p className="text-base md:text-lg text-white/90 mb-8 max-w-3xl leading-relaxed drop-shadow">
          {description2}
        </p>
        <div className="w-32 h-1 bg-gradient-to-r from-white to-[#a7f3d0] rounded-full max-md:mx-auto mx-0"></div>
      </div>

      {/* RIGHT SIDE - IMAGE */}
      <div className="flex-1 flex justify-center items-center mt-8 w-full max-w-lg">
        <div className="relative w-full h-[300px] sm:h-[400px] md:h-[600px] lg:h-[800px]">
          <Image
            src={image}
            alt="Section Visual"
            fill
            className="rounded-2xl object-contain"
            priority
          />
        </div>
      </div>

    </div>
  );
};

export default Section3;
