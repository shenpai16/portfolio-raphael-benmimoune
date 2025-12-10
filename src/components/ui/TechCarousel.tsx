import { frontEndTech } from "../../data/frontEndTech";
import backEndTech from "../../data/backEndTech";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { EffectCards } from "swiper/modules";

// Styles Swiper v12
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-cards";

import { useRef } from "react";

export default function TechCarousel() {
  const allTech = [
    ...frontEndTech,
    ...backEndTech(),
  ];

  // Typage explicite des refs pour éviter "never"
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
    <div className="mt-10">
      {/* Desktop & tablette */}
      <div className="hidden md:block w-full px-4 overflow-hidden">
        <Swiper
          className="h-40 pb-16" // hauteur + padding-bottom pour espace sous les slides
          loop={false}
          rewind={true}
          spaceBetween={16}
          speed={800}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          modules={[Autoplay, Pagination]}
          onAutoplayTimeLeft={onAutoPlayTimeLeft}
          breakpoints={{
            0: { slidesPerView: 2, slidesPerGroup: 2, spaceBetween: 8 },
            640: { slidesPerView: 3, slidesPerGroup: 3, spaceBetween: 12 },
            768: { slidesPerView: 4, slidesPerGroup: 4, spaceBetween: 16 },
          }}
          observer={true}
        >
          {allTech.map((tech, index) => (
            <SwiperSlide
              key={`${tech.name}-${index}`}
              className="flex flex-col items-center justify-center"
            >
              <div className="bg-[var(--color-dark)] rounded-full shadow-lg w-20 h-20 flex items-center justify-center">
                <img src={tech.img} alt={tech.name} className="w-14 h-14" />
              </div>
              <p className="mt-2 text-sm text-gray-200 text-center max-w-[80px] truncate">
                {tech.name}
              </p>
            </SwiperSlide>
          ))}

          {/* Autoplay progress */}
          <div
            className="autoplay-progress mt-4 flex flex-col items-center gap-1"
            slot="container-end"
          >
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
              key={`${tech.name}-mobile-${index}`}
              className="!flex !flex-col !items-center !justify-center !bg-[var(--color-dark)] !rounded-xl !w-full !h-full"
            >
              <div className="w-24 h-24 flex items-center justify-center">
                <img
                  src={tech.img}
                  alt={tech.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="mt-4 text-sm text-gray-200 text-center max-w-[120px] truncate">
                {tech.name}
              </p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}