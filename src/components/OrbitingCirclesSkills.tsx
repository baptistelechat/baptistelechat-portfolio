/* eslint-disable tailwindcss/no-custom-classname */
"use client"
import Image from "next/image";
import OrbitingCircles from "./magic-ui/orbiting-circles";
import { useTheme } from "next-themes";

const OrbitingCirclesSkills = () => {
  const {theme} = useTheme();
  const imgSize = 50;

  return (
    <div className="absolute flex h-80 w-full items-center justify-center overflow-hidden">
      {/* Inner Circles */}
      <OrbitingCircles
        className={`size-[${imgSize}px] border-none bg-transparent`}
        duration={20}
        delay={20}
        radius={70}
      >
        <Image
          src="/icons/react_ts.svg"
          alt="react_ts"
          width={imgSize}
          height={imgSize}
        />
      </OrbitingCircles>
      <OrbitingCircles
        className={`size-[${imgSize}px] border-none bg-transparent`}
        duration={20}
        delay={10}
        radius={70}
      >
        {theme === "dark" ? (
          <Image
            src="/icons/next.svg"
            alt="next"
            width={imgSize}
            height={imgSize}
          />
        ) : (
          <Image
            src="/icons/next_light.svg"
            alt="next"
            width={imgSize}
            height={imgSize}
          />
        )}
      </OrbitingCircles>

      {/* Outer Circles (reverse) */}
      <OrbitingCircles
        className={`size-[${imgSize}px] border-none bg-transparent`}
        reverse
        duration={20}
        delay={20}
        radius={140}
      >
        <Image
          src="/icons/typescript.svg"
          alt="typescript"
          width={imgSize}
          height={imgSize}
        />
      </OrbitingCircles>
      <OrbitingCircles
        className={`size-[${imgSize}px] border-none bg-transparent`}
        reverse
        duration={20}
        delay={10}
        radius={140}
      >
        <Image
          src="/icons/tailwindcss.svg"
          alt="tailwindcss"
          width={imgSize}
          height={imgSize}
        />
      </OrbitingCircles>
      {/* Outer Circles */}
      <OrbitingCircles
        className={`size-[${imgSize}px] border-none bg-transparent`}
        duration={25}
        delay={20}
        radius={200}
      >
        <Image
          src="/icons/python.svg"
          alt="python"
          width={imgSize}
          height={imgSize}
        />
      </OrbitingCircles>
      <OrbitingCircles
        className={`size-[${imgSize}px] border-none bg-transparent`}
        duration={25}
        delay={10}
        radius={200}
      >
        <Image
          src="/icons/_postgresql.png"
          alt="postgresql"
          width={imgSize}
          height={imgSize}
        />
      </OrbitingCircles>
    </div>
  );
};

export default OrbitingCirclesSkills;
