import { Card, CardContent } from "./ui/Card";
import { BadgeCheck, ShieldCheck, Star } from "lucide-react";

export default function OffersSection() {
    return (
        <section 
            id="offers"
            className="min-h-screen bg-[var(--color-darker)] flex justify-center items-stretch py-24">

            <div className="text-[var(--color-charcoal)] px-8 py-16 w-full max-w-6xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-white">
                    Mes Offres
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-auto w-full max-w-6xl px-4">
                    {/* Carte 1 */}
                    <Card className="min-w-[280px] md:min-w-[320px] min-h-[420px]">
                        <CardContent className="flex flex-col justify-between h-full">
                            <h3 className="text-xl md:text-2xl font-semibold text-center">
                                Site Vitrine Essentiel
                            </h3>
                            <p className="text-base md:text-sm text-center text-gray-300">
                                Un site moderne et responsive pour présenter votre activité en toute simplicité.
                            </p>
                            <ul className="text-base md:text-sm list-disc list-inside text-gray-400">
                                <li>1 à 3 pages</li>
                                <li>Design personnalisé</li>
                                <li>Optimisation SEO de base</li>
                                <li>Formulaire de contact</li>
                            </ul>
                            <p className="text-lg md:text-base text-center font-semibold text-blue-400 mt-4">
                                à partir de 800€
                            </p>
                        </CardContent>
                    </Card>

                    {/* Carte 2 */}
                    <Card className="min-w-[280px] md:min-w-[320px] min-h-[420px]">
                        <CardContent className="flex flex-col justify-between h-full">
                            <h3 className="text-xl md:text-2xl font-semibold text-center">
                                Site Pro & Back-office
                            </h3>
                            <p className="text-base md:text-sm text-center text-gray-300">
                                Gérez vos contenus, vos utilisateurs ou vos produits grâce à une interface d'administration personnalisée.
                            </p>
                            <ul className="text-base md:text-sm list-disc list-inside text-gray-400">
                                <li>5 à 10 pages</li>
                                <li>Admin complet</li>
                                <li>Back-end sécurisé</li>
                                <li>3 mois de support</li>
                            </ul>
                            <p className="text-lg md:text-base text-center font-semibold text-blue-400 mt-4">
                                à partir de 1500€
                            </p>
                        </CardContent>
                    </Card>

                    {/* Carte 3 */}
                    <Card className="min-w-[280px] md:min-w-[320px] min-h-[420px]">
                        <CardContent className="flex flex-col justify-between h-full">
                            <h3 className="text-xl md:text-2xl font-semibold text-center">
                                Site 100% Sur-Mesure
                            </h3>
                            <p className="text-base md:text-sm text-center text-gray-300">
                                Un projet complexe, un besoin spécifique ? Je conçois une solution entièrement personnalisée.
                            </p>
                            <ul className="text-base md:text-sm list-disc list-inside text-gray-400">
                                <li>Pages illimitées</li>
                                <li>Fonctionnalités avancées</li>
                                <li>Design sur-mesure</li>
                                <li>6 mois de support</li>
                            </ul>
                            <p className="text-lg md:text-base text-center font-semibold text-blue-400 mt-4">
                                sur devis.
                            </p>
                        </CardContent>
                    </Card>
                </div>

                {/* Section Pourquoi me faire confiance */}
                <div className="text-white mt-48 text-center max-w-6xl mx-auto px-16">
                    <h3 className="text-2xl md:text-3xl font-bold mb-4">
                        Pourquoi me faire confiance ?
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6 text-base md:text-sm text-gray-300">
                        <div>
                            <BadgeCheck className="mx-auto text-blue-400 w-8 h-8 mb-2" />
                            Design sur-mesure, adapté à votre image
                        </div>
                        <div>
                            <ShieldCheck className="mx-auto text-blue-400 w-8 h-8 mb-2" />
                            Code propre, sécurisé, et optimisé
                        </div>
                        <div>
                            <Star className="mx-auto text-blue-400 w-8 h-8 mb-2" />
                            Accompagnement, conseils & réactivité
                        </div>
                    </div>
                </div>

                {/* Bouton */}
                <div className="text-center mt-12">
                    <a
                        href="#contact"
                        className="inline-block bg-blue-500 text-white font-semibold px-8 py-4 rounded-lg hover:bg-blue-600 transition text-lg md:text-base"
                    >
                        Discutons de votre projet
                    </a>
                </div>
            </div>
        </section>
    );
}
