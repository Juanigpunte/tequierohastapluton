import { useNavigate } from "react-router-dom";
import BookCard from "./BookCard";
import { books } from "../data/books";
import React from "react";
import { Link } from "react-router-dom";

export default function BooksSection() {
  const navigate = useNavigate();

 return (
    <section id="libros" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        
        {/* Título */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 
                       bg-clip-text text-transparent bg-gradient-to-r 
                       from-yellow-300 to-amber-400">
          Mis Libros 
        </h2>

        {/* GRID DE LIBROS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {books.map((book) => (
            <Link
              key={book.id}
              to={`/book/${book.id}`}
              className="group block bg-white/10 backdrop-blur-md border border-white/10 
                         rounded-2xl p-5 shadow-xl hover:shadow-2xl transition 
                         hover:-translate-y-2"
            >
              {/* Imagen */}
              <div className="overflow-hidden rounded-xl">
                <img
                  src={book.cover}
                  alt={book.title}
                  className="w-full h-64 object-cover rounded-xl 
                             group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Título */}
              <h3 className="text-2xl font-semibold text-white mt-4 mb-2">
                {book.title}
              </h3>

              {/* Descripción corta */}
              <p className="text-indigo-200 text-sm leading-relaxed">
                {book.description.substring(0, 90)}...
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
