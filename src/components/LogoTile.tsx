import Image from "next/image";
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
  return (
    <Card className="size-[250px]">
      <CardHeader>
        <CardTitle>{props.title}</CardTitle>
        <CardDescription>{props.description}</CardDescription>
      </CardHeader>
      <CardContent className="relative flex justify-center">
        <Image
          src={`/icons/${props.logo}.svg`}
          alt={`${props.logo} Logo`}
          width={150}
          height={150}
          className="absolute -rotate-6 animate-pulse-slow blur-xl brightness-50 hover:-rotate-12"
        />

        <Image
          src={`/icons/${props.logo}.svg`}
          alt={`${props.logo} Logo`}
          width={100}
          height={100}
          className="absolute left-[75px] top-[25px] -rotate-6 transition-transform duration-300 ease-in-out hover:-rotate-12"
        />
      </CardContent>
    </Card>
  );
};

export default LogoTile;
