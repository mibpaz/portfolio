import { IconSvgProps } from "@/types";
import { IconBeach, IconBox, IconBrandAngular, IconBrandFramerMotion, IconBrandJavascript, IconBrandLaravel, IconBrandNextjs, IconBrandPhp, IconBrandPython, IconBrandReact, IconBrandSvelte, IconBrandTailwind, IconBrandTypescript, IconBrandVue, IconChevronUp, IconClipboardData, IconLayoutDashboard, IconMapPin, IconTransfer, IconZeppelin } from "@tabler/icons-react";

export default function brandIcon(language: string, props?: IconSvgProps) {
  switch (language) {
    case "JavaScript":
      return <IconBrandJavascript {...props} />;
    case "TypeScript":
      return <IconBrandTypescript {...props} />;
    case "Python":
      return <IconBrandPython {...props} />;
    case "PHP":
      return <IconBrandPhp {...props} />;
    case "React":
      return <IconBrandReact {...props} />;
    case "Next.js":
      return <IconBrandNextjs {...props} />;
    case "Svelte":
      return <IconBrandSvelte {...props} />;
    case "Vue.js":
      return <IconBrandVue {...props} />;
    case "Expo":
      return <IconChevronUp {...props} />;
    case "Laravel":
      return <IconBrandLaravel {...props} />;
    case "Angular":
      return <IconBrandAngular {...props} />;
    case "TailwindCSS":
      return <IconBrandTailwind {...props} />;
    case "Tanstack Query":
      return <IconBeach {...props} />;
    case "Axios":
      return <IconTransfer {...props} />;
    case "React Hook Form":
      return <IconClipboardData {...props} />;
    case "Zod":
      return <IconZeppelin {...props} />;
    case "Mapbox":
      return <IconMapPin {...props} />;
    case "Framer Motion":
      return <IconBrandFramerMotion {...props} />;
    case "Shadcn/UI":
      return <IconLayoutDashboard {...props} />;
    case "MUI":
      return <IconBox {...props} />;
  }
}