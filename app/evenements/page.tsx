"use client";

import { Layout } from "@/components/layout";
import { Container } from "@/components/container";
import { Button } from "@/components/button";
import { FAQ } from "@/components/faq";
import { evenementsFaqData } from "@/constants/faq";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

// Types d'événements
const eventTypes = [
  {
    id: "matinales",
    title: "Matinales Business",
    description:
      "Petit-déjeuners mensuels pour échanger sur vos projets et actualités dans une ambiance détendue.",
    frequency: "1er jeudi du mois",
    duration: "1h30",
    format: "8h00 - 9h30",
  },
  {
    id: "afterworks",
    title: "Afterworks",
    description:
      "Soirées networking conviviales pour développer votre réseau et créer des collaborations.",
    frequency: "3ème jeudi du mois",
    duration: "2h00",
    format: "18h30 - 20h30",
  },
  {
    id: "talks",
    title: "Talks Inspirants",
    description:
      "Conférences avec des entrepreneurs locaux et nationaux pour partager expériences et conseils.",
    frequency: "Trimestriel",
    duration: "2h30",
    format: "19h00 - 21h30",
  },
];

// Prochains événements - tous complets pour créer l'exclusivité
const upcomingEvents = [
  {
    id: "matinale-novembre",
    type: "Matinale Business",
    title: "Innovation & IA : Comment transformer votre business",
    date: "7 novembre 2024",
    time: "8h00 - 9h30",
    location: "La Halle Freyssinet, Amiens",
    spots: "25/25 places",
    status: "Complet",
  },
  {
    id: "afterwork-novembre",
    type: "Afterwork",
    title: "Networking & Opportunités Q4",
    date: "21 novembre 2024",
    time: "18h30 - 20h30",
    location: "Rooftop Le Jules, Amiens",
    spots: "40/40 places",
    status: "Complet",
  },
  {
    id: "talk-decembre",
    type: "Talk Inspirant",
    title: "De l'idée à la scale-up : témoignage d'un entrepreneur amiénois",
    date: "12 décembre 2024",
    time: "19h00 - 21h30",
    location: "Auditorium CCI Hauts-de-France",
    spots: "80/80 places",
    status: "Complet",
  },
  {
    id: "matinale-janvier",
    type: "Matinale Business",
    title: "Financement & Levées de fonds en 2025",
    date: "9 janvier 2025",
    time: "8h00 - 9h30",
    location: "Co-working Spaces, Amiens",
    spots: "30/30 places",
    status: "Complet",
  },
  {
    id: "afterwork-janvier",
    type: "Afterwork",
    title: "Tendances business & Bonne année !",
    date: "23 janvier 2025",
    time: "18h30 - 20h30",
    location: "Bar Le Central, Amiens",
    spots: "35/35 places",
    status: "Complet",
  },
  {
    id: "afterwork-novembre",
    type: "Afterwork",
    title: "Networking & Opportunités Q4",
    date: "21 novembre 2024",
    time: "18h30 - 20h30",
    location: "Rooftop Le Jules, Amiens",
    spots: "40 places",
    status: "Ouvert",
  },
  {
    id: "talk-decembre",
    type: "Talk Inspirant",
    title: "De l'idée à la scale-up : témoignage d'un entrepreneur amiénois",
    date: "12 décembre 2024",
    time: "19h00 - 21h30",
    location: "Auditorium CCI Hauts-de-France",
    spots: "80 places",
    status: "Bientôt",
  },
];

