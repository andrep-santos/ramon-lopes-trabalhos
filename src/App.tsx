import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import GallerySection from "@/components/GallerySection";
import VideosSection from "@/components/VideosSection";
import ContactBar from "@/components/ContactBar";

const App = () => {
  return (
    <div className="min-h-screen bg-background pb-20">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <GallerySection />
        <VideosSection />
      </main>
      <ContactBar />
    </div>
  );
};

export default App;