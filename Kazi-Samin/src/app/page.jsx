"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import TechStack from "@/components/TechStack";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Toast from "@/components/Toast";

export default function Home() {
  const [showToast, setShowToast] = useState(false);

  const handleCopyEmail = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <TechStack />
      <Contact onCopyEmail={handleCopyEmail} />
      <Footer />
      <Toast show={showToast} />
    </main>
  );
}
