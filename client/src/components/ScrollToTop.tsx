import { useEffect } from "react";
import { useLocation } from "wouter";

/**
 * Component to handle auto-scrolling to top on route change
 * 
 * @returns null - this is a utility component with no visual output
 */
const ScrollToTop = () => {
  const [location] = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  
  return null;
};

export default ScrollToTop;