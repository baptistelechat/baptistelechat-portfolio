import Image from "next/image";
import ViewMoreButton from "./ViewMoreButton";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

interface ILogoTileProps {
  title: string;
  description: string;
  logo: string;
}

const LogoTile = (props: ILogoTileProps) => {
  const imgSize = 150;

  return (
    <Card className="relative" style={{ height: imgSize * 1.7 }}>
      <CardHeader>
        <CardTitle>{props.title}</CardTitle>
        <CardDescription>{props.description}</CardDescription>
        <ViewMoreButton
          icon="Plus"
          tooltip="En voir plus ..."
          style="absolute right-4 top-4"
        />
      </CardHeader>
      <CardContent>
        <div className="absolute left-8 top-3 h-full w-1/2">
          <div className="absolute bottom-0 left-0 -rotate-6 animate-pulse-slow blur-xl brightness-50">
            <Image
              src={`/icons/${props.logo}.svg`}
              alt={`${props.logo} Logo`}
              width={imgSize + 50}
              height={imgSize + 50}
            />
          </div>
          <div
            className={`absolute -rotate-6 transition-transform duration-300 ease-in-out hover:-rotate-12 hover:scale-105`}
            style={{
              bottom: `${(imgSize + 50 - imgSize) / 2}px`,
              left: `${(imgSize + 50 - imgSize) / 2}px`,
            }}
          >
            <Image
              src={`/icons/${props.logo}.svg`}
              alt={`${props.logo} Logo`}
              width={imgSize}
              height={imgSize}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default LogoTile;
