"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import * as Flags from "country-flag-icons/react/3x2";
import { usePathname, useRouter } from "next/navigation";

const LOCALES = [
  { value: "fr", label: "Français", code: "FR" },
  { value: "en", label: "English", code: "GB" },
];

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  // Extraire la locale actuelle du pathname
  const currentLocaleFromPath = pathname.split("/")[1];

  const handleLocaleChange = (newLocale: string) => {
    // Récupérer le chemin actuel sans le préfixe de locale
    const pathWithoutLocale = pathname.replace(/^\/(fr|en)/, "");

    // Construire le nouveau chemin avec le nouveau locale
    const newPath = `/${newLocale}${pathWithoutLocale}`;

    // Rediriger vers le nouveau chemin
    router.push(newPath);
  };

  // Trouver le locale actuel dans la liste
  const currentLocale =
    LOCALES.find((l) => l.value === currentLocaleFromPath) || LOCALES[0];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="flex items-center p-0">
          <div className="size-6 overflow-hidden rounded-sm">
            {currentLocale.code === "FR" && <Flags.FR className="size-full" />}
            {currentLocale.code === "GB" && <Flags.GB className="size-full" />}
          </div>
          {/* <span className="hidden sm:inline">{currentLocale.label}</span> */}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {LOCALES.map((item) => (
          <DropdownMenuItem
            key={item.value}
            onClick={() => handleLocaleChange(item.value)}
            className="flex items-center gap-2"
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
