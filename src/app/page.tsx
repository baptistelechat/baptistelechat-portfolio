import Articles from "@/components/BentoCard/Articles";
import Contact from "@/components/BentoCard/Contact";
import Hobbies from "@/components/BentoCard/Hobbies";
import Profile from "@/components/BentoCard/Profile";
import Projects from "@/components/BentoCard/Projects";
import Skills from "@/components/BentoCard/Skills";
import ResponsiveContactCard from "@/components/ResponsiveContactCard";
import {
  BentoCard,
  BentoGrid,
} from "@/components/magicui/bento-grid/bento-grid";
import BentoCardProps from "@/lib/interfaces/IBentoCardProps";

export default function Bento() {
  const features: BentoCardProps[] = [
    Profile(),
    Skills(),
    ...Projects(),
    ...Hobbies(),
    Articles(),
    Contact(),
  ];

  return (
    <div className="flex max-w-screen-2xl flex-col">
      <BentoGrid className="grid grid-cols-1 gap-4 xl:grid-cols-4 xl:grid-rows-5">
        {features.map((feature) => (
          <BentoCard key={feature.name} {...feature} />
        ))}
      </BentoGrid>
      {/* <ResponsiveContactCard /> */}
    </div>
  );
}
