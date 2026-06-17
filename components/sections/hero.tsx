"use client";

import { childVariants, staggerChildrenVariants } from "@/utils/motion";
import { IconChevronDown } from "@tabler/icons-react";
import { motion } from "framer-motion";
import { AsciiFire } from "../misc/ascii-fire";

const addendumStagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.18, delayChildren: 0.5 },
  },
};

export const Hero = () => {
  return (
    <div className="relative w-screen h-[calc(100vh-90px)]">
      <AsciiFire />
      <div className="relative z-10 flex h-full flex-col items-center justify-center gap-8 px-4 text-center">
        <motion.div
          className="flex max-w-2xl flex-col items-center gap-6"
          variants={staggerChildrenVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            variants={childVariants}
            className="flex items-center justify-center gap-3 text-3xl font-bold leading-[1] tracking-tighter sm:text-4xl lg:text-5xl"
          >
            Welcome to my portfolio.
          </motion.h1>
          <motion.p
            variants={childVariants}
            className="max-w-lg text-base text-primary sm:text-lg"
          >
            I'm a software engineer with a passion for building web applications
            and mobile apps.
          </motion.p>
        </motion.div>

        <motion.div
          className="flex flex-col items-center gap-2"
          variants={addendumStagger}
          initial="hidden"
          animate="visible"
        >
          <motion.p variants={childVariants} className="text-foreground">
            My name is <b>Isadora</b>, by the way!
          </motion.p>
          <motion.p
            variants={childVariants}
            className="flex items-center gap-1.5 text-sm text-primary"
          >
            (Although people at college call me <b>Ash</b>)
          </motion.p>
          <motion.p
            variants={childVariants}
            className="text-sm italic text-default-500"
          >
            [Gosh, these are a lot of addendums...]
          </motion.p>
          <motion.a
            href="#skills"
            className="mt-4"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: [0, 10, 0] }}
            transition={{
              opacity: { delay: 1.1, duration: 0.4 },
              y: { duration: 1.5, repeat: Infinity, repeatType: "loop" },
            }}
          >
            <IconChevronDown
              size={48}
              stroke={1}
              color="var(--color-primary)"
            />
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};
