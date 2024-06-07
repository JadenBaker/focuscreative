'use client'

import { motion } from 'framer-motion';
import { StaticImageData } from 'next/image';
import PhotoScroll from './PhotoScroll';

export default function PhotoConverge({ images } : { images : StaticImageData[] }) {
    return (
        <div className='flex items-center'>
            <div className='flex-1'>
                <PhotoScroll images={images} direction="right"/>
            </div>
            <motion.div 
                whileHover={{ scale : 1.1 }}
                whileTap={{ scale : .95 }}
                transition={{ duration : 1, ease : 'easeInOut'}}
                className="sm:rounded-[50px] flex justify-center sm:py-[125px] py-20 z-10
                m-auto my-10 border-2 bg-black w-full sm:w-[420px] h-[200px] items-center
                text-center text-3xl sm:text-4xl font-bold text-white whitespace-nowrap
                flex-col space-y-5 sm:shadow-md">
                <h1 className="w-[250px] sm:w-[300px]"> Designed by</h1>
                <h1 className="text-[#470787] sm:text-5xl">Focus Creative</h1>
            </motion.div>
            <div className='flex-1'>
                <PhotoScroll images={images} direction="left"/>
            </div>
        </div>
    )
}