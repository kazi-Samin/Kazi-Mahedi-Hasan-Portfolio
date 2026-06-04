"use client";

import { AnimatePresence, motion } from "framer-motion";

export default function Toast({ show }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="toast"
          initial={{ opacity: 0, y: 60, x: "-50%", scale: 0.9 }}
          animate={{ opacity: 1, y: 0, x: "-50%", scale: 1 }}
          exit={{ opacity: 0, y: 20, x: "-50%", scale: 0.95 }}
          transition={{ type: "spring", stiffness: 380, damping: 30 }}
          className="fixed bottom-8 left-1/2 z-[9999]
            bg-[var(--color-surface-container-highest)]
            border border-[var(--color-primary)]/30
            text-[var(--color-on-surface)]
            px-6 py-3 rounded-full shadow-2xl
            flex items-center gap-3
            backdrop-blur-md"
          role="status"
          aria-live="polite"
        >
          <motion.span
            initial={{ rotate: -30, scale: 0 }}
            animate={{ rotate: 0, scale: 1 }}
            transition={{ delay: 0.1, type: "spring", stiffness: 400 }}
            className="material-symbols-outlined text-[var(--color-primary)] text-xl"
          >
            check_circle
          </motion.span>
          <span className="text-sm font-medium">Email copied to clipboard!</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
