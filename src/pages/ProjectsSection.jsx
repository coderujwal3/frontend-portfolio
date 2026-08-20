import { ArrowUpRight, Code2 } from "lucide-react";

const projects = [
  {
    title: "Asteria Commerce",
    category: "E-commerce experience",
    description:
      "A modern storefront UI with product discovery, category-driven layouts, and a conversion-focused checkout flow.",
    stack: ["React", "Tailwind", "GSAP"],
    accent: "from-fuchsia-500/30 via-violet-500/20 to-slate-950",
  },
  {
    title: "Pulse Insight Dashboard",
    category: "Analytics platform",
    description:
      "A clean analytics dashboard that turns complex metrics into readable data stories with interactive cards and charts.",
    stack: ["React", "Charts", "Responsive UI"],
    accent: "from-cyan-500/30 via-blue-500/20 to-slate-950",
  },
  {
    title: "Northstar Portfolio",
    category: "Creative portfolio",
    description:
      "A premium portfolio experience focused on storytelling, motion-driven sections, and a memorable visual identity.",
    stack: ["React", "Tailwind", "Motion"],
    accent: "from-violet-500/30 via-purple-500/20 to-slate-950",
  },
];

const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="relative bg-slate-950 min-h-screen border-3 border-white/20 py-24 text-white md:py-28"
    >
      <div className="z-30 mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mb-12 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-cyan-400/50 bg-cyan-500/10 text-cyan-200">
              <Code2 size={18} />
            </span>
            <p className="text-3xl font-semibold uppercase tracking-[0.3em] text-cyan-200/80">
              Projects
            </p>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-slate-900/80 shadow-2xl shadow-slate-950/30 transition duration-300 hover:-translate-y-2 hover:border-fuchsia-400/40"
            >
              <div className={`h-48 bg-linear-to-br ${project.accent}`} />
              <div className="relative p-6">
                <div className="mb-5 flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-300">
                    {project.category}
                  </span>
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-slate-950/70 text-slate-200 transition group-hover:translate-x-1 group-hover:-translate-y-1">
                    <ArrowUpRight size={18} />
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white">
                  {project.title}
                </h3>
                <p className="mt-4 leading-7 text-slate-300">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
