"use client";

import { childVariants, staggerChildrenVariants } from "@/utils/motion";
import { IconUser } from "@tabler/icons-react";
import { motion } from "framer-motion";
import StoryIllustration from "../illustrations/story";
import { Container } from "../misc/container";
import { SectionTitle } from "../misc/section-title";

export const About = () => {
  return (
    <section id="about" className="flex flex-col gap-12 w-full">
      <SectionTitle title="About" description="If you're interested in my story, here it is" icon={IconUser} />
      <div className="flex flex-col lg:flex-row w-full items-start justify-between gap-8 lg:gap-24">
        <StoryIllustration className="hidden lg:block w-1/3 shrink-0 sticky top-8 self-start" />
        <motion.div variants={staggerChildrenVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} className="flex flex-col gap-8">
          <motion.div variants={childVariants}>
            <Container title="Current status">
              <p className="text-justify tracking-wide leading-relaxed">
                Freelancer web developer, computer science student (soon to be a graduate)
              </p>
            </Container>
          </motion.div>
          <motion.div variants={childVariants}>
            <Container title="Background">
              <p className="text-justify tracking-wide leading-relaxed">
                In 2022, during the second year of my undergraduate studies, I began my first internship at the Alagoas State Department of Education, where I had direct contact with web application development and with the real demands of the public sector. This was my entry point into the field.
                <br />
                <br />
                I joined with no prior experience, but quickly developed autonomy, learning in a hands-on and intensive way under tight deadlines. Since then, I have continuously improved my skills, including serving as a Web Development teaching assistant. Due to my profile and performance, I was invited by the course professor to join his startup as a developer, an experience that broadened my perspective on product development, deadlines, and collaboration in innovation-driven environments.
                <br />
                <br />
                I also began working at the UFAL Scientific Computing and Visualization Laboratory, which develops projects linked to Petrobras. There, I learned to develop with Angular and, more recently, to create unit tests and focus on code quality, while balancing these activities with freelance work and my role at the startup.            </p>
            </Container>
          </motion.div>
          <motion.div variants={childVariants}>
            <Container title="Aspirations">
              <p className="text-justify tracking-wide leading-relaxed">
                Currently, I’m seeking a stable position in a structured organization, in which I can make a long-term career and grow along with the company. With this stability, I aim to keep studying and pursue a master’s and a doctor’s degree.
              </p>
            </Container>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}