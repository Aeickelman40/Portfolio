import React from "react";
import { motion } from "framer-motion";

function BackgroundCircles() {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 0.1],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"],
      }}
      transition={{
        duration: 2.5,
      }}
      className="relative flex justify-center items-center pt-24"
    >
      <div className="absolute border border-white rounded-full h-36 w-36 lg:h-[200px] lg:w-[200px] mt-52 animate-ping" />
      <div className="absolute border border-white rounded-full h-52 w-52 lg:h-[300px] lg:w-[300px] mt-52" />
      <div className="absolute border border-white rounded-full h-72 w-72 lg:h-[500px] lg:w-[500px] mt-52" />
      <div className="absolute rounded-full border-2 border-[#F7AB0A]  opacity-20 h-60 w-60 lg:h-[650px] lg:w-[650px] mt-52 animate-pulse" />
      <div className="absolute border border-white rounded-full h-72 w-72 lg:h-[800px] lg:w-[800px] mt-52" />
    </motion.div>
  );
}

export default BackgroundCircles;
