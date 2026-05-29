export function SkillBadge({ name, index }: { name: string; index: number }) {
  return (
    <span
      className="inline-flex items-center gap-2 rounded-xl glass px-4 py-2 text-sm font-medium hover-lift"
      style={{ animation: `fade-up 0.5s ease-out ${index * 0.03}s both` }}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-gradient-primary" />
      {name}
    </span>
  );
}
