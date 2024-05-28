import { ReactNode } from "react";

interface BentoCardProps {
  name: string;
  className: string;
  background: ReactNode;
  Icon: any | JSX.Element;
  description: string;
  href: string;
  cta: string;
}

export default BentoCardProps;
