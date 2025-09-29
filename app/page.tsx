import Hero from "./components/Hero";
import About from "./components/About";
import BlogPage from "./components/blog/page";
import Projects from "./components/Project";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <BlogPage />
      <Skills />
      <Contact />
    </>
  );
}
