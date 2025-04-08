import { useState, useEffect } from "react";
import { Menu } from "lucide-react";

/**
 * Header component displaying logo and navigation
 * 
 * @returns The header section with navigation links
 */
const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll event to change header style
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Close mobile menu when a link is clicked
  const handleNavLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header 
      className={`fixed w-full bg-white z-50 transition-all duration-300 ${
        isScrolled ? "shadow-md bg-opacity-95" : "bg-opacity-100"
      }`}
      aria-label="Site header"
    >
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <a 
          href="#home" 
          className="font-poppins font-semibold text-xl tracking-tight text-gold"
          aria-label="Mohammad A Alassiri's logo"
        >
          ma<span className="text-darkgray">@</span>alassiri
        </a>
        
        {/* Mobile menu button */}
        <div className="block md:hidden">
          <button 
            onClick={toggleMobileMenu}
            className="flex items-center px-3 py-2 border rounded text-darkgray border-darkgray hover:text-gold hover:border-gold"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            <Menu />
          </button>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#home" className="hover:text-gold transition-colors duration-300">Home</a>
          <a href="#projects" className="hover:text-gold transition-colors duration-300">Projects</a>
          <a href="#skills" className="hover:text-gold transition-colors duration-300">Skills</a>
          <a href="#contact" className="hover:text-gold transition-colors duration-300">Contact</a>
          <a 
            href="/MohammadAlassiri-CV.pdf" 
            className="px-4 py-2 border-2 border-gold text-darkgray rounded hover:bg-gold hover:text-white transition-colors duration-300"
            download
          >
            Download CV
          </a>
        </div>
      </nav>
      
      {/* Mobile Navigation */}
      <div className={`md:hidden w-full bg-white p-4 ${mobileMenuOpen ? "block" : "hidden"}`}>
        <div className="flex flex-col space-y-4">
          <a href="#home" onClick={handleNavLinkClick} className="hover:text-gold transition-colors duration-300">Home</a>
          <a href="#projects" onClick={handleNavLinkClick} className="hover:text-gold transition-colors duration-300">Projects</a>
          <a href="#skills" onClick={handleNavLinkClick} className="hover:text-gold transition-colors duration-300">Skills</a>
          <a href="#contact" onClick={handleNavLinkClick} className="hover:text-gold transition-colors duration-300">Contact</a>
          <a 
            href="/MohammadAlassiri-CV.pdf" 
            className="px-4 py-2 border-2 border-gold text-darkgray rounded text-center hover:bg-gold hover:text-white transition-colors duration-300"
            download
            onClick={handleNavLinkClick}
          >
            Download CV
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
