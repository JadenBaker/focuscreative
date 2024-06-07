'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import BottomToTop from './BottomToTop';
import TopToBottom from './TopToBottom';

function Hero() {
  return (
    <div className='col-span-8 grid grid-cols-8 relative overflow-hidden bg-white dark:bg-black'>
      <div className='col-span-8 flex items-start h-[700px] sm:h-[900px] 
        md:max-h-[900px] overflow-hidden justify-center '>
        <TopToBottom backgroundColor={'#000000'}/>
        <BottomToTop backgroundColor={'#000000'}/>
        <div className='relative overflow-hidden sm:min-w-[450px] mr-auto mt-0
          min-h-[650px] sm:min-h-[700px] md:min-h-[800px] lg:min-h-[900px] xl:min-h-[1000px] flex flex-col'>
          <svg width="650" height="550" className='sm:hidden' viewBox="0 0 650 550" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_47_207)">
            <rect width="650" height="550" fill="white" className='dark:fill-black'/>
            <path d="M64.0125 216.662C43.8007 197.847 43.8007 167.34 64.0125 148.525L228.588 -4.68249L622.318 361.851L457.743 515.058C437.531 533.874 404.761 533.874 384.549 515.058L64.0125 216.662Z" fill="#470487"/>
            <rect x="308" width="342" height="319" fill="#470487"/>
            <rect x="632" y="319" width="18" height="17" fill="#470487"/>
            <rect width="39.4444" height="62.6388" transform="matrix(0.731934 -0.681376 0.731934 0.681376 575.224 320.39)" fill="#470487"/>
            <rect width="52.5911" height="105.678" transform="matrix(0.731934 -0.681376 0.731934 0.681376 231.105 -0.0704956)" fill="#470487"/>
            </g>
            <defs>
            <clipPath id="clip0_47_207">
            <rect width="650" height="550" fill="white" className='dark:fill-black'/>
            </clipPath>
            </defs>
          </svg>
          <svg width="768" height="640" className='sm:inline md:hidden hidden' viewBox="0 0 768 640" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_142_2)">
            <rect width="768" height="640" fill="white" className='dark:fill-black'/>
            <path d="M64.0124 216.662C43.8006 197.847 43.8007 167.34 64.0125 148.525L228.588 -4.68255L704.594 438.444L540.019 591.651C519.807 610.467 487.038 610.467 466.826 591.651L64.0124 216.662Z" fill="#470487"/>
            <rect x="308" width="460" height="319" fill="#470487"/>
            <rect x="632" y="319" width="136" height="57" fill="#470487"/>
            <rect width="93.0198" height="175.01" transform="matrix(0.731934 -0.681376 0.731934 0.681376 576.252 319.433)" fill="#470487"/>
            <rect width="52.5911" height="105.678" transform="matrix(0.731934 -0.681376 0.731934 0.681376 231.105 -0.0705566)" fill="#470487"/>
            </g>
            <defs>
            <clipPath id="clip0_142_2">
            <rect width="768" height="640" fill="white" className='dark:fill-black'/>
            </clipPath>
            </defs>
          </svg>
          <svg width="1024" height="799" className='md:inline hidden lg:hidden' viewBox="0 0 1024 799" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_142_8)">
            <rect width="1024" height="799" fill="white" className='dark:fill-black'/>
            <path d="M64.0125 216.662C43.8007 197.847 43.8007 167.34 64.0125 148.525L228.588 -4.68255L852.657 576.28L688.082 729.487C667.87 748.303 635.101 748.303 614.889 729.487L64.0125 216.662Z" fill="#470487"/>
            <rect x="308" width="716" height="319" fill="#470487"/>
            <rect x="632" y="319" width="392" height="57" fill="#470487"/>
            <rect width="304.848" height="377.308" transform="matrix(0.731934 -0.681376 0.731934 0.681376 576.252 319.433)" fill="#470487"/>
            <rect width="52.5911" height="105.678" transform="matrix(0.731934 -0.681376 0.731934 0.681376 231.105 -0.0705566)" fill="#470487"/>
            </g>
            <defs>
            <clipPath id="clip0_142_8">
            <rect width="1024" height="799" fill="white" className='dark:fill-black'/>
            </clipPath>
            </defs>
          </svg>
          <svg width="1280" height="884" className='hidden lg:inline xl:hidden' viewBox="0 0 1280 884" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_142_14)">
            <rect width="1280" height="884" fill="white" className='dark:fill-black'/>
            <path d="M64.0124 216.662C43.8007 197.847 43.8007 167.34 64.0125 148.525L228.588 -4.68255L947.492 664.564L782.917 817.771C762.705 836.587 729.935 836.587 709.723 817.771L64.0124 216.662Z" fill="#470487"/>
            <rect x="308" width="972" height="319" fill="#470487"/>
            <rect x="632" y="319" width="392" height="57" fill="#470487"/>
            <rect width="499.099" height="506.867" transform="matrix(0.731934 -0.681376 0.731934 0.681376 576.252 319.433)" fill="#470487"/>
            <rect width="52.5911" height="105.678" transform="matrix(0.731934 -0.681376 0.731934 0.681376 231.105 -0.0705566)" fill="#470487"/>
            </g>
            <defs>
            <clipPath id="clip0_142_14">
            <rect width="1280" height="884" fill="white" className='dark:fill-black'/>
            </clipPath>
            </defs>
          </svg>
          <svg width="1536" height="1000" className='hidden xl:inline 2xl:hidden' viewBox="0 0 1536 1000" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_149_448)">
            <rect width="1536" height="1000" fill="white" className='dark:fill-black'/>
            <path d="M64.0124 216.662C43.8006 197.847 43.8007 167.34 64.0125 148.525L229.75 -5.76482L1057.75 765.04L892.011 919.33C871.799 938.145 839.029 938.145 818.818 919.33L64.0124 216.662Z" fill="#470487"/>
            <rect x="308" width="1228" height="319" fill="#470487"/>
            <rect x="632" y="319" width="392" height="57" fill="#470487"/>
            <rect width="655.769" height="655.903" transform="matrix(0.731934 -0.681376 0.731934 0.681376 576.252 319.433)" fill="#470487"/>
            <rect width="52.5911" height="105.678" transform="matrix(0.731934 -0.681376 0.731934 0.681376 231.105 -0.0705566)" fill="#470487"/>
            </g>
            <defs>
            <clipPath id="clip0_149_448">
            <rect width="1536" height="1000" fill="white" className='dark:fill-black'/>
            </clipPath>
            </defs>
          </svg>
          <svg width="1720" height="1000" className='hidden 2xl:inline' viewBox="0 0 1720 1000" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_206_2263)">
            <rect width="1720" height="1000" fill="white" className='dark:fill-black'/>
            <path d="M64.0124 216.663C43.8006 197.847 43.8007 167.341 64.0125 148.525L1173.75 -884.555L1921.14 -188.788L811.405 844.291C791.193 863.107 758.423 863.107 738.211 844.291L64.0124 216.663Z" fill="#470487"/>
            </g>
            <defs>
            <clipPath id="clip0_206_2263">
            <rect width="1720" height="1000" fill="white" className='dark:fill-black'/>
            </clipPath>
            </defs>
          </svg>
          <h1 className='text-4xl font-bold text-white text-center m-auto text-black md:text-white w-[250px] text-end 
            mt-[-450px] sm:mt-[-510px] md:mt-[-660px] lg:mt-[-750px] xl:mt-[-860px] dark:text-white sm:text-center sm:w-[350px]
            '>
              Build a website
              your customers deserve
          </h1>
          <h2 className='text-xl text-center font-semibold m-auto mt-[-50px] sm:mt-[-75px] md:mt-[-100px] lg:mt-[-125px]
              text-black w-[300px] xl:mt-[-200px] dark:text-white'>
              The one stop shop for all 
              your marketing & digital needs
          </h2>
          <div className='flex flex-col sm:items-center sm:space-x-5 space-y-5
            sm:space-y-0 mt-[-50px] sm:mt-[-75px] md:mt-[-100px] lg:mt-[-125px]
            font-medium sm:m-auto px-5 sm:px-0 sm:flex-row xl:mt-[-200px]'>
            <Link href={'/contact'}
              className='text-center sm:m-0 m-auto sm:w-auto
              w-[100%] sm:w-[200px]'
            >
              <motion.button 
                whileHover={{ scale : 1.05 }}
                whileTap={{ scale : .95 }}
                transition={{ duration : .5, ease : 'easeInOut'}}
                className='py-3 px-12 rounded-md border-2 border-[#470787]
                bg-white shadow-sm hover:shadow-md w-[100%] sm:w-[200px]
                text-black dark:bg-black dark:text-white'>
                Contact Us
              </motion.button>
            </Link>
            <Link href={'/pricing'} 
              className='rounded-md sm:w-[200px] w-[100%] bg-green-400
                m-auto sm:m-0 sm:w-auto text-center
              '
            >
              <motion.button 
                whileHover={{ scale : 1.02 }}
                whileTap={{ scale : .98 }}
                transition={{ duration : .3, ease : 'easeInOut'}}
                className='py-3 px-12 dark:border-[#470487] hover:text-black
                hover:bg-white border-2 border-black hover:border-[#470487]
                text-white bg-black rounded-md w-[100%] sm:w-[200px]
                dark:hover:bg-[#470487] dark:hover:text-white 2xl:dark:hover:border-white'>
                Pricing
              </motion.button>              
            </Link>
          </div>
        </div>
        <TopToBottom backgroundColor={'#470787'}/>
        <BottomToTop backgroundColor={'#470787'}/>
      </div>
    </div>
  )
}

export default Hero