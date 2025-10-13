# Page de Contact Dynamique

Cette documentation explique comment utiliser la page de contact dynamique d'Amiens Next.

## Fonctionnalités

### 1. Formulaire de Contact Standard

- **URL** : `/contact`
- **Usage** : Demandes d'informations générales, questions sur les événements, partenariats, etc.

### 2. Formulaire de Candidature au Collectif

- **URL** : `/contact?type=collectif`
- **Usage** : Candidature pour rejoindre le collectif d'entrepreneurs

### 3. Redirection `/rejoindre`

- **URL** : `/rejoindre`
- **Comportement** : Redirige automatiquement vers `/contact?type=collectif`

## Configuration du Formulaire

Le formulaire utilise **Formspree** avec l'endpoint : `https://formspree.io/f/xwprwneq`

### Données Envoyées

Tous les formulaires envoient :

- `firstName` : Prénom
- `lastName` : Nom
- `email` : Email
- `phone` : Téléphone (optionnel)
- `subject` : Sujet sélectionné
- `message` : Message
- `formType` : Type de formulaire ("contact" ou "collectif")

## Types de Formulaires

### Contact Standard

```typescript
{
  title: "Contactez-nous",
  description: "Vous avez une question, besoin d'informations...",
  submitText: "Envoyer le message",
  defaultSubject: "Demande d'informations",
  placeholder: "Décrivez votre demande...",
  showBusinessInfo: false
}
```

Sujets disponibles :

- Demande d'informations générales
- Question sur les événements
- Partenariat
- Presse / Media
- Autre

### Candidature Collectif

```typescript
{
  title: "Rejoindre le collectif",
  description: "Vous souhaitez rejoindre notre communauté...",
  submitText: "Envoyer ma candidature",
  defaultSubject: "Demande d'adhésion au collectif Amiens Next",
  placeholder: "Présentez-vous, votre activité, vos motivations...",
  showBusinessInfo: true
}
```

Sujets disponibles :

- Candidature entrepreneur
- Candidature freelance
- Candidature dirigeant
- Candidature startup
- Autre candidature

## Composants

### `DynamicContactForm`

Composant principal qui gère les deux types de formulaires.

**Props :**

- `formType?: "contact" | "collectif" | string` - Type de formulaire à afficher

### `JoinCollectifButton`

Bouton réutilisable pour rediriger vers le formulaire de candidature.

**Props :**

- `variant?: "primary" | "secondary" | "outline" | "ghost"` - Style du bouton
- `className?: string` - Classes CSS additionnelles
- `children?: React.ReactNode` - Texte du bouton (défaut: "Rejoindre le collectif")

**Usage :**

```tsx
import { JoinCollectifButton } from "@/components/button";

<JoinCollectifButton variant="outline" />
<JoinCollectifButton>Candidater maintenant</JoinCollectifButton>
```

## Navigation

Le lien "Contact" a été ajouté au menu principal dans `constants/links.ts`.

## États du Formulaire

1. **Formulaire vide** : État initial avec tous les champs à remplir
2. **Soumission en cours** : Bouton désactivé avec texte "Envoi en cours..."
3. **Succès** : Page de confirmation avec message personnalisé selon le type

## Validation

- **Champs obligatoires** : Prénom, Nom, Email, Message
- **Validation email** : Format email standard
- **Téléphone** : Optionnel, format libre

## Personnalisation

Pour ajouter un nouveau type de formulaire, modifier la fonction `getFormConfig()` dans `DynamicContactForm` :

```typescript
case "nouveau-type":
  return {
    title: "Titre personnalisé",
    description: "Description personnalisée",
    submitText: "Texte du bouton",
    defaultSubject: "Sujet par défaut",
    placeholder: "Placeholder du message",
    showBusinessInfo: true/false
  };
```
