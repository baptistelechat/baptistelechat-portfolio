import BentoCardProps from "@/lib/interfaces/IBentoCardProps";
import { GanttChart } from "lucide-react";
import Image from "next/image";
import { PyRevitWithVSCode, Sismo, SpeedTestTracker } from "../ProjectIcon";

const Projects = (): BentoCardProps[] => {
  const ratio = 1600 / 900;
  const imgSize = 175;
  const height = imgSize;
  const width = imgSize * ratio;

  return [
    {
      Icon: Sismo,
      name: "Sismo",
      description:
        "Un outil pour obtenir les zones de neige, de vent et de sismicité en France (incluant DROM-COM).",
      href: "/",
      cta: "En savoir plus",
      background: (
        <div className="flex size-full transform-gpu items-center justify-center overflow-hidden bg-gradient-to-bl from-indigo-100 to-fuchsia-100 p-4 transition-all duration-300 group-hover:-translate-y-10 dark:from-indigo-300 dark:to-fuchsia-300">
          <Image
            src="/project/sismo/Capture_01.png"
            width={width}
            height={height}
            className="size-full rounded-md drop-shadow-md"
            alt="sismo"
            unoptimized
          />
        </div>
      ),
      className:
        "row-start-3 row-end-4 col-start-1 col-end-2 sm:row-start-2 sm:row-end-3 sm:col-start-1 sm:col-end-2 lg:row-start-2 lg:row-end-3 lg:col-start-1 lg:col-end-2",
      skills: [
        "react",
        "javascript",
        "material_ui",
        "nodejs",
        "firebase",
        "vercel",
      ],
    },
    {
      Icon: SpeedTestTracker,
      name: "SpeedTest Tracker",
      description:
        "Une application web pour surveiller la vitesse d'internet sur un réseau local.",
      href: "/",
      cta: "En savoir plus",
      background: (
        <div className="flex size-full transform-gpu items-center justify-center overflow-hidden bg-gradient-to-bl from-rose-100 to-sky-100 p-4 transition-all duration-300 group-hover:-translate-y-10 dark:from-rose-300 dark:to-sky-300">
          <Image
            src="/project/speedTestTracker/Capture_01.png"
            width={width}
            height={height}
            className="size-full rounded-md drop-shadow-md"
            alt="speedTestTracker"
            unoptimized
          />
        </div>
      ),
      className:
        "row-start-4 row-end-5 col-start-1 col-end-2 sm:row-start-2 sm:row-end-3 sm:col-start-2 sm:col-end-3 lg:row-start-2 lg:row-end-3 lg:col-start-2 lg:col-end-3",
      skills: [
        "react_ts",
        "typescript",
        "_shadcn_ui",
        "tailwindcss",
        "nodejs",
        "docker",
      ],
    },
    {
      Icon: PyRevitWithVSCode,
      name: "pyRevit with VSCode",
      description:
        "Une extension VS Code pour simplifier la création de plug-ins Revit en utilisant pyRevit.",
      href: "/",
      cta: "En savoir plus",
      background: (
        <div className="flex size-full transform-gpu items-center justify-center overflow-hidden bg-gradient-to-bl from-amber-100 to-sky-100 p-4 transition-all duration-300 group-hover:-translate-y-10 dark:from-amber-300 dark:to-sky-300">
          <Image
            src="/project/pyRevitWithVSCode/Capture_01.png"
            width={width}
            height={height}
            className="size-full rounded-md drop-shadow-md"
            alt="pyRevitWithVSCode"
            unoptimized
          />
        </div>
      ),
      className:
        "row-start-5 row-end-6 col-start-1 col-end-2 sm:row-start-3 sm:row-end-4 sm:col-start-1 sm:col-end-2 lg:row-start-2 lg:row-end-3 lg:col-start-3 lg:col-end-4",
      skills: ["vscode", "typescript", "python", "lucide", "_revit", "pyrevit"],
    },
    {
      Icon: GanttChart,
      name: "En voir plus",
      description: "Découvrir plus de projets",
      href: "/",
      cta: "En voir plus",
      background: (
        <Image
          src=""
          className="absolute -right-20 -top-20 opacity-60"
          alt="profile card"
        />
      ),
      className:
        "row-start-6 row-end-7 col-start-1 col-end-2 sm:row-start-3 sm:row-end-4 sm:col-start-2 sm:col-end-3 lg:col-start-4 lg:col-end-5 lg:row-start-2 lg:row-end-3",
    },
  ];
};

export default Projects;
