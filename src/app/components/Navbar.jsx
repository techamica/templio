"use client"

import { motion } from "framer-motion"

export default function Navbar() {
    return <motion.div
        initial={{ opacity: 0 }}
        animate={{
            opacity: 1,
            transition: {
                delay: 0.4,
                duration: 0.5,
                ease: "easeInOut"
            }
        }}
        className="w-screen fixed left-0 top-0 z-20"
    >
        <nav
            className="container mx-auto flex justify-center md:justify-start gap-[6px] items-end py-6">
            <div className="flex gap-2 items-end">
                <h1 className="text-4xl font-extrabold text-brand">Templio</h1>
                <div className="w-2 h-2 bg-rose-500 rounded-full mb-2" />
            </div>
        </nav>
    </motion.div>
}