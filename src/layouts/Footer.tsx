export default function Footer() {
  return (
    <footer
      className="
        relative 
        bg-[var(--color-darker)] 
        text-white 
        py-12 px-6 
        overflow-hidden
      "
    >
      {/* Glow subtil */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-blue-500/20 blur-[120px] pointer-events-none"></div>

      {/* Ligne lumineuse */}
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/40 to-transparent mb-10 opacity-70"></div>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 animate-fadeInUp">
        {/* Copyright */}
        <p className="text-gray-300 text-sm text-center md:text-left">
          © {new Date().getFullYear()} Raphaël Benmimoune — Tous droits réservés
        </p>

        {/* Liens */}
        <div className="flex gap-6 text-sm">
          <a
            href="mailto:raphaelbenmimoune1@gmail.com"
            className="text-blue-400 hover:text-blue-300 transition"
          >
            Contact
          </a>

          <a
            href="https://github.com/shenpai16"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 transition"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/rapha%C3%ABl-benmimoune-36a49a301/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 transition"
          >
            LinkedIn
          </a>

          <a
            href="/mentions-legales"
            className="text-blue-400 hover:text-blue-300 transition"
          >
            Mentions légales
          </a>
        </div>
      </div>
    </footer>
  );
}