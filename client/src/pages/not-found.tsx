import { Helmet } from "react-helmet";
import { Link } from "wouter";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Home, Map, ArrowLeft, RefreshCw } from "lucide-react";

/**
 * 404 Not Found page component with advanced visual design
 * 
 * @returns The styled 404 error page
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
      
      <main className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50 py-24 min-h-[70vh] flex items-center">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[15%] left-[10%] w-[30rem] h-[30rem] bg-glossy-gold opacity-[0.03] rounded-full blur-3xl"></div>
          <div className="absolute bottom-[20%] right-[5%] w-[25rem] h-[25rem] bg-glossy-silver opacity-[0.05] rounded-full blur-3xl"></div>
          
          {/* Binary code background */}
          <div className="absolute inset-0 opacity-[0.03] overflow-hidden select-none text-4xl text-gray-700 font-mono">
            <div className="absolute -left-10 top-1/4 transform -rotate-12">
              10110101 01001010 11101010 00101101 <br />
              01010101 11110000 10101010 10101011 <br />
              11001010 10101010 01010101 01010010 <br />
              01010101 01010101 10101011 01010110 <br />
              10101010 10101010 10101010 01010101 <br />
            </div>
            <div className="absolute right-10 bottom-1/4 transform rotate-12">
              10110101 01001010 11101010 00101101 <br />
              01010101 11110000 10101010 10101011 <br />
              11001010 10101010 01010101 01010010 <br />
              01010101 01010101 10101011 01010110 <br />
              10101010 10101010 10101010 01010101 <br />
            </div>
          </div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center">
              {/* 404 with glitch effect */}
              <div className="relative">
                <div className="text-[12rem] font-black text-glossy-gold opacity-25 leading-none select-none">
                  404
                </div>
                <div className="text-[12rem] font-black bg-clip-text text-transparent bg-gradient-to-r from-glossy-gold to-yellow-600 absolute top-0 left-0 w-full leading-none select-none">
                  404
                </div>
                <div className="text-[12rem] font-black bg-clip-text text-transparent bg-gradient-to-r from-glossy-gold to-yellow-600 absolute top-1 left-1 w-full leading-none select-none opacity-50 blur-[2px]">
                  404
                </div>
              </div>
              
              <h1 className="text-5xl font-montserrat font-bold mb-6 text-glossy-silver relative">
                <span className="relative inline-block">
                  Page Not Found
                  <span className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-glossy-gold to-transparent"></span>
                </span>
              </h1>
              
              <p className="text-xl text-gray-700 mb-12 max-w-2xl mx-auto">
                The page you're looking for has vanished into the digital void. 
                Let's get you back on track.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-xl mx-auto">
                <Link to="/">
                  <button className="w-full group relative overflow-hidden rounded-lg bg-glossy-gold px-8 py-5 text-white shadow-lg transition-all duration-500 hover:bg-opacity-90">
                    <span className="relative z-10 flex items-center justify-center font-semibold">
                      <Home className="mr-2 h-5 w-5" />
                      Back to Home
                    </span>
                    <span className="absolute inset-0 z-0 bg-gradient-to-r from-yellow-500 to-glossy-gold opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
                  </button>
                </Link>
                
                <Link to="/sitemap">
                  <button className="w-full group relative overflow-hidden rounded-lg border-2 border-glossy-silver bg-white px-8 py-[18px] text-glossy-darkgray shadow-lg transition-all duration-500 hover:border-glossy-gold">
                    <span className="relative z-10 flex items-center justify-center font-semibold">
                      <Map className="mr-2 h-5 w-5" />
                      View Sitemap
                    </span>
                    <span className="absolute inset-0 z-0 bg-gradient-to-r from-gray-50 to-white opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
                  </button>
                </Link>
              </div>
              
              <div className="mt-14 flex justify-center">
                <button 
                  onClick={() => history.back()} 
                  className="flex items-center text-glossy-darkgray hover:text-glossy-gold transition-colors duration-300"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  <span>Go back to previous page</span>
                </button>
                <span className="mx-4 text-gray-300">|</span>
                <button 
                  onClick={() => window.location.reload()} 
                  className="flex items-center text-glossy-darkgray hover:text-glossy-gold transition-colors duration-300"
                >
                  <RefreshCw className="mr-2 h-4 w-4" />
                  <span>Refresh page</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
}
