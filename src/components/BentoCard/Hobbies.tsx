import BentoCardProps from "@/lib/interfaces/IBentoCardProps";
import { Binary, CarIcon, Gamepad2Icon, TrophyIcon } from "lucide-react";
import Image from "next/image";

const Hobbies = (): BentoCardProps[] => {
  return [
    {
      Icon: Binary,
      name: "Développement",
      cta: "En savoir plus",
      background: (
        <Image
          src={`/img/hobbies/gif/1.gif`}
          fill
          className="size-full object-cover brightness-75 dark:brightness-50"
          alt="gif"
          unoptimized
        />
      ),
      className: "row-start-7 row-end-8 col-start-1 col-end-2 sm:row-start-4 sm:row-end-5 sm:col-start-1 sm:col-end-2 lg:row-start-3 lg:row-end-4 lg:col-start-1 lg:col-end-2",
    },
    {
      Icon: TrophyIcon,
      name: "Sports",
      cta: "En savoir plus",
      background: (
        <Image
          src={`/img/hobbies/gif/2.gif`}
          fill
          className="size-full object-cover brightness-75 dark:brightness-50"
          alt="gif"
          unoptimized
        />
      ),
      className: "row-start-8 row-end-9 col-start-1 col-end-2 sm:row-start-4 sm:row-end-5 sm:col-start-2 sm:col-end-3 lg:row-start-3 lg:row-end-4 lg:col-start-2 lg:col-end-3",
    },
    {
      Icon: Gamepad2Icon,
      name: "Jeux vidéo",
      cta: "En savoir plus",
      background: (
        <Image
          src={`/img/hobbies/gif/3.gif`}
          fill
          className="size-full object-cover brightness-75 dark:brightness-50"
          alt="gif"
          unoptimized
        />
      ),
      className: "row-start-9 row-end-10 col-start-1 col-end-2 sm:row-start-5 sm:row-end-6 sm:col-start-1 sm:col-end-2 lg:row-start-4 lg:row-end-5 lg:col-start-1 lg:col-end-2",
    },
    {
      Icon: CarIcon,
      name: "Sports mécaniques",
      cta: "En savoir plus",
      background: (
        <Image
          src={`/img/hobbies/gif/4.gif`}
          fill
          className="size-full object-cover brightness-75 dark:brightness-50"
          alt="gif"
          unoptimized
        />
      ),
      className: "row-start-10 row-end-11 col-start-1 col-end-2 sm:row-start-5 sm:row-end-6 sm:col-start-2 sm:col-end-3 lg:row-start-4 lg:row-end-5 lg:col-start-2 lg:col-end-3",
    },
  ];
};

export default Hobbies;
