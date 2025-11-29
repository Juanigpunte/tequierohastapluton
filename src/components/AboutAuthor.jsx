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
            className="w-56 h-56 object-cover rounded-full shadow-lg border-4 border-white/30"
          />
        </div>

        {/* BIO */}
        <div className="text-center md:text-left space-y-4">
          <p className="text-lg opacity-90">
            Nací en San Antonio de Areco, provincia de Buenos Aires, Argentina, un 25 de marzo de 1999. Soy profesora de Nivel Inicial y desde muy chica me gustó escribir, muchas veces me fue más fácil escribir que hablar. Había algo en la escritura que me atrapaba; sabía cómo comenzaba, pero las letras a veces tomaban otros rumbos y siempre terminaban en algo más. Muchos de mis escritos me los guardo en secreto, quizás algunos esperan el momento de ser revelados... Él, Cristo, siempre me guía en cada paso, mi gran referente, y a la que le tomé prestada la lapicera es a mi abuela Emma, poeta amada de mi corazón. Que mis palabras las atrape el viento y te las lleven a esa nube donde estás vos. Gracias por este mapa que me dibujaste.
          </p>
        </div>

      </div>
    </section>
  );
}
