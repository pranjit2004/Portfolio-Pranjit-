
import Navbar from "@/components/layout/navbar";
import Hero from "@/components/sections/Hero/Hero";
import About from "@/components/sections/About/about";
import Skills from "@/components/sections/Skills/skills";
import Experience from "@/components/sections/Experience/experience";
import Testimonials from "@/components/sections/Testimonials/Testimonials";
import Contact from "@/components/sections/Contact/Contact";
import CTA from "@/components/sections/CTA/cta";


export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Testimonials />
      <Contact />
      <CTA />
    </main>
  );
}