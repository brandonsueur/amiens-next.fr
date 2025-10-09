"use client";

import { Layout } from "@/components/layout";
import { Container } from "@/components/container";
import { Button } from "@/components/button";
import { FAQ } from "@/components/faq";
import { blogFaqData } from "@/constants/faq";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

// Articles de blog (données simulées)
const blogArticles = [
  {
    id: "entrepreneuriat-amiens-2024",
    title: "L'entrepreneuriat à Amiens en 2024 : bilan et perspectives",
    excerpt:
      "Retour sur une année riche en innovations et projets entrepreneuriaux dans la métropole amiénoise. Découvrez les tendances et opportunités pour 2025.",
    author: "Équipe Amiens Next",
    date: "15 décembre 2024",
    readTime: "5 min",
    category: "Analyse",
    image: "/img/blog/entrepreneuriat-amiens.jpg",
    featured: true,
  },
  {
    id: "guide-freelance-amiens",
    title: "Guide du freelance à Amiens : où travailler et réseauter ?",
    excerpt:
      "Les meilleurs espaces de coworking, cafés wifi et lieux de networking pour les freelances amiénois. Notre sélection testée et approuvée.",
    author: "Marie Dupont",
    date: "8 décembre 2024",
    readTime: "7 min",
    category: "Pratique",
    image: "/img/blog/freelance-guide.jpg",
    featured: false,
  },
  {
    id: "talk-innovation-ia",
    title: "Retour sur notre Talk 'IA et innovation locale'",
    excerpt:
      "Découvrez les insights de notre dernier talk avec 3 entrepreneurs amiénois qui intègrent l'IA dans leurs business. Témoignages inspirants.",
    author: "Thomas Martin",
    date: "25 novembre 2024",
    readTime: "4 min",
    category: "Événement",
    image: "/img/blog/talk-ia.jpg",
    featured: false,
  },
  {
    id: "financement-startup-hauts-de-france",
    title: "Financer sa startup dans les Hauts-de-France : le guide complet",
    excerpt:
      "Aides régionales, business angels, incubateurs... Tour d'horizon des solutions de financement pour les startups de notre région.",
    author: "Sophie Leroy",
    date: "18 novembre 2024",
    readTime: "10 min",
    category: "Financement",
    image: "/img/blog/financement.jpg",
    featured: false,
  },
  {
    id: "reussir-networking-amiens",
    title: "5 conseils pour réussir son networking à Amiens",
    excerpt:
      "Comment maximiser ses opportunités de networking dans l'écosystème entrepreneurial amiénois ? Nos conseils pratiques basés sur l'expérience.",
    author: "Antoine Dubois",
    date: "10 novembre 2024",
    readTime: "6 min",
    category: "Networking",
    image: "/img/blog/networking.jpg",
    featured: false,
  },
  {
    id: "portrait-entrepreneur-sarah",
    title: "Portrait d'entrepreneur : Sarah, de l'idée à la success story",
    excerpt:
      "Rencontre avec Sarah, membre du collectif qui a lancé sa startup tech à Amiens et levé 500k€ en 18 mois. Son parcours inspirant.",
    author: "Équipe Amiens Next",
    date: "3 novembre 2024",
    readTime: "8 min",
    category: "Portrait",
    image: "/img/blog/portrait-sarah.jpg",
    featured: false,
  },
];

