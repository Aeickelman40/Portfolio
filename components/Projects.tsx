import React, { useRef } from "react";
import { motion } from "framer-motion";

import ProjectCard from "./ProjectCard";

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
        <button onClick={handleDiscordClick}>
          <div ref={discordRef}>
            <ProjectCard
              title="Discord Clone"
              githubUrl="https://github.com/Aeickelman40/ideal-lamp"
            />
          </div>
        </button>
        <button onClick={handleAIClick}>
          <div ref={aiRef}>
            <ProjectCard
              title="AI SaaS"
              githubUrl="https://github.com/Aeickelman40/ai-saas"
            />
          </div>
        </button>
        <button onClick={handleSpotifyClick}>
          <div ref={spotifyRef}>
            <ProjectCard
              title="Spotify Clone"
              githubUrl="https://github.com/Aeickelman40/spotify-clone"
            />
          </div>
        </button>
      </div>
    </motion.div>
  );
}

export default Projects;
