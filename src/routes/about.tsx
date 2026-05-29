import { createFileRoute } from "@tanstack/react-router";
import { profile, education, certifications } from "@/data/portfolio";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { GraduationCap, Award, MapPin, Mail, Phone } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Sreekanth Valmiki" },
      { name: "description", content: "About Sreekanth Valmiki — AI engineer, education, certifications, and background." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-4">
      <SectionHeader
        eyebrow="About me"
        title="Engineering at the intersection of AI and product"
        description={profile.summary}
      />

      <div className="grid gap-6 md:grid-cols-3">
        <InfoCard icon={MapPin} label="Location" value={profile.location} />
        <InfoCard icon={Mail} label="Email" value={profile.email} href={`mailto:${profile.email}`} />
        <InfoCard icon={Phone} label="Phone" value={profile.phone} href={`tel:${profile.phone}`} />
      </div>

      <div className="mt-16 grid gap-8 md:grid-cols-2">
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
            {certifications.map((c) => (
              <li key={c} className="flex gap-3 text-sm text-muted-foreground">
                <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-primary" />
                <span>{c}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}

function InfoCard({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: typeof MapPin;
  label: string;
  value: string;
  href?: string;
}) {
  const Content = (
    <div className="rounded-2xl glass p-5 hover-lift">
      <div className="flex items-center gap-3">
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-muted">
          <Icon className="h-4 w-4 text-primary" />
        </span>
        <div>
          <div className="text-xs uppercase tracking-widest text-muted-foreground">{label}</div>
          <div className="text-sm font-medium">{value}</div>
        </div>
      </div>
    </div>
  );
  return href ? <a href={href}>{Content}</a> : Content;
}
