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
