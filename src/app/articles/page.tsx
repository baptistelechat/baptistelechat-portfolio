import BreadcrumbLinks from "@/components/BreadcrumbLinks";
import {
  BentoCard,
  BentoGrid,
} from "@/components/magicui/bento-grid/bento-grid";
import { getArticles } from "@/lib/utils/articles";
import { Book, Calendar, Clock, Newspaper, ToyBrick } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Articles | Baptiste LECHAT",
  description:
    "Découvrez mes retours d'expérience et réflexions techniques sur le développement web et l'ingénierie.",
  keywords: [
    "développement web",
    "Next.js",
    "React",
    "TypeScript",
    "IA",
    "TRAE",
    "portfolio",
    "blog",
    "ingénierie",
  ],
  authors: [{ name: "Baptiste LECHAT" }],
  openGraph: {
    title: "Articles | Baptiste LECHAT",
    description:
      "Découvrez mes retours d'expérience et réflexions techniques sur le développement web et l'ingénierie.",
    type: "website",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Articles | Baptiste LECHAT",
    description:
      "Découvrez mes retours d'expérience et réflexions techniques sur le développement web et l'ingénierie.",
  },
};

export default async function ArticlesPage() {
  const articles = await getArticles();

  return (
    <div className="container mx-auto max-w-6xl px-4 py-8">
      <BreadcrumbLinks />
      <div className="mb-8 flex flex-col gap-2">
        <div className="flex items-center gap-4">
          <Newspaper className="size-8" />
          <h1 className="text-4xl font-bold">Articles & Blog</h1>
        </div>
        <p className="text-lg text-muted-foreground">
          Retours d&apos;expérience, réflexions techniques et découvertes dans
          le monde du développement.
        </p>
      </div>

      <BentoGrid className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {articles.map((article) => (
          <BentoCard
            key={article.slug}
            name={article.title}
            description={article.excerpt}
            Icon={Book}
            cta="Lire l'article"
            href={`/articles/${article.slug}`}
            background={
              <div>
                {article.coverImage ? (
                  <div className="flex h-44 w-full transform-gpu items-center justify-center overflow-hidden">
                    <Image
                      src={article.coverImage}
                      alt={article.title}
                      fill
                      className="object-cover opacity-20"
                    />
                  </div>
                ) : (
                  <div className="flex h-44 w-full transform-gpu items-center justify-center overflow-hidden bg-gradient-to-bl from-sky-100 to-violet-100 p-4 dark:from-sky-300 dark:to-violet-300">
                    {/* <div className="text-6xl opacity-50">📰</div> */}
                    <ToyBrick className="size-20 text-gray-600" />
                  </div>
                )}
                <div className="flex items-center gap-2 p-6 text-xs text-muted-foreground">
                  <Calendar className="size-3" />
                  <span>
                    {new Date(article.date).toLocaleDateString("fr-FR")}
                  </span>
                  <Clock className="ml-2 size-3" />
                  <span>{article.readingTime} min</span>
                </div>
              </div>
            }
            className=""
          />
        ))}
      </BentoGrid>

      {articles.length === 0 && (
        <div className="py-12 text-center">
          <p className="text-lg text-muted-foreground">
            Aucun article publié pour le moment. Revenez bientôt ! 📝
          </p>
        </div>
      )}
    </div>
  );
}
