import React, { useRef } from "react";
import { motion } from "framer-motion";

import {
  aiStack,
  discordStack,
  spotifyStack,
} from "@/shared/projects/projectTechStacks";

import {
  aiSaaSFeatures,
  discordFeatures,
  spotifyFeatures,
} from "@/shared/projects/projectFeatures";

import ProjectCard from "./ProjectCard";

const aiImages = [
  { id: 1, src: "/shared/ai-photos/ai-1.png", width: 500, height: 300 },
  { id: 2, src: "/shared/ai-photos/ai-2.png", width: 500, height: 300 },
  { id: 3, src: "/shared/ai-photos/ai-3.png", width: 500, height: 300 },
  { id: 4, src: "/shared/ai-photos/ai-4.png", width: 500, height: 300 },
  { id: 5, src: "/shared/ai-photos/ai-5.png", width: 500, height: 300 },
];

const discordImages = [
  {
    id: 1,
    src: "/shared/discord-photos/discord-1.png",
    width: 500,
    height: 300,
  },
  {
    id: 2,
    src: "/shared/discord-photos/discord-2.png",
    width: 500,
    height: 300,
  },
  {
    id: 3,
    src: "/shared/discord-photos/discord-3.png",
    width: 500,
    height: 300,
  },
];

const spotifyImages = [
  {
    id: 1,
    src: "/shared/spotify-photos/spotify-1.png",
    width: 500,
    height: 300,
  },
  {
    id: 2,
    src: "/shared/spotify-photos/spotify-2.png",
    width: 500,
    height: 300,
  },
  {
    id: 3,
    src: "/shared/spotify-photos/spotify-3.png",
    width: 500,
    height: 300,
  },
  {
    id: 4,
    src: "/shared/spotify-photos/spotify-4.png",
    width: 500,
    height: 300,
  },
];

function Projects() {
  const discordRef = useRef<null | HTMLDivElement>(null);
  const aiRef = useRef<null | HTMLDivElement>(null);
  const spotifyRef = useRef<null | HTMLDivElement>(null);

  const handleDiscordClick = () => {
    discordRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleAIClick = () => {
    aiRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSpotifyClick = () => {
    spotifyRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-[80px] md:top-8 uppercase tracking-[20px] text-gray-500 text-xl lg:text-2xl">
        Projects
      </h3>
      <div className="w-full flex space-x-5 overflow-x-scroll overflow-y-auto p-10 snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
        <button onClick={handleSpotifyClick}>
          <div ref={spotifyRef}>
            <ProjectCard
              url="https://alex-eickelman-spotify.vercel.app/"
              title="Spotify Clone"
              githubUrl="https://github.com/Aeickelman40/spotify-clone"
              techStacks={spotifyStack}
              features={spotifyFeatures}
              disabled={false}
              images={spotifyImages}
            />
          </div>
        </button>
        <button onClick={handleAIClick}>
          <div ref={aiRef}>
            <ProjectCard
              url="https://ai-saas-blond.vercel.app/"
              title="AI SaaS"
              githubUrl="https://github.com/Aeickelman40/ai-saas"
              techStacks={aiStack}
              features={aiSaaSFeatures}
              disabled={true}
              images={aiImages}
            />
          </div>
        </button>

        <button onClick={handleDiscordClick}>
          <div ref={discordRef}>
            <ProjectCard
              url=""
              title="Discord Clone"
              githubUrl="https://github.com/Aeickelman40/ideal-lamp"
              techStacks={discordStack}
              features={discordFeatures}
              disabled={true}
              images={discordImages}
            />
          </div>
        </button>
      </div>
    </motion.div>
  );
}

export default Projects;
