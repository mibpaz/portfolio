import { IconBrandGithub, IconBrandInstagram, IconBrandLinkedin } from "@tabler/icons-react";

export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Isadora's Portfolio",
  description: "Here you can find my projects and my skills",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Skills",
      anchor: "skills",
    },
    {
      label: "Projects",
      anchor: "projects",
    },
    {
      label: "About",
      anchor: "about",
    },
    {
      label: "Socials",
      anchor: "socials",
    },
  ],
  navMenuItems: [
    {
      label: "Skills",
      anchor: "skills",
    },
    {
      label: "Projects",
      anchor: "projects",
    },
    {
      label: "About",
      anchor: "about",
    },
    {
      label: "Socials",
      anchor: "socials",
    },
  ],
  social: [
    {
      name: "GitHub",
      icon: IconBrandGithub,
      url: "https://github.com/mibppaz",
    },
    {
      name: "LinkedIn",
      icon: IconBrandLinkedin,
      url: "https://www.linkedin.com/in/isadorabpaz/",
    },
    {
      name: "Instagram",
      icon: IconBrandInstagram,
      url: "https://www.instagram.com/020314.mp3/",
    },
  ],
  links: {
    github: "https://github.com/mibpaz",
    linkedin: "https://www.linkedin.com/in/isadorabpaz/",
  },
  url: "https://ashlc.vercel.app/",
};
