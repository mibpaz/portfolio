"use client";

import { Container } from "@/components/misc/container";
import { SectionTitle } from "@/components/misc/section-title";
import { skills } from "@/config/skills";
import { childVariants } from "@/utils/motion";
import { IconSwords } from "@tabler/icons-react";
import { motion } from "framer-motion";
import ProfileIllustration from "../illustrations/profile";
import { SkillsGrid } from "../misc/skills-grid";

export const Skills = () => {
  return (
    <section id="skills" className="flex flex-col gap-12 w-full">
      <SectionTitle
        title="Skillset"
        description="What we're fighting with"
        icon={IconSwords}
      />
      <div className="flex flex-col lg:flex-row w-full items-center justify-between gap-8 lg:gap-24">
        <div className="flex flex-col gap-8 grow w-full">
          <Container title="Frameworks">
            <SkillsGrid>
              {skills.frameworks.map((framework) => (
                <motion.div
                  key={framework.name}
                  variants={childVariants}
                  className="flex flex-row items-center gap-2"
                >
                  <framework.icon size={24} strokeWidth={1.5} />
                  <p>{framework.name}</p>
                </motion.div>
              ))}
            </SkillsGrid>
          </Container>
          <Container title="Tools and Technologies">
            <SkillsGrid>
              {skills.tools.map((tool) => (
                <motion.div
                  key={tool.name}
                  variants={childVariants}
                  className="flex flex-row items-center gap-2"
                >
                  <tool.icon size={24} strokeWidth={1.5} />
                  <p>{tool.name}</p>
                </motion.div>
              ))}
            </SkillsGrid>
          </Container>
          <div>
            <Container title="Languages">
              <SkillsGrid>
                {skills.languages.map((language) => (
                  <motion.div
                    key={language.name}
                    variants={childVariants}
                    className="flex flex-row items-center gap-2"
                  >
                    <language.icon size={24} strokeWidth={1.5} />
                    <p>{language.name}</p>
                  </motion.div>
                ))}
              </SkillsGrid>
            </Container>
          </div>
          <Container title="Other stuff in my bag">
            <SkillsGrid>
              {skills.misc.map((misc) => (
                <motion.div
                  key={misc.name}
                  variants={childVariants}
                  className="flex flex-row items-center gap-2"
                >
                  <misc.icon size={24} strokeWidth={1.5} />
                  <p>{misc.name}</p>
                </motion.div>
              ))}
            </SkillsGrid>
          </Container>
        </div>
        <ProfileIllustration className="hidden lg:block w-lg shrink-0" />
      </div>
    </section>
  );
};
