import React, { useState } from 'react';
import { Eye, ArrowLeft, ArrowRight, Sparkles } from 'lucide-react';

const Portfolio = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const portfolioItems = [
    {
      id: 1,
      title: "Sala de Estar Elegante",
      category: "Sala de Estar",
      image: "/Mercenaria Imagens/sala de estar.jpeg"
    },
    {
      id: 2,
      title: "Quarto Confortável",
      category: "Quarto",
      image: "/Mercenaria Imagens/Quarto.jpeg"
    },
    {
      id: 3,
      title: "Cozinha Funcional",
      category: "Cozinha",
      image: "/Mercenaria Imagens/cozinha.jpeg"
    },
    {
      id: 4,
      title: "Escritório Profissional",
      category: "Escritório",
      image: "/Mercenaria Imagens/Escritorio.jpeg"
    },
    {
      id: 5,
      title: "Banheiro Moderno",
      category: "Banheiro",
      image: "/Mercenaria Imagens/banheiro.jpeg"
    }
  ];

  const openLightbox = (image: string, index: number) => {
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % portfolioItems.length;
    setCurrentIndex(nextIndex);
    setSelectedImage(portfolioItems[nextIndex].image);
  };

  const prevImage = () => {
    const prevIndex = (currentIndex - 1 + portfolioItems.length) % portfolioItems.length;
    setCurrentIndex(prevIndex);
    setSelectedImage(portfolioItems[prevIndex].image);
  };

  return (
    <section id="portfolio" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-4">
            <span className="text-white">Nosso</span>{' '}
            <span className="text-yellow-500">Portfólio</span>
          </h2>
          <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Cada projeto é uma obra de arte única, criada com paixão e precisão para transformar seus ambientes
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <div 
              key={item.id}
              className="group relative overflow-hidden rounded-lg bg-gray-800 shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer"
              onClick={() => openLightbox(item.image, index)}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center text-white">
                  <Eye className="w-8 h-8 mx-auto mb-2 text-yellow-500" />
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-sm text-gray-300">{item.category}</p>
                </div>
              </div>

              {/* Category Badge */}
              <div className="absolute top-4 left-4 bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-medium">
                {item.category}
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={closeLightbox}>
            <div className="relative max-w-4xl max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
              <img 
                src={selectedImage}
                alt="Portfolio Item"
                className="max-w-full max-h-full object-contain rounded-lg"
              />
              
              {/* Navigation */}
              <button 
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors"
              >
                <ArrowLeft className="w-6 h-6" />
              </button>
              
              <button 
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors"
              >
                <ArrowRight className="w-6 h-6" />
              </button>
              
              {/* Close Button */}
              <button 
                onClick={closeLightbox}
                className="absolute -top-10 right-0 text-white hover:text-yellow-500 transition-colors"
              >
                <span className="text-2xl">✕</span>
              </button>
            </div>
          </div>
        )}

        {/* Crie seu projeto Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 rounded-2xl p-12 backdrop-blur-sm">
            <div className="mb-6">
              <div className="w-16 h-16 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-yellow-500" />
              </div>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold font-poppins mb-4">
              <span className="text-white">Inspirado pelo nosso</span>{' '}
              <span className="text-yellow-500">portfólio</span>?
            </h3>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
              Transforme sua visão em realidade! Use nosso assistente de design IA para criar 
              o projeto dos seus sonhos com sugestões personalizadas.
            </p>
            <button
              onClick={() => {
                const element = document.getElementById('project-creator');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 mx-auto"
            >
              <Sparkles className="w-5 h-5" />
              <span>Crie Seu Projeto Agora</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;