import AnimatedGridPattern from "@/components/magic-ui/animated-grid-pattern";
import { UserIcon } from "lucide-react";
import Image from "next/image";
import BentoCardProps from "../../lib/interfaces/IBentoCardProps";
import { cn } from "../../lib/utils";

const Profile = (): BentoCardProps => {
  return {
    Icon: UserIcon,
    name: "Baptiste LECHAT",
    description: "word-rotate",
    cta: "social-dock",
    background: (
      <>
        <AnimatedGridPattern
          numSquares={30}
          maxOpacity={0.5}
          duration={3}
          repeatDelay={1}
          className={cn(
            "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]",
            "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12"
          )}
        />
        <Image
          src="/avatar/avatar_bg.png"
          alt="avatar"
          width={225}
          height={225}
          className="relative mb-2 ml-4 mt-4 drop-shadow-md"
        />
      </>
    ),
    className:
      "row-start-1 row-end-2 col-start-1 col-end-2 xl:row-start-1 xl:row-end-2 xl:col-start-1 xl:col-end-3",
  };
};

export default Profile;
