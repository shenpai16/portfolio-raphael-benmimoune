import ProjectCard from "./projects/ProjectCard";
import { projects } from "../data/project";
import TechCarousel from "./ui/TechCarousel";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="
        relative min-h-screen flex flex-col justify-center items-center 
        bg-gradient-to-b from-[var(--color-dark)] to-[var(--color-darker)]
        overflow-hidden
      "
    >
      {/* Glow bleu subtil */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-500/20 blur-[150px] rounded-full"></div>
      </div>

      <div className="relative z-10 px-4 sm:px-8 py-20 text-white">
        <h2 className="text-5xl font-bold mb-8 text-center">
          À propos de moi
        </h2>

        <p
          className="
            mx-auto px-6 sm:px-8
            w-full max-w-md sm:max-w-2xl md:max-w-3xl
            text-base sm:text-lg text-center leading-relaxed
          "
        >
          Développeur full stack passionné, je transforme les idées en{" "}
          <span
            className="
              relative inline-block
              after:block after:h-[2px] after:bg-blue-500
              after:w-0 hover:after:w-full
              after:transition-all after:duration-300
            "
          >
            expériences web
          </span>{" "}
          qui marquent les esprits. Entre un front-end créatif et un back-end
          robuste, je conçois des solutions élégantes, rapides et accessibles.
        </p>

        <h2 className="text-5xl font-bold mt-24 mb-8 text-center">
          Mes compétences
        </h2>

        <section id="competences" className="py-16">
          <div className="container mx-auto px-4">
            <TechCarousel />
          </div>
        </section>

        <div
          id="projets"
          className="flex flex-col gap-8 justify-center items-center mt-36"
        >
          <h2 className="text-5xl font-bold mb-8 text-center">
            Mes réalisations
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
            {projects.map((project, i) => (
              <ProjectCard key={i} {...project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}