import { BlogPost } from "@/lib/blog";

/**
 * Génère l'URL de l'image OpenGraph pour un article de blog
 */
export function generateOgImageUrl(
  post: BlogPost,
  baseUrl: string = ""
): string {
  const params = new URLSearchParams({
    title: post.title,
    category: post.category,
    readTime: post.readTime,
  });

  return `${baseUrl}/api/og?${params.toString()}`;
}

/**
 * Génère l'URL de l'image OpenGraph avec des paramètres personnalisés
 */
export function generateCustomOgImageUrl(
  title: string,
  category: string,
  readTime?: string,
  baseUrl: string = ""
): string {
  const params = new URLSearchParams({
    title,
    category,
    ...(readTime && { readTime }),
  });

  return `${baseUrl}/api/og?${params.toString()}`;
}

/**
 * Génère l'URL de l'image OpenGraph pour la page principale du blog
 */
export function generateBlogOgImageUrl(baseUrl: string = ""): string {
  return generateCustomOgImageUrl(
    "Le Blog",
    "Entrepreneuriat",
    "Conseils & Analyses",
    baseUrl
  );
}

/**
 * Liste des catégories disponibles avec leurs icônes et couleurs
 */
export const BLOG_CATEGORIES = {
  Startup: { icon: "🚀", color: "#7AFCD0" },
  Business: { icon: "💼", color: "#FFB8D2" },
  Marketing: { icon: "📈", color: "#CDBBFF" },
  Tech: { icon: "⚡", color: "#F7FF9A" },
  Finance: { icon: "💰", color: "#7AFCD0" },
  Productivité: { icon: "⚙️", color: "#FFB8D2" },
  Leadership: { icon: "👑", color: "#F7FF9A" },
  Innovation: { icon: "💡", color: "#CDBBFF" },
  Entrepreneuriat: { icon: "🎯", color: "#7AFCD0" },
  Stratégie: { icon: "🎲", color: "#FFB8D2" },
  Coaching: { icon: "🎯", color: "#CDBBFF" },
  Formation: { icon: "📚", color: "#F7FF9A" },
  Événements: { icon: "🎪", color: "#FFB8D2" },
} as const;

export type BlogCategory = keyof typeof BLOG_CATEGORIES;
