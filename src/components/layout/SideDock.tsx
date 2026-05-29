import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { profile } from "@/data/portfolio";

const ITEMS = [
  { href: profile.linkedin, icon: Linkedin, label: "LinkedIn" },
  { href: profile.github, icon: Github, label: "GitHub" },
  { href: `mailto:${profile.email}`, icon: Mail, label: "Email" },
  { href: `tel:${profile.phone}`, icon: Phone, label: "Phone" },
];

/**
 * Floating left-side vertical dock — a secondary persistent navbar
 * for quick access to social/contact links across all routes.
 */
export function SideDock() {
  return (
    <aside className="hidden lg:flex fixed left-4 top-1/2 -translate-y-1/2 z-40 flex-col gap-2 rounded-2xl glass p-2">
      {ITEMS.map(({ href, icon: Icon, label }) => (
        <a
          key={label}
          href={href}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel="noreferrer"
          aria-label={label}
          className="group relative inline-flex h-10 w-10 items-center justify-center rounded-xl text-muted-foreground hover:text-primary hover:bg-muted/60 transition"
        >
          <Icon className="h-4 w-4" />
          <span className="pointer-events-none absolute left-12 whitespace-nowrap rounded-md glass-strong px-2 py-1 text-xs opacity-0 group-hover:opacity-100 transition">
            {label}
          </span>
        </a>
      ))}
      <div className="mx-auto my-1 h-px w-6 bg-border" />
      <span className="text-[10px] tracking-widest text-muted-foreground writing-vertical px-1 pb-2 text-center" style={{ writingMode: "vertical-rl" }}>
        CONNECT
      </span>
    </aside>
  );
}
