import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Download, Sparkles } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import avatar from "@/assets/avatar.jpg";
import { profile, projects } from "@/data/portfolio";
import { ProjectCard } from "@/components/cards/ProjectCard";
import { SectionHeader } from "@/components/sections/SectionHeader";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sreekanth Valmiki — Generative AI Engineer" },
      { name: "description", content: "Portfolio home — Generative AI engineer specializing in multi-agent systems, RAG, and LLM fine-tuning." },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <div className="mx-auto max-w-6xl px-4">
      {/* HERO */}
      <section className="relative overflow-hidden rounded-3xl glass-strong shadow-elegant">
        <img
          src={heroBg}
          alt=""
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-background via-background/70 to-transparent" />

        <div className="relative grid gap-10 p-8 md:p-14 md:grid-cols-[1.2fr_1fr] items-center">
          <div className="animate-[fade-up_0.8s_ease-out]">
            <span className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs font-medium text-primary">
              <Sparkles className="h-3 w-3" /> Available for opportunities
            </span>
            <h1 className="mt-5 font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
              Hi, I'm{" "}
              <span className="text-gradient">Sreekanth</span>.
              <br />
              I build <span className="text-gradient">intelligent</span> systems.
            </h1>
            <p className="mt-6 max-w-xl text-base md:text-lg text-muted-foreground leading-relaxed">
              {profile.tagline}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-elegant hover:opacity-90 transition"
              >
                View my work <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-xl glass px-5 py-3 text-sm font-semibold hover:bg-muted/60 transition"
              >
                Get in touch
              </Link>
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 rounded-xl border border-border px-5 py-3 text-sm font-semibold hover:border-primary/60 transition"
              >
                <Download className="h-4 w-4" /> Resume
              </a>
            </div>

            <dl className="mt-10 grid grid-cols-3 gap-6 max-w-md">
              {[
                { k: "1+", v: "Years experience" },
                { k: "10+", v: "AI projects" },
                { k: "6+", v: "Certifications" },
              ].map((s) => (
                <div key={s.v}>
                  <dt className="font-display text-3xl font-bold text-gradient">{s.k}</dt>
                  <dd className="text-xs text-muted-foreground">{s.v}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative mx-auto">
            <div className="absolute -inset-4 rounded-full bg-gradient-aurora blur-2xl opacity-50" />
            <div className="relative h-72 w-72 md:h-80 md:w-80 overflow-hidden rounded-full ring-2 ring-primary/40 shadow-glow animate-[float_6s_ease-in-out_infinite]">
              <img src={avatar} alt={profile.name} className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="mt-20">
        <SectionHeader
          eyebrow="Featured work"
          title="Recent Projects"
          description="A selection of AI engineering and full-stack work, from autonomous agents to fine-tuned LLMs."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {projects.slice(0, 4).map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 rounded-xl glass px-5 py-3 text-sm font-semibold hover:bg-muted/60"
          >
            See all projects <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
