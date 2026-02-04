import { useState } from 'react';
import ProjectModal from './ProjectModal';

type ProjectCardProps = {
  title: string;
  image: string;
  tooltip: string;
  slides: { src: string; caption: string }[];
  url?: string;
};

export default function ProjectCard({ title, image, slides, url }: ProjectCardProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div onClick={() => setOpen(true)} className="cursor-pointer group">
        <div
          className="
            relative rounded-xl overflow-hidden 
            bg-[var(--color-dark)] 
            border border-white/10 
            shadow-lg shadow-black/20 
            transition-all duration-300 
            hover:border-blue-500/40 
            hover:shadow-blue-500/20 
            hover:-translate-y-1
            p-6
          "
        >
          {/* Titre */}
          <h1
            className="
              text-center text-transparent bg-clip-text 
              bg-gradient-to-r from-blue-400 to-blue-200 
              font-bold text-xl mb-4
            "
          >
            {title}
          </h1>

          {/* Image */}
          <div className="relative w-full h-48 overflow-hidden rounded-lg">
            <img
              src={image}
              alt={title}
              className="
                w-full h-full object-contain 
                transition-transform duration-500 
                group-hover:scale-110
              "
            />
          </div>

          {/* Overlay */}
          <div
            className="
              absolute inset-0 
              bg-gradient-to-b from-transparent to-black/60 
              opacity-0 group-hover:opacity-100 
              flex items-end justify-center 
              transition-opacity duration-300
              pb-6
            "
          >
            <span className="text-white text-lg font-semibold">
              Voir plus
            </span>
          </div>
        </div>

        {/* Lien externe */}
        {url && (
          <div className="text-center mt-3">
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 font-medium transition-colors"
            >
              Voir le site →
            </a>
          </div>
        )}

        {/* Modal */}
        {open && <ProjectModal slides={slides} onClose={() => setOpen(false)} />}
      </div>
    </>
  );
}