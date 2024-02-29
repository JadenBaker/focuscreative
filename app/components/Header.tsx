'use client'

import React, { useState } from 'react';
import NavMenu from './modals/NavMenu';
import Link from 'next/link';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import { motion } from 'framer-motion';

export default function Header() {
    const [navMenu, setNavMenu] = useState(false);
    const closeNav = () => {setNavMenu(false)};
    
    const handleClick = () => {
        const button = document.getElementById("button-one");
        const currentState = button?.getAttribute("data-state");
        if (!currentState || currentState === "closed") {
          button?.setAttribute("data-state", "opened");
          button?.setAttribute("aria-expanded", "true");
          setNavMenu(true)
        } else {
          button?.setAttribute("data-state", "closed");
          button?.setAttribute("aria-expanded", "false");
          setNavMenu(false);
        };
    };
    return(
        <div className='col-span-8 sticky top-0 bg-white z-10 grid grid-cols-8 h-[50px] 
        shadow-md text-black text-lg font-[Montserat] dark:bg-black'>
            <nav className='col-span-8 xl:col-start-2 xl:col-end-8 grid grid-cols-8 
            items-center relative'>

                <button id="button-one" aria-controls="primary-navigation" aria-expanded="false" onClick={handleClick} className='absolute ml-3'>
                    <svg stroke="var(--button-color)" fill="none" id="hamburger" className='h-[50px] w-[50px]' viewBox="-10 -10 120 120" width="20">
                        <path id="line" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" d="m 20 40 h 60 a 1 1 0 0 1 0 20 h -60 a 1 1 0 0 1 0 -40 h 30 v 70">
                        </path>
                    </svg>
                </button>

                <h1 className='font-[Montserrat] sm:text-xl text-center col-span-8 dark:text-white'>Focus Creative</h1>
                <div className='flex items-center space-x-5 right-0 absolute h-[50px] pr-5 text-[#470487]'>
                    <Link href={'https://www.linkedin.com/in/michelle-russell-focuscreative/'}>
                        <motion.button
                            whileHover={{ scale : 1.05 }}
                            whileTap={{ scale : .95 }}
                            transition={{ duration : .3 }}
                        >
                            <LinkedInIcon />
                        </motion.button>
                    </Link>
                    <Link href={'/'}>
                        <motion.button
                            whileHover={{ scale : 1.05 }}
                            whileTap={{ scale : .95 }}
                            transition={{ duration : .3 }}
                        >
                            <GoogleIcon />
                        </motion.button>
                    </Link>
                    <Link href={'/https://www.facebook.com/FocusCreativeSolutions'} className='hidden sm:inline'>
                        <motion.button
                            whileHover={{ scale : 1.05 }}
                            whileTap={{ scale : .95 }}
                            transition={{ duration : .3 }}
                        >
                            <FacebookIcon />
                        </motion.button>
                    </Link>
                    <Link href={'/'} className='hidden sm:inline'>
                        <motion.button
                            whileHover={{ scale : 1.05 }}
                            whileTap={{ scale : .95 }}
                            transition={{ duration : .3 }}
                        >
                            <InstagramIcon />
                        </motion.button>
                    </Link>
                </div>
            </nav>
            {navMenu && (<NavMenu handleClose={closeNav} handleClick={handleClick}/>)}
        </div>
    )
};