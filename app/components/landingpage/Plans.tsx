'use client'

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function Plans() {
    return (
        <div className="col-span-8 xl:col-start-2 xl:col-end-8 flex flex-col my-20 sm:my-40
            overflow-x-hidden text-black">
            <h1 className="text-3xl sm:text-4xl text-black dark:text-white w-[300px] 
                sm:w-[350px] px-5 text-center m-auto">Affordable 
                <span className="text-[#470787]"> Pricing </span> 
                & straight forward <span className="text-[#470787]"> Plans</span>
            </h1>
            <Link href={'/contact'} className='w-[250px] rounded-md m-auto'>
                <motion.button 
                    whileHover={{ scale : 1.05 }}
                    whileTap={{ scale : .95 }}
                    transition={{ duration : .3, ease: "easeInOut"}}
                    className="w-[250px] rounded-md m-auto py-3 bg-white border-2
                    border-[#470787] hover:bg-[#470787] dark:bg-black hover:text-white
                    font-medium mt-20 dark:text-white dark:hover:bg-[#470787]">
                        Contact Sales
                </motion.button> 
            </Link>
            <div className="dark:text-white flex flex-col space-y-20 mt-20 items-center m-auto
                md:flex-row text-center md:text-start md:space-y-0 md:py-20 lg:space-x-10 mb-20 md:mb-0">
                <div className='flex flex-col md:flex-row md:items-center md:justify-between'>
                    <div className='flex flex-col space-y-10 text-lg px-5'>
                        <h2 className='font-bold text-2xl'>Build your own</h2>
                        <p className='max-w-[400px]'>
                            Already, have a website? Perfect, let&apos;s
                            make it better together. Contact us to find
                            out how to grow your business today.
                        </p>
                        <p>$300 Initial Optimization</p>
                        <p>$50 Monthly SEO Package</p>
                    </div>
                </div>
                <div className='w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] 
                    m-auto rounded-lg'>
                    <Image 
                        src={'https://images.pexels.com/photos/57690/pexels-photo-57690.jpeg?auto=compress&cs=tinysrgb&w=600'}
                        alt='Build your own'
                        width={1000}
                        height={1000}
                        className='object-cover w-[300px] h-[300px] lg:w-[400px] lg:h-[400px]
                        rounded-lg'
                    />
                </div>
            </div>
            <div className="dark:text-white flex flex-col space-y-20 items-center m-auto lg:space-x-10
                md:flex-row text-center md:text-start md:space-y-0 md:py-20">
                <div className='w-[300px] h-[300px] 
                    lg:w-[400px] lg:h-[400px] m-auto rounded-lg'>
                    <Image 
                        src={'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=600'}
                        alt='Build your own'
                        width={5118}
                        height={3456}
                        className='object-cover w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] rounded-lg'
                    />
                </div>
                <div className='flex flex-col md:flex-row md:items-center md:justify-between'>
                    <div className='flex flex-col space-y-10 text-lg px-5 md:text-end'>
                        <h2 className='font-bold text-2xl'>WordPress + Focus Creative</h2>
                        <p className='max-w-[400px]'>
                            Save time and get expert 
                            experience when you have us
                            build your WordPress site.
                        </p>
                        <p>$500 Initial Build</p>
                        <p>$25 Monthly Maintenance</p>
                    </div>
                </div>
            </div>
            <div className="dark:text-white flex flex-col space-y-20 items-center m-auto lg:space-x-10
                md:flex-row text-center md:text-start md:space-y-0 md:py-20 mt-20 md:mt-0">
                <div className='flex flex-col md:flex-row md:items-center md:justify-between'>
                    <div className='flex flex-col space-y-10 text-lg px-5'>
                        <h2 className='font-bold text-2xl'>Custom Website Plan</h2>
                        <p className='max-w-[400px]'>
                            Custom built websites, tailored
                            to your businesses needs 
                        </p>
                        <p>$700 Initial Build</p>
                        <p>$50 Monthly Maintenance</p>
                    </div>
                </div>
                <div className='w-[300px] h-[300px] 
                    lg:w-[400px] lg:h-[400px] m-auto rounded-md'>
                    <Image 
                        src={'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=600'}
                        alt='Build your own'
                        width={4272}
                        height={2848}
                        className='object-cover w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] rounded-md'
                    />
                </div>
            </div>
        </div>
    )
}