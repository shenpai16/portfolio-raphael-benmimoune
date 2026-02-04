import { BadgeCheck, ShieldCheck, Star } from "lucide-react";

export default function OffersSection() {
  const offers = [
    {
      title: "Site Vitrine Essentiel",
      desc: "Un site moderne et responsive pour présenter votre activité en toute simplicité.",
      price: "à partir de 800€",
      items: [
        "1 à 3 pages",
        "Design personnalisé",
        "Optimisation SEO de base",
        "Formulaire de contact"
      ]
    },
    {
      title: "Site Pro & Back-office",
      desc: "Gérez vos contenus, vos utilisateurs ou vos produits grâce à une interface d'administration personnalisée.",
      price: "à partir de 1500€",
      items: [
        "5 à 10 pages",
        "Admin complet",
        "Back-end sécurisé",
        "3 mois de support"
      ]
    },
    {
      title: "Site 100% Sur-Mesure",
      desc: "Un projet complexe, un besoin spécifique ? Je conçois une solution entièrement personnalisée.",
      price: "sur devis",
      items: [
        "Pages illimitées",
        "Fonctionnalités avancées",
        "Design sur-mesure",
        "6 mois de support"
      ]
    }
  ];

  return (
    <section
      id="mes-offres"
      className="relative min-h-screen bg-gradient-to-b 
    from-[var(--color-dark)] 
    to-[var(--color-darker)] 
 py-24 px-6 overflow-hidden"
    >
        
      {/* Glow subtil */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-blue-500/20 blur-[150px] rounded-full pointer-events-none"></div>

      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white relative z-10">
        Mes Offres
      </h2>

      {/* Cartes */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto relative z-10">
        {offers.map((offer, i) => (
          <div
            key={i}
            className="
              group p-8 rounded-2xl
              bg-white/5 backdrop-blur-xl border border-white/10
              shadow-xl shadow-black/30
              transition-all duration-300
              hover:-translate-y-2 hover:shadow-blue-500/30 hover:border-blue-400/30
              animate-fadeInUp
              flex flex-col justify-between
            "
          >
            <div>
              <h3 className="text-2xl font-semibold text-center text-white mb-4">
                {offer.title}
              </h3>

              <p className="text-gray-300 text-center mb-6 leading-relaxed">
                {offer.desc}
              </p>

              <ul className="text-gray-400 space-y-2 text-sm md:text-base">
                {offer.items.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-center text-blue-400 font-semibold text-xl mt-6">
              {offer.price}
            </p>
          </div>
        ))}
      </div>

      {/* Pourquoi me faire confiance */}
      <div className="text-white mt-32 text-center max-w-5xl mx-auto relative z-10">
        <h3 className="text-2xl md:text-3xl font-bold mb-6">
          Pourquoi me faire confiance ?
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-6 text-gray-300">
          <div className="flex flex-col items-center">
            <BadgeCheck className="text-blue-400 w-10 h-10 mb-3" />
            <p className="text-lg">Design sur-mesure, adapté à votre image</p>
          </div>

          <div className="flex flex-col items-center">
            <ShieldCheck className="text-blue-400 w-10 h-10 mb-3" />
            <p className="text-lg">Code propre, sécurisé, et optimisé</p>
          </div>

          <div className="flex flex-col items-center">
            <Star className="text-blue-400 w-10 h-10 mb-3" />
            <p className="text-lg">Accompagnement, conseils & réactivité</p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center mt-16 relative z-10">
        <a
          href="#contact"
          className="
            inline-block px-10 py-4 rounded-xl
            bg-blue-500 hover:bg-blue-600
            text-white font-semibold text-lg
            shadow-lg shadow-blue-500/30
            transition-all duration-300
          "
        >
          Discutons de votre projet
        </a>
      </div>
    </section>
  );
}