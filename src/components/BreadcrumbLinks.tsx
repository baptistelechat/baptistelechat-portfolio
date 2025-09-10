"use client";

import { ArrowLeft, Home } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";

const BreadcrumbLinks = () => {
  const pathname = usePathname();

  return (
    <div className="mb-8 flex items-center justify-between">
      {pathname !== "/articles" && (
        <Button variant={"ghost"}>
          <Link
            href="/articles"
            className="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="size-4" />
            Retour aux articles
          </Link>
        </Button>
      )}
      <Button variant={"ghost"}>
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
        >
          <Home className="size-4" />
          Retour à l&apos;accueil
        </Link>
      </Button>
    </div>
  );
};

export default BreadcrumbLinks;
