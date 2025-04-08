/**
 * Footer component with navigation links and copyright information
 * 
 * @returns The footer section
 */
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-darkgray text-gray-800 py-14">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {/* Logo and tagline */}
          <div className="md:col-span-1">
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
            <p className="text-gray-800 mt-4 text-sm">
              Transforming ideas into elegant digital experiences through innovative technology solutions.
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="https://github.com/" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <i className="ri-github-fill text-2xl text-gray-800 hover:text-glossy-gold transition-colors duration-300"></i>
              </a>
              <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <i className="ri-linkedin-box-fill text-2xl text-gray-800 hover:text-glossy-gold transition-colors duration-300"></i>
              </a>
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <i className="ri-twitter-fill text-2xl text-gray-800 hover:text-glossy-gold transition-colors duration-300"></i>
              </a>
              <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <i className="ri-instagram-fill text-2xl text-gray-800 hover:text-glossy-gold transition-colors duration-300"></i>
              </a>
              <a href="https://dev.to/" target="_blank" rel="noopener noreferrer" aria-label="Dev.to">
                <i className="ri-code-box-fill text-2xl text-gray-800 hover:text-glossy-gold transition-colors duration-300"></i>
              </a>
              <a href="https://medium.com/" target="_blank" rel="noopener noreferrer" aria-label="Medium">
                <i className="ri-medium-fill text-2xl text-gray-800 hover:text-glossy-gold transition-colors duration-300"></i>
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
              <li><a href="#home" className="hover:text-glossy-gold transition-colors duration-300">Home</a></li>
              <li><a href="#projects" className="hover:text-glossy-gold transition-colors duration-300">Projects</a></li>
              <li><a href="#skills" className="hover:text-glossy-gold transition-colors duration-300">Skills</a></li>
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
            <ul className="space-y-2 text-gray-300 grid grid-cols-2 gap-2">
              <li><a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer" className="hover:text-glossy-gold transition-colors duration-300">React</a></li>
              <li><a href="https://www.typescriptlang.org/" target="_blank" rel="noopener noreferrer" className="hover:text-glossy-gold transition-colors duration-300">TypeScript</a></li>
              <li><a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer" className="hover:text-glossy-gold transition-colors duration-300">Tailwind CSS</a></li>
              <li><a href="https://nodejs.org/" target="_blank" rel="noopener noreferrer" className="hover:text-glossy-gold transition-colors duration-300">Node.js</a></li>
              <li><a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer" className="hover:text-glossy-gold transition-colors duration-300">Next.js</a></li>
              <li><a href="https://openai.com/" target="_blank" rel="noopener noreferrer" className="hover:text-glossy-gold transition-colors duration-300">AI & ML</a></li>
              <li><a href="https://www.python.org/" target="_blank" rel="noopener noreferrer" className="hover:text-glossy-gold transition-colors duration-300">Python</a></li>
              <li><a href="https://flutter.dev/" target="_blank" rel="noopener noreferrer" className="hover:text-glossy-gold transition-colors duration-300">Flutter</a></li>
              <li><a href="https://angular.io/" target="_blank" rel="noopener noreferrer" className="hover:text-glossy-gold transition-colors duration-300">Angular</a></li>
              <li><a href="https://vuejs.org/" target="_blank" rel="noopener noreferrer" className="hover:text-glossy-gold transition-colors duration-300">Vue.js</a></li>
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
