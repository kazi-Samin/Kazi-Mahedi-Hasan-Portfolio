import ScrollReveal from "./ScrollReveal";

const techs = [
  { icon: "html", label: "HTML5" },
  { icon: "css", label: "CSS3" },
  { icon: "javascript", label: "JS ES6+" },
  { icon: "rebase_edit", label: "React.js" },
  { icon: "cloud_sync", label: "Next.js" },
  { icon: "palette", label: "Tailwind" },
  { icon: "dns", label: "Node.js" },
  { icon: "settings_ethernet", label: "Express" },
  { icon: "storage", label: "MongoDB" },
  { icon: "shield_person", label: "Auth.js" },
];

export default function TechStack() {
  return (
    <section
      id="tech"
      className="py-24 bg-[var(--color-surface-container-low)]/30 overflow-hidden"
      aria-labelledby="tech-heading"
    >
      <div className="max-w-[1280px] mx-auto px-5 md:px-20">
        {/* Header */}
        <ScrollReveal className="text-center mb-16">
          <h2
            id="tech-heading"
            className="text-3xl font-semibold text-[var(--color-on-surface)] mb-4"
            style={{ fontFamily: "var(--font-playfair), Playfair Display, serif" }}
          >
            Technical Arsenal
          </h2>
          <p className="text-lg text-[var(--color-on-surface-variant)] max-w-xl mx-auto">
            The tools I leverage to turn complex problems into elegant digital solutions.
          </p>
        </ScrollReveal>

        {/* Tech Grid */}
        <ScrollReveal>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {techs.map(({ icon, label }) => (
              <div
                key={label}
                className="glass-card p-6 rounded-2xl flex flex-col items-center gap-3
                  group hover:border-[var(--color-primary)]/50 transition-all cursor-default"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-xl
                  bg-[var(--color-surface-container)] group-hover:scale-110 transition-transform">
                  <span
                    className="material-symbols-outlined text-[var(--color-primary)]"
                    aria-hidden="true"
                  >
                    {icon}
                  </span>
                </div>
                <span className="text-sm font-medium tracking-widest text-[var(--color-on-surface)]">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
