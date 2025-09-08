import Image from "next/image";
import IProject from "../interfaces/IProject";
import {
  Aura,
  CodeX,
  PyRevitWithVSCode,
  Sismo,
  SpeedTestTracker,
  TravelTag,
} from "./ProjectIcon";

const ratio = 1600 / 900;
const imgSize = 175;
const height = imgSize;
const width = imgSize * ratio;

const projects: IProject[] = [
  {
    Icon: TravelTag,
    name: "TravelTag",
    description:
      "Un générateur de QrCode à coller sur ses bagages pour son prochain voyage.",
    cta: "En savoir plus",
    background: (
      <div className="flex size-full transform-gpu items-center justify-center overflow-hidden bg-gradient-to-bl from-indigo-100 to-teal-100 p-4 transition-all duration-300 group-hover:-translate-y-10 dark:from-indigo-300 dark:to-teal-300">
        <Image
          src="/project/TravelTag/Capture_1.png"
          width={width}
          height={height}
          className="size-full rounded-md drop-shadow-md"
          alt="TravelTag"
          unoptimized
        />
      </div>
    ),
    className:
      "row-start-3 row-end-4 col-start-1 col-end-2 xl:row-start-2 xl:row-end-3 xl:col-start-1 xl:col-end-2",
    skills: [
      "react_ts",
      "typescript",
      "_shadcn_ui",
      "tailwindcss",
      "vite",
      "vercel",
    ],
    capture: 1,
    bgGradientLight: "from-indigo-100 to-teal-100",
    bgGradientDark: "dark:from-indigo-300 dark:to-teal-300",
    gitHubUrl: "https://github.com/baptistelechat/travelTag",
    website: "https://traveltag.vercel.app/",
  },
  {
    Icon: Aura,
    name: "Aura",
    description:
      "un générateur de visuels pensé pour simplifier la création de contenus sur les réseaux sociaux",
    cta: "En savoir plus",
    background: (
      <div className="flex size-full transform-gpu items-center justify-center overflow-hidden bg-gradient-to-bl from-indigo-100 to-blue-100 p-4 transition-all duration-300 group-hover:-translate-y-10 dark:from-indigo-300 dark:to-blue-300">
        <Image
          src="/project/Aura/Capture_1.png"
          width={width}
          height={height}
          className="size-full rounded-md drop-shadow-md"
          alt="Aura"
          unoptimized
        />
      </div>
    ),
    className:
      "row-start-4 row-end-5 col-start-1 col-end-2 xl:row-start-2 xl:row-end-3 xl:col-start-2 xl:col-end-3",
    skills: [
      "react_ts",
      "typescript",
      "_shadcn_ui",
      "tailwindcss",
      "next",
      "vercel",
    ],
    capture: 4,
    bgGradientLight: "from-indigo-100 to-blue-100",
    bgGradientDark: "dark:from-indigo-300 dark:to-blue-300",
    gitHubUrl: "https://github.com/baptistelechat/aura",
    website: "https://aura-studio.vercel.app/image-generator",
  },
  {
    Icon: Sismo,
    name: "Sismo",
    description:
      "Un outil pour obtenir les zones de neige, de vent et de sismicité en France (incluant DROM-COM).",
    cta: "En savoir plus",
    background: (
      <div className="flex size-full transform-gpu items-center justify-center overflow-hidden bg-gradient-to-bl from-indigo-100 to-fuchsia-100 p-4 transition-all duration-300 group-hover:-translate-y-10 dark:from-indigo-300 dark:to-fuchsia-300">
        <Image
          src="/project/Sismo/Capture_1.png"
          width={width}
          height={height}
          className="size-full rounded-md drop-shadow-md"
          alt="sismo"
          unoptimized
        />
      </div>
    ),
    className:
      "row-start-5 row-end-6 col-start-1 col-end-2 xl:row-start-2 xl:row-end-3 xl:col-start-3 xl:col-end-4",
    skills: [
      "react",
      "javascript",
      "material_ui",
      "nodejs",
      "firebase",
      "vercel",
    ],
    capture: 4,
    bgGradientLight: "from-indigo-100 to-fuchsia-100",
    bgGradientDark: "dark:from-indigo-300 dark:to-fuchsia-300",
    gitHubUrl: "https://github.com/baptistelechat/Sismo",
    website: "https://sismo.vercel.app/",
  },
  {
    Icon: CodeX,
    name: "CodeX",
    description:
      "Une extension VSCode pour accéder à la documentation directement depuis l'IDE",
    cta: "En savoir plus",
    background: (
      <div className="flex size-full transform-gpu items-center justify-center overflow-hidden bg-gradient-to-bl from-yellow-100 to-red-100 p-4 transition-all duration-300 group-hover:-translate-y-10 dark:from-yellow-300 dark:to-red-300">
        <Image
          src="/project/CodeX/Capture_2.png"
          width={width}
          height={height}
          className="size-full rounded-md drop-shadow-md"
          alt="CodeX"
          unoptimized
        />
      </div>
    ),
    className:
      "row-start-6 row-end-7 col-start-1 col-end-2 xl:row-start-2 xl:row-end-3 xl:col-start-4 xl:col-end-5",
    skills: ["vscode", "typescript", "tailwindcss", "lucide"],
    capture: 4,
    bgGradientLight: "from-yellow-100 to-red-100",
    bgGradientDark: "dark:from-yellow-300 dark:to-red-300",
    gitHubUrl: "https://github.com/baptistelechat/codeX",
    website:
      "https://marketplace.visualstudio.com/items?itemName=baptistelechat.codex-extension",
  },
  {
    Icon: PyRevitWithVSCode,
    name: "pyRevit With VSCode",
    description:
      "Une extension VS Code pour simplifier la création de plug-ins Revit en utilisant pyRevit.",
    cta: "En savoir plus",
    background: (
      <div className="flex size-full transform-gpu items-center justify-center overflow-hidden bg-gradient-to-bl from-amber-100 to-sky-100 p-4 transition-all duration-300 group-hover:-translate-y-10 dark:from-amber-300 dark:to-sky-300">
        <Image
          src="/project/pyRevit With VSCode/Capture_1.png"
          width={width}
          height={height}
          className="size-full rounded-md drop-shadow-md"
          alt="pyRevitWithVSCode"
          unoptimized
        />
      </div>
    ),
    className:
      "row-start-7 row-end-8 col-start-1 col-end-2 xl:row-start-3 xl:row-end-4 xl:col-start-1 xl:col-end-2",
    skills: ["vscode", "typescript", "python", "lucide", "_revit", "pyrevit"],
    capture: 3,
    bgGradientLight: "from-amber-100 to-sky-100",
    bgGradientDark: "dark:from-amber-300 dark:to-sky-300",
    gitHubUrl: "https://github.com/baptistelechat/pyrevit-with-vscode",
    website:
      "https://marketplace.visualstudio.com/items?itemName=baptistelechat.pyrevit-with-vscode",
  },
  {
    Icon: SpeedTestTracker,
    name: "SpeedTest Tracker",
    description:
      "Une application web pour surveiller la vitesse d'internet sur un réseau local.",
    cta: "En savoir plus",
    background: (
      <div className="flex size-full transform-gpu items-center justify-center overflow-hidden bg-gradient-to-bl from-rose-100 to-sky-100 p-4 transition-all duration-300 group-hover:-translate-y-10 dark:from-rose-300 dark:to-sky-300">
        <Image
          src="/project/SpeedTest Tracker/Capture_1.png"
          width={width}
          height={height}
          className="size-full rounded-md drop-shadow-md"
          alt="speedTestTracker"
          unoptimized
        />
      </div>
    ),
    className:
      "row-start-8 row-end-9 col-start-1 col-end-2 xl:row-start-3 xl:row-end-4 xl:col-start-2 xl:col-end-3",
    skills: [
      "react_ts",
      "typescript",
      "_shadcn_ui",
      "tailwindcss",
      "nodejs",
      "docker",
    ],
    capture: 4,
    bgGradientLight: "from-rose-100 to-sky-100",
    bgGradientDark: "dark:from-rose-300 dark:to-sky-300",
    gitHubUrl: "https://github.com/baptistelechat/Speedtest-tracker",
  },
];

export default projects;
