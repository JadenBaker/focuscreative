'use client'

import Link from "next/link"
import Header from "./components/Header";
import { motion } from 'framer-motion';

export default function NotFound() {
    return (
        <main className="min-h-screen bg-white grid grid-cols-8 text-black dark:bg-black dark:text-white">
            <div className="col-span-8 flex items-center flex-col p-5 pt-40">
                <h1 className="text-center text-5xl">Page could not be found :( </h1>
                <h1 className="text-3xl text-center mt-20">404</h1>
                <Link href={'/'}>
                    <motion.button 
                        whileHover={{ scale : 1.03 }} 
                        whileTap={{ scale : .95 }}
                        transition={{ duration : .3 }}
                        className="rounded-md py-4 px-20 bg-white shadow-md border-2 mt-20 hover:shadow-lg
                        border-[#470487] hover:bg-[#470487] hover:text-white dark:bg-black dark:border-[#470787]
                        dark:hover:bg-[#470787]"
                    >
                        Return Home
                    </motion.button>
                </Link>
            </div>
        </main>
    )
}