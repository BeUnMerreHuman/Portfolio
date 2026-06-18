import { ReactNode } from "react";

export type JobTabKey = "artsTeamHead" | "privateTutor";

export type JobEntry = {
  key: JobTabKey;
  label: string;
  sub?: string;
  componentProps: {
    title: string;
    company: string;
    companyIcon?: ReactNode;
    dates: string;
    intro: string;
    bullets: {
      heading: string;
      content: string;
    }[];
  };
};

const jobEntries: JobEntry[] = [
  {
    key: "artsTeamHead",
    label: "BUKC ACCP",
    sub: "Arts Team Head",
    componentProps: {
      title: "Arts Team Head",
      company: "BUKC ACCP Club",
      dates: "2026 - Present",
      intro:
        "Leading the creative initiatives and visual identity for the Bahria University Karachi Campus (BUKC) ACCP Club, driving student engagement through impactful design and event coordination.",
      bullets: [
        {
          heading: "Creative Direction & Event Management",
          content:
            "Oversaw all creative direction and ensured the successful, timely delivery of university events and club activities.",
        },
        {
          heading: "Team Collaboration",
          content:
            "Coordinated with club members to conceptualize and execute visual assets that align with the organization's objectives and enhance campus presence.",
        },
      ],
    },
  },
  {
    key: "privateTutor",
    label: "Private Tutor",
    sub: "Grades 5-11",
    componentProps: {
      title: "Private Tutor",
      company: "Self-Employed",
      dates: "2022 - 2026",
      intro:
        "Provided dedicated academic support and personalized instruction for middle and high school students, fostering academic growth and confidence in technical and scientific subjects.",
      bullets: [
        {
          heading: "Concept Mastery & Problem Solving",
          content:
            "Tutored students from Grade 5 to 11 in Math, Science, and Computer Science, emphasizing a deep understanding of core concepts and practical problem-solving skills.",
        },
        {
          heading: "Curriculum Adaptability",
          content:
            "Designed and tailored teaching methodologies to accommodate diverse learning requirements and rigorous academic standards, including targeted support for students from Cadet Colleges and Army Public Schools.",
        },
      ],
    },
  },
];

export default jobEntries;