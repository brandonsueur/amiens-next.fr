"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "../container";
import { SectionTitle } from "../sectionTitle";
import { SquareArrowDownRight, SquareArrowRight } from "lucide-react";
import clsx from "clsx";

interface FAQItem {
  id: string;
  question: string;
  answer: string | string[] | React.ReactElement;
}

const faqData: FAQItem[] = [
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

export function FAQ() {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set(["toto-1"]));

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
    <section className="py-16 px-6">
      <Container>
        <SectionTitle
          subTitle="FAQ"
          title="Questions fréquentes"
          description="Retrouvez ici les réponses aux questions que nos clients nous posent le plus souvent, pour vous aider à mieux comprendre nos services et nos engagements."
        />

        {/* FAQ Items */}
        <div className="space-y-0 border border-[#4A4A4A] rounded-lg overflow-hidden">
          {faqData.map((item, index) => (
            <div
              key={item.id}
              className={index !== 0 ? "border-t border-[#4A4A4A]" : ""}
            >
              {/* Question Button */}
              <button
                onClick={() => toggleItem(item.id)}
                className="w-full flex cursor-pointer items-center justify-between p-6 text-left transition-colors duration-200"
              >
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center">
                    <motion.div className="text-black font-bold text-lg">
                      {openItems.has(item.id) ? (
                        <SquareArrowDownRight className="text-secondary" />
                      ) : (
                        <SquareArrowRight className="text-black" />
                      )}
                    </motion.div>
                  </div>
                  <h3
                    className={clsx(
                      "text-black text-xl font-semibold font-ca-slalom",
                      openItems.has(item.id) ? "text-secondary" : ""
                    )}
                  >
                    {item.question}
                  </h3>
                </div>

                <motion.div
                  animate={{ rotate: openItems.has(item.id) ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex-shrink-0 ml-4"
                >
                  <svg
                    className="w-5 h-5 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
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
                    className="overflow-hidden border-t border-[#4A4A4A]"
                  >
                    <div className="p-6 bg-white ">
                      {Array.isArray(item.answer) ? (
                        <div className="space-y-4">
                          {item.answer.map((paragraph, idx) => (
                            <p key={idx} className="text-black font-epilogue">
                              {paragraph}
                            </p>
                          ))}
                        </div>
                      ) : (
                        <p className="text-gray-500 font-epilogue">
                          {item.answer}
                        </p>
                      )}
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
