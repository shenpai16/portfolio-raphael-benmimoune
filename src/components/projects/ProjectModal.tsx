import { useEffect, useState, useRef, useCallback } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

type Slide = { src: string; caption: string };
type ProjectModalProps = { slides: Slide[]; onClose: () => void };

export default function ProjectModal({ slides, onClose }: ProjectModalProps) {
  const [current, setCurrent] = useState(0);
  const modalRef = useRef<HTMLDivElement>(null);

  const prevSlide = useCallback(() =>
    setCurrent((p) => (p === 0 ? slides.length - 1 : p - 1)), [slides.length]);
  const nextSlide = useCallback(() =>
    setCurrent((p) => (p === slides.length - 1 ? 0 : p + 1)), [slides.length]);

  const touchStart = useRef<number | null>(null);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStart.current = e.touches[0].clientX;
  }

  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStart.current === null) return;
    
    const diff = e.changedTouches[0].clientX - touchStart.current;
    if (diff > 50) prevSlide();
    else if (diff < -50) nextSlide();

    touchStart.current = null;
  }

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prevSlide();
      if (e.key === "ArrowRight") nextSlide();
    };
    document.addEventListener("keydown", onKey);
    
    document.body.classList.add("overflow-hidden");
    document.documentElement.classList.add("overflow-hidden");
    
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.classList.remove("overflow-hidden");
      document.documentElement.classList.remove("overflow-hidden");
    };
  }, [onClose, prevSlide, nextSlide]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return (
  <div className="fixed top-0 left-0 w-full h-full z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-md">

      {/* Backdrop amélioré */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-md transition-opacity z-[9998]"
        onClick={onClose}
      />

      {/* Contenu */}
      <div
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
        className="
          relative z-[10000]
          w-[95vw] max-w-[1600px] h-[90vh]
          mx-auto p-4 sm:p-8
          rounded-2xl bg-black/40 backdrop-blur-xl border border-white/10
          shadow-2xl shadow-black/40
          flex flex-col justify-center
          animate-fadeIn
        "
      >
        {/* Bouton fermer */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Fermer"
          className="
          absolute top-4 right-4 z-[10001]
          cursor-pointer transition

          /* Mobile : bouton très visible */
          bg-blue-500 text-white p-3 rounded-full shadow-lg

          /* Desktop : bouton plus discret */
          md:bg-white/10 md:hover:bg-white/20 md:text-white/80 md:p-2
        "

        >
          <X size={28} />
        </button>

        {/* Carrousel */}
        <div className="relative z-0 w-full flex items-center gap-4">

          {/* Bouton gauche DESKTOP (inchangé) */}
          {slides.length > 1 && (
            <button
            type="button"
            onClick={prevSlide}
            aria-label="Précédent"
            className="
              hidden sm:flex items-center justify-center
              bg-white/10 hover:bg-blue-500/40
              text-white p-3 rounded-full transition
              cursor-pointer
            "
          >
            <ChevronLeft size={28} />
          </button>
          )}
          

          

          {/* Image */}
          <div
            className="flex-1 flex justify-center items-center w-full h-full"
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            <img
              src={slides[current].src}
              alt={`slide ${current + 1}`}
              className="
                max-h-[60vh] sm:max-h-[80vh] md:max-h-[85vh]
                object-contain rounded-xl shadow-xl
                opacity-0 animate-fadeInSlow
              "
            />
          </div>

          {/* Bouton droit DESKTOP (inchangé) */}
          {slides.length > 1 && (
            <button
              type="button"
              onClick={nextSlide}
              aria-label="Suivant"
              className="
                hidden sm:flex items-center justify-center
                bg-white/10 hover:bg-blue-500/40
                text-white p-3 rounded-full transition
                cursor-pointer
              "
            >
              <ChevronRight size={28} />
          </button>
          )}
        </div>


        {/* Légende */}
        <p className="text-white/90 mt-6 text-center text-lg font-light">
          {slides[current].caption}
        </p>

        {/* Boutons mobile sous le texte */}
        {slides.length > 1 && (
          <div className="
                    sm:hidden
                    fixed bottom-6 left-1/2 -translate-x-1/2
                    flex justify-center gap-6
                    z-[10002]
        ">
          <button
            type="button"
            onClick={prevSlide}
            aria-label="Précédent"
            className="
              bg-white/40 text-white p-3 rounded-full
              backdrop-blur-md shadow-md
            "
          >
            <ChevronLeft size={24} />
          </button>

          <button
            type="button"
            onClick={nextSlide}
            aria-label="Suivant"
            className="
              bg-white/40 text-white p-3 rounded-full
              backdrop-blur-md shadow-md
            "
          >
            <ChevronRight size={24} />
          </button>
        </div>
      )}

      </div>
    </div>
  );
}