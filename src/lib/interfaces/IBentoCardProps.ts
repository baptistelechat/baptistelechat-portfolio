import { ReactNode } from "react";

interface BentoCardProps {
  name: string;
  className: string;
  background: ReactNode;
  Icon: any | JSX.Element;
  description?: string;
  cta: string;
  skills?: string[];
}

export default BentoCardProps;
