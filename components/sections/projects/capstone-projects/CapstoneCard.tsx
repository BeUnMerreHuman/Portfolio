"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import { RiGithubLine } from "react-icons/ri";
import { FiExternalLink } from "react-icons/fi";
import { SlSocialYoutube } from "react-icons/sl";

interface CapstoneCardProps {
  title: string;
  description: string;
  image: {
    src: StaticImageData;
    alt: string;
    width: number;
    height: number;
  };
  imageUrl?: string; // Kept so parent components don't break, but no longer used for background
  gitLink: string;
  youtubeLink?: string;
  liveLink: string;
  techStackList: string[];
  layout?: "default" | "reversed";
}

const CapstoneCard = ({
  title,
  description,
  image,
  gitLink,
  youtubeLink,
  liveLink,
  techStackList,
  layout = "default",
}: CapstoneCardProps) => {
  const isReversed = layout === "reversed";

  return (
    <div className="mx-auto mt-10 mb-20 max-w-containerSmall px-4 md:px-0">
      <div
        className={`flex flex-col gap-8 md:items-center md:gap-0 ${
          isReversed ? "md:flex-row-reverse" : "md:flex-row"
        }`}
      >
        {/* Image Section */}
        <a
          className="group relative h-full w-full md:w-1/2"
          href={liveLink}
          target="_blank"
          rel="noreferrer"
        >
          <div className="relative">
            <Image
              {...image}
              className="h-full w-full rounded-lg object-cover md:object-contain"
              alt={image.alt}
            />
            {/* Green overlay - disappears on hover */}
            <div className="absolute left-0 top-0 h-full w-full rounded-lg bg-imageOverlay/50 duration-300 group-hover:bg-transparent"></div>
          </div>
        </a>

        {/* Text Section */}
        <div
          className={`z-10 flex w-full flex-col gap-4 md:w-1/2 ${
            isReversed
              ? "md:items-start md:text-left md:-mr-16"
              : "md:items-end md:text-right md:-ml-16"
          }`}
        >
          {/* Header */}
          <div className={`w-full ${isReversed ? "text-left" : "text-left md:text-right"}`}>
            <p className="font-titleFont text-sm tracking-wide text-textGreen">
              Featured Project
            </p>
            <h3 className="text-2xl font-bold hover:text-textGreen">{title}</h3>
          </div>

          {/* Description block */}
          <div className="w-full rounded-md bg-[#112240] p-5 text-sm text-gray-300 shadow-xl md:text-base">
            <p>{description}</p>
          </div>

          {/* List of tech used */}
          <ul
            className={`flex flex-wrap gap-3 font-titleFont text-xs tracking-wide text-textGreen md:gap-5 md:text-sm ${
              isReversed ? "justify-start" : "justify-start md:justify-end"
            }`}
          >
            {techStackList.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>

          {/* Links to showcase project */}
          <div
            className={`flex gap-4 text-2xl ${
              isReversed ? "justify-start" : "justify-start md:justify-end"
            }`}
          >
            <a
              className="duration-300 hover:text-textGreen"
              href={gitLink}
              target="_blank"
              rel="noreferrer"
            >
              <RiGithubLine />
            </a>
            {youtubeLink && (
              <a
                className="duration-300 hover:text-textGreen"
                href={youtubeLink}
                target="_blank"
                rel="noreferrer"
              >
                <SlSocialYoutube />
              </a>
            )}
            <a
              className="duration-300 hover:text-textGreen"
              href={liveLink}
              target="_blank"
              rel="noreferrer"
            >
              <FiExternalLink />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CapstoneCard;