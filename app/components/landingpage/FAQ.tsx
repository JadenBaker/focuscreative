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
            md:col-start-2 md:col-end-8 text-black">
            <h2 className="text-3xl text-center">Frequently Asked Questions</h2>
            <ul className="flex flex-col mt-20">
                <li className="border-b-2 border-[#470787] relative flex-col"
                    onClick={() => { setOpen(!open); }}>
                    <header className='flex items-center justify-between py-10'>
                        <h3 className="text-center font-medium">How can you help my business?</h3>
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </header>
                    {open && (
                        <div className='left-0 right-0 top-[100px] h-[250px]'>
                            <p className='text-center max-w-[350px] m-auto pt-10 sm:max-w-[450px] md:max-w-[550px]'>
                                We, as experts, help you by implementing powerful 
                                marketing strategies to raise brand awareness, 
                                draw in new clients, increase website traffic, 
                                and increase sales.
                            </p>
                        </div>
                    )}
                </li>
                <li className="border-b-2 border-[#470787] relative flex-col"
                    onClick={() => { setOpen2(!open2); }}>
                    <header className='flex items-center justify-between py-10'>
                        <h3 className="text-center font-medium">How long does it take for marketing efforts to yield results?</h3>
                        {open2 ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </header>
                    {open2 && (
                        <div className='left-0 right-0 top-[100px] h-[250px]'>
                            <p className='text-center max-w-[350px] m-auto pt-10 sm:max-w-[450px] md:max-w-[550px]'>
                                The timeframe for results varies based on goals, industry dynamics, 
                                competition, and the chosen strategies. Our team works diligently 
                                towards achieving your business objectives, with timelines contingent 
                                upon these factors. However, patience is the key to long term success.
                            </p>
                        </div>
                    )}
                </li>
                <li className="border-b-2 border-[#470787] relative flex-col"
                    onClick={() => { setOpen3(!open3); }}>
                    <header className='flex items-center justify-between py-10'>
                        <h3 className="text-center font-medium">How is the success of marketing campaigns measured?</h3>
                        {open3 ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </header>
                    {open3 && (
                        <div className='left-0 right-0 top-[100px] h-[250px]'>
                            <p className='text-center max-w-[350px] m-auto pt-10 sm:max-w-[450px] md:max-w-[550px]'>
                                We measure campaign success using key performance indicators (KPIs) 
                                and cutting-edge analytics tools. From website visitors to conversion 
                                quotes and ROI, we provide in-depth analysis that will help you 
                                understand the impact of your advertising efforts.
                            </p>
                        </div>
                    )}
                </li>
                <li className="border-b-2 border-[#470787] relative flex-col"
                    onClick={() => { setOpen4(!open4); }}>
                    <header className='flex items-center justify-between py-10'>
                        <h3 className="text-center font-medium">Why can I not see pricing packages for your agency?</h3>
                        {open4 ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </header>
                    {open4 && (
                        <div className='left-0 right-0 top-[100px] h-[250px]'>
                            <p className='text-center max-w-[350px] m-auto pt-10 sm:max-w-[450px] md:max-w-[550px]'>
                                Our pricing varies based on factors such as your business’s size, 
                                marketing needs, and project scope. We offer 
                                tailored solutions that are unique to your business and fit your 
                                budget. Let’s discuss your requirements and create a plan that 
                                works for you.
                            </p>
                        </div>
                    )}
                </li>
                <li className="border-b-2 border-[#470787] relative flex-col"
                    onClick={() => { setOpen5(!open5); }}>
                    <header className='flex items-center justify-between py-10'>
                        <h3 className="text-center font-medium">Do you have experience working with businesses in my industry?</h3>
                        {open5 ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </header>
                    {open5 && (
                        <div className='left-0 right-0 top-[100px] h-[250px]'>
                            <p className='text-center max-w-[350px] m-auto pt-10 sm:max-w-[450px] md:max-w-[550px]'>
                                We understand the unique challenges and requirements of many industries. 
                                We also research every industry before starting, to keep up on the 
                                industry trends which benefit the client’s marketing, and we customize 
                                our strategies to ensure success in your sector.
                            </p>
                        </div>
                    )}
                </li>
            </ul>
        </div>
    )
}