import React from "react";
import { SocialIcon } from "react-social-icons";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";

type Props = {
  title: string;
  url?: string;
  githubUrl: string;
  techStacks: Array<string>;
  features: Array<string>;
  disabled: boolean;
  images: any;
};

const ProjectCard = ({
  title,
  githubUrl,
  techStacks,
  features,
  url,
  disabled,
  images,
}: Props) => {
  return (
    <article className="flex flex-col rounded-lg flex-shrink-0 w-[300px] md:w-[600px] xl:w-[1100px] snap-center bg-[#4d4b4b] p-5 opacity-100 cursor-pointer transistion-opacity duration-200 overflow-hidden mt-20 md:mt-8 hover:border-[#F7AB0A]/40 hover:border h-[670px]">
      <div className="px-0 md:px-10">
        <h4 className="text-xl md:text-2xl font-light">{title}</h4>
        {!disabled && (
          <SocialIcon url={url} fgColor="gray" bgColor="transparent" />
        )}
        <SocialIcon url={githubUrl} fgColor="gray" bgColor="transparent" />
        <div className="flex flex-1 space-x-8">
          <div className="flex-col">
            <p className="font-bold text-xl mb-4 md:mt-1 text-left">
              Tech Stack
            </p>
            <ul className="list-disc space-y-2 ml-5 text-xs md:text-lg text-left">
              {techStacks.map((tech: string) => {
                return <li key={tech}>{tech}</li>;
              })}
            </ul>
          </div>
          <div className="flex-col">
            <p className="font-bold text-xl mb-4 md:mt-1 text-left">
              Key Features
            </p>
            <ul className="list-disc space-y-1 ml-5 text-xs text-left md:text-[15px] md:space-y-3 ">
              {features.map((feature: string) => {
                return <li key={feature}>{feature}</li>;
              })}
            </ul>
          </div>
          <div className="flex col bg-black">
            <Carousel>
              <CarouselContent>
                <CarouselItem>{images}</CarouselItem>
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
