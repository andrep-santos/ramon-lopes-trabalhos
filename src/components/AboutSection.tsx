import { Palette, Award, Clock } from "lucide-react";
import profileRamon from "@/assets/profile-ramon.png"; 

const AboutSection = () => {
  const stats = [
    { icon: Clock, value: "5+", label: "Anos de Atuação" },
    { icon: Palette, value: "50+", label: "Clientes Felizes" },
    { icon: Award, value: "100%", label: "Compromisso" },
  ];

  return (
    <section id="sobre" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
           <span className="text-gradient">Sobre Mim</span>
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-center gap-12 max-w-6xl mx-auto">
          <div className="relative">
            <div className="w-64 h-80 md:w-80 md:h-[500px] rounded-2xl overflow-hidden border-2 border-orange-100 shadow-xl">
              <img src={profileRamon} alt="Ramon Lopes" className="w-full h-full object-cover" />
            </div>
            {/* Selo da Coroa com fundo azul bem claro (sky-50) */}
            <div className="absolute -bottom-4 -right-4 bg-sky-50 w-20 h-20 rounded-2xl flex items-center justify-center text-3xl shadow-lg border-4 border-white">
              👑
            </div>
          </div>

          <div className="flex-1 max-w-2xl text-center md:text-left">
            <p className="text-xl text-muted-foreground mb-6 leading-relaxed font-medium">
              Olá! Sou Ramon Lopes, especialista em serviços de manutenção predial e acabamentos residenciais.
            </p>
            <p className="text-xl text-muted-foreground mb-10 leading-relaxed font-medium">
              Meu objetivo é oferecer um serviço completo, cuidando desde pequenos reparos até grandes transformações, sempre priorizando a limpeza, o prazo e a satisfação total de quem confia no meu trabalho.
            </p>

            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="bg-[#0ea5e9] text-white p-6 rounded-2xl flex flex-col items-center justify-center shadow-md hover:scale-105 transition-transform">
                  <stat.icon className="w-6 h-6 mb-3 opacity-80" />
                  <div className="text-2xl md:text-3xl font-bold mb-1">{stat.value}</div>
                  <div className="text-[10px] uppercase tracking-wider font-semibold text-center">{stat.label}</div>
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