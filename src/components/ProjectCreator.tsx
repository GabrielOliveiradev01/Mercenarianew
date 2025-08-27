import React, { useState } from 'react';
import { Bot, Send, Lightbulb, Ruler, Palette } from 'lucide-react';

const ProjectCreator = () => {
  const [projectDescription, setProjectDescription] = useState('');
  const [phone, setPhone] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [suggestions, setSuggestions] = useState<string>('');

  const handleGenerateSuggestions = async () => {
    if (!projectDescription.trim() || !phone.trim()) {
      alert('Por favor, preencha a descrição do projeto e o número de telefone.');
      return;
    }

    setIsGenerating(true);
    
    // Simulação da integração com ChatGPT (substituir pela API real da OpenAI)
    setTimeout(async () => {
      const mockSuggestions = `Com base na sua descrição "${projectDescription}", aqui estão algumas sugestões personalizadas:

🏠 **Conceito de Design:**
• Estilo moderno minimalista com elementos em madeira natural
• Cores neutras (branco, cinza, madeira clara) com detalhes em dourado
• Acabamentos premium e linhas clean

📐 **Medidas Recomendadas:**
• Altura padrão dos armários: 2,10m
• Profundidade das prateleiras: 35-40cm
• Espaçamento entre prateleiras: 30-35cm

🎨 **Materiais Sugeridos:**
• MDF revestido em laminado melamínico branco
• Detalhes em madeira freijó ou carvalho
• Puxadores em metal dourado fosco
• Iluminação LED embutida

✨ **Funcionalidades Especiais:**
• Sistema de fechamento suave (soft close)
• Divisórias internas ajustáveis
• Espelhos com moldura integrada
• Tomadas e USB integrados`;

      setSuggestions(mockSuggestions);
      setIsGenerating(false);

      // Gerar imagem e enviar para WhatsApp automaticamente
      try {
        const response = await fetch('https://ia-n8n.xmmqwd.easypanel.host/webhook/whatsapp', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            prompt: `Sugestões geradas: ${mockSuggestions}\n\nTelefone: ${phone}`,
            whatsapp: phone
          })
        });

        if (response.ok) {
          alert('Sugestões geradas e enviadas com sucesso! Entraremos em contato em breve.');
          // Limpar formulário após sucesso
          setProjectDescription('');
          setPhone('');
          setSuggestions('');
        } else {
          throw new Error('Erro ao enviar solicitação');
        }
      } catch (error) {
        console.error('Erro:', error);
        alert('Sugestões geradas, mas houve erro ao enviar para WhatsApp. Tente novamente.');
      }
    }, 2000);
  };



  return (
    <section id="project-creator" className="py-20 bg-gradient-to-br from-gray-900 to-black">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-4">
            <span className="text-white">Crie Seu</span>{' '}
            <span className="text-yellow-500">Projeto</span>
          </h2>
          <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Comece com nosso Assistente de Design. Descreva sua ideia e receba sugestões personalizadas de design, medidas e layout para o seu projeto dos sonhos.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Input Section */}
          <div className="space-y-6">
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6">
              <div className="flex items-center space-x-3 mb-4">
                <h3 className="text-xl font-semibold text-white">Assistente de Designer</h3>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Número de Telefone *
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Receba seu projeto pelo WhatsApp"
                    className="w-full bg-gray-900/50 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Descreva seu projeto ideal:
                  </label>
                  <textarea
                    value={projectDescription}
                    onChange={(e) => setProjectDescription(e.target.value)}
                    placeholder="Ex: Quero uma sala moderna com móveis sob medida, iluminação inteligente e detalhes em madeira. O espaço tem 4x3 metros..."
                    className="w-full h-32 bg-gray-900/50 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 resize-none"
                  />
                </div>
                
                <div className="flex flex-col gap-3">
                  <button
                    onClick={handleGenerateSuggestions}
                    disabled={!projectDescription.trim() || !phone.trim() || isGenerating}
                    className="w-full bg-yellow-500 hover:bg-yellow-400 disabled:bg-gray-600 disabled:cursor-not-allowed text-black font-semibold px-6 py-3 rounded-lg transition-colors duration-300 flex items-center justify-center space-x-2"
                  >
                    {isGenerating ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-2 border-black border-t-transparent"></div>
                        <span>Gerando Projeto...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Gerar Projeto</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gray-800/30 p-4 rounded-lg text-center">
                <Lightbulb className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
                <h4 className="text-white font-semibold">Ideias Criativas</h4>
                <p className="text-gray-400 text-sm">Sugestões inovadoras</p>
              </div>
              <div className="bg-gray-800/30 p-4 rounded-lg text-center">
                <Ruler className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
                <h4 className="text-white font-semibold">Medidas Precisas</h4>
                <p className="text-gray-400 text-sm">Dimensões otimizadas</p>
              </div>
              <div className="bg-gray-800/30 p-4 rounded-lg text-center">
                <Palette className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
                <h4 className="text-white font-semibold">Paleta de Cores</h4>
                <p className="text-gray-400 text-sm">Harmonias perfeitas</p>
              </div>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mt-8 p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
            <p className="text-yellow-200 text-sm text-center">
              <strong>Nota:</strong> Este é um assistente virtual para inspiração inicial. 
              Para projetos definitivos, nossa equipe realizará medições e consultoria técnica presencial.
            </p>
          </div>
        </div>


      </div>
    </section>
  );
};

export default ProjectCreator;