import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowLeft, ArrowRight, X } from "lucide-react";

export default function GallerySection({ title, content, index, bookTitle }) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (imgIndex) => {
    setCurrentIndex(imgIndex);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);

  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentIndex((currentIndex - 1 + content.length) % content.length);
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentIndex((currentIndex + 1) % content.length);
  };

  // Mini estrellas para el lightbox
  const miniStars = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2 + 1,
    delay: Math.random() * 2,
    duration: Math.random() * 2 + 2,
  }));

  return (
    <>
      <motion.div
        className="mb-12 w-full max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 * index }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-yellow-300 text-center">
          {title}
        </h2>
        
        {/* Desktop grid */}
        <div className="hidden md:grid grid-cols-3 gap-6">
          {content.map((img, imgIndex) => (
            <div
              key={imgIndex}
              className="overflow-hidden rounded-2xl shadow-2xl cursor-pointer"
              onClick={() => openLightbox(imgIndex)}
            >
              <img
                src={img}
                alt={`${bookTitle} ${title} ${imgIndex + 1}`}
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
        
        {/* Mobile carousel */}
        <div className="md:hidden flex gap-4 overflow-x-auto scroll-smooth no-scrollbar px-2 snap-x snap-mandatory">
          {content.map((img, imgIndex) => (
            <div
              key={imgIndex}
              className="flex-shrink-0 w-72 h-64 rounded-2xl shadow-2xl snap-start cursor-pointer"
              onClick={() => openLightbox(imgIndex)}
            >
              <img
                src={img}
                alt={`${bookTitle} ${title} ${imgIndex + 1}`}
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          ))}
        </div>
      </motion.div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
          onClick={closeLightbox}
        >
          {/* Mini estrellas */}
          {miniStars.map((star) => (
            <motion.div
              key={star.id}
              className="absolute rounded-full bg-yellow-300"
              style={{
                left: `${star.x}%`,
                top: `${star.y}%`,
                width: `${star.size}px`,
                height: `${star.size}px`,
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: [0, 1, 0.5, 1], scale: [0, 1, 1.2, 1] }}
              transition={{
                duration: star.duration,
                delay: star.delay,
                repeat: Infinity,
                repeatType: "mirror",
              }}
            />
          ))}

          <button
            className="absolute top-6 right-6 text-yellow-300 z-10"
            onClick={closeLightbox}
          >
            <X size={32} />
          </button>

          <button
            className="absolute left-6 top-1/2 -translate-y-1/2 text-yellow-300 z-10"
            onClick={prevImage}
          >
            <ArrowLeft size={48} />
          </button>

          <img
            src={content[currentIndex]}
            alt="Ampliada"
            className="max-w-full max-h-full rounded-2xl shadow-2xl z-10"
          />

          <button
            className="absolute right-6 top-1/2 -translate-y-1/2 text-yellow-300 z-10"
            onClick={nextImage}
          >
            <ArrowRight size={48} />
          </button>
        </div>
      )}
    </>
  );
}

