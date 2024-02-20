import React, { useRef } from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";
import {
  intevitySummary,
  kordspaceSummary,
  turingSummary,
} from "@/shared/workSummary";

type Props = {};

function WorkExperience({}: Props) {
  const intevityRef = useRef<null | HTMLDivElement>(null);
  const kordspaceRef = useRef<null | HTMLDivElement>(null);
  const turingRef = useRef<null | HTMLDivElement>(null);

  const handleIntevityClick = () => {
    intevityRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleKordspaceClick = () => {
    kordspaceRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleTuringClick = () => {
    turingRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-full flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-2 md:px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-[80px] md:top-8 uppercase tracking-[20px] text-gray-500 text-xl lg:text-2xl">
        Experience
      </h3>
      <div className="w-full flex space-x-5 overflow-x-scroll overflow-y-auto p-10 snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
        <button onClick={handleIntevityClick}>
          <div ref={intevityRef}>
            <ExperienceCard
              imgSrc="/intevity-logo.jpg"
              title="Software Engineer"
              company="Intevity"
              dateRange="Feb 2022 - June 2023"
              summaryArrary={intevitySummary}
            />
          </div>
        </button>
        <button onClick={handleKordspaceClick}>
          <div ref={kordspaceRef}>
            <ExperienceCard
              imgSrc="/kordspace-logo.jpg"
              title="ReactJS Developer"
              company="Kordspace"
              dateRange="Sep 2020 - Feb 2023"
              summaryArrary={kordspaceSummary}
            />
          </div>
        </button>
        <button onClick={handleTuringClick}>
          <div ref={turingRef}>
            <ExperienceCard
              imgSrc="/turing-logo.png"
              title="Student"
              company="Turing School of Software and Technology"
              dateRange="Jan 2020 - Oct 2020"
              summaryArrary={turingSummary}
            />
          </div>
        </button>
      </div>
    </motion.div>
  );
}

export default WorkExperience;
