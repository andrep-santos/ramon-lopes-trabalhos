import { useState } from "react";
import { Eye, ImageIcon, X } from "lucide-react";

// Importações reais das suas fotos
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
    title: "Pintura de Pilar - Restaurante",
    description: "Pintura de pilar interno",
    story: "Este trabalho de pintura em pilar foi realizado em um restaurante, garantindo um acabamento liso e uniforme para compor a decoração do ambiente.",
    image: galleryPilar,
  },
  {
    id: 2,
    title: "Repintura de Mural Artístico",
    description: "Revitalização de arte em parede",
    story: "Neste projeto, revitalizamos as cores de um desenho existente, mantendo a identidade visual original com um novo acabamento de alta qualidade.",
    image: galleryRepintura,
  },
  {
    id: 3,
    title: "Pintura Interna Comercial",
    description: "Acabamento interno premium",
    story: "Um projeto focado em precisão nos detalhes e cantos, transformando o ambiente comercial com cores modernas e aplicação impecável.",
    image: galleryPinturaInterna,
  },
  {
    id: 4,
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
            Confira alguns dos meus trabalhos. Clique em "Ver mais" para conhecer a história por trás de cada obra.
          </p>
        </div>

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
                    className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium hover:bg-primary/90 transition-colors"
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

      {/* Modal Simplificado (Sem depender de bibliotecas externas) */}
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
                <h3 className="text-lg font-semibold mb-3">A História por Trás da Obra</h3>
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