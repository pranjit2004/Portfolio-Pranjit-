
import Navbar from "@/components/layout/navbar";
import Hero from "@/components/sections/Hero/Hero";
import About from "@/components/sections/About/about";
import Skills from "@/components/sections/Skills/skills";
import Experience from "@/components/sections/Experience/experience";
import FeaturedProjects from "@/components/sections/FeaturedProjects/featured";
import Contact from "@/components/sections/Contact/Contact";


export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <FeaturedProjects />
      <Contact />
    </main>
  );
}