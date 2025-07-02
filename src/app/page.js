import Footer from "@/components/Footer";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home({ onContactClick }) {
  return (
    <main>
      <Projects />
      <Skills />
    </main>
  );
}
