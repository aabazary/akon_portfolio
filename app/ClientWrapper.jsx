// app/ClientWrapper.jsx
"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useContext } from "react";
import { ScrollDirectionContext } from "./ScrollDirectionContext";

export default function ClientWrapper({ children }) {
  const pathname = usePathname();
  const { direction } = useContext(ScrollDirectionContext);

  const variants = {
    initial: (direction) => ({
      opacity: 0,
      y: direction === 1 ? "100vh" : "-100vh",
    }),
    animate: {
      opacity: 1,
      y: 0,
    },
    exit: (direction) => ({
      opacity: 0,
      y: direction === 1 ? "-100vh" : "100vh",
    }),
  };

  return (
    <div
      style={{
        position: "relative",
        minHeight: "100vh",
        overflow: "hidden",
        // Remove the background color to let BackgroundStars show through
      }}
    >
      <AnimatePresence mode="sync">
        <motion.div
          key={pathname}
          custom={direction}
          variants={variants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.5 }}
          style={{
            position: "absolute",
            width: "100%",
            minHeight: "100vh",
          }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
