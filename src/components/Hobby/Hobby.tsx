import { promises as fs } from "fs";
import path from "path";
import { Card } from "../ui/card";
import HobbyImage from "./HobbyImage";

interface IHobbyProps {
  index: number;
}

const Hobby = async (props: IHobbyProps) => {
  const imageDirectory = path.join(
    process.cwd(),
    `/public/img/hobbies/thumbnails/${props.index}`
  );
  const imageFilenames = await fs.readdir(imageDirectory);
  const randomImageIndex = Math.floor(Math.random() * imageFilenames.length);

  return (
    <Card className="relative h-full">
      <HobbyImage
        index={props.index}
        image={imageFilenames[randomImageIndex]}
      />
    </Card>
  );
};

export default Hobby;
