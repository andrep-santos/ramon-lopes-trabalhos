import { Phone, MessageCircle } from "lucide-react";

const ContactBar = () => {
  const phoneNumber = "5511914036379"; 
  const whatsappMessage = "Olá Ramon! Vi seu portfólio no site e gostaria de solicitar um orçamento. Poderia me ajudar?";

  const handleWhatsApp = () => {
    const encodedMessage = encodeURIComponent(whatsappMessage);
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodedMessage}`,
      "_blank"
    );
  };

  const handleCall = () => {
    window.open(`tel:+${phoneNumber}`, "_self");
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-t border-border shadow-lg animate-slide-up">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-4 py-3 md:py-4">
          <button
            onClick={handleWhatsApp}
            className="flex-1 max-w-xs flex items-center justify-center gap-2 md:gap-3 bg-[#25D366] text-white px-4 md:px-8 py-3 md:py-4 rounded-full font-semibold hover:opacity-90 transition-all hover:scale-105 shadow-lg"
          >
            <MessageCircle size={20} className="md:w-6 md:h-6" />
            <span className="text-sm md:text-base">Meu WhatsApp</span>
          </button>

          <button
            onClick={handleCall}
            className="flex-1 max-w-xs flex items-center justify-center gap-2 md:gap-3 bg-[#3b82f6] text-white px-4 md:px-8 py-3 md:py-4 rounded-full font-semibold hover:opacity-90 transition-all hover:scale-105 shadow-lg"
          >
            <Phone size={20} className="md:w-6 md:h-6" />
            <span className="text-sm md:text-base">Ligue Agora</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactBar;