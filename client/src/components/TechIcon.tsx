/**
 * Props interface for the TechIcon component
 * 
 * @interface TechIconProps
 * @property {string} name - The name of the technology to display
 * @property {string} icon - The icon class (from RemixIcon library) for visual representation 
 * @property {string} color - The hex color code for the icon and progress indicators
 * @property {string} [url] - Optional URL that makes the icon a clickable link
 * @property {string} [description] - Optional description text displayed in the tooltip
 * @property {number} [proficiency] - Optional skill proficiency level (0-100) for the progress indicator
 */
interface TechIconProps {
  name: string;
  icon: string;
  color: string;
  url?: string;
  description?: string;
  proficiency?: number;
}

/**
 * Interactive component for displaying technology skills with visual indicators
 * 
 * Displays a technology with an icon, name, and interactive hover effects including:
 * - Circular progress indicator showing proficiency level
 * - Star rating display (0-5 stars based on proficiency)
 * - Tooltip with skill description
 * - Link to the technology's official documentation (if URL provided)
 * 
 * @component
 * @param {TechIconProps} props - Component properties
 * @param {string} props.name - The name of the technology
 * @param {string} props.icon - The icon class from RemixIcon
 * @param {string} props.color - The hex color for the icon and indicators
 * @param {string} [props.url] - Optional URL to make the icon clickable
 * @param {string} [props.description] - Optional description for the tooltip (defaults to "Experienced with [name]")
 * @param {number} [props.proficiency] - Optional proficiency level from 0-100 (defaults to 85)
 * @returns {JSX.Element} A styled icon with label and interactive effects
 * 
 * @example
 * <TechIcon 
 *   name="React" 
 *   icon="ri-reactjs-fill" 
 *   color="#61DAFB" 
 *   url="https://reactjs.org"
 *   description="Building modern UIs with React and Hooks"
 *   proficiency={95}
 * />
 */
const TechIcon = ({ 
  name, 
  icon, 
  color, 
  url, 
  description = `Experienced with ${name}`, 
  proficiency = 85 
}: TechIconProps) => {
  
  // Generate a lighter version of the color for gradients
  const lightenColor = (color: string, percent: number) => {
    const num = parseInt(color.replace("#", ""), 16);
    const amt = Math.round(2.55 * percent);
    const R = (num >> 16) + amt;
    const G = (num >> 8 & 0x00FF) + amt;
    const B = (num & 0x0000FF) + amt;
    return `#${(
      0x1000000 +
      (R < 255 ? (R < 1 ? 0 : R) : 255) * 0x10000 +
      (G < 255 ? (G < 1 ? 0 : G) : 255) * 0x100 +
      (B < 255 ? (B < 1 ? 0 : B) : 255)
    ).toString(16).slice(1)}`;
  };
  
  // Display skill level as stars (1-5)
  const skillLevel = Math.ceil(proficiency / 20); // Convert 0-100 to 1-5
  
  const IconContent = () => (
    <>
      <div className="relative overflow-hidden rounded-full p-3 bg-white shadow-md transition-all duration-300 group-hover:shadow-lg">
        <i 
          className={icon} 
          style={{ 
            color, 
            fontSize: '2.25rem',
            filter: 'drop-shadow(0px 2px 3px rgba(0,0,0,0.15))',
            transition: 'all 0.3s ease',
            transform: 'translateY(0)',
          }}
        ></i>
        
        {/* Circular progress indicator */}
        <svg className="absolute top-0 left-0 w-full h-full -rotate-90" viewBox="0 0 100 100">
          <circle 
            cx="50" 
            cy="50" 
            r="45" 
            fill="none" 
            stroke="#f5f5f5" 
            strokeWidth="5"
          />
          <circle 
            cx="50" 
            cy="50" 
            r="45" 
            fill="none" 
            stroke={color} 
            strokeWidth="5"
            strokeDasharray="283"
            strokeDashoffset={283 - (283 * proficiency / 100)}
            className="transform-opacity duration-1000 opacity-0 group-hover:opacity-100"
          />
        </svg>
      </div>
      <p className="mt-3 text-sm font-medium">{name}</p>
      
      {/* Skill level indicator (only visible on hover) */}
      <div className="flex justify-center mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {[...Array(5)].map((_, i) => (
          <span 
            key={i}
            className={`mx-0.5 text-xs ${i < skillLevel ? 'text-glossy-gold' : 'text-gray-300'}`}
          >
            ★
          </span>
        ))}
      </div>
      
      {/* Description tooltip */}
      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 translate-y-full bg-glossy-darkgray text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none w-36 z-10">
        {description}
        <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 border-4 border-transparent border-b-glossy-darkgray"></div>
      </div>
    </>
  );

  if (url) {
    return (
      <a 
        href={url} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-center p-4 hover:scale-110 transition-transform duration-300 relative group"
        aria-label={`${name} - ${description}. Click to visit website.`}
      >
        <IconContent />
      </a>
    );
  }

  return (
    <div 
      className="text-center p-4 hover:scale-105 transition-transform duration-300 relative group"
      role="img"
      aria-label={`${name} technology - ${description}`}
    >
      <IconContent />
    </div>
  );
};

export default TechIcon;
