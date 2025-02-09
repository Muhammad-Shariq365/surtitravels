import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top-left corner
  }, [pathname]); // Run every time the pathname changes

  return null; // No visual output
};

export default ScrollToTop;
