import { Layout } from "@/components/layout";
import { Container } from "@/components/container";
import { Button } from "@/components/button";

export default function BlogPage() {
  return (
    <Layout>
      <Container className="mt-52 z-10">
        <div className="text-center max-w-4xl mx-auto">
          <span className="text-sm font-semibold text-gray-600 mb-4 block">
            Ressources entrepreneuriales
          </span>
          <h1 className="text-4xl text-black lg:text-5xl font-medium mb-4 font-ca-slalom">
            Le Blog Amiens Next
          </h1>
          <p className="text-md text-black font-epilogue leading-relaxed mb-12 max-w-2xl mx-auto">
            Conseils pratiques et retours d'expérience pour votre parcours
            entrepreneurial.
          </p>
        </div>
      </Container>

      <section className="py-16 bg-white">
        <Container>
          <div className="mb-12 text-center">
            <h2 className="text-2xl font-medium text-black mb-4 font-ca-slalom">
              Articles récents
            </h2>
            <p className="text-gray-600 font-epilogue">
              Découvrez nos contenus créés avec des fichiers Markdown
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white border border-gray-200 rounded-2xl p-8 mb-8">
              <h3 className="text-2xl font-medium text-black mb-4 font-ca-slalom">
                L'entrepreneuriat à Amiens en 2024
              </h3>
              <p className="text-gray-600 font-epilogue leading-relaxed mb-6">
                Retour sur une année riche en innovations dans la métropole
                amiénoise.
              </p>
              <Button>Lire l'article</Button>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border border-gray-200 rounded-2xl p-6">
                <h4 className="text-lg font-medium text-black mb-3 font-ca-slalom">
                  Guide du freelance à Amiens
                </h4>
                <p className="text-sm text-gray-600 font-epilogue mb-4">
                  Les meilleurs espaces de coworking et lieux de networking.
                </p>
                <Button variant="outline">Lire</Button>
              </div>

              <div className="bg-white border border-gray-200 rounded-2xl p-6">
                <h4 className="text-lg font-medium text-black mb-3 font-ca-slalom">
                  Conseils networking
                </h4>
                <p className="text-sm text-gray-600 font-epilogue mb-4">
                  Comment maximiser ses opportunités dans l'écosystème amiénois.
                </p>
                <Button variant="outline">Lire</Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 bg-gray-50">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <h2 className="text-2xl font-medium text-black mb-4 font-ca-slalom">
                🚀 Blog avec Markdown
              </h2>
              <p className="text-gray-600 font-epilogue mb-6">
                Notre blog utilise des fichiers Markdown statiques pour une
                gestion simple et performante.
              </p>
              <Button>Voir la documentation</Button>
            </div>
          </div>
        </Container>
      </section>
    </Layout>
  );
}
