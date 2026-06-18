"use client";

import React from "react";
import Image from "next/image";
import {
  logo,
  profileImgCircle,
  Appsheet,
  AWS,
  Bash,
  Docker,
  DuckDB,
  Ethereum,
  FastAPI,
  GithubActions,
  HuggingFace,
  Kaggle,
  Kubernetes,
  Langchain,
  Linux,
  MLflow,
  MongoDB,
  OpenCV,
  Parquet,
  Playwright,
  PowerBI,
  Python,
  Pytorch,
  ScikitLearn,
  Snakemake,
  SQLserver,
  Tensorflow,
  Unsloth,
  Langgraph,
  n8n,
} from "@/public/assets";
import SectionTitle from "../common/SectionTitle";

// SkillIcon component
const SkillIcon = ({
  src,
  alt,
  title,
  className = "w-12 max-md:w-6 rounded-full",
}: {
  src: any;
  alt: string;
  title: string;
  className?: string;
}) => (
  <li className="flex items-center transition-all duration-300 hover:-translate-y-2">
    <Image
      className={`${className} hover:animate-pulse hover:contrast-150`}
      src={src}
      alt={alt}
      title={title}
      loading="lazy"
    />
  </li>
);

const skillGroups = [
  {
    title: "Hard Skills",
    skills: [
      { src: Linux, alt: "Linux", title: "Linux", className: "w-11 max-md:w-6 rounded-none" },
      { src: Python, alt: "Python", title: "Python", className: "w-12 max-md:w-6" },
      { src: Bash, alt: "Bash", title: "Bash", className: "w-10 max-md:w-6" },
      { src: SQLserver, alt: "SQL Server", title: "SQL Server", className: "w-12 max-md:w-6" },
      { src: HuggingFace, alt: "HuggingFace", title: "HuggingFace", className: "w-12 max-md:w-6" },
      { src: ScikitLearn, alt: "Scikit-Learn", title: "Scikit-Learn", className: "w-12 max-md:w-6 rounded-none" },
      { src: Pytorch, alt: "Pytorch", title: "Pytorch" },
      { src: Tensorflow, alt: "Tensorflow", title: "Tensorflow", className: "w-11 max-md:w-6" },
      { src: OpenCV, alt: "OpenCV", title: "OpenCV", className: "w-10 max-md:w-6" },
      { src: Unsloth, alt: "Unsloth", title: "Unsloth", className: "w-12 max-md:w-6 rounded-full" },
      { src: MLflow, alt: "MLflow", title: "MLflow", className: "w-12 max-md:w-6 rounded-full" },
      { src: Langchain, alt: "Langchain", title: "Langchain", className: "w-12 max-md:w-6 rounded-full" },
      { src: FastAPI, alt: "FastAPI", title: "FastAPI", className: "w-12 max-md:w-6" },
      { src: DuckDB, alt: "DuckDB", title: "DuckDB", className: "w-12 max-md:w-6 rounded-full" },
      { src: MongoDB, alt: "MongoDB", title: "MongoDB", className: "w-11 max-md:w-6" },
      { src: Snakemake, alt: "Snakemake", title: "Snakemake", className: "w-12 max-md:w-6" },
      { src: Playwright, alt: "PlayWright", title: "PlayWright", className: "w-12 max-md:w-6" },
      { src: Docker, alt: "Docker", title: "Docker", className: "w-12 max-md:w-6" },
      { src: AWS, alt: "AWS", title: "AWS", className: "w-12 max-md:w-6" },
      { src: PowerBI, alt: "PowerBI", title: "PowerBI", className: "w-12 max-md:w-6 rounded-none" },
    ],
  },
  {
    title: "Currently Exploring",
    skills: [
      { src: Langgraph, alt: "Langgraph", title: "Langgraph", className: "w-12 max-md:w-6 rounded-full" },
      { src: n8n, alt: "n8n", title: "n8n", className: "w-12 max-md:w-6" },
      { src: Kubernetes, alt: "Kubernetes", title: "Kubernetes", className: "w-12 max-md:w-6" },
      { src: GithubActions, alt: "GithubActions", title: "GithubActions", className: "w-12 max-md:w-6" },
      { src: Ethereum, alt: "Ethereum", title: "Ethereum", className: "w-12 max-md:w-6" },
    ],
  },
];

