import { Toaster } from "@/components/ui/toaster";
import { Route, Switch } from "wouter";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import ProjectDetail from "./pages/ProjectDetail";
import NotFound from "./pages/not-found";

/**
 * Homepage component that renders the main portfolio sections
 * 
 * @returns The portfolio homepage
 */
const HomePage = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Projects />
        <Skills />
      </main>
      <Footer />
    </>
  );
};

/**
 * Main application component that handles routing
 * 
 * @returns The complete portfolio website with routing
 */
function App() {
  return (
    <>
      <Switch>
        <Route path="/" component={HomePage} />
        <Route path="/project/:id" component={ProjectDetail} />
        <Route component={NotFound} />
      </Switch>
      <Toaster />
    </>
  );
}

export default App;
