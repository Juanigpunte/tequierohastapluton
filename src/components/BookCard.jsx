import { Link } from "react-router-dom";

export default function BookCard({ book }) {
  return (
    <div className="
      bg-white/10 
      border border-white/20 
      backdrop-blur-sm 
      p-4 
      rounded-2xl 
      shadow-lg
      hover:scale-[1.03]
      transition-all 
      duration-300
    ">
      <img
        src={book.cover}
        alt={book.title}
        className="rounded-xl w-full h-52 object-cover shadow-md mb-4"
      />

      <h3 className="text-white text-xl font-semibold mb-3 text-center">
        {book.title}
      </h3>

      <Link
        to={`/libros/${book.id}`}
        className="
          block 
          text-center 
          bg-gradient-to-r from-blue-500 to-purple-600 
          text-white 
          py-2 
          rounded-xl 
          font-medium
          shadow-md
          hover:opacity-90
          transition
        "
      >
        Ver más
      </Link>
    </div>
  );
}
