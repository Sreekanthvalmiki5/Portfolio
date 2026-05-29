import { createFileRoute } from "@tanstack/react-router";
import { projects } from "@/data/portfolio";
import { ProjectCard } from "@/components/cards/ProjectCard";
import { SectionHeader } from "@/components/sections/SectionHeader";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Sreekanth Valmiki" },
      { name: "description", content: "AI and full-stack projects: multi-agent systems, RAG pipelines, LLM fine-tuning, ERP automation." },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4">
      <SectionHeader
        eyebrow="Portfolio"
        title="Projects"
        description="Production-grade systems and personal R&D across Generative AI, agentic workflows, and full-stack product engineering."
      />
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <ProjectCard key={p.title} project={p} index={i} />
        ))}
      </div>
    </div>
  );
}
