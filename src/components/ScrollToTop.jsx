import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname, state } = useLocation();

  useEffect(() => {
    const navType = window.performance?.getEntriesByType?.("navigation")?.[0]?.type;
    const isReload = navType === "reload";

    if (!isReload && state?.scrollTo) {
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
