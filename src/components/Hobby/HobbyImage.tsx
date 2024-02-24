"use client";

import Image from "next/image";
import { useState } from "react";

interface IHobbyImageProps {
  index:number;
  image: string;
}

const HobbyImage = (props: IHobbyImageProps) => {
  const [isHovered, setIsHovered] = useState(false);

  if (isHovered) {
    return (
      <Image
        src={`/img/hobbies/gif/${props.index}.gif`}
        className="rounded-3xl object-cover brightness-50"
        fill
        alt="Gif"
        onMouseLeave={() => setIsHovered(false)}
      />
    );
  }

  return (
    <Image
      src={`/img/hobbies/thumbnails/${props.index}/${props.image}`}
      className="rounded-3xl object-cover brightness-50"
      fill
      alt="Gif"
      onMouseEnter={() => setIsHovered(true)}
    />
  );
};

export default HobbyImage;
