import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const navKeys = [
  { key: "home", href: "#hero" },
  { key: "about", href: "#about" },
  { key: "skills", href: "#skills" },
  { key: "experience", href: "#experience" },
  { key: "projects", href: "#projects" },
  { key: "contact", href: "#contact" }
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleLang = () => {
    const next = i18n.language === "fr" ? "en" : "fr";
    i18n.changeLanguage(next);
    localStorage.setItem("lang", next);
  };

  return (
    <nav className={cn("fixed w-full z-40 transition-all duration-300",
      isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5")}>
      <div className="container flex items-center justify-between">
        <a className="text-xl font-bold text-primary" href="#hero">
          <span className="text-glow text-foreground">Omar</span> Portfolio
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center space-x-6">
          {navKeys.map(it => (
            <a key={it.key} href={it.href}
               className="text-foreground/80 hover:text-primary transition-colors duration-300">
              {t(`nav.${it.key}`)}
            </a>
          ))}
          <button
            onClick={toggleLang}
            className="px-3 py-1 border border-primary text-primary rounded-full hover:bg-primary hover:text-black transition"
            title={i18n.language === "fr" ? "Switch to English" : "Passer en Français"}
          >
            {i18n.language === "fr" ? "EN" : "FR"}
          </button>
        </div>

        {/* Mobile button */}
        <button onClick={() => setIsMenuOpen(p => !p)}
                className="md:hidden p-2 text-foreground z-50"
                aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile menu */}
        <div className={cn(
          "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center transition-all duration-300 md:hidden",
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}>
          <div className="flex flex-col items-center space-y-8 text-xl">
            {navKeys.map(it => (
              <a key={it.key} href={it.href}
                 className="text-foreground/80 hover:text-primary transition-colors duration-300"
                 onClick={() => setIsMenuOpen(false)}>
                {t(`nav.${it.key}`)}
              </a>
            ))}
            <button
              onClick={toggleLang}
              className="px-4 py-2 border border-primary text-primary rounded-full hover:bg-primary hover:text-black transition"
            >
              {i18n.language === "fr" ? "EN" : "FR"}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
