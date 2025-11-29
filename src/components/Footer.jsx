import React from "react";
import { motion } from "framer-motion";
import { Sparkles, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="text-center py-12 px-4 bg-indigo-950/70 backdrop-blur-sm text-white border-t border-yellow-300/20"
    >
      <div className="flex flex-col items-center gap-4 max-w-4xl mx-auto">
        <span className="text-yellow-300 text-sm uppercase tracking-wider">¡Gracias por visitarnos!</span>
        <span className="text-3xl md:text-4xl font-bold text-white">¡Te quiero hasta plutón!</span>

        <div className="flex gap-2 mt-2">
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          >
            <Sparkles className="text-yellow-300" size={20} />
          </motion.div>
          <motion.div
            animate={{ rotate: [360, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          >
            <Sparkles className="text-yellow-300" size={20} />
          </motion.div>
        </div>

        <p className="text-sm text-indigo-200 mt-4">
          © {new Date().getFullYear()} Valentina Punte - Todos los derechos reservados - Web: Juan
          Ignacio Punte
        </p>

        <motion.button
          onClick={scrollToTop}
          whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(251, 191, 36, 0.7)" }}
          whileTap={{ scale: 0.95 }}
          className="mt-6 px-6 py-3 bg-yellow-400 text-indigo-900 font-semibold rounded-full shadow-lg flex items-center gap-2 hover:bg-yellow-300 transition-all duration-300"
        >
          <ArrowUp size={20} />
          Volver arriba
        </motion.button>
      </div>
    </motion.footer>
  );
}
