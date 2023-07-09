import React from "react";
import { motion } from "framer-motion";

type Props = {
  directionLeft?: boolean;
  logoUrl: string;
  name: string;
};

function Skill({ directionLeft, logoUrl, name }: Props) {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0,
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        src={logoUrl}
        alt=""
        className="rounded-full border border-gray-500 w-24 h-24 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out object-contain"
      />
      <div className="absolute opacity-0 group-hover:opacity-80 transistion duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-l text-center font-bold text-black opactiy-100">
            {name}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Skill;
