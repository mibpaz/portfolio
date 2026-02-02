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
      label: "Contact",
      anchor: "contact",
    },
  ],
  navMenuItems: [
    {
      label: "Profile",
      anchor: "profile",
    },
    {
      label: "Dashboard",
      anchor: "dashboard",
    },
    {
      label: "Projects",
      anchor: "projects",
    },
    {
      label: "Team",
      anchor: "team",
    },
    {
      label: "Calendar",
      anchor: "calendar",
    },
    {
      label: "Settings",
      anchor: "settings",
    },
    {
      label: "Help & Feedback",
      anchor: "help-feedback",
    },
    {
      label: "Logout",
      anchor: "logout",
    },
  ],
  links: {
    github: "https://github.com/Ashlc",
    linkedin: "https://www.linkedin.com/in/ashley-clark-0000000000/",
  },
};
