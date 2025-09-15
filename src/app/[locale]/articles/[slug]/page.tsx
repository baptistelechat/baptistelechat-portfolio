import BreadcrumbLinks from "@/components/BreadcrumbLinks";
import TableOfContents from "@/components/TableOfContents";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ImageZoom } from "@/components/ui/kibo-ui/image-zoom";
import { useI18n } from "@/i18n/client";
import { getArticleBySlug, getArticles } from "@/lib/utils/articles";
import { Book, Calendar, Clock } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Components } from "react-markdown";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import remarkGfm from "remark-gfm";

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
  const t = useI18n();

  if (!article) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-screen-xl overflow-hidden">
      {/* Navigation */}
      <BreadcrumbLinks />
      <Card>
        <CardContent className="p-4 sm:p-6 lg:p-8">
          {/* Header */}
          <header className="my-4">
            {article.coverImage && (
              <ImageZoom zoomMargin={100}>
                <div className="relative mb-6 h-64 w-full max-w-full overflow-hidden rounded-lg md:h-80">
                  <Image
                    src={article.coverImage}
                    alt={article.title}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </ImageZoom>
            )}

            <h1 className="mb-4 flex items-center gap-2 text-4xl font-bold md:text-5xl">
              <Book className="size-16" /> {article.title}
            </h1>

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
                <span>{article.readingTime} {t("min_reading")}</span>
              </div>
            </div>

            {/* Tags */}
            {article.tags && article.tags.length > 0 && (
              <div className="my-4 flex flex-wrap gap-2">
                {article.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            )}

            <p className="text-xl leading-relaxed text-muted-foreground">
              {article.excerpt}
            </p>
          </header>

          {/* Table des matières */}
          <TableOfContents content={article.content} />

          {/* Content */}
          <article className="prose prose-lg w-full dark:prose-invert">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={
                {
                  h2({ children, ...props }) {
                    const text = String(children).trim();
                    const id = text
                      .toLowerCase()
                      .replace(/[^a-z0-9\s]/g, "")
                      .replace(/\s+/g, "-")
                      .replace(/^-+|-+$/g, "");
                    return (
                      <h2 id={id} {...props}>
                        {children}
                      </h2>
                    );
                  },
                  h3({ children, ...props }) {
                    const text = String(children).trim();
                    const id = text
                      .toLowerCase()
                      .replace(/[^a-z0-9\s]/g, "")
                      .replace(/\s+/g, "-")
                      .replace(/^-+|-+$/g, "");
                    return (
                      <h3 id={id} {...props}>
                        {children}
                      </h3>
                    );
                  },
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
                  img({ src, alt, title, ...props }) {
                    // Syntaxe: ![alt](src "title|width|height")
                    const [titleText, width, height] = (title || "").split("|");
                    const imageWidth = width ? parseInt(width) : 800;
                    const imageHeight = height ? parseInt(height) : 600;

                    return (
                      <Image
                        src={src || ""}
                        alt={alt || ""}
                        width={imageWidth}
                        height={imageHeight}
                        className="mx-auto rounded-lg shadow-md"
                        title={titleText || undefined}
                        priority={false}
                        unoptimized={false}
                      />
                    );
                  },
                } as Components
              }
            >
              {article.content}
            </ReactMarkdown>
          </article>
        </CardContent>
      </Card>
    </div>
  );
}
