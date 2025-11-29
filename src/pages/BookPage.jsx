import React, { useState, useMemo, useEffect } from "react";

import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import Footer from "../components/Footer";
import Navbar from "../components/layout/Navbar";
import { books } from "../data/books";
import { ArrowLeft, ArrowRight, X } from "lucide-react";

export default function BookPage() {
  const { id } = useParams();
  const book = useMemo(() => books.find((b) => b.id === id), [id]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]);

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);

  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentIndex((currentIndex - 1 + book.gallery.length) % book.gallery.length);
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentIndex((currentIndex + 1) % book.gallery.length);
  };
  // Estrellas fondo
  const stars = useMemo(
    () =>
      Array.from({ length: 100 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2.5 + 1,
        delay: Math.random() * 2,
        duration: Math.random() * 3 + 3,
      })),
    []
  );

  if (book.id != "los-suenos-de-teo")
    return (

      <div className="flex flex-col min-h-screen relative overflow-hidden bg-[radial-gradient(circle_at_20%_30%,rgba(65,105,225,0.15),transparent_60%),radial-gradient(circle_at_80%_70%,rgba(0,150,255,0.12),transparent_70%),radial-gradient(circle_at_30%_20%,#1e2a5a_0%,#0e1635_40%,#040717_100%)]">
  <Navbar />

  <div className="absolute inset-0 z-0">
    {stars.map((star) => (
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
        animate={{ opacity: [0, 1, 0.8, 1, 0.5, 1], scale: [0, 1, 1.2, 1] }}
        transition={{ duration: star.duration, delay: star.delay, repeat: Infinity, repeatType: "mirror" }}
      />
    ))}
  </div>

  {/* Main debe crecer para empujar el footer */}
  <main className="flex-1 relative z-10 flex flex-col items-center justify-center pt-24 px-6 md:px-12">
    <motion.h1
      className="text-5xl md:text-7xl font-bold mb-8 text-yellow-300 text-center"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      Proximamente...
    </motion.h1>
  </main>

  <Footer />
</div>

    );


  // Mini estrellas lightbox
  const miniStars = useMemo(
    () =>
      Array.from({ length: 30 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 1,
        delay: Math.random() * 2,
        duration: Math.random() * 2 + 2,
      })),
    []
  );

  return (
    <div className="min-h-screen relative overflow-hidden bg-[radial-gradient(circle_at_20%_30%,rgba(65,105,225,0.15),transparent_60%),radial-gradient(circle_at_80%_70%,rgba(0,150,255,0.12),transparent_70%),radial-gradient(circle_at_30%_20%,#1e2a5a_0%,#0e1635_40%,#040717_100%)]">
      <Navbar />

      {/* Fondo estrellas */}
      <div className="absolute inset-0 z-0">
        {stars.map((star) => (
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
            animate={{ opacity: [0, 1, 0.8, 1, 0.5, 1], scale: [0, 1, 1.2, 1] }}
            transition={{ duration: star.duration, delay: star.delay, repeat: Infinity, repeatType: "mirror" }}
          />
        ))}
      </div>

      <main className="relative z-10 flex flex-col items-center justify-start pt-24 px-6 md:px-12">
        {/* Título */}
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-8 text-yellow-300 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {book.title}
        </motion.h1>

        {/* Portada */}
        <motion.img
          src={book.cover}
          alt={book.title}
          className="w-72 md:w-96 rounded-2xl shadow-2xl mb-8 hover:scale-105 transition-transform duration-300"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        />

        {/* Descripción */}
        <motion.p
          className="text-lg md:text-xl text-indigo-200 max-w-3xl text-center mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {book.description}
        </motion.p>

        {/* Galería */}
        {book.gallery && book.gallery.length > 0 && (
          <div className="mb-12 w-full">
            {/* Desktop grid */}
            <div className="hidden md:grid grid-cols-3 gap-6">
              {book.gallery.map((img, index) => (
                <div
                  key={index}
                  className="overflow-hidden rounded-2xl shadow-2xl cursor-pointer"
                  onClick={() => openLightbox(index)}
                >
                  <img src={img} alt={`${book.title} ${index + 1}`} className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300 " />
                </div>
              ))}
            </div>
            {/* Mobile carousel */}
            <div className="md:hidden flex gap-4 overflow-x-auto scroll-smooth no-scrollbar px-2 snap-x snap-mandatory">
              {book.gallery.map((img, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-72 h-64 rounded-2xl shadow-2xl snap-start cursor-pointer"
                  onClick={() => openLightbox(index)}
                >
                  <img src={img} alt={`${book.title} ${index + 1}`} className="w-full h-full object-cover rounded-2xl" />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Autor */}
        {book.author && (
          <motion.div
            className="flex flex-col md:flex-row items-center gap-6 bg-white/5 backdrop-blur-sm border border-yellow-300/20 rounded-2xl p-6 md:p-12 mb-16"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <img
              src={book.author.photo}
              alt={book.author.name}
              className="w-32 h-32 md:w-40 md:h-40 rounded-full shadow-lg object-cover"
            />
            <div className="text-center md:text-left">
              <h2 className="text-2xl font-bold text-yellow-300 mb-2">{book.author.name}</h2>
              <p className="text-indigo-200">{book.author.bio}</p>
            </div>
          </motion.div>
        )}
      </main>

      <Footer />

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
              transition={{ duration: star.duration, delay: star.delay, repeat: Infinity, repeatType: "mirror" }}
            />
          ))}

          <button
            className="absolute top-6 right-6 text-yellow-300"
            onClick={closeLightbox}
          >
            <X size={32} />
          </button>

          <button
            className="absolute left-6 top-1/2 -translate-y-1/2 text-yellow-300"
            onClick={prevImage}
          >
            <ArrowLeft size={48} />
          </button>

          <img src={book.gallery[currentIndex]} alt="Ampliada" className="max-w-full max-h-full rounded-2xl shadow-2xl z-10" />

          <button
            className="absolute right-6 top-1/2 -translate-y-1/2 text-yellow-300"
            onClick={nextImage}
          >
            <ArrowRight size={48} />
          </button>
        </div>
      )}
    </div>
  );
}
