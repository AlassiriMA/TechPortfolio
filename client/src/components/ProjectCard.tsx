import { Eye, Github, Info } from "lucide-react";
import { Link } from "wouter";

/**
 * Project data interface
 */
export interface ProjectData {
  id: string;
  title: string;
  description: string;
  imgSrc: string;
  imgAlt: string;
  technologies: string[];
  demoLink?: string;
  githubLink?: string;
  detailContent?: {
    overview: string;
    challenge: string;
    solution: string;
    features: string[];
    techStack: { name: string; description: string }[];
    screenshots: { src: string; alt: string; caption?: string }[];
    testimonial?: { text: string; author: string; position: string };
    outcome?: string;
  };
}

/**
 * Props for ProjectCard component
 */
interface ProjectCardProps {
  project: ProjectData;
}

/**
 * Project card component to display individual projects
 * 
 * @param project - The project data to display
 * @returns A card component with project details
 */
const ProjectCard = ({ project }: ProjectCardProps) => {
  const { id, title, description, imgSrc, imgAlt, technologies, demoLink, githubLink } = project;

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:translate-y-[-5px]">
      <div className="h-48 overflow-hidden">
        <img 
          src={imgSrc} 
          alt={imgAlt} 
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="p-6">
        <h3 className="font-montserrat font-semibold text-xl mb-2">{title}</h3>
        <p className="text-glossy-darkgray mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {technologies.map((tech, index) => (
            <span key={index} className="bg-lightgray px-2 py-1 rounded text-sm">
              {tech}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap gap-4">
          <Link 
            to={`/project/${id}`}
            className="text-glossy-gold flex items-center hover:underline"
            aria-label={`View details for ${title}`}
          >
            <Info className="h-4 w-4 mr-1" /> Project Details
          </Link>
          
          {demoLink && (
            <a 
              href={demoLink} 
              className="text-glossy-darkgray flex items-center hover:text-glossy-gold transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View demo for ${title}`}
            >
              <Eye className="h-4 w-4 mr-1" /> View Demo
            </a>
          )}
          
          {githubLink && (
            <a 
              href={githubLink} 
              className="text-glossy-darkgray flex items-center hover:text-glossy-gold transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View GitHub repository for ${title}`}
            >
              <Github className="h-4 w-4 mr-1" /> GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
