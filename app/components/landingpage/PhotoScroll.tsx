'use client'

import Image, { StaticImageData } from "next/image";
import React from "react";
import Link from "next/link";

export default function PhotoScroll({ images, direction } : { images : StaticImageData[], direction? : string }) {
    return (
        <div className="bg-transparent overflow-x-hidden grid grid-cols-8">
            {direction === 'left' ? (
                <div className="relative flex overflow-x-hidden max-w-[100%] xl:max-w-[100%] m-auto col-span-8">
                    <div className="animate-marquee whitespace-nowrap flex space-x-10">
                        <Box imageUrl={images[1]} projectUrl="https://patchnpaintetc.com/" />
                        <Box imageUrl={images[2]} projectUrl="https://mendedmomentstherapy.com/couples-therapy/" />
                        <Box imageUrl={images[3]} projectUrl="https://aarcweb.cintechagencybd.com/" />
                        <Box imageUrl={images[4]} projectUrl="https://aarcweb.cintechagencybd.com/" />
                        <Box imageUrl={images[5]} projectUrl="https://patchnpaintetc.com/services/" />
                        <Box imageUrl={images[6]} projectUrl="https://patchnpaintetc.com/contact-us/" />
                        <Box imageUrl={images[7]} projectUrl="https://cleenxrestorationca.com/" />
                        <Box imageUrl={images[8]} projectUrl="https://cleenxrestorationca.com/" />
                        <Box imageUrl={images[9]} projectUrl="https://cleenxrestorationca.com/" />
                    </div>
                    <div className="animate-marquee2 whitespace-nowrap flex space-x-10">
                        <Box imageUrl={images[1]} projectUrl="https://patchnpaintetc.com/" />
                        <Box imageUrl={images[2]} projectUrl="https://mendedmomentstherapy.com/couples-therapy/" />
                        <Box imageUrl={images[3]} projectUrl="https://aarcweb.cintechagencybd.com/" />
                        <Box imageUrl={images[4]} projectUrl="https://aarcweb.cintechagencybd.com/" />
                        <Box imageUrl={images[5]} projectUrl="https://patchnpaintetc.com/services/" />
                        <Box imageUrl={images[6]} projectUrl="https://patchnpaintetc.com/contact-us/" />
                        <Box imageUrl={images[7]} projectUrl="https://cleenxrestorationca.com/" />
                        <Box imageUrl={images[8]} projectUrl="https://cleenxrestorationca.com/" />
                        <Box imageUrl={images[9]} projectUrl="https://cleenxrestorationca.com/" />
                    </div>
                </div>
            ) : (
                <div className="relative flex overflow-x-hidden max-w-[100%] xl:max-w-[100%] m-auto col-span-8">
                    <div className="animate-marquee3 whitespace-nowrap flex space-x-10">
                        <Box imageUrl={images[1]} projectUrl="https://patchnpaintetc.com/" />
                        <Box imageUrl={images[2]} projectUrl="https://mendedmomentstherapy.com/couples-therapy/" />
                        <Box imageUrl={images[3]} projectUrl="https://aarcweb.cintechagencybd.com/" />
                        <Box imageUrl={images[4]} projectUrl="https://aarcweb.cintechagencybd.com/" />
                        <Box imageUrl={images[5]} projectUrl="https://patchnpaintetc.com/services/" />
                        <Box imageUrl={images[6]} projectUrl="https://patchnpaintetc.com/contact-us/" />
                        <Box imageUrl={images[7]} projectUrl="https://cleenxrestorationca.com/" />
                        <Box imageUrl={images[8]} projectUrl="https://cleenxrestorationca.com/" />
                        <Box imageUrl={images[9]} projectUrl="https://cleenxrestorationca.com/" />
                    </div>
                    <div className="animate-marquee4 whitespace-nowrap flex space-x-10">
                        <Box imageUrl={images[1]} projectUrl="https://patchnpaintetc.com/" />
                        <Box imageUrl={images[2]} projectUrl="https://mendedmomentstherapy.com/couples-therapy/" />
                        <Box imageUrl={images[3]} projectUrl="https://aarcweb.cintechagencybd.com/" />
                        <Box imageUrl={images[4]} projectUrl="https://aarcweb.cintechagencybd.com/" />
                        <Box imageUrl={images[5]} projectUrl="https://patchnpaintetc.com/services/" />
                        <Box imageUrl={images[6]} projectUrl="https://patchnpaintetc.com/contact-us/" />
                        <Box imageUrl={images[7]} projectUrl="https://cleenxrestorationca.com/" />
                        <Box imageUrl={images[8]} projectUrl="https://cleenxrestorationca.com/" />
                        <Box imageUrl={images[9]} projectUrl="https://cleenxrestorationca.com/" />
                    </div>
                </div>
            )}
        </div>
    )
};

interface BoxData {
    imageUrl : StaticImageData
    projectUrl : string 
};

const Box = ({ imageUrl, projectUrl }: BoxData) => {
    return (
        <Link href={projectUrl} target="_blank" className="w-[306px] h-[235px] sm:h-[313px] sm:w-[409px] text-center 
            hover:shadow-md rounded-md overflow-y-hidden">
            <Image 
                src={imageUrl}
                alt='Project Image'
                width={1227}
                height={941}
                className="object-cover w-[306px] h-[235px] sm:h-[313px] sm:w-[409px] rounded-md 
                shadow-sm hover:shadow-lg"
            />
        </Link>
    )
}