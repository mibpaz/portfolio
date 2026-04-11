"use client";
import { siteConfig } from "@/config/site";
import { Link } from "@heroui/link";
import { IconBrandGithub, IconBrandLinkedin, IconMenu2, IconX } from "@tabler/icons-react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full p-4 relative z-50">
      <div className="w-full h-full flex items-center justify-between border border-primary bg-default rounded-xl py-3 px-6">
        <motion.p className="text-2xl font-display" whileHover={{
          textShadow: "0 0 10px var(--color-primary)",
          transition: { duration: 0.5, ease: "easeInOut" },
        }}>Hey there!</motion.p>

        <motion.div layout className="rounded-xl w-fit hidden md:flex items-center gap-3 md:gap-4 lg:gap-8" tabIndex={-1}>
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

        <div className="hidden md:flex items-center justify-end gap-3">
          <Link href={siteConfig.links.github} aria-label="Github"><IconBrandGithub size={24} /></Link>
          <Link href={siteConfig.links.linkedin} aria-label="Linkedin"><IconBrandLinkedin size={24} /></Link>
        </div>

        <button
          className="md:hidden cursor-pointer text-foreground"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <IconX size={24} /> : <IconMenu2 size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="md:hidden absolute left-4 right-4 mt-2 border border-primary bg-surface-900 rounded-xl p-4 flex flex-col gap-4"
          >
            {siteConfig.navItems.map((item) => (
              <Link
                key={item.label}
                color="foreground"
                size="sm"
                href={`#${item.anchor || ""}`}
                onPress={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="flex items-center gap-3 pt-2 border-t border-primary">
              <Link href={siteConfig.links.github} aria-label="Github"><IconBrandGithub size={24} /></Link>
              <Link href={siteConfig.links.linkedin} aria-label="Linkedin"><IconBrandLinkedin size={24} /></Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
