import { useState, useEffect } from "react";
import { projectsData } from "../data/projects";
import ProjectCard from "./ProjectCard";
import ProjectCardSkeleton from "./ProjectCardSkeleton";
import { useQuery } from "@tanstack/react-query";

/**
 * Projects section component displaying project cards with loading state
 * 
 * @returns The projects section with multiple project cards and loading skeletons
 */
const Projects = () => {
  // Simulating data fetching with loading state and delay
  const { data: projects, isLoading } = useQuery({
    queryKey: ['/api/projects'],
    staleTime: Infinity, // For static site, don't refetch
    placeholderData: [], // Empty array as placeholder
  });
  
  // Local state for delayed loading completion to demonstrate the skeleton
  const [isLoadingDelayed, setIsLoadingDelayed] = useState(true);
  
  // Use useEffect to simulate a minimum loading time to demonstrate the skeleton
  useEffect(() => {
    // Simulate network delay for demonstration purposes
    const timer = setTimeout(() => {
      setIsLoadingDelayed(false);
    }, 1500); // 1.5 second minimum loading time
    
    return () => clearTimeout(timer);
  }, []);
  
  // Determine if we should show loading state
  const showLoading = isLoading || isLoadingDelayed;
  
  return (
    <section id="projects" className="py-20 bg-lightgray">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl mb-4">My <span className="text-glossy-gold">Projects</span></h2>
          <p className="text-mediumgray max-w-2xl mx-auto">
            Explore my latest work and projects that showcase my technical skills and creative approach.
          </p>
        </div>
        
        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {showLoading ? (
            // Show skeleton loading state
            Array.from({ length: 6 }).map((_, index) => (
              <ProjectCardSkeleton key={index} />
            ))
          ) : (
            // Show actual project cards
            projectsData.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
