import { IconBeach, IconBox, IconBrandAngular, IconBrandDocker, IconBrandFigma, IconBrandJavascript, IconBrandLaravel, IconBrandNextjs, IconBrandPhp, IconBrandPython, IconBrandReact, IconBrandSvelte, IconBrandTailwind, IconBrandTypescript, IconBrandVue, IconChevronUp, IconClipboardData, IconGitBranch, IconLayoutDashboard, IconRocket, IconTransfer, IconZeppelin } from "@tabler/icons-react";

const frameworks = [
  { name: "React", icon: IconBrandReact },
  { name: "Next.js", icon: IconBrandNextjs },
  { name: "Svelte", icon: IconBrandSvelte },
  { name: "Vue", icon: IconBrandVue },
  { name: "Expo", icon: IconChevronUp },
  { name: "Laravel", icon: IconBrandLaravel },
  { name: "Angular", icon: IconBrandAngular },
]

const tools = [
  { name: "Tailwind CSS", icon: IconBrandTailwind },
  { name: "Tanstack Query", icon: IconBeach },
  { name: "Axios", icon: IconTransfer },
  { name: "React Hook Form", icon: IconClipboardData },
  { name: "Zod", icon: IconZeppelin },
  { name: "Shadcn/UI", icon: IconLayoutDashboard },
  { name: "MUI", icon: IconBox },
]

const languages = [
  { name: "JavaScript", icon: IconBrandJavascript },
  { name: "TypeScript", icon: IconBrandTypescript },
  { name: "Python", icon: IconBrandPython },
  { name: "PHP", icon: IconBrandPhp },
]

const misc = [
  { name: "DevOps", icon: IconRocket },
  { name: "Docker", icon: IconBrandDocker },
  { name: "Figma", icon: IconBrandFigma },
  { name: "Gitflow", icon: IconGitBranch },
]

export const skills = {
  frameworks,
  tools,
  languages,
  misc,
}