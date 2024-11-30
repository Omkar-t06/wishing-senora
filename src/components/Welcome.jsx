import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "./ui/aurora-background";
import { TypeAnimation } from "react-type-animation";

function Welcome() {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center"
      >
        <h1 className="text-3xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-t from-[#FFD700] to-[#FFFFFF] py-4">
            Happy Birthday!!
        </h1>
        <h2 className="font-medium text-base md:text-5xl text-[#FFC1CC]">Senora</h2>
        <TypeAnimation
            sequence={[
                "The sweetest soul! 🎉",
                1000,
                "Wishing you a day as beautiful as you are! 🌟",
                1000,
                "You're not just special; you're extraordinary! 🎈",
                1000,
                "Hope your day is filled with love and joy!💖",
                1000,
            ]}
            speed={50}
            repeat={Infinity}
            className="font-medium text-base md:text-3xl bg-clip-text text-transparent bg-gradient-to-br from-[#FFC1CC] to-[#FFD700] py-4"
        />
      </motion.div>
    </AuroraBackground>
  )
}

export default Welcome