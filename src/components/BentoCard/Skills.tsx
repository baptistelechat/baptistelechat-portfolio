import OrbitingCirclesSkills from "@/components/OrbitingCirclesSkills";
import { BoxesIcon } from "lucide-react";
import BentoCardProps from "../../lib/interfaces/IBentoCardProps";

const Skills = (): BentoCardProps => {
  return {
    Icon: BoxesIcon,
    name: "Compétences",
    description: "Développement web et logiciel",
    cta: "En savoir plus",
    background: <OrbitingCirclesSkills />,
    className:
      "row-start-2 row-end-3 col-start-1 col-end-2 xl:row-start-1 xl:row-end-2 xl:col-start-3 xl:col-end-5",
  };
};

export default Skills;
