import { Layout } from "@/components/layout";
import { Container } from "@/components/container";
import { Button } from "@/components/button";
import { FAQ } from "@/components/faq";
import { BlogOgImage } from "@/components/blog";
import { blogFaqData } from "@/constants/faq";
import { getAllPosts, getFeaturedPosts, getCategories } from "@/lib/blog";
import Link from "next/link";

export default async function BlogPage() {
  const posts = await getAllPosts();
  const featuredPosts = await getFeaturedPosts();
  const categories = await getCategories();

  const featuredPost = featuredPosts[0] || null;
  const otherPosts = posts.filter((post) => !post.featured).slice(0, 6);

  return (
    <Layout>
      <Container className="mt-52 z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl text-black lg:text-5xl font-medium leading-12 md:leading-16 mb-4 font-ca-slalom coin-shimmer-responsive">
            Le Blog
          </h1>
          <p className="text-md text-black font-epilogue leading-relaxed mb-12 max-w-2xl mx-auto">
            Conseils pratiques, analyses de marché, portraits d'entrepreneurs et
            retours d'expérience pour nourrir votre parcours entrepreneurial
            amiénois.
          </p>
        </div>
      </Container>

      {/* Section Article à la une */}
      {featuredPost && (
        <section className="py-16 bg-white">
          <Container>
            <div className="mb-12 text-center">
              <h2 className="text-2xl font-medium text-black mb-4 font-ca-slalom">
                Article à la une
              </h2>
              <p className="text-gray-600 font-epilogue">
                Notre sélection du moment
              </p>
            </div>

            <article className="max-w-6xl mx-auto bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="grid lg:grid-cols-2 gap-8 p-8">
                <BlogOgImage
                  post={featuredPost}
                  className="h-64 lg:h-80 rounded-xl"
                  priority={true}
                />
                <div className="flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs px-3 py-1 bg-black text-white rounded-full font-epilogue">
                      {featuredPost.category}
                    </span>
                    <span className="text-sm text-gray-500 font-epilogue">
                      {featuredPost.date} • {featuredPost.readTime}
                    </span>
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-medium text-black mb-4 font-ca-slalom">
                    {featuredPost.title}
                  </h3>
                  <p className="text-gray-600 font-epilogue leading-relaxed mb-6">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500 font-epilogue">
                      Par {featuredPost.author}
                    </span>
                    <Link href={`/blog/${featuredPost.slug}`}>
                      <Button>Lire l'article</Button>
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          </Container>
        </section>
      )}

      {/* Section Articles récents */}
      <section className="py-16 bg-gray-50">
        <Container>
          <div className="mb-12 text-center">
            <h2 className="text-2xl font-medium text-black mb-4 font-ca-slalom">
              Articles récents
            </h2>
            <p className="text-gray-600 font-epilogue">
              Découvrez nos derniers contenus créés avec des fichiers Markdown
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {otherPosts.map((post) => (
              <article
                key={post.slug}
                className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 hover:border-gray-300"
              >
                <BlogOgImage post={post} className="h-48" />
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded-full font-epilogue">
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-500 font-epilogue">
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="text-lg font-medium text-black mb-3 font-ca-slalom line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-gray-600 font-epilogue leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="text-xs text-gray-500 font-epilogue">
                      <div>{post.author}</div>
                      <div>{post.date}</div>
                    </div>
                    <Link href={`/blog/${post.slug}`}>
                      <Button variant="outline" className="text-sm">
                        Lire
                      </Button>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* Section Newsletter */}
      <section className="py-16 bg-white">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-medium text-black mb-4 font-ca-slalom">
              Restez informé
            </h2>
            <p className="text-gray-600 font-epilogue mb-8">
              Recevez nos derniers articles et conseils entrepreneuriaux
              directement dans votre boîte mail
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Votre email"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg font-epilogue focus:outline-none focus:ring-2 focus:ring-black"
              />
              <Button>S'abonner</Button>
            </div>
            <p className="text-xs text-gray-500 font-epilogue mt-4">
              Pas de spam, désinscription possible à tout moment
            </p>
          </div>
        </Container>
      </section>

      {/* FAQ Section */}
      <FAQ
        questions={blogFaqData}
        title="Questions sur le blog"
        subtitle="Tout savoir sur nos contenus et comment contribuer à notre blog entrepreneurial"
      />

      {/* Call to Action */}
      <section className="py-16 md:py-24 bg-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-medium text-black mb-6 font-ca-slalom">
              Envie de contribuer ?
            </h2>
            <p className="text-md text-black font-epilogue leading-relaxed mb-8">
              Vous avez une expertise à partager ou une expérience inspirante ?
              Proposez-nous un article pour enrichir notre blog communautaire.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button>Proposer un article</Button>
              <Button variant="outline">Rejoindre le collectif</Button>
            </div>
          </div>
        </Container>
      </section>
    </Layout>
  );
}