// Catégories de blog
const blogCategories = [
  { id: "all", label: "Tous les articles", count: blogArticles.length },
  {
    id: "analyse",
    label: "Analyse",
    count: blogArticles.filter((a) => a.category === "Analyse").length,
  },
  {
    id: "pratique",
    label: "Pratique",
    count: blogArticles.filter((a) => a.category === "Pratique").length,
  },
  {
    id: "evenement",
    label: "Événements",
    count: blogArticles.filter((a) => a.category === "Événement").length,
  },
  {
    id: "portrait",
    label: "Portraits",
    count: blogArticles.filter((a) => a.category === "Portrait").length,
  },
  {
    id: "financement",
    label: "Financement",
    count: blogArticles.filter((a) => a.category === "Financement").length,
  },
];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const featuredArticle = blogArticles.find((article) => article.featured);
  const otherArticles = blogArticles.filter((article) => !article.featured);

  // Filtrer les articles selon la catégorie sélectionnée
  const filteredArticles =
    selectedCategory === "all"
      ? otherArticles
      : otherArticles.filter(
          (article) => article.category.toLowerCase() === selectedCategory
        );

  return (
    <Layout>
      {/* Hero Section */}
      <Container className="mt-52 z-10">
        <div className="text-center max-w-4xl mx-auto">
          <span className="text-sm font-semibold text-gray-600 bg-clip-text mb-4 block">
            Ressources entrepreneuriales
          </span>
          <h1 className="text-4xl font-airbnb text-black lg:text-5xl font-medium leading-12 md:leading-16 mb-4 font-ca-slalom coin-shimmer-responsive">
            Le Blog
            <br />
            <span className="text-black">Amiens Next</span>
          </h1>

          <p className="text-md text-black font-epilogue leading-relaxed mb-12 max-w-2xl mx-auto">
            Conseils pratiques, analyses de marché, portraits d'entrepreneurs et
            retours d'expérience pour nourrir votre parcours entrepreneurial
            amiénois.
          </p>
        </div>
      </Container>

      {/* Article à la une */}
      {featuredArticle && (
        <section className="py-16 bg-white">
          <Container>
            <div className="mb-12">
              <h2 className="text-2xl font-medium text-black mb-4 font-ca-slalom">
                À la une
              </h2>
            </div>

            <motion.article
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              <div className="relative h-80 lg:h-96 rounded-2xl overflow-hidden">
                <div className="w-full h-full bg-gray-200 rounded-2xl flex items-center justify-center">
                  <span className="text-gray-500 font-epilogue">
                    Image à venir
                  </span>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-xs px-3 py-1 bg-black text-white rounded-full font-epilogue">
                    {featuredArticle.category}
                  </span>
                  <span className="text-sm text-gray-500 font-epilogue">
                    {featuredArticle.date} • {featuredArticle.readTime}
                  </span>
                </div>

                <h3 className="text-2xl lg:text-3xl font-medium text-black mb-4 font-ca-slalom">
                  {featuredArticle.title}
                </h3>

                <p className="text-gray-600 font-epilogue leading-relaxed mb-6">
                  {featuredArticle.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500 font-epilogue">
                    Par {featuredArticle.author}
                  </span>
                  <Link href={`/blog/${featuredArticle.id}`}>
                    <Button>Lire l'article</Button>
                  </Link>
                </div>
              </div>
            </motion.article>
          </Container>
        </section>
      )}

      {/* Filtres par catégorie */}
      <section className="py-8 bg-gray-50">
        <Container>
          <div className="flex flex-wrap gap-3 justify-center">
            {blogCategories.map((category, index) => (
              <motion.button
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 text-sm font-epilogue rounded-full border transition-colors ${
                  selectedCategory === category.id
                    ? "border-black bg-black text-white"
                    : "border-gray-200 bg-white hover:bg-gray-100"
                }`}
              >
                {category.label} ({category.count})
              </motion.button>
            ))}
          </div>
        </Container>
      </section>

      {/* Liste des articles */}
      <section className="py-16 bg-white">
        <Container>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article, index) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-md transition-shadow duration-300"
              >
                <div className="relative h-48 bg-gray-200">
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-500 font-epilogue text-sm">
                      Image à venir
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded-full font-epilogue">
                      {article.category}
                    </span>
                    <span className="text-xs text-gray-500 font-epilogue">
                      {article.readTime}
                    </span>
                  </div>

                  <h3 className="text-lg font-medium text-black mb-3 font-ca-slalom line-clamp-2">
                    {article.title}
                  </h3>

                  <p className="text-sm text-gray-600 font-epilogue leading-relaxed mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="text-xs text-gray-500 font-epilogue">
                      <div>{article.author}</div>
                      <div>{article.date}</div>
                    </div>
                    <Link href={`/blog/${article.id}`}>
                      <Button variant="outline" className="text-sm">
                        Lire
                      </Button>
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </Container>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-gray-50">
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

      {/* FAQ */}
      <FAQ
        questions={blogFaqData}
        title="Questions sur le blog"
        subtitle="Tout savoir sur nos contenus et comment contribuer à notre blog entrepreneurial"
      />

      {/* Call to Action */}
      <section className="py-16 md:py-24 bg-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-medium text-black mb-6 font-ca-slalom"
            >
              Envie de contribuer ?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-md text-black font-epilogue leading-relaxed mb-8"
            >
              Vous avez une expertise à partager ou une expérience inspirante ?
              Proposez-nous un article pour enrichir notre blog communautaire.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button>Proposer un article</Button>
              <Button variant="outline">Rejoindre le collectif</Button>
            </motion.div>
          </div>
        </Container>
      </section>
    </Layout>
  );
}
