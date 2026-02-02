
import { About } from "@/components/sections/about";
import { Hero as HeroSection } from "@/components/sections/hero";
import { Projects } from "@/components/sections/projects";
import { Skills } from "@/components/sections/skills";
import { Social } from "@/components/sections/social";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-xl text-center justify-center">
        <HeroSection />
        <About />
        <Projects />
        <Skills />
        <Social />
      </div>
    </section>
  );
}
