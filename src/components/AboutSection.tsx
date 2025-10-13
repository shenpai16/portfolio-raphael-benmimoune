import ProjectCard from "./projects/ProjectCard";
import { projects } from "../data/project";
import TechCarousel from "./ui/TechCarousel";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="min-h-screen bg-[var(--color-darker)] flex justify-center items-stretch"
      style={{ backgroundColor: "rgba(30, 30, 30, 1)" }} // fallback si var non prise en charge
    >
      <div
        className="
          text-[var(--color-charcoal)]
          px-4 sm:px-8 py-16"
      >
        <h2
          className="text-5xl text-white font-bold mb-8 text-center"
        >
          À propos de moi
        </h2>
        <p
          className="
            mx-auto px-6 sm:px-8
            w-full max-w-md sm:max-w-2xl md:max-w-3xl
            text-white text-base sm:text-lg text-center leading-relaxed
            break-words hyphens-auto whitespace-normal
            overflow-hidden
          "
          style={{
            wordBreak: 'break-word',
            overflowWrap: 'anywhere',
            boxSizing: 'border-box',
          }}
        >
  Développeur full stack passionné, je transforme les idées en{" "}
  <span
    className="
      relative inline-block
      after:block after:h-[2px] after:bg-blue-500
      after:w-0 group-hover:after:w-full
      after:transition-[width] after:duration-300 after:ease-out
      "
  >
    expériences web
  </span>{" "}
  qui marquent les esprits. Entre un front-end créatif qui séduit l’œil et un back-end robuste qui assure la performance, je conçois des solutions élégantes, rapides et accessibles à tous. Mon moteur ? Relever chaque défi du web avec curiosité, précision et une bonne dose d’audace, pour donner vie à des projets qui allient esthétique et efficacité.
</p>


        <h2
          className="text-5xl text-white font-bold mt-26 mb-8 text-center"
        >
          Mes compétences 
        </h2>

        <section id="skills" className="py-16 text-white">
          <div className="container mx-auto px-4">
            <TechCarousel />
          </div>
        </section>
        {/* 
          <div className="flex gap-8 justify-center mt-10">
            <RoundedCard>
              <h1 className="text-center text-transparent bg-clip-text bg-gradient-to-r
              from-blue-500 to-blue-200  font-bold">Front-End</h1>
              <div className="flex justify-center gap-6 mt-4">
                <Tooltip text="React">
                  <img src="/assets/react.svg" alt="React" className="w-14 h-14" />
                </Tooltip>
                <Tooltip text="Vue.js">
                  <img src="/assets/Vue.js.svg" alt="Vue.js" className="w-14 h-14" />
                </Tooltip>
                <Tooltip text="Tailwind CSS">
                  <img src="/assets/Tailwind CSS.svg" alt="Tailwind" className="w-14 h-14" />
                </Tooltip>
                <Tooltip text="Vite (outil de build)">
                  <img src="/assets/vite.svg" alt="Vite" className="w-14 h-14" />                
                </Tooltip>
              </div>
            </RoundedCard>

            <RoundedCard>
              <h1 className="text-center text-transparent bg-clip-text bg-gradient-to-r
              from-blue-500 to-blue-200  font-bold">Back-End</h1>
              <div className="flex justify-center gap-6 mt-4">
                <div className="inline-block bg-white rounded-full w-13 h-13 ">
                  <Tooltip text="Symfony (PHP)">
                    <img src="/assets/symfony.svg" alt="Symfony" className="w-14 h-14" />
                  </Tooltip>
                </div>
                <Tooltip text="Api Platform (API REST)">
                  <img src="/assets/apiPlatform.svg" alt="Api Platform" className="w-14 h-14" />
                </Tooltip>
                <Tooltip text="EasyAdmin (Back-office)">
                  <img src="/assets/easyAdmin.webp" alt="EasyAdmin" className="w-14 h-14" />
                </Tooltip>
                <Tooltip text="DevOps (Débutant mais j'apprends vite !)">
                  <img src="/assets/devops-2.svg" alt="PostgreSQL" className="w-14 h-14" />
                </Tooltip>
              </div>
            </RoundedCard>

             

          </div> */}
          {/* Sections Mes Réalisations */}

          <div id="projects" className="flex flex-col gap-8 justify-center items-center mt-36">
            <h2 className="text-5xl text-white font-bold mb-8 text-center">
              Mes réalisations
            </h2>

            {/* Wrapper en grille 3 colonnes max */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center w-full max-w-6xl">
              {projects.map((project, i) => (
                <ProjectCard key={i} {...project} />
              ))}
            </div>
          </div>

        

        </div>
        
    </section>
  );
}
