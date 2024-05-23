"use client";

import { AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import ViewMoreButton from "../ViewMoreButton";
import { Card } from "../ui/card";
import HobbyTitle from "./HobbyTitle";

interface IHobbyProps {
  index: number;
  title: string;
}

const HobbyTile = (props: IHobbyProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      className="relative h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image
        src={`/img/hobbies/thumbnails/${props.index}.gif`}
        className="rounded-3xl object-cover brightness-50"
        fill
        alt="Gif"
      />

      {isHovered && (
        <Image
          src={`/img/hobbies/gif/${props.index}.gif`}
          className="rounded-3xl object-cover brightness-50"
          fill
          alt="Gif"
        />
      )}
      <AnimatePresence mode="popLayout">
        {isHovered && (
          <>
            <HobbyTitle title={props.title} />
            <ViewMoreButton
              icon="GanttChart"
              tooltip="En savoir plus ..."
              style="absolute right-4 top-4"
            />
          </>
        )}
      </AnimatePresence>
    </Card>
  );
};

export default HobbyTile;
