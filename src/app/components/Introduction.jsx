"use client"

import { motion } from "framer-motion"
import ParticleContainer from "./ParticleContainer"

export default function Introduction() {
    return <motion.div
        initial={{ opacity: 0 }}
        animate={{
            opacity: 1,
            transition: {
                delay: 1,
                duration: 0.5,
                ease: "easeInOut"
            }
        }}
        className="w-full relative z-10 order-2 xl:order-none my-10 xl:my-0"
    >
        {/* PARTICLE BACKGROUND */}
        <motion.div
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: {
                    delay: 2,
                    duration: 1,
                    ease: "easeInOut"
                }
            }}
        >
            <ParticleContainer />
        </motion.div>

        {/* BACKGROUND PATTERN IMAGE */}
        <div className="absolute bg-[url('/pattern/pattern-1.png')] bg-cover bg-center w-full h-full opacity-5" />

        {/* TEXT CONTENT */}
        <div className="z-10 relative flex flex-col items-center xl:items-start">
            <div className="w-[88px] h-[88px] flex justify-center items-center h1 text-white bg-accent-hover rounded-xl shadow-md shadow-gray-600">
                T
            </div>
            <h1 className="text-3xl font-semibold text-white/40 mt-7">
                is for Templio
            </h1>
            <p className="text-white/40 text-base mt-6 leading-8">
                Welcome to Templio — your gateway to stunning website templates!
            </p>
            <p className="text-white/40 text-base mt-4 leading-8">
                Dive into a world of innovative designs, crafted to elevate your digital presence. Whether
                you&apos;re building a personal blog, a business site, or an e-commerce platform, Templio offers a
                versatile selection to meet your every need.
            </p>
        </div>
    </motion.div>
}