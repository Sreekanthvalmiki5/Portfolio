import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { projects, projectCategories } from "@/data/portfolio";
import { ProjectCard } from "@/components/cards/ProjectCard";
import { SectionHeader } from "@/components/sections/SectionHeader";

const ALL_CATEGORIES = "All Projects";

export const Route = createFileRoute("/projects/")({
  component: ProjectsIndexPage,
});

function ProjectsIndexPage() {
  const [activeCategory, setActiveCategory] = useState<string>(ALL_CATEGORIES);

  const categoryOptions = [
    ALL_CATEGORIES,
    ...projectCategories.map((c) => c.name),
  ];

  const filteredProjects =
    activeCategory === ALL_CATEGORIES
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="mx-auto max-w-6xl px-4">
      <SectionHeader
        eyebrow="Portfolio"
        title="Projects"
        description="Production-grade systems and personal R&D across Generative AI, agentic workflows, and full-stack product engineering."
      />

      {/* Category Filter */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-wrap gap-2 mb-10 justify-center"
      >
        {categoryOptions.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
              activeCategory === cat
                ? "bg-gradient-primary text-primary-foreground shadow-elegant"
                : "glass text-muted-foreground hover:text-foreground hover:bg-muted/50"
            }`}
          >
            {cat}
          </button>
        ))}
      </motion.div>

      {/* Projects Grid */}
      <div className="grid gap-6 md:grid-cols-2">
        {filteredProjects.map((p, i) => (
          <ProjectCard key={p.slug} project={p} index={i} />
        ))}
      </div>

      {/* Empty state */}
      {filteredProjects.length === 0 && (
        <div className="text-center py-20">
          <p className="text-muted-foreground">No projects found in this category.</p>
        </div>
      )}
    </div>
  );
}
