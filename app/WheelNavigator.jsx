"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef, useContext } from "react";
import { ScrollDirectionContext } from "./ScrollDirectionContext";

export default function WheelNavigator({ nextRoute, previousRoute }) {
  const router = useRouter();
  const inTransition = useRef(false);
  const { setDirection } = useContext(ScrollDirectionContext);

  useEffect(() => {
    let touchStartY = 0;
    let touchEndY = 0;

    const handleWheel = (event) => {
      if (inTransition.current) return;

      if (event.deltaY > 0 && nextRoute) {
        navigate(nextRoute, 1); // Scroll Down
      } else if (event.deltaY < 0 && previousRoute) {
        navigate(previousRoute, -1); // Scroll Up
      }
    };

    const handleTouchStart = (event) => {
      touchStartY = event.touches[0].clientY;
    };

    const handleTouchMove = (event) => {
      touchEndY = event.touches[0].clientY;
    };

    const handleTouchEnd = () => {
      if (inTransition.current) return;

      const deltaY = touchStartY - touchEndY;
      if (deltaY > 50 && nextRoute) {
        navigate(nextRoute, 1); // Swipe Up
      } else if (deltaY < -50 && previousRoute) {
        navigate(previousRoute, -1); // Swipe Down
      }
    };

    const navigate = (route, direction) => {
      setDirection(direction);
      inTransition.current = true;
      router.push(route);
      setTimeout(() => {
        inTransition.current = false;
      }, 800);
    };

    // Attach Listeners
    window.addEventListener("wheel", handleWheel, { passive: true });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    window.addEventListener("touchend", handleTouchEnd);

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [router, nextRoute, previousRoute, setDirection]);

  return null;
}
