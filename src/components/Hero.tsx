import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail, Download } from "lucide-react";
import heroBackground from "@/assets/hero-bg.jpg";
import { useTranslation } from "react-i18next";
// 🧠 NUEVO: importamos el Typewriter para el efecto de escritura
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  const { t } = useTranslation();
  const name = "Lucas Emmanuel Cohan";

  // 👇 NUEVO: obtenemos el array de roles desde las traducciones (en o es)
  const roles = t("hero.roles", { returnObjects: true }) as string[];

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 pt-16"
    >
      {/* Fondo */}
      <div className="absolute inset-0">
        <img
          src={heroBackground}
          alt={t("hero.alt")}
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/80 to-background/90" />
      </div>

      {/* Contenido */}
      <div className="container mx-auto text-center relative z-10 animate-fade-in">
        <div className="inline-block mb-4 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm">
          <span className="text-sm text-primary font-medium">
            {t("hero.badge")}
          </span>
        </div>

        <h1
          className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up"
          style={{ animationDelay: "0.2s" }}
        >
          {t("hero.title", { name })}{" "}
          <span className="text-gradient">{t("hero.nameAccent")}</span>
        </h1>

        {/* 👇 Reemplazamos el texto fijo del rol por el Typewriter */}
        <p
          className="text-xl md:text-2xl text-muted-foreground mb-4 animate-fade-in-up"
          style={{ animationDelay: "0.4s" }}
        >
          <span className="text-gradient font-semibold">
            <Typewriter
              words={roles} // las frases traducidas dinámicamente
              loop
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={40}
              delaySpeed={1500}
            />
          </span>
        </p>

        <p
          className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-in-up"
          style={{ animationDelay: "0.6s" }}
        >
          {t("hero.blurb")}
        </p>

        {/* Botones principales */}
        <div
          className="flex flex-wrap gap-4 justify-center mb-12 animate-fade-in-up"
          style={{ animationDelay: "0.8s" }}
        >
          {/* Ver proyectos */}
          <Button
            size="lg"
            className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity"
            onClick={() => scrollToSection("projects")}
          >
            {t("hero.cta.viewWork")}
          </Button>

          {/* Contactarme */}
          <Button
            size="lg"
            variant="outline"
            className="border-primary/30 hover:bg-primary/10"
            onClick={() => scrollToSection("contact")}
          >
            {t("hero.cta.getInTouch")}
          </Button>

{/*
📄 Descargar CV
<Button
  size="lg"
  className="bg-gradient-to-r from-green-500 to-emerald-600 hover:opacity-90 transition-opacity"
  asChild
>
  <a
    href={`${import.meta.env.BASE_URL}cv/CV - Lucas Emmanuel Cohan.pdf`}
    download="LucasCohanCV.pdf"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Download className="w-5 h-5 mr-2" />
    {t("hero.cta.downloadCV")}
  </a>
</Button>
*/}
        </div>

        {/* Redes sociales */}
        <div
          className="flex gap-6 justify-center animate-fade-in-up"
          style={{ animationDelay: "1s" }}
        >
          <a
            href="https://github.com/LucasC18"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/lucasemmanuelcohan/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="mailto:lucascohanedu@gmail.com?subject=Consulta%20de%20portafolio&body=Hola%20Lucas,%20vi%20tu%20portfolio%20y%20quería%20contactarte..."
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </div>

      {/* Flecha scroll hacia abajo */}
      <button
        onClick={() => scrollToSection("about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-muted-foreground hover:text-primary transition-colors"
      >
        <ArrowDown className="w-6 h-6" />
      </button>
    </section>
  );
};

export default Hero;
