import TypingAnimation from "./TypingAnimation";

/**
 * Hero section component displaying introduction and profile image
 * 
 * @returns The hero section with typing animation
 */
const Hero = () => {
  const typingTexts = [
    "Passionate developer with a flair for creating innovative solutions.",
    "Full-stack developer specializing in modern web technologies.",
    "Problem solver turning complex challenges into elegant solutions."
  ];

  return (
    <section id="home" className="min-h-screen flex items-center pt-20 pb-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="font-montserrat font-bold text-4xl md:text-5xl lg:text-6xl mb-6">
              <span className="text-gold">Mohammad A</span> Alassiri
            </h1>
            <div className="mb-8">
              <TypingAnimation 
                texts={typingTexts} 
                className="text-xl md:text-2xl font-montserrat text-mediumgray"
              />
            </div>
            <p className="text-lg mb-8 max-w-lg">
              Transforming ideas into elegant digital experiences through cutting-edge technology and creative problem-solving.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#projects" 
                className="px-6 py-3 bg-gold text-white font-montserrat font-semibold rounded-md hover:bg-opacity-90 transition-all duration-300 shadow-md"
                aria-label="View my work"
              >
                View My Work
              </a>
              <a 
                href="#contact" 
                className="px-6 py-3 border-2 border-silver text-darkgray font-montserrat font-semibold rounded-md hover:border-gold hover:text-gold transition-all duration-300"
                aria-label="Get in touch"
              >
                Get In Touch
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-silver shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=800&q=80" 
                alt="Mohammad A Alassiri" 
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
