"use client";

import Link from "next/link";
import { Container } from "@/components/container";
import { Layout } from "@/components/layout";
import { Button } from "@/components/button";
import { motion } from "framer-motion";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <Layout>
      <div className="min-h-screen bg-white flex items-center justify-center">
        <Container className="py-20">
          <div className="text-center max-w-2xl mx-auto">
            {/* 404 Number */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-4">
                404
              </h1>
            </motion.div>

            {/* Main content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-12"
            >
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
                Page non trouvée
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                La page que vous recherchez n'existe pas ou a été déplacée.
                Vérifiez l'URL saisie ou retournez à la page d'accueil.
              </p>
            </motion.div>

            {/* Action buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
            >
              <Link href="/">
                <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg flex items-center gap-2 transition-colors duration-200">
                  <Home size={18} />
                  Retour à l'accueil
                </Button>
              </Link>

              <button
                onClick={() => window.history.back()}
                className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-8 py-3 rounded-lg flex items-center gap-2 transition-colors duration-200"
              >
                <ArrowLeft size={18} />
                Page précédente
              </button>
            </motion.div>

            {/* Navigation suggestions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-gray-50 rounded-lg p-8 border border-gray-100"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Pages principales
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
                <Link
                  href="/"
                  className="text-gray-600 hover:text-primary transition-colors duration-200"
                >
                  → Accueil
                </Link>
                <Link
                  href="/services"
                  className="text-gray-600 hover:text-primary transition-colors duration-200"
                >
                  → Services
                </Link>
                <Link
                  href="/mentions-legales"
                  className="text-gray-600 hover:text-primary transition-colors duration-200"
                >
                  → Mentions légales
                </Link>
              </div>
            </motion.div>
          </div>
        </Container>
      </div>
    </Layout>
  );
}
