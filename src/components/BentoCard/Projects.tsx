import projects from "@/lib/constants/projects";
import BentoCardProps from "@/lib/interfaces/IBentoCardProps";
import IProject from "@/lib/interfaces/IProject";
import { GanttChart } from "lucide-react";

const Projects = (): BentoCardProps[] => {

  const projectList: BentoCardProps[] = projects.map(
    (project: IProject) => {
      return {
        Icon: project.Icon,
        name: project.name,
        description: project.description,
        cta: project.cta,
        background: project.background,
        className: project.className,
        skills: project.skills,
      };
    }
  );

  return [
    ...projectList,
    {
      Icon: GanttChart as any,
      name: "En voir plus",
      description: "Découvrir plus de projets",
      cta: "En voir plus",
      background: <div className="absolute -right-20 -top-20 opacity-60" />,
      className:
        "row-start-6 row-end-7 col-start-1 col-end-2 sm:row-start-3 sm:row-end-4 sm:col-start-2 sm:col-end-3 lg:col-start-4 lg:col-end-5 lg:row-start-2 lg:row-end-3",
    },
  ];
};

export default Projects;
