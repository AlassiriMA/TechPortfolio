import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "wouter";

/**
 * Header component displaying logo and navigation
 * 
 * @returns The header section with navigation links
 */
const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();
  const isHomePage = location === "/";

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

  // Prevent body scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [mobileMenuOpen]);

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
        isScrolled ? "shadow-lg bg-opacity-98" : "bg-opacity-100"
      }`}
      aria-label="Site header"
    >
      <div className="container mx-auto px-6 py-4">
        <nav className="flex justify-between items-center relative">
          {/* Logo */}
          {isHomePage ? (
            <a 
              href="#home" 
              className="font-poppins font-semibold text-xl tracking-tight text-glossy-gold inline-flex items-center"
              aria-label="Mohammad A Alassiri's logo"
            >
              <img 
                src="/icons/robot-icon.svg" 
                alt="Robot Icon" 
                className="w-7 h-7 mr-2"
              />
              ma<span className="text-glossy-silver">@</span>alassiri
            </a>
          ) : (
            <Link 
              to="/" 
              className="font-poppins font-semibold text-xl tracking-tight text-glossy-gold inline-flex items-center"
              aria-label="Mohammad A Alassiri's logo"
            >
              <img 
                src="/icons/robot-icon.svg" 
                alt="Robot Icon" 
                className="w-7 h-7 mr-2"
              />
              ma<span className="text-glossy-silver">@</span>alassiri
            </Link>
          )}
          
          {/* Mobile menu button */}
          <div className="block md:hidden">
            <button 
              onClick={toggleMobileMenu}
              className="flex items-center p-2 text-glossy-darkgray hover:text-glossy-gold transition-colors duration-300"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {isHomePage ? (
              <>
                <a href="#home" className="text-glossy-darkgray hover:text-glossy-gold transition-colors duration-300">Home</a>
                <a href="#projects" className="text-glossy-darkgray hover:text-glossy-gold transition-colors duration-300">Projects</a>
                <a href="#skills" className="text-glossy-darkgray hover:text-glossy-gold transition-colors duration-300">Skills</a>
              </>
            ) : (
              <>
                <Link to="/" className="text-glossy-darkgray hover:text-glossy-gold transition-colors duration-300">Home</Link>
                <Link to="/#projects" className="text-glossy-darkgray hover:text-glossy-gold transition-colors duration-300">Projects</Link>
                <Link to="/#skills" className="text-glossy-darkgray hover:text-glossy-gold transition-colors duration-300">Skills</Link>
              </>
            )}
            <a 
              href="/MohammadAlassiri-CV.pdf" 
              className="px-5 py-2 border-2 border-glossy-gold text-glossy-darkgray rounded-md hover:bg-glossy-gold hover:text-white transition-all duration-300 shadow-sm"
              download
            >
              Download CV
            </a>
          </div>
        </nav>
      </div>
      
      {/* Mobile Navigation */}
      <div 
        className={`fixed inset-0 bg-white z-40 transition-transform duration-300 transform ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden flex flex-col pt-24`}
        aria-hidden={!mobileMenuOpen}
      >
        <div className="container mx-auto px-6">
          <div className="flex flex-col space-y-6 text-center">
            {isHomePage ? (
              <>
                <a 
                  href="#home" 
                  onClick={handleNavLinkClick} 
                  className="text-xl font-montserrat font-medium text-glossy-darkgray hover:text-glossy-gold transition-colors duration-300 py-2"
                >
                  Home
                </a>
                <a 
                  href="#projects" 
                  onClick={handleNavLinkClick} 
                  className="text-xl font-montserrat font-medium text-glossy-darkgray hover:text-glossy-gold transition-colors duration-300 py-2"
                >
                  Projects
                </a>
                <a 
                  href="#skills" 
                  onClick={handleNavLinkClick} 
                  className="text-xl font-montserrat font-medium text-glossy-darkgray hover:text-glossy-gold transition-colors duration-300 py-2"
                >
                  Skills
                </a>
              </>
            ) : (
              <>
                <Link 
                  to="/" 
                  onClick={handleNavLinkClick} 
                  className="text-xl font-montserrat font-medium text-glossy-darkgray hover:text-glossy-gold transition-colors duration-300 py-2"
                >
                  Home
                </Link>
                <Link 
                  to="/#projects" 
                  onClick={handleNavLinkClick} 
                  className="text-xl font-montserrat font-medium text-glossy-darkgray hover:text-glossy-gold transition-colors duration-300 py-2"
                >
                  Projects
                </Link>
                <Link 
                  to="/#skills" 
                  onClick={handleNavLinkClick} 
                  className="text-xl font-montserrat font-medium text-glossy-darkgray hover:text-glossy-gold transition-colors duration-300 py-2"
                >
                  Skills
                </Link>
              </>
            )}
            <div className="pt-6">
              <a 
                href="/MohammadAlassiri-CV.pdf" 
                className="inline-block px-8 py-3 border-2 border-glossy-gold text-glossy-darkgray rounded-md text-center hover:bg-glossy-gold hover:text-white transition-all duration-300 font-medium"
                download
                onClick={handleNavLinkClick}
              >
                Download CV
              </a>
            </div>
          </div>
          
          <div className="mt-12 flex justify-center space-x-6">
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <i className="ri-github-fill text-2xl text-glossy-darkgray hover:text-glossy-gold transition-colors duration-300"></i>
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <i className="ri-linkedin-box-fill text-2xl text-glossy-darkgray hover:text-glossy-gold transition-colors duration-300"></i>
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <i className="ri-twitter-fill text-2xl text-glossy-darkgray hover:text-glossy-gold transition-colors duration-300"></i>
            </a>
            <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <i className="ri-instagram-fill text-2xl text-glossy-darkgray hover:text-glossy-gold transition-colors duration-300"></i>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
