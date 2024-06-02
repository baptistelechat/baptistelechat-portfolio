import BentoCardProps from "@/lib/interfaces/IBentoCardProps";
import { Binary, CarIcon, Gamepad2Icon, TrophyIcon } from "lucide-react";
import Image from "next/image";

const Hobbies = (): BentoCardProps[] => {
  return [
    {
      Icon: Binary,
      name: "Développement",
      href: "/",
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
      className: "lg:row-start-3 lg:row-end-4 lg:col-start-1 lg:col-end-2",
    },
    {
      Icon: TrophyIcon,
      name: "Sports",
      href: "/",
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
      className: "lg:row-start-3 lg:row-end-4 lg:col-start-2 lg:col-end-3",
    },
    {
      Icon: Gamepad2Icon,
      name: "Jeux vidéo",
      href: "/",
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
      className: "lg:row-start-4 lg:row-end-5 lg:col-start-1 lg:col-end-2",
    },
    {
      Icon: CarIcon,
      name: "Sports mécaniques",
      href: "/",
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
      className: "lg:row-start-4 lg:row-end-5 lg:col-start-2 lg:col-end-3",
    },
  ];
};

export default Hobbies;
