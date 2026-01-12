import { Play } from "lucide-react";

interface Video {
  id: string;
  title: string;
  description: string;
  youtubeId: string | null;
}

const videos: Video[] = [
  {
    id: "1",
    title: "Fachada Restaurante Mezzogiorno",
    description: "Confira o resultado final da pintura e acabamento externo realizado neste projeto comercial.",
    youtubeId: "aTJWeWx3BLY", // ID do Shorts do Mezzogiorno
  },
  {
    id: "2",
    title: "Processo de Pintura Técnica",
    description: "Em breve, traremos mais vídeos detalhando o passo a passo dos nossos acabamentos finos.",
    youtubeId: null, // Deixei como null para mostrar o estado "Vídeo em breve"
  },
];

const VideosSection = () => {
  return (
    <section id="videos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-gradient">Meus Vídeos</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Assista ao processo de transformação e os resultados finais dos nossos projetos de manutenção e acabamento.
          </p>
        </div>

        {/* Responsividade: 1 coluna no celular (grid-cols-1) e 2 no PC (md:grid-cols-2) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {videos.map((video, index) => (
            <div
              key={video.id}
              className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="relative aspect-video bg-slate-50">
                {video.youtubeId ? (
                  <iframe
                    src={`https://www.youtube.com/embed/${video.youtubeId}`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full border-0"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center group cursor-pointer bg-slate-100">
                    <div className="relative flex flex-col items-center p-6 text-center">
                      <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <Play className="w-6 h-6 md:w-8 md:h-8 text-orange-500 fill-orange-500" />
                      </div>
                      <p className="mt-4 text-sm font-medium text-gray-400">
                        Novo vídeo em produção
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Ajuste de espaçamento para telas menores */}
              <div className="p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-bold mb-3 text-gray-800">
                  {video.title}
                </h3>
                <p className="text-sm md:text-base text-gray-500 leading-relaxed">
                  {video.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideosSection;