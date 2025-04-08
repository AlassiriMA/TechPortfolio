import { projectsData } from "../data/projects";
import ProjectCard from "./ProjectCard";

/**
 * Projects section component displaying project cards
 * 
 * @returns The projects section with multiple project cards
 */
const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-lightgray">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl mb-4">My <span className="text-gold">Projects</span></h2>
          <p className="text-mediumgray max-w-2xl mx-auto">
            Explore my latest work and projects that showcase my technical skills and creative approach.
          </p>
        </div>
        
        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
