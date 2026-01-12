import { useState } from "react";
import { Eye, X } from "lucide-react";

// 1. Importações das novas fotos com a extensão .jpeg correta
import corredorBranco from "@/assets/corredor-branco.jpeg";
import escritorioTeto from "@/assets/Escritorio-02-teto.jpeg";
import fotoEscritorio from "@/assets/foto-escritório.jpeg";
import paredesBrancas from "@/assets/foto-paredes-brancas.jpeg";

// 2. Importações das fotos anteriores
import galleryPilar from "@/assets/gallery-pilar.png";
import galleryRepintura from "@/assets/gallery-repintura.png";
import galleryPinturaInterna from "@/assets/gallery-pintura-interna.png";
import galleryFachada from "@/assets/gallery-fachada.png";

export interface GalleryItem {
  id: number;
  title: string;
  description: string;
  story: string;
  image: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: "Corredor e Acabamento",
    description: "Pintura impecável em áreas de circulação",
    story: "Neste corredor curvo, focamos na uniformidade da pintura branca para valorizar o design arquitetônico e o piso em mármore, criando um ambiente amplo e limpo.",
    image: corredorBranco,
  },
  {
    id: 2,
    title: "Escritório - Detalhe Teto",
    description: "Pintura técnica em gesso e sancas",
    story: "Acabamento de alto padrão realizado em teto de escritório, com recortes perfeitos ao redor de luminárias lineares e ar-condicionado central.",
    image: escritorioTeto,
  },
  {
    id: 3,
    title: "Escritório Corporativo",
    description: "Renovação completa de ambiente de trabalho",
    story: "Transformação de sala de reuniões com pintura acetinada, garantindo um ambiente profissional renovado com agilidade e limpeza pós-obra.",
    image: fotoEscritorio,
  },
  {
    id: 4,
    title: "Paredes Brancas Premium",
    description: "Trabalho de massa e pintura acetinada",
    story: "Aplicação detalhada de massa corrida e pintura em paredes de pé direito alto, resultando em superfícies lisas e sem imperfeições sob iluminação direta.",
    image: paredesBrancas,
  },
  // Fotos anteriores
  {
    id: 5,
    title: "Pintura de Pilar - Restaurante",
    description: "Pintura de pilar interno",
    story: "Este trabalho de pintura em pilar foi realizado em um restaurante, garantindo um acabamento liso e uniforme para compor a decoração do ambiente.",
    image: galleryPilar,
  },
  {
    id: 6,
    title: "Repintura de Mural Artístico",
    description: "Revitalização de arte em parede",
    story: "Neste projeto, revitalizamos as cores de um desenho existente, mantendo a identidade visual original com um novo acabamento de alta qualidade.",
    image: galleryRepintura,
  },
  {
    id: 7,
    title: "Pintura Interna Comercial",
    description: "Acabamento interno premium",
    story: "Um projeto focado em precisão nos detalhes e cantos, transformando o ambiente comercial com cores modernas e aplicação impecável.",
    image: galleryPinturaInterna,
  },
  {
    id: 8,
    title: "Fachada Restaurante Mezzogiorno",
    description: "Pintura externa durável",
    story: "Pintura completa da fachada externa, utilizando tintas resistentes para garantir a beleza e proteção da estrutura contra o tempo.",
    image: galleryFachada,
  },
];

const GallerySection = () => {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  return (
    <section id="galeria" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
             <span className="text-gradient">Minha Galeria</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
             Confira alguns dos meus trabalhos mais recentes. Clique para conhecer os detalhes de cada projeto.
          </p>
        </div>

        {/* Responsividade mobile: 1 coluna no celular, 2 no tablet e 4 no PC */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {galleryItems.map((item, index) => (
            <div
              key={item.id}
              className="group relative aspect-[3/4] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div>
                  <h3 className="text-white text-xl font-bold mb-2">{item.title}</h3>
                  <button
                    onClick={() => setSelectedItem(item)}
                    className="flex items-center gap-2 bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-orange-600 transition-colors"
                  >
                    <Eye size={16} />
                    Ver detalhes
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal de Visualização */}
      {selectedItem && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm" onClick={() => setSelectedItem(null)}>
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-auto relative" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 z-10 p-2 bg-white rounded-full shadow-lg hover:bg-gray-100"
            >
              <X size={24} className="text-black" />
            </button>
            <img src={selectedItem.image} alt={selectedItem.title} className="w-full h-64 md:h-96 object-cover" />
            <div className="p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-2 text-gradient">{selectedItem.title}</h2>
              <p className="text-lg text-muted-foreground mb-6">{selectedItem.description}</p>
              <div className="border-t border-gray-100 pt-6">
                <h3 className="text-lg font-semibold mb-3">Sobre este projeto</h3>
                <p className="text-gray-600 leading-relaxed">{selectedItem.story}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;