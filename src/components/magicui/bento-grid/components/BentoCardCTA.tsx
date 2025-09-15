"use client";

import ProfileDialog from "@/components/Dialog/ProfileDialog";
import ProjectDialog from "@/components/Dialog/ProjectDialog";
import SocialDock from "@/components/SocialDock";
import { Button } from "@/components/ui/button";
import projects from "@/lib/constants/projects";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useI18n } from "@/i18n/client";
import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation"; // App Router Next 13+
import { useState } from "react";
import { toast } from "sonner";

// --- CTAButton Component ---
const CTAButton = ({
  name,
  cta,
  href,
}: {
  name: string;
  cta: string;
  href?: string;
}) => {
  const router = useRouter(); // hook direct ici
  const t = useI18n();

  // Dialogs selon type
  if (
    [
      "Compétences",
      "Développement",
      "Sport",
      "Jeux vidéo",
      "Sports mécaniques",
    ].includes(name)
  ) {
    return <ProfileDialog cta={cta} />;
  }

  if (projects.map((project) => project.name).includes(name)) {
    return <ProjectDialog name={name} />;
  }

  // Navigation avec href fourni
  if (href) {
    return (
      <Button
        variant="ghost"
        asChild
        size="sm"
        className="pointer-events-auto w-fit bg-card hover:cursor-pointer"
      >
        <a href={href}>
          {cta}
          <ArrowRightIcon className="ml-2 size-4" />
        </a>
      </Button>
    );
  }

  // Navigation vers un article
  if (cta.includes("article")) {
    return (
      <Button
        variant="ghost"
        asChild
        size="sm"
        className="pointer-events-auto w-fit bg-card hover:cursor-pointer"
        onClick={() => router.push("/articles")} // navigation côté client
      >
        <a>
          {cta}
          <ArrowRightIcon className="ml-2 size-4" />
        </a>
      </Button>
    );
  }

  // Fonctionnalité en dev
  return (
    <Button
      variant="ghost"
      asChild
      size="sm"
      className="pointer-events-auto w-fit bg-card hover:cursor-pointer"
      onClick={() =>
        toast(t("in_development"), {
          description: t("feature_coming_soon"),
        })
      }
    >
      <a>
        {cta}
        <ArrowRightIcon className="ml-2 size-4" />
      </a>
    </Button>
  );
};

// --- BentoCardCTA Component ---
const BentoCardCTA = ({
  name,
  cta,
  skills,
  href,
}: {
  name: string;
  cta: string;
  skills?: string[];
  href?: string;
}) => {
  const [hoveredSkill, setHoveredSkill] = useState("");
  const t = useI18n();

  // SocialDock spécial
  if (cta.includes("social-dock")) {
    return <SocialDock />;
  }

  return (
    <div
      className={cn(
        "z-50 absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-col justify-start p-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 gap-2 px-4 mt-2 pb-4"
      )}
    >
      {/* Skills et hover */}
      <div className="mr-2 flex items-center justify-between">
        <div className="flex gap-1 text-xs">
          {skills &&
            skills.map((skill) => {
              const title = () => {
                if (skill.startsWith("_")) {
                  const newSkill = skill[1];
                  return `${newSkill[0].toUpperCase()}${skill
                    .slice(2)
                    .replaceAll("_", " ")}`;
                } else {
                  return `${skill[0].toUpperCase()}${skill
                    .slice(1)
                    .replaceAll("_", " ")}`;
                }
              };

              return (
                <Image
                  key={skill}
                  src={
                    skill.startsWith("_")
                      ? `/icons/${skill}.png`
                      : `/icons/${skill}.svg`
                  }
                  alt={skill}
                  width={30}
                  height={30}
                  onMouseEnter={() => setHoveredSkill(title())}
                  onMouseLeave={() => setHoveredSkill("")}
                />
              );
            })}
        </div>

        {/* Tooltip animé */}
        <AnimatePresence>
          {hoveredSkill && (
            <motion.p
              className="font-semibold text-neutral-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {hoveredSkill}
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      <CTAButton name={name} cta={cta} href={href} />
    </div>
  );
};

export default BentoCardCTA;
