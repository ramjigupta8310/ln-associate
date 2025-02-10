import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.history.scrollRestoration = "manual"; // Disable browser scroll restore
        window.scrollTo({ top: 0, behavior: "instant" }); // Always scroll to top
    }, [pathname]);

    return null;
};

export default ScrollToTop;
