import {
  BentoCard,
  BentoGrid,
} from "@/components/magicui/bento-grid/bento-grid";
import { getArticles } from "@/lib/utils/articles";
import { Calendar, Clock } from "lucide-react";
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
      <div className="mb-8">
        <h1 className="mb-4 text-4xl font-bold">Articles & Blog</h1>
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
            Icon={Calendar}
            cta="Lire l'article"
            href={`/articles/${article.slug}`}
            background={
              <div className="absolute inset-0">
                {article.coverImage ? (
                  <Image
                    src={article.coverImage}
                    alt={article.title}
                    fill
                    className="object-cover opacity-20"
                  />
                ) : (
                  <div className="size-full bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-950/20 dark:to-indigo-900/20" />
                )}
                <div className="absolute inset-0 bg-black/10 dark:bg-black/20" />
                <div className="absolute bottom-4 left-4 flex items-center gap-2 text-xs text-muted-foreground">
                  <Calendar className="size-3" />
                  <span>
                    {new Date(article.date).toLocaleDateString("fr-FR")}
                  </span>
                  <Clock className="ml-2 size-3" />
                  <span>{article.readingTime} min</span>
                </div>
              </div>
            }
            className="min-h-[300px] transition-transform duration-200 hover:scale-[1.02]"
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
