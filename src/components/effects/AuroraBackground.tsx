/**
 * Decorative full-page background: animated aurora blobs + subtle grid.
 * Pointer-events disabled so it never blocks UI.
 */
export function AuroraBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div
        className="absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full blur-3xl opacity-40 bg-gradient-aurora"
        style={{ animationDuration: "22s" }}
      />
      <div
        className="absolute top-1/3 -right-40 h-[600px] w-[600px] rounded-full blur-3xl opacity-30 bg-gradient-aurora"
        style={{ animationDuration: "26s", animationDelay: "-8s" }}
      />
      <div
        className="absolute -bottom-40 left-1/4 h-[500px] w-[500px] rounded-full blur-3xl opacity-30 bg-gradient-aurora"
        style={{ animationDuration: "28s", animationDelay: "-14s" }}
      />
    </div>
  );
}
