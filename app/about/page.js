// app/about/page.js (About Me)
"use client";

import WheelNavigator from "../WheelNavigator";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      {/* Next goes to Portfolio item 1; previous goes back to Home */}
      <WheelNavigator nextRoute="/portfolio/1" previousRoute="/" />
      <motion.div
        className="bg-white shadow-xl rounded-lg p-8 max-w-xl"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold mb-4">About Me</h1>
        <p className="mb-4">
          I’m a passionate developer with a background in both entrepreneurship and technology.
        </p>
        <p className="text-sm text-gray-500">
          Use your scroll wheel to navigate to Portfolio.
        </p>
      </motion.div>
    </div>
  );
}
