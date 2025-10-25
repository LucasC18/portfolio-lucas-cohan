import { Code2, Database, Server, Palette, Cloud, GitBranch, Terminal, Blocks } from "lucide-react";
import { useTranslation } from "react-i18next";

const Skills = () => {
  const { t } = useTranslation();

const skillCategories = [
  {
    icon: Code2,
    title: "Frontend Development",
    color: "from-blue-500 to-cyan-500",
    skills: [
      { name: "Vite", level: 85 },
      { name: "JavaScript (ES6+)", level: 100 },
      { name: "HTML5 / CSS3", level: 100 },
      { name: "Bootstrap", level: 85 },
    ],
  },
  {
    icon: Server,
    title: "Backend Development",
    color: "from-green-500 to-emerald-500",
    skills: [
      { name: "Node.js / Express.js", level: 100},
      { name: "RESTful APIs", level: 90 },
      { name: "C# (.NET MVC)", level: 85 },
      { name: "Java (POO)", level: 85},
    ],
  },
  {
    icon: Database,
    title: "Database & Storage",
    color: "from-purple-500 to-pink-500",
    skills: [
      { name: "MySQL / SQL Server", level: 95 },
      { name: "SQLite", level: 75 },
      { name: "MongoDB", level: 50 },
      { name: "Supabase", level: 90 },
    ],
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    color: "from-orange-500 to-red-500",
    skills: [
      { name: "GitHub Pages / Vercel", level: 90 },
      { name: "CI/CD", level: 70 },
      { name: "Docker", level: 50 },
      { name: "Despliegue de APIs / sitios", level: 85 },
    ],
  },
  {
    icon: GitBranch,
    title: "Version Control",
    color: "from-yellow-500 to-amber-500",
    skills: [
      { name: "Git / GitHub", level: 95 },
      { name: "Branching y Merge", level: 90 },
      { name: "Clear and semantic commits", level: 85 },
      { name: "Team collaboration", level: 100 },
    ],
  },
  {
    icon: Blocks,
    title: "System Design & Best Practices",
    color: "from-indigo-500 to-blue-500",
    skills: [
      { name: "Clean Code", level: 90 },
      { name: "MVC Architecture", level: 85 },
      { name: "API Design", level: 80 },
      { name: "Testing", level: 85 },
    ],
  },
];

  return (
    <section id="skills" className="py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 via-background to-secondary/30"></div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          {t("skills.title.main")} <span className="text-gradient">{t("skills.title.expertise")}</span>
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto text-lg">
          {t("skills.subtitle")}
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="card-gradient p-8 rounded-xl border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:glow-primary group">
              <div className="flex items-center gap-4 mb-6">
                <div className={`p-3 rounded-lg bg-gradient-to-br ${category.color} group-hover:scale-110 transition-transform`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-xs text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <div className={`h-full bg-gradient-to-r ${category.color} transition-all duration-1000 ease-out`} style={{ width: `${skill.level}%`, animation: "slide-in-right 1s ease-out" }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-4">{t("skills.alsoExperienced")}</p>
          <div className="flex flex-wrap justify-center gap-3">
            {["React.js", "Tailwind CSS", "TypeScript", "CRUD"].map((tech, i) => (
              <span key={i} className="px-4 py-2 rounded-lg bg-primary/5 border border-primary/20 text-sm hover:bg-primary/10 transition-colors">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
