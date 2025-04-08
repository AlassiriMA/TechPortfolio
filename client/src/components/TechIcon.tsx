/**
 * Props for TechIcon component
 */
interface TechIconProps {
  name: string;
  icon: string;
  color: string;
}

/**
 * Component for displaying a technology icon with name
 * 
 * @param name - The name of the technology
 * @param icon - The icon class (from RemixIcon)
 * @param color - The hex color for the icon
 * @returns A styled icon with label
 */
const TechIcon = ({ name, icon, color }: TechIconProps) => {
  return (
    <div className="text-center">
      <i className={icon} style={{ color, fontSize: '2rem' }}></i>
      <p className="mt-2 text-sm">{name}</p>
    </div>
  );
};

export default TechIcon;
