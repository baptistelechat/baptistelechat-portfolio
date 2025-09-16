import Articles from "@/components/BentoCard/Articles";
import Contact from "@/components/BentoCard/Contact";
import Hobbies from "@/components/BentoCard/Hobbies";
import Profile from "@/components/BentoCard/Profile";
import Projects from "@/components/BentoCard/Projects";
import Skills from "@/components/BentoCard/Skills";
import {
  BentoCard,
  BentoGrid,
} from "@/components/magicui/bento-grid/bento-grid";
import BentoCardProps from "@/lib/interfaces/IBentoCardProps";
import { setStaticParamsLocale } from "@/i18n/server";

export default async function Bento({ params }: { params: { locale: string } }) {
  setStaticParamsLocale(params.locale);
  const features: BentoCardProps[] = [
    await Profile(),
    await Skills(),
    ...(await Projects()),
    ...(await Hobbies()),
    await Articles(),
    await Contact(),
  ];

  return (
    <div className="flex max-w-screen-2xl flex-col">
      <BentoGrid className="grid grid-cols-1 gap-4 xl:grid-cols-4 xl:grid-rows-5">
        {features.map((feature) => (
          <BentoCard key={feature.name} {...feature} />
        ))}
      </BentoGrid>
    </div>
  );
}
