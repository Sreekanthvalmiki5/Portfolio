import { Link } from "@tanstack/react-router";
import { profile } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="relative mt-24 border-t border-border/60">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="font-display text-lg font-semibold">
              {profile.name}
            </div>
            <p className="mt-2 text-sm max-w-xs">
              {profile.tagline}
            </p>
          </div>
          <div>
            <div className="text-sm font-semibold mb-3">Navigate</div>
            <ul className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
              <li><Link to="/" className="hover:text-primary">Home</Link></li>
              <li><Link to="/about" className="hover:text-primary">About</Link></li>
              <li><Link to="/projects" className="hover:text-primary">Projects</Link></li>
              <li><Link to="/experience" className="hover:text-primary">Experience</Link></li>
              <li><Link to="/skills" className="hover:text-primary">Skills</Link></li>
              <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
            </ul>
          </div>
          <div>
            <div className="text-sm font-semibold mb-3">Contact</div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a className="hover:text-primary" href={`mailto:${profile.email}`}>{profile.email}</a></li>
              <li><a className="hover:text-primary" href={`tel:${profile.phone}`}>{profile.phone}</a></li>
              <li>{profile.location}</li>
            </ul>
          </div>
        </div>
        {/* <div className="mt-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} {profile.name}. Crafted with care.</div>
          <div className="font-mono">Built with React · TanStack Start · Tailwind</div>
        </div> */}
      </div>
    </footer>
  );
}
