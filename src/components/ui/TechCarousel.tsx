import { useEffect, useRef } from "react";
import { frontEndTech } from "../../data/frontEndTech";
import backEndTech from "../../data/backEndTech";
import RoundedCard from "./RoundedCard";
import Tooltip from "../Tooltip";

export default function TechCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let offset = 0;
    const speed = 0.5; // pixels par frame
    let animationFrame: number;

    const autoScroll = () => {
      offset += speed;
      // Safari iOS préfère translate3d pour activer le GPU
      container.style.transform = `translate3d(-${offset}px, 0, 0)`;

      // reset quand on a parcouru la moitié du contenu (boucle infinie)
      if (offset >= container.scrollWidth / 2) {
        offset = 0;
      }

      animationFrame = requestAnimationFrame(autoScroll);
    };

    animationFrame = requestAnimationFrame(autoScroll);
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  const allTech = [...frontEndTech, ...backEndTech()];
  // duplication pour créer un effet infini
  const loopTech = [...allTech, ...allTech];

  return (
    <div className="mt-10">
      {/* Desktop */}
      <div className="hidden md:flex gap-8 justify-center mt-10 max-w-[1400px] mx-auto">
        {/* Front-End */}
        <RoundedCard>
          <h1 className="text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-200 font-bold">
            Front-End
          </h1>
          <div className="flex justify-center gap-6 mt-4">
            {frontEndTech.map((tech) => (
              <Tooltip key={tech.name} text={tech.name}>
                <img
                  src={typeof tech.img === "string" ? tech.img : Object.values(tech.img)[0]}
                  alt={tech.name}
                  className="w-14 h-14"
                />
              </Tooltip>
            ))}
          </div>
        </RoundedCard>

        {/* Back-End */}
        <RoundedCard>
          <h1 className="text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-200 font-bold">
            Back-End
          </h1>
          <div className="flex justify-center gap-6 mt-4">
            {backEndTech().map((tech) => (
              <Tooltip key={tech.name} text={tech.name}>
                <img
                  src={typeof tech.img === "string" ? tech.img : Object.values(tech.img)[0]}
                  alt={tech.name}
                  className="w-14 h-14"
                />
              </Tooltip>
            ))}
          </div>
        </RoundedCard>
      </div>

      {/* Mobile Carousel */}
      <div className="md:hidden overflow-hidden px-4">
        {/* wrapper fixe */}
        <div
          ref={scrollRef}
          className="flex gap-6 will-change-transform"
        >
          {loopTech.map((tech, index) => (
            <div
              key={`${tech.name}-${index}`}
              className="flex-shrink-0 flex flex-col items-center"
            >
              <div className="bg-[var(--color-dark)] rounded-full p-4 shadow-lg">
                <img
                  src={typeof tech.img === "string" ? tech.img : Object.values(tech.img)[0]}
                  alt={tech.name}
                  className="w-14 h-14"
                />
              </div>
              <p className="mt-2 text-sm text-gray-200">{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}