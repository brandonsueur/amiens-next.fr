"use client";

import { FC, useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";
import { Container } from "@/components/container";

interface Card {
  id: string;
  title: string;
  subtitle: string;
  color: "green" | "pink" | "purple" | "yellow";
}

interface CardsProps {
  title?: string;
  subtitle?: string;
  cards: Card[];
}

const cardColors = {
  green: "bg-[#7AFCD0]",
  pink: "bg-[#FFB8D2]",
  purple: "bg-[#CDBBFF]",
  yellow: "bg-[#F7FF9A]",
};

// Variantes d'animation
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants: Variants = {
  hidden: {
    y: 50,
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

export const Cards: FC<CardsProps> = ({ title, subtitle, cards }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="py-16 md:pb-24 md:pt-16 bg-white" ref={ref}>
      <Container>
        {(title || subtitle) && (
          <div className="text-center mb-16">
            {title && (
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="mx-auto max-w-3xl text-3xl md:text-4xl lg:text-2xl font-normal text-gray-900 mb-4"
              >
                {title}
              </motion.h2>
            )}
            {subtitle && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto"
              >
                {subtitle}
              </motion.p>
            )}
          </div>
        )}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
        >
          {cards.map((card) => (
            <motion.div
              key={card.id}
              variants={cardVariants}
              whileHover={{
                scale: 1.03,
                transition: { type: "spring", stiffness: 300 },
              }}
              className={`
                ${cardColors[card.color]}
                rounded-3xl p-8
                shadow-lg hover:shadow-xl
                transition-shadow duration-300
                cursor-pointer
                group
                h-48 md:h-60
              `}
            >
              <div className="flex flex-col justify-between h-full text-left">
                <h3 className="text-3xl md:text-3xl font-semibold text-black group-hover:scale-110 transition-transform duration-300">
                  {card.title}
                </h3>
                <p className="text-xs md:text-base font-normal text-black leading-relaxed">
                  {card.subtitle}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
};
