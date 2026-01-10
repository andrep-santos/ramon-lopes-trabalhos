import { Menu, X, Paintbrush } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "#home", label: "Início" },
    { href: "#sobre", label: "Sobre" },
    { href: "#galeria", label: "Galeria" },
    { href: "#videos", label: "Vídeos" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <button
            onClick={() => scrollToSection("#home")}
            className="flex items-center gap-2 text-2xl font-bold cursor-pointer"
          >
            <Paintbrush className="text-orange-500" />
            <span className="bg-gradient-to-r from-orange-500 via-blue-500 to-green-500 bg-clip-text text-transparent">
              Ramon Lopes
            </span>
          </button>

          {/* Menu Desktop */}
          <nav className="hidden md:flex items-center gap-8 font-medium">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="text-gray-600 hover:text-orange-500 transition-colors"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Botão Mobile */}
          <button
            className="md:hidden p-2 text-gray-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Menu Mobile Aberto */}
        {isMenuOpen && (
          <nav className="md:hidden py-6 border-t border-gray-100 flex flex-col gap-4 animate-fade-in bg-white">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="text-gray-600 hover:text-orange-500 transition-colors text-left text-lg font-medium px-2"
              >
                {link.label}
              </button>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;