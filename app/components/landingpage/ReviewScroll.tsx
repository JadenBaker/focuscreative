'use client'

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

export default function ReviewScroll () {
    return (
        <div className="absolute top-[190px] overflow-hidden grid grid-cols-8 mt-20">
            <div className="relative flex overflow-x-hidden max-w-[100%] xl:max-w-[100%]
                m-auto col-span-8 min-h-[540px]">
                <div className=" animate-marqueeSlow whitespace-nowrap flex py-5">
                    <Box 
                        customerImage="" 
                        customerTitle="Owner & Founder Totally Restored / Cool Decks"
                        review="About a year ago, I was ready to give up on my suspended Google Business. 
                        Thanks to Focus Creative Solutions, not only did they help me unsuspend it, 
                        but they also helped my business through Google Ads. We’ve achieved a remarkable 
                        100%+ Return on Investment in the past year. They consistently exceed my expectations; 
                        I highly recommend them for Google Ads and all your marketing needs." 
                        customerName="Tim Campbell" />
                    <Box 
                        customerImage="" 
                        customerTitle="Owner, Sotelo's Concrete and Masonry" 
                        review="We have been using Focus Creative Solutions for over a year now. 
                        They created a stunning website and more versions of our logo. 
                        Michelle also produced an awesome video, and designed and printed some 
                        sleek company business cards. They started doing local map rankings 
                        6 months ago for us, which is getting higher rankings weekly. All this has 
                        increased our leads for monthly sales. We’re now gearing up to launch Google 
                        Ads soon. Michelle’s support and expertise have been invaluable throughout. 
                        Highly recommend using thems!" 
                        customerName="Jonathan Soleto" />
                    <Box 
                        customerImage="" 
                        customerTitle="Owner, Haven Grace Foundation and Healing Connections" 
                        review="Michelle from FocusCreative was great to work with. She really took 
                        the time to understand my vision and was very mindful of providing professional 
                        content that reflected that vision. She was able to increase the traffic to my 
                        website way over 100% through social media, email campaigns and Google Ads. 
                        She is very knowledgeable about what it takes to drive sales and increase 
                        visibility online. She also created a beautiful logo for my business. 
                        I would highly recommend working with Michelle." 
                        customerName="Tami Robinson" />
                    <Box 
                        customerImage="" 
                        customerTitle="Owner Sheepadoodle Heaven" 
                        review="FocusCreative created a great website for my blog, 
                        Sheepadoodle Heaven. I was on a budget and Michelle gave me some 
                        affordable options for my website, hosting and domain name. 
                        In the process she also created and designed a great catchy logo 
                        for me. She really takes the time to get to know your business and 
                        knows what you need. I want her to continue helping me with my
                         website and recommend her agency for any marketing." 
                        customerName="Andrea Morris" />
                    <Box 
                        customerImage="" 
                        customerTitle="Owner PacificOtion Body Care" 
                        review="
                        Michelle has worked on several projects for my company PacificOtion Body Care. 
                        She has helped me with development of marketing projects, and Web Design on my 
                        Shopify website. She helps me with SEO – Google Analytics and more. She designed 
                        and printed a great postcard for my company. My revenue has already increased over 
                        20% since I started using her agency. She is not just good at design and marketing 
                        strategy, she is also great to work with. She understands the customer 
                        perspective and she really wants businesses to succeed." 
                        customerName="Valerie Hart" />
                </div>
                <div className="absolute top-0 animate-marquee2Slow whitespace-nowrap flex py-5">
                <Box 
                        customerImage="" 
                        customerTitle="Owner & Founder Totally Restored / Cool Decks"
                        review="About a year ago, I was ready to give up on my suspended Google Business. 
                        Thanks to Focus Creative Solutions, not only did they help me unsuspend it, 
                        but they also helped my business through Google Ads. We’ve achieved a remarkable 
                        100%+ Return on Investment in the past year. They consistently exceed my expectations; 
                        I highly recommend them for Google Ads and all your marketing needs." 
                        customerName="Tim Campbell" />
                    <Box 
                        customerImage="" 
                        customerTitle="Owner, Sotelo's Concrete and Masonry" 
                        review="We have been using Focus Creative Solutions for over a year now. 
                        They created a stunning website and more versions of our logo. 
                        Michelle also produced an awesome video, and designed and printed some 
                        sleek company business cards. They started doing local map rankings 
                        6 months ago for us, which is getting higher rankings weekly. All this has 
                        increased our leads for monthly sales. We’re now gearing up to launch Google 
                        Ads soon. Michelle’s support and expertise have been invaluable throughout. 
                        Highly recommend using thems!" 
                        customerName="Jonathan Soleto" />
                    <Box 
                        customerImage="" 
                        customerTitle="Owner, Haven Grace Foundation and Healing Connections" 
                        review="Michelle from FocusCreative was great to work with. She really took 
                        the time to understand my vision and was very mindful of providing professional 
                        content that reflected that vision. She was able to increase the traffic to my 
                        website way over 100% through social media, email campaigns and Google Ads. 
                        She is very knowledgeable about what it takes to drive sales and increase 
                        visibility online. She also created a beautiful logo for my business. 
                        I would highly recommend working with Michelle." 
                        customerName="Tami Robinson" />
                    <Box 
                        customerImage="" 
                        customerTitle="Owner Sheepadoodle Heaven" 
                        review="FocusCreative created a great website for my blog, 
                        Sheepadoodle Heaven. I was on a budget and Michelle gave me some 
                        affordable options for my website, hosting and domain name. 
                        In the process she also created and designed a great catchy logo 
                        for me. She really takes the time to get to know your business and 
                        knows what you need. I want her to continue helping me with my
                         website and recommend her agency for any marketing." 
                        customerName="Andrea Morris" />
                    <Box 
                        customerImage="" 
                        customerTitle="Owner PacificOtion Body Care" 
                        review="
                        Michelle has worked on several projects for my company PacificOtion Body Care. 
                        She has helped me with development of marketing projects, and Web Design on my 
                        Shopify website. She helps me with SEO – Google Analytics and more. She designed 
                        and printed a great postcard for my company. My revenue has already increased over 
                        20% since I started using her agency. She is not just good at design and marketing 
                        strategy, she is also great to work with. She understands the customer 
                        perspective and she really wants businesses to succeed." 
                        customerName="Valerie Hart" />
                </div>
            </div>
        </div>
    )
};

