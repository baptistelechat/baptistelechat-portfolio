import { Article, ArticleMetadata } from "@/lib/interfaces/IArticle";
import fs from "fs";
import matter from "gray-matter";
import path from "path";

const articlesDirectory = path.join(process.cwd(), "content/articles");

// Fonction pour calculer le temps de lecture approximatif
function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
}

// Fonction pour adapter les chemins d'images relatives
function adaptImagePaths(coverImage: string | undefined, slug: string): string | undefined {
  if (!coverImage) return undefined;
  
  // Si l'image commence par "/", c'est déjà un chemin absolu
  if (coverImage.startsWith("/")) {
    return coverImage;
  }
  
  // Sinon, on considère que c'est un chemin relatif à adapter
  return `/articles/${slug}/${coverImage}`;
}

// Fonction pour obtenir tous les articles
export async function getArticles(): Promise<Article[]> {
  try {
    // Vérifier si le dossier existe
    if (!fs.existsSync(articlesDirectory)) {
      return [];
    }

    const entries = fs.readdirSync(articlesDirectory, { withFileTypes: true });
    const articles = entries
      .filter((entry) => entry.isDirectory())
      .map((entry) => {
        const slug = entry.name;
        const indexPath = path.join(articlesDirectory, slug, "index.md");

        if (!fs.existsSync(indexPath)) return null;

        const fileContents = fs.readFileSync(indexPath, "utf8");
        const { data, content } = matter(fileContents);

        const metadata = data as ArticleMetadata;

        return {
          slug: slug,
          title: metadata.title,
          excerpt: metadata.excerpt,
          content,
          date: metadata.date,
          readingTime: calculateReadingTime(content),
          coverImage: adaptImagePaths(metadata.coverImage, slug),
          tags: metadata.tags || [],
          author: metadata.author || "Baptiste LECHAT",
        } as Article;
      })
      // Type guard pour TS
      .filter((article): article is Article => article !== null)
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    return articles;
  } catch (error) {
    console.error("Erreur lors de la lecture des articles:", error);
    return [];
  }
}

// Fonction pour obtenir un article par son slug
export async function getArticleBySlug(slug: string): Promise<Article | null> {
  try {
    const articlePath = path.join(articlesDirectory, slug);
    const indexPath = path.join(articlePath, "index.md");

    if (!fs.existsSync(indexPath)) {
      return null;
    }

    const fileContents = fs.readFileSync(indexPath, "utf8");
    const { data, content } = matter(fileContents);

    const metadata = data as ArticleMetadata;

    return {
      slug,
      title: metadata.title,
      excerpt: metadata.excerpt,
      content,
      date: metadata.date,
      readingTime: calculateReadingTime(content),
      coverImage: adaptImagePaths(metadata.coverImage, slug),
      tags: metadata.tags || [],
      author: metadata.author || "Baptiste LECHAT",
    } as Article;
  } catch (error) {
    console.error(`Erreur lors de la lecture de l'article ${slug}:`, error);
    return null;
  }
}

// Fonction pour obtenir les articles par tag
export async function getArticlesByTag(tag: string): Promise<Article[]> {
  const articles = await getArticles();
  return articles.filter((article) =>
    article.tags?.some(
      (articleTag) => articleTag.toLowerCase() === tag.toLowerCase()
    )
  );
}
