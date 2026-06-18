import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import type { Project } from "@/data/portfolio";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link
        to="/projects/$slug"
        params={{ slug: project.slug }}
        className="group relative block overflow-hidden rounded-2xl"
      >
        {/* Glow border effect */}
        <div className="pointer-events-none absolute -inset-[1px] rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 z-10">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-cyan-400/30 via-blue-500/20 to-transparent blur-sm" />
        </div>

        {/* Card background */}
        <article className="relative glass overflow-hidden transition-all duration-500 group-hover:shadow-[0_0_40px_-8px_rgba(6,182,212,0.3)] group-hover:scale-[1.02]">
          {/* Animated gradient overlay on hover */}
          <div className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
            <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/10 via-transparent to-transparent" />
            <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />
            <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />
          </div>

          {/* Image */}
          <div className="aspect-[16/10] overflow-hidden relative">
            <img
              src={project.image}
              alt={project.title}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />

            {/* Status badge */}
            <span className="absolute top-3 right-3 z-20 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-emerald-400 backdrop-blur-sm">
              {project.status}
            </span>

            {/* Hover gradient overlay */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-cyan-500/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </div>

          {/* Content */}
          <div className="relative z-20 p-6">
            <h3 className="font-display text-xl font-semibold group-hover:text-gradient transition-all duration-300">
              {project.title}
            </h3>
            <p className="mt-2 text-sm text-white/70 leading-relaxed line-clamp-2">
              {project.description}
            </p>

            {/* Tags */}
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tags.slice(0, 4).map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-primary/20 bg-primary/8 px-2.5 py-0.5 text-xs font-medium text-primary/80"
                >
                  {tag}
                </span>
              ))}
              {project.tags.length > 4 && (
                <span className="rounded-full border border-muted/30 bg-muted/10 px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
                  +{project.tags.length - 4}
                </span>
              )}
            </div>

            {/* CTA */}
            <div className="mt-5 flex items-center gap-4 text-sm font-medium">
              <span className="inline-flex items-center gap-1.5 text-primary transition-all duration-300 group-hover:gap-2.5">
                View Case Study
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
              </span>
              {project.liveUrl && (
                <span className="inline-flex items-center gap-1 text-muted-foreground/60">
                  <ExternalLink className="h-3 w-3" />
                  Live
                </span>
              )}
            </div>
          </div>

          {/* Top edge glow */}
          <div className="pointer-events-none absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        </article>
      </Link>
    </motion.div>
  );
}
