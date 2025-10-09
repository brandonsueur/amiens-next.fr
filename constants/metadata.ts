import { Metadata } from "next";
import { project } from "./project";

export const metadata: Metadata = {
  title: project.title,
  description: project.description,
  keywords: project.keywords,
  authors: [{ name: project.siteName }],
  creator: project.siteName,
  publisher: project.siteName,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(project.url),
  openGraph: {
    title: project.title,
    description: project.description,
    url: project.url,
    siteName: project.siteName,
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: project.title,
    description: project.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "verification_token",
  },
};

// Métadonnées spécifiques pour la page Blog
export const blogMetadata: Metadata = {
  title: `Blog - ${project.siteName}`,
  description:
    "Conseils entrepreneuriaux, analyses de marché et portraits d'entrepreneurs amiénois. Découvrez les ressources pour développer votre business à Amiens.",
  keywords: [
    ...project.keywords,
    "blog entrepreneurial",
    "conseils startup Amiens",
    "entrepreneuriat Hauts-de-France",
    "networking Amiens",
    "financement startup",
    "guides entrepreneur",
  ],
  openGraph: {
    title: `Blog - ${project.siteName}`,
    description:
      "Conseils entrepreneuriaux, analyses de marché et portraits d'entrepreneurs amiénois.",
    url: `${project.url}/blog`,
    siteName: project.siteName,
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `Blog - ${project.siteName}`,
    description:
      "Conseils entrepreneuriaux, analyses de marché et portraits d'entrepreneurs amiénois.",
  },
};
