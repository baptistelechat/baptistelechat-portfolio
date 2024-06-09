import projects from "@/lib/constants/projects";
import { ArrowRightIcon, Laptop, Github } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

const ProjectDialog = ({ name }: { name: string }) => {
  const {
    cta,
    description,
    skills,
    capture,
    bgGradientLight,
    bgGradientDark,
    gitHubUrl,
    website,
  } = projects.filter((project) => project.name === name)[0];

  const ratio = 1600 / 900;
  const imgSize = 250;
  const height = imgSize;
  const width = imgSize * ratio;

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          asChild
          size="sm"
          className="pointer-events-auto mt-2 w-fit bg-card hover:cursor-pointer"
        >
          <a>
            {cta}
            <ArrowRightIcon className="ml-2 size-4" />
          </a>
        </Button>
      </DialogTrigger>
      <DialogContent className="flex size-full flex-col items-start justify-start sm:h-fit sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle>{name}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <div className="flex size-full flex-col gap-4 px-8">
          <div className="grid grid-cols-2 gap-2">
            {skills?.map((skill) => {
              const title = () => {
                if (skill.startsWith("_")) {
                  const newSkill = skill[1];
                  return `${newSkill[0].toUpperCase()}${skill
                    .slice(2)
                    .replaceAll("_", " ")}`;
                } else {
                  return `${skill[0].toUpperCase()}${skill
                    .slice(1)
                    .replaceAll("_", " ")}`;
                }
              };

              return (
                <div key={skill} className="flex items-center gap-2">
                  <Image
                    src={
                      skill.startsWith("_")
                        ? `/icons/${skill}.png`
                        : `/icons/${skill}.svg`
                    }
                    alt={skill}
                    width={30}
                    height={30}
                  />
                  <p className="text-sm">{title()}</p>
                </div>
              );
            })}
          </div>

          <Carousel>
            <CarouselContent>
              {Array.from({ length: capture }).map((_, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <Card>
                      <CardContent
                        className={`flex items-center justify-center rounded-md bg-gradient-to-bl ${bgGradientLight} p-6 ${bgGradientDark}`}
                      >
                        <Image
                          src={`/project/${name}/Capture_${index + 1}.png`}
                          alt={`Capture ${index + 1} - ${name}`}
                          width={width}
                          height={height}
                          className="rounded-md drop-shadow-md"
                          unoptimized
                        />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
        <DialogFooter className="flex w-full justify-end gap-2">
          <Button
            variant="ghost"
            size="sm"
            className="pointer-events-auto w-fit bg-card hover:cursor-pointer"
            onClick={() => window.open(gitHubUrl, "_blank")}
          >
            <Github className="mr-2 size-6" />
            GitHub
          </Button>
          {website && (
            <Button
              variant="ghost"
              size="sm"
              className="pointer-events-auto w-fit bg-card hover:cursor-pointer"
              onClick={() => window.open(website, "_blank")}
            >
              <Laptop className="mr-2 size-6" />
              Site officiel
            </Button>
          )}
          <DialogClose asChild>
            <Button
              variant="ghost"
              size="sm"
              className="pointer-events-auto w-fit bg-card hover:cursor-pointer"
            >
              Fermer
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectDialog;
