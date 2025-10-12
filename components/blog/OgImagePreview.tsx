import { generateOgImageUrl } from "@/utils/og-image";
import { BlogPost, BlogPostMetadata } from "@/lib/blog";

interface OgImagePreviewProps {
  post: BlogPost | BlogPostMetadata;
  width?: number;
  height?: number;
  className?: string;
}

/**
 * Composant pour prévisualiser l'image OpenGraph d'un article
 * Utile pour les aperçus dans l'admin ou les tests
 */
export function OgImagePreview({
  post,
  width = 400,
  height = 210,
  className = "",
}: OgImagePreviewProps) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
  const ogImageUrl = generateOgImageUrl(post as BlogPost, baseUrl);

  return (
    <div
      className={`relative overflow-hidden rounded-lg shadow-md ${className}`}
    >
      <iframe
        src={ogImageUrl}
        width={width}
        height={height}
        className="border-0 w-full h-full"
        title={`Aperçu OpenGraph - ${post.title}`}
        style={{
          transform: "scale(0.5)",
          transformOrigin: "top left",
          width: "200%",
          height: "200%",
        }}
      />
      <div className="absolute bottom-2 left-2 bg-black bg-opacity-75 text-white text-xs px-2 py-1 rounded">
        {width}×{height}
      </div>
    </div>
  );
}

/**
 * Grille de prévisualisation pour plusieurs articles
 */
interface OgImageGridProps {
  posts: (BlogPost | BlogPostMetadata)[];
  columns?: number;
}

export function OgImageGrid({ posts, columns = 3 }: OgImageGridProps) {
  return (
    <div
      className={`grid gap-6`}
      style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}
    >
      {posts.map((post) => (
        <div key={post.slug} className="space-y-2">
          <OgImagePreview
            post={post}
            width={300}
            height={157}
            className="w-full"
          />
          <div className="text-sm">
            <div className="font-medium truncate">{post.title}</div>
            <div className="text-gray-500 text-xs">
              {post.category} • {post.author}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
