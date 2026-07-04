import ScrollReveal from "./ScrollReveal";

const techCategories = [
  {
    category: "Frontend",
    techs: [
      { label: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { label: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
      { label: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { label: "React.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { label: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
      { label: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
      { label: "Framer Motion", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/framermotion/framermotion-original.svg" },
      { label: "Vite", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg" },
      { label: "React Router", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/reactrouter/reactrouter-original.svg" },
    ],
  },
  {
    category: "UI Libraries",
    techs: [
      { label: "HeroUI", icon: "https://avatars.githubusercontent.com/u/86160567?s=64&v=4" },
      { label: "DaisyUI", icon: "https://img.daisyui.com/images/daisyui-logo/daisyui-logomark.svg" },
    ],
  },
  {
    category: "Backend",
    techs: [
      { label: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { label: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
      { label: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      { label: "Better Auth", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oauth/oauth-original.svg" },
      { label: "Stripe", icon: "https://cdn.brandfetch.io/idxAg10C0L/theme/dark/symbol.svg" },
      { label: "Google OAuth", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" },
      { label: "Axios", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/axios/axios-plain.svg" },
    ],
  },
  {
    category: "Tools & DevOps",
    techs: [
      { label: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { label: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
      { label: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
      { label: "Vercel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg" },
      { label: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
      { label: "npm", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" },
    ],
  },
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

        {/* Tech Categories */}
        <div className="flex flex-col gap-10">
          {techCategories.map(({ category, techs }) => (
            <ScrollReveal key={category}>
              {/* Category Label */}
              <div className="flex items-center gap-3 mb-5">
                <span className="text-xs tracking-[0.25em] uppercase font-bold text-[var(--color-primary)]">
                  {category}
                </span>
                <div className="flex-1 h-[1px] bg-[var(--color-outline-variant)]/30" />
              </div>

              {/* Tech Grid */}
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-9 gap-4">
                {techs.map(({ icon, label }) => (
                  <div
                    key={label}
                    className="glass-card p-4 rounded-2xl flex flex-col items-center gap-3
                      group hover:border-[var(--color-primary)]/50 transition-all cursor-default"
                  >
                    <div className="w-11 h-11 flex items-center justify-center rounded-xl
                      bg-[var(--color-surface-container)] group-hover:scale-110 transition-transform p-2">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={icon}
                        alt={label}
                        width={36}
                        height={36}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <span className="text-[11px] font-medium text-center leading-tight text-[var(--color-on-surface-variant)] group-hover:text-[var(--color-primary)] transition-colors">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
