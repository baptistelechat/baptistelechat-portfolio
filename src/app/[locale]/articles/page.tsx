import BreadcrumbLinks from "@/components/BreadcrumbLinks";
import {
  BentoCard,
  BentoGrid,
} from "@/components/magicui/bento-grid/bento-grid";
import { Badge } from "@/components/ui/badge";
import { getI18n, setStaticParamsLocale } from "@/i18n/server";
import { getArticles, Article } from "@/lib/utils/articles";
import { Book, Calendar, Clock, Newspaper } from "lucide-react";
import Image from "next/image";
import { Metadata } from "next";

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  setStaticParamsLocale(params.locale);
  const t = await getI18n();
  
  return {
    title: t("articles.articles_blog"),
    description: t("articles.articles_page_description"),
  };
}

export async function generateStaticParams() {
  const locales = ['fr', 'en'];
  return locales.map((locale) => ({
    locale,
  }));
}

export default async function ArticlesPage({ params }: { params: { locale: string } }) {
  setStaticParamsLocale(params.locale);
  const t = await getI18n();
  const articles = await getArticles(params.locale);

  return (
    <div className="max-w-screen-xl">
      <BreadcrumbLinks />
      <div className="mb-8 flex flex-col gap-2">
        <div className="flex items-center gap-4">
          <Newspaper className="size-8" />
          <h1 className="text-4xl font-bold">{t("articles.articles_blog")}</h1>
        </div>
        <p className="text-lg text-muted-foreground">
          {t("articles.articles_page_description")}
        </p>
      </div>

      <BentoGrid className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {articles.map((article) => (
        <BentoCard
          key={article.slug}
          name={article.title}
          description={article.excerpt}
          Icon={Book}
          cta={t("ui.read_article")}
          href={`/articles/${article.slug}`}
          background={
            <div>
              {article.coverImage ? (
                <div className="flex h-40 w-full transform-gpu items-center justify-center overflow-hidden md:h-52">
                  <Image
                    src={article.coverImage}
                    alt={article.title}
                    fill
                    className="object-cover opacity-20"
                  />
                </div>
              ) : (
                <div className="flex h-40 w-full transform-gpu items-center justify-center overflow-hidden bg-gradient-to-bl from-sky-100 to-violet-100 p-4 dark:from-sky-300 dark:to-violet-300 md:h-52">
                  {/* <div className="text-6xl opacity-50">📰</div> */}
                  <Newspaper className="size-20 text-gray-600" />
                </div>
              )}
              <div className="flex items-center gap-2 px-6 py-4 text-xs text-muted-foreground">
                <Calendar className="size-3" />
                <span>
                  {new Date(article.date).toLocaleDateString("fr-FR")}
                </span>
                <Clock className="ml-2 size-3" />
                <span>{article.readingTime} {t("ui.min_read")}</span>
              </div>
              {/* Tags */}
              {article.tags && article.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 pl-6">
                  {article.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              )}
            </div>
          }
          className=""
          />
        ))}
      </BentoGrid>

      {articles.length === 0 && (
        <div className="py-12 text-center">
          <p className="text-lg text-muted-foreground">
            {t("articles.no_articles_yet")}
          </p>
        </div>
      )}
    </div>
  );
}
