import { Helmet } from "react-helmet";
import { Link } from "wouter";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { projectsData } from "../data/projects";

/**
 * Sitemap page component
 * 
 * @returns The Sitemap page
 */
const Sitemap = () => {
  return (
    <>
      <Helmet>
        <title>Sitemap | Mohammad A Alassiri - Technology & AI Expert</title>
        <meta name="description" content="Sitemap for Mohammad A Alassiri's portfolio website. Find all pages and sections available on the site." />
        <meta name="robots" content="noindex" />
      </Helmet>
      
      <Header />
      
      <main className="container mx-auto px-6 py-12 min-h-screen">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-glossy-gold">Sitemap</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-glossy-silver">Main Pages</h2>
              <ul className="space-y-3">
                <li>
                  <Link to="/" className="text-gray-800 hover:text-glossy-gold transition-colors duration-300 flex items-center gap-2">
                    <i className="ri-home-4-line"></i>
                    <span>Home</span>
                  </Link>
                </li>
                <li>
                  <Link to="/#projects" className="text-gray-800 hover:text-glossy-gold transition-colors duration-300 flex items-center gap-2">
                    <i className="ri-archive-line"></i>
                    <span>Projects</span>
                  </Link>
                </li>
                <li>
                  <Link to="/#skills" className="text-gray-800 hover:text-glossy-gold transition-colors duration-300 flex items-center gap-2">
                    <i className="ri-tools-line"></i>
                    <span>Skills</span>
                  </Link>
                </li>
                <li>
                  <Link to="/privacy-policy" className="text-gray-800 hover:text-glossy-gold transition-colors duration-300 flex items-center gap-2">
                    <i className="ri-shield-check-line"></i>
                    <span>Privacy Policy</span>
                  </Link>
                </li>
                <li>
                  <Link to="/terms-of-service" className="text-gray-800 hover:text-glossy-gold transition-colors duration-300 flex items-center gap-2">
                    <i className="ri-file-list-3-line"></i>
                    <span>Terms of Service</span>
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-glossy-silver">Project Pages</h2>
              <ul className="space-y-3">
                {projectsData.map((project, index) => (
                  <li key={index}>
                    <Link 
                      to={`/project/${project.id}`} 
                      className="text-gray-800 hover:text-glossy-gold transition-colors duration-300 flex items-center gap-2"
                    >
                      <i className="ri-folder-line"></i>
                      <span>{project.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="mt-12">
            <h2 className="text-2xl font-semibold mb-4 text-glossy-silver">Resources</h2>
            <ul className="space-y-3">
              <li>
                <a 
                  href="/sitemap.xml" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-800 hover:text-glossy-gold transition-colors duration-300 flex items-center gap-2"
                >
                  <i className="ri-file-code-line"></i>
                  <span>XML Sitemap</span>
                </a>
              </li>
              <li>
                <a 
                  href="/robots.txt" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-800 hover:text-glossy-gold transition-colors duration-300 flex items-center gap-2"
                >
                  <i className="ri-robot-line"></i>
                  <span>Robots.txt</span>
                </a>
              </li>
              <li>
                <a 
                  href="/MohammadAlassiri-CV.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-800 hover:text-glossy-gold transition-colors duration-300 flex items-center gap-2"
                  download
                >
                  <i className="ri-file-download-line"></i>
                  <span>Download CV</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default Sitemap;