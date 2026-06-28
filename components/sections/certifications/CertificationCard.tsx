"use client";

import React from "react";
import Image from "next/image";
import { FiExternalLink } from "react-icons/fi";
import { CertificationEntry } from "./certificationEntries";

const CertificationCard = ({
  title,
  provider,
  providerLogo,
  certImage,
  link,
  skills,
}: CertificationEntry) => {
  return (
    <div className="group flex h-full w-full flex-col justify-between gap-5 rounded-lg bg-[#112240] p-6 transition-transform duration-300 hover:-translate-y-2">
      
      {/* 1. Certificate Image with Capstone-style Green Overlay */}
      <a
        className="relative block h-48 w-full overflow-hidden rounded-lg"
        href={link}
        target="_blank"
        rel="noreferrer"
      >
        <Image
          src={certImage}
          alt={`${title} certificate`}
          className="h-full w-full object-cover duration-300 group-hover:scale-105"
        />
        {/* Green overlay - disappears on hover just like CapstoneCard */}
        <div className="absolute left-0 top-0 h-full w-full bg-imageOverlay/50 duration-300 group-hover:bg-transparent"></div>
      </a>

      {/* 2. Provider Logo & Name */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          {/* FIX: Removed p-1 from the div, changed to object-cover on the Image */}
          <div className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-full bg-white">
            <Image
              src={providerLogo}
              alt={provider}
              className="h-full w-full object-cover" 
            />
          </div>
          <p className="font-titleFont text-sm tracking-wide text-textGreen">
            {provider}
          </p>
        </div>
        <a href={link} target="_blank" rel="noreferrer">
          <FiExternalLink className="text-xl duration-300 hover:text-textGreen" />
        </a>
      </div>

      {/* 3. Title */}
      <div>
        <a href={link} target="_blank" rel="noreferrer">
          <h2 className="font-titleFont text-xl font-semibold tracking-wide duration-300 group-hover:text-textGreen">
            {title}
          </h2>
        </a>
      </div>

      {/* 4. Skills / Tech Stack */}
      <ul className="mt-auto flex flex-col items-start gap-2 text-xs text-textDark mdl:text-sm">
        {skills.map((skill, i) => (
          <li className="hover:text-textGreen" key={i}>
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CertificationCard;