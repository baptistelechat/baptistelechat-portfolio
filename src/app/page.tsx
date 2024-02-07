import AvatarTile from "@/components/AvatarTile";
import LogoTile from "@/components/LogoTile";
import ProjectTile from "@/components/ProjectTile";

export default function Home() {
  return (
    <main className="grid size-full grid-cols-4 grid-rows-6 gap-4 p-4">
      {/* <ModeToggle /> */}
      <div className="col-span-2 row-span-2 ">
        <AvatarTile
          fullName="Baptiste LECHAT"
          description="Dessinateur / Développeur / Responsable Réseau sociaux"
          avatar="avatar"
        />
      </div>
      <div className="col-start-3 row-start-1 ">
        <LogoTile
          title="React"
          description="Javascript Framework"
          logo="react"
        />
      </div>
      <div className="col-start-4 row-start-1 ">
        <LogoTile title="NextJS" description="React Framework" logo="next" />
      </div>
      <div className="col-start-3 row-start-2 ">
        <LogoTile
          title="TypeScript"
          description="Programming language"
          logo="typescript"
        />
      </div>
      <div className="col-start-4 row-start-2 ">
        <LogoTile
          title="NodeJS"
          description="JavaScript runtime"
          logo="nodejs"
        />
      </div>
      <div className="col-span-2 row-start-3 ">
        <ProjectTile
          title="Sismo"
          description="Un outil pour obtenir les zones de neige, de vent et de sismicité en France (incluant DROM-COM)."
          pattern="pattern-topography-indigo-800/50"
          logo="sismo"
        />
      </div>
      <div className="col-span-2 col-start-3 row-start-3 ">
        <ProjectTile
          title="SpeedTest Tracker"
          description="Une application web pour surveiller les données des tests de vitesse internet sur un réseau local."
          pattern="pattern-circuit-board-slate-700/50"
          emoji="🚀"
        />
      </div>
      <div className="col-span-2 row-start-4 ">
        <ProjectTile
          title="Swish"
          description="Un système d'automatisation de publication des résultats du basket français."
          pattern="pattern-tic-tac-toe-orange-800/50"
          emoji="🏀"
        />
      </div>
      <div className="col-span-2 col-start-3 row-start-4 ">
        <ProjectTile
          title="Social template (123 Structure)"
          description="Une application web pour générer des visuels pour le compte LinkedIn de la société : 123 Structure."
          pattern="pattern-wiggle-yellow-800/50"
          logo="123str"
        />
      </div>
      <div className="row-start-5 rounded-3xl bg-sky-900" />
      <div className="row-start-5 rounded-3xl bg-sky-900" />
      <div className="row-start-5 rounded-3xl bg-sky-900" />
      <div className="row-start-5 rounded-3xl bg-sky-900" />
      <div className="col-span-4 row-start-6 rounded-3xl bg-sky-900" />
    </main>
  );
}
