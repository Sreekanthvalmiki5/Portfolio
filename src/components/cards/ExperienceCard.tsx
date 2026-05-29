import type { Experience } from "@/data/portfolio";
import { Briefcase } from "lucide-react";

export function ExperienceCard({ exp, index }: { exp: Experience; index: number }) {
  return (
    <div
      className="relative pl-12"
      style={{ animation: `fade-up 0.6s ease-out ${index * 0.1}s both` }}
    >
      {/* Timeline dot */}
      <span className="absolute left-3 top-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-gradient-primary shadow-glow">
        <Briefcase className="h-3 w-3 text-primary-foreground" />
      </span>
      <div className="rounded-2xl glass p-6 hover-lift">
        <div className="flex flex-wrap items-start justify-between gap-2">
          <div>
            <h3 className="font-display text-xl font-semibold">{exp.role}</h3>
            <div className="text-primary font-medium">{exp.company}</div>
          </div>
          <span className="rounded-full glass-strong px-3 py-1 text-xs text-muted-foreground">
            {exp.period}
          </span>
        </div>
        <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
          {exp.bullets.map((b, i) => (
            <li key={i} className="flex gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-primary" />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
