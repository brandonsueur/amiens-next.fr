import { project } from "./project";

export type NavigationLink = {
  href: string;
  label: string;
};

export const navigationsLinks: NavigationLink[] = [
  { href: "/collectif", label: "Le Collectif" },
  { href: "/evenements", label: "Événements" },
  { href: "/blog", label: "Blog" },
];

export const footerConfig = {
  contact: project.contact,
  sections: [
    {
      title: "Liens utiles",
      links: [
        {
          label: "Accueil",
          href: "/",
        },
        ...navigationsLinks,
      ],
    },
    {
      title: "Socials",
      links: [
        { label: "Facebook", href: "https://www.facebook.com/amiens_next" },
        {
          label: "Instagram",
          href: "https://www.instagram.com/amiens_next",
        },
        {
          label: "LinkedIn",
          href: "https://www.linkedin.com/in/amiens-next/",
        },
      ],
    },
    {
      title: "Mentions légales",
      links: [
        {
          label: "Mentions légales",
          href: "/mentions-legales",
        },
        {
          label: "Politique de confidentialité",
          href: "/politique-de-confidentialite",
        },
        {
          label: "Conditions d'utilisation",
          href: "/conditions-d-utilisation",
        },
      ],
    },
  ],
  social: project.socials,
};
