import { Cards } from "@/components";

const cardsData = [
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

export const StatsSection = () => {
  return (
    <Cards
      title="Amiens Next, c'est le lieu où les dirigeants et indépendants de qualité"
      subtitle="se rencontrent, s'inspirent et avancent ensemble."
      cards={cardsData}
    />
  );
};
