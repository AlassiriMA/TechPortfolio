import { ArrowLeft, ExternalLink, Github, X, ZoomIn } from "lucide-react";
import { useParams, Link } from "wouter";
import { projectsData } from "../data/projects";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ProjectDetailSkeleton from "../components/ProjectDetailSkeleton";
import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet";
import { ProjectData } from "../components/ProjectCard";

/**
 * Project detail page displaying comprehensive information about a specific project
 * 
 * @returns The project detail page component with loading state
 */
const ProjectDetail = () => {
  const { id } = useParams();
  
  // Simulate data fetching with loading state
  const { data, isLoading } = useQuery({
    queryKey: [`/api/projects/${id}`],
    queryFn: () => {
      return new Promise<ProjectData | undefined>((resolve) => {
        // Simulate network delay
        setTimeout(() => {
          resolve(projectsData.find(project => project.id === id));
        }, 1200);
      });
    },
    staleTime: Infinity, // For static site, don't refetch
  });

  const project = data;

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState<string | null>(null);
  const [isLoadingDelayed, setIsLoadingDelayed] = useState(true);
  
  // Simulate a minimum loading time to demonstrate the skeleton
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoadingDelayed(false);
    }, 1500); // 1.5 second minimum loading time
    
    return () => clearTimeout(timer);
  }, []);

  // Handler to open lightbox with a specific image
  const openLightbox = (imageSrc: string) => {
    setCurrentImage(imageSrc);
    setLightboxOpen(true);
    // Prevent body scrolling when lightbox is open
    document.body.style.overflow = 'hidden';
  };

  // Handler to close lightbox
  const closeLightbox = () => {
    setLightboxOpen(false);
    setCurrentImage(null);
    // Re-enable body scrolling
    document.body.style.overflow = 'auto';
  };

  // Effect for keyboard support in lightbox mode
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxOpen) {
        // Close lightbox on ESC key
        if (e.key === 'Escape') {
          closeLightbox();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [lightboxOpen, closeLightbox]);

  // Update document title and meta tags for SEO
  useEffect(() => {
    if (project) {
      // Update document title
      document.title = `${project.title} | Mohammad A Alassiri Portfolio`;
      
      // Update meta description
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', `${project.title} - ${project.description}. View detailed project information, technologies used, and outcomes.`);
      }
      
      // Add JSON-LD structured data for better SEO
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'CreativeWork',
        'name': project.title,
        'description': project.description,
        'creator': {
          '@type': 'Person',
          'name': 'Mohammad A Alassiri'
        },
        'image': project.imgSrc,
        'skills': project.technologies.join(', '),
        ...(project.demoLink && { 'url': project.demoLink }),
        ...(project.githubLink && { 'codeRepository': project.githubLink })
      });
      
      document.head.appendChild(script);
      
      // Clean up on unmount
      return () => {
        // Reset title
        document.title = 'Mohammad A Alassiri | Professional Portfolio - Technology & AI Expert';
        
        // Reset meta description
        if (metaDescription) {
          metaDescription.setAttribute('content', 'Mohammad A Alassiri - Professional portfolio showcasing innovative projects and expertise in AI, development, and technology solutions. Explore detailed case studies, skills, and technologies.');
        }
        
        // Remove JSON-LD script
        document.head.removeChild(script);
      };
    }
  }, [project]);

  useEffect(() => {
    // Scroll to top when the component mounts
    window.scrollTo(0, 0);
  }, []);

  // Determine if we're in a loading state
  const showLoading = isLoading || isLoadingDelayed;
  
  if (!project && !showLoading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow container mx-auto px-6 py-20 text-center">
          <h1 className="text-3xl font-montserrat font-bold text-glossy-darkgray mb-6">Project Not Found</h1>
          <p className="text-lg mb-8">Sorry, the project you're looking for doesn't exist or has been moved.</p>
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-glossy-gold text-white font-medium rounded-md hover:bg-opacity-90 transition-all duration-300"
          >
            <ArrowLeft size={18} />
            Back to Homepage
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>{project ? `${project.title} | Mohammad A Alassiri Portfolio` : 'Loading Project... | Mohammad A Alassiri'}</title>
        <meta name="description" content={project ? `${project.title} - ${project.description}. View detailed project information, technologies used, and outcomes.` : 'Loading project details...'} />
      </Helmet>
      
      <Header />

      <main className="flex-grow">
        <div className="bg-gradient-to-b from-white to-gray-50 pt-20 pb-16">
          <div className="container mx-auto px-6">
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-glossy-darkgray hover:text-glossy-gold transition-colors mb-8"
            >
              <ArrowLeft size={18} />
              Back to Projects
            </Link>
            
            {showLoading ? (
              <ProjectDetailSkeleton />
            ) : project && (
              <>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                  <div>
                    <h1 className="text-4xl md:text-5xl font-montserrat font-bold mb-6 text-glossy-darkgray">{project.title}</h1>
                    <p className="text-lg text-gray-600 mb-8">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.technologies.map((tech, index) => (
                        <span 
                          key={index} 
                          className="bg-white border border-gray-200 px-4 py-2 rounded-full text-sm font-medium shadow-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex flex-wrap gap-4">
                      {project.demoLink && (
                        <a 
                          href={project.demoLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-6 py-3 bg-glossy-gold text-white font-medium rounded-md hover:bg-opacity-90 transition-all duration-300 shadow-md"
                        >
                          <ExternalLink size={18} />
                          Live Demo
                        </a>
                      )}
                      
                      {project.githubLink && (
                        <a 
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-6 py-3 border-2 border-glossy-darkgray text-glossy-darkgray font-medium rounded-md hover:bg-glossy-darkgray hover:text-white transition-all duration-300"
                        >
                          <Github size={18} />
                          View Code
                        </a>
                      )}
                    </div>
                  </div>
                  
                  <div className="rounded-lg overflow-hidden shadow-xl cursor-pointer group" onClick={() => openLightbox(project.imgSrc)}>
                    <img 
                      src={project.imgSrc} 
                      alt={project.imgAlt} 
                      className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-glossy-darkgray bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                      <span className="bg-glossy-gold text-white px-4 py-2 rounded-md shadow-lg transform opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center gap-2">
                        <ZoomIn size={18} /> Click to Enlarge
                      </span>
                    </div>
                  </div>
                </div>

                {/* Project Details */}
                {project.detailContent && (
                  <div className="py-16 bg-white">
                    <div className="container mx-auto px-6">
                      <div className="max-w-4xl mx-auto">
                        {/* Overview */}
                        <section className="mb-16">
                          <h2 className="text-3xl font-montserrat font-semibold mb-6 text-glossy-darkgray">Project Overview</h2>
                          <p className="text-lg text-gray-700 leading-relaxed">{project.detailContent.overview}</p>
                        </section>
                        
                        {/* Challenge and Solution */}
                        <section className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-10">
                          <div className="bg-gray-50 p-8 rounded-lg shadow-md">
                            <h3 className="text-2xl font-montserrat font-semibold mb-4 text-glossy-darkgray">The Challenge</h3>
                            <p className="text-gray-700 leading-relaxed">{project.detailContent.challenge}</p>
                          </div>
                          
                          <div className="bg-gray-50 p-8 rounded-lg shadow-md">
                            <h3 className="text-2xl font-montserrat font-semibold mb-4 text-glossy-darkgray">The Solution</h3>
                            <p className="text-gray-700 leading-relaxed">{project.detailContent.solution}</p>
                          </div>
                        </section>
                        
                        {/* Key Features */}
                        <section className="mb-16">
                          <h2 className="text-3xl font-montserrat font-semibold mb-6 text-glossy-darkgray">Key Features</h2>
                          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {project.detailContent.features.map((feature, index) => (
                              <li key={index} className="flex items-start">
                                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-glossy-gold text-white mr-3 mt-1 flex-shrink-0">
                                  {index + 1}
                                </span>
                                <span className="text-gray-700">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </section>
                        
                        {/* Tech Stack */}
                        <section className="mb-16">
                          <h2 className="text-3xl font-montserrat font-semibold mb-6 text-glossy-darkgray">Technology Stack</h2>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {project.detailContent.techStack.map((tech, index) => (
                              <div key={index} className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                                <h3 className="font-semibold text-lg mb-2 text-glossy-gold">{tech.name}</h3>
                                <p className="text-gray-600">{tech.description}</p>
                              </div>
                            ))}
                          </div>
                        </section>
                        
                        {/* Screenshots */}
                        <section className="mb-16">
                          <h2 className="text-3xl font-montserrat font-semibold mb-6 text-glossy-darkgray">Project Screenshots</h2>
                          <div className="grid grid-cols-1 gap-8">
                            {project.detailContent.screenshots.map((screenshot, index) => (
                              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg">
                                <div 
                                  className="cursor-pointer group relative" 
                                  onClick={() => openLightbox(screenshot.src)}
                                >
                                  <img 
                                    src={screenshot.src} 
                                    alt={screenshot.alt} 
                                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                                    loading="lazy"
                                    decoding="async"
                                    width="1200"
                                    height="800"
                                  />
                                  <div className="absolute inset-0 bg-glossy-darkgray bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                                    <span className="bg-glossy-gold text-white px-4 py-2 rounded-md shadow-lg transform opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center gap-2">
                                      <ZoomIn size={18} /> Click to Enlarge
                                    </span>
                                  </div>
                                </div>
                                {screenshot.caption && (
                                  <div className="p-4 text-center text-gray-600 italic">
                                    {screenshot.caption}
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>
                        </section>
                        
                        {/* Testimonial */}
                        {project.detailContent.testimonial && (
                          <section className="mb-16 bg-gray-50 p-8 rounded-lg border-l-4 border-glossy-gold">
                            <blockquote className="text-lg text-gray-700 italic mb-6">
                              "{project.detailContent.testimonial.text}"
                            </blockquote>
                            <div className="flex items-center">
                              <div>
                                <div className="font-semibold text-glossy-darkgray">{project.detailContent.testimonial.author}</div>
                                <div className="text-gray-500 text-sm">{project.detailContent.testimonial.position}</div>
                              </div>
                            </div>
                          </section>
                        )}
                        
                        {/* Outcome */}
                        {project.detailContent.outcome && (
                          <section className="mb-16">
                            <h2 className="text-3xl font-montserrat font-semibold mb-6 text-glossy-darkgray">Project Outcome</h2>
                            <p className="text-lg text-gray-700 leading-relaxed">{project.detailContent.outcome}</p>
                          </section>
                        )}
                        
                        {/* Call to Action */}
                        <section className="text-center bg-gradient-to-r from-glossy-gold to-yellow-500 p-10 rounded-lg shadow-lg">
                          <h2 className="text-3xl font-montserrat font-bold mb-6 text-white">Interested in working together?</h2>
                          <p className="text-white text-lg mb-8 max-w-2xl mx-auto">
                            I'm always open to discussing new projects and creative ideas. Let's build something amazing together.
                          </p>
                          <Link 
                            to="/"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-glossy-gold font-bold rounded-md hover:bg-gray-100 transition-all duration-300 shadow-md"
                          >
                            <ArrowLeft size={18} />
                            Back to Projects
                          </Link>
                        </section>
                      </div>
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </main>

      <Footer />

      {/* Lightbox component */}
      {lightboxOpen && currentImage && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4" onClick={closeLightbox}>
          <div className="relative max-w-7xl max-h-full overflow-auto" onClick={(e) => e.stopPropagation()}>
            <img 
              src={currentImage} 
              alt="Enlarged view" 
              className="max-w-full max-h-screen object-contain mx-auto"
            />
            <button 
              className="absolute top-4 right-4 bg-glossy-gold text-white p-2 rounded-full hover:bg-opacity-90 transition-all duration-300"
              onClick={closeLightbox}
              aria-label="Close lightbox"
            >
              <X size={24} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectDetail;