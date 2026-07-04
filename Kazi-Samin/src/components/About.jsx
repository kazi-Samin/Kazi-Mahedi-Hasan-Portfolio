"use client";

import { motion } from "framer-motion";
import {
  fadeLeft,
  staggerContainer,
  staggerItem,
  viewport,
  easeExpo,
} from "@/lib/animations";

const skills = [
  {
    icon: "layers",
    title: "Frontend Development",
    desc: "Pixel-perfect implementation of complex design systems.",
    level: "Expert",
  },
  {
    icon: "dynamic_form",
    title: "React Ecosystem",
    desc: "Building high-performance SPAs and SSR apps with Next.js.",
    level: "Advanced",
  },
  {
    icon: "database",
    title: "Backend & Auth",
    desc: "Secure REST APIs and robust authentication workflows.",
    level: "Proficient",
  },
  {
    icon: "palette",
    title: "UI & Design Sense",
    desc: "Creating editorial-grade layouts with attention to typography.",
    level: "Fluent",
  },
];

function SkillCard({ icon, title, desc, level }) {
  return (
    <motion.div
      variants={staggerItem}
      whileHover={{
        y: -10,
        transition: { type: "spring", stiffness: 350, damping: 20 },
      }}
      className="glass-card p-8 rounded-3xl h-full flex flex-col cursor-default"
    >
      <motion.span
        className="material-symbols-outlined text-[var(--color-primary)] mb-4 block"
        style={{ fontSize: "32px" }}
        whileHover={{ scale: 1.15, rotate: 5 }}
        transition={{ type: "spring", stiffness: 400 }}
        aria-hidden="true"
      >
        {icon}
      </motion.span>
      <h3
        className="text-xl font-semibold text-[var(--color-on-surface)] mb-2"
        style={{ fontFamily: "var(--font-playfair), Playfair Display, serif" }}
      >
        {title}
      </h3>
      <p className="text-base text-[var(--color-on-surface-variant)] mb-4 flex-grow">
        {desc}
      </p>
      <span className="text-[10px] tracking-widest uppercase text-[var(--color-primary)]/70 font-bold px-2 py-1 bg-[var(--color-primary)]/10 rounded self-start">
        {level}
      </span>
    </motion.div>
  );
}

export default function About() {
  return (
    <section
      id="about"
      className="py-24 px-5 md:px-20 max-w-[1280px] mx-auto"
      aria-labelledby="about-heading"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* ── Bio ──────────────────────────────────────── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={fadeLeft}
        >
          <h2
            id="about-heading"
            className="text-3xl font-semibold text-[var(--color-on-surface)] mb-8"
            style={{ fontFamily: "var(--font-playfair), Playfair Display, serif" }}
          >
            Who I Am &amp; <br />
            <span className="text-[var(--color-primary)]">What I Build</span>
          </h2>
          <p className="text-lg text-[var(--color-on-surface-variant)] mb-6 leading-relaxed">
            I am a student at Noakhali Science and Technology University with a
            deep-seated passion for engineering clean, intuitive User Interfaces.
            My journey in tech is driven by the desire to merge aesthetic excellence
            with robust architectural principles.
          </p>
          <p className="text-lg text-[var(--color-on-surface-variant)] mb-8 leading-relaxed">
            Currently, I&apos;m focusing my energy on mastering scalable backend
            systems and exploring the intersection of modern frontend frameworks
            with high-performance server-side logic.
          </p>
          <div className="flex flex-wrap gap-4">
            {["NSTU Scholar", "Open Source Contributor"].map((tag) => (
              <motion.div
                key={tag}
                whileHover={{ scale: 1.05, y: -2 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                className="px-4 py-2 rounded-lg bg-[var(--color-surface-container)]
                  border border-[var(--color-outline-variant)]/30
                  text-[var(--color-on-surface)] text-sm font-medium cursor-default"
              >
                {tag}
              </motion.div>
            ))}
          </div>

          {/* Portfolio Repo Link */}
          <div className="flex flex-wrap gap-3 mt-6">
            <motion.a
              href="https://kazi-mahedi-hasan-portfolio.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, boxShadow: "0 0 25px var(--color-primary)/40" }}
              whileTap={{ scale: 0.96 }}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all"
              style={{
                background: "linear-gradient(135deg, var(--color-primary) 0%, color-mix(in srgb, var(--color-primary) 70%, black) 100%)",
                color: "#fff",
              }}
            >
              <span className="material-symbols-outlined text-[16px]">open_in_new</span>
              Live Portfolio
            </motion.a>
            <motion.a
              href="https://github.com/kazi-Samin/Kazi-Mahedi-Hasan-Portfolio"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold glass-card
                border border-[var(--color-outline-variant)]/30 text-[var(--color-on-surface)] transition-all
                hover:border-[var(--color-primary)]/50 hover:text-[var(--color-primary)]"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current flex-shrink-0">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
              </svg>
              Portfolio Source
            </motion.a>
          </div>
        </motion.div>

        {/* ── Skill Cards (stagger) ─────────────────────── */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={staggerContainer}
        >
          {skills.map((skill) => (
            <SkillCard key={skill.title} {...skill} />
          ))}
        </motion.div>

      </div>
    </section>
  );
}
