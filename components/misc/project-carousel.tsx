import { works } from "@/config/projects";
import brandIcon from "@/utils/languageIcon";
import { childVariants, staggerChildrenVariants } from "@/utils/motion";
import { Button } from "@heroui/button";
import { Card, CardBody, CardFooter } from "@heroui/card";
import { Image } from "@heroui/image";
import { Tooltip } from "@heroui/tooltip";
import { IconExternalLink } from "@tabler/icons-react";
import { motion } from "framer-motion";

const ProjectCarousel = () => {
  return (
    <motion.div
      variants={staggerChildrenVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      {works.map((work) => (
        <motion.div
          key={work.id}
          variants={childVariants}
          className="col-span-1"
        >
          <Card
            className="w-full"
            classNames={{
              base: "border-1 ring ring-offset-2 ring-offset-transparent ring-transparent hover:ring-primary-400 border-primary/20 bg-default/25 overflow-hidden transition-all duration-300",
            }}
          >
            <CardBody className="p-0 overflow-visible">
              <Image
                src={work.cover.src}
                alt={work.title}
                className=" aspect-video w-full object-cover"
                width="100%"
              />
            </CardBody>
            <CardFooter className="flex flex-col items-start gap-1">
              <h2 className="text-xl mt-1">{work.title}</h2>
              <p className="text-sm text-border">{work.subtitle}</p>
              <div className="flex justify-between items-center w-full">
                <div className="flex flex-row items-center gap-2">
                  {work.technologies?.map((technology) => (
                    <Tooltip
                      content={technology}
                      key={`${work.id}-${technology}`}
                      placement="bottom"
                      showArrow
                    >
                      {brandIcon(technology, {
                        size: 20,
                        strokeWidth: 1.5,
                        color: "var(--color-primary)",
                      })}
                    </Tooltip>
                  ))}
                </div>
                <Button
                  variant="light"
                  color="primary"
                  size="sm"
                  isIconOnly
                  onPress={() => window.open(work.link, "_blank")}
                >
                  <IconExternalLink size={20} />
                </Button>
              </div>
            </CardFooter>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ProjectCarousel;
