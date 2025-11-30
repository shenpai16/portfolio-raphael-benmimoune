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
        <div className="marquee">
          {/* Bande 1 */}
          {allTech.map((tech) => (
            <div key={`a-${tech.name}`} className="inline-block mx-4 text-center">
              <div className="bg-[var(--color-dark)] rounded-full p-4 shadow-lg inline-block">
                <img
                  src={typeof tech.img === "string" ? tech.img : Object.values(tech.img)[0]}
                  alt={tech.name}
                  className="w-14 h-14"
                />
              </div>
              <p className="mt-2 text-sm text-gray-200">{tech.name}</p>
            </div>
          ))}

          {/* Bande 2 */}
          {allTech.map((tech) => (
            <div key={`b-${tech.name}`} className="inline-block mx-4 text-center">
              <div className="bg-[var(--color-dark)] rounded-full p-4 shadow-lg inline-block">
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