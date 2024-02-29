'use client'

import React from "react";
import Link from "next/link";

export default function AutoScroll () {
    return (
        <div className="absolute top-[19px] bg-white overflow-x-hidden grid grid-cols-8 
            dark:bg-black border-y-2 mt-20 p-5 border-[#470487]">
            <div className="relative flex overflow-x-hidden max-w-[100%] xl:max-w-[100%] m-auto col-span-8">
                <div className=" animate-marquee whitespace-nowrap flex">
                    <Box text="SEO Optimization" />
                    <Box text="Ad Campaigns" />
                    <Box text="Custom Websites" />
                    <Box text="Higher Conversion Rates" />
                    <Box text="Content Management" />
                    <Box text="Digital Marketing" />
                    <Box text="Design & Print" />
                    <Box text="Google Ads" />
                    <Box text="Web Design" />
                </div>
                <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex">
                    <Box text="SEO Optimization" />
                    <Box text="Ad Campaigns" />
                    <Box text="Custom Websites" />
                    <Box text="Higher Conversion Rates" />
                    <Box text="Content Management" />
                    <Box text="Digital Marketing" />
                    <Box text="Design & Print" />
                    <Box text="Google Ads" />
                    <Box text="Web Design" />
                </div>
            </div>
        </div>
    )
};

interface BoxData {
    text : string
};

const Box = ({ text }:BoxData) => {
    return (
        <Link href={'/services'} className="border-x border-[#470487] w-[300px] text-center">
            <h3 className="text-lg font-medium px-5 dark:text-white text-black">{text}</h3>
        </Link>
    )
}