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

// Fonction pour obtenir tous les articles
export async function getArticles(): Promise<Article[]> {
  try {
    // Vérifier si le dossier existe
    if (!fs.existsSync(articlesDirectory)) {
      return [];
    }

    const fileNames = fs.readdirSync(articlesDirectory);
    const articles = fileNames
      .filter((name) => name.endsWith(".md"))
      .map((name) => {
        const slug = name.replace(/\.md$/, "");
        const fullPath = path.join(articlesDirectory, name);
        const fileContents = fs.readFileSync(fullPath, "utf8");
        const { data, content } = matter(fileContents);
        
        const metadata = data as ArticleMetadata;
        
        return {
          slug,
          title: metadata.title,
          excerpt: metadata.excerpt,
          content,
          date: metadata.date,
          readingTime: calculateReadingTime(content),
          coverImage: metadata.coverImage,
          tags: metadata.tags || [],
          author: metadata.author || "Baptiste LECHAT",
        } as Article;
      })
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
    const fullPath = path.join(articlesDirectory, `${slug}.md`);
    
    if (!fs.existsSync(fullPath)) {
      return null;
    }
    
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);
    
    const metadata = data as ArticleMetadata;
    
    return {
      slug,
      title: metadata.title,
      excerpt: metadata.excerpt,
      content,
      date: metadata.date,
      readingTime: calculateReadingTime(content),
      coverImage: metadata.coverImage,
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
    article.tags?.some((articleTag) => 
      articleTag.toLowerCase() === tag.toLowerCase()
    )
  );
}