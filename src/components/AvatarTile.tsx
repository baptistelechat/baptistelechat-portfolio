import { Bot, Github, Linkedin, Mail, Twitter } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

interface IAvatarTileProps {
  fullName: string;
  description: string;
  avatar: string;
}

const AvatarTile = (props: IAvatarTileProps) => {
  return (
    <Card className="relative h-full">
      <CardHeader>
        <CardTitle>{props.fullName}</CardTitle>
        <CardDescription>{props.description}</CardDescription>
        <div className="absolute right-6 top-6 size-9 rotate-6 animate-hello text-4xl">
          🖐🏽
        </div>
      </CardHeader>
      <CardContent className="h-[325px]">
        <div className="relative ml-8 mt-8">
          <div className="absolute left-0 top-0 size-[300px] animate-pulse-very-slow rounded-full bg-sky-800 blur-xl " />
          <Image
            src={`/${props.avatar}.svg`}
            alt={`avatar`}
            width={290}
            height={290}
            className="absolute left-[5px] top-[5px] object-fill transition-transform  duration-300 ease-in-out hover:scale-105"
          />
        </div>
      </CardContent>
      <CardFooter className="flex gap-4">
        <Button>
          <Github className="mr-2 size-4" /> GitHub
        </Button>
        <Button>
          <Twitter className="mr-2 size-4" /> Twitter
        </Button>
        <Button>
          <Linkedin className="mr-2 size-4" /> LinkedIn
        </Button>
        <Button>
          <Bot className="mr-2 size-4" />
          Discord
        </Button>
        <Button>
          <Mail className="mr-2 size-4" /> Email
        </Button>
      </CardFooter>
    </Card>
  );
};

export default AvatarTile;
