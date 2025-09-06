import { useEffect, useState, useRef } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

type Slide = { src: string; caption: string };
type ProjectModalProps = { slides: Slide[]; onClose: () => void };

export default function ProjectModal({ slides, onClose }: ProjectModalProps) {
  const [current, setCurrent] = useState(0);
  const modalRef = useRef<HTMLDivElement>(null);



  const prevSlide = () =>
    setCurrent((p) => (p === 0 ? slides.length - 1 : p - 1));
  const nextSlide = () =>
    setCurrent((p) => (p === slides.length - 1 ? 0 : p + 1));

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);

    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)){
        onClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center"
      role="dialog"
      aria-modal="true"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/95"
        onClick={onClose}
        data-testid="backdrop"
      />

      {/* Contenu de la modal */}
      <div
        className="relative z-[10000] w-full max-w-4xl p-4"
        onClick={(e) => e.stopPropagation()}
        ref={modalRef}
      >
        {/* Bouton fermer */}
        <button
          type="button"
          onClick={() => {
            onClose();
          }}
          aria-label="Fermer"
          className="fixed top-6 right-6 z-[10100] text-white bg-black/60 hover:text-blue-600/80 p-2 rounded-full transition"
        >
          <X size={36} />
        </button>

        {/* Carrousel */}
        <div className="relative w-full flex items-center">
            <div className="w-16 flex justify-center">
                <button
                   type="button"
                   onClick={prevSlide}
                   aria-label="Précédent"
                   className="bg-black/50 hover:bg-blue-500/70 text-white p-2 rounded-full transition"
                >
                    <ChevronLeft size={32} />
                </button>
            </div>

            <div className="flex-1 flex justify-center">
                <img
                  src={slides[current].src}
                  alt={`slide ${current + 1}`}
                  className="max-h-[70vh] object-contain rounded-lg shadow-lg"
                />
            </div>

            <div className="w-16 flex justify-center">
                <button
                  type="button"
                  onClick={nextSlide}
                  aria-label="Suivant"
                  className="bg-black/50 hover:bg-blue-500/70 text-white p-2 rounded-full transition"
                >
                    <ChevronRight size={32} />
                </button>
            </div>

        </div>

        {/* Légende */}
        <p className="text-white mt-6 text-center max-w-2xl mx-auto">
          {slides[current].caption}
        </p>
      </div>
    </div>
  );
}
