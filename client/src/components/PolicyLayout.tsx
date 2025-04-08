import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { ArrowLeft, Calendar, FileText } from "lucide-react";
import { Link } from "wouter";

/**
 * Props for the PolicyLayout component
 */
interface PolicyLayoutProps {
  children: ReactNode;
  title: string;
  lastUpdated?: string;
}

/**
 * Enhanced layout component for policy pages with visual design improvements
 * 
 * @param children - Content to display in the layout
 * @param title - Title of the policy page
 * @param lastUpdated - Optional date when the policy was last updated
 * @returns A visually engaging policy page layout
 */
const PolicyLayout = ({ children, title, lastUpdated = "April 2025" }: PolicyLayoutProps) => {
  return (
    <>
      <Header />
      
      <main className="bg-gradient-to-b from-white to-gray-50 min-h-screen pt-20 pb-16">
        <div className="container mx-auto px-6">
          <Link to="/" className="inline-flex items-center gap-2 text-glossy-darkgray hover:text-glossy-gold transition-colors mb-8">
            <ArrowLeft size={18} />
            Back to Home
          </Link>
          
          <div className="max-w-4xl mx-auto">
            {/* Header with decorative elements */}
            <div className="relative mb-8 overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-glossy-gold opacity-[0.03] rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
              <div className="relative z-10">
                <h1 className="text-4xl md:text-5xl font-montserrat font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-glossy-gold to-yellow-600 inline-block">
                  {title}
                </h1>
                
                <div className="flex items-center text-gray-600 mt-4">
                  <Calendar className="h-5 w-5 mr-2 text-glossy-gold" />
                  <span>Last updated: {lastUpdated}</span>
                </div>
              </div>
            </div>
            
            {/* Main content with visual accents */}
            <div className="bg-white shadow-xl rounded-2xl overflow-hidden relative">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-glossy-gold to-transparent"></div>
              
              <div className="p-8 md:p-10 relative">
                {/* Left side decoration */}
                <div className="absolute top-0 left-0 bottom-0 w-1 bg-gradient-to-b from-glossy-gold via-transparent to-transparent opacity-30"></div>
                
                {/* Document icon watermark */}
                <div className="absolute bottom-6 right-6 opacity-[0.03] pointer-events-none">
                  <FileText className="h-40 w-40 text-glossy-gold" />
                </div>
                
                {/* Content */}
                <div className="prose prose-lg max-w-none relative z-10 custom-prose">
                  {children}
                </div>
              </div>
            </div>
            
            {/* Return link with animation */}
            <div className="mt-10 text-center">
              <Link to="/" className="inline-flex items-center gap-2 text-glossy-darkgray hover:text-glossy-gold transition-colors group">
                <ArrowLeft size={18} className="transform group-hover:-translate-x-1 transition-transform" />
                <span>Return to Homepage</span>
              </Link>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default PolicyLayout;