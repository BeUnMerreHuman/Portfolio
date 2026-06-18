"use client";

import React from "react";
import { motion } from "framer-motion";
import Typewriter from "../common/TypeWriter";

const fadeIn = (delay: number) => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.5, delay },
});

const scrollToId = (e: React.MouseEvent<HTMLAnchorElement>) => {
  e.preventDefault();
  const id = e.currentTarget.href.split("#")[1];
  const elem = document.getElementById(id);
  elem?.scrollIntoView({ behavior: "smooth" });
};

const Banner: React.FC = () => {
  return (
    <section
      id="home"
      className="mx-auto flex h-full min-h-[75vh] max-w-contentContainer flex-col justify-center gap-4 mdl:px-10 mdl:py-10 lgl:gap-6 xl:px-4"
    >
      {/* Heading */}
      <motion.h3
        className="font-codeFont text-xs tracking-wide text-textGreen md:text-lg"
        {...fadeIn(2)}
      >
        Hello World, my name is
      </motion.h3>

      <motion.h1
        {...fadeIn(2.2)}
        className="flex flex-col font-titleFont text-3xl font-semibold md:text-4xl lgl:text-6xl"
      >
        Muneeb Ur Rehman Siddiqui.
        <span className="mt-2 text-lg text-textDark md:text-2xl lg:text-3xl lgl:mt-4">
          <Typewriter
            words={[
              "AI Engineer",
              "Computer Vision Practitioner",
              "Deep Learning Practitioner",
              "Data Analyst",
              "Python Developer",
              "Dataset Curator",
            ]}
          />
        </span>
      </motion.h1>

      {/* Bio Text */}
      <motion.div
        {...fadeIn(2.4)}
        className="flex flex-col gap-1.5 text-sm font-medium text-textDark sml:text-base"
      >
        <p>
          I am an Artificial Intelligence Engineer with hands-on experience building and 
          deploying end-to-end AI applications across Computer Vision, Natural Language Processing, 
          and Retrieval-Augmented Generation (RAG).
        </p>
        <p>
          Leveraging a strong foundation in designing data pipelines and fine-tuning machine 
          learning frameworks, I also focus on developing production-oriented systems using tools like 
          FastAPI and Docker to integrate intelligent solutions directly into user-facing applications.
        </p>
        <p className="mt-2 italic">Fully committed to building systems that bridge the gap between complex models and real-world utility.</p>
        <a href="#Projects" onClick={scrollToId} className="mt-2">
          <span className="group relative inline-flex h-7 cursor-pointer overflow-x-hidden text-textGreen">
            Capstone Projects
            <span className="absolute bottom-1 left-0 h-[1px] w-full translate-x-[110%] bg-textGreen transition-transform duration-500 group-hover:translate-x-0" />
          </span>
        </a>
      </motion.div>

      {/* CV Download 'Button' */}
      <motion.div {...fadeIn(2.5)}>
        <a
          href="/assets/MuneebUrRehmanSiddiqui-CV.pdf"
          download
          className="inline-flex h-10 w-40 items-center justify-center rounded-md border border-textGreen font-titleFont text-xs tracking-wide text-textGreen duration-300 hover:bg-hoverColor sml:h-14 sml:w-52 sml:text-sm"
        >
          Download my latest CV
        </a>
      </motion.div>
    </section>
  );
};

export default Banner;
