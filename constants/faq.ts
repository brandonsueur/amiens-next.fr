interface FAQItem {
  id: string;
  question: string;
  answer: string | string[] | React.ReactElement;
}

// Questions pour la page d'accueil (Home)
export const homeFaqData: FAQItem[] = [
  {
    id: "home-1",
    question: "Qu'est-ce qu'Amiens Next ?",
    answer:
      "Amiens Next est le collectif de la nouvelle génération d'entrepreneurs Amiénois. Il rassemble freelances, dirigeants, artisans et startupers qui souhaitent échanger, collaborer, innover et faire grandir leurs projets ensemble.",
  },
  {
    id: "home-2",
    question: "Qui peut rejoindre le collectif ?",
    answer:
      "Le collectif est ouvert à tous les profils entrepreneuriaux basés à Amiens ou dans un rayon de 50km : freelances, dirigeants, artisans, commerçants, startupers et porteurs de projets innovants.",
  },
  {
    id: "home-3",
    question: "Comment rejoindre Amiens Next ?",
    answer:
      "Rien de plus simple ! Contactez-nous via nos réseaux sociaux ou par email, prenons un café pour faire connaissance, et si le feeling passe, vous serez invité(e) au prochain événement.",
  },
  {
    id: "home-4",
    question: "Y a-t-il des frais d'adhésion ?",
    answer:
      "Une cotisation annuelle de 50€ permet de soutenir l'organisation des événements et de garantir un cadre de qualité pour tous les membres du collectif. Ce montant symbolique couvre les frais de lieux, collations et organisation.",
  },
  {
    id: "home-5",
    question: "Où se déroulent vos événements ?",
    answer:
      "Nos événements ont lieu dans différents lieux inspirants d'Amiens et de sa métropole : coworkings, bars, rooftops, auditoriums... Nous varions les plaisirs !",
  },
];

// Questions pour la page Collectif
export const collectifFaqData: FAQItem[] = [
  {
    id: "collectif-1",
    question: "Quelle est la mission d'Amiens Next ?",
    answer:
      "Notre mission est de rassembler et fédérer la nouvelle génération d'entrepreneurs amiénois pour créer un écosystème dynamique où l'entraide, l'innovation et la collaboration permettent à chacun de grandir.",
  },
  {
    id: "collectif-2",
    question: "Quelles sont vos valeurs fondamentales ?",
    answer:
      "Nous prônons l'esprit communautaire, l'ambition territoriale, l'authenticité dans les échanges et la collaboration créative. Ces valeurs guident toutes nos actions et événements.",
  },
  {
    id: "collectif-4",
    question: "Comment garantissez-vous la qualité des échanges ?",
    answer:
      "Nous sélectionnons nos membres selon nos 3 critères (esprit entrepreneurial, ancrage territorial, esprit collectif) et privilégions la qualité à la quantité dans nos événements.",
  },
  {
    id: "collectif-5",
    question: "Puis-je participer même si je débute ?",
    answer:
      "Absolument ! Que vous soyez en phase de création, de développement ou déjà établi, tous les stades entrepreneuriaux sont les bienvenus. L'important est l'envie d'apprendre et de partager.",
  },
  {
    id: "collectif-6",
    question: "Y a-t-il des opportunités business concrètes ?",
    answer:
      "Oui ! De nombreuses collaborations, partenariats et projets communs naissent lors de nos événements. C'est l'un des objectifs : créer des synergies business locales.",
  },
  {
    id: "collectif-7",
    question: "Quel est le coût de l'adhésion annuelle ?",
    answer:
      "L'adhésion est de 50€ par an, un montant symbolique qui couvre les frais d'organisation (lieux, collations, supports) et garantit la qualité de nos événements. Cela représente environ 4€ par mois pour accéder à tous nos événements.",
  },
];

// Questions pour la page Événements
export const evenementsFaqData: FAQItem[] = [
  {
    id: "events-1",
    question: "À quelle fréquence organisez-vous des événements ?",
    answer:
      "Nous organisons 3 types d'événements réguliers : matinales business (1er jeudi du mois), afterworks (3ème jeudi du mois) et talks inspirants (trimestriels), plus des événements spéciaux ponctuels.",
  },
  {
    id: "events-2",
    question: "Comment s'inscrire aux événements ?",
    answer:
      "Les membres reçoivent les invitations en priorité via notre groupe privé. Les places étant limitées pour garantir la qualité des échanges, nous conseillons de s'inscrire rapidement.",
  },
  {
    id: "events-3",
    question: "Quelle est la durée moyenne d'un événement ?",
    answer:
      "Les matinales durent 1h30 (8h-9h30), les afterworks 2h (18h30-20h30) et les talks 2h30 (19h-21h30). Des formats pensés pour s'adapter aux contraintes professionnelles.",
  },
  {
    id: "events-4",
    question: "Combien de participants par événement ?",
    answer:
      "Nous limitons volontairement : 25 personnes pour les matinales, 40 pour les afterworks et 80 pour les talks. Cette taille permet des échanges qualitatifs et personnalisés.",
  },
  {
    id: "events-5",
    question: "Puis-je proposer un sujet de talk ?",
    answer:
      "Bien sûr ! Si vous avez une expérience inspirante à partager ou une expertise à transmettre, contactez-nous. Nous sommes toujours à la recherche d'intervenants de qualité.",
  },
  {
    id: "events-6",
    question: "Y a-t-il un dress code particulier ?",
    answer:
      "Non, l'ambiance est décontractée ! Venez comme vous êtes, l'important est de se sentir à l'aise pour échanger naturellement avec les autres entrepreneurs.",
  },
  {
    id: "events-7",
    question: "Que se passe-t-il si un événement est complet ?",
    answer:
      "Nous tenons une liste d'attente et prévenons en cas de désistement. En tant que membre, vous avez la priorité sur les non-membres pour les prochains événements.",
  },
];

// Questions pour la page Services (si elle existe)
export const servicesFaqData: FAQItem[] = [
  {
    id: "services-1",
    question: "Quels services proposez-vous aux entrepreneurs ?",
    answer:
      "Au-delà des événements, nous offrons du mentoring, des mises en relation business, de l'accompagnement pour le développement local et un accès privilégié à notre réseau.",
  },
  {
    id: "services-2",
    question: "Proposez-vous de l'accompagnement individuel ?",
    answer:
      "Oui, nos membres expérimentés peuvent accompagner ponctuellement les entrepreneurs en phase de lancement sur des sujets spécifiques (stratégie, financement, marketing...).",
  },
  {
    id: "services-3",
    question: "Comment fonctionne le système de parrainage ?",
    answer:
      "Chaque nouveau membre est parrainé par un entrepreneur expérimenté du collectif qui l'aide à s'intégrer et le guide dans ses premiers pas au sein de la communauté.",
  },
  {
    id: "services-4",
    question: "Y a-t-il un annuaire des membres ?",
    answer:
      "Oui, nous disposons d'un annuaire privé permettant aux membres de se retrouver facilement et d'identifier les bonnes compétences pour leurs projets.",
  },
];

// Export des types pour réutilisation
export type { FAQItem };
