"use client"

import { motion } from "framer-motion"
import ParticleContainer from "./ParticleContainer"

export default function ParticleBackground() {
    return <motion.div
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
}