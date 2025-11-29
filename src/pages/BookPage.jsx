import { useParams } from "react-router-dom";
import { books } from "../data/books";

export default function BookPage() {
  const { id } = useParams();
  const book = books.find((b) => b.id === id);

  if (!book) {
    return (
      <div className="min-h-screen text-white flex items-center justify-center">
        <h1 className="text-3xl font-bold">Libro no encontrado</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen px-6 py-24 text-white">
      <h1 className="text-4xl md:text-6xl font-bold text-center mb-12">
        {book.title}
      </h1>

      <img
        src={book.cover}
        className="w-full max-w-md mx-auto rounded-3xl shadow-2xl mb-10"
        alt={book.title}
      />

      <p className="max-w-2xl mx-auto text-lg text-white/90 text-center leading-relaxed mb-16">
        {book.description}
      </p>

      <h2 className="text-3xl font-bold text-center mb-8">Galería</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {book.gallery.map((img, i) => (
          <img
            key={i}
            src={img}
            className="rounded-xl shadow-lg object-cover w-full h-60"
            alt="Imagen del libro"
          />
        ))}
      </div>
    </div>
  );
}
