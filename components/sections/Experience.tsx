"use client";

import React, { useState } from "react";
import SectionTitle from "../common/SectionTitle";
import ExperienceEntry from "./experiences/ExperienceEntry";
import jobEntries, { JobTabKey } from "./experiences/jobEntries";

const Experience = () => {
  const [activeTab, setActiveTab] = useState<JobTabKey>("artsTeamHead");
  const activeEntry = jobEntries.find((entry) => entry.key === activeTab)!;

  return (
    <section id="Experience" className="mx-auto flex min-h-screen max-w-containerSmall flex-col justify-center gap-5 py-24 lgl:py-32">
      <SectionTitle titleName="Where I have worked" titleNumber="02" />

      <div className="mt-5 flex w-full flex-col gap-8 sml:flex-row sml:gap-4">
        
        {/* Sidebar */}
        <div className="w-full sml:w-[fit-content]">
          {/* 
            Mobile: Full width, horizontal flex, x-scrollable 
            Desktop (sml): Auto width, vertical flex
          */}
          <ul className="flex w-full overflow-x-auto whitespace-nowrap sml:w-auto sml:flex-col sml:overflow-visible scrollbar-hide">
            {jobEntries.map(({ key, label, sub }) => (
              <li
                key={key}
                onClick={() => setActiveTab(key)}
                className={`cursor-pointer bg-transparent px-8 py-3 text-xs font-medium duration-300 hover:bg-[#112240] md:text-sm 
                border-b-2 sml:border-b-0 sml:border-l-2 ${
                  activeTab === key
                    ? "border-textGreen text-textGreen"
                    : "border-hoverColor text-textDark"
                }`}
              >
                <strong>{label}</strong>
                {sub && (
                  <>
                    <br />
                    <em className="text-sm">{sub}</em>
                  </>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Active Experience Entry */}
        <div className="w-full">
          <ExperienceEntry {...activeEntry.componentProps} />
        </div>
      </div>
    </section>
  );
};

export default Experience;