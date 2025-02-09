"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef, useContext } from "react";
import { ScrollDirectionContext } from "./ScrollDirectionContext";

export default function WheelNavigator({ nextRoute, previousRoute }) {
  const router = useRouter();
  const inTransition = useRef(false);
  const { setDirection } = useContext(ScrollDirectionContext);

  useEffect(() => {
    const handleWheel = (event) => {
      if (inTransition.current) return;

      // Scrolling down (deltaY > 0)
      if (event.deltaY > 0 && nextRoute) {
        setDirection(1); // set scroll direction to down
        inTransition.current = true;
        router.push(nextRoute);
        setTimeout(() => {
          inTransition.current = false;
        }, 800);
      }
      // Scrolling up (deltaY < 0)
      else if (event.deltaY < 0 && previousRoute) {
        setDirection(-1); // set scroll direction to up
        inTransition.current = true;
        router.push(previousRoute);
        setTimeout(() => {
          inTransition.current = false;
        }, 800);
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: true });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [router, nextRoute, previousRoute, setDirection]);

  return null;
}