const About = () => {
  return (
    <section id="about" className="mx-auto flex min-h-screen max-w-containerSmall flex-col justify-center gap-8 py-24 mdl:px-10 lgl:py-32">
      <div className="flex items-center gap-10 pt-20 sml:pt-5">
        <SectionTitle titleNumber="01" titleName="About me" />
      </div>

      {/* CONTENT CONTAINER - GRID */}
      <div className="grid auto-rows-auto grid-cols-6">
        {/* Text block + mobile profile image */}
        <div className="col-start-1 col-end-5 row-span-2 text-base font-medium text-textDark max-mdl:col-span-full">
          <div className="text-xs sm:text-sm sml:text-base mdl:w-11/12">
            <div className="float-right py-6 pl-5">
              <div className="relative">
                <Image
                  className="left-0 top-0 w-24 rounded-full border-2 border-textGreen sm:w-32 sml:w-40 md:w-48 mdl:hidden"
                  src={profileImgCircle}
                  alt="profilepicture"
                />
                <div className="absolute left-0 top-0 h-24 w-24 rounded-full bg-textGreen/20 duration-300 hover:bg-transparent sm:h-32 sm:w-32 sml:h-40 sml:w-40 md:h-48 md:w-48 mdl:hidden" />
              </div>
            </div>
            <p>
  Hello, I'm an <span className="text-textGreen"> Artificial Intelligence Engineer </span>
  based in Karachi, Pakistan.

  <br />
  <br />

  I've always been fascinated by complex systems, whether they exist in technology,
  nature, or the fictional worlds. The stories that resonate with me most are those 
  that leave no stone unturned, where every detail, connection, and consequence matters.

  <br />
  <br />

  That same curiosity is what drew me toward Artificial Intelligence. I enjoy exploring
  how data, algorithms, and software come together to create systems that are greater
  than the sum of their parts. Rather than simply using existing tools, I'm most
  interested in understanding how they work and how they can be pushed further.

  <br />
  <br />

  I am particularly drawn to projects that involve experimentation, research, and
  discovering new approaches to difficult problems. Whether it's Computer Vision,
  Data Science, or emerging developments in AI, I enjoy learning how ideas evolve
  and where the field is heading next.

  <br />
  <br />

  <em>
    I remain optimistic about the future of AI and the opportunities it creates,
    believing that today's research can become tomorrow's everyday reality.
  </em>
</p>
          </div>
        </div>

        {/* Profile Image Section */}
        <div className="group relative col-start-5 col-end-7 row-start-1 row-end-3 grid place-items-center max-mdl:hidden">
          <div className="absolute -left-6 -top-6 h-52 w-52 rounded-full lgl:h-80 lgl:w-80">
            <Image
              className="fill absolute z-30 h-52 w-52 rounded-full border-2 border-textGreen object-cover lgl:h-80 lgl:w-80"
              src={profileImgCircle}
              alt="Muneeb Ur Rehman Siddiqui - Profile picture"
            />
            <div className="absolute left-0 top-0 z-30 hidden h-52 w-52 rounded-full bg-textGreen/20 duration-300 group-hover:bg-transparent mdl:inline-block lgl:h-80 lgl:w-80" />
            <div className="absolute left-6 top-6 z-10 hidden h-52 w-52 rounded-full border-2 border-textGreen transition-transform duration-100 group-hover:-translate-x-6 group-hover:-translate-y-6 mdl:inline-block lgl:h-80 lgl:w-80" />
          </div>
        </div>

        {/* Skills Section (Hard Skills + Exploring) */}
        <div className="col-span-full row-start-3 pt-5">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            {skillGroups.map(({ title, skills }) => (
              <div key={title}>
                <p className="pb-5 text-center font-codeFont text-sm font-bold text-textDark lg:text-base">
                  {title}:
                </p>
                <ul className="flex flex-row flex-wrap justify-center gap-5 md:gap-10">
                  {skills.map(({ src, alt, title, className }) => (
                    <SkillIcon
                      key={title}
                      src={src}
                      alt={alt}
                      title={title}
                      className={className}
                    />
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
