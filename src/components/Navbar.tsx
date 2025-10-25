import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const Navbar = () => {
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { label: t("navbar.home"), id: "hero" },
    { label: t("navbar.about"), id: "about" },
    { label: t("navbar.skills"), id: "skills" },
    { label: t("navbar.projects"), id: "projects" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[200] transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-primary/20 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <button
            onClick={() => scrollToSection("hero")}
            className="text-xl font-bold text-gradient hover:opacity-80 transition-opacity"
          >
            &lt;Lucas Emmanuel Cohan /&gt;
          </button>

        {/* Desktop */}
          <div className="hidden md:flex items-center gap-6 pointer-events-auto">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-foreground hover:text-primary transition-colors relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
            <Button
              size="sm"
              className="bg-gradient-to-r from-primary to-accent hover:opacity-90"
              onClick={() => scrollToSection("contact")}
            >
              {t("navbar.hireMe")}
            </Button>

            {/* 👉 Switcher aquí, garantizamos clic con z y pointer-events */}
            <div className="ml-2 relative z-[300] pointer-events-auto">
              <LanguageSwitcher />
            </div>
          </div>

          {/* Mobile button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 animate-fade-in pointer-events-auto">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left py-3 px-4 hover:bg-primary/10 transition-colors"
              >
                {item.label}
              </button>
            ))}
            <div className="px-4 pt-2 flex items-center gap-3">
              <Button
                size="sm"
                className="flex-1 bg-gradient-to-r from-primary to-accent hover:opacity-90"
                onClick={() => scrollToSection("contact")}
              >
                {t("navbar.hireMe")}
              </Button>
              <div className="relative z-[300]">
                <LanguageSwitcher />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
