import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Sparkles, Rocket, PenTool, ArrowUp, HelpCircle  } from 'lucide-react';
import Navbar from './components/layout/Navbar';
function App() {
  const stars = Array.from({
    length: 100
  }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    // Y position is now relative to the container height
    size: Math.random() * 2.5 + 1,
    delay: Math.random() * 2,
    duration: Math.random() * 3 + 3
  }));
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return <>
      <Helmet>
        <title>Te quiero hasta Plutón</title>
        <meta name="description" content="Descubre 'Te quiero hasta Plutón', un libro mágico para niños sobre el amor infinito y los sueños espaciales. Por Valentina Punte." />
      </Helmet>
      
      <div className="relative overflow-x-hidden bg-gradient-to-br from-[#1a1464] via-[#332b7c] to-[#1d1b4e]">
        {/* Animated stars background */}
        <div className="absolute inset-0 z-0">
          {stars.map(star => <motion.div key={star.id} className="absolute rounded-full bg-yellow-300" style={{
          left: `${star.x}%`,
          top: `${star.y}%`,
          width: `${star.size}px`,
          height: `${star.size}px`
        }} initial={{
          opacity: 0,
          scale: 0
        }} animate={{
          opacity: [0, 1, 0.8, 1, 0.5, 1],
          scale: [0, 1, 1.2, 1]
        }} transition={{
          duration: star.duration,
          delay: star.delay,
          repeat: Infinity,
          repeatType: "mirror"
        }} />)}
        </div>

        <Navbar />

        <main className="relative z-10">
          {/* Hero Section */}
          <section id="inicio" className="min-h-screen flex flex-col items-center justify-between py-12 px-4 pt-[150px] md:pt-12">
            <div className="flex flex-col items-center justify-center flex-1 max-w-6xl w-full">
              <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
                {/* Left side - Book cover and child illustration */}
                <motion.div initial={{
                opacity: 0,
                x: -50
              }} animate={{
                opacity: 1,
                x: 0
              }} transition={{  
                duration: 0.8,
                delay: 0.3
              }} className="flex flex-col items-center gap-8">
                  <div className="relative">
                    <motion.div animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.5, 0.3]
                  }} transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }} className="absolute inset-0 bg-yellow-300 blur-3xl rounded-full" />
                    <img src="/src/img/canopusdibujo.jpeg" alt="Portada del libro Te quiero hasta Plutón mostrando un niño mirando al espacio" className="relative z-10 rounded-2xl shadow-2xl max-w-md w-full transform hover:scale-105 transition-transform duration-300" />
                  </div>
                  <motion.div animate={{
                  y: [0, -10, 0]
                }} transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse"
                }} className="flex items-center gap-4">
                    <img alt="Niño mirando las estrellas con asombro" className="w-24 h-24 rounded-full border-4 border-yellow-300 shadow-lg object-cover" src="https://images.unsplash.com/photo-1497676127630-9c3b0e392740" />
                    <div className="flex gap-1">
                      {[...Array(3)].map((_, i) => <motion.div key={i} animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.5, 1, 0.5]
                    }} transition={{
                      duration: 1.5,
                      delay: i * 0.3,
                      repeat: Infinity
                    }} className="w-2 h-2 bg-yellow-300 rounded-full" />)}
                    </div>
                  </motion.div>
                </motion.div>

                {/* Right side - Title and Pluto */}
                <motion.div initial={{
                opacity: 0,
                x: 50
              }} animate={{
                opacity: 1,
                x: 0
              }} transition={{
                duration: 0.8,
                delay: 0.5
              }} className="flex flex-col items-center lg:items-start gap-8">
                  <div className="text-center lg:text-left">
                    <motion.h1 className="text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-amber-500 to-red-500" animate={{
                    textShadow: ['0 0 20px rgba(251, 191, 36, 0.5)', '0 0 40px rgba(251, 191, 36, 0.8)', '0 0 20px rgba(251, 191, 36, 0.5)']
                  }} transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}>
                      Te quiero
                    </motion.h1>
                    <motion.h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-amber-500 to-red-500" animate={{
                    textShadow: ['0 0 20px rgba(251, 191, 36, 0.5)', '0 0 40px rgba(251, 191, 36, 0.8)', '0 0 20px rgba(251, 191, 36, 0.5)']
                  }} transition={{
                    duration: 2,
                    delay: 0.5,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}>
                      hasta Plutón
                    </motion.h1>
                  </div>
                  <div className="relative w-64 h-64">
                    <motion.div animate={{
                    rotate: 360
                  }} transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                  }} className="absolute inset-0">
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full border-2 border-dashed border-yellow-300/30 rounded-full" />
                    </motion.div>
                    <motion.div animate={{
                    rotate: [0, 360]
                  }} transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                  }} className="absolute inset-0">
                      <img alt="Plutón, el planeta enano con su característica forma de corazón" className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 rounded-full shadow-2xl object-cover" src="https://images.unsplash.com/photo-1614314107768-6018061b5b72" />
                    </motion.div>
                    <motion.div animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3]
                  }} transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-yellow-300 blur-2xl rounded-full" />
                  </div>
                  <motion.p initial={{
                  opacity: 0
                }} animate={{
                  opacity: 1
                }} transition={{
                  delay: 1
                }} className="text-xl md:text-2xl text-yellow-100 text-center lg:text-left italic">
                    Un viaje mágico por el universo del amor infinito
                  </motion.p>
                </motion.div>
              </div>
            </div>
          </section>

          {/* La Historia Section */}
          <section id="historia" className="py-20 px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.h2 initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.6
            }} className="text-4xl md:text-5xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-amber-400">
                La Historia Detrás de las Estrellas
              </motion.h2>
              <motion.div initial={{
              opacity: 0,
              scale: 0.9
            }} animate={{
              opacity: 1,
              scale: 1
            }} transition={{
              duration: 0.8,
              delay: 0.2
            }} className="relative bg-white/5 backdrop-blur-sm border border-yellow-300/20 rounded-2xl p-8 md:p-12 shadow-2xl">
                <div className="absolute -top-6 -left-6 text-yellow-300/50">
                  <Sparkles size={48} />
                </div>
                <div className="absolute -bottom-8 -right-8 text-yellow-300/50">
                   <motion.div animate={{
                  rotate: -45,
                  x: [0, 10, 0]
                }} transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "mirror"
                }}>
                    <Rocket size={64} />
                  </motion.div>
                </div>
                <PenTool className="mx-auto mb-6 text-yellow-300" size={40} />
                <h3 className="text-2xl font-semibold text-white mb-4">Los Sueños de Teo</h3>
                <p className="text-lg text-indigo-200 leading-relaxed">Es un libro infantil que trata sobre un niño llamado Teo que teme dormir solo, pero su imaginación lo lleva a un viaje a Plutón. Es una historia sobre cómo los sueños pueden transformar el miedo y lo cotidiano.</p>
              </motion.div>
            </div>
          </section>

          {/* La Historia Section */}
          <section id="historia" className="py-20 px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.h2 initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.6
            }} className="text-4xl md:text-5xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-amber-400">
                
              </motion.h2>
              <motion.div initial={{
              opacity: 0,
              scale: 0.9
            }} animate={{
              opacity: 1,
              scale: 1
            }} transition={{
              duration: 0.8,
              delay: 0.2
            }} className="relative bg-white/5 backdrop-blur-sm border border-yellow-300/20 rounded-2xl p-8 md:p-12 shadow-2xl">
                <div className="absolute -top-6 -left-6 text-yellow-300/50">
                <Rocket size={64} />
                </div>
                <div className="absolute -bottom-8 -right-8 text-yellow-300/50">
                   <motion.div animate={{
                     rotate: -45,
                     x: [0, 10, 0]
                    }} transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatType: "mirror"
                    }}>
                  <Sparkles size={48} />
                  </motion.div>
                </div>
                <HelpCircle className="mx-auto mb-6 text-yellow-300" size={40} />
                <h3 className="text-2xl font-semibold text-white mb-4">Shh!</h3>
                <p className="text-lg text-indigo-200 leading-relaxed">Proximamente...</p>
              </motion.div>
            </div>
          </section>

          <section id="imagenes" className="py-20">
             <div className="flex flex-wrap justify-center gap-8 flex-row">
                <img src="/src/img/valenlibro.jpeg" className="relative z-10 rounded-2xl shadow-2xl max-w-md w-full transform hover:scale-105 transition-transform duration-300" alt="" />
                <img src="/src/img/libro.jpeg" className="relative z-10 rounded-2xl shadow-2xl max-w-md w-full transform hover:scale-105 transition-transform duration-300" alt="" />
                <img src="/src/img/canoppus.jpeg" className="relative z-10 rounded-2xl shadow-2xl max-w-md w-full transform hover:scale-105 transition-transform duration-300" alt="" />
             </div>
          </section>
          
          {/* Placeholder for Comprar Section */}
          <section id="comprar" className="py-20">
             <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">¿Listo para el viaje?</h2>
                 <p className="text-xl text-indigo-200 mb-8">La sección de compra estará disponible pronto.</p>
             </div>
          </section>

          {/* Footer */}
          <motion.footer initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.5
        }} className="text-center py-12 px-4 bg-indigo-950/70 backdrop-blur-sm text-white border-t border-yellow-300/20">
            <div className="flex flex-col items-center gap-4 max-w-4xl mx-auto">
              <span className="text-yellow-300 text-sm uppercase tracking-wider">Autora</span>
              <span className="text-3xl md:text-4xl font-bold text-white">
                Valentina Punte
              </span>
              <div className="flex gap-2 mt-2">
                <motion.div animate={{
                rotate: [0, 360]
              }} transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear"
              }}>
                  <Sparkles className="text-yellow-300" size={20} />
                </motion.div>
                <motion.div animate={{
                rotate: [360, 0]
              }} transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear"
              }}>
                  <Sparkles className="text-yellow-300" size={20} />
                </motion.div>
              </div>
              <p className="text-sm text-indigo-200 mt-4">
                © {new Date().getFullYear()} Valentina Punte - Todos los derechos reservados - Web: Juan Ignacio Punte
              </p>
              <motion.button onClick={scrollToTop} whileHover={{
              scale: 1.05,
              boxShadow: "0 0 15px rgba(251, 191, 36, 0.7)"
            }} whileTap={{
              scale: 0.95
            }} className="mt-6 px-6 py-3 bg-yellow-400 text-indigo-900 font-semibold rounded-full shadow-lg flex items-center gap-2 hover:bg-yellow-300 transition-all duration-300">
                <ArrowUp size={20} />
                Volver arriba
              </motion.button>
            </div>
          </motion.footer>
        </main>

        {/* Floating decorative elements */}
        <motion.div animate={{
        y: [0, -30, 0],
        x: [0, 15, 0]
      }} transition={{
        duration: 5,
        repeat: Infinity,
        repeatType: "reverse"
      }} className="absolute top-20 right-10 hidden md:block">
          <img alt="Planeta pequeño decorativo flotando en el espacio" className="w-16 h-16 rounded-full opacity-70 object-cover" src="https://images.unsplash.com/photo-1701690774955-7d06cfd3f857" />
        </motion.div>

        <motion.div animate={{
        y: [0, 40, 0],
        x: [0, -20, 0]
      }} transition={{
        duration: 6,
        repeat: Infinity,
        repeatType: "reverse"
      }} className="absolute bottom-1/4 left-10 hidden md:block">
          <img alt="Luna brillante con cráteres" className="w-20 h-20 rounded-full opacity-60 object-cover" src="https://images.unsplash.com/photo-1678476164575-7c60063a0757" />
        </motion.div>
      </div>
    </>;
}
export default App;