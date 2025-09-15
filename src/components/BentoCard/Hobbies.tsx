import { getI18n } from "@/i18n/server";
import BentoCardProps from "@/lib/interfaces/IBentoCardProps";
import { Binary, CarIcon, Gamepad2Icon, TrophyIcon } from "lucide-react";
import Image from "next/image";

const Hobbies = async (): Promise<BentoCardProps[]> => {
  const t = await getI18n();
  
  return [
    {
      Icon: Binary,
      name: t("development"),
      cta: t("view_more"),
      background: (
        <Image
          src={`/img/hobbies/gif/1.gif`}
          fill
          className="size-full object-cover brightness-75 dark:brightness-50"
          alt="gif"
          unoptimized
        />
      ),
      className: "row-start-11 row-end-12 col-start-1 col-end-2 xl:row-start-4 xl:row-end-5 xl:col-start-1 xl:col-end-2",
    },
    {
      Icon: TrophyIcon,
      name: t("sport"),
      cta: t("view_more"),
      background: (
        <Image
          src={`/img/hobbies/gif/2.gif`}
          fill
          className="size-full object-cover brightness-75 dark:brightness-50"
          alt="gif"
          unoptimized
        />
      ),
      className: "row-start-12 row-end-13 col-start-1 col-end-2 xl:row-start-4 xl:row-end-5 xl:col-start-2 xl:col-end-3",
    },
    {
      Icon: Gamepad2Icon,
      name: t("video_games"),
      cta: t("view_more"),
      background: (
        <Image
          src={`/img/hobbies/gif/3.gif`}
          fill
          className="size-full object-cover brightness-75 dark:brightness-50"
          alt="gif"
          unoptimized
        />
      ),
      className: "row-start-13 row-end-14 col-start-1 col-end-2 xl:row-start-5 xl:row-end-6 xl:col-start-1 xl:col-end-2",
    },
    {
      Icon: CarIcon,
      name: t("motorsports"),
      cta: t("view_more"),
      background: (
        <Image
          src={`/img/hobbies/gif/4.gif`}
          fill
          className="size-full object-cover brightness-75 dark:brightness-50"
          alt="gif"
          unoptimized
        />
      ),
      className: "row-start-14 row-end-15 col-start-1 col-end-2 xl:row-start-5 xl:row-end-6 xl:col-start-2 xl:col-end-3",
    },
  ];
};

export default Hobbies;
