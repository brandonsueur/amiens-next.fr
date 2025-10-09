import { Banner, Cards } from "@/components";
import { Layout } from "@/components/layout";
import { FAQ } from "@/components";
import { homeFaqData } from "@/constants/faq";

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

export default function Home() {
  return (
    <Layout>
      <Banner />

      <Cards
        title="Amiens Next, c’est le lieu où les dirigeants et indépendants de qualité se rencontrent, s’inspirent et avancent ensemble."
        cards={cardsData}
      />

      <FAQ
        questions={homeFaqData}
        title="Questions fréquentes"
        subtitle="Découvrez tout ce qu'il faut savoir sur Amiens Next et comment nous rejoindre"
      />
    </Layout>
  );
}
