'use client'

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Backdrop from './Backdrop';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import CottageIcon from '@mui/icons-material/Cottage';
import SwipeUpIcon from '@mui/icons-material/SwipeUp';
import ImportantDevicesIcon from '@mui/icons-material/ImportantDevices';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';

const dropIn = {
  hidden : {
    x : '-100vw',
    opacity : 0,
    scale : .5
  },
  visible : {
    x : 0,
    opacity : 1,
    scale : 1,
    transition : { 
      duration : .5, 
      type : 'spring' 
    }
  },
  exit : {
    x : '100vh',
    opacity : 0,
    scale : .5,
    transition : { duration : .5 }
  }
};

interface Data {
  handleClose : () => void
  handleClick : () => void
};

const NavMenu = ({ handleClose, handleClick }:Data) => {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return null;
  }

  return (
    <Backdrop onClick={handleClose} handleClick={handleClick}>
      <motion.div className='flex items-center flex-col z-20 bg-white w-[100%] px-5 sm:px-0
            sm:w-[300px] h-screen font-[Montserrat] dark:bg-black dark:text-white' 
            variants={dropIn}
            initial='hidden'
            animate='visible'
            exit='exit'
            onClick={(e) => e.stopPropagation()}
          >
            <ul className='flex flex-col w-[100%] text-lg'>
              <li className='flex items-center justify-between w-[100%] px-5 py-5'>
                  <div className='flex items-center space-x-2'>
                    <h4 className='dark:opacity-[50%]'> Light </h4>
                    <span> | </span>
                    <h4 className='dark:opacity-[100%] opacity-[50%]'> Dark </h4>
                  </div>
                  {mounted && (
                    <div className={`bg-white text-blue-500 dark:bg-black flex items-center p-1 border-2
                        rounded-full w-16 cursor-pointer flex-shrink-0 relative border-black dark:border-white
                        ${resolvedTheme === "dark" ? "justify-end" : "justify-start"}`}
                        onClick={() => { console.log('theme : '),  setTheme(resolvedTheme === "dark" ? "light" : "dark")}}
                    >  
                      <motion.div 
                        className='w-5 h-5 z-0 bg-[#470487] rounded-full ' 
                        layout 
                        transition={{ duration : .5 }}>
                      </motion.div>
                    </div>
                  )}
              </li>
              <Link href={'/'} className='hover:rounded-md px-3 mx-2 hover:bg-gray-200 dark:hover:text-[#8E29EE] dark:hover:[#333333]'>
                <motion.button
                  onClick={() => {handleClick(), handleClose()}}
                  whileTap={{ scale : .95 }}
                  transition={{ duration : .3, ease : 'easeInOut' }}
                  className='flex items-center justify-between w-full py-4'
                >
                  <p>Home</p>
                  <CottageIcon />
                </motion.button>
              </Link>
              <Link href={'/about'} className='hover:rounded-md px-3 mx-2 hover:bg-gray-200 dark:hover:text-[#8E29EE] dark:hover:[#333333]'>
                <motion.button
                  onClick={() => {handleClick(), handleClose()}}
                  whileTap={{ scale : .95 }}
                  transition={{ duration : .3, ease : 'easeInOut' }}
                  className='flex items-center justify-between w-full py-4'
                >
                  <p>About</p>
                  <HelpOutlineIcon />
                </motion.button>
              </Link>
              <Link href={'/services'} className='hover:rounded-md px-3 mx-2 hover:bg-gray-200 dark:hover:text-[#8E29EE] dark:hover:[#333333]'>
                <motion.button
                  onClick={() => {handleClick(), handleClose()}}
                  whileTap={{ scale : .95 }}
                  transition={{ duration : .3, ease : 'easeInOut' }}
                  className='flex items-center justify-between w-full py-4'
                >
                  <p>Services</p>
                  <SwipeUpIcon />
                </motion.button>
              </Link>
              <Link href={'/portfolio'} className='hover:rounded-md px-3 mx-2 hover:bg-gray-200 dark:hover:text-[#8E29EE] dark:hover:[#333333]'>
                <motion.button
                  onClick={() => {handleClick(), handleClose()}}
                  whileTap={{ scale : .95 }}
                  transition={{ duration : .3, ease : 'easeInOut' }}
                  className='flex items-center justify-between w-full py-4'
                >
                  <p>Portfolio</p>
                  <ImportantDevicesIcon />
                </motion.button>
              </Link>
              <Link href={'/pricing'} className='hover:rounded-md px-3 mx-2 hover:bg-gray-200 dark:hover:text-[#8E29EE] dark:hover:[#333333]'>
                <motion.button
                  onClick={() => {handleClick(), handleClose()}}
                  whileTap={{ scale : .95 }}
                  transition={{ duration : .3, ease : 'easeInOut' }}
                  className='flex items-center justify-between w-full py-4'
                >
                  <p>Pricing</p>
                  <AttachMoneyIcon />
                </motion.button>
              </Link>
              <Link href={'/contact'} className='hover:rounded-md px-3 mx-2 hover:bg-gray-200 dark:hover:text-[#8E29EE] dark:hover:[#333333]'>
                <motion.button
                  onClick={() => {handleClick(), handleClose()}}
                  whileTap={{ scale : .95 }}
                  transition={{ duration : .3, ease : 'easeInOut' }}
                  className='flex items-center justify-between w-full py-4'
                >
                  <p>Contact</p>
                  <AddIcCallIcon />
                </motion.button>
              </Link>
              <Link href={'/blog'} className='hover:rounded-md px-3 mx-2 hover:bg-gray-200 dark:hover:text-[#8E29EE] dark:hover:[#333333]'>
                <motion.button
                  onClick={() => {handleClick(), handleClose()}}
                  whileTap={{ scale : .95 }}
                  transition={{ duration : .3, ease : 'easeInOut' }}
                  className='flex items-center justify-between w-full py-4'
                >
                  <p>Blog</p>
                  <DynamicFeedIcon />
                </motion.button>
              </Link>
            </ul>
      </motion.div>
    </Backdrop>
  )
};

export default NavMenu;