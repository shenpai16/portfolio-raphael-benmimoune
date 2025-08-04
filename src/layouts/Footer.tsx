export default function Footer() {
  return (
    <footer
      className="bg-[var(--color-darker)] text-[var(--color-charcoal)] py-8 flex flex-col items-center justify-center"
      style={{ backgroundColor: "rgba(30, 30, 30, 1)" }} // fallback
    >
      <div className="max-w-6xl w-full px-8 flex flex-col md:flex-row justify-between items-center">
        <p className="text-white text-sm mb-4 md:mb-0">
          &copy; {new Date().getFullYear()} Raphaël Benmimoune — Tous droits réservés
        </p>

        <div className="flex gap-6">
          <a
            href="mailto:raphaelbenmimoune1@gmail.com"
            className="text-blue-500 hover:text-blue-400 transition"
          >
            Contact
          </a>
          <a
            href="https://github.com/shenpai16"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-400 transition"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/rapha%C3%ABl-benmimoune-36a49a301/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-400 transition"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
