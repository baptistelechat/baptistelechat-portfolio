"use client";

import { useLocalizedNavigation } from "@/hooks/useLocalizedNavigation";
import { useScopedI18n } from "@/i18n/client";
import { ArrowLeft, Home } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

const BreadcrumbLinks = () => {
  const t = useScopedI18n("ui");
  const { getLocalizedPath, isCurrentPage } = useLocalizedNavigation();

  // Vérifier si on est sur la page articles (pas sur un article spécifique)
  const isOnArticlesPage = isCurrentPage("articles");
  // Vérifier si on est sur la page d'accueil
  const isOnHomePage = isCurrentPage("/");

  return (
    <div className="mb-8 flex items-center justify-between">
      <Button variant={"ghost"} disabled={isOnArticlesPage}>
        <Link
          href={getLocalizedPath("articles")}
          className={`inline-flex items-center gap-2 transition-colors ${
            isOnArticlesPage
              ? "cursor-not-allowed text-muted-foreground"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          <ArrowLeft className="size-4" />
          {t("back_to_articles")}
        </Link>
      </Button>
      <Button variant={"ghost"} disabled={isOnHomePage}>
        <Link
          href={getLocalizedPath("/")}
          className={`inline-flex items-center gap-2 transition-colors ${
            isOnHomePage
              ? "cursor-not-allowed text-muted-foreground"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          <Home className="size-4" />
          {t("back_to_home")}
        </Link>
      </Button>
    </div>
  );
};

export default BreadcrumbLinks;
