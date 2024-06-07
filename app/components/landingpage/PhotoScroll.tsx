'use client'

import Image, { StaticImageData } from "next/image";
import React from "react";
import Link from "next/link";

export default function PhotoScroll({ images, direction } : { images : StaticImageData[], direction? : string }) {

    console.log(images, ' images ');
    
    return (
        <div className="bg-transparent overflow-x-hidden grid grid-cols-8">
            {direction === 'left' ? (
                <div className="relative flex overflow-x-hidden max-w-[100%] xl:max-w-[100%] m-auto col-span-8">
                    <div className=" animate-marquee whitespace-nowrap flex">
                        <Box src="/SEO Optimization" />
                        <Box src="/Ad Campaigns" />
                        <Box src="/Custom Websites" />
                        <Box src="/Higher Conversion Rates" />
                        <Box src="/Content Management" />
                        <Box src="/Digital Marketing" />
                        <Box src="/Design & Print" />
                        <Box src="/Google Ads" />
                        <Box src="/Web Design" />
                    </div>
                    <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex">
                        <Box src="/SEO Optimization" />
                        <Box src="/Ad Campaigns" />
                        <Box src="/Custom Websites" />
                        <Box src="/Higher Conversion Rates" />
                        <Box src="/Content Management" />
                        <Box src="/Digital Marketing" />
                        <Box src="/Design & Print" />
                        <Box src="/Google Ads" />
                        <Box src="/Web Design" />
                    </div>
                </div>
            ) : (
                <div className="relative flex overflow-x-hidden max-w-[100%] xl:max-w-[100%] m-auto col-span-8">
                    <div className=" animate-marquee3 whitespace-nowrap flex">
                        <Box src="/SEO Optimization" />
                        <Box src="/Ad Campaigns" />
                        <Box src="/Custom Websites" />
                        <Box src="/Higher Conversion Rates" />
                        <Box src="/Content Management" />
                        <Box src="/Digital Marketing" />
                        <Box src="/Design & Print" />
                        <Box src="/Google Ads" />
                        <Box src="/Web Design" />
                    </div>
                    <div className="absolute top-0 animate-marquee4 whitespace-nowrap flex">
                        <Box src="/SEO Optimization" />
                        <Box src="/Ad Campaigns" />
                        <Box src="/Custom Websites" />
                        <Box src="/Higher Conversion Rates" />
                        <Box src="/Content Management" />
                        <Box src="/Digital Marketing" />
                        <Box src="/Design & Print" />
                        <Box src="/Google Ads" />
                        <Box src="/Web Design" />
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
            className="border-2 border-[#470487] w-[300px] h-[200px] text-center mx-3 rounded-lg 
            flex flex-col items-center justify-center bg-white dark:bg-black"
            alt="Previous Design"
            width={300}
            height={200}
        />
    )
}