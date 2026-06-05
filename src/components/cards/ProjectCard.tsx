import type { Project } from "@/data/portfolio";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <article
      className="group relative overflow-hidden rounded-2xl glass hover-lift"
      style={{ animation: `fade-up 0.7s ease-out ${index * 0.08}s both` }}
    >
      <div className="aspect-[16/10] overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="pointer-events-none absolute inset-0  from-background via-background/30 to-transparent" />
      </div>
      <div className="p-6">
        <h3 className="font-display text-xl font-semibold">{project.title}</h3>
        <p className="mt-2 text-sm text-foreground/85 leading-relaxed text-color">
          {project.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-primary/30 bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
    </article>
  );
}
