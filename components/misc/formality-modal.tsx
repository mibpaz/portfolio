"use client";

import { siteConfig } from "@/config/site";
import { Button } from "@heroui/button";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@heroui/modal";
import { Slider } from "@heroui/slider";
import { IconCheck, IconCopy, IconFlame } from "@tabler/icons-react";
import { useEffect, useState } from "react";

const formalityTexts = [
  {
    level: 1,
    label: "Literally just the link",
    emoji: "🔗",
    text: `${siteConfig.url}`,
  },
  {
    level: 2,
    label: "Relaxed",
    emoji: "👋",
    text: `Check out this portfolio I found: ${siteConfig.url}`,
  },
  {
    level: 3,
    label: "Neutral",
    emoji: "👤",
    text: `I came across this developer's portfolio and thought you might be interested in it: ${siteConfig.url}`,
  },
  {
    level: 4,
    label: "Formal",
    emoji: "💼",
    text: `I recently discovered this developer's portfolio and thinking of the scope and needs of the project, I think this is a great fit for you: ${siteConfig.url}`,
  },
  {
    level: 5,
    label: "Borderline posh",
    emoji: "🎩",
    text: `Greetings! I hope this message finds you well.\nI encountered this intricate portfolio and felt compelled to share it with you, as I believe the craftsmanship may be a particularly great fit for your tastes: ${siteConfig.url}`,
  },
  {
    level: 6,
    label: "Shakespearean",
    emoji: "🎭",
    text: `Most esteemed recipient, I do humbly beseech that this missive doth find thee in the very zenith of health and spirits most resplendent.\n
Whilst traversing the vast and labyrinthine corridors of the modern aether, mine eyes did alight upon a most exquisite and cunningly wrought portfolio, whose elegance and ingenuity did forthwith compel me to bring it unto thy noble attention. Verily, I am persuaded to believe that such masterful craftsmanship may align most harmoniously with the refined inclinations of thy distinguished taste.\n
Should it please thee, pray cast thine discerning gaze upon the following:\n
 ${siteConfig.url}`,
  },
];

interface FormalityModalProps {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
}

export const FormalityModal = ({
  isOpen,
  onOpenChange,
}: FormalityModalProps) => {
  const [formalityLevel, setFormalityLevel] = useState(3);
  const [copied, setCopied] = useState(false);

  const currentText =
    formalityTexts.find((t) => t.level === formalityLevel) ?? formalityTexts[2];

  const handleCopy = () => {
    navigator.clipboard.writeText(currentText.text);
    setCopied(true);
  };

  useEffect(() => {
    if (copied) {
      const timeout = setTimeout(() => {
        setCopied(false);
        onOpenChange(false);
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [copied]);

  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      size="lg"
      classNames={{
        base: "border border-primary/30 bg-default/50 backdrop-blur-md backdrop-brightness-150",
        header: "border-b border-primary/30",
        footer: "border-t border-primary/30",
      }}
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-2">
              <h3 className="font-display">Share this portfolio</h3>
              <p className="text-border">
                Adjust the formality level and copy the text to share this
                portfolio with others.
              </p>
            </ModalHeader>
            <ModalBody className="py-6">
              <div className="flex flex-col gap-6">
                <Slider
                  label="How formal do you want to be?"
                  step={1}
                  minValue={1}
                  maxValue={6}
                  value={formalityLevel}
                  onChange={(value) => setFormalityLevel(value as number)}
                  showSteps
                  hideValue
                  classNames={{
                    base: "max-w-full",
                    track: "bg-surface-700",
                    filler: "bg-primary",
                    thumb: "bg-primary-500",
                  }}
                />
                <div className="flex flex-row items-center gap-2">
                  <IconFlame
                    size={16}
                    strokeWidth={2}
                    className="text-primary-500"
                  />
                  <p className="text-sm text-border">
                    Formality level:{" "}
                    <span className="text-foreground">
                      {formalityTexts[formalityLevel - 1].label}{" "}
                      {formalityTexts[formalityLevel - 1].emoji}
                    </span>
                  </p>
                </div>
                <div className="rounded-lg border border-primary bg-default p-4 min-h-[120px] max-h-[240px] overflow-y-auto scroll-m-2">
                  <p className="text-sm leading-relaxed whitespace-pre-line text-justify">
                    {currentText.text}
                  </p>
                </div>
              </div>
            </ModalBody>
            <ModalFooter>
              <Button variant="light" onPress={onClose}>
                Close
              </Button>
              <Button
                color="primary"
                className="text-background font-medium"
                onPress={handleCopy}
                startContent={
                  copied ? (
                    <IconCheck size={16} strokeWidth={2} color="currentColor" />
                  ) : (
                    <IconCopy size={16} strokeWidth={2} color="currentColor" />
                  )
                }
              >
                {copied ? "Copied!" : "Copy to Clipboard"}
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};
