"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

export default function Contact({ onCopyEmail }) {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [focusedField, setFocusedField] = useState(null);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText("kazisamin0173@gmail.com");
      onCopyEmail();
    } catch (err) {
      console.error("Failed to copy email:", err);
    }
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");
    
    // Fallback directly to mailto since FormSubmit requires activation
    setTimeout(() => {
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
      );
      const subject = encodeURIComponent(formData.subject || "Portfolio Contact");
      window.open(`mailto:kazisamin0173@gmail.com?subject=${subject}&body=${body}`);
      
      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      
      setTimeout(() => setStatus("idle"), 5000);
    }, 600);
  };

  const inputBase =
    "w-full bg-[var(--color-surface-container)] border rounded-2xl px-5 py-4 text-sm text-[var(--color-on-surface)] placeholder:text-[var(--color-on-surface-variant)]/50 outline-none transition-all duration-300 resize-none";

  const inputClass = (field) =>
    `${inputBase} ${
      focusedField === field
        ? "border-[var(--color-primary)] shadow-[0_0_0_3px_var(--color-primary)/15]"
        : "border-[var(--color-outline-variant)]/30 hover:border-[var(--color-outline-variant)]/60"
    }`;

  return (
    <section
      id="contact"
      className="relative pt-24 pb-12 overflow-hidden bg-[var(--color-background)]"
      aria-labelledby="contact-heading"
    >
      {/* Glow Accents */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[var(--color-primary)]/10 blur-[120px] rounded-full -z-10" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#8b5cf6]/10 blur-[120px] rounded-full -z-10" />

      <div className="max-w-[1280px] mx-auto px-5 md:px-20">
        {/* Header */}
        <ScrollReveal className="text-center mb-16">
          <span className="text-xs tracking-[0.4em] uppercase text-[var(--color-primary)] font-bold mb-4 block">
            GET IN TOUCH
          </span>
          <h2
            id="contact-heading"
            className="text-[40px] md:text-[64px] leading-tight font-bold text-[var(--color-on-surface)] mb-6"
            style={{ fontFamily: "var(--font-playfair), Playfair Display, serif" }}
          >
            Let&apos;s Build Something <br /> Great Together
          </h2>
          <p className="text-lg text-[var(--color-on-surface-variant)] max-w-2xl mx-auto leading-relaxed">
            I&apos;m always open to discussing projects, collaborations, internships,
            and exciting new opportunities.
          </p>
        </ScrollReveal>

        {/* Main Grid: Form + Contact Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-32 items-start">

          {/* ── CONTACT FORM ── */}
          <ScrollReveal className="lg:col-span-3">
            <div className="relative glass-card rounded-[2.5rem] p-8 md:p-10 overflow-hidden">
              {/* Background glow */}
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-[var(--color-primary)]/10 blur-[80px] rounded-full pointer-events-none" />

              <div className="mb-8">
                <span className="text-[11px] tracking-[0.25em] uppercase font-bold text-[var(--color-primary)] block mb-2">
                  Send a Message
                </span>
                <h3 className="text-2xl font-light text-[var(--color-on-surface)]">
                  Drop me a line directly
                </h3>
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
                {/* Name + Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-[var(--color-on-surface-variant)] tracking-wider uppercase pl-1">
                      Your Name *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      required
                      placeholder="Kazi Mahedi..."
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("name")}
                      onBlur={() => setFocusedField(null)}
                      className={inputClass("name")}
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-[var(--color-on-surface-variant)] tracking-wider uppercase pl-1">
                      Your Email *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      required
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("email")}
                      onBlur={() => setFocusedField(null)}
                      className={inputClass("email")}
                    />
                  </div>
                </div>

                {/* Subject */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-[var(--color-on-surface-variant)] tracking-wider uppercase pl-1">
                    Subject
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    name="subject"
                    placeholder="Project collaboration, internship, freelance..."
                    value={formData.subject}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("subject")}
                    onBlur={() => setFocusedField(null)}
                    className={inputClass("subject")}
                  />
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-[var(--color-on-surface-variant)] tracking-wider uppercase pl-1">
                    Message *
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell me about your project, idea, or opportunity..."
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("message")}
                    onBlur={() => setFocusedField(null)}
                    className={inputClass("message")}
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={status === "sending" || status === "success"}
                  whileHover={{ scale: status === "idle" ? 1.02 : 1 }}
                  whileTap={{ scale: status === "idle" ? 0.97 : 1 }}
                  className="relative w-full py-4 rounded-2xl text-sm font-bold tracking-wide overflow-hidden transition-all duration-300 disabled:cursor-not-allowed"
                  style={{
                    background:
                      status === "success"
                        ? "linear-gradient(135deg, #10b981, #059669)"
                        : status === "error"
                        ? "linear-gradient(135deg, #ef4444, #dc2626)"
                        : "linear-gradient(135deg, var(--color-primary), color-mix(in srgb, var(--color-primary) 70%, black))",
                    color: "#fff",
                    boxShadow:
                      status === "idle"
                        ? "0 8px 32px var(--color-primary)/30"
                        : "none",
                  }}
                >
                  <AnimatePresence mode="wait">
                    {status === "idle" && (
                      <motion.span
                        key="idle"
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        className="flex items-center justify-center gap-2"
                      >
                        <span className="material-symbols-outlined text-[18px]">send</span>
                        Send Message
                      </motion.span>
                    )}
                    {status === "sending" && (
                      <motion.span
                        key="sending"
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        className="flex items-center justify-center gap-2"
                      >
                        <span className="material-symbols-outlined text-[18px] animate-spin">progress_activity</span>
                        Opening Email App...
                      </motion.span>
                    )}
                    {status === "success" && (
                      <motion.span
                        key="success"
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        className="flex items-center justify-center gap-2"
                      >
                        <span className="material-symbols-outlined text-[18px]">check_circle</span>
                        Draft Created! Please send it from your app 🎉
                      </motion.span>
                    )}
                    {status === "error" && (
                      <motion.span
                        key="error"
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        className="flex items-center justify-center gap-2"
                      >
                        <span className="material-symbols-outlined text-[18px]">error</span>
                        Failed to open app. Try emailing directly.
                      </motion.span>
                    )}
                  </AnimatePresence>
                </motion.button>

                <p className="text-center text-[11px] text-[var(--color-on-surface-variant)]/50">
                  Your message goes directly to my inbox. I typically respond within 24 hours.
                </p>
              </form>
            </div>
          </ScrollReveal>

          {/* ── CONTACT CARDS ── */}
          <ScrollReveal className="lg:col-span-2 flex flex-col gap-5">

            {/* Email Card */}
            <a
              href="mailto:kazisamin0173@gmail.com"
              className="group relative glass-card p-7 rounded-[2rem] flex items-center gap-5
                transition-all duration-500 hover:-translate-y-1
                hover:shadow-[0_12px_32px_rgba(59,130,246,0.15)] overflow-hidden cursor-pointer"
            >
              <div className="absolute inset-0 bg-[var(--color-primary)]/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="w-14 h-14 rounded-2xl bg-[var(--color-surface-container)] flex-shrink-0
                flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="material-symbols-outlined text-[var(--color-primary)] text-2xl">mail</span>
              </div>
              <div className="flex-1 min-w-0">
                <span className="text-[10px] tracking-widest uppercase font-bold text-[var(--color-on-surface-variant)] block mb-1">
                  Email
                </span>
                <span className="text-sm font-semibold text-[var(--color-on-surface)] group-hover:text-[var(--color-primary)] transition-colors truncate block">
                  kazisamin0173@gmail.com
                </span>
              </div>
              <div className="flex gap-2 flex-shrink-0">
                <button
                  onClick={(e) => { e.preventDefault(); e.stopPropagation(); handleCopy(); }}
                  className="p-2 rounded-xl border border-[var(--color-outline-variant)]/30 text-[var(--color-on-surface-variant)]
                    hover:text-[var(--color-primary)] hover:border-[var(--color-primary)]/40 transition-all"
                  title="Copy email"
                >
                  <span className="material-symbols-outlined text-[16px]">content_copy</span>
                </button>
              </div>
            </a>

            {/* LinkedIn Card */}
            <a
              href="https://www.linkedin.com/in/kazi-mahedi-hasan"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative glass-card p-7 rounded-[2rem] flex items-center gap-5
                transition-all duration-500 hover:-translate-y-1
                hover:shadow-[0_12px_32px_rgba(0,119,181,0.15)] overflow-hidden"
            >
              <div className="absolute inset-0 bg-[#0077b5]/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="w-14 h-14 rounded-2xl bg-[var(--color-surface-container)] flex-shrink-0
                flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-[#0077b5]">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <span className="text-[10px] tracking-widest uppercase font-bold text-[var(--color-on-surface-variant)] block mb-1">
                  LinkedIn
                </span>
                <span className="text-sm font-semibold text-[var(--color-on-surface)] group-hover:text-[#0077b5] transition-colors block">
                  Kazi Mahedi Hasan
                </span>
              </div>
              <span className="material-symbols-outlined text-[var(--color-on-surface-variant)] group-hover:text-[#0077b5] transition-colors text-[18px]">north_east</span>
            </a>

            {/* GitHub Card */}
            <a
              href="https://github.com/kazi-Samin"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative glass-card p-7 rounded-[2rem] flex items-center gap-5
                transition-all duration-500 hover:-translate-y-1
                hover:shadow-[0_12px_32px_rgba(139,92,246,0.15)] overflow-hidden"
            >
              <div className="absolute inset-0 bg-[#8b5cf6]/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="w-14 h-14 rounded-2xl bg-[var(--color-surface-container)] flex-shrink-0
                flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-[var(--color-on-surface)]">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <span className="text-[10px] tracking-widest uppercase font-bold text-[var(--color-on-surface-variant)] block mb-1">
                  GitHub
                </span>
                <span className="text-sm font-semibold text-[var(--color-on-surface)] group-hover:text-[#8b5cf6] transition-colors block">
                  kazi-Samin
                </span>
              </div>
              <span className="material-symbols-outlined text-[var(--color-on-surface-variant)] group-hover:text-[#8b5cf6] transition-colors text-[18px]">north_east</span>
            </a>

            {/* Availability Badge */}
            <div className="glass-card p-6 rounded-[2rem] flex items-center gap-4">
              <div className="relative flex-shrink-0">
                <div className="w-3 h-3 rounded-full bg-emerald-400" />
                <div className="absolute inset-0 w-3 h-3 rounded-full bg-emerald-400 animate-ping opacity-60" />
              </div>
              <div>
                <p className="text-sm font-semibold text-[var(--color-on-surface)]">Available for Work</p>
                <p className="text-xs text-[var(--color-on-surface-variant)]">Open to internships & freelance projects</p>
              </div>
            </div>

          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
