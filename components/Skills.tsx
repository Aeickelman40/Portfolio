import { motion } from "framer-motion";
import React from "react";
import Skill from "./Skill";
import {
  githubUrl,
  graphQLUrl,
  jestUrl,
  jsUrl,
  nextUrl,
  nodeUrl,
  reactNativeUrl,
  reactUrl,
  reduxUrl,
  typescriptUrl,
} from "@/shared/imageUrls";

type Props = {};

function Skills({}: Props) {
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
      <h3 className="absolute top-8 uppercase tracking-[20px] text-gray-500 text-2xl">
        Skills
      </h3>
      <h3 className="absolute top-16 uppercase tracking-[3px] text-gray-500 text-sm">
        Hover over a skill for current proficiency
      </h3>
      <div className="grid grid-cols-5 gap-5">
        <Skill directionLeft={true} logoUrl={jsUrl} name="Javascript" />
        <Skill directionLeft={true} logoUrl={reactUrl} name="React" />
        <Skill directionLeft={true} logoUrl={reduxUrl} name="Redux" />
        <Skill
          directionLeft={true}
          logoUrl={reactNativeUrl}
          name="React-Native"
        />
        <Skill directionLeft={true} logoUrl={typescriptUrl} name="Typescript" />
        <Skill logoUrl={nextUrl} name="Next.js" />
        <Skill logoUrl={nodeUrl} name="Node.js" />
        <Skill logoUrl={graphQLUrl} name="GraphQL" />
        <Skill logoUrl={jestUrl} name="Test Driven Developement" />
        <Skill logoUrl={githubUrl} name="Git Version Control" />
      </div>
    </motion.div>
  );
}

export default Skills;
