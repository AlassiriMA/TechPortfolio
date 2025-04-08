import { Helmet } from "react-helmet";
import { Link } from "wouter";
import Header from "../components/Header";
import Footer from "../components/Footer";

/**
 * 404 Not Found page component
 * 
 * @returns The 404 error page
 */
export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>Page Not Found | Mohammad A Alassiri - Technology & AI Expert</title>
        <meta name="description" content="The page you are looking for doesn't exist or has been moved." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      
      <Header />
      
      <main className="container mx-auto px-6 py-20 flex flex-col items-center justify-center min-h-[60vh]">
        <div className="text-center max-w-2xl">
          <div className="text-9xl font-bold text-glossy-gold mb-6">404</div>
          <h1 className="text-4xl font-semibold mb-4 text-glossy-silver">Page Not Found</h1>
          <p className="text-gray-700 mb-8 text-lg">
            The page you are looking for doesn't exist or has been moved.
          </p>
          
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <Link to="/">
              <button className="px-6 py-3 bg-glossy-gold text-white font-medium rounded hover:bg-opacity-90 transition-all duration-300 min-w-[200px]">
                <i className="ri-home-4-line mr-2"></i> Go Home
              </button>
            </Link>
            <Link to="/sitemap">
              <button className="px-6 py-3 border border-glossy-silver text-gray-700 font-medium rounded hover:bg-gray-50 transition-all duration-300 min-w-[200px]">
                <i className="ri-file-list-3-line mr-2"></i> View Sitemap
              </button>
            </Link>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
}
