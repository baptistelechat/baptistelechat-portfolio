import Image from "next/image";
import ViewMoreButton from "./ViewMoreButton";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

interface IProjectTileProps {
  title: string;
  description: string;
  image:string
}

const ProjectTile = (props: IProjectTileProps) => {
  return (
    <Card className="relative h-[250px]">
      <CardHeader>
        <CardTitle>{props.title}</CardTitle>
        <CardDescription>{props.description}</CardDescription>
        <ViewMoreButton
          icon="GanttChart"
          tooltip="En savoir plus ..."
          style="absolute right-4 top-4"
        />
      </CardHeader>
      <CardContent>
        <div className="relative ml-4">
          <Image
            src={`/icons/${props.image}.svg`}
            alt={`${props.image} Logo`}
            width={200}
            height={200}
            className="absolute left-0 top-[-25px] -rotate-6 animate-pulse-slow blur-xl brightness-50"
          />
          <Image
            src={`/icons/${props.image}.svg`}
            alt={`${props.image} Logo`}
            width={150}
            height={150}
            className="absolute left-[25px] top-0 -rotate-6 transition-transform duration-300 ease-in-out hover:-rotate-12 hover:scale-105"
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectTile;
