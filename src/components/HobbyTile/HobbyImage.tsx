import { promises as fs } from "fs";
import Image from "next/image";
import path from "path";

interface IHobbyImageProps {
  index: number;
}

const HobbyImage = async (props: IHobbyImageProps) => {
  const imageDirectory = path.join(
    process.cwd(),
    `/public/img/hobbies/thumbnails/${props.index}`
  );
  const imageFilenames = await fs.readdir(imageDirectory);
  const randomImageIndex = Math.floor(Math.random() * imageFilenames.length);

  return (
    <Image
      src={`/img/hobbies/thumbnails/${props.index}/${imageFilenames[randomImageIndex]}`}
      className="rounded-3xl object-cover brightness-50"
      fill
      alt="Gif"
    />
  );
};

export default HobbyImage;
