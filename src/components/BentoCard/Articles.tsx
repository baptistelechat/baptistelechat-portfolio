import { getI18n } from "@/i18n/server";
import { BookOpenIcon, Newspaper } from "lucide-react";
import BentoCardProps from "../../lib/interfaces/IBentoCardProps";

const Articles = async (): Promise<BentoCardProps> => {
  const t = await getI18n();

  return {
    Icon: BookOpenIcon,
    name: t("articles_blog"),
    description: t("articles_description"),
    cta: t("read_articles"),
    background: (
      <div className="flex size-full transform-gpu items-center justify-center overflow-hidden bg-gradient-to-bl from-sky-100 to-violet-100 p-4 dark:from-sky-300 dark:to-violet-300">
        <Newspaper className="size-20 text-gray-600" />
      </div>
    ),
    href: "/articles",
    className:
      "row-start-14 row-end-15 col-start-1 col-end-2 xl:row-start-4 xl:row-end-5 xl:col-start-3 xl:col-end-5",
  };
};

export default Articles;
