import { BlogPost, BlogPostMetadata } from "@/lib/blog";
import { generateOgImageUrl } from "@/utils/og-image";
import Image from "next/image";

interface BlogOgImageProps {
  post: BlogPost | BlogPostMetadata;
  className?: string;
  priority?: boolean;
}

export function BlogOgImage({
  post,
  className = "",
  priority = false,
}: BlogOgImageProps) {
  const ogImageUrl = generateOgImageUrl(
    post as BlogPost,
    process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"
  );

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <Image
        src={ogImageUrl}
        alt={post.title}
        fill
        className="object-cover transition-transform duration-300 hover:scale-105"
        priority={priority}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      {/* <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent" /> */}
    </div>
  );
}
