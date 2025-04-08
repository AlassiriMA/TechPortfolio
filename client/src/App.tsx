import { Toaster } from "@/components/ui/toaster";
import { Route, Switch } from "wouter";
import { useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import ProjectDetail from "./pages/ProjectDetail";
import NotFound from "./pages/not-found";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import Sitemap from "./pages/Sitemap";

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
  // Add JSON-LD structured data for the homepage
  useEffect(() => {
    // Create JSON-LD schema for the homepage
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'ProfilePage',
      'mainEntity': {
        '@type': 'Person',
        'name': 'Mohammad A Alassiri',
        'url': 'https://mohammadalassiri.com',
        'sameAs': [
          'https://linkedin.com/in/mohammadalassiri',
          'https://github.com/mohammadalassiri',
          'https://twitter.com/mohammadalassiri'
        ],
        'jobTitle': 'Technology & AI Expert',
        'worksFor': {
          '@type': 'Organization',
          'name': 'Independent Consultant'
        },
        'knowsAbout': [
          'Artificial Intelligence',
          'Machine Learning',
          'Software Development',
          'Full-stack Development',
          'Project Management'
        ]
      }
    });
    
    document.head.appendChild(script);
    
    // Clean up on unmount
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <>
      <ScrollToTop />
      <Switch>
        <Route path="/" component={HomePage} />
        <Route path="/project/:id" component={ProjectDetail} />
        <Route path="/privacy-policy" component={PrivacyPolicy} />
        <Route path="/terms-of-service" component={TermsOfService} />
        <Route path="/sitemap" component={Sitemap} />
        <Route component={NotFound} />
      </Switch>
      <Toaster />
    </>
  );
}

export default App;
