/**
 * Footer component with navigation links and copyright information
 * 
 * @returns The footer section
 */
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-darkgray text-white py-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a 
              href="#home" 
              className="font-poppins font-semibold text-xl tracking-tight text-gold"
              aria-label="Mohammad A Alassiri's logo"
            >
              ma<span className="text-silver">@</span>alassiri
            </a>
          </div>
          
          <div className="flex flex-col md:flex-row md:space-x-8 items-center text-center md:text-left">
            <a href="#home" className="mb-2 md:mb-0 hover:text-gold transition-colors duration-300">Home</a>
            <a href="#projects" className="mb-2 md:mb-0 hover:text-gold transition-colors duration-300">Projects</a>
            <a href="#skills" className="mb-2 md:mb-0 hover:text-gold transition-colors duration-300">Skills</a>
            <a href="#contact" className="hover:text-gold transition-colors duration-300">Contact</a>
          </div>
        </div>
        
        <hr className="border-silver border-opacity-20 my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center text-silver">
          <p>© {currentYear} Mohammad A Alassiri. All rights reserved.</p>
          <p className="mt-4 md:mt-0">Designed with <span className="text-gold">♥</span> by Mohammad</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
