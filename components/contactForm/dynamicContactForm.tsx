"use client";

import { useState } from "react";
import { Container } from "../container";
import { PageTitle } from "../pageTitle";
import { Button } from "../button";
import { MapPoint, Phone, At } from "@/icons";
import { project } from "@/constants/project";

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  formType?: string;
}

interface DynamicContactFormProps {
  formType?: "contact" | "collectif" | string;
}

const getFormConfig = (type: string) => {
  switch (type) {
    case "collectif":
      return {
        title: "Rejoindre le collectif",
        description: "Vous souhaitez rejoindre notre communauté d'entrepreneurs, freelances et dirigeants ? Présentez-vous et dites-nous en plus sur votre activité.",
        submitText: "Envoyer ma candidature",
        defaultSubject: "Demande d'adhésion au collectif Amiens Next",
        placeholder: "Présentez-vous, votre activité, vos motivations pour rejoindre le collectif...",
        showBusinessInfo: true
      };
    default:
      return {
        title: "Contactez-nous",
        description: "Vous avez une question, besoin d'informations ou souhaitez en savoir plus sur nos services ? N'hésitez pas à nous contacter, nous vous répondrons rapidement.",
        submitText: "Envoyer le message",
        defaultSubject: "Demande d'informations",
        placeholder: "Décrivez votre demande...",
        showBusinessInfo: false
      };
  }
};

const initialFormData: ContactFormData = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

export function DynamicContactForm({ formType = "contact" }: DynamicContactFormProps) {
  const [formData, setFormData] = useState<ContactFormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const config = getFormConfig(formType);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Préparer les données avec le type de formulaire
      const dataToSend = {
        ...formData,
        formType,
        subject: formData.subject || config.defaultSubject,
      };

      const response = await fetch("https://formspree.io/f/xwprwneq", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSend),
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        throw new Error("Erreur lors de l'envoi");
      }
    } catch (error) {
      console.error("Erreur:", error);
      alert("Une erreur est survenue. Veuillez réessayer.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <section className="py-16 px-6 mt-32 min-h-screen flex items-center">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
              <svg
                className="w-10 h-10 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-black mb-4 font-ca-slalom">
              {formType === "collectif" ? "Candidature envoyée !" : "Message envoyé avec succès !"}
            </h1>
            <p className="text-gray-600 text-lg mb-8 font-epilogue">
              {formType === "collectif" 
                ? "Merci pour votre candidature. Nous examinerons votre demande et vous contacterons prochainement."
                : "Merci pour votre message. Nous vous contacterons dans les plus brefs délais."
              }
            </p>
            <Button onClick={() => (window.location.href = "/")}>
              Retour à l&apos;accueil
            </Button>
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section className="py-16 px-6 mt-32">
      <Container>
        <div className="mx-auto">
          <PageTitle
            title={config.title}
            description={config.description}
          />

          <div className="grid lg:grid-cols-3 gap-12 mt-12">
            {/* Informations de contact */}
            <div className="space-y-8">
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <h3 className="text-xl font-bold text-black mb-6 font-ca-slalom">
                  Nos coordonnées
                </h3>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center shrink-0">
                      <MapPoint size="20" color="#2563eb" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-black font-ca-slalom">
                        Adresse
                      </h4>
                      <p className="text-gray-600 text-sm font-epilogue">
                        {project.contact.address}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center shrink-0">
                      <Phone size="20" color="#16a34a" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-black font-ca-slalom">
                        Téléphone
                      </h4>
                      <a
                        href={`tel:${project.contact.phone}`}
                        className="text-gray-600 text-sm font-epilogue hover:text-blue-600 transition-colors"
                      >
                        {project.contact.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center shrink-0">
                      <At size="20" color="#9333ea" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-black font-ca-slalom">
                        Email
                      </h4>
                      <a
                        href={`mailto:${project.contact.email}`}
                        className="text-gray-600 text-sm font-epilogue hover:text-blue-600 transition-colors"
                      >
                        {project.contact.email}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {formType !== "collectif" && (
                <div className="bg-blue-50 rounded-2xl p-8 border border-blue-100">
                  <h3 className="text-xl font-bold text-black mb-4 font-ca-slalom">
                    Événements
                  </h3>
                  <p className="text-gray-600 text-sm font-epilogue mb-4">
                    Participez à nos événements de networking et découvrez notre communauté.
                  </p>
                  <Button
                    onClick={() => (window.location.href = "/evenements")}
                    variant="outline"
                    className="w-full"
                  >
                    Voir les événements
                  </Button>
                </div>
              )}
            </div>

            {/* Formulaire de contact */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <h3 className="text-xl font-bold text-black mb-6 font-ca-slalom">
                  {formType === "collectif" ? "Votre candidature" : "Envoyez-nous un message"}
                </h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <input
                    type="hidden"
                    name="_form_type"
                    value={formType}
                  />
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="firstName"
                        className="block text-sm font-semibold text-black mb-2 font-ca-slalom"
                      >
                        Prénom *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors font-epilogue"
                        placeholder="Votre prénom"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="lastName"
                        className="block text-sm font-semibold text-black mb-2 font-ca-slalom"
                      >
                        Nom *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors font-epilogue"
                        placeholder="Votre nom"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-semibold text-black mb-2 font-ca-slalom"
                      >
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors font-epilogue"
                        placeholder="votre@email.com"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-semibold text-black mb-2 font-ca-slalom"
                      >
                        Téléphone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors font-epilogue"
                        placeholder="06 12 34 56 78"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-semibold text-black mb-2 font-ca-slalom"
                    >
                      Sujet
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors font-epilogue"
                    >
                      <option value="">{config.defaultSubject}</option>
                      {formType === "collectif" ? (
                        <>
                          <option value="Candidature entrepreneur">Candidature entrepreneur</option>
                          <option value="Candidature freelance">Candidature freelance</option>
                          <option value="Candidature dirigeant">Candidature dirigeant</option>
                          <option value="Candidature startup">Candidature startup</option>
                          <option value="Autre candidature">Autre candidature</option>
                        </>
                      ) : (
                        <>
                          <option value="Demande d'informations générales">Demande d'informations générales</option>
                          <option value="Question sur les événements">Question sur les événements</option>
                          <option value="Partenariat">Partenariat</option>
                          <option value="Presse / Media">Presse / Media</option>
                          <option value="Autre">Autre</option>
                        </>
                      )}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold text-black mb-2 font-ca-slalom"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors font-epilogue resize-vertical"
                      placeholder={config.placeholder}
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-1"
                    >
                      {isSubmitting ? "Envoi en cours..." : config.submitText}
                    </Button>

                    {formType !== "collectif" && (
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => (window.location.href = "/contact?type=collectif")}
                        className="flex-1"
                      >
                        Rejoindre le collectif
                      </Button>
                    )}
                  </div>

                  <p className="text-sm text-gray-500 font-epilogue">
                    * Champs obligatoires. Vos données sont protégées et ne
                    seront utilisées que pour vous contacter.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}