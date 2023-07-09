import React, { useRef } from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";
import { intevitySummary, kordspaceSummary } from "@/shared/workSummary";

type Props = {};

function WorkExperience({}: Props) {
  const ref = useRef<null | HTMLDivElement>(null);
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
      className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-8 uppercase tracking-[20px] text-gray-500 text-2xl">
        Experience
      </h3>
      <div className="w-full flex space-x-5 overflow-x-scroll overflow-y-auto p-10 snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
        <button onClick={handleIntevityClick}>
          <div ref={intevityRef}>
            <ExperienceCard
              imgSrc="https://media.licdn.com/dms/image/C560BAQFPuFCSF06gRQ/company-logo_200_200/0/1553198011945?e=1695859200&v=beta&t=RDJgRkm10kILAskdAsKrpzYQ2hV5BbV9uz2oPprJa18"
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
              imgSrc="https://media.licdn.com/dms/image/C560BAQG7k-D5q4AtrQ/company-logo_200_200/0/1603909023525?e=1695859200&v=beta&t=qm7Ck5iBX5igALLEYvjdMsxonIx86EU1x5SMZhl_O0w"
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
              imgSrc="https://media.licdn.com/dms/image/C4E0BAQET8fJiAvWTDA/company-logo_200_200/0/1519911325543?e=1695859200&v=beta&t=mU6LcqNP-aMDSQIOpsJ81dNoq5_xFH93L5YDn-XSX4U"
              title="Learner"
              company="Life"
              dateRange="Fureva"
              summaryArrary={intevitySummary}
            />
          </div>
        </button>
      </div>
    </motion.div>
  );
}

export default WorkExperience;
