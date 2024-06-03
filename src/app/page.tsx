import Contact from "@/components/BentoCards/Contact";
import Hobbies from "@/components/BentoCards/Hobbies";
import Profile from "@/components/BentoCards/Profile";
import Projects from "@/components/BentoCards/Projects";
import Skills from "@/components/BentoCards/Skills";
import {
  BentoCard,
  BentoGrid,
} from "@/components/magic-ui/bento-grid/bento-grid";
import BentoCardProps from "@/lib/interfaces/IBentoCardProps";

export default function Bento() {
  const features: BentoCardProps[] = [
    Profile(),
    Skills(),
    ...Projects(),
    ...Hobbies(),
    Contact(),
  ];

  return (
    <BentoGrid className="max-w-screen-2xl p-4 lg:grid-rows-3">
      {features.map((feature) => (
        <BentoCard key={feature.name} {...feature} />
      ))}
    </BentoGrid>
  );
}
