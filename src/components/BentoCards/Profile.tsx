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
    href: "/",
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
          width={200}
          height={200}
          className="relative mb-2 ml-4 mt-4 drop-shadow-md"
        />
      </>
    ),
    className: "lg:row-start-1 lg:row-end-2 lg:col-start-1 lg:col-end-3",
  };
};

export default Profile;