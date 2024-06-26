import BentoCardProps from "@/lib/interfaces/IBentoCardProps";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import BentoCardCTA from "./components/BentoCardCTA";
import BentoCardDescription from "./components/BentoCardDescription";

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
        "grid w-full auto-rows-[22rem] gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
        className
      )}
    >
      {children}
    </div>
  );
};

const BentoCard = ({
  name,
  className,
  background,
  Icon,
  description,
  cta,
  skills,
}: BentoCardProps) => (
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
        !description || !cta || cta.includes("dock")
          ? ""
          : "group-hover:-translate-y-10"
      }`}
    >
      {background}
    </div>
    <div
      className={`pointer-events-none z-10 mb-2 flex w-fit transform-gpu items-center gap-3 rounded-xl p-4 backdrop-blur-sm transition-all duration-300 ${
        !cta || cta.includes("dock")
          ? ""
          : skills
          ? "group-hover:-translate-y-20"
          : "group-hover:-translate-y-10"
      }`}
    >
      <Icon
        className={`size-12 transform-gpu dark:text-neutral-300 ${
          !description ? "text-neutral-200" : ""
        }`}
        strokeWidth={1.5}
      />
      <div className="flex flex-col gap-1">
        <h3
          className={`text-xl font-semibold dark:text-neutral-300 ${
            !description ? "text-neutral-200" : ""
          }`}
        >
          {name}
        </h3>
        {description && <BentoCardDescription description={description} />}
      </div>
    </div>
    <BentoCardCTA name={name} cta={cta} skills={skills} />
    <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03] group-hover:dark:bg-neutral-800/10" />
  </div>
);

export { BentoCard, BentoGrid };
