"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "../container";
import { FAQItem } from "@/constants/faq";
import clsx from "clsx";

interface FAQProps {
  questions?: FAQItem[];
  title?: string;
  subtitle?: string;
}

// Questions par défaut (pour la page d'accueil)
const defaultFaqData: FAQItem[] = [
  {
    id: "amiensnext-1",
    question: "Qu’est-ce qu’Amiens Next ?",
    answer:
      "Amiens Next est le collectif de la nouvelle génération d’entrepreneurs Amiénois. Il rassemble freelances, dirigeants, artisans et startupers qui souhaitent échanger, collaborer, innover et faire grandir leurs projets ensemble. Chaque rencontre est une opportunité de créer du lien et de faire avancer son business localement.",
  },
  {
    id: "amiensnext-2",
    question: "Qui peut rejoindre Amiens Next ?",
    answer:
      "Le collectif est ouvert à tous les profils entrepreneuriaux : freelances, dirigeants, artisans, commerçants, startupers et porteurs de projets. Ce qui compte avant tout, c’est l’envie de partager, de progresser et de contribuer au dynamisme économique local.",
  },
  {
    id: "amiensnext-3",
    question: "Y a-t-il un coût d’adhésion ?",
    answer:
      "Oui, une adhésion annuelle symbolique permet de soutenir le collectif et de participer aux événements (afterworks, matinales, talks). Elle garantit aussi la qualité des échanges et le bon fonctionnement de la communauté.",
  },
  {
    id: "amiensnext-4",
    question: "Quels types d’événements organisez-vous ?",
    answer: (
      <ul className="list-disc list-inside space-y-2">
        <li>☕ Matinales business pour échanger sur vos projets et actus</li>
        <li>🍷 Afterworks pour réseauter dans une ambiance conviviale</li>
        <li>🎤 Talks inspirants avec des invités locaux et nationaux</li>
      </ul>
    ),
  },
  {
    id: "amiensnext-5",
    question: "Pourquoi rejoindre Amiens Next ?",
    answer:
      "Rejoindre Amiens Next, c’est intégrer une communauté d’entrepreneurs engagés, gagner en visibilité, développer son réseau local et trouver des opportunités concrètes. C’est aussi bénéficier d’un cadre bienveillant où l’entraide et l’échange priment sur la compétition.",
  },
  {
    id: "amiensnext-6",
    question: "Comment se déroule une rencontre Amiens Next ?",
    answer:
      "Chaque rencontre dure environ 1h à 2h, dans un lieu convivial à Amiens ou alentours. L’idée est de créer des échanges sincères, d’apprendre les uns des autres et de repartir avec des connexions utiles, sans perdre de temps après une journée de travail.",
  },
  {
    id: "amiensnext-7",
    question: "Puis-je proposer mon entreprise pour apparaître dans le Guide ?",
    answer:
      "Oui ! Si vous êtes entrepreneur ou artisan à Amiens, vous pouvez proposer votre entreprise pour être intégrée au Guide Amiens Next. Il s’agit d’une sélection locale valorisant les acteurs de confiance de la région.",
  },
  {
    id: "amiensnext-8",
    question: "Comment être informé des prochains événements ?",
    answer:
      "Vous pouvez suivre Amiens Next sur Instagram et LinkedIn, ou vous inscrire à la newsletter pour recevoir le calendrier des événements à venir et les nouveautés du collectif.",
  },
];

export function FAQ({
  questions = defaultFaqData,
  title = "Questions fréquentes",
  subtitle = "Retrouvez ici les réponses aux questions que nos membres nous posent le plus souvent",
}: FAQProps) {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const toggleItem = (id: string) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id);
    } else {
      newOpenItems.add(id);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <section className="py-16 bg-white">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-4xl lg:text-4xl font-medium text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-md text-gray-600 max-w-3xl mx-auto">{subtitle}</p>
        </div>

        {/* FAQ Items */}
        <div className="max-w-7xl mx-auto space-y-2">
          {questions.map((item) => (
            <div
              key={item.id}
              className={clsx(
                "rounded-xl overflow-hidden transition-all duration-300",
                openItems.has(item.id)
                  ? "bg-[#7AFCD0] border-green-200"
                  : "bg-[#FAF8F4]"
              )}
            >
              {/* Question Button */}
              <button
                onClick={() => toggleItem(item.id)}
                className="w-full flex items-center justify-between p-2 md:p-4 text-left transition-colors duration-200 group cursor-pointer"
              >
                <h3 className="text-lg font-medium text-gray-900 pr-4 transition-colors duration-200">
                  {item.question}
                </h3>

                <motion.div
                  animate={{ rotate: openItems.has(item.id) ? 45 : 0 }}
                  transition={{ duration: 0.1, ease: "easeInOut" }}
                  className="flex-shrink-0"
                >
                  <div
                    className={clsx(
                      "w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-200",
                      openItems.has(item.id)
                        ? " text-[green-600]"
                        : "text-gray-600 group-hover:bg-white"
                    )}
                  >
                    <svg
                      className="w-4 h-4 font-bold"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={3}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                  </div>
                </motion.div>
              </button>

              {/* Answer */}
              <AnimatePresence>
                {openItems.has(item.id) && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 md:px-8 pb-6 md:pb-8 pt-0">
                      <div className=" pt-6">
                        {Array.isArray(item.answer) ? (
                          <div className="space-y-4">
                            {item.answer.map((paragraph, idx) => (
                              <p
                                key={idx}
                                className="text-black leading-relaxed"
                              >
                                {paragraph}
                              </p>
                            ))}
                          </div>
                        ) : (
                          <div className="text-black leading-relaxed">
                            {item.answer}
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
