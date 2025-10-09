# 📋 Guide d'utilisation du système FAQ dynamique

## 🎯 Vue d'ensemble

Le composant FAQ a été refactorisé pour accepter des questions personnalisées via des props, permettant d'avoir des FAQ spécifiques à chaque page du site.

## 🏗️ Structure

### Composant FAQ (`/components/faq/faq.tsx`)

Le composant accepte maintenant ces props :

- `questions` : Array de questions FAQ (optionnel, utilise les questions par défaut si non fourni)
- `title` : Titre de la section (optionnel, "Questions fréquentes" par défaut)
- `subtitle` : Sous-titre de la section (optionnel)

### Données FAQ (`/constants/faq.ts`)

Contient toutes les questions organisées par page :

- `homeFaqData` : Questions pour la page d'accueil
- `collectifFaqData` : Questions spécifiques au collectif
- `evenementsFaqData` : Questions sur les événements
- `servicesFaqData` : Questions sur les services (exemple)

## 🚀 Utilisation

### Import des données

```tsx
import { FAQ } from "@/components/faq";
import { collectifFaqData } from "@/constants/faq";
```

### Utilisation avec questions personnalisées

```tsx
<FAQ
  questions={collectifFaqData}
  title="Questions sur le collectif"
  subtitle="Tout ce que vous devez savoir sur notre communauté"
/>
```

### Utilisation avec les questions par défaut

```tsx
<FAQ />
```

## 📄 Pages configurées

### 🏠 Page d'accueil (`/`)

- **Questions** : `homeFaqData` (5 questions)
- **Focus** : Présentation générale, adhésion, premiers pas
- **Titre** : "Questions fréquentes"

### 👥 Page Collectif (`/collectif`)

- **Questions** : `collectifFaqData` (6 questions)
- **Focus** : Mission, valeurs, fonctionnement, opportunités
- **Titre** : "Questions sur le collectif"

### 📅 Page Événements (`/evenements`)

- **Questions** : `evenementsFaqData` (7 questions)
- **Focus** : Formats, inscriptions, participation, speakers
- **Titre** : "Questions sur nos événements"

## 📝 Questions par page

### 🏠 Page d'accueil

1. Qu'est-ce qu'Amiens Next ?
2. Qui peut rejoindre le collectif ?
3. Comment rejoindre Amiens Next ?
4. Y a-t-il des frais d'adhésion ?
5. Où se déroulent vos événements ?

### 👥 Page Collectif

1. Quelle est la mission d'Amiens Next ?
2. Quelles sont vos valeurs fondamentales ?
3. Combien de membres compte le collectif ?
4. Comment garantissez-vous la qualité des échanges ?
5. Puis-je participer même si je débute ?
6. Y a-t-il des opportunités business concrètes ?

### 📅 Page Événements

1. À quelle fréquence organisez-vous des événements ?
2. Comment s'inscrire aux événements ?
3. Quelle est la durée moyenne d'un événement ?
4. Combien de participants par événement ?
5. Puis-je proposer un sujet de talk ?
6. Y a-t-il un dress code particulier ?
7. Que se passe-t-il si un événement est complet ?

## ➕ Ajouter une nouvelle page

1. **Créer les questions** dans `/constants/faq.ts` :

```tsx
export const nouvellePage FaqData: FAQItem[] = [
  {
    id: "nouvelle-1",
    question: "Ma question ?",
    answer: "Ma réponse..."
  }
];
```

2. **Importer et utiliser** dans la page :

```tsx
import { nouvellePageFaqData } from "@/constants/faq";

<FAQ
  questions={nouvellePageFaqData}
  title="Mon titre personnalisé"
  subtitle="Mon sous-titre"
/>;
```

## 🎨 Personnalisation

Le design reste identique sur toutes les pages :

- ✅ Couleurs cohérentes (noir/gris)
- ✅ Animations Framer Motion
- ✅ Responsive design
- ✅ Accordéons interactifs

## 🔄 Migration

Les anciennes implémentations `<FAQ />` sans props continueront de fonctionner avec les questions par défaut. Migration progressive possible.
