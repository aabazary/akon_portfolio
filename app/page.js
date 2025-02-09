// app/page.js (Home)
"use client";

import WheelNavigator from "./WheelNavigator";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      {/* When scrolling down, navigate to About */}
      <WheelNavigator nextRoute="/about" />
      <motion.div
        className="bg-white shadow-xl rounded-lg p-8"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold mb-4">Home</h1>
        <p className="mb-4">Welcome to my homepage!</p>
        <p className="text-sm text-gray-500">
          Scroll your wheel to navigate to About Me.
        </p>
      </motion.div>
    </div>
  );
}
