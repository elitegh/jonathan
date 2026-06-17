import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Education } from "@/components/Education";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

function BackgroundAccents() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 overflow-hidden"
    >
      <div className="absolute -top-24 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-indigo-500/10 blur-3xl" />
      <div className="absolute top-[240px] -left-28 h-[420px] w-[420px] rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="absolute -bottom-56 -right-28 h-[520px] w-[520px] rounded-full bg-indigo-500/10 blur-3xl" />
    </div>
  );
}

export default function Home() {
  return (
    <>
      <BackgroundAccents />
      <Header />
      <main id="top">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Education />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
