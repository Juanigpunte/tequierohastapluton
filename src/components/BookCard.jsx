import React from "react";
import { motion } from "framer-motion";

export default function BookCard({ book, onClick }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white/10 backdrop-blur-md border border-yellow-300/20 rounded-2xl shadow-xl p-4 cursor-pointer max-w-xs mx-auto"
      onClick={onClick}
    >
      <div className="overflow-hidden rounded-xl">
        <img
          src={book.cover}
          alt={book.title}
          className="w-full h-56 object-cover"
        />
      </div>

      <h3 className="text-xl font-bold text-yellow-300 text-center mt-4">
        {book.title}
      </h3>

      <p className="text-indigo-200 text-sm text-center mt-2">
        {book.shortDescription}
      </p>
    </motion.div>
  );
}
