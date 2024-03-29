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
  pattern: string;
  logo?: string;
  emoji?: string;
  stack1: string[];
  stack2?: string[];
  stack3?: string[];
}

const ProjectTile = (props: IProjectTileProps) => {
  const imgSize = 150;

  return (
    <Card
      className={`relative ${props.pattern}`}
      style={{ height: imgSize * 1.7 }}
    >
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
        <div
          className={`absolute left-8 ${
            props.emoji ? "bottom-6" : "top-2"
          } h-full w-1/2`}
        >
          <div className="absolute bottom-0 left-0 -rotate-6 animate-pulse-slow blur-xl">
            {props.emoji ? (
              <p className="text-9xl">{props.emoji}</p>
            ) : (
              <Image
                src={`/project/${props.logo}/icon.png`}
                alt={`${props.logo} Logo`}
                width={imgSize + 50}
                height={imgSize + 50}
              />
            )}
          </div>
          <div
            className={`absolute -rotate-6 transition-transform duration-300 ease-in-out hover:-rotate-12 hover:scale-105`}
            style={{
              bottom: props.emoji
                ? "16px"
                : `${(imgSize + 50 - imgSize) / 2}px`,
              left: props.emoji ? "24px" : `${(imgSize + 50 - imgSize) / 2}px`,
            }}
          >
            {props.emoji ? (
              <p className="text-8xl">{props.emoji}</p>
            ) : (
              <Image
                src={`/project/${props.logo}/icon.png`}
                alt={`${props.logo} Logo`}
                width={imgSize}
                height={imgSize}
              />
            )}
          </div>
        </div>
        <div
          className="mt-6 flex w-fit gap-4"
          style={{
            transform: `translateX(${imgSize + 60}px)`,
          }}
        >
          <div className="flex flex-col gap-2">
            {props.stack1.map((technology) => (
              <div key={technology} className="flex gap-2">
                <Image
                  src={
                    technology.endsWith("_")
                      ? `/icons/${technology}.png`
                      : `/icons/${technology}.svg`
                  }
                  alt={`${technology} Logo`}
                  width={24}
                  height={24}
                />
                <p>{`${technology[0].toUpperCase()}${technology
                  .slice(1)
                  .replaceAll("_", " ")}`}</p>
              </div>
            ))}
          </div>
          {props.stack2 ? (
            <div className="flex flex-col gap-2">
              {props.stack2.map((technology) => (
                <div key={technology} className="flex gap-2">
                  <Image
                    src={
                      technology.endsWith("_")
                        ? `/icons/${technology}.png`
                        : `/icons/${technology}.svg`
                    }
                    alt={`${technology} Logo`}
                    width={24}
                    height={24}
                  />
                  <p>{`${technology[0].toUpperCase()}${technology
                    .slice(1)
                    .replaceAll("_", " ")}`}</p>
                </div>
              ))}
            </div>
          ) : (
            <></>
          )}
          {props.stack3 ? (
            <div className="flex flex-col gap-2">
              {props.stack3.map((technology) => (
                <div key={technology} className="flex gap-2">
                  <Image
                    src={
                      technology.endsWith("_")
                        ? `/icons/${technology}.png`
                        : `/icons/${technology}.svg`
                    }
                    alt={`${technology} Logo`}
                    width={24}
                    height={24}
                  />
                  <p>{`${technology[0].toUpperCase()}${technology
                    .slice(1)
                    .replaceAll("_", " ")}`}</p>
                </div>
              ))}
            </div>
          ) : (
            <></>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectTile;
