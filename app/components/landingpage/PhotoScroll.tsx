'use client'

import Image, { StaticImageData } from "next/image";
import React from "react";
import Link from "next/link";

export default function PhotoScroll({ images, direction } : { images : StaticImageData[], direction? : string }) {
    return (
        <div className="bg-transparent overflow-x-hidden grid grid-cols-8">
            {direction === 'left' ? (
                <div className="relative flex overflow-x-hidden max-w-[100%] xl:max-w-[100%] m-auto col-span-8">
                    <div className=" animate-marquee whitespace-nowrap flex">
                        <Box src={images[0].src} />
                        <Box src={images[1].src} />
                        <Box src={images[2].src} />
                        <Box src={images[3].src} />
                        <Box src={images[4].src} />
                        <Box src={images[5].src} />
                        <Box src={images[6].src} />
                        <Box src={images[7].src} />
                        <Box src={images[8].src} />
                    </div>
                    <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex">
                        <Box src={images[0].src} />
                        <Box src={images[1].src} />
                        <Box src={images[2].src} />
                        <Box src={images[3].src} />
                        <Box src={images[4].src} />
                        <Box src={images[5].src} />
                        <Box src={images[6].src} />
                        <Box src={images[7].src} />
                        <Box src={images[8].src} />
                    </div>
                </div>
            ) : (
                <div className="relative flex overflow-x-hidden max-w-[100%] xl:max-w-[100%] m-auto col-span-8">
                    <div className=" animate-marquee3 whitespace-nowrap flex">
                        <Box src={images[0].src} />
                        <Box src={images[1].src} />
                        <Box src={images[2].src} />
                        <Box src={images[3].src} />
                        <Box src={images[4].src} />
                        <Box src={images[5].src} />
                        <Box src={images[6].src} />
                        <Box src={images[7].src} />
                        <Box src={images[8].src} />
                    </div>
                    <div className="absolute top-0 animate-marquee4 whitespace-nowrap flex">
                        <Box src={images[0].src} />
                        <Box src={images[1].src} />
                        <Box src={images[2].src} />
                        <Box src={images[3].src} />
                        <Box src={images[4].src} />
                        <Box src={images[5].src} />
                        <Box src={images[6].src} />
                        <Box src={images[7].src} />
                        <Box src={images[8].src} />
                    </div>
                </div>
            )}
        </div>
    )
};

interface BoxData {
    src : string
};

const Box = ({ src }:BoxData) => {
    return (
        <Image 
            src={src} 
            className="min-w-[300px] min-h-[200px] text-center mx-3 rounded-lg 
            flex flex-col items-center justify-center bg-white dark:bg-black"
            alt="Previous Design"
            width={300}
            height={200}
        />
    )
}