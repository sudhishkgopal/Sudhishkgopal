import { useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import DynamicNodePattern from "./components/DynamicNodePattern";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Projects from "./components/Projects";
import AwardsLeadership from "./components/AwardsLeadership";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ProjectDetail from "./components/ProjectDetail";
import ScrollToTop from "./components/ScrollToTop";
import ScratchReveal from "./components/ScratchReveal";

function HomePage() {
  return (
    <>
      <Hero />
      <DynamicNodePattern />
      <Experience />
      <Education />
      <Projects />
      <AwardsLeadership />
      <Contact />
    </>
  );
}

function ScratchGate() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  const [showScratch] = useState(() => {
    if (!isHome) return false;
    const navType = window.performance?.getEntriesByType?.("navigation")?.[0]?.type;
    const isReload = navType === "reload";
    const scratchDone = sessionStorage.getItem("scratchDone");
    return isReload || !scratchDone;
  });

  if (!showScratch) return null;
  return (
    <ScratchReveal onReveal={() => sessionStorage.setItem("scratchDone", "true")} />
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <ScratchGate />
      <div className="min-h-screen bg-[#FAFAFB] text-[#07080A]">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/project/:id" element={<ProjectDetail />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
