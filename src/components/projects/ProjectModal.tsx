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

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prevSlide();
      if (e.key === "ArrowRight") nextSlide();
    };
    document.addEventListener("keydown", onKey);

    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
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
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center"
      role="dialog"
      aria-modal="true"
    >
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
          relative z-[10000] w-full max-w-4xl mx-4 sm:mx-6 p-6
          rounded-2xl bg-black/40 backdrop-blur-xl border border-white/10
          shadow-2xl shadow-black/40
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
          {/* Bouton gauche */}
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

          {/* Image */}
          <div className="flex-1 flex justify-center">
            <img
              src={slides[current].src}
              alt={`slide ${current + 1}`}
              className="
                max-h-[70vh] object-contain rounded-xl shadow-xl
                opacity-0 animate-fadeInSlow
                pointer-events-none
              "
            />
          </div>

          {/* Bouton droit */}
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
        </div>

        {/* Légende */}
        <p className="text-white/90 mt-6 text-center text-lg font-light">
          {slides[current].caption}
        </p>
      </div>
    </div>
  );
}