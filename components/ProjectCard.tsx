import React from "react";
import { SocialIcon } from "react-social-icons";

type Props = {
  title: string;
  githubUrl: string;
};

const ProjectCard = ({ title, githubUrl }: Props) => {
  return (
    <article className="flex flex-col rounded-lg flex-shrink-0 w-[300px] md:w-[600px] xl:w-[1100px] snap-center bg-[#4d4b4b] p-5 opacity-100 cursor-pointer transistion-opacity duration-200 overflow-hidden mt-20 md:mt-8 hover:border-[#F7AB0A]/40 hover:border h-[670px]">
      <div className="px-0 md:px-10">
        <h4 className="text-xl md:text-2xl font-light">{title}</h4>
        <SocialIcon url={githubUrl} fgColor="gray" bgColor="transparent" />
        <p className="font-bold text-xl md:mt-1 text-left">Key Features: </p>
        <p className="font-bold text-xl md:mt-1 text-left">Tech Stack: </p>
      </div>
    </article>
  );
};

export default ProjectCard;
