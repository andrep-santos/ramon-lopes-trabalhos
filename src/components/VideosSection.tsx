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
    title: "João Gomes - Virando Tanto Faz",
    description: "Assista ao clipe oficial de João Gomes e Jadson Araújo, gravado ao vivo no Sertão.",
    youtubeId: "IxbAaMCKH5E", // ID do primeiro link enviado
  },
  {
    id: "2",
    title: "João Gomes - Sem Você",
    description: "Confira a performance ao vivo de 'Sem Você', gravada no DVD Acredite em Recife.",
    youtubeId: "oitFyIjOlPg", // ID do segundo link enviado
  },
];

const VideosSection = () => {
  return (
    <section id="videos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Meus Vídeos</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Assista ao processo de criação dos meus projetos, em breve, enquanto isso tem João Gomes
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
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
                  <div className="w-full h-full flex items-center justify-center group cursor-pointer">
                    <div className="relative flex flex-col items-center">
                      <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <Play className="w-8 h-8 text-orange-500 fill-orange-500" />
                      </div>
                      <p className="mt-4 text-sm font-medium text-gray-400">
                        Vídeo em breve
                      </p>
                    </div>
                  </div>
                )}
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold mb-3 text-gray-800">
                  {video.title}
                </h3>
                <p className="text-gray-500 leading-relaxed">
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