"use client";

import { SiGithub } from "react-icons/si";
import { BsLinkedin } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { SiUpwork } from "react-icons/si";
import SocialIcon from "./SocialIcon";

export default function SocialIconList({ className }: { className?: string }) {
  const baseClass = "border-zinc-700 bg-bodyColor text-zinc-200";

  return (
    <div className={`flex gap-4 ${className}`}>
      <SocialIcon href="https://github.com/BeUnMerreHuman" externalClassName={baseClass}>
        <SiGithub />
      </SocialIcon>
      <SocialIcon href="https://www.linkedin.com/in/muneeb-ur-rehman-siddiqui-618a6336a/" externalClassName={baseClass}>
        <BsLinkedin />
      </SocialIcon>
      <SocialIcon href="https://mail.google.com/mail/?view=cm&fs=1&to=muneeburrehmansiddiqui98@gmail.com" externalClassName={baseClass}>
        <SiGmail />
      </SocialIcon>
      <SocialIcon href="https://www.upwork.com/freelancers/~0127283a31ab6dd942" externalClassName={baseClass}>
        <SiUpwork />
      </SocialIcon>
    </div>
  );
}
