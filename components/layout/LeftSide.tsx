"use client";

import React from "react";
import { SiGithub } from "react-icons/si";
import { BsLinkedin } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { SiUpwork } from "react-icons/si";
import { motion } from "framer-motion";
import SocialIcon from "../common/SocialIcon";

const LeftSide = () => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-end gap-4 text-textLight">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.0, delay: 2.0 }}
        className="flex flex-col gap-4"
      >
        <SocialIcon
          href="https://github.com/BeUnMerreHuman"
          externalClassName="bg-hoverColor text-textLight"
        >
          <SiGithub />
        </SocialIcon>
        <SocialIcon
          href="https://www.linkedin.com/in/muneeb-ur-rehman-siddiqui-618a6336a/"
          externalClassName="bg-hoverColor text-textLight"
        >
          <BsLinkedin />
        </SocialIcon>
        <SocialIcon
          href="https://mail.google.com/mail/?view=cm&fs=1&to=muneeburrehmansiddiqui98@gmail.com"
          externalClassName="bg-hoverColor text-textLight"
        >
          <SiGmail />
        </SocialIcon>
        <SocialIcon
          href="https://www.upwork.com/freelancers/~0127283a31ab6dd942"
          externalClassName="bg-hoverColor text-textLight"
        >
          <SiUpwork />
        </SocialIcon>
      </motion.div>
      <div className="h-32 w-[2px] bg-textDark"></div>
    </div>
  );
};

export default LeftSide;
