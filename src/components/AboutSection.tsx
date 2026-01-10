import { Palette, Award, Clock } from "lucide-react";
import profileRamon from "@/assets/profile-ramon.png"; // Importação da sua foto real

const AboutSection = () => {
  const stats = [
    { icon: Clock, value: "5", label: "Anos de Experiência" },
    { icon: Palette, value: "10+", label: "Projetos Realizados" },
    { icon: Award, value: "100%", label: "Satisfação" },
  ];

  return (
    <section id="sobre" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
          <span className="text-gradient">Sobre Mim</span>
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-center gap-12 max-w-6xl mx-auto">
          {/* Container da Imagem com o selo 5+ */}
          <div className="relative">
            <div className="w-64 h-80 md:w-80 md:h-[400px] rounded-2xl overflow-hidden border-2 border-orange-100 shadow-xl">
              <img 
                src={profileRamon} 
                alt="Ramon Lopes" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Selo da Coroa com fundo azul bem claro */}
<div className="absolute -bottom-4 -right-4 bg-sky-50 text-white w-20 h-20 rounded-2xl flex items-center justify-center text-3xl shadow-lg border-4 border-white">
  👑
</div>
          </div>

          {/* Conteúdo de Texto */}
          <div className="flex-1 max-w-2xl text-center md:text-left">
            <p className="text-xl text-muted-foreground mb-6 leading-relaxed font-medium">
              Olá! Sou Ramon Lopes, faço trabalhos de pintura e manutenção.
            </p>
            <p className="text-xl text-muted-foreground mb-10 leading-relaxed font-medium">
              Meu compromisso é transformar ambientes com cores vibrantes e acabamentos impecáveis, sempre superando as expectativas dos meus clientes.
            </p>

            {/* Cartões de Estatísticas Azuis */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-[#0ea5e9] text-white p-6 rounded-2xl flex flex-col items-center justify-center shadow-md hover:scale-105 transition-transform"
                >
                  <stat.icon className="w-6 h-6 mb-3 opacity-80" />
                  <div className="text-3xl font-bold mb-1">{stat.value}</div>
                  <div className="text-[10px] uppercase tracking-wider font-semibold opacity-90 text-center">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;