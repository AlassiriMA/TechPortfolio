import { Toaster } from "@/components/ui/toaster";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

/**
 * Main application component that renders all sections of the portfolio
 * 
 * @returns The complete portfolio website
 */
function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
      <Toaster />
    </>
  );
}

export default App;
