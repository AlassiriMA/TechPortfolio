import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

/**
 * Props for the PolicyLayout component
 */
interface PolicyLayoutProps {
  children: ReactNode;
  title: string;
  lastUpdated?: string;
}

/**
 * Layout component for policy pages with consistent styling
 * 
 * @param children - Content to display in the layout
 * @param title - Title of the policy page
 * @param lastUpdated - Optional date when the policy was last updated
 * @returns A consistently styled policy page layout
 */
const PolicyLayout = ({ children, title, lastUpdated = "April 2025" }: PolicyLayoutProps) => {
  return (
    <>
      <Header />
      
      <main className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-lg overflow-hidden">
          <div className="bg-glossy-gold bg-opacity-10 px-8 py-6 border-b border-gray-200">
            <h1 className="text-3xl md:text-4xl font-bold text-glossy-gold mb-1">{title}</h1>
            <p className="text-gray-600">Last updated: {lastUpdated}</p>
          </div>
          
          <div className="p-8">
            <div className="prose prose-lg max-w-none">
              {children}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default PolicyLayout;