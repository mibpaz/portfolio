import { StaticImageData } from "next/image";
import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export type SvgProps = {
  width?: number;
  height?: number;
};

export type WorkStatus = "ongoing" | "completed";

export type Work = {
  id: string;
  title: string;
  subtitle: string;
  technologies?: string[];
  description: string;
  roles: string[];
  workPlace: string;
  when: string;
  cover: StaticImageData;
  images?: StaticImageData[];
  link?: string;
  repo?: string;
  status?: WorkStatus;
};