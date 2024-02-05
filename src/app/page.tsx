import LogoTile from "@/components/LogoTile";
import ModeToggle from "@/components/ModeToggle";

export default function Home() {
  return (
    <main>
      <ModeToggle />
      <div className="flex">
        <LogoTile title="Titre" description="Description" logo="react" />
        <LogoTile title="Titre" description="Description" logo="typescript" />
        <LogoTile title="Titre" description="Description" logo="next" />
        <LogoTile title="Titre" description="Description" logo="javascript" />
      </div>
    </main>
  );
}
