import { Server, Monitor, Code } from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      icon: <Server className="w-16 h-16 text-blue-500" />,
      title: "Administration & Back-office",
      desc: "Création de plateformes sur mesure pour gérer vos contenus, vos utilisateurs ou vos projets simplement et en toute sécurité."
    },
    {
      icon: <Monitor className="w-16 h-16 text-blue-500" />,
      title: "Site vitrine professionnel",
      desc: "Sites modernes, rapides et optimisés, adaptés à votre activité et à vos clients."
    },
    {
      icon: <Code className="w-16 h-16 text-blue-500" />,
      title: "Site web avancé",
      desc: "Solutions web sur mesure pour des besoins spécifiques avec une expérience utilisateur fluide."
    }
  ];

  return (
    <section className="relative bg-gradient-to-b 
    from-[var(--color-darker)] 
    to-[var(--color-dark)] 
 py-24 px-6">
      {/* Glow subtil */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-blue-500/20 blur-[150px] rounded-full pointer-events-none -z-10"></div>

      <h2 className="text-5xl font-bold text-center mb-16 text-white relative z-10">
        Mes services
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 relative z-10">
        {services.map((service, i) => (
          <div
            key={i}
            className="
              group p-8 rounded-2xl
              bg-white/5 backdrop-blur-xl border border-white/10
              shadow-xl shadow-black/30
              transition-all duration-300
              hover:-translate-y-2 hover:shadow-blue-500/30 hover:border-blue-400/30
              animate-fadeInUp
            "
          >
            <div className="flex flex-col items-center text-center">
              <div className="mb-6 transition-transform duration-300 group-hover:scale-110">
                {service.icon}
              </div>

              <h3 className="text-2xl font-semibold text-white mb-3">
                {service.title}
              </h3>

              <p className="text-gray-300 leading-relaxed">
                {service.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
      
    </section>
  );
}