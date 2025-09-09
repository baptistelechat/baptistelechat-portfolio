import { MysteryProject } from "@/lib/constants/ProjectIcon";
import projects from "@/lib/constants/projects";
import BentoCardProps from "@/lib/interfaces/IBentoCardProps";
import IProject from "@/lib/interfaces/IProject";
import { GanttChart, ToyBrick } from "lucide-react";

const Projects = (): BentoCardProps[] => {
  const projectList: BentoCardProps[] = projects.map((project: IProject) => {
    return {
      Icon: project.Icon,
      name: project.name,
      description: project.description,
      cta: project.cta,
      background: project.background,
      className: project.className,
      skills: project.skills,
    };
  });

  return [
    ...projectList,
    {
      Icon: MysteryProject,
      name: "Projet Mystère",
      description: "Un nouveau projet passionnant en cours de développement. Un indice se cache dans cette page...",
      cta: "Bientôt disponible",
      background: (
        <div className="flex size-full transform-gpu items-center justify-center overflow-hidden bg-gradient-to-bl from-sky-100 to-violet-100 p-4 transition-all duration-300 group-hover:-translate-y-10 dark:from-sky-300 dark:to-violet-300">
          {/* <div className="text-6xl opacity-50">🤫</div> */}
          <ToyBrick className="size-20 text-gray-600" />
        </div>
      ),
      className:
        "row-start-9 row-end-10 col-start-1 col-end-2 xl:row-start-3 xl:row-end-4 xl:col-start-3 xl:col-end-4",
    },
    {
      Icon: GanttChart as any,
      name: "En voir plus",
      description: "Découvrir plus de projets",
      cta: "En voir plus",
      background: <div className="absolute -right-20 -top-20 opacity-60" />,
      className:
        "row-start-10 row-end-11 col-start-1 col-end-2 xl:row-start-3 xl:row-end-4 xl:col-start-4 xl:col-end-5",
    },
  ];
};

export default Projects;
