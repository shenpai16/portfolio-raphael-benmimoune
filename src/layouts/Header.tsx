import { useState } from "react";
import { Menu, X } from "lucide-react";

function Header() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const NavLinks = [
    { id: "About", label: "À propos de moi" },
    { id: "Projects", label: "Projets" },
    { id: "offers", label: "Mes offres" },
    { id: "Contact", label: "Contact" },
  ];


  return (
    <header className="sticky top-0 z-50 flex justify-between items-center p-4 bg-[var(--color-dark)] bg-opacity-80 backdrop-blur-md text-white shadow-md">
      <h1 className="text-2xl font-bold flex items-center gap-2">
        {/* Exemple d'icône simple avec emoji, tu peux remplacer par un SVG */}
        <span className="text-blood text-3xl">🔥</span>
        My Portfolio
      </h1>

      { /* Menu pc */}
      <nav className="hidden md:block">
        <ul className="flex space-x-6">
          {NavLinks.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id.toLowerCase()}`}
                className="relative group text-white font-medium"
              >
                {label}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[var(--color-blood)] transition-all group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>
      </nav>


      { /* Menu mobile */}
      <button
        className="md:hidden p-2 rounded-full hover:bg-[var(--color-blood)] transition-colors"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

       
        <div className={`absolute top-full left-0 w-full bg-[var(--color-dark)] bg-opacity-95 flex flex-col items-center space-y-6 
        transition-all duration-300 ease-in-out
        ${isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"}`}>
          <ul className="space-y-2">
            {NavLinks.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id.toLowerCase()}`}
                  className="block py-3 px-4 text-white hover:bg-[var(--color-blood)] rounded transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                  >
                    {label}
                  </a>
              </li>
              ))}
            </ul>  
          </div>

    </header>
  );
}
export default Header;
