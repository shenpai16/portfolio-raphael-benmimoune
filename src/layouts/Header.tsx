function Header() {
  return (
    <header className="sticky top-0 z-50 flex justify-between items-center p-4 bg-[var(--color-dark)] bg-opacity-80 backdrop-blur-md text-white shadow-md">
      <h1 className="text-2xl font-bold flex items-center gap-2">
        {/* Exemple d'icône simple avec emoji, tu peux remplacer par un SVG */}
        <span className="text-blood text-3xl">🔥</span>
        My Portfolio
      </h1>
      <nav>
        <ul className="flex space-x-6">
          {["About", "Projects", "Contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="relative group text-white font-medium"
              >
                {item}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[var(--color-blood)] transition-all group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
export default Header;
