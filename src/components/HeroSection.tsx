import { Paintbrush, Sparkles } from "lucide-react";

const HeroSection = () => {
  const scrollToGallery = () => {
    const element = document.querySelector("#galeria");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-[#f8fafc] pt-20 relative overflow-hidden">
      {/* Efeito de luzes no fundo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[-5%] w-[40%] h-[40%] bg-orange-200/30 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute top-[20%] right-[-5%] w-[50%] h-[50%] bg-blue-100/40 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 py-16 text-center relative z-10">
        <div className="flex justify-center mb-8 animate-fade-in">
          <div className="relative inline-block">
            <Paintbrush className="w-24 h-24 md:w-28 md:h-28 text-orange-500 rotate-[15deg]" strokeWidth={1.5} />
            <Sparkles className="w-8 h-8 text-yellow-400 absolute -top-2 -right-2 animate-pulse" />
          </div>
        </div>

        <h1 className="text-6xl md:text-8xl font-bold mb-4 animate-fade-in tracking-tight">
          <span className="text-gradient">Ramon Lopes</span>
        </h1>

        <p className="text-2xl md:text-4xl text-gray-700 mb-4 animate-fade-in font-medium">
          Manutenção e Acabamentos
        </p>

        <p className="text-lg md:text-xl text-gray-500 mb-10 max-w-2xl mx-auto animate-fade-in leading-relaxed">
          Soluções completas para transformar e valorizar o seu imóvel. 
          Qualidade, confiança e perfeccionismo em cada detalhe.
        </p>

        <div className="animate-fade-in">
          <button onClick={scrollToGallery} className="bg-orange-500 text-white px-10 py-3.5 rounded-full text-xl font-bold hover:bg-orange-600 transition-all hover:scale-105 shadow-lg">
            Ver Meus Trabalhos
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;