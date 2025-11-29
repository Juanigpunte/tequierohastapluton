import BookCard from "./BookCard";
import { books } from "../data/books";

export default function BooksSection() {
  return (
    <section className="py-20 px-6">
      <h2 className="text-4xl font-bold text-white text-center mb-12">
        Nuestros Libros
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </section>
  );
}
