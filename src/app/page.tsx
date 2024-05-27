import OrbitingCirclesSkills from "@/components/OrbitingCirclesSkills";
import AnimatedGridPattern from "@/components/magic-ui/animated-grid-pattern";
import { BentoCard, BentoGrid } from "@/components/magic-ui/bento-grid";
import { cn } from "@/lib/utils";
import { RocketIcon, UserIcon } from "lucide-react";
import Image from "next/image";

export default function BentoDemo() {
  const features = [
    {
      Icon: UserIcon,
      name: "Baptiste LECHAT",
      description: "word-rotate",
      href: "/",
      cta: "social-dock",
      background: (
        <>
          <AnimatedGridPattern
            numSquares={30}
            maxOpacity={0.5}
            duration={3}
            repeatDelay={1}
            className={cn(
              "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]",
              "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12"
            )}
          />
          <Image
            src="/avatar/avatar_bg.png"
            alt="avatar"
            width={200}
            height={200}
            className="relative z-10 mb-2 ml-4 mt-4 drop-shadow-md"
          />
        </>
      ),
      className: "lg:row-start-1 lg:row-end-2 lg:col-start-1 lg:col-end-3",
    },
    // Techno
    {
      Icon: RocketIcon,
      name: "Compétences",
      description: "Développement web et logiciel",
      href: "/",
      cta: "En savoir plus",
      background: <OrbitingCirclesSkills />,
      className: "lg:row-start-1 lg:row-end-2 lg:col-start-3 lg:col-end-5",
    },
    // Projects
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
      className: "lg:row-start-2 lg:row-end-3 lg:col-start-1 lg:col-end-2",
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
      className: "lg:row-start-2 lg:row-end-3 lg:col-start-2 lg:col-end-3",
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
      className: "lg:row-start-2 lg:row-end-3 lg:col-start-3 lg:col-end-4",
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
      className: "lg:row-start-2 lg:row-end-3 lg:col-start-4 lg:col-end-5",
    },
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
    <BentoGrid className="p-4 lg:grid-rows-3">
      {features.map((feature) => (
        <BentoCard key={feature.name} {...feature} />
      ))}
    </BentoGrid>
  );
}
