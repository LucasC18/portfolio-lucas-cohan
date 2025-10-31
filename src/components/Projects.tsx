import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Star } from "lucide-react";
import { useTranslation } from "react-i18next";

type Project = {
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  github: string;
  live: string;
  featured: boolean;
  stats: { stars: number; commits: number };
};

const Projects = () => {
  const { t } = useTranslation();

  const projects: Project[] = [
    {
      title: "E-Commerce Platform",
      description:
        "Full-featured online store with shopping cart, secure payment processing via Stripe, order management, and comprehensive admin dashboard for inventory and sales analytics.",
      longDescription:
        "Built with modern React architecture, featuring real-time inventory updates, customer authentication, and responsive design optimized for all devices.",
      tags: ["React", "Node.js", "MongoDB", "Stripe", "Express", "JWT"],
      github: "https://github.com",
      live: "https://example.com",
      featured: true,
      stats: { stars: 45, commits: 230 },
    },
    {
      title: "Task Management System",
      description:
        "Collaborative project management platform with real-time synchronization, drag-and-drop kanban boards, team collaboration features, and detailed analytics.",
      longDescription:
        "Enterprise-ready solution with role-based permissions, automated notifications, and integrated time tracking for enhanced productivity.",
      tags: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "WebSocket"],
      github: "https://github.com",
      live: "https://example.com",
      featured: true,
      stats: { stars: 67, commits: 342 },
    },
    {
      title: "Weather Analytics Dashboard",
      description:
        "Real-time weather monitoring application with location-based forecasts, interactive data visualizations, historical trends, and customizable alerts.",
      longDescription:
        "Integrates multiple weather APIs to provide accurate forecasts with beautiful charts and intuitive UI for seamless user experience.",
      tags: ["React", "Chart.js", "API Integration", "Tailwind", "Redux"],
      github: "https://github.com",
      live: "https://example.com",
      featured: false,
      stats: { stars: 28, commits: 156 },
    },
    {
      title: "Social Media Dashboard",
      description:
        "Analytics platform aggregating data from multiple social networks, providing insights, engagement metrics, and automated reporting for content creators.",
      longDescription:
        "OAuth integration with major platforms, scheduled posting capabilities, and AI-powered content suggestions.",
      tags: ["React", "Node.js", "OAuth", "MongoDB", "D3.js"],
      github: "https://github.com",
      live: "https://example.com",
      featured: false,
      stats: { stars: 52, commits: 198 },
    },
    {
      title: "Daily Tasks App",
      description: t("portfolioProjects.dailyTasks.description"),
      longDescription: t("portfolioProjects.dailyTasks.longDescription"),
       tags: ["HTML", "JavaScript", "TailwindCSS", "LocalStorage"],
      github: "https://github.com/LucasC18/DailyTaskProyect",
      live: "https://lucasc18.github.io/DailyTaskProyect/",
      featured: true,
      stats: { stars: 150, commits: 10 },
    },
    {
      title: "Portfolio CMS",
      description:
        "Content management system specifically designed for developers and creatives to showcase their work with customizable themes and SEO optimization.",
      longDescription:
        "Headless CMS architecture with REST API, markdown support, and built-in blog functionality.",
      tags: ["React", "Node.js", "PostgreSQL", "GraphQL", "AWS"],
      github: "https://github.com",
      live: "https://example.com",
      featured: false,
      stats: { stars: 34, commits: 187 },
    },
  ];

  return (
    <section id="projects" className="py-24 px-4 bg-secondary/20">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          {t("projects.title.featured")}{" "}
          <span className="text-gradient">{t("projects.title.projects")}</span>
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto text-lg">
          {t("projects.subtitle")}
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`card-gradient p-8 rounded-xl border transition-all duration-300 hover:glow-primary group relative overflow-hidden ${
                project.featured
                  ? "border-primary/40 md:col-span-2 lg:col-span-1"
                  : "border-primary/20 hover:border-primary/40"
              }`}
            >
              {project.featured && (
                <div className="absolute top-4 right-4">
                  <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-gradient-to-r from-primary to-accent text-xs font-semibold text-white">
                    <Star className="w-3 h-3 fill-white" />
                    {t("projects.featuredBadge")}
                  </div>
                </div>
              )}

              <div className="mb-4">
                <h3 className="text-2xl md:text-3xl font-bold mb-3 group-hover:text-gradient transition-all">
                  {project.title}
                </h3>
                <p className="text-foreground mb-3 leading-relaxed">
                  {project.description}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.longDescription}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="text-xs px-3 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between gap-4 pt-4 border-t border-primary/10">
                <div className="flex gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Star className="w-4 h-4" />
                    {project.stats.stars}
                  </span>
                  <span>
                    {project.stats.commits} {t("projects.commits")}
                  </span>
                </div>

                <div className="flex gap-3">
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-primary/30 hover:bg-primary/10"
                    asChild
                  >
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      {t("projects.btn.code")}
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    className="bg-gradient-to-r from-primary to-accent hover:opacity-90"
                    asChild
                  >
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      {t("projects.btn.live")}
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            {t("projects.morePrompt")}
          </p>
          <Button
            size="lg"
            variant="outline"
            className="border-primary/30 hover:bg-primary/10"
            asChild
          >
            <a href="https://github.com/LucasC18" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 mr-2" />
              {t("projects.btn.viewAll")}
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
