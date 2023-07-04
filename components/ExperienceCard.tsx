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
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#4d4b4b] p-10 hover:opacity-100 opacity-40 cursor-pointer transistion-opacity duration-200 overflow-hidden">
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
        className="w-32 h-32 rounded-full xl:w-[150px] xl:h-[150px] object-cover object-start"
        src={imgSrc}
        alt=""
      />
      <div className="px-0 md:px-10">
        <h4 className="text-3xl font-light">{title}</h4>
        <p className="font-bold text-2xl mt-1">{company}</p>
        <div className="flex space-x-2 my-2">
          <Image
            src="/../public/profile-photo.png"
            height={200}
            width={200}
            alt=""
            className="h-10 w-10 rounded-full"
          />
          <Image
            src="/../public/profile-photo.png"
            height={200}
            width={200}
            alt=""
            className="h-10 w-10 rounded-full"
          />
          <Image
            src="/../public/profile-photo.png"
            height={200}
            width={200}
            alt=""
            className="h-10 w-10 rounded-full"
          />
        </div>
        <p className="uppercase py-5 text-gray-300">{dateRange}</p>
        <ul className="list-disc space-y-4 ml-5 text-lg">
          {summaryArrary.map((summaryPoint: string) => {
            return <li key={summaryPoint}>{summaryPoint}</li>;
          })}
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;
