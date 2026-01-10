import { X, ImageIcon } from "lucide-react";
import { GalleryItem } from "./GallerySection";

interface GalleryModalProps {
  item: GalleryItem | null;
  isOpen: boolean;
  onClose: () => void;
}

const GalleryModal = ({ item, isOpen, onClose }: GalleryModalProps) => {
  if (!isOpen || !item) return null;

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="bg-background rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Botão de Fechar */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-background/80 backdrop-blur-sm hover:bg-accent hover:text-white transition-all shadow-md"
          aria-label="Fechar"
        >
          <X size={24} />
        </button>

        {/* Área da Imagem */}
        <div className="relative aspect-video w-full bg-muted">
          {item.image ? (
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-center p-8">
                <ImageIcon className="w-16 h-16 text-muted-foreground/50 mx-auto mb-4" />
                <p className="text-muted-foreground">
                  Imagem da obra será adicionada aqui
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Conteúdo de Texto */}
        <div className="p-6 md:p-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-gradient">
            {item.title}
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            {item.description}
          </p>

          <div className="border-t border-border pt-8">
            <h3 className="text-xl font-semibold mb-4 text-foreground flex items-center gap-2">
              <span className="w-2 h-8 bg-primary rounded-full inline-block"></span>
              A História por Trás da Obra
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed italic">
              "{item.story}"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryModal;