import { createFileRoute } from "@tanstack/react-router";
import { skills } from "@/data/portfolio";
import { SkillBadge } from "@/components/cards/SkillBadge";
import { SectionHeader } from "@/components/sections/SectionHeader";

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title: "Skills — Sreekanth Valmiki" },
      { name: "description", content: "Technical skills across AI, backend, frontend, and DevOps." },
    ],
  }),
  component: SkillsPage,
});

const ORDER = ["AI", "Languages", "Backend", "Frontend", "DevOps", "Engineering"];

function SkillsPage() {
  const grouped = ORDER.map((cat) => ({
    cat,
    items: skills.filter((s) => s.category === cat),
  })).filter((g) => g.items.length);

  return (
    <div className="mx-auto max-w-6xl px-4">
      <SectionHeader
        eyebrow="Toolbox"
        title="Skills & Technologies"
        description="The stack I use day-to-day to ship reliable, intelligent products."
      />

      <div className="grid gap-6 md:grid-cols-2">
        {grouped.map((g, gi) => (
          <section
            key={g.cat}
            className="rounded-2xl glass p-6"
            style={{ animation: `fade-up 0.6s ease-out ${gi * 0.08}s both` }}
          >
            <h3 className="font-display text-lg font-semibold mb-4">
              <span className="text-gradient">{g.cat}</span>
            </h3>
            <div className="flex flex-wrap gap-2">
              {g.items.map((s, i) => (
                <SkillBadge key={s.name} name={s.name} index={i} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
