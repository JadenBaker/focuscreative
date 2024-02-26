'use client'

import React from "react";

export default function ReviewScroll () {
    return (
        <div className="absolute top-[350px] overflow-x-hidden grid grid-cols-8 mt-20">
            <div className="relative flex overflow-x-hidden max-w-[100%] xl:max-w-[100%]
                m-auto col-span-8 ">
                <div className=" animate-marquee whitespace-nowrap flex">
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
                        Highly recommend using them!s" 
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
                        customerName="Custom Websites" />
                    <Box 
                        customerImage="" 
                        customerTitle="" 
                        review="" 
                        customerName="Higher Conversion Rates" />
                    <Box 
                        customerImage="" 
                        customerTitle="" 
                        review="" 
                        customerName="Content Management" />
                    <Box 
                        customerImage="" 
                        customerTitle="" 
                        review="" 
                        customerName="Digital Marketing" />
                    <Box 
                        customerImage="" 
                        customerTitle="" 
                        review="" 
                        customerName="Design & Print" />
                    <Box 
                        customerImage="" 
                        customerTitle="" 
                        review="" 
                        customerName="Google Ads" />
                    <Box 
                        customerImage="" 
                        customerTitle="" 
                        review="" 
                        customerName="Web Design" />
                </div>
                <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex">
                    <Box 
                        customerImage="" 
                        customerTitle="Owner & Founder Totally Restored / Cool Decks"
                        review="About a year ago, I was ready to give up on my suspended Google Business. 
                        Thanks to Focus Creative Solutions, not only did they help me unsuspend it, 
                        but they also helped my business through Google Ads. We’ve achieved a remarkable 
                        100%+ Return on Investment in the past year. They consistently exceed my 
                        expectations; I highly recommend them for Google Ads and all your marketing needs." 
                        customerName="Tim Campbell"
                    />
                    <Box 
                        customerImage="" 
                        customerTitle="Owner, Sotelo's Concrete and Masonry" 
                        review="We have been using Focus 
                        Creative Solutions for over a year now. They created a stunning website and more
                         versions of our logo. Michelle also produced an awesome video, and designed and 
                         printed some sleek company business cards. They started doing local map rankings 
                         6 months ago for us, which is getting higher rankings weekly. All this has 
                         increased our leads for monthly sales. We’re now gearing up to launch Google 
                         Ads soon. Michelle’s support and expertise have been invaluable throughout.
                          Highly recommend using them!s" 
                          customerName="Jonathan Soleto" />
                    <Box 
                        customerImage="" 
                        customerTitle="Owner, Haven Grace Foundation and Healing Connections" 
                        review="Michelle from FocusCreative was great to work with. She really
                        took the time to understand my vision and was very mindful of providing 
                        professional content that reflected that vision. She was able to increase 
                        the traffic to my website way over 100% through social media, email 
                        campaigns and Google Ads. She is very knowledgeable about what it takes 
                        to drive sales and increase visibility online. She also created a beautiful 
                        logo for my business. I would highly recommend working with Michelle." 
                        customerName="Custom Websites" />
                    <Box 
                        customerImage="" 
                        customerTitle="" 
                        review="" 
                        customerName="Higher Conversion Rates" />
                    <Box 
                        customerImage="" 
                        customerTitle="" 
                        review="" 
                        customerName="Content Management" />
                    <Box 
                        customerImage="" 
                        customerTitle="" 
                        review="" 
                        customerName="Digital Marketing" />
                    <Box 
                        customerImage="" 
                        customerTitle="" 
                        review="" 
                        customerName="Design & Print" />
                    <Box 
                        customerImage="" 
                        customerTitle="" 
                        review="" 
                        customerName="Google Ads" />
                    <Box 
                        customerImage="" 
                        customerTitle="" 
                        review="" 
                        customerName="Web Design" />
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
        <div className="w-[300px] h-[300px] bg-white mx-5 rounded-md p-5
            sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px] lg:h-[450px]
            lg:w-[450px] shadow-sm hover:shadow-md border">
            <p className="">
                Customer Review
            </p>
        </div>
    )
};