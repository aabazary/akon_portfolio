// app/contact/page.js (Contact)
"use client";

import WheelNavigator from "../WheelNavigator";
import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      {/* Previous goes to last portfolio item (id "3") */}
      <WheelNavigator previousRoute="/portfolio/3" />
      <motion.div
        className="bg-white shadow-xl rounded-lg p-8 max-w-xl"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold mb-4">Contact</h1>
        <p className="mb-4">Feel free to reach out at email@example.com.</p>
        <p className="text-sm text-gray-500">
          Use your scroll wheel to navigate back to Portfolio.
        </p>
      </motion.div>
    </div>
  );
}
