import { Code2, Rocket, Users, Award } from "lucide-react";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  const highlights = [
    { icon: Code2, title: t("about.highlights.cleanCode.title"), description: t("about.highlights.cleanCode.desc") },
    { icon: Rocket, title: t("about.highlights.fastLearner.title"), description: t("about.highlights.fastLearner.desc") },
    { icon: Users,  title: t("about.highlights.teamPlayer.title"), description: t("about.highlights.teamPlayer.desc") },
    { icon: Award,  title: t("about.highlights.quality.title"), description: t("about.highlights.quality.desc") }
  ];

  return (
    <section id="about" className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          {t("about.title")} <span className="text-gradient">{t("about.me")}</span>
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          {t("about.subtitle")}
        </p>

        <div className="mb-16 space-y-6 max-w-4xl mx-auto">
          <p className="text-lg leading-relaxed text-center">{t("about.bio.p1")}</p>
          <p className="text-lg leading-relaxed text-muted-foreground text-center">{t("about.bio.p2")}</p>
          <p className="text-lg leading-relaxed text-muted-foreground text-center">{t("about.bio.p3")}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="card-gradient p-6 rounded-lg border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:glow-primary group text-center"
            >
              <div className="inline-flex p-4 rounded-lg bg-primary/20 mb-4 group-hover:scale-110 transition-transform">
                <item.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
