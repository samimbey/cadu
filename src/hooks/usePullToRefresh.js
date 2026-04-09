import { useState, useEffect, useRef } from "react";

/**
 * usePullToRefresh — triggers onRefresh when user pulls down from top of scroll.
 * Returns { isPulling, pullProgress (0-1), isRefreshing }
 */
export default function usePullToRefresh(onRefresh, threshold = 80) {
  const [isPulling, setIsPulling] = useState(false);
  const [pullY, setPullY] = useState(0);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const startY = useRef(null);

  useEffect(() => {
    const onTouchStart = (e) => {
      if (window.scrollY === 0) {
        startY.current = e.touches[0].clientY;
      }
    };

    const onTouchMove = (e) => {
      if (startY.current === null) return;
      const delta = e.touches[0].clientY - startY.current;
      if (delta > 0 && window.scrollY === 0) {
        setIsPulling(true);
        setPullY(Math.min(delta, threshold * 1.5));
        if (delta > 10) e.preventDefault();
      }
    };

    const onTouchEnd = async () => {
      if (isPulling && pullY >= threshold && !isRefreshing) {
        setIsRefreshing(true);
        setPullY(0);
        setIsPulling(false);
        await onRefresh();
        setIsRefreshing(false);
      } else {
        setIsPulling(false);
        setPullY(0);
      }
      startY.current = null;
    };

    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: false });
    window.addEventListener("touchend", onTouchEnd);
    return () => {
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onTouchEnd);
    };
  }, [isPulling, pullY, isRefreshing, onRefresh, threshold]);

  return { isPulling, pullProgress: Math.min(pullY / threshold, 1), isRefreshing };
}