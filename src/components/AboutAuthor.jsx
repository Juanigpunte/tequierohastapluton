import React from "react";

export default function AboutAuthor() {
  return (
    <section
      id="biografia"
      className="py-24 px-6 text-white flex flex-col items-center"
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-amber-400">
        Sobre Mi 💫
      </h2>

      <div className="flex flex-col md:flex-row items-center gap-10 max-w-4xl w-full">
        
        {/* FOTO */}
        <div className="flex-shrink-0">
          <img
            src="/autor.jpg"   
            alt="Autora"
            className="w-48 h-48 object-cover rounded-full shadow-lg border-4 border-white/30"
          />
        </div>

        {/* BIO */}
        <div className="text-center md:text-left space-y-4">
          <p className="text-lg opacity-90">
            Aquí irá la biografía real de la autora. Podés contar su trayectoria,
            inspiración, cómo nació el universo de “Te quiero hasta Plutón”, y el
            mundo de sueños que desarrolla en sus libros.
          </p>

          <p className="text-lg opacity-90">
            También podés agregar premios, proyectos futuros o una frase personal
            que encaje con la estética infantil y espacial.
          </p>
        </div>

      </div>
    </section>
  );
}
