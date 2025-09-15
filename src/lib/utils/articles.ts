import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readingTime: number;
  tags?: string[];
  coverImage?: string;
}

const articlesDirectory = path.join(process.cwd(), 'content/articles');

export const getArticles = async (): Promise<Article[]> => {
  try {
    // Vérifier si le dossier existe
    if (!fs.existsSync(articlesDirectory)) {
      return [];
    }

    const entries = fs.readdirSync(articlesDirectory, { withFileTypes: true });
    const articles = entries
      .filter(entry => entry.isDirectory())
      .map((entry) => {
        const slug = entry.name;
        const indexPath = path.join(articlesDirectory, slug, 'index.md');
        
        try {
          const fileContents = fs.readFileSync(indexPath, 'utf8');
          const { data, content } = matter(fileContents);

          // Calculer le temps de lecture approximatif
          const wordsPerMinute = 200;
          const wordCount = content.split(/\s+/).length;
          const readingTime = Math.ceil(wordCount / wordsPerMinute);

          return {
            slug,
            title: data.title || slug,
            excerpt: data.excerpt || '',
            content,
            date: data.date || new Date().toISOString(),
            readingTime,
            tags: data.tags || [],
            coverImage: data.coverImage,
          } as Article;
        } catch (error) {
          console.error(`Error reading article ${slug}:`, error);
          return null;
        }
      })
      .filter((article): article is Article => article !== null)
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    return articles;
  } catch (error) {
    console.error('Erreur lors de la récupération des articles:', error);
    return [];
  }
};

export const getArticleBySlug = async (slug: string): Promise<Article | null> => {
  try {
    const fullPath = path.join(articlesDirectory, slug, 'index.md');
    
    if (!fs.existsSync(fullPath)) {
      return null;
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    // Calculer le temps de lecture approximatif
    const wordsPerMinute = 200;
    const wordCount = content.split(/\s+/).length;
    const readingTime = Math.ceil(wordCount / wordsPerMinute);

    return {
      slug,
      title: data.title || slug,
      excerpt: data.excerpt || '',
      content,
      date: data.date || new Date().toISOString(),
      readingTime,
      tags: data.tags || [],
      coverImage: data.coverImage,
    } as Article;
  } catch (error) {
    console.error(`Erreur lors de la récupération de l'article ${slug}:`, error);
    return null;
  }
};
