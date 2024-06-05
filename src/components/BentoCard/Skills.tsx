import OrbitingCirclesSkills from "@/components/OrbitingCirclesSkills";
import { BoxesIcon } from "lucide-react";
import BentoCardProps from "../../lib/interfaces/IBentoCardProps";

const Skills = (): BentoCardProps => {
  return {
    Icon: BoxesIcon,
    name: "Compétences",
    description: "Développement web et logiciel",
    href: "/profile",
    cta: "En savoir plus",
    background: <OrbitingCirclesSkills />,
    className: "row-start-2 row-end-3 col-start-1 col-end-2 sm:row-start-1 sm:row-end-2 sm:col-start-2 sm:col-end-3  lg:row-start-1 lg:row-end-2 lg:col-start-3 lg:col-end-5",
  };
};

export default Skills;
