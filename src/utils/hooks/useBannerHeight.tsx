import { useEffect, useState } from "react";

export function useBannerHeight(
  cardsRef,
  dependencyData = null,
) {
  const [footerHeight, setFooterHeight] = useState(100);

  useEffect(() => {
    if (!cardsRef.current) return;

    const updateFooterHeight = () => {
      const headerHeight = 92
      const windowHeight = window.innerHeight;
      const cardsHeight = cardsRef.current.offsetHeight;
      const remaining = windowHeight - headerHeight - cardsHeight;
      setFooterHeight(remaining > 100 ? remaining : 100);
    };

    const observer = new ResizeObserver(updateFooterHeight);
    observer.observe(cardsRef.current);
    window.addEventListener("resize", updateFooterHeight);

    requestAnimationFrame(updateFooterHeight);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", updateFooterHeight);
    };
  }, [cardsRef, dependencyData]);

  return footerHeight;
}
