"use client";
import { siteConfig } from "@/config/site";
import { Link } from "@heroui/link";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconMenu2,
  IconX,
} from "@tabler/icons-react";
import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const SCROLL_MIN = 64;
const SCROLL_DELTA = 8;

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [navHeight, setNavHeight] = useState(0);
  const navRef = useRef<HTMLDivElement>(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;

    const observer = new ResizeObserver(([entry]) => {
      setNavHeight(entry.contentRect.height);
    });
    observer.observe(nav);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    lastScrollY.current = window.scrollY;

    const onScroll = () => {
      const y = window.scrollY;
      const delta = y - lastScrollY.current;

      if (Math.abs(delta) < SCROLL_DELTA) return;

      const scrollingDown = delta > 0;
      setHidden(scrollingDown && y > SCROLL_MIN);
      lastScrollY.current = y;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isVisible = !hidden || menuOpen;

  return (
    <>
      <div
        ref={navRef}
        className={clsx(
          "fixed top-0 left-0 right-0 z-100 w-screen p-3 md:p-4 transition-transform duration-300 ease-in-out",
          isVisible ? "translate-y-0" : "-translate-y-full",
        )}
      >
        <div className="w-full h-full flex items-center justify-between border border-primary/30 bg-default/25 backdrop-blur-sm rounded-full py-3 px-6">
          <motion.p
            className="text-lg font-display leading-none mb-0.5"
            whileHover={{
              textShadow: "0 0 10px var(--color-primary)",
              transition: { duration: 0.5, ease: "easeInOut" },
            }}
          >
            Isadora Paz
          </motion.p>

          <motion.div
            layout
            className="rounded-xl w-fit hidden md:flex items-center gap-3 md:gap-4 lg:gap-8"
            tabIndex={-1}
          >
            {siteConfig.navItems.map((item) => (
              <motion.div
                key={item.label}
                tabIndex={-1}
                whileHover={{
                  scale: 1.25,
                  marginLeft: 20,
                  marginRight: 20,
                  transition: {
                    type: "tween",
                    duration: 0.2,
                    ease: "easeInOut",
                  },
                }}
                whileTap={{
                  scale: 0.95,
                  marginLeft: 0,
                  marginRight: 0,
                  transition: {
                    type: "tween",
                    duration: 0.2,
                    ease: "easeInOut",
                  },
                }}
                className="container"
              >
                <Link
                  color="foreground"
                  size="sm"
                  href={`#${item.anchor || ""}`}
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <div className="hidden md:flex items-center justify-end gap-3">
            <Link href={siteConfig.links.github} aria-label="Github">
              <IconBrandGithub size={24} />
            </Link>
            <Link href={siteConfig.links.linkedin} aria-label="Linkedin">
              <IconBrandLinkedin size={24} />
            </Link>
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
              className="md:hidden absolute left-4 right-4 mt-2 border border-primary/30 bg-default/25 backdrop-blur-sm backdrop-brightness-150 rounded-xl p-4 flex flex-col gap-4"
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
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div aria-hidden style={{ height: navHeight }} />
    </>
  );
};
