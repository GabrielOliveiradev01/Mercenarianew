import React from 'react';
import { Home, Bed, Utensils, Sofa, Briefcase, TreePine } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Home className="w-10 h-10" />,
      title: "Salas Planejadas",
      description: "Transforme suas salas com móveis sob medida, iluminação inteligente e acabamentos premium que criam ambientes únicos e funcionais.",
      features: ["Móveis personalizados", "Iluminação inteligente", "Acabamentos premium", "Design exclusivo"]
    },
    {
      icon: <Bed className="w-10 h-10" />,
      title: "Salas de Descanso",
      description: "Crie espaços de relaxamento com móveis sob medida, organizadores especiais e acabamentos que promovem bem-estar e conforto.",
      features: ["Móveis sob medida", "Organizadores especiais", "Acabamentos confortáveis", "Design relaxante"]
    },
    {
      icon: <Utensils className="w-10 h-10" />,
      title: "Salas de Jantar",
      description: "Transforme sua sala de jantar com móveis planejados, organizadores inteligentes e máximo aproveitamento de espaço.",
      features: ["Móveis planejados", "Organizadores inteligentes", "Máximo aproveitamento", "Design funcional"]
    },
    {
      icon: <Sofa className="w-10 h-10" />,
      title: "Salas de Estar",
      description: "Ambientes de convívio únicos com móveis que combinam conforto, estilo e funcionalidade para toda a família.",
      features: ["Racks personalizados", "Estantes modulares", "Painéis decorativos", "Integração tecnológica"]
    },
    {
      icon: <Briefcase className="w-10 h-10" />,
      title: "Escritórios Produtivos",
      description: "Ambientes de trabalho inspiradores com móveis ergonômicos e soluções práticas para aumentar sua produtividade.",
      features: ["Design ergonômico", "Gestão de cabos", "Armazenamento inteligente", "Ambiente produtivo"]
    },
    {
      icon: <TreePine className="w-10 h-10" />,
      title: "Salas",
      description: "Móveis planejados para todos os tipos de salas, com design exclusivo e soluções personalizadas para cada ambiente.",
      features: ["Design personalizado", "Soluções exclusivas", "Máxima funcionalidade", "Estilo único"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-['Playfair_Display'] mb-4">
            <span className="text-white">Nossos</span>{' '}
            <span className="text-yellow-500">Serviços</span>
          </h2>
          <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Especializados em móveis planejados para todos os ambientes da sua casa, 
            com design exclusivo e qualidade incomparável
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-gray-900/50 backdrop-blur-sm p-8 rounded-xl hover:bg-gray-800/70 transition-all duration-300 border border-gray-800 hover:border-yellow-500/30 hover:shadow-xl hover:shadow-yellow-500/10"
            >
              {/* Icon */}
              <div className="text-yellow-500 mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>

              {/* Content */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-white font-['Playfair_Display'] group-hover:text-yellow-500 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-400 leading-relaxed">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-2 pt-4">
                  {service.features.map((feature, featureIndex) => (
                    <li 
                      key={featureIndex}
                      className="flex items-center text-sm text-gray-300"
                    >
                      <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-yellow-500/10 to-yellow-500/5 border border-yellow-500/20 rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4 font-['Playfair_Display']">
              Pronto para transformar seus ambientes?
            </h3>
            <p className="text-gray-300 mb-6">
              Entre em contato conosco e descubra como podemos criar móveis únicos para o seu espaço
            </p>
            <button 
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-8 py-3 rounded-lg transition-colors duration-300"
            >
              Solicitar Orçamento
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;