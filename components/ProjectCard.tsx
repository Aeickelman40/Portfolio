import React from "react";
import { SocialIcon } from "react-social-icons";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import Image from "next/image";

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
    <article className="flex flex-col rounded-lg flex-shrink-0 w-[85vw] md:w-[600px] xl:w-[1100px] snap-center bg-[#4d4b4b] p-5 opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden mt-20 md:mt-8 hover:border-[#F7AB0A]/40 hover:border h-[80vh] md:h-[670px]">
      <div className="px-0 md:px-10">
        <h4 className="text-xl md:text-2xl font-light text-center">{title}</h4>
        <div className="flex justify-center space-x-2 mt-2">
          {!disabled && (
            <SocialIcon url={url} fgColor="gray" bgColor="transparent" />
          )}
          <SocialIcon url={githubUrl} fgColor="gray" bgColor="transparent" />
        </div>
        <div className="flex flex-col md:flex-row space-y-5 md:space-y-0 md:space-x-10 mt-5">
          <div>
            <p className="font-bold text-xl mb-4 text-left">Tech Stack</p>
            <ul className="list-disc space-y-2 ml-5 text-xs md:text-lg text-left">
              {techStacks.map((tech: string) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
          </div>
          <div className="flex-1">
            <p className="font-bold text-xl mb-4 text-left">Key Features</p>
            <ul className="list-disc space-y-1 ml-5 text-xs md:text-[15px] md:space-y-3 text-left">
              {features.map((feature: string) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </div>
          <Carousel className="flex-1 self-center hidden md:flex md:items-center lg:align-middle">
            <CarouselContent>
              {images.map((image: any) => (
                <CarouselItem
                  key={image.id}
                  className="flex justify-center items-center h-full"
                >
                  <Image
                    src={image.src}
                    width={image.width}
                    height={image.height}
                    alt={`Image ${image.id}`}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
