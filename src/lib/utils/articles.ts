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
  locale: string;
}

const articlesDirectory = path.join(process.cwd(), 'content/articles');

export const getArticles = async (locale: string = 'fr'): Promise<Article[]> => {
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
        const localePath = path.join(articlesDirectory, slug, `${locale}.md`);
        
        // Vérifier si le fichier pour la locale existe, sinon utiliser fr.md comme fallback
        let filePath = localePath;
        if (!fs.existsSync(localePath)) {
          const fallbackPath = path.join(articlesDirectory, slug, 'fr.md');
          if (fs.existsSync(fallbackPath)) {
            filePath = fallbackPath;
          } else {
            console.error(`No article file found for slug ${slug} in locale ${locale}`);
            return null;
          }
        }
        
        try {
          const fileContents = fs.readFileSync(filePath, 'utf8');
          const { data, content } = matter(fileContents);

          // Calculer le temps de lecture approximatif
          const wordsPerMinute = 200;
          const wordCount = content.split(/\s+/).length;
          const readingTime = Math.ceil(wordCount / wordsPerMinute);
          
          // Adapter les chemins des images pour utiliser les assets spécifiques à l'article
          const articleAssetsPath = `/articles/${slug}/`;
          const processedContent = content.replace(/!\[(.*?)\]\(\/(.*?)\)/g, (match, alt, src) => {
            // Si l'image est déjà dans le bon format, ne pas la modifier
            if (src.startsWith(`articles/${slug}/`)) {
              return match;
            }
            // Si l'image est dans le dossier de l'article mais pas dans assets
            if (src.startsWith(`articles/${slug}/`)) {
              const filename = src.split('/').pop();
              return `![${alt}](${articleAssetsPath}${filename})`;
            }
            return match;
          });

          return {
            slug,
            title: data.title || slug,
            excerpt: data.excerpt || '',
            content: processedContent || content,
            date: data.date || new Date().toISOString(),
            readingTime,
            tags: data.tags || [],
            coverImage: data.coverImage,
            locale: locale,
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

export const getArticleBySlug = async (slug: string, locale: string = 'fr'): Promise<Article | null> => {
  try {
    const localePath = path.join(articlesDirectory, slug, `${locale}.md`);
    
    // Vérifier si le fichier pour la locale existe, sinon utiliser fr.md comme fallback
    let filePath = localePath;
    if (!fs.existsSync(localePath)) {
      const fallbackPath = path.join(articlesDirectory, slug, 'fr.md');
      if (fs.existsSync(fallbackPath)) {
        filePath = fallbackPath;
      } else {
        console.error(`No article file found for slug ${slug} in locale ${locale}`);
        return null;
      }
    }

    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);

    // Calculer le temps de lecture approximatif
    const wordsPerMinute = 200;
    const wordCount = content.split(/\s+/).length;
    const readingTime = Math.ceil(wordCount / wordsPerMinute);
    
    // Adapter les chemins des images pour utiliser les assets spécifiques à l'article
    const articleAssetsPath = `/articles/${slug}/`;
    const processedContent = content.replace(/!\[(.*?)\]\(\/(.*?)\)/g, (match, alt, src) => {
      // Si l'image est déjà dans le bon format, ne pas la modifier
      if (src.startsWith(`articles/${slug}/`)) {
        return match;
      }
      // Si l'image est dans le dossier de l'article mais pas dans assets
      if (src.startsWith(`articles/${slug}/`)) {
        const filename = src.split('/').pop();
        return `![${alt}](${articleAssetsPath}${filename})`;
      }
      return match;
    });

    return {
      slug,
      title: data.title || slug,
      excerpt: data.excerpt || '',
      content: processedContent || content,
      date: data.date || new Date().toISOString(),
      readingTime,
      tags: data.tags || [],
      coverImage: data.coverImage,
      locale: locale,
    } as Article;
  } catch (error) {
    console.error(`Erreur lors de la récupération de l'article ${slug}:`, error);
    return null;
  }
};
