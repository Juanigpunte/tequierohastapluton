import React from "react";
import { motion } from "framer-motion";

export default function TextSection({ title, content, index }) {
  return (
    <motion.div
      className="mb-12 w-full max-w-4xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 * index }}
    >
      <div className="bg-white/5 backdrop-blur-sm border border-yellow-300/20 rounded-2xl p-6 md:p-12 shadow-2xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-yellow-300 text-center">
          {title}
        </h2>
        <p className="text-lg md:text-xl text-indigo-200 leading-relaxed text-center">
          {content}
        </p>
      </div>
    </motion.div>
  );
}

