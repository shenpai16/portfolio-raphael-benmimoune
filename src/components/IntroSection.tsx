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
      {/* Bloc latéral pour aligner les deux icônes sur la même ligne */}
      <div className="hidden lg:flex flex-row items-center justify-between absolute w-full left-0 top-2/3 -translate-y-1/2 z-10 px-8">
        {/* Icône développeur à gauche */}
        <div className="flex flex-col items-center">
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-40 h-40 text-yellow-400 drop-shadow-2xl"
            animate={{ x: [0, 30, 0, -30, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
          </motion.svg>
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            className="mt-4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 text-white drop-shadow-lg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              style={{ transform: "rotate(180deg)" }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 19V5m0 0l-7 7m7-7l7 7" />
            </svg>
          </motion.div>
          <span className="mt-4 text-white text-3xl font-semibold relative">
            <span className="relative z-10">Ma passion</span>
            <span className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 opacity-40 rounded-md filter blur-lg animate-pulse"></span>
          </span>
        </div>
        {/* Icône trophée à droite */}
        <div className="flex flex-col items-center">
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-40 h-40 text-yellow-400 drop-shadow-2xl"
            animate={{ x: [0, -30, 0, 30, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          >
            <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
            <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
            <path d="M4 22h16" />
            <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
            <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
            <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
          </motion.svg>
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            className="mt-4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 text-white drop-shadow-lg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              style={{ transform: "rotate(180deg)" }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 19V5m0 0l-7 7m7-7l7 7" />
            </svg>
          </motion.div>
          <span className="mt-4 text-white text-3xl font-semibold relative">
            <span className="relative z-10">Fana des challenges</span>
            <span className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 opacity-40 rounded-md filter blur-lg animate-pulse"></span>
          </span>
        </div>
      </div>

      <motion.h1
        ref={textRef}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="text-8xl font-gothic text-yellow-400 tracking-widest text-center drop-shadow-lg"
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
    </section>
  );
}
