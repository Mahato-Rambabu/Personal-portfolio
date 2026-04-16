import Footer from "@/components/Footer";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import About from "@/components/About";

export default function Home({ onContactClick }) {
  return (
    <main>
      <About />
      <Projects />
      <Skills />
    </main>
  );
}
