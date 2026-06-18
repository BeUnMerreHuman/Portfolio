"use client";

import React, { useState } from "react";
import SectionTitle from "../common/SectionTitle";
import certificationEntries from "./certifications/certificationEntries";
import CertificationCard from "./certifications/CertificationCard";

const Certifications = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <section id="Certifications" className="mx-auto max-w-contentContainer px-4 py-12 pb-24 lgl:py-32">
      {/* Note: I'm setting the title number to 04 assuming you adjust Contact to 05 */}
      <SectionTitle titleName="Certifications" titleNumber="04" />
      
      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lgl:px-10">
        {certificationEntries
          .slice(0, showMore ? undefined : 3)
          .map((cert, i) => (
            <CertificationCard key={i} {...cert} />
          ))}
      </div>

      {/* Show More / Show Less Button */}
      {certificationEntries.length > 2 && (
        <div className="mt-12 flex items-center justify-center">
          <button
            onClick={() => setShowMore(!showMore)}
            className="h-12 w-36 rounded-md border border-textGreen text-[13px] text-textGreen duration-300 hover:bg-hoverColor"
          >
            {showMore ? "Show Less" : "Show More"}
          </button>
        </div>
      )}
    </section>
  );
};

export default Certifications;