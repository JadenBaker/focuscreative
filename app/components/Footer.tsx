"use client"

import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import Photo2 from '../../public/assets/whiteLogo.png';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

function Footer() {
  return (
    <div className='col-span-8 relative bg-[#333333] text-white grid grid-cols-8 
        px-5 pt-10 dark:bg-black dark:border-t-2 dark:border-[#8E29EE]'>

        <div className='col-span-8 border-b-2 sm:border-r-2 sm:border-b-0
            pb-10 sm:pb-0 md:pr-5 sm:pl-0 border-[#8E29EE] mb-20 xl:col-start-2 xl:col-end-8'>
            <Image 
                src={Photo2}
                alt='Focus Creative'
                width={200}
                height={47}
                className='object-cover w-[200px] h-[47px] rounded-md'
            />
        </div>
        <div className='col-span-8 space-y-10 border-b-2 sm:border-r-2 sm:border-b-0
            pb-10 sm:pb-0 md:pr-5 border-[#8E29EE] mb-20 p-0 md:col-end-5 md:col-start-1 
            xl:border-l-2 xl:col-start-2 xl:pl-5'>
            <h1 className='text-xl text-center mb-20'>Contact Us</h1>
            <p>Phone Number : <span className='hover:text-[#470787] cursor-pointer'>435-272-4650</span></p>
            <p className='overflow-hidden hover:text-[#470787] cursor-pointer'>Michelle@focuscreativesolutions.com</p>
            <div className='flex items-center space-x-5 overflow-wrap'>            
                <Link href={'https://www.linkedin.com/in/michelle-russell-focuscreative/'}>
                    <motion.button
                        whileHover={{ scale : 1.05 }}
                        whileTap={{ scale : .95 }}
                        transition={{ duration : .3 }}
                    >
                        <LinkedInIcon className='hover:text-[#470787]'/>
                    </motion.button>
                </Link>
                <Link href={'/'}>
                    <motion.button
                        whileHover={{ scale : 1.05 }}
                        whileTap={{ scale : .95 }}
                        transition={{ duration : .3 }}
                    >
                        <GoogleIcon className='hover:text-[#470787]'/>
                    </motion.button>
                </Link>
                <Link href={'/https://www.facebook.com/FocusCreativeSolutions'}>
                    <motion.button
                        whileHover={{ scale : 1.05 }}
                        whileTap={{ scale : .95 }}
                        transition={{ duration : .3 }}
                    >
                        <FacebookIcon className='hover:text-[#470787]'/>
                    </motion.button>
                </Link>
                <Link href={'/'}>
                    <motion.button
                        whileHover={{ scale : 1.05 }}
                        whileTap={{ scale : .95 }}
                        transition={{ duration : .3 }}
                    >
                        <InstagramIcon className='hover:text-[#470787]'/>
                    </motion.button>
                </Link>
            </div>
        </div>
        <div className='col-span-8 space-y-10 border-b-2 sm:border-r-2 sm:border-b-0
            pb-10 sm:pb-0 border-[#8E29EE] mb-20 p-0 md:col-start-5 md:col-end-9 md:ml-5
            xl:col-end-8'>
            <h1 className='text-xl text-center mb-20 sm:text-start'>Resources</h1>
            <p>Community Forum</p>
            <p>FAQ</p>
            <p>Maintenance Hot Line</p>
        </div>
        <div className='col-span-8 xl:col-start-2 xl:col-end-8 xl:col-end-5 space-y-10 mb-20 border-b-2 sm:border-r-2 sm:border-b-0
            pb-10 md:pr-5 lg:pl-0 lg:ml-5 border-[#8E29EE] p-0 xl:border-l-2 xl:ml-0 xl:pl-5'>
            <h1 className='text-xl text-center mb-20 sm:text-start'>Services</h1>
            <p>Custom Designs</p>
            <p>SEO Improvements</p>
            <p>Google & Facebook Ads</p>
            <p>Digital Media</p>
            <p>Business Automation</p>
        </div>
        <div className='col-span-8 flex flex-col w-[100%] pb-20 justify-center
            h-[300px] lg:h-auto text-center items-center space-y-5'>
            <h3 className='font-bold mb-10 text-2xl'>Focus Creative</h3>
            <div className='flex items-center space-x-10'>
                <Link href={'/privacy-policy'} className='group transition duration-200'>
                    Privacy Policy
                    <span className='block max-w-0 group-hover:max-w-full transition-all duration-200 h-[2px] mt-2 bg-[#8E29EE] rounded-[1px]'></span>
                </Link>
                <Link href={'/termsandconditions'} className='group transition duration-200'>
                    Terms & Conditions
                    <span className='block max-w-0 group-hover:max-w-full transition-all duration-200 h-[2px] mt-2 bg-[#8E29EE] rounded-[1px]'></span>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Footer