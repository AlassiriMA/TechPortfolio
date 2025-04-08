import { Helmet } from "react-helmet";
import { Link } from "wouter";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { projectsData } from "../data/projects";
import { 
  Home, Archive, Wrench, Shield, FileText, Folder, 
  FileCode, Bot, FileDown, ChevronRight, Search
} from "lucide-react";
import { useState } from "react";

/**
 * Enhanced Sitemap page component with visual flourishes
 * 
 * @returns The visually styled Sitemap page
 */
const Sitemap = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  // Filter projects based on search term
  const filteredProjects = projectsData.filter(project => 
    project.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  return (
    <>
      <Helmet>
        <title>Sitemap | Mohammad A Alassiri - Technology & AI Expert</title>
        <meta name="description" content="Sitemap for Mohammad A Alassiri's portfolio website. Find all pages and sections available on the site." />
        <meta name="robots" content="noindex" />
      </Helmet>
      
      <Header />
      
      <main className="bg-gradient-to-b from-white to-gray-50 min-h-screen pt-20 pb-16">
        <div className="container mx-auto px-6">
          {/* Hero section */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-montserrat font-bold mb-4 pb-4 relative inline-block">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-glossy-gold to-yellow-600">
                Sitemap
              </span>
              <span className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-glossy-gold to-transparent"></span>
            </h1>
            <p className="text-xl text-gray-600 mt-6">
              A comprehensive guide to navigate through all the pages and content available on my portfolio website.
            </p>
          </div>
          
          {/* Search box */}
          <div className="max-w-md mx-auto mb-12">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input 
                type="text" 
                className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-glossy-gold focus:border-transparent bg-white"
                placeholder="Search pages..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          
          {/* Main content */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
              {/* Main Pages */}
              <div className="p-8 border-b lg:border-b-0 lg:border-r border-gray-100 relative overflow-hidden">
                <div className="absolute right-0 top-0 w-32 h-32 bg-glossy-gold opacity-[0.03] rounded-full transform translate-x-16 -translate-y-16"></div>
                
                <h2 className="text-2xl font-montserrat font-semibold mb-6 pb-2 border-b border-gray-100 text-glossy-darkgray relative inline-block">
                  Main Pages
                  <span className="absolute bottom-0 left-0 w-1/2 h-[2px] bg-glossy-gold"></span>
                </h2>
                
                <ul className="space-y-4 relative">
                  <li>
                    <Link to="/" className="group flex items-start p-3 -ml-3 rounded-lg hover:bg-gray-50 transition-all duration-300">
                      <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-full bg-yellow-50 group-hover:bg-glossy-gold group-hover:text-white text-glossy-gold transition-all duration-300">
                        <Home className="h-5 w-5" />
                      </div>
                      <div className="ml-4">
                        <p className="text-base font-medium text-gray-900 group-hover:text-glossy-gold transition-all duration-300">Home</p>
                        <p className="mt-1 text-sm text-gray-500">Landing page with overview</p>
                      </div>
                      <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                        <ChevronRight className="h-5 w-5 text-glossy-gold" />
                      </div>
                    </Link>
                  </li>
                  
                  <li>
                    <Link to="/#projects" className="group flex items-start p-3 -ml-3 rounded-lg hover:bg-gray-50 transition-all duration-300">
                      <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-full bg-yellow-50 group-hover:bg-glossy-gold group-hover:text-white text-glossy-gold transition-all duration-300">
                        <Archive className="h-5 w-5" />
                      </div>
                      <div className="ml-4">
                        <p className="text-base font-medium text-gray-900 group-hover:text-glossy-gold transition-all duration-300">Projects</p>
                        <p className="mt-1 text-sm text-gray-500">Featured work showcase</p>
                      </div>
                      <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                        <ChevronRight className="h-5 w-5 text-glossy-gold" />
                      </div>
                    </Link>
                  </li>
                  
                  <li>
                    <Link to="/#skills" className="group flex items-start p-3 -ml-3 rounded-lg hover:bg-gray-50 transition-all duration-300">
                      <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-full bg-yellow-50 group-hover:bg-glossy-gold group-hover:text-white text-glossy-gold transition-all duration-300">
                        <Wrench className="h-5 w-5" />
                      </div>
                      <div className="ml-4">
                        <p className="text-base font-medium text-gray-900 group-hover:text-glossy-gold transition-all duration-300">Skills</p>
                        <p className="mt-1 text-sm text-gray-500">Technical competencies</p>
                      </div>
                      <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                        <ChevronRight className="h-5 w-5 text-glossy-gold" />
                      </div>
                    </Link>
                  </li>
                  
                  <li>
                    <Link to="/privacy-policy" className="group flex items-start p-3 -ml-3 rounded-lg hover:bg-gray-50 transition-all duration-300">
                      <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-full bg-yellow-50 group-hover:bg-glossy-gold group-hover:text-white text-glossy-gold transition-all duration-300">
                        <Shield className="h-5 w-5" />
                      </div>
                      <div className="ml-4">
                        <p className="text-base font-medium text-gray-900 group-hover:text-glossy-gold transition-all duration-300">Privacy Policy</p>
                        <p className="mt-1 text-sm text-gray-500">Data handling practices</p>
                      </div>
                      <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                        <ChevronRight className="h-5 w-5 text-glossy-gold" />
                      </div>
                    </Link>
                  </li>
                  
                  <li>
                    <Link to="/terms-of-service" className="group flex items-start p-3 -ml-3 rounded-lg hover:bg-gray-50 transition-all duration-300">
                      <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-full bg-yellow-50 group-hover:bg-glossy-gold group-hover:text-white text-glossy-gold transition-all duration-300">
                        <FileText className="h-5 w-5" />
                      </div>
                      <div className="ml-4">
                        <p className="text-base font-medium text-gray-900 group-hover:text-glossy-gold transition-all duration-300">Terms of Service</p>
                        <p className="mt-1 text-sm text-gray-500">Usage terms & conditions</p>
                      </div>
                      <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                        <ChevronRight className="h-5 w-5 text-glossy-gold" />
                      </div>
                    </Link>
                  </li>
                </ul>
              </div>
              
              {/* Project Pages */}
              <div className="p-8 border-b lg:border-b-0 lg:border-r border-gray-100 relative overflow-hidden">
                <div className="absolute right-0 bottom-0 w-40 h-40 bg-glossy-silver opacity-[0.03] rounded-full transform translate-x-20 translate-y-20"></div>
                
                <h2 className="text-2xl font-montserrat font-semibold mb-6 pb-2 border-b border-gray-100 text-glossy-darkgray relative inline-block">
                  Project Pages
                  <span className="absolute bottom-0 left-0 w-1/2 h-[2px] bg-glossy-gold"></span>
                </h2>
                
                <div className="overflow-auto max-h-[400px] pr-2 custom-scrollbar">
                  <ul className="space-y-3">
                    {filteredProjects.length > 0 ? (
                      filteredProjects.map((project, index) => (
                        <li key={index}>
                          <Link 
                            to={`/project/${project.id}`} 
                            className="group flex items-center p-2 -ml-2 rounded-md hover:bg-gray-50 transition-all duration-300"
                          >
                            <div className="flex-shrink-0 h-8 w-8 flex items-center justify-center rounded-full bg-yellow-50 group-hover:bg-glossy-gold group-hover:text-white text-glossy-gold transition-all duration-300">
                              <Folder className="h-4 w-4" />
                            </div>
                            <span className="ml-3 text-gray-900 group-hover:text-glossy-gold transition-colors duration-300">{project.title}</span>
                            <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                              <ChevronRight className="h-4 w-4 text-glossy-gold" />
                            </div>
                          </Link>
                        </li>
                      ))
                    ) : (
                      <li className="text-center py-4 text-gray-500">
                        No projects match your search criteria
                      </li>
                    )}
                  </ul>
                </div>
              </div>
              
              {/* Resources */}
              <div className="p-8 relative overflow-hidden">
                <div className="absolute left-0 top-0 w-40 h-40 bg-glossy-gold opacity-[0.03] rounded-full transform -translate-x-20 -translate-y-20"></div>
                
                <h2 className="text-2xl font-montserrat font-semibold mb-6 pb-2 border-b border-gray-100 text-glossy-darkgray relative inline-block">
                  Resources
                  <span className="absolute bottom-0 left-0 w-1/2 h-[2px] bg-glossy-gold"></span>
                </h2>
                
                <ul className="space-y-4">
                  <li>
                    <a 
                      href="/sitemap.xml" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="group flex items-start p-3 -ml-3 rounded-lg hover:bg-gray-50 transition-all duration-300"
                    >
                      <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-full bg-yellow-50 group-hover:bg-glossy-gold group-hover:text-white text-glossy-gold transition-all duration-300">
                        <FileCode className="h-5 w-5" />
                      </div>
                      <div className="ml-4">
                        <p className="text-base font-medium text-gray-900 group-hover:text-glossy-gold transition-all duration-300">XML Sitemap</p>
                        <p className="mt-1 text-sm text-gray-500">For search engines</p>
                      </div>
                      <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                        <ChevronRight className="h-5 w-5 text-glossy-gold" />
                      </div>
                    </a>
                  </li>
                  
                  <li>
                    <a 
                      href="/robots.txt" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="group flex items-start p-3 -ml-3 rounded-lg hover:bg-gray-50 transition-all duration-300"
                    >
                      <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-full bg-yellow-50 group-hover:bg-glossy-gold group-hover:text-white text-glossy-gold transition-all duration-300">
                        <Bot className="h-5 w-5" />
                      </div>
                      <div className="ml-4">
                        <p className="text-base font-medium text-gray-900 group-hover:text-glossy-gold transition-all duration-300">Robots.txt</p>
                        <p className="mt-1 text-sm text-gray-500">Crawler instructions</p>
                      </div>
                      <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                        <ChevronRight className="h-5 w-5 text-glossy-gold" />
                      </div>
                    </a>
                  </li>
                  
                  <li>
                    <a 
                      href="/MohammadAlassiri-CV.pdf" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      download
                      className="group flex items-start p-3 -ml-3 rounded-lg hover:bg-gray-50 transition-all duration-300"
                    >
                      <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-full bg-yellow-50 group-hover:bg-glossy-gold group-hover:text-white text-glossy-gold transition-all duration-300">
                        <FileDown className="h-5 w-5" />
                      </div>
                      <div className="ml-4">
                        <p className="text-base font-medium text-gray-900 group-hover:text-glossy-gold transition-all duration-300">Download CV</p>
                        <p className="mt-1 text-sm text-gray-500">Full resume in PDF format</p>
                      </div>
                      <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                        <ChevronRight className="h-5 w-5 text-glossy-gold" />
                      </div>
                    </a>
                  </li>
                </ul>
                
                <div className="mt-10 pt-6 border-t border-gray-100">
                  <div className="bg-gray-50 rounded-lg p-4 border border-gray-100 relative overflow-hidden">
                    <div className="absolute right-0 bottom-0 w-20 h-20 bg-glossy-gold opacity-[0.05] rounded-full transform translate-x-10 translate-y-10"></div>
                    <h3 className="text-glossy-darkgray font-semibold mb-2">Looking for something specific?</h3>
                    <p className="text-sm text-gray-600 mb-0">
                      Use the search box above or contact me directly for any questions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default Sitemap;