"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  initial?: Record<string, any>;
  animate?: Record<string, any>;
  whileInView?: Record<string, any>;
  transition?: Record<string, any>;
  delay?: number;
}

export function AnimatedSection({
  children,
  className = "",
  initial = { opacity: 0, y: 20 },
  animate,
  whileInView = { opacity: 1, y: 0 },
  transition = { duration: 0.6 },
  delay = 0,
}: AnimatedSectionProps) {
  const finalTransition = { ...transition, delay };

  if (animate) {
    return (
      <motion.div
        initial={initial}
        animate={animate}
        transition={finalTransition}
        className={className}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={initial}
      whileInView={whileInView}
      transition={finalTransition}
      className={className}
    >
      {children}
    </motion.div>
  );
}
