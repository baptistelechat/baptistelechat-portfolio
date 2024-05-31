import Profile from "@/components/BentoCards/Profile";
import Projects from "@/components/BentoCards/Projects";
import Skills from "@/components/BentoCards/Skills";
import {
  BentoCard,
  BentoGrid,
} from "@/components/magic-ui/bento-grid";
import BentoCardProps from "@/lib/interfaces/IBentoCardProps";
import { UserIcon } from "lucide-react";
import Image from "next/image";

export default function Bento() {
  const features: BentoCardProps[] = [
    Profile(),
    Skills(),
    ...Projects(),
    // Hobbies
    {
      Icon: UserIcon,
      name: "Bento Card",
      description: "Lorem Ipsum",
      href: "/",
      cta: "Learn more",
      background: (
        <Image
          src=""
          className="absolute -right-20 -top-20 opacity-60"
          alt="profile card"
        />
      ),
      className: "lg:row-start-3 lg:row-end-4 lg:col-start-1 lg:col-end-2",
    },
    {
      Icon: UserIcon,
      name: "Bento Card",
      description: "Lorem Ipsum",
      href: "/",
      cta: "Learn more",
      background: (
        <Image
          src=""
          className="absolute -right-20 -top-20 opacity-60"
          alt="profile card"
        />
      ),
      className: "lg:row-start-3 lg:row-end-4 lg:col-start-2 lg:col-end-3",
    },
    {
      Icon: UserIcon,
      name: "Bento Card",
      description: "Lorem Ipsum",
      href: "/",
      cta: "Learn more",
      background: (
        <Image
          src=""
          className="absolute -right-20 -top-20 opacity-60"
          alt="profile card"
        />
      ),
      className: "lg:row-start-4 lg:row-end-5 lg:col-start-1 lg:col-end-2",
    },
    {
      Icon: UserIcon,
      name: "Bento Card",
      description: "Lorem Ipsum",
      href: "/",
      cta: "Learn more",
      background: (
        <Image
          src=""
          className="absolute -right-20 -top-20 opacity-60"
          alt="profile card"
        />
      ),
      className: "lg:row-start-4 lg:row-end-5 lg:col-start-2 lg:col-end-3",
    },
    // Contact
    {
      Icon: UserIcon,
      name: "Bento Card",
      description: "Lorem Ipsum",
      href: "/",
      cta: "Learn more",
      background: (
        <Image
          src=""
          className="absolute -right-20 -top-20 opacity-60"
          alt="profile card"
        />
      ),
      className: "lg:row-start-3 lg:row-end-5 lg:col-start-3 lg:col-end-5",
    },
  ];

  return (
    <BentoGrid className="max-w-screen-2xl p-4 lg:grid-rows-3">
      {features.map((feature) => (
        <BentoCard key={feature.name} {...feature} />
      ))}
    </BentoGrid>
  );
}
