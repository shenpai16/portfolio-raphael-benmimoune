import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const NavLinks = [
    { url: "/a-propos", label: "À propos de moi" },
    { url: "/projets", label: "Projets" },
    { url: "/mes-offres", label: "Mes offres" },
    { url: "/contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50">
      {/* Fond sombre pour éviter la barre blanche */}
      <div className="absolute inset-0 bg-[var(--color-darker)] opacity-80 pointer-events-none"></div>

      {/* Header premium */}
      <div
        className="
          relative 
          bg-white/5 backdrop-blur-xl 
          border-b border-white/10 
          shadow-lg shadow-black/20
        "
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <span className="text-3xl">🔥</span>
            <span className="text-xl font-semibold text-white tracking-wide">
              Raphaël Benmimoune
            </span>
          </Link>

          {/* Menu Desktop */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {NavLinks.map(({ url, label }) => (
                <li key={url}>
                  <Link
                    to={url}
                    className="
                      relative text-white/90 hover:text-white transition
                      font-medium tracking-wide group
                    "
                  >
                    {label}
                    <span
                      className="
                        absolute left-0 -bottom-1 h-[2px] w-0 
                        bg-blue-500 transition-all duration-300 
                        group-hover:w-full
                      "
                    ></span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Menu Mobile Button */}
          <button
            className="
              md:hidden p-2 rounded-lg 
              bg-white/10 hover:bg-white/20 
              transition text-white
            "
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Menu Mobile */}
        <div
          className={`
            md:hidden overflow-hidden transition-all duration-300 
            bg-[var(--color-dark)] bg-opacity-95 backdrop-blur-xl
            ${isMenuOpen ? "max-h-96 py-6" : "max-h-0 py-0"}
          `}
        >
          <ul className="flex flex-col items-center gap-4">
            {NavLinks.map(({ url, label }) => (
              <li key={url}>
                <Link
                  to={url}
                  onClick={() => setIsMenuOpen(false)}
                  className="
                    block px-6 py-3 text-white 
                    rounded-lg hover:bg-blue-500/20 
                    transition text-lg
                  "
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}