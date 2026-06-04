"use client";

import { ThemeProvider } from "next-themes";
import LenisProvider from "./LenisProvider";

/**
 * Providers — combines all client-side global providers.
 * Keeps layout.jsx as a clean server component.
 */
export default function Providers({ children }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem={false}
      disableTransitionOnChange={false}
    >
      <LenisProvider>{children}</LenisProvider>
    </ThemeProvider>
  );
}
