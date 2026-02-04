"use client";

import { siteConfig } from "@/config/site";
import { Tooltip } from "@heroui/tooltip";
import { IconCheck, IconCopy, IconLink, IconMail, IconNetwork } from "@tabler/icons-react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { SectionTitle } from "../misc/section-title";

export const Social = () => {
  const socials = siteConfig.social;
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("mibp@ic.ufal.br");
    setCopied(true);
  }

  useEffect(() => {
    if (copied) {
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    }
  }, [copied]);

  return (
    <section id="socials" className="flex flex-col gap-24 w-full">
      <SectionTitle title="Social" description="Let's connect" icon={IconNetwork} />
      <div className="flex flex-row items-center justify-center gap-6">
        {socials.map((social) => (
          <Link
            key={social.name}
            href={social.url}
            target="_blank"
            className="flex flex-row items-center gap-6 rounded-full transition-all duration-300
            hover:shadow-base px-3 py-2 border border-primary bg-surface-950
            ring ring-offset-2 ring-offset-transparent ring-transparent active:ring-primary-400">
            <div className="flex flex-row items-center gap-2">
              <social.icon size={24} strokeWidth={1.5} />
              <p>{social.name}</p>
            </div>
            <IconLink size={20} strokeWidth={1.5} className="text-primary-500" />
          </Link>
        ))}
        <Tooltip content={copied ? "Copied to clipboard" : "Copy to clipboard"} placement="bottom">
          <button
            onClick={copyEmail}
            className="cursor-pointer shadow-none transition-all duration-300
            hover:shadow-base flex flex-row items-center gap-6 rounded-full px-3 py-2 border border-primary bg-surface-950
            ring ring-offset-2 ring-offset-transparent ring-transparent active:ring-primary-400">
            <div className="flex flex-row items-center gap-2">
              <IconMail size={24} strokeWidth={1.5} />
              <p>Mail me!</p>
            </div>
            <AnimatePresence mode="wait">
              {
                copied ?
                  <motion.div key="check" initial={{ rotateZ: -60 }} animate={{ rotateZ: 0 }} exit={{ rotateZ: -60 }} transition={{ duration: 0.15, ease: "easeInOut" }}>
                    <IconCheck size={20} strokeWidth={1.5} className="text-primary-500" />
                  </motion.div>
                  : <motion.div key="copy" initial={{ rotateZ: 60 }} animate={{ rotateZ: 0 }} exit={{ rotateZ: 60 }} transition={{ duration: 0.15, ease: "easeInOut" }}>
                    <IconCopy size={20} strokeWidth={1.5} className="text-primary-500" />
                  </motion.div>
              }
            </AnimatePresence>
          </button>
        </Tooltip>
      </div>
    </section>
  )
}