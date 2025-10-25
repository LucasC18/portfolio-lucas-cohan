import { Github, Linkedin, Mail, Heart, Code2, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const quickLinks = [
    { label: t("footer.links.home"), id: "hero" },
    { label: t("footer.links.about"), id: "about" },
    { label: t("footer.links.skills"), id: "skills" },
    { label: t("footer.links.projects"), id: "projects" },
    { label: t("footer.links.contact"), id: "contact" },
  ];

  const technologies = ["React", "TypeScript", "Node.js", "Tailwind CSS", "Docker", "Git"];

  return (
    <footer className="relative bg-secondary/30 border-t border-primary/20">
      <div className="container mx-auto max-w-7xl px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="text-2xl font-bold text-gradient mb-4">
              &lt;Lucas Emmanuel Cohan/&gt;
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              {t("footer.brandText")}
            </p>
            <Button className="bg-gradient-to-r from-primary to-accent hover:opacity-90" onClick={() => scrollToSection("contact")}>
              {t("footer.cta")}
            </Button>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-foreground">{t("footer.quickLinks")}</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-4"></span>
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-foreground">{t("footer.techStack")}</h4>
            <ul className="space-y-3">
              {technologies.map((tech, index) => (
                <li key={index} className="text-muted-foreground flex items-center gap-2">
                  <Code2 className="w-3 h-3 text-primary" />
                  {tech}
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-foreground">{t("footer.connect")}</h4>
            <div className="space-y-4 mb-6">
              <a href="mailto:lucascohanedu@gmail.com" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group">
                <Mail className="w-4 h-4" />
                <span className="text-sm">lucascohanedu@gmail.com</span>
              </a>
            </div>

            <div className="flex gap-4">
              <a href="https://github.com/LucasC18" target="_blank" rel="noopener noreferrer" className="p-3 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-all hover:scale-110" aria-label="GitHub Profile">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/lucasemmanuelcohan/" target="_blank" rel="noopener noreferrer" className="p-3 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-all hover:scale-110" aria-label="LinkedIn Profile">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://yourportfolio.com" target="_blank" rel="noopener noreferrer" className="p-3 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-all hover:scale-110" aria-label="Portfolio Website">
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-primary/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} {t("footer.copyrightName")}. {t("footer.rights")}
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>{t("footer.builtWith")}</span>
              <span>{t("footer.stackLine")}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
