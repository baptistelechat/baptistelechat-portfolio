"use client";
import ProfileDialog from "@/components/Dialog/ProfileDialog";
import SocialDock from "@/components/SocialDock";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { toast } from "sonner";

const Dialog = ({
  name,
  cta,
  skills,
}: {
  name:string;
  cta: string;
  skills?: string[];
}) => {
    if (["Compétences", "Développement", "Sport", "Jeux vidéo", "Sports mécaniques"].includes(name)) {
      return <ProfileDialog name={name} cta={cta} skills={skills} />;
    }

  return (
    <Button
      variant="ghost"
      asChild
      size="sm"
      className={`pointer-events-auto w-fit bg-card hover:cursor-pointer ${
        skills ? "mt-2" : ""
      }`}
      onClick={() =>
        toast("👩🏽‍💻 En cours de développement", {
          description:
            "Cette fonctionnalité n'est pas encore prête, mais elle arrive très vite ⏳",
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

const BentoCardCTA = ({
  name,
  cta,
  skills,
}: {
  name:string;
  cta: string;
  skills?: string[];
}) => {
  const [hoveredSkill, setHoveredSkill] = useState("");

  if (cta.includes("social-dock")) {
    return <SocialDock />;
  }

  return (
    <div
      className={cn(
        "z-50 absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-col justify-start p-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 gap-2"
      )}
    >
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

      <Dialog name={name} cta={cta} skills={skills} />
    </div>
  );
};

export default BentoCardCTA;
