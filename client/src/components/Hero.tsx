import TypingAnimation from "./TypingAnimation";

/**
 * Hero section component displaying introduction and profile image
 * 
 * @returns The hero section with typing animation
 */
const Hero = () => {
  const typingTexts = [
    "developer",
    "designer",
    "problem solver",
    "modern technology",
    "innovative solutions"
  ];

  return (
    <section id="home" className="min-h-screen flex items-center pt-20 pb-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center">
          <div className="w-full mb-10">
            <div className="mx-auto w-32 h-32 mb-6">
              <img 
                src="/icons/robot-icon.svg" 
                alt="Robot Icon" 
                className="w-full h-full"
                loading="eager"
              />
            </div>
            <h1 className="font-['Lilita_One'] text-4xl md:text-5xl lg:text-6xl mb-6">
              <span className="text-glossy-gold">mohammad a</span> <span className="text-glossy-silver">alassiri</span>
            </h1>
            <div className="mb-8 mx-auto">
              <TypingAnimation 
                texts={typingTexts} 
                className="text-xl md:text-2xl font-montserrat text-glossy-darkgray"
                typingSpeed={80}
              />
            </div>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              full-stack developer turning complex challenges into elegant solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="#projects" 
                className="px-6 py-3 bg-glossy-gold text-white font-montserrat font-semibold rounded-md hover:bg-opacity-90 transition-all duration-300 shadow-lg"
                aria-label="View my work"
              >
                View My Work
              </a>
              <a 
                href="#contact" 
                className="px-6 py-3 border-2 border-glossy-silver text-glossy-darkgray font-montserrat font-semibold rounded-md hover:border-glossy-gold hover:text-glossy-gold transition-all duration-300"
                aria-label="Get in touch"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
