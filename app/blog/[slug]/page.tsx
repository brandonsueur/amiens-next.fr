"use client";

import { Layout } from "@/components/layout";
import { Container } from "@/components/container";
import { Button } from "@/components/button";
import { motion } from "framer-motion";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "@/icons";

// Articles de blog (données simulées - en production, ces données viendraient d'une API ou d'un CMS)
const blogArticles = {
  "entrepreneuriat-amiens-2024": {
    id: "entrepreneuriat-amiens-2024",
    title: "L'entrepreneuriat à Amiens en 2024 : bilan et perspectives",
    excerpt: "Retour sur une année riche en innovations et projets entrepreneuriaux dans la métropole amiénoise. Découvrez les tendances et opportunités pour 2025.",
    content: `
# L'entrepreneuriat à Amiens en 2024 : bilan et perspectives

2024 aura été une année charnière pour l'écosystème entrepreneurial amiénois. Entre innovations technologiques, initiatives locales et nouveaux modèles économiques, la capitale picarde a su se démarquer dans le paysage entrepreneurial français.

## Un écosystème en pleine effervescence

L'année 2024 a vu naître plus de **150 nouvelles entreprises** dans la métropole amiénoise, avec une prédominance pour les secteurs du numérique, de l'économie circulaire et des services aux entreprises.

### Les secteurs porteurs

- **Numérique et tech** : 35% des créations
- **Services aux entreprises** : 28% 
- **Économie circulaire** : 18%
- **Santé et bien-être** : 12%
- **Autres** : 7%

## Les initiatives marquantes

### Amiens French Tech
Le label French Tech obtenu en début d'année a dynamisé l'écosystème local. Plus de 20 startups ont bénéficié de l'accompagnement et du réseau national.

### Les nouveaux espaces de coworking
Trois nouveaux espaces ont ouvert leurs portes, offrant plus de 200 postes de travail supplémentaires aux entrepreneurs locaux :
- **Le Hangar** (quartier Saint-Leu) : 80 postes
- **Innovation Hub** (centre-ville) : 70 postes  
- **Green Work** (Dury) : 50 postes

## Perspectives 2025

L'année 2025 s'annonce prometteuse avec plusieurs projets structurants :

### Projets d'envergure
- Ouverture du **Campus Innovation** (septembre 2025)
- Lancement du **Fonds d'investissement Picardie Tech** (50M€)
- Extension de la **Pépinière d'entreprises** (+100 bureaux)

### Nouveaux dispositifs d'accompagnement
- Programme d'accompagnement **"Scale-up Amiens"**
- **Incubateur sectoriel** dédié à la transition écologique
- **Réseau de mentors** pour les primo-entrepreneurs

## Notre rôle dans cet écosystème

En tant qu'Amiens Next, nous sommes fiers d'avoir contribué à cette dynamique en :
- Organisant **12 événements** de networking
- Accompagnant **25 projets** de création d'entreprise
- Créant des synergies entre **80 entrepreneurs** membres

## Les défis à relever

Malgré cette belle dynamique, plusieurs défis restent à relever :

### Attraction des talents
La région doit continuer à attirer les profils tech et commerciaux pour soutenir la croissance des startups locales.

### Financement en phase d'amorçage
Un gap persiste pour les financements entre 100k€ et 500k€, crucial pour le développement des jeunes pousses.

### Visibilité nationale
Amiens doit renforcer sa visibilité dans l'écosystème startup français pour attirer investisseurs et partenaires.

## Conclusion

2024 restera une année de transition réussie pour l'entrepreneuriat amiénois. Les bases sont solides pour faire de 2025 une année de croissance et de rayonnement au niveau national.

L'aventure ne fait que commencer, et nous avons hâte de vous accompagner dans cette belle dynamique !

---

*Cet article a été rédigé par l'équipe Amiens Next à partir des données de la CCI Amiens-Picardie et de nos observations terrain.*
    `,
    author: "Équipe Amiens Next",
    date: "15 décembre 2024",
    readTime: "5 min",
    category: "Analyse",
    image: "/img/blog/entrepreneuriat-amiens.jpg",
    featured: true,
    relatedArticles: [
      "guide-freelance-amiens",
      "financement-startup-hauts-de-france"
    ]
  },
  "guide-freelance-amiens": {
    id: "guide-freelance-amiens",
    title: "Guide du freelance à Amiens : où travailler et réseauter ?",
    excerpt: "Les meilleurs espaces de coworking, cafés wifi et lieux de networking pour les freelances amiénois. Notre sélection testée et approuvée.",
    content: `
# Guide du freelance à Amiens : où travailler et réseauter ?

Être freelance à Amiens, c'est bénéficier d'un cadre de vie agréable tout en ayant accès à un écosystème entrepreneurial grandissant. Voici notre guide complet des meilleurs endroits pour travailler et développer son réseau.

## Les espaces de coworking incontournables

### Le Hangar (Saint-Leu) ⭐⭐⭐⭐⭐
**Adresse** : 15 rue des Teinturiers, 80000 Amiens  
**Tarifs** : À partir de 15€/jour, 120€/mois  
**Ambiance** : Industrielle et chaleureuse

Le plus branché des coworkings amiénois ! Installé dans une ancienne teinturerie rénovée, Le Hangar propose :
- **80 postes** de travail flexibles
- **6 salles de réunion** équipées
- **Espace détente** avec baby-foot et cuisine
- **Événements réguliers** de networking

*Notre avis* : Parfait pour les créatifs et les startupers. L'ambiance est détendue et propice aux rencontres.

### Innovation Hub (Centre-ville) ⭐⭐⭐⭐
**Adresse** : 42 rue Delpech, 80000 Amiens  
**Tarifs** : À partir de 18€/jour, 150€/mois  
**Ambiance** : Corporate et moderne

L'espace de référence pour les consultants et freelances tech :
- **70 postes** de travail dans un cadre moderne
- **Connexion fibre** ultra-rapide
- **Salles de visioconférence** professionnelles
- **Programme d'événements** business

*Notre avis* : Idéal pour les freelances B2B qui reçoivent des clients.

## Les cafés wifi-friendly

### Café des Arts (Quartier des Arts)
**Adresse** : 8 place du Don, 80000 Amiens  
**Horaires** : 8h-19h du lundi au samedi  
**WiFi** : ⭐⭐⭐⭐ (Rapide et stable)

Un incontournable pour les sessions de travail en solo. Ambiance feutrée, excellent café et pâtisseries maison.

### Le Book Café (Centre-ville)
**Adresse** : 23 rue des Trois Cailloux, 80000 Amiens  
**Horaires** : 9h-18h tous les jours  
**WiFi** : ⭐⭐⭐ (Correct pour navigation)

Parfait pour les sessions créatives. Librairie-café avec une déco inspirante et des corners cosy.

## Les lieux de networking

### Les événements mensuels d'Amiens Next
**Quand** : Premier jeudi de chaque mois  
**Où** : Lieux variables (voir nos réseaux sociaux)  
**Public** : Entrepreneurs, freelances, startupers

Notre événement phare ! Format convivial avec pitchs, networking et échanges autour d'un verre.

### Petit-déjeuner entrepreneurs CCI
**Quand** : Deuxième mardi de chaque mois  
**Où** : CCI Amiens-Picardie  
**Public** : Chefs d'entreprise, freelances confirmés

Format plus corporate, idéal pour développer son réseau B2B local.

### Afterwork Digital Picardie
**Quand** : Dernier vendredi de chaque mois  
**Où** : Divers lieux partenaires  
**Public** : Professionnels du numérique

L'événement de référence pour les freelances tech et digitaux.

## Nos conseils pratiques

### Pour bien choisir son espace de travail
1. **Testez avant de vous engager** : La plupart des coworkings proposent des journées d'essai
2. **Vérifiez la connexion internet** : Indispensable pour un freelance
3. **Évaluez l'ambiance** : Certains espaces sont plus silencieux, d'autres plus collaboratifs
4. **Considérez la localisation** : Proximité transports, parking, commerces

### Pour optimiser son networking
1. **Participez régulièrement** aux événements : La régularité crée la confiance
2. **Préparez votre pitch** : 30 secondes pour vous présenter efficacement
3. **Suivez vos contacts** : Connectez-vous sur LinkedIn dans les 48h
4. **Proposez de l'aide** : Le networking gagnant-gagnant fonctionne mieux

## Les nouveautés 2025

### Green Work (Dury)
Ouverture prévue en mars 2025. Coworking éco-responsable avec :
- **50 postes** dans un bâtiment HQE
- **Potager partagé** et terrasse végétalisée
- **Ateliers bien-être** intégrés

### Amiens Startup Week
Nouvelle semaine dédiée à l'entrepreneuriat prévue en juin 2025 avec :
- **Conférences** avec des entrepreneurs nationaux
- **Concours de pitch** avec prix en numéraire
- **Job dating** spécialisé startup

## Ressources utiles

### Applications recommandées
- **Coworker** : Trouver et réserver des espaces de coworking
- **Meetup** : Découvrir les événements professionnels locaux
- **LinkedIn Local** : Networking géolocalisé

### Communautés en ligne
- **Slack Amiens Next** : Notre communauté privée (membres uniquement)
- **Facebook "Freelances Amiens"** : Groupe d'entraide local
- **Discord "Dev Amiens"** : Communauté des développeurs amiénois

## Conclusion

Amiens offre un cadre idéal pour les freelances avec des espaces de qualité et une communauté entrepreneuriale accueillante. La clé du succès ? Sortir de chez soi, tester différents lieux et participer à la vie du réseau local !

Besoin de conseils personnalisés ? N'hésitez pas à nous contacter ou à rejoindre notre prochain événement.

---

*Guide mis à jour en décembre 2024. Tarifs et informations susceptibles d'évoluer.*
    `,
    author: "Marie Dupont",
    date: "8 décembre 2024", 
    readTime: "7 min",
    category: "Pratique",
    image: "/img/blog/freelance-guide.jpg",
    featured: false,
    relatedArticles: [
      "reussir-networking-amiens",
      "entrepreneuriat-amiens-2024"
    ]
  }
};

