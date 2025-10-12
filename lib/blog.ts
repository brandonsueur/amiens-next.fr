import { generateOgImageUrl } from "@/utils/og-image";
import { format, parseISO } from "date-fns";
import { fr } from "date-fns/locale";
import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { remark } from "remark";
import remarkGfm from "remark-gfm";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "content/blog");

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  featured: boolean;
  tags: string[];
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
}

export interface BlogPostMetadata {
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  featured: boolean;
  tags: string[];
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
}

// Obtenir tous les slugs des articles
export function getPostSlugs(): string[] {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames
    .filter((name) => name.endsWith(".md"))
    .map((name) => name.replace(/\.md$/, ""));
}

// Obtenir un article par son slug
export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`);

    if (!fs.existsSync(fullPath)) {
      return null;
    }

    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    // Traitement du contenu Markdown en HTML
    const processedContent = await remark()
      .use(remarkGfm)
      .use(html, { sanitize: false })
      .process(content);

    const contentHtml = processedContent.toString();

    // Formatage de la date
    const formattedDate = format(parseISO(data.date), "dd MMMM yyyy", {
      locale: fr,
    });

    return {
      slug,
      title: data.title,
      excerpt: data.excerpt,
      content: contentHtml,
      author: data.author,
      date: formattedDate,
      readTime: data.readTime || "5 min",
      category: data.category,
      image: data.image || "/img/blog/default.jpg",
      featured: data.featured || false,
      tags: data.tags || [],
      seo: {
        title: data.seo?.title || data.title,
        description: data.seo?.description || data.excerpt,
        keywords: data.seo?.keywords || data.tags || [],
      },
    };
  } catch (error) {
    console.error(`Erreur lors de la lecture de l'article ${slug}:`, error);
    return null;
  }
}

// Obtenir tous les articles (métadonnées uniquement)
export function getAllPosts(): BlogPostMetadata[] {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => {
      try {
        const fullPath = path.join(postsDirectory, `${slug}.md`);
        const fileContents = fs.readFileSync(fullPath, "utf8");
        const { data } = matter(fileContents);

        // Formatage de la date
        const formattedDate = format(parseISO(data.date), "dd MMMM yyyy", {
          locale: fr,
        });

        return {
          slug,
          title: data.title,
          excerpt: data.excerpt,
          author: data.author,
          date: formattedDate,
          readTime: data.readTime || "5 min",
          category: data.category,
          image: data.image || "/img/blog/default.jpg",
          featured: data.featured || false,
          tags: data.tags || [],
          seo: {
            title: data.seo?.title || data.title,
            description: data.seo?.description || data.excerpt,
            keywords: data.seo?.keywords || data.tags || [],
          },
        } as BlogPostMetadata;
      } catch (error) {
        console.error(
          `Erreur lors de la lecture des métadonnées de ${slug}:`,
          error
        );
        return null;
      }
    })
    .filter((post): post is BlogPostMetadata => post !== null)
    // Trier par date (plus récent en premier)
    .sort((post1, post2) => {
      const date1 = new Date(post1.date);
      const date2 = new Date(post2.date);
      return date2.getTime() - date1.getTime();
    });

  return posts;
}

// Obtenir les articles par catégorie
export function getPostsByCategory(category: string): BlogPostMetadata[] {
  const allPosts = getAllPosts();
  if (category === "all") {
    return allPosts;
  }
  return allPosts.filter(
    (post) => post.category.toLowerCase() === category.toLowerCase()
  );
}

// Obtenir les articles en vedette
export function getFeaturedPosts(): BlogPostMetadata[] {
  const allPosts = getAllPosts();
  return allPosts.filter((post) => post.featured);
}

// Obtenir les articles connexes
export function getRelatedPosts(
  currentSlug: string,
  currentTags: string[],
  limit: number = 3
): BlogPostMetadata[] {
  const allPosts = getAllPosts();

  const relatedPosts = allPosts
    .filter((post) => post.slug !== currentSlug)
    .map((post) => {
      // Calculer la pertinence basée sur les tags communs
      const commonTags = post.tags.filter((tag) => currentTags.includes(tag));
      return {
        ...post,
        relevance: commonTags.length,
      };
    })
    .filter((post) => post.relevance > 0)
    .sort((a, b) => b.relevance - a.relevance)
    .slice(0, limit)
    .map((post) => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { relevance, ...postWithoutRelevance } = post;
      return postWithoutRelevance;
    });

  // Si pas assez d'articles connexes, compléter avec les plus récents
  if (relatedPosts.length < limit) {
    const recentPosts = allPosts
      .filter(
        (post) =>
          post.slug !== currentSlug &&
          !relatedPosts.some((related) => related.slug === post.slug)
      )
      .slice(0, limit - relatedPosts.length);

    relatedPosts.push(...recentPosts);
  }

  return relatedPosts;
}

// Obtenir toutes les catégories avec leur nombre d'articles
export function getCategories(): Array<{
  id: string;
  label: string;
  count: number;
}> {
  const allPosts = getAllPosts();
  const categoryMap = new Map<string, number>();

  // Compter les articles par catégorie
  allPosts.forEach((post) => {
    const category = post.category.toLowerCase();
    categoryMap.set(category, (categoryMap.get(category) || 0) + 1);
  });

  // Créer la liste des catégories
  const categories = [
    { id: "all", label: "Tous les articles", count: allPosts.length },
  ];

  categoryMap.forEach((count, category) => {
    const label = category.charAt(0).toUpperCase() + category.slice(1);
    categories.push({ id: category, label, count });
  });

  return categories;
}

// Calculer le temps de lecture estimé
export function calculateReadTime(content: string): string {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min`;
}

// Générer le sitemap pour les articles
export function generateBlogSitemap(): Array<{
  url: string;
  lastModified: string;
}> {
  const posts = getAllPosts();

  return posts.map((post) => ({
    url: `/blog/${post.slug}`,
    lastModified: new Date(post.date).toISOString(),
  }));
}

// Obtenir l'URL de l'image OpenGraph pour un article
export function getPostOgImageUrl(
  post: BlogPost | BlogPostMetadata,
  baseUrl: string = ""
): string {
  return generateOgImageUrl(post as BlogPost, baseUrl);
}
