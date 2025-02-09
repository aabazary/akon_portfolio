// app/portfolio/[id]/page.js
"use client";

import { useParams } from "next/navigation";
import WheelNavigator from "../../WheelNavigator";
import { motion } from "framer-motion";

const portfolioItems = [
  { id: "1", title: "Project One", description: "Description for Project One" },
  { id: "2", title: "Project Two", description: "Description for Project Two" },
  { id: "3", title: "Project Three", description: "Description for Project Three" },
];

export default function PortfolioItemPage() {
  const params = useParams();
  const { id } = params;
  const currentIndex = portfolioItems.findIndex((item) => item.id === id);
  const item = portfolioItems[currentIndex];

  // Determine previous and next routes:
  const previousRoute =
    currentIndex === 0 ? "/about" : `/portfolio/${portfolioItems[currentIndex - 1].id}`;
  const nextRoute =
    currentIndex === portfolioItems.length - 1 ? "/contact" : `/portfolio/${portfolioItems[currentIndex + 1].id}`;

  if (!item) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Item not found
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <WheelNavigator nextRoute={nextRoute} previousRoute={previousRoute} />
      <motion.div
        className="bg-white shadow-lg rounded-lg p-6 max-w-md w-full"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-bold mb-2">{item.title}</h2>
        <p>{item.description}</p>
        <p className="mt-4 text-sm text-gray-500">
          Use your scroll wheel to navigate between portfolio items.
        </p>
      </motion.div>
    </div>
  );
}
