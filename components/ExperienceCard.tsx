import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";

type Props = {
  imgSrc: string;
  title: string;
  company: string;
  dateRange: string;
  summaryArrary: Array<string>;
};

const ExperienceCard = ({
  imgSrc,
  title,
  company,
  dateRange,
  summaryArrary,
}: Props) => {
  return (
    <article className="flex flex-col rounded-lg items-center flex-shrink-0 w-[500px] md:w-[600px] xl:w-[1100px] snap-center bg-[#4d4b4b] p-5 opacity-100 cursor-pointer transistion-opacity duration-200 overflow-hidden mt-8 hover:border-[#F7AB0A]/40 hover:border h-[670px]">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        className="w-32 h-32 rounded-full xl:w-[150px] xl:h-[150px] object-cover object-start my-6"
        src={imgSrc}
        alt=""
      />
      <div className="px-0 md:px-10">
        <h4 className="text-2xl font-light text-center">{title}</h4>
        <p className="font-bold text-xl mt-1 text-center">{company}</p>
        <p className="uppercase py-5 text-gray-300 text-center">{dateRange}</p>
        <ul className="list-disc space-y-4 ml-5 text-md text-left">
          {summaryArrary.map((summaryPoint: string) => {
            return <li key={summaryPoint}>{summaryPoint}</li>;
          })}
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;
