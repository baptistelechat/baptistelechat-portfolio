import Image from "next/image";
import IProject from "../interfaces/IProject";
import { PyRevitWithVSCode, Sismo, SpeedTestTracker } from "./ProjectIcon";

const ratio = 1600 / 900;
const imgSize = 175;
const height = imgSize;
const width = imgSize * ratio;

const projects: IProject[] = [
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
      "row-start-3 row-end-4 col-start-1 col-end-2 sm:row-start-2 sm:row-end-3 sm:col-start-1 sm:col-end-2 lg:row-start-2 lg:row-end-3 lg:col-start-1 lg:col-end-2",
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
      "row-start-4 row-end-5 col-start-1 col-end-2 sm:row-start-2 sm:row-end-3 sm:col-start-2 sm:col-end-3 lg:row-start-2 lg:row-end-3 lg:col-start-2 lg:col-end-3",
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
      "row-start-5 row-end-6 col-start-1 col-end-2 sm:row-start-3 sm:row-end-4 sm:col-start-1 sm:col-end-2 lg:row-start-2 lg:row-end-3 lg:col-start-3 lg:col-end-4",
    skills: ["vscode", "typescript", "python", "lucide", "_revit", "pyrevit"],
    capture: 3,
    bgGradientLight: "from-amber-100 to-sky-100",
    bgGradientDark: "dark:from-amber-300 dark:to-sky-300",
    gitHubUrl: "https://github.com/baptistelechat/pyrevit-with-vscode",
    website:
      "https://marketplace.visualstudio.com/items?itemName=baptistelechat.pyrevit-with-vscode",
  },
];

export default projects;
