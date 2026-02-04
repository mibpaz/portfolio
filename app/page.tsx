
import { About } from "@/components/sections/about";
import { Hero as HeroSection } from "@/components/sections/hero";
import { Projects } from "@/components/sections/projects";
import { Skills } from "@/components/sections/skills";
import { Social } from "@/components/sections/social";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-8 md:py-10 w-full">
      <HeroSection />
      <div className="flex flex-col items-center justify-center gap-4 w-full">
        <Skills />
        <About />
        <Projects />
        <Social />
      </div>
    </section>
  );
}
