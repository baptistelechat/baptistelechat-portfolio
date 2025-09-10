import BreadcrumbLinks from "@/components/BreadcrumbLinks";
import { getArticleBySlug, getArticles } from "@/lib/utils/articles";
import { ArrowLeft, Calendar, Clock, Home } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Components } from "react-markdown";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

interface ArticlePageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const articles = await getArticles();
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const article = await getArticleBySlug(params.slug);

  if (!article) {
    return {
      title: "Article non trouvé",
    };
  }

  return {
    title: `${article.title} | Baptiste LECHAT`,
    description: article.excerpt,
    keywords: article.tags,
    authors: [{ name: "Baptiste LECHAT" }],
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article",
      locale: "fr_FR",
      publishedTime: article.date,
      authors: ["Baptiste LECHAT"],
      tags: article.tags,
      images: article.coverImage
        ? [
            {
              url: article.coverImage,
              width: 1200,
              height: 630,
              alt: article.title,
            },
          ]
        : [],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.excerpt,
      images: article.coverImage ? [article.coverImage] : [],
    },
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const article = await getArticleBySlug(params.slug);

  if (!article) {
    notFound();
  }

  return (
    <div className="container mx-auto max-w-4xl px-4 py-8">
      {/* Navigation */}
      <BreadcrumbLinks />

      {/* Header */}
      <header className="mb-8">
        {article.coverImage && (
          <div className="relative mb-6 h-64 w-full overflow-hidden rounded-lg md:h-80">
            <Image
              src={article.coverImage}
              alt={article.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        <h1 className="mb-4 text-4xl font-bold md:text-5xl">{article.title}</h1>

        <div className="mb-4 flex items-center gap-4 text-muted-foreground">
          <div className="flex items-center gap-2">
            <Calendar className="size-4" />
            <span>
              {new Date(article.date).toLocaleDateString("fr-FR", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="size-4" />
            <span>{article.readingTime} min de lecture</span>
          </div>
        </div>

        <p className="text-xl leading-relaxed text-muted-foreground">
          {article.excerpt}
        </p>
      </header>

      {/* Content */}
      <article className="prose prose-lg dark:prose-invert max-w-none">
        <ReactMarkdown
          components={
            {
              code({ className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || "");
                const isInline = !match;
                return isInline ? (
                  <code className={className} {...props}>
                    {children}
                  </code>
                ) : (
                  <SyntaxHighlighter
                    style={oneDark as any}
                    language={match[1]}
                    PreTag="div"
                  >
                    {String(children).replace(/\n$/, "")}
                  </SyntaxHighlighter>
                );
              },
            } as Components
          }
        >
          {article.content}
        </ReactMarkdown>
      </article>
    </div>
  );
}
