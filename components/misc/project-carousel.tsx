import { works } from "@/config/projects";
import brandIcon from "@/utils/languageIcon";
import { childVariants, staggerChildrenVariants } from "@/utils/motion";
import { Card, CardBody, CardFooter } from "@heroui/card";
import { Image } from "@heroui/image";
import { Tooltip } from "@heroui/tooltip";
import { motion } from "framer-motion";

const ProjectCarousel = () => {
  return (
    <motion.div
      variants={staggerChildrenVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      className="flex flex-row items-center justify-between gap-6">
      {works.map((work) => (
        <motion.div key={work.id} variants={childVariants} className="w-full">
          <Card className="w-full" shadow="lg" style={{ boxShadow: "0px 4px 16px 0px var(--color-primary-900)" }} classNames={{
            base: "border-2 border-primary-900 overflow-hidden"
          }}>
            <CardBody className="p-0 overflow-visible">
              <Image src={work.cover.src} alt={work.title} className="h-[180px] w-full object-cover" width="100%" />
            </CardBody>
            <CardFooter className="flex flex-col items-start gap-1">
              <h2 className="text-xl mt-1">{work.title}</h2>
              <p className="text-sm text-border">{work.subtitle}</p>
              <div className="flex flex-row items-center gap-2 mt-3">
                {work.technologies?.map((technology) => (
                  <Tooltip content={technology} key={`${work.id}-${technology}`} placement="bottom" showArrow>
                    {brandIcon(technology, { size: 20, strokeWidth: 1.5, color: "var(--color-primary)" })}
                  </Tooltip>
                ))}
              </div>
            </CardFooter>
          </Card>
        </motion.div>
      ))
      }
    </motion.div >
  )
}

export default ProjectCarousel