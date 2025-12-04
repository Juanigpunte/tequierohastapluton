import React, { useMemo, useEffect } from "react";

import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import Footer from "../components/Footer";
import Navbar from "../components/layout/Navbar";
import { books } from "../data/books";
import TextSection from "../components/TextSection";
import GallerySection from "../components/GallerySection";

export default function BookPage() {
  const { id } = useParams();
  const book = useMemo(() => books.find((b) => b.id === id), [id]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]);
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
          src={book.cover_page}
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

        {/* Secciones dinámicas */}
        {book.sections && book.sections.length > 0 ? (
          book.sections.map((section, index) => {
            if (section.type === "text") {
              return (
                <TextSection
                  key={index}
                  title={section.title}
                  content={section.content}
                  index={index}
                />
              );
            } else if (section.type === "gallery") {
              return (
                <GallerySection
                  key={index}
                  title={section.title}
                  content={section.content}
                  index={index}
                  bookTitle={book.title}
                />
              );
            }
            return null;
          })
        ) : (
          <>
            {/* Galería legacy (si no hay secciones) */}
            {book.gallery && book.gallery.length > 0 && (
              <GallerySection
                title="Galería"
                content={book.gallery}
                index={0}
                bookTitle={book.title}
              />
            )}

            {/* Autor legacy (si no hay secciones) */}
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
          </>
        )}
      </main>

      <Footer />
    </div>
  );
}
