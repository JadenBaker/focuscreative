'use client'

import { motion, useInView, Variants } from 'framer-motion';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Link from 'next/link';
import InstallDesktopIcon from '@mui/icons-material/InstallDesktop';
import { useRef } from 'react';

export default function SectionThree() {
    // const ref = useRef<any>(null)
    // const isInView = useInView(ref, { once: true })

    const cardVariants: Variants = {
        offscreen: {
          x: 300
        },
        onscreen: {
          x: 0,
          transition: {
            type: "spring",
            bounce: 0.4,
            duration: 0.8
          }
        }
      };

    return (
        <div className="col-span-8 flex flex-col lg:flex-row
            lg:items-center lg:space-x-20 lg:max-w-[1200px] lg:m-auto
            lg:mb-40 pt-20 overflow-x-hidden">
            <div className='flex-1 flex flex-col items-center px-5'>
                <h1 className="text-4xl font-bold text-center max-w-[400px] mb-20 dark:text-white
                text-black">
                    Offer your customers an 
                    <span className="text-[#470787]"> Experience </span>
                    they&apos;ll never forget
                </h1>
                <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2, ease: 'easeInOut' }}
                    className='rounded-md w-[300px] m-auto bg-white font-medium
                    py-4 text-[#470787] border-2 shadow-sm hover:shadow-md
                    border-[#470784] dark:bg-black dark:text-white hover:bg-[#470787]
                    font-bold hover:text-white text-lg dark:hover:bg-[#470787]'
                >
                    Start Now
                </motion.button>
            </div>
            <ul className='flex-1 flex flex-col items-center mt-20 lg:mt-0 dark:text-white text-black px-5'>
                <motion.li 
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0.8 }}
                    className='flex items-center'>
                    <motion.div 
                        variants={cardVariants}
                        className='flex items-center'>
                        <div className='h-[50px] w-[50px] bg-[#470787] text-white 
                            font-bold text-lg rounded-[25px] text-center 
                            justify-center flex flex-col'> 
                            1
                        </div>
                        <div className='flex flex-col p-5'>
                            <header className='flex items-center justify-between mb-5'>
                                <h4 className='font-bold'>Affordable & on-time</h4>
                                <AccessTimeIcon className='text-[#470787] min-h-[32px] min-w-[32px]'/>
                            </header>
                            <p className='max-w-[300px]'>
                                Kick start you online presence
                                or learn how you can <span className='text-[#470787] font-medium'>Boost </span> 
                                your current traffic
                            </p>
                        </div>
                    </motion.div>
                </motion.li>
                <motion.li 
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0.8 }}
                    className='flex items-center'>
                    <motion.div 
                        variants={cardVariants}
                        className='flex items-center'>
                        <div className='h-[50px] w-[50px] bg-[#470787] text-white 
                            font-bold text-lg rounded-[25px] text-center 
                            justify-center flex flex-col'> 2 
                        </div>
                        <div className='flex flex-col p-5'>
                            <header className='flex items-center justify-between mb-5'>
                                <h4 className='font-bold'>Trusted by Industry leaders</h4>
                                <svg width="32" height="32" viewBox="0 0 34 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_181_1390)">
                                    <ellipse cx="24.5355" cy="3.53555" rx="1.5" ry="3.5" transform="rotate(-45 24.5355 3.53555)" fill="#470787"/>
                                    <ellipse cx="10.5355" cy="3.53553" rx="1.5" ry="3.5" transform="rotate(45 10.5355 3.53553)" fill="#470787"/>
                                    <ellipse cx="29.5" cy="6.5" rx="1.5" ry="3.5" fill="#470787"/>
                                    <ellipse cx="5.5" cy="6.5" rx="1.5" ry="3.5" fill="#470787"/>
                                    <ellipse cx="8.5" cy="9.5" rx="1.5" ry="3.5" transform="rotate(-90 8.5 9.5)" fill="#470787"/>
                                    <ellipse cx="1.60086" cy="3.86563" rx="1.60086" ry="3.86563" transform="matrix(0.755191 -0.655505 0.515201 0.857069 0 12.7383)" fill="#470787"/>
                                    <ellipse cx="1.6567" cy="3.73533" rx="1.6567" ry="3.73533" transform="matrix(-0.515201 -0.857069 0.755191 -0.655505 5.35828 19.6113)" fill="#470787"/>
                                    <ellipse cx="1.92668" cy="3.90087" rx="1.92668" ry="3.90087" transform="matrix(0.226958 -0.973905 0.843588 0.536991 2.13367 23.241)" fill="#470787"/>
                                    <ellipse cx="1.51513" cy="3.5203" rx="1.51513" ry="3.5203" transform="matrix(-0.785485 -0.618881 0.323479 -0.946236 9.67249 26.5374)" fill="#470787"/>
                                    <ellipse cx="26.5" cy="9.5" rx="1.5" ry="3.5" transform="rotate(-90 26.5 9.5)" fill="#470787"/>
                                    <ellipse cx="1.41344" cy="3.30831" rx="1.41344" ry="3.30831" transform="matrix(0.671692 0.740831 -0.652829 0.757505 32.1012 12)" fill="#470787"/>
                                    <ellipse cx="1.41785" cy="3.29803" rx="1.41785" ry="3.29803" transform="matrix(0.652829 -0.757505 0.671692 0.740831 24 14.2378)" fill="#470787"/>
                                    <ellipse cx="1.42606" cy="3.53063" rx="1.42606" ry="3.53063" transform="matrix(0.346723 0.937967 -0.912387 0.409329 32.0111 20.394)" fill="#470787"/>
                                    <ellipse cx="1.51313" cy="3.32747" rx="1.51313" ry="3.32747" transform="matrix(0.912387 -0.409329 0.346723 0.937967 23 19.2388)" fill="#470787"/>
                                    <ellipse cx="1.0565" cy="2.79056" rx="1.0565" ry="2.79056" transform="matrix(-0.559193 -0.829038 0.962128 -0.272596 11.1816 31.2732)" fill="#470787"/>
                                    <ellipse cx="1.10034" cy="2.26365" rx="1.10034" ry="2.26365" transform="matrix(-0.999887 0.0150492 -0.326285 -0.945271 16.4819 29.4299)" fill="#470787"/>
                                    <ellipse cx="0.968596" cy="2.67257" rx="0.968596" ry="2.67257" transform="matrix(-0.567076 0.823665 -0.92978 -0.368117 25.0684 29.9675)" fill="#470787"/>
                                    <ellipse cx="1.14539" cy="2.26006" rx="1.14539" ry="2.26006" transform="matrix(0.92978 0.368117 -0.567076 0.823665 21.5632 25)" fill="#470787"/>
                                    <rect x="14" y="28" width="7" height="2" fill="#470787"/>
                                    </g>
                                    <defs>
                                    <clipPath id="clip0_181_1390">
                                    <rect width="34" height="32" fill="white"/>
                                    </clipPath>
                                    </defs>
                                </svg>
                            </header>
                            <p className='max-w-[300px]'>
                                Find out why so many clients
                                come to Focus Creative for
                                their <Link href={'/services'} className='text-[#470787] 
                                font-medium whitespace-nowrap'>
                                Ad-Campaigns</Link> 
                            </p>
                        </div>
                    </motion.div>
                </motion.li>
                <motion.li 
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0.8 }}
                    className='flex items-center'>
                    <motion.div 
                        variants={cardVariants}
                        className='flex items-center'>
                        <div className='h-[50px] w-[50px] bg-[#470787] text-white 
                            font-bold text-lg rounded-[25px] text-center 
                            justify-center flex flex-col'> 3 
                        </div>
                        <div className='flex flex-col p-5'>
                            <header className='flex items-center justify-between mb-5'>
                                <h4 className='font-bold'>Producing Quality Results</h4>
                                <svg width="35" height="32" viewBox="0 0 35 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="1" y="21" width="9" height="11" fill="#470787"/>
                                    <rect x="25" y="16" width="9" height="16" fill="#470787"/>
                                    <rect x="12" y="13" width="10" height="19" fill="#470787"/>
                                    <path d="M5.35355 7.64645C5.15829 7.45118 4.84171 7.45118 4.64645 7.64645L1.46447 10.8284C1.2692 11.0237 1.2692 11.3403 1.46447 11.5355C1.65973 11.7308 1.97631 11.7308 2.17157 11.5355L5 8.70711L7.82843 11.5355C8.02369 11.7308 8.34027 11.7308 8.53553 11.5355C8.7308 11.3403 8.7308 11.0237 8.53553 10.8284L5.35355 7.64645ZM5.5 18L5.5 8H4.5L4.5 18H5.5Z" fill="#470787"/>
                                    <path d="M30.3536 3.64645C30.1583 3.45118 29.8417 3.45118 29.6464 3.64645L26.4645 6.82843C26.2692 7.02369 26.2692 7.34027 26.4645 7.53553C26.6597 7.7308 26.9763 7.7308 27.1716 7.53553L30 4.70711L32.8284 7.53553C33.0237 7.7308 33.3403 7.7308 33.5355 7.53553C33.7308 7.34027 33.7308 7.02369 33.5355 6.82843L30.3536 3.64645ZM30.5 14V4H29.5V14H30.5Z" fill="#470787"/>
                                    <path d="M17.3536 0.646447C17.1583 0.451184 16.8417 0.451184 16.6464 0.646447L13.4645 3.82843C13.2692 4.02369 13.2692 4.34027 13.4645 4.53553C13.6597 4.7308 13.9763 4.7308 14.1716 4.53553L17 1.70711L19.8284 4.53553C20.0237 4.7308 20.3403 4.7308 20.5355 4.53553C20.7308 4.34027 20.7308 4.02369 20.5355 3.82843L17.3536 0.646447ZM17.5 11V1H16.5V11H17.5Z" fill="#470787"/>
                                </svg>
                            </header>
                            <p className='max-w-[300px]'>
                                Fine tune every detail of your online
                                presence with a <Link href={'/services'} className='text-[#470787] 
                                font-medium whitespace-nowrap'>
                                Custom Website</Link> 
                            </p>
                        </div>
                    </motion.div>
                </motion.li>
                <motion.li 
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0.8 }}
                    className='flex items-center'>
                    <motion.div 
                        variants={cardVariants}
                        className='flex items-center'>
                        <div className='h-[50px] w-[50px] bg-[#470787] text-white 
                            font-bold text-lg rounded-[25px] text-center 
                            justify-center flex flex-col'> 4 
                        </div>
                        <div className='flex flex-col p-5'>
                            <header className='flex items-center justify-between mb-5'>
                                <h4 className='font-bold'>First Class Customer Support</h4>
                                <InstallDesktopIcon className='text-[#470787] min-h-[32px] min-w-[32px]'/>
                            </header>
                            <p className='max-w-[300px]'>
                                We are always here to help you build and maintain 
                                <span className='text-[#470787] font-medium'> Your Brand</span> 
                                . Contact us whenever you need
                            </p>
                        </div>
                    </motion.div>
                </motion.li>
            </ul>
        </div>
    )
}