interface BoxData {
    customerName : string,
    review : string,
    customerImage : string,
    customerTitle : string
};

export function Box ({ customerName, review, customerImage, customerTitle }:BoxData) {
    return (
        <motion.div 
            whileHover={{ scale : 1.05 }}
            transition={{ duration : 1, ease : 'easeInOut'}}
            className="w-[330px] bg-white mx-5 rounded-xl p-5 text-sm sm:text-[16px]
            md:text-[18px] lg:text-[20px] leading-[22px] border-2 text-black
            sm:w-[350px] md:w-[400px] lg:w-[450px] shadow-sm dark:bg-black dark:text-white
            dark:border-[#470787] hover:shadow-lg border overflow-hidden">
            <header className="flex items-center justify-between space-x-5">
                <div className="flex flex-col space-y-3">
                    <h1 className="font-bold text-xl">{customerName}</h1>
                    <h3 className="text-sm max-w-[250px] font-medium text-wrap">{customerTitle}</h3>
                </div>
                <Image 
                    src={customerImage} 
                    alt="customer" 
                    className="w-[50px] h-[50px] border rounded-full" 
                    height={50}
                    width={50}
                />
            </header>
            <p className=" max-w-[280px] sm:max-w-[330px] md:max-w-[400px] text-wrap mt-10">
                {review}
            </p>
        </motion.div>
    )
};