import { frontEndTech } from "../../data/frontEndTech";
import backEndTech from "../../data/backEndTech";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectCards } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-cards";

import { useRef } from "react";

export default function TechCarousel() {
  const allTech = [...frontEndTech, ...backEndTech()];

  const progressCircle = useRef<SVGSVGElement | null>(null);
  const progressContent = useRef<HTMLSpanElement | null>(null);

  const onAutoPlayTimeLeft = (_: unknown, time: number, progress: number) => {
    if (progressCircle.current) {
      progressCircle.current.style.setProperty("--progress", String(1 - progress));
    }
    if (progressContent.current) {
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    }
  };

  return (
    <div className="mt-16">
      {/* Desktop */}
      <div className="hidden md:block w-full px-4 overflow-visible">
        <Swiper
          className="h-48 pb-16"
          loop={false}
          rewind={true}
          spaceBetween={24}
          speed={800}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          modules={[Autoplay, Pagination]}
          onAutoplayTimeLeft={onAutoPlayTimeLeft}
          breakpoints={{
            0: { slidesPerView: 2, slidesPerGroup: 2 },
            640: { slidesPerView: 3, slidesPerGroup: 3 },
            768: { slidesPerView: 4, slidesPerGroup: 4 },
            1024: { slidesPerView: 5, slidesPerGroup: 5 },
          }}
        >
          {allTech.map((tech, index) => (
            <SwiperSlide key={index}>
              <div
                className="
                  group relative flex flex-col items-center justify-center
                  transition-transform duration-300
                  hover:-translate-y-2 hover:rotate-1
                  animate-fadeIn
                "
              >
                <div
                  className="
                    w-20 h-20 rounded-2xl flex items-center justify-center
                    bg-white/5 backdrop-blur-md border border-white/10
                    shadow-lg shadow-black/40
                    group-hover:shadow-blue-500/30 group-hover:border-blue-400/30
                    transition-all duration-300
                  "
                >
                  <img src={tech.img} alt={tech.name} className="w-14 h-14" />
                </div>

                <p className="mt-3 text-sm text-gray-200 text-center max-w-[90px]">
                  {tech.name}
                </p>
              </div>
            </SwiperSlide>
          ))}

          {/* Progress circle */}
          <div className="autoplay-progress mt-4 flex flex-col items-center gap-1" slot="container-end">
            <svg viewBox="0 0 48 48" ref={progressCircle} className="w-8 h-8">
              <circle cx="24" cy="24" r="20"></circle>
            </svg>
            <span ref={progressContent} className="text-sm text-gray-200"></span>
          </div>
        </Swiper>
      </div>

      {/* Mobile */}
      <div className="md:hidden w-full h-[400px] flex items-center justify-center">
        <Swiper
          effect="cards"
          grabCursor={true}
          modules={[EffectCards]}
          className="w-[260px] h-[320px]"
        >
          {allTech.map((tech, index) => (
            <SwiperSlide
              key={index}
              className="
                !flex !flex-col !items-center !justify-center
                !bg-white/5 !backdrop-blur-md !border !border-white/10
                !rounded-2xl !shadow-xl
                !transition !duration-300
                !active:scale-95
              "
            >
              <div className="w-24 h-24 flex items-center justify-center">
                <img src={tech.img} alt={tech.name} className="w-full h-full object-contain" />
              </div>
              <p className="mt-4 text-sm text-gray-200 text-center max-w-[120px]">
                {tech.name}
              </p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}