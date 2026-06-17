import bodegaFran6Images, {
  cover as bodegaFran6Cover,
} from "@/assets/images/BodegaFran6";
import mpImages, { cover as mpCover } from "@/assets/images/MP";
import unibicosImages, {
  cover as unibicosCover,
} from "@/assets/images/Unibicos";
import { Work } from "@/types";
import { descriptions } from "./descriptions";

export const works: Work[] = [
  {
    id: "1",
    title: "Bodega Fran6",
    subtitle: "Local business website.",
    description: descriptions.bodegaFran6,
    technologies: ["Next.js", "TailwindCSS", "Supabase", "React Hook Form"],
    roles: ["Full Stack Developer"],
    workPlace: "Freelance",
    when: "2026",
    status: "completed",
    cover: bodegaFran6Cover,
    images: bodegaFran6Images,
    link: "https://bodegafran6.com.br/",
  },
  {
    id: "2",
    title: "Música Protegida",
    subtitle: "Interface refactoring.",
    description: descriptions.musicaprotegida,
    technologies: ["Vue.js", "TailwindCSS", "TypeScript"],
    roles: ["Front-End Developer", "UI/UX Designer"],
    workPlace: "Freelance",
    when: "2025",
    status: "completed",
    cover: mpCover,
    images: mpImages,
    link: "https://musicaprotegida.com.br/",
  },
  {
    id: "3",
    title: "Unibicos",
    subtitle: "Digital pinboard website for my university.",
    description: descriptions.unibicos,
    technologies: ["Next.js", "TailwindCSS", "Supabase"],
    roles: ["Full Stack Developer"],
    workPlace: "Freelance",
    when: "2026",
    status: "completed",
    cover: unibicosCover,
    images: unibicosImages,
    link: "https://unibicos.vercel.app/",
  },
];
