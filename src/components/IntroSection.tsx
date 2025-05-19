import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function IntroSection() {
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (textRef.current) {
      textRef.current.classList.add('reveal');
    }
  }, []);

  return (
    <section className="relative min-h-[70vh] flex flex-col items-center justify-start pt-20 px-8 bg-gradient-to-b">
      <motion.h1
        ref={textRef}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="text-8xl font-gothic text-[var(--color-blood)] tracking-widest text-center drop-shadow-lg"
      >
        Développeur FullStack
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="mt-8 text-2xl text-[var(--color-bone)] text-center max-w-3xl drop-shadow-md"
      >
        Plongez dans l'univers de mon travail, entre code, créativité et passion. Découvrez mes projets et mon parcours.
      </motion.p>

      {/* Bloc avec icône, flèche et texte "Ma passion" */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8, duration: 0.8 }}
        className="relative mt-12 flex flex-col items-center"
      >
        {/* Icône développeur */}
        <div className="relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-20 w-20 text-[var(--color-blood)] drop-shadow-lg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.75 17.25l-3-3m0 0l3-3m-3 3h10.5M19.5 7.5v9a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 16.5v-9A2.25 2.25 0 016.75 5.25h10.5A2.25 2.25 0 0119.5 7.5z"
            />
          </svg>

          {/* Flèche animée */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            className="absolute -top-10 left-1/2 -translate-x-1/2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 text-[var(--color-blood)] drop-shadow-lg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 19V5m0 0l-7 7m7-7l7 7" />
            </svg>
          </motion.div>
        </div>

        {/* Texte Ma passion avec halo doré */}
        <span className="mt-6 text-white text-3xl font-semibold relative">
          <span className="relative z-10">Ma passion</span>
          <span className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 opacity-40 rounded-md filter blur-lg animate-pulse"></span>
        </span>
      </motion.div>

      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.6 }}
        className="mt-12 px-8 py-3 rounded-lg border-2 border-[var(--color-blood)] bg-[var(--color-blood)] text-[var(--color-bone)] font-semibold hover:bg-transparent hover:text-[var(--color-blood)] transition-colors duration-300 btn-glow"
        onClick={() => {
          const projectsSection = document.getElementById('projects');
          if (projectsSection) {
            projectsSection.scrollIntoView({ behavior: 'smooth' });
          }
        }}
      >
        Découvrir
      </motion.button>
    </section>
  );
}
