"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

const ModeToggle = () => {
  const { setTheme, theme } = useTheme();

  const handleClick = () => {
    if (theme === "light") {
      setTheme("dark");
    }

    if (theme === "dark") {
      setTheme("light");
    }
  };

  return (
    <Button variant="outline" size="icon" onClick={handleClick}>
      <Sun className="size-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute size-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    </Button>
  );
};

export default ModeToggle;
