import Header from "@/components/layout/Header";
import LeftSide from "@/components/layout/LeftSide";
import Banner from "@/components/sections/Banner";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Certifications from "@/components/sections/Certifications";
import Education from "@/components/sections/Education";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";
import RightSide from "@/components/layout/RightSide";

import type { Metadata } from "next";


export const metadata: Metadata = {
  metadataBase: new URL("https://www.muneeburrehman.dev"),
  title: {
    default: "Muneeb Ur Rehman Siddiqui | AI Engineer",
    template: "%s | Muneeb Ur Rehman Siddiqui",
  },
  description: "AI Engineer portfolio showcasing projects and experience.",
  applicationName: "Muneeb Ur Rehman Portfolio",
  authors: [{ name: "Muneeb Ur Rehman Siddiqui", url: "https://www.muneeburrehman.dev" }],
  creator: "Muneeb Ur Rehman Siddiqui",
  publisher: "Muneeb Ur Rehman Siddiqui",
  keywords: [
    "Artificial Intelligence Engineer",
    "Computer Vision",
    "Machine Learning",
    "Deep Learning",
    "Python",
    "PyTorch",
    "Edge AI",
    "Karachi",
    "Muneeb Ur Rehman Siddiqui",
    "Muneeb Ur Rehman",
  ],
  icons: {
    icon: [
      {
        url: "/favicon.svg",
        type: "image/svg+xml",
      },
      {
        url: "/favicon.ico",
        sizes: "any", 
      },
    ],
  },
};

export default function HomePage() {
  return (
    <main className="h-screen w-full overflow-x-hidden overflow-y-scroll bg-bodyColor font-bodyFont text-textLight scrollbar-thin scrollbar-track-textDark/5 scrollbar-thumb-textDark/70">
      <Header />
      <div className="w-full items-start justify-between gap-10 lg:flex">
        <div className="fixed bottom-0 left-0 hidden h-full w-32 xl:inline-flex">
          <LeftSide />
        </div>
        <div className="mx-auto w-full p-4">
          <Banner />
          <About />
          <Experience />
          <Projects />
          <Certifications />
          <Education />
          <Contact />
          <Footer />
        </div>
        <div className="fixed bottom-0 right-0 hidden h-full w-32 xl:inline-flex">
          <RightSide />
        </div>
      </div>
    </main>
  );
}