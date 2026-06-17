"use client";

import { FormalityModal } from "@/components/misc/formality-modal";
import { About } from "@/components/sections/about";
import { Hero as HeroSection } from "@/components/sections/hero";
import { Projects } from "@/components/sections/projects";
import { Skills } from "@/components/sections/skills";
import { Social } from "@/components/sections/social";
import { Button } from "@heroui/button";
import { useDisclosure } from "@heroui/modal";
import { IconShare } from "@tabler/icons-react";

export default function Home() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div className="flex flex-col items-center justify-center gap-8 md:py-10 w-screen pb-24">
      <HeroSection />
      <div className="mt-10 flex flex-col items-center justify-center gap-16 md:gap-32 w-full md:w-auto lg:max-w-7xl px-5 md:px-0 mx-auto">
        <Skills />
        <Projects />
        <About />
        <Social />
        <div className="flex flex-col items-center justify-center gap-6 w-full">
          <h2>Like what you see?</h2>
          <Button
            className="text-background font-bold tracking-wider"
            endContent={<IconShare size={24} />}
            variant="solid"
            color="primary"
            size="lg"
            onPress={onOpen}
          >
            SHARE THIS PORTFOLIO
          </Button>
        </div>
      </div>
      <FormalityModal isOpen={isOpen} onOpenChange={onOpenChange} />
    </div>
  );
}
