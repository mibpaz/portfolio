import andarilhoImages, { cover as andarilhoCover } from "@/assets/images/Andarilho";
import bumyImages, { cover as bumyCover } from "@/assets/images/Bumy";
import mpImages, { cover as mpCover } from "@/assets/images/MP";
import oxeBankingImages, { cover as oxeBankingCover } from "@/assets/images/Oxebanking";
import { Work } from "@/types";
import { descriptions } from "./descriptions";

export const works: Work[] = [
  {
    id: "1",
    title: "Bumy",
    subtitle: "Social marketing agent.",
    description: descriptions.bumy,
    technologies: ["React", "TailwindCSS", "TypeScript", "Tanstack Query", "Axios", "React Hook Form"],
    roles: ["UI/UX Designer, Front-End Developer"],
    workPlace: "Freelance",
    when: "2025",
    status: "completed",
    cover: bumyCover,
    images: bumyImages,
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
    link: "https://ichello-registro-front.onrender.com/",
  },
  {
    id: "3",
    title: "Oxebanking",
    subtitle: "Fictional digital bank.",
    description: descriptions.oxeBanking,
    technologies: ["Svelte", "TailwindCSS", "JavaScript"],
    roles: ["Front-End Developer", "UI/UX Designer"],
    workPlace: "UFAL",
    repo: "https://github.com/mibpaz/oxebanking",
    when: "2024",
    status: "completed",
    cover: oxeBankingCover,
    images: oxeBankingImages,
  },
  {
    id: "9",
    title: "Andarilho",
    subtitle: "Accessibility reports",
    description: descriptions.andarilho,
    technologies: ["React", "TailwindCSS", "TypeScript", "Mapbox"],
    roles: ["Front-End Developer, UI/UX Designer"],
    workPlace: "Freelance",
    when: "2025",
    status: "completed",
    cover: andarilhoCover,
    images: andarilhoImages,
    link: "https://andarilho.vercel.app/",
  },
];