import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export type MemType = {
  id: string;
  title: string;
  image: string;
  desc: string;
  likes: number;
};
