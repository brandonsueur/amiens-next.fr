import { Layout } from "@/components/layout";
import { Container } from "@/components/container";
import { Button } from "@/components/button";
import { getPostBySlug, getAllPosts } from "@/lib/blog";
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

  return (
    <Layout>
      <Container className="mt-52 z-10">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/blog"
            className="inline-flex items-center text-gray-600 hover:text-black mb-8 font-epilogue"
          >
            ← Retour au blog
          </Link>

          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs px-3 py-1 bg-black text-white rounded-full font-epilogue">
                {post.category}
              </span>
              <span className="text-sm text-gray-500 font-epilogue">
                {post.date} • {post.readTime}
              </span>
            </div>

            <h1 className="text-4xl lg:text-5xl font-medium text-black mb-6 font-ca-slalom leading-tight">
              {post.title}
            </h1>

            <p className="text-xl text-gray-600 font-epilogue leading-relaxed mb-8">
              {post.excerpt}
            </p>

            <div className="flex items-center gap-4 pb-8 border-b border-gray-200">
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
            className="prose prose-lg max-w-none font-epilogue"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </Container>

      <section className="py-16 bg-gray-50 mt-16">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-medium text-black mb-4 font-ca-slalom">
              Cet article vous a plu ?
            </h2>
            <p className="text-gray-600 font-epilogue mb-8">
              Découvrez d'autres contenus sur l'entrepreneuriat à Amiens
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
  const posts = getAllPosts();
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

  return {
    title: post.seo.title,
    description: post.seo.description,
    keywords: post.seo.keywords,
    openGraph: {
      title: post.seo.title,
      description: post.seo.description,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
    },
  };
}
