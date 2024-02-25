'use client'

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useState } from 'react';

export default function FAQ() {
    const [open, setOpen] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);
    const [open4, setOpen4] = useState(false);
    const [open5, setOpen5] = useState(false);
    
    return (
        <div className="col-span-8 2xl:col-start-3 2xl:col-end-7 my-20 p-5 dark:text-white
            md:col-start-2 md:col-end-8">
            <h2 className="text-3xl text-center">Frequently Asked Questions</h2>
            <ul className="flex flex-col mt-20">
                <li className="border-b-2 border-[#470787] relative flex-col"
                    onClick={() => { setOpen(!open); }}>
                    <header className='flex items-center justify-between py-10'>
                        <h3 className="text-center font-medium">How can I rank higher on google ?</h3>
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </header>
                    {open && (
                        <div className='left-0 right-0 top-[100px] h-[250px]'>
                            Open 
                        </div>
                    )}
                </li>
                <li className="border-b-2 border-[#470787] relative flex-col"
                    onClick={() => { setOpen2(!open2); }}>
                    <header className='flex items-center justify-between py-10'>
                        <h3 className="text-center font-medium">How can I increase in person store visits ?</h3>
                        {open2 ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </header>
                    {open2 && (
                        <div className='left-0 right-0 top-[100px] h-[250px]'>
                            Open 2
                        </div>
                    )}
                </li>
                <li className="border-b-2 border-[#470787] relative flex-col"
                    onClick={() => { setOpen3(!open3); }}>
                    <header className='flex items-center justify-between py-10'>
                        <h3 className="text-center font-medium">How can I reach my target audience ?</h3>
                        {open3 ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </header>
                    {open3 && (
                        <div className='left-0 right-0 top-[100px] h-[250px]'>
                            Open 3
                        </div>
                    )}
                </li>
                <li className="border-b-2 border-[#470787] relative flex-col"
                    onClick={() => { setOpen4(!open4); }}>
                    <header className='flex items-center justify-between py-10'>
                        <h3 className="text-center font-medium">Do you manage social media content ?</h3>
                        {open4 ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </header>
                    {open4 && (
                        <div className='left-0 right-0 top-[100px] h-[250px]'>
                            Open 4
                        </div>
                    )}
                </li>
                <li className="border-b-2 border-[#470787] relative flex-col"
                    onClick={() => { setOpen5(!open5); }}>
                    <header className='flex items-center justify-between py-10'>
                        <h3 className="text-center font-medium">How can my brand be more impactful ?</h3>
                        {open5 ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </header>
                    {open5 && (
                        <div className='left-0 right-0 top-[100px] h-[250px]'>
                            Open 5
                        </div>
                    )}
                </li>
            </ul>
        </div>
    )
}