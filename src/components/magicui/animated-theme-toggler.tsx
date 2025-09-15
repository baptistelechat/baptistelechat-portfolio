"use client";

import { cn } from "@/lib/utils";
import { Variants } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useRef, useState } from "react";
import { flushSync } from "react-dom";
import { MotionButton } from "../ui/button";

type Props = {
  className?: string;
};

const ThemeToggleVariants: Variants = {
  hidden: { x: 50, opacity: 0 },
  visible: { x: 0, opacity: 1 },
};

export const AnimatedThemeToggler = ({ className }: Props) => {
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const changeTheme = async () => {
    if (!buttonRef.current) return;

    const doc = document as any; // 🔑 cast to bypass TS

    if (doc.startViewTransition) {
      await doc.startViewTransition(() => {
        flushSync(() => {
          setTheme(theme === "dark" ? "light" : "dark");
        });
      }).ready;
    } else {
      // classic fallback if browser doesn't support the API
      flushSync(() => {
        setTheme(theme === "dark" ? "light" : "dark");
      });
    }

    const { top, left, width, height } =
      buttonRef.current.getBoundingClientRect();
    const y = top + height / 2;
    const x = left + width / 2;

    const right = window.innerWidth - left;
    const bottom = window.innerHeight - top;
    const maxRad = Math.hypot(Math.max(left, right), Math.max(top, bottom));

    document.documentElement.animate(
      {
        clipPath: [
          `circle(0px at ${x}px ${y}px)`,
          `circle(${maxRad}px at ${x}px ${y}px)`,
        ],
      },
      {
        duration: 700,
        easing: "ease-in-out",
        pseudoElement: "::view-transition-new(root)",
      }
    );
  };

  if (!mounted) return null; // 🔑 avoid hydration error

  return (
    <MotionButton
      ref={buttonRef}
      onClick={changeTheme}
      className={cn(className)}
      variant="outline"
      size="icon"
      variants={ThemeToggleVariants}
      initial="hidden"
      animate="visible"
    >
      {theme === "dark" ? <Sun /> : <Moon />}
      <span className="sr-only">Toggle theme</span>
    </MotionButton>
  );
};
