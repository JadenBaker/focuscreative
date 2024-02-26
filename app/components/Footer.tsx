import React from 'react'

function Footer() {
  return (
    <div className='col-span-8 relative bg-[#333333] text-white
        grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-8
        p-5 py-10 dark:bg-black dark:border-t-2 dark:border-[#8E29EE]'>
        <div className='space-y-10 border-b-2 sm:border-r-2 sm:border-b-0
            pb-10 sm:pb-0 sm:pl-10 md:pr-5 md:pl-0 border-[#8E29EE] mb-20
            xl:col-start-2 xl:col-end-8'>
            <h1 className='text-3xl'>Focus Creative</h1>
            <p>Logo</p>
        </div>
        <div className='space-y-10 border-b-2 sm:border-r-2 sm:border-b-0
        pb-10 sm:pb-0 sm:pl-10 md:pr-5 border-[#8E29EE] mb-20 p-0 xl:col-end-4
        xl:col-start-2 xl:border-l-2'>
            <h1 className='text-xl text-center mb-20'>Contact Us</h1>
            <p>Phone Number : 435-272-4650</p>
            <p>Email : michelle@focuscreativesolutions.com</p>
            <div className=''>
                Socials
            </div>
        </div>
        <div className='space-y-10 border-b-2 sm:border-r-2 sm:border-b-0
        pb-10 sm:pb-0 sm:pl-10 md:pl-5 border-[#8E29EE] mb-20 p-0 xl:col-end-6
        xl:col-start-4'>
            <h1 className='text-xl text-center mb-20'>Resources</h1>
            <p>Community Forum</p>
            <p>FAQ</p>
            <p>Maintenance Hot Line</p>
        </div>
        <div className='space-y-10 mb-20 border-b-2 sm:border-r-2 sm:border-b-0
        pb-10 sm:pb-0 sm:pl-10 md:pr-5 md:pl-0 lg:ml-5 border-[#8E29EE]  p-0
        xl:col-end-8 xl:col-start-6'>
            <h1 className='text-xl text-center mb-20'>Services</h1>
            <p>Custom Designs</p>
            <p>SEO Improvements</p>
            <p>Google & Facebook Ads</p>
            <p>Digital Media</p>
            <p>Business Automation</p>
        </div>
        <div className='flex flex-col w-[100%] sm:col-span-2 lg:col-span-4 justify-center
         md:h-[370px] lg:h-auto text-center items-center space-y-5 xl:col-span-8'>
            <h3 className='font-medium text-xl'>Focus Creative</h3>
            <div className='flex items-center space-x-10'>
                <p>Privacy Policy</p>
                <p>Terms of Service</p>
            </div>
            <p>Logo</p>
        </div>
    </div>
  )
}

export default Footer