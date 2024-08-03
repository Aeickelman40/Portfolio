import Image from "next/image";
import React from "react";

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
    <article className="flex flex-col rounded-lg flex-shrink-0 w-[85vw] md:w-[600px] xl:w-[1100px] snap-center bg-[#4d4b4b] p-5 opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden mt-20 md:mt-8 hover:border-[#F7AB0A]/40 hover:border h-[80vh] md:h-[670px]">
      <div className="flex justify-center my-1 md:my-6">
        <Image
          className="w-16 h-16 xl:w-[200px] xl:h-[170px] rounded-lg object-cover object-center"
          src={imgSrc}
          alt=""
          width={200}
          height={170}
        />
      </div>
      <div className="px-0 md:px-10">
        <h4 className="text-xl md:text-2xl font-light text-center">{title}</h4>
        <p className="font-bold text-xl md:mt-1 text-center">{company}</p>
        <p className="uppercase py-2 md:py-5 text-gray-300 text-center">
          {dateRange}
        </p>
        <ul className="list-disc space-y-2 md:space-y-4 ml-5 text-sm md:text-md text-left">
          {summaryArrary.map((summaryPoint: string) => (
            <li key={summaryPoint}>{summaryPoint}</li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;
