import { motion } from "framer-motion";
import React from "react";

type Props = {};

function About({}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-[80px] md:top-8 uppercase tracking-[20px] text-gray-500 text-xl lg:text-2xl">
        About
      </h3>

      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        src="/about-photo.png"
        className="-mb-24 md:mb-0 flex-shrink-0 w-40 h-40 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[400px] xl:h-[450px]"
        alt="About Me image"
      />
      <div className="space-y-10 -mb-10 px-0 md:px-10">
        <h4 className="text-xl md:text-4xl font-semibold">
          Here is a little{" "}
          <span className="underline decoration-[#F7AB0A]/50">background</span>{" "}
        </h4>
        <p className="text-sm md:text-base">
          I am a passionate web developer who loves crafting innovative and
          user-friendly websites. With a strong foundation in using React, React
          Native, Typescript, Node and GraphQL, I thrive on transforming ideas
          into visually appealing and functional online experiences. Whether
          it&apos;s building responsive designs or implementing complex
          functionalities, I enjoy the challenges that come with creating
          seamless digital solutions.
          <br />
          <br />
          When I&apos;m not immersed in the world of coding, you&apos;ll often
          find me outside either on my bike or exploring new areas to snowboard.
          In both my professional and personal pursuits, I am driven by the
          desire to learn, grow, and create. I strive to bring a combination of
          creativity, technical expertise, and a passion for pushing boundaries
          to everything I do.
        </p>
      </div>
    </motion.div>
  );
}

export default About;
