// import React from 'react'

// const DontSettle = ({data}) => {
//     const {title, image} = data;
//     return (
//         <div className='w-full h-20 md:h-40 flex items-center justify-center overflow-hidden bg-[#039D55]'>
//             <img src={image} className='h-full w-auto object-contain' alt={title} />
//         </div>
//     )
// }

// export default DontSettle




import React from "react";
import Image from "next/image";

const DontSettle = ({ data }) => {
    const { title, image } = data;

    return (
        <div className="w-full h-20 md:h-40 flex items-center justify-center overflow-hidden bg-[#039D55] relative">
            <Image
                src={image}
                alt={title}
                fill
                className="object-contain"
                priority
            />
        </div>
    );
};

export default DontSettle;
