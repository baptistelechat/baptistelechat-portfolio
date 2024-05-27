import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRightIcon } from "lucide-react";
import { ReactNode } from "react";
import SocialDock from "../SocialDock";
import WordRotate from "./word-rotate";

const BentoGrid = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "grid w-full auto-rows-[22rem] grid-cols-4 gap-4",
        className
      )}
    >
      {children}
    </div>
  );
};

const Description = ({ description }: { description: string }) => {
  if (description === "word-rotate") {
    return (
      <WordRotate
        className="max-w-lg text-neutral-400"
        words={[
          "Développeur web full-stack",
          "Développeur front-end",
          "Développeur back-end",
          "Développeur React",
          "Développeur TypeScript",
          "Développeur d'applications",
          "Développeur d'outils",
          "Développeur Python",
          "Spécialiste en optimisation de processus",
          "Chef de projet technique",
          "Lead développeur",
          "Responsable Réseau sociaux",
        ]}
      />
    );
  }

  return <p className="max-w-lg text-neutral-400">{description}</p>;
};

const CTA = ({ cta, href }: { cta: string; href: string }) => {
  if (cta === "social-dock") {
    return <SocialDock />;
  }

  return (
    <div
      className={cn(
        "pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
      )}
    >
      <Button variant="ghost" asChild size="sm" className="pointer-events-auto bg-card">
        <a href={href}>
          {cta}
          <ArrowRightIcon className="ml-2 size-4" />
        </a>
      </Button>
    </div>
  );
};

const BentoCard = ({
  name,
  className,
  background,
  Icon,
  description,
  href,
  cta,
}: {
  name: string;
  className: string;
  background: ReactNode;
  Icon: any;
  description: string;
  href: string;
  cta: string;
}) => (
  <div
    key={name}
    className={cn(
      "group relative col-span-3 flex flex-col justify-between overflow-hidden rounded-xl bg-card",
      // light styles
      "[box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
      // dark styles
      "transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      className
    )}
  >
    <div
      className={`size-full transition-all duration-300 ${
        !cta.includes("dock") ? "group-hover:-translate-y-10" : ""
      }`}
    >
      {background}
    </div>
    <div
      className={`pointer-events-none z-10 mb-2 flex w-fit transform-gpu items-center gap-1 rounded-xl p-4 backdrop-blur-sm transition-all duration-300 ${
        !cta.includes("dock") ? "group-hover:-translate-y-10" : ""
      }`}
    >
      <Icon
        className="size-12 transform-gpu dark:text-neutral-300"
        strokeWidth={1.5}
      />
      <div className="flex flex-col gap-1">
        <h3 className="text-xl font-semibold dark:text-neutral-300">{name}</h3>
        <Description description={description} />
      </div>
    </div>
    <CTA cta={cta} href={href} />
    <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03] group-hover:dark:bg-neutral-800/10" />
  </div>
);

export { BentoCard, BentoGrid };
