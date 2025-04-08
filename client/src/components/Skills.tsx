import { techSkills, systemSkills } from "../data/skills";
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
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl mb-4">Technical <span className="text-gold">Skills</span></h2>
          <p className="text-mediumgray max-w-2xl mx-auto">
            A comprehensive collection of technologies and tools I've mastered throughout my career.
          </p>
        </div>
        
        {/* Scrolling Skills - Row 1 */}
        <div className="scroll-container mb-8" aria-label="Technical skills scrolling display">
          <div className="scrolling-wrapper">
            {/* First set of icons */}
            <div className="inline-flex space-x-12 items-center py-4">
              {techSkills.map((skill, index) => (
                <TechIcon key={index} name={skill.name} icon={skill.icon} color={skill.color} />
              ))}
            </div>
            {/* Duplicate for continuous scrolling */}
            <div className="inline-flex space-x-12 items-center py-4">
              {techSkills.map((skill, index) => (
                <TechIcon key={`dup-${index}`} name={skill.name} icon={skill.icon} color={skill.color} />
              ))}
            </div>
          </div>
        </div>
        
        {/* Scrolling Skills - Row 2 (Reverse Direction) */}
        <div className="scroll-container" aria-label="System skills scrolling display">
          <div className="scrolling-wrapper-reverse">
            {/* Second set of icons */}
            <div className="inline-flex space-x-12 items-center py-4">
              {systemSkills.map((skill, index) => (
                <TechIcon key={index} name={skill.name} icon={skill.icon} color={skill.color} />
              ))}
            </div>
            {/* Duplicate for continuous scrolling */}
            <div className="inline-flex space-x-12 items-center py-4">
              {systemSkills.map((skill, index) => (
                <TechIcon key={`dup-${index}`} name={skill.name} icon={skill.icon} color={skill.color} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
