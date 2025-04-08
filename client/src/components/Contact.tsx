import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Mail, MapPin, Linkedin, Github, Twitter, Linkedin as BehanceLogo } from "lucide-react";

/**
 * Contact section component with contact form and information
 * 
 * @returns The contact section with form and contact details
 */
const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  
  // Form validation state
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: ""
  });
  
  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user types
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };
  
  // Validate form data
  const validateForm = () => {
    let isValid = true;
    const newErrors = { name: "", email: "", message: "" };
    
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
      isValid = false;
    }
    
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
      isValid = false;
    }
    
    setErrors(newErrors);
    return isValid;
  };
  
  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Open email client with prefilled data
      const mailtoLink = `mailto:contact@mohammadalassiri.com?subject=Contact from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(formData.message)}%0A%0AFrom: ${encodeURIComponent(formData.name)} (${encodeURIComponent(formData.email)})`;
      window.location.href = mailtoLink;
      
      // Show success message
      toast({
        title: "Message ready to send",
        description: "Your email client has been opened with the message details.",
      });
      
      // Reset form
      setFormData({ name: "", email: "", message: "" });
    } else {
      toast({
        title: "Please check the form",
        description: "There are some errors in the form that need to be fixed.",
        variant: "destructive"
      });
    }
  };

  return (
    <section id="contact" className="py-20 bg-lightgray">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl mb-4">Get In <span className="text-gold">Touch</span></h2>
          <p className="text-mediumgray max-w-2xl mx-auto">
            Have a project in mind or want to discuss opportunities? I'd love to hear from you!
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-12">
          {/* Contact Form */}
          <div className="md:w-1/2 bg-white p-8 rounded-lg shadow-md">
            <h3 className="font-montserrat font-semibold text-xl mb-6">Send Me a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-darkgray">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  className={`w-full px-4 py-3 border ${errors.name ? 'border-red-500' : 'border-silver'} rounded focus:outline-none focus:ring-2 focus:ring-gold`}
                  placeholder="Your Name" 
                  value={formData.name}
                  onChange={handleChange}
                  aria-required="true"
                  aria-invalid={errors.name ? "true" : "false"}
                  aria-describedby={errors.name ? "name-error" : undefined}
                />
                {errors.name && <p id="name-error" className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="block text-darkgray">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  className={`w-full px-4 py-3 border ${errors.email ? 'border-red-500' : 'border-silver'} rounded focus:outline-none focus:ring-2 focus:ring-gold`}
                  placeholder="your.email@example.com" 
                  value={formData.email}
                  onChange={handleChange}
                  aria-required="true"
                  aria-invalid={errors.email ? "true" : "false"}
                  aria-describedby={errors.email ? "email-error" : undefined}
                />
                {errors.email && <p id="email-error" className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="block text-darkgray">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows={5} 
                  className={`w-full px-4 py-3 border ${errors.message ? 'border-red-500' : 'border-silver'} rounded focus:outline-none focus:ring-2 focus:ring-gold`}
                  placeholder="Your message here..." 
                  value={formData.message}
                  onChange={handleChange}
                  aria-required="true"
                  aria-invalid={errors.message ? "true" : "false"}
                  aria-describedby={errors.message ? "message-error" : undefined}
                ></textarea>
                {errors.message && <p id="message-error" className="text-red-500 text-sm mt-1">{errors.message}</p>}
              </div>
              
              <button 
                type="submit" 
                className="w-full bg-gold text-white py-3 px-6 rounded font-montserrat font-semibold hover:bg-opacity-90 transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
          
          {/* Contact Information */}
          <div className="md:w-1/2">
            <div className="bg-white p-8 rounded-lg shadow-md mb-8">
              <h3 className="font-montserrat font-semibold text-xl mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="text-gold mr-4 mt-1">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <a 
                      href="mailto:me@alassiri.nl" 
                      className="text-mediumgray hover:text-gold transition-colors"
                      aria-label="Email me@alassiri.nl"
                    >
                      me@alassiri.nl
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-gold mr-4 mt-1">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Location</h4>
                    <p className="text-mediumgray">Amsterdam, The Netherlands</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="font-montserrat font-semibold text-xl mb-6">Connect With Me</h3>
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="w-12 h-12 rounded-full bg-lightgray flex items-center justify-center hover:bg-gold hover:text-white transition-all duration-300"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a 
                  href="#" 
                  className="w-12 h-12 rounded-full bg-lightgray flex items-center justify-center hover:bg-gold hover:text-white transition-all duration-300"
                  aria-label="GitHub Profile"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a 
                  href="#" 
                  className="w-12 h-12 rounded-full bg-lightgray flex items-center justify-center hover:bg-gold hover:text-white transition-all duration-300"
                  aria-label="Twitter Profile"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <a 
                  href="#" 
                  className="w-12 h-12 rounded-full bg-lightgray flex items-center justify-center hover:bg-gold hover:text-white transition-all duration-300"
                  aria-label="Behance Profile"
                >
                  <BehanceLogo className="h-5 w-5" />
                </a>
              </div>
              
              <div className="mt-8">
                <a 
                  href="/MohammadAlassiri-CV.pdf" 
                  className="inline-flex items-center space-x-2 bg-white border-2 border-gold text-darkgray px-6 py-3 rounded-md hover:bg-gold hover:text-white transition-all duration-300 font-montserrat font-semibold"
                  download
                  aria-label="Download CV"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-file-down">
                    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
                    <polyline points="14 2 14 8 20 8"/>
                    <path d="M12 18v-6"/>
                    <path d="m9 15 3 3 3-3"/>
                  </svg>
                  <span>Download CV</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
