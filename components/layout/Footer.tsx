"use client";

import React from "react";
import { SiGithub } from "react-icons/si";
import { BsLinkedin } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { SiUpwork } from "react-icons/si";
import SocialIcon from "../common/SocialIcon";

const Footer = () => {
  return (
    <div>
      <div className="inline-flex w-full items-center justify-center gap-4 xl:hidden">
        <SocialIcon
          href="https://github.com/BeUnMerreHuman"
          externalClassName="bg-bodyColor text-zinc-200 border-zinc-700"
        >
          <SiGithub />
        </SocialIcon>

        <SocialIcon
          href="https://www.linkedin.com/in/muneeb-ur-rehman-siddiqui-618a6336a/"
          externalClassName="bg-bodyColor text-zinc-200 border-zinc-700"
        >
          <BsLinkedin />
        </SocialIcon>

        <SocialIcon
          href="https://mail.google.com/mail/?view=cm&fs=1&to=muneeburrehmansiddiqui98@gmail.com"
          externalClassName="bg-bodyColor text-zinc-200 border-zinc-700"
        >
          <SiGmail />
        </SocialIcon>

        <SocialIcon
          href="https://www.upwork.com/freelancers/~0127283a31ab6dd942"
          externalClassName="bg-bodyColor text-zinc-200 border-zinc-700"
        >
          <SiUpwork />
        </SocialIcon>
      </div>
    </div>
  );
};

export default Footer;
