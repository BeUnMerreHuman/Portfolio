import { ReactNode } from "react";

export type EducationTabKey = "bahriaUni" | "bahriaCollege" | "sosSchool" | "jauherSchool";

export type EducationEntryData = {
  key: EducationTabKey;
  label: string;
  sub: string;
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

const educationEntries: EducationEntryData[] = [
  {
    key: "bahriaUni",
    label: "Bahria University",
    sub: "Artificial Intelligence",
    componentProps: {
      title: "Bachelor of Science, Artificial Intelligence",
      company: "Bahria University",
      dates: "Sep 2023 - Jul 2027",
      intro: "Karachi, Sindh | Grade: A-",
      bullets: [
        { heading: "Skills", content: "Team Work, Accountability, Foresight" },
        { heading: "Activities", content: "ACCP Club, Arts Team Head" },
      ],
    },
  },
  {
    key: "bahriaCollege",
    label: "Bahria College Karsaz",
    sub: "Pre-Engineering",
    componentProps: {
      title: "Intermediate, Pre-Engineering",
      company: "Bahria College Karsaz",
      dates: "Jun 2021 - Jun 2023",
      intro: "Karachi, Sindh | Grade: A",
      bullets: [
        { heading: "Skills", content: "Discipline, Critical Thinking, Strategy" },
        { heading: "Activities", content: "College House, Table Tennis Team Lead" },
      ],
    },
  },
  {
    key: "sosSchool",
    label: "SOS Herman Gmenier",
    sub: "Computer Science",
    componentProps: {
      title: "Matriculation, Computer Science",
      company: "SOS Herman Gmenier School",
      dates: "Apr 2019 - Apr 2021",
      intro: "Karachi, Sindh | Grade: A+",
      bullets: [
        { heading: "Skills", content: "Adaptability, Communication, Hardwork" },
        { heading: "Activities", content: "Sports" },
      ],
    },
  },
  {
    key: "jauherSchool",
    label: "Jauher Lyceun",
    sub: "Oxford Curriculum",
    componentProps: {
      title: "High School, Oxford Curriculum",
      company: "Jauher Lyceun High School",
      dates: "Mar 2008 - Mar 2019",
      intro: "Mianwali, Punjab | Grade: A+",
      bullets: [
        { heading: "Skills", content: "Curiosity, Thinking, Sportsmanship" },
        { heading: "Activities", content: "Arts" },
      ],
    },
  },
];

export default educationEntries;