import { Playfair_Display } from "next/font/google";
import Providers from "@/components/Providers";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata = {
  title: "Kazi Mahedi Hasan | Full Stack Developer",
  description:
    "Full Stack Developer building responsive, scalable, and modern web applications using Next.js, React, Tailwind CSS, Node.js, and Express.js.",
  keywords: [
    "Kazi Mahedi Hasan",
    "Kazi Samin",
    "Full Stack Developer",
    "Next.js",
    "React",
    "Portfolio",
    "Frontend Developer",
    "NSTU",
  ],
  authors: [{ name: "Kazi Mahedi Hasan" }],
  openGraph: {
    title: "Kazi Mahedi Hasan | Full Stack Developer",
    description:
      "Frontend-Focused Full Stack Developer building polished digital experiences.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={playfair.variable}>
        {/* Providers combines ThemeProvider + LenisProvider */}
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
