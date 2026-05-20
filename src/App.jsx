import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import DynamicNodePattern from "./components/DynamicNodePattern";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ProjectDetail from "./components/ProjectDetail";
import ScrollToTop from "./components/ScrollToTop";
import ScratchReveal from "./components/ScratchReveal";

function HomePage() {
  return (
    <>
      <ScratchReveal />
      <Hero />
      <DynamicNodePattern />
      <Experience />
      <Education />
      <Projects />
      <Contact />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
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
