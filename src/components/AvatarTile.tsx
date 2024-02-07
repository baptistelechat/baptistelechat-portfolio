import Image from "next/image";
import SocialButton from "./SocialButton";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

interface IAvatarTileProps {
  fullName: string;
  description: string;
  avatar: string;
}

const AvatarTile = (props: IAvatarTileProps) => {
  const imgSize = 300;

  return (
    <Card className="relative h-full">
      <CardHeader>
        <CardTitle>{props.fullName}</CardTitle>
        <CardDescription>{props.description}</CardDescription>
        <div className="absolute right-6 top-6 size-9 rotate-6 animate-hello text-4xl">
          🖐🏽
        </div>
      </CardHeader>
      <CardContent>
        <div className="absolute left-12 top-24 h-full w-1/2">
          <div
            className="absolute left-0 top-4 animate-pulse-very-slow rounded-full bg-sky-700 blur-xl"
            style={{
              height: imgSize,
              width: imgSize,
            }}
          />
          <Image
            src={`/${props.avatar}.svg`}
            alt={`avatar`}
            width={imgSize}
            height={imgSize}
            className="absolute left-0 top-0 object-fill transition-transform  duration-300 ease-in-out hover:scale-105"
          />
        </div>
        <div className="absolute bottom-8 flex gap-4">
          <SocialButton />
        </div>
      </CardContent>
    </Card>
  );
};

export default AvatarTile;
