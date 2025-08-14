import { motion } from "framer-motion";

export default function IntroSection() {
  return (
    <section className="relative min-h-[60vh] flex flex-col items-center justify-center from-[var(--color-dark)] to-[var(--color-darker)] px-8">
      <motion.img
        src="/assets/logo_officiel_clean.svg"
        alt="Logo"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="max-w-full h-auto drop-shadow-2xl mb-24"
        
      />
    </section>
  );
}
