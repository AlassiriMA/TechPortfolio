import { Link, useLocation } from "wouter";

/**
 * Footer component with navigation links and copyright information
 * 
 * @returns The footer section
 */
const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [location] = useLocation();
  const isHomePage = location === "/";
  
  return (
    <footer className="bg-darkgray text-gray-800 py-14">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {/* Logo and tagline */}
          <div className="md:col-span-1">
            {isHomePage ? (
              <a 
                href="#home" 
                className="font-poppins font-semibold text-2xl tracking-tight text-glossy-gold inline-flex items-center"
                aria-label="Mohammad A Alassiri's logo"
              >
                <img 
                  src="/icons/robot-icon.svg" 
                  alt="Robot Icon" 
                  className="w-8 h-8 mr-2"
                />
                ma<span className="text-glossy-silver">@</span>alassiri
              </a>
            ) : (
              <Link 
                to="/" 
                className="font-poppins font-semibold text-2xl tracking-tight text-glossy-gold inline-flex items-center"
                aria-label="Mohammad A Alassiri's logo"
              >
                <img 
                  src="/icons/robot-icon.svg" 
                  alt="Robot Icon" 
                  className="w-8 h-8 mr-2"
                />
                ma<span className="text-glossy-silver">@</span>alassiri
              </Link>
            )}
            <p className="text-gray-800 mt-4 text-sm">
              Transforming ideas into elegant digital experiences through innovative technology solutions.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <a href="https://github.com/" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <i className="ri-github-fill text-2xl text-gray-800 hover:text-glossy-gold transition-colors duration-300"></i>
              </a>
              <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <i className="ri-linkedin-box-fill text-2xl text-gray-800 hover:text-glossy-gold transition-colors duration-300"></i>
              </a>
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)">
                <i className="ri-twitter-x-fill text-2xl text-gray-800 hover:text-glossy-gold transition-colors duration-300"></i>
              </a>
              <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <i className="ri-facebook-fill text-2xl text-gray-800 hover:text-glossy-gold transition-colors duration-300"></i>
              </a>
              <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <i className="ri-instagram-fill text-2xl text-gray-800 hover:text-glossy-gold transition-colors duration-300"></i>
              </a>
              <a href="https://t.me/" target="_blank" rel="noopener noreferrer" aria-label="Telegram">
                <i className="ri-telegram-fill text-2xl text-gray-800 hover:text-glossy-gold transition-colors duration-300"></i>
              </a>
              <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <i className="ri-whatsapp-fill text-2xl text-gray-800 hover:text-glossy-gold transition-colors duration-300"></i>
              </a>
              <a href="https://reddit.com/" target="_blank" rel="noopener noreferrer" aria-label="Reddit">
                <i className="ri-reddit-fill text-2xl text-gray-800 hover:text-glossy-gold transition-colors duration-300"></i>
              </a>
              <a href="https://discord.com/" target="_blank" rel="noopener noreferrer" aria-label="Discord">
                <i className="ri-discord-fill text-2xl text-gray-800 hover:text-glossy-gold transition-colors duration-300"></i>
              </a>
            </div>
            
            <div className="mt-8">
              <a 
                href="/MohammadAlassiri-CV.pdf" 
                className="inline-flex items-center gap-2 px-5 py-3 bg-glossy-gold text-white font-montserrat font-semibold rounded-md hover:bg-opacity-90 transition-all duration-300 shadow-md"
                download
                aria-label="Download CV"
              >
                <i className="ri-file-download-line"></i>
                <span>Download CV</span>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="md:col-span-1">
            <h3 className="font-montserrat font-semibold text-glossy-gold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-800">
              {isHomePage ? (
                <>
                  <li><a href="#home" className="hover:text-glossy-gold transition-colors duration-300">Home</a></li>
                  <li><a href="#projects" className="hover:text-glossy-gold transition-colors duration-300">Projects</a></li>
                  <li><a href="#skills" className="hover:text-glossy-gold transition-colors duration-300">Skills</a></li>
                </>
              ) : (
                <>
                  <li><Link to="/" className="hover:text-glossy-gold transition-colors duration-300">Home</Link></li>
                  <li><Link to="/#projects" className="hover:text-glossy-gold transition-colors duration-300">Projects</Link></li>
                  <li><Link to="/#skills" className="hover:text-glossy-gold transition-colors duration-300">Skills</Link></li>
                </>
              )}
              <li><a href="#" className="hover:text-glossy-gold transition-colors duration-300">Blog</a></li>
              <li><a href="/MohammadAlassiri-CV.pdf" target="_blank" className="hover:text-glossy-gold transition-colors duration-300" download>Download CV</a></li>
            </ul>
            
            <h3 className="font-montserrat font-semibold text-glossy-gold text-lg mt-8 mb-4">Contact Info</h3>
            <ul className="space-y-3 text-gray-800">
              <li className="flex items-start">
                <i className="ri-map-pin-fill text-glossy-gold mr-3 mt-1"></i>
                <span>Riyadh, Saudi Arabia</span>
              </li>
              <li className="flex items-center">
                <i className="ri-mail-fill text-glossy-gold mr-3"></i>
                <a href="mailto:contact@mohammadalassiri.com" className="hover:text-glossy-gold transition-colors duration-300">contact@mohammadalassiri.com</a>
              </li>
            </ul>
          </div>
          
          {/* Technologies */}
          <div className="md:col-span-1">
            <h3 className="font-montserrat font-semibold text-glossy-gold text-lg mb-4">Technologies</h3>
            <ul className="space-y-2 text-gray-800 grid grid-cols-2 gap-2">
              <li><a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank" rel="noopener noreferrer" className="hover:text-glossy-gold transition-colors duration-300">HTML5</a></li>
              <li><a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank" rel="noopener noreferrer" className="hover:text-glossy-gold transition-colors duration-300">CSS3</a></li>
              <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer" className="hover:text-glossy-gold transition-colors duration-300">JavaScript</a></li>
              <li><a href="https://www.typescriptlang.org/" target="_blank" rel="noopener noreferrer" className="hover:text-glossy-gold transition-colors duration-300">TypeScript</a></li>
              <li><a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer" className="hover:text-glossy-gold transition-colors duration-300">React</a></li>
              <li><a href="https://nodejs.org/" target="_blank" rel="noopener noreferrer" className="hover:text-glossy-gold transition-colors duration-300">Node.js</a></li>
              <li><a href="https://www.python.org/" target="_blank" rel="noopener noreferrer" className="hover:text-glossy-gold transition-colors duration-300">Python</a></li>
              <li><a href="https://www.postgresql.org/" target="_blank" rel="noopener noreferrer" className="hover:text-glossy-gold transition-colors duration-300">PostgreSQL</a></li>
              <li><a href="https://www.mongodb.com/" target="_blank" rel="noopener noreferrer" className="hover:text-glossy-gold transition-colors duration-300">MongoDB</a></li>
              <li><a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer" className="hover:text-glossy-gold transition-colors duration-300">TailwindCSS</a></li>
            </ul>
          </div>
        </div>
        
        <hr className="border-gray-700 my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-800">
          <p>© {currentYear} Mohammad A Alassiri. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex flex-wrap justify-center gap-4">
            <a href="#" className="text-sm text-gray-800 hover:text-glossy-gold transition-colors duration-300">Privacy Policy</a>
            <span className="hidden md:inline text-gray-800">|</span>
            <a href="#" className="text-sm text-gray-800 hover:text-glossy-gold transition-colors duration-300">Terms of Service</a>
            <span className="hidden md:inline text-gray-800">|</span>
            <a href="#" className="text-sm text-gray-800 hover:text-glossy-gold transition-colors duration-300">Sitemap</a>
          </div>
          <p className="mt-4 md:mt-0 text-gray-800">Designed with <span className="text-glossy-gold">♥</span> by Mohammad</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
