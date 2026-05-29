import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Phone, MapPin, Linkedin, Send, CheckCircle2 } from "lucide-react";
import { profile } from "@/data/portfolio";
import { SectionHeader } from "@/components/sections/SectionHeader";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Sreekanth Valmiki" },
      { name: "description", content: "Get in touch with Sreekanth Valmiki for AI engineering, full-stack, or consulting opportunities." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.get("name")}`);
    const body = encodeURIComponent(`${form.get("message")}\n\n— ${form.get("name")} (${form.get("email")})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <div className="mx-auto max-w-6xl px-4">
      <SectionHeader
        eyebrow="Let's connect"
        title="Get in touch"
        description="Open to AI engineering roles, freelance projects, and interesting collaborations."
      />

      <div className="grid gap-8 md:grid-cols-[1fr_1.2fr]">
        <aside className="rounded-2xl glass p-6 space-y-4">
          <ContactRow icon={Mail} label="Email" value={profile.email} href={`mailto:${profile.email}`} />
          <ContactRow icon={Phone} label="Phone" value={profile.phone} href={`tel:${profile.phone}`} />
          <ContactRow icon={MapPin} label="Location" value={profile.location} />
          <ContactRow icon={Linkedin} label="LinkedIn" value="sreekanth-valmiki" href={profile.linkedin} />
        </aside>

        <form onSubmit={onSubmit} className="rounded-2xl glass p-6 space-y-4">
          <Field label="Your name" name="name" placeholder="Jane Doe" required />
          <Field label="Email" name="email" type="email" placeholder="jane@company.com" required />
          <Field label="Message" name="message" textarea placeholder="Tell me about your project or role…" required />

          <button
            type="submit"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-elegant hover:opacity-90 transition"
          >
            {sent ? (
              <>
                <CheckCircle2 className="h-4 w-4" /> Opening your mail app…
              </>
            ) : (
              <>
                <Send className="h-4 w-4" /> Send message
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}

function ContactRow({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: typeof Mail;
  label: string;
  value: string;
  href?: string;
}) {
  const inner = (
    <div className="flex items-center gap-3 rounded-xl p-3 hover:bg-muted/50 transition">
      <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-primary shadow-glow">
        <Icon className="h-4 w-4 text-primary-foreground" />
      </span>
      <div>
        <div className="text-xs uppercase tracking-widest text-muted-foreground">{label}</div>
        <div className="text-sm font-medium">{value}</div>
      </div>
    </div>
  );
  return href ? <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">{inner}</a> : inner;
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
  textarea,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  textarea?: boolean;
}) {
  const cls =
    "w-full rounded-xl border border-border bg-input/40 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 focus:outline-none focus:ring-2 focus:ring-primary/60 focus:border-primary/60 transition";
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-medium uppercase tracking-widest text-muted-foreground">
        {label}
      </span>
      {textarea ? (
        <textarea name={name} placeholder={placeholder} required={required} rows={5} className={cls} />
      ) : (
        <input name={name} type={type} placeholder={placeholder} required={required} className={cls} />
      )}
    </label>
  );
}
