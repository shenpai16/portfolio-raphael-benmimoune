import { Card, CardContent } from "./ui/Card";
import { Server, Monitor, Code } from "lucide-react";

export default function ServicesSection() {
  return (
    <section className="bg-[var(--color-darker)] flex justify-center items-stretch pt-24 pb-12">
      <div className="text-[var(--color-charcoal)] px-8 py-16">
        <h2 className="text-5xl font-bold text-center mb-12 text-white">
          Mes services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="bg-[var(--color-dark)] text-white">
            <CardContent className="flex flex-col items-center p-8">
              <Server className="w-16 h-16 mb-4 text-blue-500" />
              <h3 className="text-2xl font-semibold mb-2 text-center">
                Administration & Back-office
              </h3>
              <p className="text-center">
                Création de plateformes sur mesure pour gérer vos contenus, vos utilisateurs ou vos projets simplement et en toute sécurité.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-[var(--color-dark)] text-white">
            <CardContent className="flex flex-col items-center p-8">
              <Monitor className="w-16 h-16 mb-4 text-blue-500" />
              <h3 className="text-2xl font-semibold mb-2 text-center">
                Site vitrine professionnel
              </h3>
              <p className="text-center">
                Sites modernes, rapides et optimisés, adaptés à votre activité et à vos clients.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-[var(--color-dark)] text-white">
            <CardContent className="flex flex-col items-center p-8">
              <Code className="w-16 h-16 mb-4 text-blue-500" />
              <h3 className="text-2xl font-semibold mb-2 text-center">
                Site web avancé
              </h3>
              <p className="text-center">
                Solutions web sur mesure pour des besoins spécifiques avec une expérience utilisateur fluide.
              </p>
            </CardContent>
          </Card>
        </div>

      </div>
    </section>
  );
}
