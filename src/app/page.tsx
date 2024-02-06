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
          title="Projet 1"
          description="Description"
          image="folder-dist"
        />
      </div>
      <div className="col-span-2 col-start-3 row-start-3 ">
        <ProjectTile
          title="Projet 2"
          description="Description"
          image="folder-packages"
        />
      </div>
      <div className="col-span-2 row-start-4 ">
        <ProjectTile
          title="Projet 3"
          description="Description"
          image="folder-layout"
        />
      </div>
      <div className="col-span-2 col-start-3 row-start-4 ">
        <ProjectTile
          title="Projet 4"
          description="Description"
          image="folder-app"
        />
      </div>
      <div className="row-start-5 ">13</div>
      <div className="row-start-5 ">14</div>
      <div className="row-start-5 ">15</div>
      <div className="row-start-5 ">16</div>
      <div className="col-span-4 row-start-6 ">17</div>
    </main>
  );
}