interface BlogPageProps {
  params: {
    slug: string;
  };
}

export default function BlogArticlePage({ params }: BlogPageProps) {
  const article = blogArticles[params.slug as keyof typeof blogArticles];

  if (!article) {
    notFound();
  }

  return (
    <Layout>
      <Container className="mt-52 z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header de l'article */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="text-sm px-3 py-1 bg-black text-white rounded-full font-epilogue">
                {article.category}
              </span>
              <span className="text-sm text-gray-500 font-epilogue">
                {article.date} • {article.readTime}
              </span>
            </div>
            
            <h1 className="text-3xl lg:text-4xl font-medium text-black mb-6 font-ca-slalom leading-tight">
              {article.title}
            </h1>
            
            <p className="text-lg text-gray-600 font-epilogue leading-relaxed mb-8 max-w-2xl mx-auto">
              {article.excerpt}
            </p>
            
            <div className="flex items-center justify-center gap-4 text-sm text-gray-500 font-epilogue">
              <span>Par {article.author}</span>
            </div>
          </motion.div>

          {/* Image de l'article */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-64 lg:h-96 rounded-2xl overflow-hidden mb-12 bg-gray-200"
          >
            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
              <span className="text-gray-500 font-epilogue">Image à venir</span>
            </div>
          </motion.div>

          {/* Contenu de l'article */}
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="prose prose-lg max-w-none"
          >
            <div 
              className="article-content font-epilogue leading-relaxed"
              dangerouslySetInnerHTML={{ 
                __html: article.content
                  .split('\n')
                  .map(line => {
                    if (line.startsWith('# ')) {
                      return `<h1 class="text-2xl lg:text-3xl font-medium text-black mb-6 font-ca-slalom">${line.slice(2)}</h1>`;
                    }
                    if (line.startsWith('## ')) {
                      return `<h2 class="text-xl lg:text-2xl font-medium text-black mb-4 mt-8 font-ca-slalom">${line.slice(3)}</h2>`;
                    }
                    if (line.startsWith('### ')) {
                      return `<h3 class="text-lg lg:text-xl font-medium text-black mb-3 mt-6 font-ca-slalom">${line.slice(4)}</h3>`;
                    }
                    if (line.startsWith('**') && line.endsWith('**')) {
                      return `<p class="font-semibold text-black mb-4">${line.slice(2, -2)}</p>`;
                    }
                    if (line.startsWith('- ')) {
                      return `<li class="text-gray-700 mb-2">${line.slice(2)}</li>`;
                    }
                    if (line.trim() === '') {
                      return '<br>';
                    }
                    if (line.startsWith('*') && line.endsWith('*')) {
                      return `<p class="text-sm text-gray-500 italic mb-4">${line.slice(1, -1)}</p>`;
                    }
                    if (line.includes('**') && !line.startsWith('**')) {
                      return `<p class="text-gray-700 mb-4">${line.replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-black">$1</strong>')}</p>`;
                    }
                    return `<p class="text-gray-700 mb-4">${line}</p>`;
                  })
                  .join('')
              }}
            />
          </motion.article>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-between items-center pt-12 mt-12 border-t border-gray-200"
          >
            <Link 
              href="/blog" 
              className="flex items-center gap-2 text-black hover:text-gray-600 transition-colors font-epilogue"
            >
              ← Retour au blog
            </Link>
            
            <div className="flex gap-4">
              <Button variant="outline">
                Partager l'article
              </Button>
              <Button>
                Rejoindre le collectif
              </Button>
            </div>
          </motion.div>
        </div>
      </Container>

      {/* Articles similaires */}
      {article.relatedArticles && article.relatedArticles.length > 0 && (
        <section className="py-16 bg-gray-50">
          <Container>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-medium text-black mb-8 font-ca-slalom text-center">
                Articles similaires
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                {article.relatedArticles.map((relatedSlug, index) => {
                  const relatedArticle = blogArticles[relatedSlug as keyof typeof blogArticles];
                  if (!relatedArticle) return null;
                  
                  return (
                    <motion.article
                      key={relatedSlug}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-md transition-shadow duration-300"
                    >
                      <div className="relative h-48 bg-gray-200">
                        <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                          <span className="text-gray-500 font-epilogue text-sm">Image à venir</span>
                        </div>
                      </div>
                      
                      <div className="p-6">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded-full font-epilogue">
                            {relatedArticle.category}
                          </span>
                          <span className="text-xs text-gray-500 font-epilogue">
                            {relatedArticle.readTime}
                          </span>
                        </div>
                        
                        <h3 className="text-lg font-medium text-black mb-3 font-ca-slalom line-clamp-2">
                          {relatedArticle.title}
                        </h3>
                        
                        <p className="text-sm text-gray-600 font-epilogue leading-relaxed mb-4 line-clamp-2">
                          {relatedArticle.excerpt}
                        </p>
                        
                        <Link href={`/blog/${relatedSlug}`}>
                          <Button variant="outline" className="text-sm w-full flex items-center justify-center gap-2">
                            Lire l'article
                            <ArrowRight />
                          </Button>
                        </Link>
                      </div>
                    </motion.article>
                  );
                })}
              </div>
            </div>
          </Container>
        </section>
      )}
    </Layout>
  );
}