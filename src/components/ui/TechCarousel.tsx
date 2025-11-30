import { frontEndTech } from "../../data/frontEndTech";
import backEndTech from "../../data/backEndTech";
import RoundedCard from "./RoundedCard";
import Tooltip from "../Tooltip";

export default function TechCarousel() {
  const allTech = [...frontEndTech, ...backEndTech()];

  return (
    <div className="mt-10">
      {/* Desktop */}
      <div className="hidden md:flex gap-8 justify-center mt-10 max-w-[1400px] mx-auto">
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
        <div className="flex marquee w-[200%]">
          {/* Bande 1 */}
          <div className="flex gap-6 w-1/2">
            {allTech.map((tech) => (
              <div key={`a-${tech.name}`} className="flex-shrink-0 flex flex-col items-center">
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

          {/* Bande 2 (copie pour effet infini) */}
          <div className="flex gap-6 w-1/2">
            {allTech.map((tech) => (
              <div key={`b-${tech.name}`} className="flex-shrink-0 flex flex-col items-center">
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
    </div>
  );
}