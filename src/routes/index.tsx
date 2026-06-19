import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Download, Sparkles, GraduationCap, Award, MapPin, Mail, Phone } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import profileimg from "@/assets/profile.png";
import { profile, projects, experiences, skills, education, certifications } from "@/data/portfolio";
import { ProjectCard } from "@/components/cards/ProjectCard";
import { ExperienceCard } from "@/components/cards/ExperienceCard";
import { SkillBadge } from "@/components/cards/SkillBadge";
import { SectionHeader } from "@/components/sections/SectionHeader";

const SKILL_ORDER = ["AI", "Languages", "Backend", "Frontend", "DevOps", "Engineering"];

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
            <p className="mt-6 max-w-xl text-base md:text-lg text-white leading-relaxed">
              {profile.tagline}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 rounded-xl  px-5 py-3 text-sm font-semibold text-primary-foreground shadow-elegant hover:opacity-90 transition"
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
                href="/Sreekanth_Valmiki_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-border px-5 py-3 text-sm font-semibold hover:border-primary/60 transition"
              >
                <Download className="h-4 w-4" /> Resume
              </a>
            </div>

            <dl className="mt-10 grid grid-cols-3 gap-6 max-w-md">
              {[
                { k: "2+", v: "Years experience" },
                { k: "10+", v: "AI projects" },
                { k: "10+", v: "Certifications" },
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
              <img src={profileimg} alt={profile.name} className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="mt-20 text-white">
        <SectionHeader 
          eyebrow="Featured work"
          title="Projects"
          description="A selection of AI engineering and full-stack work, from autonomous agents to fine-tuned LLMs."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {projects.slice(0, 4).map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i} />
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

      {/* ABOUT */}
      <section className="mt-20">
        <SectionHeader
          eyebrow="About me"
          title="Engineering at the intersection of AI and product"
          description={profile.summary}
        />

        <div className="grid gap-6 md:grid-cols-3 mb-10">
          <div className="rounded-2xl glass p-5">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-muted">
                <MapPin className="h-4 w-4 text-primary" />
              </span>
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Location</div>
                <div className="text-sm font-medium">{profile.location}</div>
              </div>
            </div>
          </div>
          <a href={`mailto:${profile.email}`}>
            <div className="rounded-2xl glass p-5 hover-lift">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-muted">
                  <Mail className="h-4 w-4 text-primary" />
                </span>
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">Email</div>
                  <div className="text-sm font-medium">{profile.email}</div>
                </div>
              </div>
            </div>
          </a>
          <a href={`tel:${profile.phone}`}>
            <div className="rounded-2xl glass p-5 hover-lift">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-muted">
                  <Phone className="h-4 w-4 text-primary" />
                </span>
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">Phone</div>
                  <div className="text-sm font-medium">{profile.phone}</div>
                </div>
              </div>
            </div>
          </a>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <section className="rounded-2xl glass p-6">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-primary shadow-glow">
                <GraduationCap className="h-5 w-5 text-primary-foreground" />
              </span>
              <h3 className="font-display text-xl font-semibold">Education</h3>
            </div>
            <ul className="mt-6 space-y-5">
              {education.map((e) => (
                <li key={e.school} className="border-l-2 border-primary/40 pl-4">
                  <div className="font-semibold">{e.degree}</div>
                  <div className="text-sm text-muted-foreground">{e.school}</div>
                  <div className="mt-1 flex gap-3 text-xs text-muted-foreground">
                    <span>{e.period}</span>
                    <span className="text-primary">{e.score}</span>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          <section className="rounded-2xl glass p-6">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-primary shadow-glow">
                <Award className="h-5 w-5 text-primary-foreground" />
              </span>
              <h3 className="font-display text-xl font-semibold">Certifications</h3>
            </div>
            <ul className="mt-6 space-y-3">
              {certifications.slice(0, 4).map((c) => (
                <li key={c} className="flex gap-3 text-sm text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-primary" />
                  <span>{c}</span>
                </li>
              ))}
              <li className="pt-2">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
                >
                  View all certifications <ArrowRight className="h-3 w-3" />
                </Link>
              </li>
            </ul>
          </section>
        </div>

        <div className="mt-8 text-center">
          <Link
            to="/about"
            className="inline-flex items-center gap-2 rounded-xl glass px-5 py-3 text-sm font-semibold hover:bg-muted/60"
          >
            More about me <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="mt-20">
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
        <div className="mt-8 text-center">
          <Link
            to="/experience"
            className="inline-flex items-center gap-2 rounded-xl glass px-5 py-3 text-sm font-semibold hover:bg-muted/60"
          >
            Full career history <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* SKILLS */}
      <section className="mt-20">
        <SectionHeader
          eyebrow="Toolbox"
          title="Skills & Technologies"
          description="The stack I use day-to-day to ship reliable, intelligent products."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {SKILL_ORDER.map((cat, gi) => {
            const items = skills.filter((s) => s.category === cat);
            if (!items.length) return null;
            return (
              <section
                key={cat}
                className="rounded-2xl glass p-6"
                style={{ animation: `fade-up 0.6s ease-out ${gi * 0.08}s both` }}
              >
                <h3 className="font-display text-lg font-semibold mb-4">
                  <span className="text-gradient">{cat}</span>
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((s, i) => (
                    <SkillBadge key={s.name} name={s.name} index={i} />
                  ))}
                </div>
              </section>
            );
          })}
        </div>

        <div className="mt-8 text-center">
          <Link
            to="/skills"
            className="inline-flex items-center gap-2 rounded-xl glass px-5 py-3 text-sm font-semibold hover:bg-muted/60"
          >
            All skills & technologies <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
