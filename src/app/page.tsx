import About from "@/components/about/About";
import Expertise from "@/components/expertise/Expertise";
import Hero from "@/components/hero/Hero";
import Navbar from "@/components/layout/Navbar";
import Projects from "@/components/projects/Projects";
import Certifications from "@/components/certifications/Certifications";
import Contact from "@/components/contact/Contact";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="overflow-x-hidden">
        <Hero />
        <About />
        <Expertise />
        <Projects />
        <Certifications />
        <Contact />
      </main>
    </>
  );
}