"use client";

import { IconStar } from "@tabler/icons-react";
import ProjectCarousel from "../misc/project-carousel";
import { SectionTitle } from "../misc/section-title";

export const Projects = () => {
  return (
    <section id="projects" className="flex flex-col gap-12 w-full">
      <SectionTitle title="Showcase" description="Some cool projects I've worked on" icon={IconStar} />
      <ProjectCarousel />
    </section>
  )
}