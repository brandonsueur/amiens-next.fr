"use client";

import { Button } from "../button";
import { Container } from "../container";
import { motion } from "framer-motion";
import Link from "next/link";

const scrollToSection = (sectionId: string) => {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

// Nouvelles activités pour le collectif d'entrepreneurs
const entrepreneurActivities = [
  { id: "freelance", label: "Freelances", color: "#6366F1" },
  { id: "startup", label: "Startups", color: "#8B5CF6" },
  { id: "artisan", label: "Artisans", color: "#06B6D4" },
  { id: "dirigeant", label: "Dirigeants", color: "#10B981" },
];

export const Banner = () => {
  return (
    <Container className="mt-52 z-10">
      <div className="space-x-reverse md:grid md:grid-cols-12 gap-x-8  items-center">
        <div className="md:col-span-12 lg:col-span-7 xl:col-span-7">
          <h1 className="text-4xl font-airbnb text-black lg:text-5xl font-medium leading-12 md:leading-16 mb-4 font-ca-slalom coin-shimmer-responsive">
            Le collectif de la nouvelle génération d'entrepreneurs Amiénois
          </h1>

          <p className="text-md text-black font-epilogue leading-relaxed mb-12 max-w-xl">
            Rassemblement des freelances, dirigeants, artisans et startuppers
            qui construisent l'avenir d'Amiens et ses alentours. Un moyen pour
            échanger, collaborer, innover et grandir ensemble.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/rejoindre">
              <Button>Rejoindre</Button>
            </Link>
            <Link href="/collectif">
              <Button variant="outline">Le Collectif</Button>
            </Link>
          </div>
        </div>

        <div className="hidden lg:col-span-5 xl:col-span-5 lg:block">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative w-full h-0 pb-[100%] overflow-hidden"
          >
            <img
              src="/img/amiens.png"
              alt="Photo du collectif d'entrepreneurs"
              className="absolute top-0 left-0 w-full h-full"
            />
          </motion.div>
        </div>
      </div>
    </Container>
  );
};
