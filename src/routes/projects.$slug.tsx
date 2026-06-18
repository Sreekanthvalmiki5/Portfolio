import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowUpRight,
  ExternalLink,
  Github,
  BarChart3,
  Lightbulb,
  ShieldCheck,
  Mail,
  CheckCircle2,
  Image as ImageIcon,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/data/portfolio";
import flightAiScreen1 from "@/assets/flightai-screen1.png";
import flightAiScreen2 from "@/assets/flight-screen2.png";
import flightAiScreen3 from "@/assets/flightai-screen3.png"
import flightAiArchitecture from "@/assets/flightai-architecture.png"

import { useState } from "react";
import { useEffect } from "react";




export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }: { params: { slug: string } }) => {
    const project = projects.find((p: { slug: string }) => p.slug === params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }: { loaderData?: { project: typeof projects[number] } }) => ({
    meta: [
      { title: `${loaderData?.project?.title ?? "Project"} — Sreekanth Valmiki` },
      { name: "description", content: loaderData?.project?.description ?? "" },
    ],
  }),
  component: ProjectDetailPage,
  notFoundComponent: () => (
    <div className="flex min-h-[60vh] items-center justify-center px-4">
      <div className="max-w-md text-center glass rounded-2xl p-10">
        <h1 className="text-6xl font-display font-bold text-gradient">404</h1>
        <h2 className="mt-4 text-xl font-semibold">Project not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          This project doesn't exist or may have been removed.
        </p>
        <div className="mt-6">
          <Link
            to="/projects"
            className="inline-flex items-center justify-center rounded-lg bg-gradient-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-elegant hover:opacity-90"
          >
            Back to projects
          </Link>
        </div>
      </div>
    </div>
  ),
});

