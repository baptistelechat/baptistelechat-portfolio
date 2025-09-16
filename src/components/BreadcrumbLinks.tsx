"use client";

import { useScopedI18n } from "@/i18n/client";
import { ArrowLeft, Home } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";

const BreadcrumbLinks = () => {
  const t = useScopedI18n("ui");
  const pathname = usePathname();

  return (
    <div className="mb-8 flex items-center justify-between">
      <Button variant={"ghost"} disabled={pathname.endsWith("/articles")}>
        <Link
          href="/articles"
          className="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="size-4" />
          {t("back_to_articles")}
        </Link>
      </Button>
      <Button variant={"ghost"}>
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
        >
          <Home className="size-4" />
          {t("back_to_home")}
        </Link>
      </Button>
    </div>
  );
};

export default BreadcrumbLinks;
