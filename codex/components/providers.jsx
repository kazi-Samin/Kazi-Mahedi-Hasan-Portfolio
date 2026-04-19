"use client";

import { Toaster } from "react-hot-toast";
import { AppStateProvider } from "@/components/app-state-provider";

export function Providers({ children }) {
  return (
    <AppStateProvider>
      {children}
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: "#163f34",
            border: "1px solid rgba(255,255,255,0.14)",
            color: "#f7f4ee",
            borderRadius: "18px",
            padding: "14px 16px",
          },
        }}
      />
    </AppStateProvider>
  );
}
