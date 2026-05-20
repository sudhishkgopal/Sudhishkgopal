import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname, state } = useLocation();

  useEffect(() => {
    if (state?.scrollTo) {
      // Coming back from a detail page — scroll to a specific section
      setTimeout(() => {
        const el = document.getElementById(state.scrollTo);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, state]);

  return null;
}
