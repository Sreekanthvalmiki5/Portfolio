import { createFileRoute } from "@tanstack/react-router";
import { experiences } from "@/data/portfolio";
import { ExperienceCard } from "@/components/cards/ExperienceCard";
import { SectionHeader } from "@/components/sections/SectionHeader";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: "Experience — Sreekanth Valmiki" },
      { name: "description", content: "Professional experience as a Software Developer and AI engineer." },
    ],
  }),
  component: ExperiencePage,
});

function ExperiencePage() {
  return (
    <div className="mx-auto max-w-5xl px-4">
      <SectionHeader
        eyebrow="Career"
        title="Experience"
        description="Building scalable backends, ERP integrations, and AI-driven automation in production environments."
      />
      <div className="relative">
        <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary/60 via-secondary/40 to-transparent" />
        <div className="space-y-8">
          {experiences.map((exp, i) => (
            <ExperienceCard key={exp.company} exp={exp} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
