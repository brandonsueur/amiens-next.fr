import type { Metadata } from "next";
import { DynamicContactForm } from "@/components/contactForm";
import { metadata as generateMetadata } from "@/utils/metadata";
import { Layout } from "@/components/layout";

export const metadata: Metadata = generateMetadata(
  "Contact",
  "Contactez l'équipe d'Amiens Next. Rejoignez notre collectif d'entrepreneurs, freelances et dirigeants de la région amiénoise."
);

interface PageProps {
  searchParams: { [key: string]: string | string[] | undefined };
}

export default function ContactPage({ searchParams }: PageProps) {
  const formType = searchParams?.type as string;

  return (
    <Layout>
      <DynamicContactForm formType={formType} />;
    </Layout>
  );
}
