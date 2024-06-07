import Image from "next/image"
import Link from "next/link"

export default function BottomToTop({ backgroundColor }:any) {
    console.log(backgroundColor, ' color ')
    return (
        <div className={backgroundColor === '#470787' ? "relative flex overflow-hidden min-w-[360px] col-span-8 hidden sm:inline px-5 bg-[#470787]" 
            : "relative flex overflow-hidden min-w-[360px] col-span-8 hidden sm:inline px-5"}>
            <div className="animate-marqueeTTB whitespace-nowrap flex flex-col space-y-5">
                <Box image="" />
                <Box image="" />
                <Box image="" />
                <Box image="" />
            </div>
            <div className="absolute top-0 animate-marquee2TTB whitespace-nowrap flex flex-col space-y-5 mt-5">
                <Box image="" />
                <Box image="" />
                <Box image="" />
                <Box image="" />
            </div>
        </div>
    )
}

interface BoxData {
    image? : string
};

const Box = ({ image }:any) => {
    console.log(image, ' image ')
    return (
        <Image 
            src={image}
            alt="Image"
            width={319}
            height={632}
            className="hidden sm:inline border-2 border-white rounded-[50px] shadow-lg"
        />
    )
}