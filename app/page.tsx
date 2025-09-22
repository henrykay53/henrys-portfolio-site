import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Project";
import Skills from "./components/Skills";
import Contact from "./components/Contact";



export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      
      
      {/* Projects, Blog, Skills, Contact will follow */}
    </>
  );
}
