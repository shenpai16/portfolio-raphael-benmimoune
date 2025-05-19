import RoundedCard from "./RoundedCard";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="min-h-screen bg-[var(--color-darker)] flex justify-center items-stretch"
      style={{ backgroundColor: "rgba(30, 30, 30, 1)" }} // fallback si var non prise en charge
    >
      <div
        className="flex flex-col
          w-[calc(100vw-4rem)]  /* presque toute la largeur, 2rem (32px) de marge totale */
          max-w-[1200px]        /* largeur max pour pas que ce soit trop grand */
          border-l border-r border-white border-opacity-80
          bg-[var(--color-dark)] text-[var(--color-charcoal)]
          px-8 py-16"
      >
        <h2
          className="text-5xl text-white font-bold mb-8 text-center"
        >
          À propos de moi
        </h2>
        <p className="max-w-3xl text-white text-lg text-center leading-relaxed mx-auto"
        >
          Je suis un développeur full stack passionné, récemment diplômé, prêt à relever tous les défis du web. J’aime concevoir des solutions élégantes, performantes, et accessibles. Entre front-end créatif et back-end solide, mon objectif est de donner vie à des idées.
        </p>

        <RoundedCard>
        <img
          src="/ton-image.jpg"
          alt="Profil"
          className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
        />

      </RoundedCard>
      </div>
    </section>
  );
}
