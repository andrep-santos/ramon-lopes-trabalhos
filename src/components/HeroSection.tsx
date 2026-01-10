import { Paintbrush, Sparkles } from "lucide-react";

const HeroSection = () => {
  const scrollToGallery = () => {
    const element = document.querySelector("#galeria");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center gradient-bg pt-20 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* O Pincel com Brilho - Centralizado e Inclinado */}
          <div className="flex justify-center mb-8 animate-fade-in">
            <div className="relative inline-block">
              <Paintbrush 
                className="w-24 h-24 md:w-32 md:h-32 text-primary rotate-[15deg] transition-transform hover:rotate-[0deg] duration-300" 
                strokeWidth={1.5}
              />
              <Sparkles 
                className="w-8 h-8 text-yellow-400 absolute -top-2 -right-2 animate-pulse" 
              />
            </div>
          </div>

          {/* Nome com Gradiente Fiel */}
          <h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-in tracking-tight"
            style={{ animationDelay: "0.1s" }}
          >
            <span className="text-gradient">Ramon Lopes</span>
          </h1>

          <p
            className="text-2xl md:text-4xl font-light text-foreground/90 mb-6 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            Pintor e Manutenção Geral
          </p>

          <p
            className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto animate-fade-in leading-relaxed"
            style={{ animationDelay: "0.3s" }}
          >
            Fazendo projetos incriveis para melhorar sua infraestrutura.
          </p>

          {/* Botão Laranja Redondo */}
          <div
            className="animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            <button
              onClick={scrollToGallery}
              className="bg-primary text-white px-10 py-4 rounded-full text-xl font-bold hover:bg-primary/90 transition-all hover:scale-105 shadow-xl hover:shadow-orange-500/20"
            >
              Ver Trabalhos
            </button>
          </div>
        </div>
      </div>

      {/* Luzes de fundo para o efeito Gradient-BG */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-[-10%] w-[50%] h-[50%] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-[-10%] w-[50%] h-[50%] bg-secondary/5 rounded-full blur-[120px]" />
      </div>
    </section>
  );
};

export default HeroSection;