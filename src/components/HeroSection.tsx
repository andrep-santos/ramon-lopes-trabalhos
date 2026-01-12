import { Paintbrush, Sparkles } from "lucide-react";

const HeroSection = () => {
  const scrollToGallery = () => {
    const element = document.querySelector("#galeria");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-[100dvh] flex items-center justify-center bg-[#f8fafc] pt-10 relative overflow-hidden">
      <div className="container mx-auto px-6 text-center relative z-10">
        
        {/* Ícone menor no mobile para não empurrar o texto */}
        <div className="flex justify-center mb-6 animate-fade-in">
          <div className="relative inline-block">
            <Paintbrush className="w-16 h-16 md:w-28 md:h-28 text-orange-500 rotate-[15deg]" strokeWidth={1.5} />
            <Sparkles className="w-6 h-6 text-yellow-400 absolute -top-1 -right-1 animate-pulse" />
          </div>
        </div>

        {/* Título com fonte dinâmica: menor no mobile, gigante no PC */}
        <h1 className="text-4xl md:text-8xl font-bold mb-4 animate-fade-in tracking-tight">
          <span className="text-gradient">Ramon Lopes</span>
        </h1>

        <p className="text-xl md:text-4xl text-gray-700 mb-4 animate-fade-in font-medium">
          Manutenção e Acabamentos
        </p>

        {/* Texto de apoio com largura controlada no mobile */}
        <p className="text-base md:text-xl text-gray-500 mb-8 max-w-[280px] md:max-w-2xl mx-auto animate-fade-in leading-relaxed">
          Soluções completas para transformar e valorizar o seu imóvel com perfeccionismo.
        </p>

        <div className="animate-fade-in">
          <button 
            onClick={scrollToGallery} 
            className="w-full md:w-auto bg-orange-500 text-white px-10 py-4 rounded-full text-lg font-bold active:scale-95 transition-all shadow-lg"
          >
            Ver Meus Trabalhos
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;