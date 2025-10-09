"use client";

import { Layout } from "@/components/layout";
import { Container } from "@/components/container";
import { Button } from "@/components/button";
import { Cards } from "@/components/cards";
import { FAQ } from "@/components/faq";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

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
      {/* Hero Section */}
      <Container className="mt-52 z-10">
        <div className="space-x-reverse md:grid md:grid-cols-12 gap-x-8 items-center">
          <div className="md:col-span-12 lg:col-span-7 xl:col-span-7">
            <h1 className="text-4xl font-airbnb text-black lg:text-5xl font-medium leading-12 md:leading-16 mb-4 font-ca-slalom coin-shimmer-responsive">
              Le collectif de la nouvelle génération d'entrepreneurs Amiénois
            </h1>

            <p className="text-md text-black font-epilogue leading-relaxed mb-12 max-w-xl">
              Découvrez une communauté d'entrepreneurs passionnés qui
              transforment Amiens en territoire d'innovation et de croissance.
              Freelances, dirigeants, artisans et startuppers unis par une même
              ambition.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button>Rejoindre le collectif</Button>
              <Button variant="outline">Découvrir nos événements</Button>
            </div>
          </div>

          <div className="hidden lg:col-span-5 xl:col-span-5 lg:block">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative w-full h-0 pb-[100%] overflow-hidden"
            >
              <Image
                src="/img/amiens.png"
                alt="Photo du collectif d'entrepreneurs"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </Container>

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
              <h2 className="text-3xl md:text-4xl font-medium text-black mb-6 font-ca-slalom">
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
              className="text-3xl md:text-4xl font-medium text-black mb-4 font-ca-slalom"
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
                <h3 className="text-xl font-medium text-black mb-3 font-ca-slalom">
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
              className="text-3xl md:text-4xl font-medium text-black mb-4 font-ca-slalom"
            >
              Qui peut rejoindre ?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-md text-black font-epilogue max-w-3xl mx-auto"
            >
              Notre collectif rassemble tous les profils entrepreneuriaux qui
              partagent l'ambition de faire grandir l'écosystème amiénois
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: "Freelances & Consultants",
                description:
                  "Experts indépendants, consultants, créatifs digitaux, développeurs, designers, rédacteurs, coaches...",
                examples: [
                  "Développeur web",
                  "Designer UX/UI",
                  "Consultant marketing",
                  "Rédacteur",
                  "Photographe",
                ],
                icon: "💻",
              },
              {
                title: "Startups & Scale-ups",
                description:
                  "Porteurs de projets innovants, fondateurs de startups, entrepreneurs en phase de lancement ou de croissance",
                examples: [
                  "Fondateur startup",
                  "CEO scale-up",
                  "Porteur de projet",
                  "Entrepreneur tech",
                  "Innovateur",
                ],
                icon: "🚀",
              },
              {
                title: "Artisans & Commerçants",
                description:
                  "Artisans créateurs, commerçants engagés, entrepreneurs du secteur traditionnel en mutation digitale",
                examples: [
                  "Artisan créateur",
                  "Commerçant local",
                  "Chef d'entreprise TPE",
                  "Entrepreneur local",
                  "Créateur de produits",
                ],
                icon: "🎨",
              },
              {
                title: "Dirigeants & CEO",
                description:
                  "Dirigeants d'entreprises établies, gérants de PME, CEO en quête d'innovation et de développement",
                examples: [
                  "CEO PME",
                  "Directeur général",
                  "Gérant d'entreprise",
                  "Entrepreneur senior",
                  "Leader d'équipe",
                ],
                icon: "👔",
              },
            ].map((type, index) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 p-8 rounded-2xl hover:bg-gray-100 transition-colors duration-300"
              >
                <div className="text-center mb-6">
                  <span className="text-4xl mb-4 block">{type.icon}</span>
                  <h3 className="text-xl font-medium text-black mb-3 font-ca-slalom">
                    {type.title}
                  </h3>
                  <p className="text-gray-600 font-epilogue text-sm leading-relaxed mb-4">
                    {type.description}
                  </p>
                </div>

                <div className="space-y-2">
                  <p className="text-xs font-medium text-gray-500 font-epilogue uppercase tracking-wide mb-3">
                    Exemples de profils
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {type.examples.map((example, i) => (
                      <span
                        key={i}
                        className="text-xs px-3 py-1 bg-white text-gray-700 rounded-full font-epilogue border border-gray-200"
                      >
                        {example}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Critères d'adhésion */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 max-w-3xl mx-auto text-center"
          >
            <h3 className="text-xl font-medium text-black mb-6 font-ca-slalom">
              Nos critères d'adhésion
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  criterion: "Esprit entrepreneurial",
                  description:
                    "Avoir un projet, une entreprise ou une activité entrepreneuriale",
                },
                {
                  criterion: "Ancrage territorial",
                  description:
                    "Être basé à Amiens ou dans les alentours à 1 heure de route",
                },
                {
                  criterion: "Esprit collectif",
                  description:
                    "Partager nos valeurs de collaboration et d'entraide",
                },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <h4 className="font-medium text-black font-ca-slalom mb-2">
                    {item.criterion}
                  </h4>
                  <p className="text-sm text-gray-600 font-epilogue">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
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
              className="text-3xl md:text-4xl font-medium text-black mb-4 font-ca-slalom"
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
                <h3 className="text-xl font-medium text-black mb-3 font-ca-slalom">
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
              className="text-3xl md:text-4xl font-medium text-black mb-6 font-ca-slalom"
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
