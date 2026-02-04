"use client";

import { IconArrowBigDownLines } from "@tabler/icons-react";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import DocsIllustration from "../illustrations/docs";

export const Hero = () => {
  const welcomeRef = useRef<HTMLHeadingElement>(null);
  const [welcomeWidth, setWelcomeWidth] = useState<number>(0);
  useEffect(() => {
    setWelcomeWidth(welcomeRef.current?.offsetWidth || 0);
  }, [welcomeRef.current?.offsetWidth]);
  return (
    <div className="flex flex-col w-full gap-8">
      <div className="flex flex-row items-center justify-between w-full">
        <DocsIllustration className="w-1/4" />
        <div className="flex flex-col gap-2" style={{ width: `${welcomeWidth === 0 ? "100%" : `${welcomeWidth + 2}px`}` }}>
          <h1 ref={welcomeRef} className="text-[4.5rem] w-fit font-bold">
            Welcome to my portfolio
          </h1>
          <p className="text-lg text-primary-500 text-justify w-full">
            I'm a software engineer with a passion for building web applications and mobile apps.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-2 items-center">
        <p className="text-foreground">
          My name is <b>Isadora</b>, by the way!
        </p>
        <p className="text-sm text-primary-500">
          (Although people at college call me <b>Ash</b>)
        </p>
        <p className="text-sm text-default-500 italic">
          [Gosh, these are a lot of addendums...]
        </p>
        <motion.a href="#skills" className="mt-4" animate={{ y: [0, 10, 0] }} transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}>
          <IconArrowBigDownLines size={48} stroke={1.5} color="var(--color-primary)" />
        </motion.a>
      </div>
    </div >
  )
}