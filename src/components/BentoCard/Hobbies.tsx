import { getI18n } from "@/i18n/server";
import BentoCardProps from "@/lib/interfaces/IBentoCardProps";
import { Binary, CarIcon, Gamepad2Icon, TrophyIcon } from "lucide-react";
import Image from "next/image";

const Hobbies = async (): Promise<BentoCardProps[]> => {
  const t = await getI18n();
  
  return [
    {
      Icon: Binary,
      name: t("skills.development"),
      cta: t("ui.view_more"),
      background: (
        <Image
          src={`/img/hobbies/gif/1.gif`}
          fill
          className="size-full object-cover brightness-75 dark:brightness-50"
          alt="gif"
          unoptimized
        />
      ),
      className: "row-start-15 row-end-16 col-start-1 col-end-2 xl:row-start-5 xl:row-end-6 xl:col-start-1 xl:col-end-2",
    },
    {
      Icon: TrophyIcon,
      name: t("skills.sport"),
      cta: t("ui.view_more"),
      background: (
        <Image
          src={`/img/hobbies/gif/2.gif`}
          fill
          className="size-full object-cover brightness-75 dark:brightness-50"
          alt="gif"
          unoptimized
        />
      ),
      className: "row-start-16 row-end-17 col-start-1 col-end-2 xl:row-start-5 xl:row-end-6 xl:col-start-2 xl:col-end-3",
    },
    {
      Icon: Gamepad2Icon,
      name: t("skills.video_games"),
      cta: t("ui.view_more"),
      background: (
        <Image
          src={`/img/hobbies/gif/3.gif`}
          fill
          className="size-full object-cover brightness-75 dark:brightness-50"
          alt="gif"
          unoptimized
        />
      ),
      className: "row-start-17 row-end-18 col-start-1 col-end-2 xl:row-start-6 xl:row-end-7 xl:col-start-1 xl:col-end-2",
    },
    {
      Icon: CarIcon,
      name: t("skills.motorsports"),
      cta: t("ui.view_more"),
      background: (
        <Image
          src={`/img/hobbies/gif/4.gif`}
          fill
          className="size-full object-cover brightness-75 dark:brightness-50"
          alt="gif"
          unoptimized
        />
      ),
      className: "row-start-18 row-end-19 col-start-1 col-end-2 xl:row-start-6 xl:row-end-7 xl:col-start-2 xl:col-end-3",
    },
  ];
};

export default Hobbies;
