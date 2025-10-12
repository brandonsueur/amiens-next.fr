import { Layout } from "@/components/layout";
import { Container } from "@/components/container";
import { Button } from "@/components/button";
import {
  getPostBySlug,
  getAllPosts,
  getRelatedPosts,
  getPostOgImageUrl,
} from "@/lib/blog";
import { notFound } from "next/navigation";
import Link from "next/link";

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = await getRelatedPosts(post.slug, post.tags || []);

  return (
    <Layout>
      <Container className="mt-52 z-10">
        <div className="max-w-4xl mx-auto">
          <div>
            <Link
              href="/blog"
              className="inline-flex items-center text-gray-600 hover:text-black mb-8 font-epilogue transition-colors"
            >
              ← Retour au blog
            </Link>
          </div>

          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs px-3 py-1 bg-black text-white rounded-full font-epilogue">
                {post.category}
              </span>
              <span className="text-sm text-gray-500 font-epilogue">
                {post.date} • {post.readTime}
              </span>
              {post.featured && (
                <span className="text-xs px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full font-epilogue">
                  ⭐ À la une
                </span>
              )}
            </div>

            <h1 className="text-4xl lg:text-5xl font-medium text-black mb-6 font-ca-slalom leading-tight">
              {post.title}
            </h1>

            <p className="text-xl text-gray-600 font-epilogue leading-relaxed mb-8">
              {post.excerpt}
            </p>

            <div className="flex items-center gap-4 pb-8 border-b border-gray-200">
              <div className="w-12 h-12 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full flex items-center justify-center">
                <span className="text-gray-600 font-epilogue font-medium">
                  {post.author.charAt(0)}
                </span>
              </div>
              <div>
                <p className="font-medium text-black font-epilogue">
                  Par {post.author}
                </p>
                <p className="text-sm text-gray-500 font-epilogue">
                  Publié le {post.date}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Container>
        <div className="max-w-3xl mx-auto">
          <article
            className="prose prose-lg max-w-none font-epilogue prose-headings:font-ca-slalom prose-headings:text-black prose-a:text-blue-600 prose-strong:text-black"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </Container>

      {/* Tags */}
      {post.tags && post.tags.length > 0 && (
        <Container>
          <div className="max-w-3xl mx-auto pt-8 mt-8 border-t border-gray-200">
            <h3 className="text-sm font-medium text-gray-900 mb-4 font-epilogue">
              Tags :
            </h3>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-sm px-3 py-1 bg-gray-100 text-gray-700 rounded-full font-epilogue hover:bg-gray-200 transition-colors"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </Container>
      )}

      {/* Articles similaires */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-gray-50 mt-16">
          <Container>
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-2xl font-medium text-black mb-4 font-ca-slalom">
                  Articles similaires
                </h2>
                <p className="text-gray-600 font-epilogue">
                  Continuez votre lecture avec ces contenus connexes
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {relatedPosts.slice(0, 3).map((relatedPost) => (
                  <article
                    key={relatedPost.slug}
                    className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 hover:border-gray-300"
                  >
                    <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200">
                      <div className="w-full h-full flex items-center justify-center">
                        <span className="text-gray-500 font-epilogue text-sm">
                          {relatedPost.category === "Analyse" && "📊"}
                          {relatedPost.category === "Guide" && "💼"}
                          {relatedPost.category === "Networking" && "🤝"}
                          {relatedPost.category === "Innovation" && "🚀"}{" "}
                          {relatedPost.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded-full font-epilogue">
                          {relatedPost.category}
                        </span>
                        <span className="text-xs text-gray-500 font-epilogue">
                          {relatedPost.readTime}
                        </span>
                      </div>
                      <h3 className="text-lg font-medium text-black mb-3 font-ca-slalom line-clamp-2">
                        {relatedPost.title}
                      </h3>
                      <p className="text-sm text-gray-600 font-epilogue leading-relaxed mb-4 line-clamp-3">
                        {relatedPost.excerpt}
                      </p>
                      <Link href={`/blog/${relatedPost.slug}`}>
                        <Button variant="outline" className="text-sm w-full">
                          Lire l'article
                        </Button>
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </Container>
        </section>
      )}

      {/* Call to Action */}
      <section className="py-16 bg-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-medium text-black mb-4 font-ca-slalom">
              Cet article vous a plu ?
            </h2>
            <p className="text-gray-600 font-epilogue mb-8">
              Découvrez d'autres contenus sur l'entrepreneuriat à Amiens ou
              rejoignez notre communauté
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/blog">
                <Button>Voir tous les articles</Button>
              </Link>
              <Link href="/collectif">
                <Button variant="outline">Rejoindre le collectif</Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </Layout>
  );
}

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    return {
      title: "Article non trouvé - Amiens Next",
    };
  }

  // Générer l'URL de l'image OpenGraph
  const ogImageUrl = getPostOgImageUrl(
    post,
    process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"
  );

  return {
    title: post.seo.title,
    description: post.seo.description,
    keywords: post.seo.keywords,
    authors: [{ name: post.author }],
    openGraph: {
      title: post.seo.title,
      description: post.seo.description,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      siteName: "Amiens Next",
      locale: "fr_FR",
    },
    twitter: {
      card: "summary_large_image",
      title: post.seo.title,
      description: post.seo.description,
      images: [ogImageUrl],
      creator: `@${post.author.replace(" ", "").toLowerCase()}`,
    },
  };
}
