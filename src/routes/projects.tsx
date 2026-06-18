import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Sreekanth Valmiki" },
      {
        name: "description",
        content:
          "AI and full-stack projects: multi-agent systems, RAG pipelines, LLM fine-tuning, ERP automation.",
      },
    ],
  }),
  component: ProjectsLayout,
});

function ProjectsLayout() {
  return <Outlet />;
}
