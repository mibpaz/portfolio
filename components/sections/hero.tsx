"use client";

import { Divider } from "@heroui/divider";
import { IconChevronDown } from "@tabler/icons-react";
import { motion } from "framer-motion";
import DocsIllustration from "../illustrations/docs";

export const Hero = () => {
  return (
    <div className="flex flex-col w-full gap-12 lg:gap-8 min-h-screen sm:pt-16">
      <div className="flex flex-col lg:flex-row items-center lg:justify-between w-full">
        <DocsIllustration className="w-2/3 sm:w-1/2 lg:w-1/3" />
        <div className="flex flex-col gap-8 w-full lg:max-w-[600px]">
          <h1 className="text-lg sm:text-xl text-center lg:text-left lg:text-[3rem] tracking-tighter leading-[1] font-bold">
            Welcome to my portfolio.
          </h1>
          <Divider className="w-full lg:hidden" />
          <p className="text-base lg:text-lg text-primary text-center lg:text-left w-full">
            I'm a software engineer with a passion for building web applications
            and mobile apps.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-2 items-center">
        <p className="text-foreground">
          My name is <b>Isadora</b>, by the way!
        </p>
        <p className="text-sm text-primary">
          (Although people at college call me <b>Ash</b>)
        </p>
        <p className="text-sm text-default-500 italic">
          [Gosh, these are a lot of addendums...]
        </p>
        <motion.a
          href="#skills"
          className="mt-4"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
        >
          <IconChevronDown size={48} stroke={1} color="var(--color-primary)" />
        </motion.a>
      </div>
    </div>
  );
};
