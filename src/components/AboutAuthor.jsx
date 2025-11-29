export default function AboutAuthor() {
  return (
    <section className="py-24 px-6 max-w-5xl mx-auto">
      <h2 className="text-4xl text-white font-bold text-center mb-10">
        Sobre la autora
      </h2>

      <div className="bg-white/10 border border-white/20 backdrop-blur-sm rounded-3xl p-10 shadow-lg">
        <div className="flex flex-col md:flex-row items-center gap-10">
          
          <img
            src="/img/autora.jpg" // reemplazar
            alt="Autora"
            className="w-40 h-40 rounded-full shadow-xl object-cover"
          />

          <p className="text-white/90 text-lg leading-relaxed">
            Texto de ejemplo de la biografía. Podés editarlo después en 
            <b>AboutAuthor.jsx</b>.
          </p>
        </div>
      </div>
    </section>
  );
}