function ProjectDetailPage() {
  const { project } = Route.useLoaderData();
  // const [currentImage, setCurrentImage] = useState(0);





  const architectureImages = project.architectureImages || [];
  const [currentArchitecture, setCurrentArchitecture] = useState(0);
  const screenshotImages = project.screenshots || [];

  const [currentScreenshot, setCurrentScreenshot] = useState(0);
  useEffect(() => {
  if (screenshotImages.length <= 1) return;

  const interval = setInterval(() => {
    setCurrentScreenshot(
      (prev) => (prev + 1) % screenshotImages.length
    );
  }, 3000);

  return () => clearInterval(interval);
}, [screenshotImages.length]);


  const fadeUpAnimation = (delay: number = 0) => ({
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-50px" as const },
    transition: { duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  });
  const nextImage = () => {
    setCurrentScreenshot(
      (prev) => (prev + 1) % screenshotImages.length
    );
  };

  const prevImage = () => {
    setCurrentScreenshot(
      (prev) =>
        (prev - 1 + screenshotImages.length) %
        screenshotImages.length
    );
  };



  return (
    <div className="mx-auto max-w-6xl px-4 pb-20">
      {/* Back link */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
      >
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to projects
        </Link>
      </motion.div>

      {/* ===== HERO SECTION ===== */}
      <section className="relative overflow-hidden rounded-3xl glass-strong shadow-elegant">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-blue-500/5 to-transparent" />
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />

        <div className="relative p-8 md:p-12">
          {/* Status and category badges */}
          <motion.div
            {...fadeUpAnimation(0)}
            className="flex flex-wrap gap-3 mb-5"
          >
            <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-400">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              {project.status}
            </span>
            <span className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
              {project.category}
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            {...fadeUpAnimation(0.1)}
            className="font-display text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight"
          >
            <span className="text-gradient">{project.title}</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            {...fadeUpAnimation(0.2)}
            className="mt-5 max-w-2xl text-base md:text-lg text-white/70 leading-relaxed"
          >
            {project.longDescription}
          </motion.p>

          {/* Tech badges */}
          <motion.div
            {...fadeUpAnimation(0.3)}
            className="mt-6 flex flex-wrap gap-2"
          >
            {project.tags.map((tag: string) => (
              <Badge
                key={tag}
                variant="secondary"
                className="rounded-full px-3 py-1 text-xs font-medium border border-primary/20 bg-primary/8 text-primary/90 hover:bg-primary/15"
              >
                {tag}
              </Badge>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            {...fadeUpAnimation(0.4)}
            className="mt-8 flex flex-wrap gap-4"
          >
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-elegant hover:opacity-90 transition-all hover:shadow-[0_0_30px_-5px_rgba(6,182,212,0.4)]"
              >
                <ExternalLink className="h-4 w-4" />
                Live Demo
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl glass px-6 py-3 text-sm font-semibold hover:bg-muted/60 transition-all"
              >
                <Github className="h-4 w-4" />
                View Source
              </a>
            )}
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-xl border border-border px-6 py-3 text-sm font-semibold hover:border-primary/60 transition-all"
            >
              <Mail className="h-4 w-4" />
              Contact Me
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ===== OVERVIEW SECTION ===== */}
      {(project.problem || project.businessImpact) && (
        <section className="mt-16">
          <div className="grid gap-6 md:grid-cols-2">
            {project.problem && (
              <motion.div
                {...fadeUpAnimation(0)}
                className="rounded-2xl glass p-6 md:p-8"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/10">
                    <Lightbulb className="h-5 w-5 text-amber-400" />
                  </span>
                  <h2 className="font-display text-xl font-semibold">Problem Statement</h2>
                </div>
                <p className="text-sm text-white/70 leading-relaxed">{project.problem}</p>
              </motion.div>
            )}
            {project.businessImpact && (
              <motion.div
                {...fadeUpAnimation(0.1)}
                className="rounded-2xl glass p-6 md:p-8"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10">
                    <BarChart3 className="h-5 w-5 text-emerald-400" />
                  </span>
                  <h2 className="font-display text-xl font-semibold">Business Impact</h2>
                </div>
                <p className="text-sm text-white/70 leading-relaxed">{project.businessImpact}</p>
              </motion.div>
            )}
          </div>
        </section>
      )}

      {/* ===== FEATURES SECTION ===== */}
      {project.features && project.features.length > 0 && (
        <section className="mt-16">
          <div className="text-center mb-10">
            <span className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">
              Capabilities
            </span>
            <h2 className="mt-2 font-display text-2xl md:text-3xl font-bold">
              Key Features
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              What makes this solution powerful
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {project.features.map((feature, i: number) => (
              <motion.div
                key={feature.title}
                {...fadeUpAnimation(i * 0.1)}
                className="rounded-2xl glass p-6 group hover:border-primary/30 transition-all duration-300 hover:shadow-[0_0_30px_-10px_rgba(6,182,212,0.2)]"
              >
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-primary/20 text-primary mb-4">
                  <CheckCircle2 className="h-4 w-4" />
                </span>
                <h3 className="font-display text-base font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-white/60 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </section>
      )}

      {/* ===== ARCHITECTURE SECTION ===== */}
      {project.architecture && (
        <section className="mt-16">
          <div className="text-center mb-10">
            <span className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">
              How it works
            </span>
            <h2 className="mt-2 font-display text-2xl md:text-3xl font-bold">
              Architecture
            </h2>
          </div>

          <motion.div
            {...fadeUpAnimation(0)}
            className="rounded-2xl glass p-6 md:p-8"
          >
            <div className="flex items-center gap-3 mb-5">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                <ShieldCheck className="h-5 w-5 text-primary" />
              </span>
              <h3 className="font-display text-lg font-semibold">
                System Architecture
              </h3>
            </div>

            <p className="text-sm text-white/70 leading-relaxed mb-6">
              {project.architecture}
            </p>
            {architectureImages.length > 0 && (
              <div className="relative mt-6">

                <img
                  src={architectureImages[currentArchitecture]}
                  alt={`${project.title} Architecture`}
                  className="w-full rounded-2xl"
                />

                <button
                  onClick={() =>
                    setCurrentArchitecture(
                      (prev) =>
                        (prev - 1 + architectureImages.length) %
                        architectureImages.length
                    )
                  }
                  className="absolute left-4 top-1/2 -translate-y-1/2"
                >
                  ←
                </button>

                <button
                  onClick={() =>
                    setCurrentArchitecture(
                      (prev) =>
                        (prev + 1) % architectureImages.length
                    )
                  }
                  className="absolute right-4 top-1/2 -translate-y-1/2"
                >
                  →
                </button>

              </div>
            )}
          </motion.div>
        </section>
      )}

      {/* ===== GALLERY / SCREENSHOTS SECTION ===== */}
      <section className="mt-16">
        <div className="text-center mb-10">
          <span className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">
            Visuals
          </span>
          <h2 className="mt-2 font-display text-2xl md:text-3xl font-bold">
            Gallery
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Screenshots and previews of the application in action
          </p>
        </div>
        <div className="mt-8 relative">
   {screenshotImages.length > 0 ? (
    <>
      <div className="overflow-hidden rounded-2xl border border-primary/20">
        <img
          src={screenshotImages[currentScreenshot]}
          alt={`Screenshot ${currentScreenshot + 1}`}
          className="w-full h-[500px] object-contain bg-black/20"
        />
      </div>

      <button
        onClick={prevImage}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 px-4 py-2 rounded-full"
      >
        ←
      </button>

      <button
        onClick={nextImage}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 px-4 py-2 rounded-full"
      >
        →
      </button>
    </>
  ) : (
    <div className="rounded-2xl glass p-12 text-center border border-primary/10">
      <ImageIcon className="h-12 w-12 mx-auto text-primary/50 mb-4" />

      <h3 className="text-lg font-semibold mb-2">
        Screenshots Coming Soon
      </h3>

      <p className="text-sm text-muted-foreground">
        Screenshots, demos, and visual previews of this project
        will be added shortly.
      </p>
    </div>
  )}
</div>
        {/* <motion.div
          {...fadeUpAnimation(0)}
          className="relative rounded-2xl glass p-8 md:p-12 text-center"
        >
          <div className="relative flex flex-col items-center gap-4">
            <span className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
              <ImageIcon className="h-8 w-8 text-primary/60" />
            </span>
            <div>
              <p className="text-sm font-medium text-muted-foreground">
                Screenshots & demo previews
              </p>
              <p className="text-xs text-muted-foreground/60 mt-1">
                Gallery images will be added soon
              </p>
            </div>
          </div>
          {/* Grid placeholder */}
        {/* <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-3">
            <div className="overflow-hidden rounded-xl border border-primary/10">
            <img
      src={flightAiScreen1}
      alt="Flight AI Assistant"
      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
    /> */}
        {/* </div>
          </div>
        // </motion.div> */}
      </section>

      {/* ===== TECH STACK SECTION ===== */}
      {project.techStack && project.techStack.length > 0 && (
        <section className="mt-16">
          <div className="text-center mb-10">
            <span className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">
              Technology
            </span>
            <h2 className="mt-2 font-display text-2xl md:text-3xl font-bold">
              Tech Stack
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {project.techStack.map((stack, i: number) => (
              <motion.div
                key={stack.category}
                {...fadeUpAnimation(i * 0.1)}
                className="rounded-2xl glass p-5"
              >
                <h3 className="font-display text-sm font-semibold text-primary mb-3 uppercase tracking-wider">
                  {stack.category}
                </h3>
                <ul className="space-y-2">
                  {stack.items.map((item: string) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-sm text-white/70"
                    >
                      <span className="h-1 w-1 rounded-full bg-primary/60" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>
      )}

      {/* ===== CHALLENGES SECTION ===== */}
      {project.challenges && project.challenges.length > 0 && (
        <section className="mt-16">
          <div className="text-center mb-10">
            <span className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">
              Engineering
            </span>
            <h2 className="mt-2 font-display text-2xl md:text-3xl font-bold">
              Challenges Solved
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {project.challenges.map((challenge: string, i: number) => (
              <motion.div
                key={`${i}`}
                {...fadeUpAnimation(i * 0.1)}
                className="rounded-2xl glass p-5 flex items-start gap-4"
              >
                <span className="mt-0.5 inline-flex h-7 w-7 flex-none items-center justify-center rounded-lg bg-amber-500/10 text-xs font-bold text-amber-400">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-sm text-white/70 leading-relaxed">{challenge}</p>
              </motion.div>
            ))}
          </div>
        </section>
      )}

      {/* ===== METRICS SECTION ===== */}
      {project.metrics && project.metrics.length > 0 && (
        <section className="mt-16">
          <div className="text-center mb-10">
            <span className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">
              Results
            </span>
            <h2 className="mt-2 font-display text-2xl md:text-3xl font-bold">
              Performance Metrics
            </h2>
          </div>

          <div className="grid gap-5 grid-cols-2 md:grid-cols-4">
            {project.metrics.map((metric, i: number) => (
              <motion.div
                key={metric.label}
                {...fadeUpAnimation(i * 0.1)}
                className="rounded-2xl glass p-6 text-center group hover:border-primary/30 transition-all duration-300"
              >
                <div className="font-display text-3xl md:text-4xl font-bold text-gradient">
                  {metric.value}
                </div>
                <div className="mt-2 text-xs text-muted-foreground uppercase tracking-wider">
                  {metric.label}
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      )}

      {/* ===== CTA SECTION ===== */}
      <section className="mt-20">
        <motion.div
          {...fadeUpAnimation(0)}
          className="relative overflow-hidden rounded-3xl glass-strong p-8 md:p-12 text-center shadow-elegant"
        >
          {/* Background effects */}
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-blue-500/5 to-transparent" />
          <div className="absolute -top-40 -left-40 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />
          <div className="absolute -bottom-40 -right-40 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />

          <div className="relative">
            <span className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">
              Get in Touch
            </span>
            <h2 className="mt-3 font-display text-2xl md:text-4xl font-bold">
              Interested in this project?
            </h2>
            <p className="mt-4 max-w-lg mx-auto text-sm text-white/70">
              Want to see the full implementation, discuss similar solutions for your needs,
              or collaborate on AI engineering? Let's talk.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-elegant hover:opacity-90 transition-all"
                >
                  <ExternalLink className="h-4 w-4" />
                  Live Demo
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl glass px-6 py-3 text-sm font-semibold hover:bg-muted/60 transition-all"
                >
                  <Github className="h-4 w-4" />
                  GitHub
                </a>
              )}
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-xl border border-border px-6 py-3 text-sm font-semibold hover:border-primary/60 transition-all"
              >
                <Mail className="h-4 w-4" />
                Contact Me
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
