"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLocalizedNavigation } from "@/hooks/useLocalizedNavigation";
import { type SupportedLocale } from "@/lib/utils/localization";
import * as Flags from "country-flag-icons/react/3x2";
import { useRouter } from "next/navigation";

const LOCALES = [
  { value: "fr" as SupportedLocale, label: "Français", code: "FR" },
  { value: "en" as SupportedLocale, label: "English", code: "GB" },
];

export default function LanguageSwitcher() {
  const router = useRouter();
  const { currentLocale, switchLocale } = useLocalizedNavigation();

  const handleLocaleChange = (newLocale: SupportedLocale) => {
    // Utiliser la fonction switchLocale du hook pour préserver le chemin
    const newPath = switchLocale(newLocale);
    router.push(newPath);
  };

  // Find current locale in the list
  const currentLocaleData =
    LOCALES.find((l) => l.value === currentLocale) || LOCALES[0];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="flex items-center p-0">
          <div className="size-6 overflow-hidden rounded-sm">
            {currentLocaleData.code === "FR" && <Flags.FR className="size-full" />}
            {currentLocaleData.code === "GB" && <Flags.GB className="size-full" />}
          </div>
          {/* <span className="hidden sm:inline">{currentLocaleData.label}</span> */}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {LOCALES.map((item) => (
          <DropdownMenuItem
            key={item.value}
            onClick={() => handleLocaleChange(item.value)}
            className={`flex items-center gap-2 ${
              item.value === currentLocale ? "bg-accent" : ""
            }`}
          >
            <div className="size-6 overflow-hidden rounded-sm">
              {item.code === "FR" && <Flags.FR className="size-full" />}
              {item.code === "GB" && <Flags.GB className="size-full" />}
            </div>
            {item.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
