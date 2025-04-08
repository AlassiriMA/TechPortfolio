/**
 * Props for TechIcon component
 */
interface TechIconProps {
  name: string;
  icon: string;
  color: string;
  url?: string;
}

/**
 * Component for displaying a technology icon with name
 * 
 * @param name - The name of the technology
 * @param icon - The icon class (from RemixIcon)
 * @param color - The hex color for the icon
 * @param url - Optional URL to make the icon clickable
 * @returns A styled icon with label
 */
const TechIcon = ({ name, icon, color, url }: TechIconProps) => {
  const IconContent = () => (
    <>
      <i 
        className={icon} 
        style={{ 
          color, 
          fontSize: '2.25rem',
          filter: 'drop-shadow(0px 1px 2px rgba(0,0,0,0.2))',
          transition: 'all 0.3s ease'
        }}
      ></i>
      <p className="mt-2 text-sm font-medium">{name}</p>
    </>
  );

  if (url) {
    return (
      <a 
        href={url} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-center p-2 hover:scale-110 transition-transform duration-300"
        aria-label={`Visit ${name} website`}
      >
        <IconContent />
      </a>
    );
  }

  return (
    <div 
      className="text-center p-2 hover:scale-105 transition-transform duration-300"
      role="img"
      aria-label={`${name} technology`}
    >
      <IconContent />
    </div>
  );
};

export default TechIcon;
