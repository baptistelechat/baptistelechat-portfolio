import { ArticleIcon } from "@/lib/constants/ProjectIcon";
import BentoCardProps from "@/lib/interfaces/IBentoCardProps";
import { BookOpen } from "lucide-react";

const Articles = (): BentoCardProps => {
  return {
    Icon: ArticleIcon,
    name: "Articles / Blog",
    description: "Découvrez mes retours d'expérience et réflexions techniques",
    cta: "Lire les articles",
    background: (
      <div className="flex size-full transform-gpu items-center justify-center overflow-hidden bg-gradient-to-bl from-sky-100 to-violet-100 p-4 transition-all duration-300 group-hover:-translate-y-10 dark:from-sky-300 dark:to-violet-300">
        {/* <div className="text-6xl opacity-50">🤫</div> */}
        <BookOpen className="size-20 text-gray-600" />
      </div>
    ),
    href: "/articles",
    className:
      "row-start-14 row-end-15 col-start-1 col-end-2 xl:row-start-4 xl:row-end-5 xl:col-start-3 xl:col-end-5",
  };
};

export default Articles;
