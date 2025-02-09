import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: "instant" }); // Instant reset first
        //   setTimeout(() => {
        //     window.scrollTo({ top: 0, behavior: "smooth" }); // Then smooth scroll
        //   }, 50); // Small delay for smooth effect
        },  50); // Delay ensures DOM is loaded before scroll reset
      }, [pathname]);

  

    return null;
}

export default ScrollToTop
