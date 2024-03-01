import { motion } from "framer-motion";
import React from "react";
import Skill from "./Skill";
import {
  firebaseUrl,
  githubUrl,
  graphQLUrl,
  jestUrl,
  jsUrl,
  nextUrl,
  nodeUrl,
  reactUrl,
  reduxUrl,
  typescriptUrl,
} from "@/shared/imageUrls";

function Skills() {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex relative flex-col text-center md:text-left xl:flex-row
    max-2-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
    >
      <h3 className="absolute top-[80px] md:top-8 uppercase tracking-[20px] text-gray-500 text-xl lg:text-2xl">
        Skills
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-5">
        <Skill directionLeft={true} logoUrl={jsUrl} name="Javascript" />
        <Skill
          directionLeft={true}
          logoUrl={reactUrl}
          name="React Native + React"
        />
        <Skill directionLeft={true} logoUrl={reduxUrl} name="Redux" />
        <Skill directionLeft={true} logoUrl={typescriptUrl} name="Typescript" />
        <Skill directionLeft={true} logoUrl={nextUrl} name="Next.js" />
        <Skill logoUrl={nodeUrl} name="Node.js" />
        <Skill logoUrl={graphQLUrl} name="GraphQL" />
        <Skill logoUrl={firebaseUrl} name="Firebase" />
        <Skill logoUrl={jestUrl} name="Test Driven Developement" />
        <Skill logoUrl={githubUrl} name="Git Version Control" />
      </div>
    </motion.div>
  );
}

export default Skills;
