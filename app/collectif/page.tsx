"use client";

import { Layout } from "@/components/layout";
import { Container } from "@/components/container";
import { Button } from "@/components/button";
import { Cards } from "@/components/cards";
import { FAQ } from "@/components/faq";
import { motion } from "framer-motion";
import Link from "next/link";

// Données des statistiques du collectif (même que la home)
const collectifStats = [
  {
    id: "membres",
    title: "120+",
    subtitle: "Membres actifs dans le collectif",
    color: "green" as const,
  },
  {
    id: "evenements",
    title: "10+",
    subtitle: "Événements par an (matinales, dîner, talks)",
    color: "pink" as const,
  },
  {
    id: "vision",
    title: "1 vision",
    subtitle: "Rayonner Amiens et les alentours",
    color: "purple" as const,
  },
  {
    id: "rencontres",
    title: "30 min",
    subtitle: "Pour faire de vraies rencontres à chaque event",
    color: "yellow" as const,
  },
];

export default function CollectifPage() {
  return (
    <Layout>
      {/* Hero Section amélioré */}
      <section className="pt-32 pb-24 bg-white relative overflow-hidden">
        {/* Pattern de fond subtil */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-32 h-32 bg-secondary rounded-full blur-3xl"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-1/3 w-28 h-28 bg-secondary rounded-full blur-3xl"></div>
        </div>

        <Container className="relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-6"
            >
              <span className="text-sm font-semibold text-secondary bg-clip-text mb-4 block">
                Notre communauté
              </span>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium leading-tight text-primary mb-6 font-ca-slalom">
                Le Collectif
                <br />
                <span className="text-secondary">Amiens Next</span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl text-black font-epilogue leading-relaxed max-w-4xl mx-auto mb-12"
            >
              Découvrez une communauté d'entrepreneurs passionnés qui
              transforment Amiens en territoire d'innovation et de croissance.
              Freelances, dirigeants, artisans et startuppers unis par une même
              ambition.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
            >
              <Button>Rejoindre le collectif</Button>
              <Button variant="outline">Découvrir nos événements</Button>
            </motion.div>

            {/* Badges des profils épurés */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap justify-center gap-3"
            >
              {[
                { label: "Freelances" },
                { label: "Startups" },
                { label: "Artisans" },
                { label: "Dirigeants" },
              ].map((profile) => (
                <div
                  key={profile.label}
                  className="px-4 py-2 bg-gray-50 rounded-lg border border-gray-100 hover:bg-gray-100 transition-colors duration-200"
                >
                  <span className="text-sm font-medium text-black font-epilogue">
                    {profile.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Section Mission */}
      <section className="py-16 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-medium text-primary mb-6 font-ca-slalom">
                Notre Mission
              </h2>
              <p className="text-md text-black font-epilogue leading-relaxed max-w-3xl mx-auto">
                Amiens Next rassemble la nouvelle génération d'entrepreneurs
                amiénois. Notre mission est de créer un écosystème dynamique où
                freelances, dirigeants, artisans et startuppers se rencontrent,
                s'inspirent et collaborent pour faire rayonner notre territoire.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <Link href="#rejoindre">
                <Button>Rejoindre le collectif</Button>
              </Link>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Statistiques avec Cards component */}
      <Cards
        title="Le collectif en chiffres"
        subtitle="Des résultats concrets qui témoignent de notre dynamisme"
        cards={collectifStats}
      />

      {/* Section Valeurs */}
      <section className="py-16 md:py-24 bg-white">
        <Container>
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-medium text-primary mb-4 font-ca-slalom"
            >
              Nos Valeurs
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-md text-black font-epilogue max-w-3xl mx-auto"
            >
              Les principes qui guident notre communauté au quotidien
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Communauté",
                description:
                  "Une communauté bienveillante d'entrepreneurs qui s'entraident et partagent leurs expériences.",
              },
              {
                title: "Ambition",
                description:
                  "L'ambition de faire d'Amiens un territoire d'innovation et d'entrepreneuriat reconnu.",
              },
              {
                title: "Authenticité",
                description:
                  "Des échanges sincères et authentiques, loin des codes du networking traditionnel.",
              },
              {
                title: "Entraide",
                description:
                  "L'entraide et la collaboration avant la compétition, pour grandir ensemble.",
              },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <h3 className="text-xl font-medium text-primary mb-3 font-ca-slalom">
                  {value.title}
                </h3>
                <p className="text-black font-epilogue leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Section Types de Membres */}
      <section className="py-16 md:py-24 bg-white">
        <Container>
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-medium text-primary mb-4 font-ca-slalom"
            >
              Qui peut rejoindre ?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-md text-black font-epilogue max-w-3xl mx-auto"
            >
              Notre collectif est ouvert à tous les profils entrepreneuriaux
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Freelances",
                description: "Consultants, créatifs, experts indépendants",
              },
              {
                title: "Startups",
                description: "Porteurs de projets innovants et disruptifs",
              },
              {
                title: "Artisans",
                description: "Artisans et commerçants de qualité",
              },
              {
                title: "Dirigeants",
                description: "CEO, fondateurs, gérants d'entreprises",
              },
            ].map((type, index) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <h3 className="text-lg font-medium text-primary mb-2 font-ca-slalom">
                  {type.title}
                </h3>
                <p className="text-black font-epilogue text-sm">
                  {type.description}
                </p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Section Événements */}
      <section className="py-16 md:py-24 bg-white">
        <Container>
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-medium text-primary mb-4 font-ca-slalom"
            >
              Nos événements
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-md text-black font-epilogue max-w-3xl mx-auto"
            >
              Des rencontres régulières pour échanger, apprendre et grandir
              ensemble
            </motion.p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: "Matinales Business",
                description:
                  "Petit-déjeuners mensuels pour échanger sur vos projets et actualités dans une ambiance détendue.",
              },
              {
                title: "Afterworks",
                description:
                  "Soirées networking conviviales pour développer votre réseau et créer des collaborations.",
              },
              {
                title: "Talks Inspirants",
                description:
                  "Conférences avec des entrepreneurs locaux et nationaux pour partager expériences et conseils.",
              },
            ].map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <h3 className="text-xl font-medium text-primary mb-3 font-ca-slalom">
                  {event.title}
                </h3>
                <p className="text-black font-epilogue leading-relaxed">
                  {event.description}
                </p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <FAQ />

      {/* Call to Action */}
      <section id="rejoindre" className="py-16 md:py-24 bg-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-medium text-primary mb-6 font-ca-slalom"
            >
              Prêt à rejoindre l'aventure ?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-md text-black font-epilogue leading-relaxed mb-8"
            >
              Intégrez une communauté d'entrepreneurs dynamiques et contribuez
              au rayonnement économique d'Amiens et de sa région.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button>Demander à rejoindre</Button>
              <Button variant="outline">En savoir plus</Button>
            </motion.div>
          </div>
        </Container>
      </section>
    </Layout>
  );
}
