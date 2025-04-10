import { techSkills, systemSkills, aiSkills } from "../data/skills";
import TechIcon from "./TechIcon";

/**
 * Skills section component with horizontally scrolling tech icons
 * 
 * @returns The skills section with animated tech icons
 */
const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl mb-4" id="skills-heading" aria-label="Technical Skills Section">Technical <span className="text-glossy-gold">Skills</span></h2>
          <p className="text-glossy-darkgray max-w-2xl mx-auto">
            A comprehensive collection of technologies and tools I've mastered throughout my career.
          </p>
        </div>
        
        {/* Scrolling Skills - Row 1 (Development Technologies) */}
        <div className="mb-4 text-center">
          <h3 className="font-montserrat font-semibold text-xl mb-3 text-glossy-silver">Development Technologies</h3>
        </div>
        <div className="scroll-container mb-12" aria-label="Development technologies scrolling display">
          <div className="scrolling-wrapper">
            {/* First set of icons */}
            <div className="inline-flex space-x-16 items-center py-6">
              {techSkills.map((skill, index) => (
                <TechIcon 
                  key={index} 
                  name={skill.name} 
                  icon={skill.icon} 
                  color={skill.color} 
                  url={skill.url}
                  description={skill.description}
                  proficiency={skill.proficiency}
                />
              ))}
            </div>
            {/* Duplicate for continuous scrolling */}
            <div className="inline-flex space-x-16 items-center py-6">
              {techSkills.map((skill, index) => (
                <TechIcon 
                  key={`dup-${index}`} 
                  name={skill.name} 
                  icon={skill.icon} 
                  color={skill.color} 
                  url={skill.url}
                  description={skill.description}
                  proficiency={skill.proficiency}
                />
              ))}
            </div>
          </div>
        </div>
        
        {/* Scrolling Skills - Row 2 (AI & Agent Technologies) */}
        <div className="mb-4 text-center">
          <h3 className="font-montserrat font-semibold text-xl mb-3 text-glossy-silver">AI & Agent Technologies</h3>
        </div>
        <div className="scroll-container mb-12" aria-label="AI technologies scrolling display">
          <div className="scrolling-wrapper-reverse">
            {/* AI set of icons */}
            <div className="inline-flex space-x-16 items-center py-6">
              {aiSkills.map((skill, index) => (
                <TechIcon 
                  key={index} 
                  name={skill.name} 
                  icon={skill.icon} 
                  color={skill.color} 
                  url={skill.url}
                  description={skill.description}
                  proficiency={skill.proficiency}
                />
              ))}
            </div>
            {/* Duplicate for continuous scrolling */}
            <div className="inline-flex space-x-16 items-center py-6">
              {aiSkills.map((skill, index) => (
                <TechIcon 
                  key={`dup-${index}`} 
                  name={skill.name} 
                  icon={skill.icon} 
                  color={skill.color} 
                  url={skill.url}
                  description={skill.description}
                  proficiency={skill.proficiency}
                />
              ))}
            </div>
          </div>
        </div>
        
        {/* Scrolling Skills - Row 3 (Platforms & Systems) */}
        <div className="mb-4 text-center">
          <h3 className="font-montserrat font-semibold text-xl mb-3 text-glossy-silver">Platforms & Systems</h3>
        </div>
        <div className="scroll-container" aria-label="System skills scrolling display">
          <div className="scrolling-wrapper">
            {/* System set of icons */}
            <div className="inline-flex space-x-16 items-center py-6">
              {systemSkills.map((skill, index) => (
                <TechIcon 
                  key={index} 
                  name={skill.name} 
                  icon={skill.icon} 
                  color={skill.color} 
                  url={skill.url}
                  description={skill.description}
                  proficiency={skill.proficiency}
                />
              ))}
            </div>
            {/* Duplicate for continuous scrolling */}
            <div className="inline-flex space-x-16 items-center py-6">
              {systemSkills.map((skill, index) => (
                <TechIcon 
                  key={`dup-${index}`} 
                  name={skill.name} 
                  icon={skill.icon} 
                  color={skill.color} 
                  url={skill.url}
                  description={skill.description}
                  proficiency={skill.proficiency}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
