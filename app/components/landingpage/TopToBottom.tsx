import Image from "next/image"

export default function TopToBottom({ backgroundColor }:any) {
    return (
        <div className={backgroundColor === '#470787' ? "relative flex overflow-hidden min-w-[360px] col-span-8 hidden sm:inline px-5 bg-[#470787]" 
        : "relative flex overflow-hidden min-w-[360px] col-span-8 hidden sm:inline px-5"}>
            <div className=" animate-marqueeBTT whitespace-nowrap flex flex-col space-y-5">
                <Box image="/phones/sotelosOne.png" />
                <Box image="/phones/sotelosTwo.png" />
                <Box image="/phones/focusMobileOne.png" />
                <Box image="" />
            </div>
            <div className="absolute top-0 animate-marquee2BTT whitespace-nowrap flex flex-col space-y-5 mt-5">
                <Box image="/phones/sotelosOne.png" />
                <Box image="/phones/sotelosTwo.png" />
                <Box image="/phones/focusMobileOne.png" />
                <Box image="" />
            </div>
        </div>
    )
}

interface BoxData {
    image? : string
};

const Box = ({ image }:any) => {
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