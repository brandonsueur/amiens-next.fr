# 📝 Système de Blog Markdown pour Amiens Next

## 🎯 Vue d'ensemble

Votre blog utilise maintenant un système moderne basé sur des **fichiers Markdown statiques** avec :

- ✅ **SEO optimisé** (métadonnées dynamiques)
- ✅ **Performance maximale** (génération statique)
- ✅ **Gestion simple** (fichiers Markdown)
- ✅ **Typage TypeScript** complet
- ✅ **Design cohérent** avec le site

## 📁 Structure des fichiers

```
content/
└── blog/
    ├── entrepreneuriat-amiens-2024.md
    ├── guide-freelance-amiens.md
    └── networking-amiens-conseils.md

lib/
└── blog.ts (utilitaires)

app/
└── blog/
    ├── page.tsx (liste des articles)
    └── [slug]/
        └── page.tsx (article individuel)
```

## ✍️ Créer un nouvel article

### 1. Créer le fichier Markdown

Créez un nouveau fichier dans `content/blog/mon-article.md` :

```markdown
---
title: "Mon titre d'article"
excerpt: "Description courte pour les réseaux sociaux et la liste des articles"
author: "Votre Nom"
date: "2024-12-20"
readTime: "5 min"
category: "Pratique"
image: "/img/blog/mon-image.jpg"
featured: false
tags: ["entrepreneuriat", "amiens", "startup"]
seo:
  title: "Titre SEO optimisé - Amiens Next"
  description: "Description SEO de 150-160 caractères pour Google"
  keywords: ["mot-clé 1", "mot-clé 2", "amiens entrepreneuriat"]
---

# Mon Article

Contenu de votre article en Markdown...

## Sous-titre

- Liste à puces
- **Texte en gras**
- _Texte en italique_

### Sous-sous-titre

> Citation en bloc

**Points importants :**

- Point 1
- Point 2

## Conclusion

Votre conclusion...
```

### 2. Métadonnées importantes

| Champ             | Type    | Description                                       |
| ----------------- | ------- | ------------------------------------------------- |
| `title`           | string  | Titre principal (50-60 caractères)                |
| `excerpt`         | string  | Description courte (150-160 caractères)           |
| `author`          | string  | Nom de l'auteur                                   |
| `date`            | string  | Format YYYY-MM-DD                                 |
| `readTime`        | string  | Ex: "5 min", "10 min"                             |
| `category`        | string  | "Analyse", "Pratique", "Networking", etc.         |
| `featured`        | boolean | `true` pour article à la une                      |
| `tags`            | array   | Mots-clés pour articles connexes                  |
| `seo.title`       | string  | Titre optimisé SEO (différent du titre si besoin) |
| `seo.description` | string  | Meta description (150-160 caractères)             |
| `seo.keywords`    | array   | Mots-clés SEO                                     |

## 🎨 Stylisation du contenu

Le contenu Markdown est automatiquement stylisé avec :

- **Titres** : Police `font-ca-slalom`
- **Texte** : Police `font-epilogue`
- **Couleurs** : Cohérentes avec la charte graphique
- **Espacement** : Optimisé pour la lecture

### Éléments supportés

````markdown
# Titre 1 (H1)

## Titre 2 (H2)

### Titre 3 (H3)

**Texte en gras**
_Texte en italique_

- Liste à puces

1. Liste numérotée

> Citation

[Lien](https://example.com)

`Code inline`

```code
Bloc de code
```
````

```

## 🔧 Fonctionnalités avancées

### Articles connexes automatiques

Le système suggère automatiquement des articles similaires basés sur :
- Tags communs
- Catégorie similaire
- Articles récents

### Génération automatique des catégories

Les catégories sont générées automatiquement à partir des articles existants avec comptage.

### SEO automatique

- **Métadonnées** générées automatiquement
- **URLs propres** (`/blog/mon-slug`)
- **Sitemap** généré automatiquement
- **Structured data** pour les moteurs de recherche

## 📊 Optimisations de performance

- ✅ **Génération statique** (SSG)
- ✅ **Pas de base de données** requise
- ✅ **Cache automatique**
- ✅ **Lazy loading** des images
- ✅ **Minification** automatique

## 🚀 Workflow de publication

1. **Créer** le fichier Markdown dans `content/blog/`
2. **Commit** et push sur le repository
3. **Déployment automatique** via Vercel/Netlify
4. **Article disponible** immédiatement

## 📱 Features du blog

### Page principale (`/blog`)
- ✅ Article à la une (featured: true)
- ✅ Liste des articles par catégorie
- ✅ Filtres par catégorie
- ✅ Newsletter
- ✅ FAQ dédiée
- ✅ Call-to-action

### Page article (`/blog/[slug]`)
- ✅ Contenu Markdown stylisé
- ✅ Métadonnées SEO automatiques
- ✅ Tags
- ✅ Articles connexes
- ✅ Navigation retour
- ✅ Boutons de partage

## 🎯 Bonnes pratiques

### Pour le SEO
- **Titre** : 50-60 caractères
- **Description** : 150-160 caractères
- **URL** : slug court et descriptif
- **Mots-clés** : 5-10 tags pertinents

### Pour la performance
- **Images** : Optimisées et au format WebP si possible
- **Contenu** : Structuré avec des titres H2/H3
- **Longueur** : 800-2000 mots idéalement

### Pour l'expérience utilisateur
- **Temps de lecture** : Realistic (250 mots/minute)
- **Excerpt** : Accrocheur et informatif
- **Structure** : Paragraphes courts, listes à puces

## 🛠️ Maintenance

### Ajouter une nouvelle catégorie
Les catégories sont automatiques, il suffit d'utiliser une nouvelle catégorie dans un article.

### Modifier un article existant
Éditez directement le fichier Markdown correspondant.

### Supprimer un article
Supprimez le fichier `.md` correspondant.

## 📈 Analytics et insights

Le système est compatible avec :
- **Google Analytics**
- **Google Search Console**
- **Plausible Analytics**
- **Fathom Analytics**

---

**🎉 Votre blog est maintenant prêt !**

Commencez par créer votre premier article dans `content/blog/` et regardez la magie opérer ! ✨
```
