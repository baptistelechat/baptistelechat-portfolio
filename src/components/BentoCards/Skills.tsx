import OrbitingCirclesSkills from "@/components/OrbitingCirclesSkills";
import { BoxesIcon } from "lucide-react";
import BentoCardProps from "../../lib/interfaces/IBentoCardProps";

const Skills = (): BentoCardProps => {
  return {
    Icon: BoxesIcon,
    name: "Compétences",
    description: "Développement web et logiciel",
    href: "/",
    cta: "En savoir plus",
    background: <OrbitingCirclesSkills />,
    className: "lg:row-start-1 lg:row-end-2 lg:col-start-3 lg:col-end-5",
  };
};

export default Skills;
