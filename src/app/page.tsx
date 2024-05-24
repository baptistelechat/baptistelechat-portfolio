import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import { GlobeIcon } from "lucide-react";
import Image from "next/image";

const classNames = [
  "lg:row-start-1 lg:row-end-2 lg:col-start-1 lg:col-end-3", // Profile

  "lg:row-start-1 lg:row-end-2 lg:col-start-3 lg:col-end-5", // Techno

  "lg:row-start-2 lg:row-end-3 lg:col-start-1 lg:col-end-2", // Project 1
  "lg:row-start-2 lg:row-end-3 lg:col-start-2 lg:col-end-3", // Project 2
  "lg:row-start-2 lg:row-end-3 lg:col-start-3 lg:col-end-4", // Project 3
  "lg:row-start-2 lg:row-end-3 lg:col-start-4 lg:col-end-5", // Project 4

  "lg:row-start-3 lg:row-end-4 lg:col-start-1 lg:col-end-2", // Hobbies 1
  "lg:row-start-3 lg:row-end-4 lg:col-start-2 lg:col-end-3", // Hobbies 2
  "lg:row-start-4 lg:row-end-5 lg:col-start-1 lg:col-end-2", // Hobbies 3
  "lg:row-start-4 lg:row-end-5 lg:col-start-2 lg:col-end-3", // Hobbies 4

  "lg:row-start-3 lg:row-end-5 lg:col-start-3 lg:col-end-5", // Contact
];

const features = classNames.map((className) => {
  return {
    Icon: GlobeIcon,
    name: "Full text search",
    description: "Search through all your files in one place.",
    href: "/",
    cta: "Learn more",
    background: (
      <Image
        src=""
        className="absolute -right-20 -top-20 opacity-60"
        alt="profile card"
      />
    ),
    className,
  };
});

export default async function BentoDemo() {
  return (
    <BentoGrid className="p-4 lg:grid-rows-3">
      {features.map((feature) => (
        <BentoCard key={feature.name} {...feature} />
      ))}
    </BentoGrid>
  );
}
