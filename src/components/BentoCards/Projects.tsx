import BentoCardProps from "@/lib/interfaces/IBentoCardProps";
import Image from "next/image";
import {
  PyRevitWithVSCode,
  Sismo,
  SpeedTestTracker,
} from "../ProjectIcon";
import { GanttChart } from "lucide-react";

const Projects = (): BentoCardProps[] => {
  return [
    {
      Icon: Sismo,
      name: "Sismo",
      description:
        "Un outil pour obtenir les zones de neige, de vent et de sismicité en France (incluant DROM-COM).",
      href: "/",
      cta: "En savoir plus",
      background: (
        <Image
          src=""
          className="absolute -right-20 -top-20 opacity-60"
          alt="profile card"
        />
      ),
      className: "lg:row-start-2 lg:row-end-3 lg:col-start-1 lg:col-end-2",
    },
    {
      Icon: SpeedTestTracker,
      name: "SpeedTest Tracker",
      description:
        "Une application web pour surveiller la vitesse d'internet sur un réseau local.",
      href: "/",
      cta: "En savoir plus",
      background: (
        <Image
          src=""
          className="absolute -right-20 -top-20 opacity-60"
          alt="profile card"
        />
      ),
      className: "lg:row-start-2 lg:row-end-3 lg:col-start-2 lg:col-end-3",
    },
    {
      Icon: PyRevitWithVSCode,
      name: "pyRevit with VSCode",
      description:
        "Une extension VS Code pour simplifier la création de plug-ins Revit en utilisant pyRevit.",
      href: "/",
      cta: "En savoir plus",
      background: (
        <Image
          src=""
          className="absolute -right-20 -top-20 opacity-60"
          alt="profile card"
        />
      ),
      className: "lg:row-start-2 lg:row-end-3 lg:col-start-3 lg:col-end-4",
    },
    {
      Icon: GanttChart,
      name: "En voir plus",
      description: "Lorem Ipsum",
      href: "/",
      cta: "En voir plus",
      background: (
        <Image
          src=""
          className="absolute -right-20 -top-20 opacity-60"
          alt="profile card"
        />
      ),
      className: "lg:col-start-4 lg:col-end-5 lg:row-start-2 lg:row-end-3",
    },
  ];
};

export default Projects;