export default function EvenementsPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <Container className="mt-52 z-10">
        <div className="space-x-reverse md:grid md:grid-cols-12 gap-x-8 items-center">
          <div className="md:col-span-12 lg:col-span-7 xl:col-span-7">
            <h1 className="text-4xl font-airbnb text-black lg:text-5xl font-medium leading-12 md:leading-16 mb-4 font-ca-slalom coin-shimmer-responsive">
              Des événements pour apprendre, échanger et grandir ensemble
            </h1>

            <p className="text-md text-black font-epilogue leading-relaxed mb-12 max-w-xl">
              Des rencontres régulières pour échanger, apprendre et grandir
              ensemble. Matinales business, afterworks networking et talks
              inspirants rythment la vie de notre communauté entrepreneuriale.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button>Voir les prochains événements</Button>
              <Button variant="outline">Rejoindre le collectif</Button>
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
                alt="Photo des événements du collectif"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </Container>

      {/* Types d'événements */}
      <section className="py-16 md:py-24 bg-white">
        <Container>
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-medium text-black mb-4 font-ca-slalom"
            >
              Nos formats
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-md text-black font-epilogue max-w-3xl mx-auto"
            >
              Trois formats complémentaires pour tous les besoins et toutes les
              envies
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {eventTypes.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 p-8 rounded-2xl hover:bg-gray-100 transition-colors duration-300"
              >
                <h3 className="text-xl font-medium text-black mb-4 font-ca-slalom">
                  {event.title}
                </h3>
                <p className="text-black font-epilogue leading-relaxed mb-6">
                  {event.description}
                </p>

                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600 font-epilogue">
                      Fréquence :
                    </span>
                    <span className="text-black font-epilogue font-medium">
                      {event.frequency}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 font-epilogue">Durée :</span>
                    <span className="text-black font-epilogue font-medium">
                      {event.duration}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 font-epilogue">
                      Horaires :
                    </span>
                    <span className="text-black font-epilogue font-medium">
                      {event.format}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Prochains événements
      <section className="py-16 md:py-24 bg-white">
        <Container>
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-medium text-black mb-4 font-ca-slalom"
            >
              Prochains événements
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-md text-black font-epilogue max-w-3xl mx-auto"
            >
              Découvrez notre programmation et réservez votre place
            </motion.p>
          </div>

          <div className="space-y-6 max-w-4xl mx-auto">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-sm font-medium text-gray-600 font-epilogue">
                        {event.type}
                      </span>
                      <span
                        className={`text-xs px-2 py-1 rounded-full font-epilogue ${
                          event.status === "Ouvert"
                            ? "bg-green-100 text-green-700"
                            : "bg-yellow-100 text-yellow-700"
                        }`}
                      >
                        {event.status}
                      </span>
                    </div>

                    <h3 className="text-xl font-medium text-black mb-3 font-ca-slalom">
                      {event.title}
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                      <div>
                        <span className="text-gray-600 font-epilogue">
                          Date :
                        </span>
                        <div className="text-black font-epilogue font-medium">
                          {event.date}
                        </div>
                      </div>
                      <div>
                        <span className="text-gray-600 font-epilogue">
                          Horaire :
                        </span>
                        <div className="text-black font-epilogue font-medium">
                          {event.time}
                        </div>
                      </div>
                      <div>
                        <span className="text-gray-600 font-epilogue">
                          Places :
                        </span>
                        <div className="text-black font-epilogue font-medium">
                          {event.spots}
                        </div>
                      </div>
                    </div>

                    <div className="mt-3">
                      <span className="text-gray-600 font-epilogue text-sm">
                        Lieu :
                      </span>
                      <div className="text-black font-epilogue font-medium text-sm">
                        {event.location}
                      </div>
                    </div>
                  </div>

                  <div className="flex-shrink-0">
                    {event.status === "Ouvert" ? (
                      <Button>S'inscrire</Button>
                    ) : (
                      <Button variant="outline">Être notifié</Button>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section> */}

      {/* Comment participer */}
      <section className="py-16 md:py-24 bg-white">
        <Container>
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-medium text-black mb-4 font-ca-slalom"
            >
              Comment participer ?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-md text-black font-epilogue max-w-3xl mx-auto"
            >
              Trois étapes simples pour rejoindre nos événements
            </motion.p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                step: "01",
                title: "Rejoindre le collectif",
                description:
                  "Devenez membre d'Amiens Next pour accéder à tous nos événements exclusifs.",
              },
              {
                step: "02",
                title: "Choisir vos événements",
                description:
                  "Parcourez notre calendrier et sélectionnez les rencontres qui vous intéressent.",
              },
              {
                step: "03",
                title: "Participer & networker",
                description:
                  "Venez échanger, apprendre et développer votre réseau avec la communauté.",
              },
            ].map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-black font-medium font-epilogue">
                    {step.step}
                  </span>
                </div>
                <h3 className="text-xl font-medium text-black mb-3 font-ca-slalom">
                  {step.title}
                </h3>
                <p className="text-black font-epilogue leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <FAQ
        questions={evenementsFaqData}
        title="Questions sur nos événements"
        subtitle="Tout ce que vous devez savoir sur nos matinales, afterworks et talks pour bien vous préparer"
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
              Prêt à nous rejoindre ?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-md text-black font-epilogue leading-relaxed mb-8"
            >
              Rejoignez une communauté d'entrepreneurs dynamiques et participez
              à nos événements exclusifs pour développer votre réseau et vos
              projets.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link href="/collectif">
                <Button>Rejoindre le collectif</Button>
              </Link>
              <Button variant="outline">Voir le calendrier complet</Button>
            </motion.div>
          </div>
        </Container>
      </section>
    </Layout>
  );
}
