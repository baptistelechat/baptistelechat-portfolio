"use client";
import { cn } from "@/lib/utils";
import { UserIcon } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import { forwardRef, useRef } from "react";
import { AnimatedBeam } from "./magic-ui/animated-beam";

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 size-10 rounded-full bg-card flex items-center justify-center shadow-sm shadow-sky-400/50",
        className
      )}
    >
      {children}
    </div>
  );
});

Circle.displayName = "Circle";

const SkillsAnimatedBeam = () => {
  const { theme } = useTheme();

  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);
  const div7Ref = useRef<HTMLDivElement>(null);

  const imgSize = 25;

  return (
    <div
      className="relative flex w-full items-center justify-center overflow-hidden"
      ref={containerRef}
    >
      <div className="flex size-full flex-col items-stretch justify-between gap-10">
        <div className="flex flex-row items-center justify-between">
          <Circle ref={div1Ref}>
            <Image
              src="/icons/react_ts.svg"
              alt="react_ts"
              width={imgSize}
              height={imgSize}
            />
          </Circle>
          <Circle ref={div5Ref}>
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
          </Circle>
        </div>
        <div className="flex flex-row items-center justify-between">
          <Circle ref={div2Ref}>
            <Image
          src="/icons/typescript.svg"
          alt="typescript"
          width={imgSize}
          height={imgSize}
        />
          </Circle>
          <Circle ref={div4Ref} className="size-16">
            <UserIcon className="size-10 dark:text-neutral-300" />
          </Circle>
          <Circle ref={div6Ref}>
            <Image
          src="/icons/tailwindcss.svg"
          alt="tailwindcss"
          width={imgSize}
          height={imgSize}
        />
          </Circle>
        </div>
        <div className="flex flex-row items-center justify-between">
          <Circle ref={div3Ref}>
            <Image
          src="/icons/python.svg"
          alt="python"
          width={imgSize}
          height={imgSize}
        />
          </Circle>
          <Circle ref={div7Ref}>
            <Image
          src="/icons/_postgresql.png"
          alt="_postgresql"
          width={imgSize}
          height={imgSize}
        />
          </Circle>
        </div>
      </div>

      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div4Ref}
        curvature={-75}
        endYOffset={-10}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div2Ref}
        toRef={div4Ref}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div3Ref}
        toRef={div4Ref}
        curvature={75}
        endYOffset={10}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div5Ref}
        toRef={div4Ref}
        curvature={-75}
        reverse
        endYOffset={-10}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div6Ref}
        toRef={div4Ref}
        reverse
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div7Ref}
        toRef={div4Ref}
        curvature={75}
        reverse
        endYOffset={10}
      />
    </div>
  );
};

export default SkillsAnimatedBeam;
