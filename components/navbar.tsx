"use client";
import { siteConfig } from "@/config/site";
import { Link } from "@heroui/link";
import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";
import { motion } from "framer-motion";
export const Navbar = () => {
  const text = "Welcome!";
  return (
    <div className="w-full p-4">
      <div className="w-full h-full flex items-center justify-between border border-primary bg-surface-900 rounded-xl py-2 px-4">
        <div className="w-full h-full flex items-center justify-between gap-3">
          <motion.p className="text-2xl font-display" whileHover={{
            textShadow: "0 0 10px var(--color-primary)",
            transition: {
              duration: 0.5, ease: "easeInOut"
            },
          }}>Welcome!</motion.p>
          <motion.div layout className="rounded-xl w-fit flex items-center gap-3 md:gap-4 lg:gap-8" tabIndex={-1}>
            {siteConfig.navItems.map((item) => (
              <motion.div key={item.label}
                tabIndex={-1}
                whileHover={{
                  scale: 1.25,
                  marginLeft: 20,
                  marginRight: 20,
                  transition: { type: "tween", duration: 0.2, ease: "easeInOut" },
                }}
                whileTap={{
                  scale: 0.95,
                  marginLeft: 0,
                  marginRight: 0,
                  transition: { type: "tween", duration: 0.2, ease: "easeInOut" },
                }}
                className="container">
                <Link color="foreground" size="sm" href={`#${item.anchor || ""}`}>{item.label}</Link>
              </motion.div>
            ))}
          </motion.div>
          <div className="flex items-center justify-end gap-3">
            <Link href={siteConfig.links.github} aria-label="Github"><IconBrandGithub size={24} /></Link>
            <Link href={siteConfig.links.linkedin} aria-label="Linkedin"><IconBrandLinkedin size={24} /></Link>
          </div>
        </div>
      </div>
    </div >
  );
};
