import OrbitingCirclesSkills from "@/components/OrbitingCirclesSkills";
import { getI18n } from "@/i18n/server";
import { BoxesIcon } from "lucide-react";
import BentoCardProps from "../../lib/interfaces/IBentoCardProps";

const Skills = async (): Promise<BentoCardProps> => {
  const t = await getI18n();
  
  return {
    Icon: BoxesIcon,
    name: t("skills"),
    description: t("skills_description"),
    cta: t("view_more"),
    background: <OrbitingCirclesSkills />,
    className:
      "row-start-2 row-end-3 col-start-1 col-end-2 xl:row-start-1 xl:row-end-2 xl:col-start-3 xl:col-end-5",
  };
};

export default Skills;
