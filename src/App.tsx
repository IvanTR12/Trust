import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { 
  Briefcase, 
  MapPin,
  Smartphone,
  Menu,
  Check,
  Ship,
  Truck,
  Package
} from "lucide-react";
import { TrustFullModal } from "@/components/TrustFullModal";
import { TrustConsolidadaDoorModal, type ServiceMode } from "@/components/TrustConsolidadaDoorModal";

export default function App() {
  const [isFullModalOpen, setIsFullModalOpen] = useState(false);
  const [isConsolidadaDoorModalOpen, setIsConsolidadaDoorModalOpen] = useState(false);
  const [consolidadaDoorMode, setConsolidadaDoorMode] = useState<ServiceMode>("consolidada");

  // Contact form state
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactMessage, setContactMessage] = useState("");

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactName.trim() || !contactEmail.trim() || !contactMessage.trim()) return;
    const msg = `👋 *NUEVO MENSAJE DE CONTACTO (WEB TRUST CONTAINER)*\n\n• *Nombre:* ${contactName}\n• *Email:* ${contactEmail}\n• *Mensaje:* ${contactMessage}`;
    window.open(`https://wa.me/584244742482?text=${encodeURIComponent(msg)}`, "_blank");
    setContactName("");
    setContactEmail("");
    setContactMessage("");
  };

  // Newsletter / CIF-FOB subscription state
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterStatus, setNewsletterStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [newsletterMsg, setNewsletterMsg] = useState("");

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim()) return;

    setNewsletterStatus("loading");
    setNewsletterMsg("");

    const webhookUrl = import.meta.env.VITE_SUBSCRIBE_WEBHOOK_URL || "";

    try {
      if (webhookUrl) {
        await fetch(webhookUrl, {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: newsletterEmail.trim(),
            origen: "Web - Migración CIF a FOB",
            fecha: new Date().toLocaleString("es-VE"),
          }),
        });
      }
      setNewsletterStatus("success");
      setNewsletterMsg("¡Suscripción exitosa! Te hemos enviado un correo de bienvenida.");
      setNewsletterEmail("");
    } catch {
      setNewsletterStatus("error");
      setNewsletterMsg("Hubo un problema al procesar la suscripción. Por favor, intenta de nuevo.");
    }
  };

  return (
    <div className="bg-white content-stretch flex flex-col items-center relative w-full overflow-x-hidden min-h-screen">
      
      {/* HERO SECTION WITH TRANSPARENT NAVBAR */}
      <section 
        className="relative w-full overflow-hidden"
        style={{ minHeight: '944px' }}
      >
        {/* Background Image that covers the whole top area including the header */}
        <div 
          className="absolute inset-0 z-0"
          style={{ 
            backgroundImage: 'url("/img/Rectangle 9.png")', 
            backgroundSize: 'cover', 
            backgroundPosition: 'center top',
            backgroundRepeat: 'no-repeat'
          }}
        />
        
        {/* HEADER / NAVBAR (Transparent & Absolute) */}
        <header className="absolute top-0 w-full h-[78px] md:h-[100px] flex items-center justify-between px-4 md:px-10 z-50">
          {/* Left: Alliance Logos */}
          <div className="flex-1 hidden md:flex items-center justify-start">
            <div className="bg-white/90 hover:bg-white backdrop-blur-md px-4 py-2 rounded-full shadow-md border border-white/60 flex items-center gap-3.5 transition-all">
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                Alianzas
              </span>
              <span className="w-[1px] h-4 bg-slate-200" />
              <img src="/img/asocav-logo.png" alt="ASOCAV" className="h-5 w-auto object-contain" />
              <span className="w-[1px] h-4 bg-slate-200" />
              <img src="/img/logo.webp" alt="GLA Global Logistics Alliance" className="h-5 w-auto object-contain" />
            </div>
          </div>
          
          {/* Centered Logo */}
          <div className="flex-1 flex justify-start md:justify-center">
            <img src="/img/Rectangle 4.png" alt="Trust Container" className="h-[58px] brightness-0 invert object-contain" />
          </div>

          {/* Right Menu (Mobile) / Social Icons (Desktop) */}
          <div className="flex-1 flex justify-end items-center gap-6">
            {/* Desktop Socials */}
            <div className="hidden md:flex items-center gap-4">
              <Button asChild variant="ghost" size="icon" className="text-white hover:bg-white/20 hover:text-white rounded-full">
                <a 
                  href="https://www.linkedin.com/company/trust-container" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <img src="/img/ant-design_linkedin-filled.svg" className="w-8 h-8 brightness-0 invert" alt="LinkedIn" />
                </a>
              </Button>
              <Button asChild variant="ghost" size="icon" className="text-white hover:bg-white/20 hover:text-white rounded-full">
                <a 
                  href="https://www.instagram.com/fullcontainertrust/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <img src="/img/ant-design_instagram-outlined.svg" className="w-8 h-8 brightness-0 invert" alt="Instagram" />
                </a>
              </Button>
            </div>
            {/* Mobile Menu */}
            <div className="flex md:hidden">
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/20 hover:text-white rounded-full">
                <Menu className="w-8 h-8" />
              </Button>
            </div>
          </div>
        </header>

        {/* HERO CONTENT */}
        <div className="relative z-10 flex flex-col items-center pt-[180px] md:pt-[250px] pb-12 gap-[59px] max-w-4xl mx-auto px-4 w-full">
          <div className="flex flex-col gap-[7px] w-full items-center">
            <h1 className="text-[48px] md:text-[74px] font-bold text-white tracking-[0.2px] leading-[55px] md:leading-[84px] text-center w-full md:w-[614px]">
              El mundo es pequeño cuando tienes el aliado correcto.
            </h1>
            <p className="text-[28px] md:text-[28px] text-white font-light text-center leading-[40px] tracking-[0.2px] mt-2 w-full md:w-[614px]">
              No solo movemos contenedores; movemos oportunidades.
            </p>
          </div>
          <div className="mt-8 flex flex-col items-center gap-4">
            <Button asChild className="bg-[#2091f9] hover:bg-blue-600 text-white rounded-full px-12 py-8 text-[20px] shadow-lg hover:shadow-xl transition-all">
              <a href="#cotizaciones">Cotizar Ahora.</a>
            </Button>
            {/* Mobile Alliances Badge */}
            <div className="flex md:hidden items-center gap-2.5 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-md border border-white/60">
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Alianzas:</span>
              <img src="/img/asocav-logo.png" alt="ASOCAV" className="h-4 w-auto object-contain" />
              <span className="w-[1px] h-3 bg-slate-200" />
              <img src="/img/logo.webp" alt="GLA Global Logistics Alliance" className="h-4 w-auto object-contain" />
            </div>
          </div>
        </div>

        {/* Floating Alliance Badge (Bottom Right of Hero) */}
        <div className="absolute bottom-8 right-6 md:right-12 z-20 hidden sm:block">
          <div className="bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-xl border border-white/70 flex items-center gap-3.5 hover:shadow-2xl transition-all">
            <div className="flex flex-col text-left">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                Alianzas Estratégicas
              </span>
              <div className="flex items-center gap-3 mt-1.5">
                <img src="/img/asocav-logo.png" alt="ASOCAV" className="h-6 w-auto object-contain" />
                <span className="w-[1px] h-4 bg-slate-200" />
                <img src="/img/logo.webp" alt="GLA Global Logistics Alliance" className="h-6 w-auto object-contain" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="flex flex-col items-center w-full py-20 md:py-24 px-5 bg-white">
        <div className="flex flex-col gap-[7px] text-center mb-[75px] w-full">
          <h2 className="text-[48px] leading-[55px] text-[#252b42] tracking-[0.2px]">Características del Servicio</h2>
          <p className="text-[28px] leading-[40px] text-[#374754] tracking-[0.2px]">¿Por qué elegirnos como tu partner logístico?</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[75px] max-w-6xl mx-auto mb-20">
          <div className="flex flex-col items-center text-center gap-[10px] max-w-[255px] mx-auto">
            <div className="mb-2 flex items-center justify-center w-[61px] h-[61px]">
              <img src="/img/mdi_drawing.svg" className="w-full h-full" alt="" />
            </div>
            <h3 className="text-[20px] leading-[28px] font-bold text-[#252b42]">Alcance Global</h3>
            <p className="text-[18px] leading-[25px] text-[#374754]">
              Llegamos a donde tu negocio necesite estar con transporte multimodal marítimo, aéreo y terrestre.
            </p>
          </div>
          
          <div className="flex flex-col items-center text-center gap-[10px] max-w-[255px] mx-auto">
            <div className="mb-2 flex items-center justify-center w-[56px] h-[56px]">
              <img src="/img/mdi_draw.svg" className="w-full h-full" alt="" />
            </div>
            <h3 className="text-[20px] leading-[28px] font-bold text-[#252b42]">Seguridad Total</h3>
            <p className="text-[18px] leading-[25px] text-[#374754]">
              Cuidamos tu carga como si fuera nuestra, ofreciendo seguros a todo riesgo para proteger tu inversión.
            </p>
          </div>
          
          <div className="flex flex-col items-center text-center gap-[10px] max-w-[255px] mx-auto">
            <div className="mb-2 flex items-center justify-center w-[61px] h-[61px]">
              <img src="/img/mdi_brush.svg" className="w-full h-full" alt="" />
            </div>
            <h3 className="text-[20px] leading-[28px] font-bold text-[#252b42]">Experiencia Real</h3>
            <p className="text-[18px] leading-[25px] text-[#374754]">
              Soluciones inteligentes para desafíos aduaneros y logísticos complejos diseñadas por expertos.
            </p>
          </div>
        </div>
        
        <div className="relative w-full max-w-5xl aspect-[16/9] bg-gray-200 rounded-[40px] flex items-center justify-center shadow-2xl overflow-hidden group cursor-pointer">
          <img src="/img/screen.png" className="absolute inset-0 w-full h-full object-cover" alt="Video Screen" />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10" />
          <img src="/img/el_play.svg" className="w-24 h-24 z-20 opacity-90 group-hover:scale-110 transition-transform" alt="Play" />
        </div>
      </section>

      {/* SECONDARY HERO */}
      <section className="flex flex-col md:flex-row items-center justify-center w-full py-12 md:py-24 px-5 md:px-10 gap-16">
        <div className="flex flex-col gap-[59px] max-w-lg items-center md:items-start text-center md:text-left w-full">
          <div className="flex flex-col gap-[7px]">
            <h2 className="text-[48px] text-[#252b42] font-normal leading-[55px] tracking-[0.2px]">
              Trust Express: Eficiencia en envíos LCL
            </h2>
            <p className="text-[28px] text-[#374754] leading-[40px] tracking-[0.2px] mt-4">
              La solución perfecta para quienes buscan enviar carga consolidada o servicio Door-to-Door sin necesidad de completar un contenedor.
            </p>
          </div>
          <Button asChild className="bg-[#2091f9] hover:bg-blue-600 text-white rounded-[35px] px-[40px] py-[16px] h-auto text-[20px] leading-[28px] font-bold self-center md:self-start w-[236px]">
            <a href="#cotizaciones">Ver Servicios</a>
          </Button>
        </div>
        
        <div className="relative w-full max-w-2xl bg-white p-4 rounded-xl shadow-xl">
          <div className="aspect-[16/10] bg-gray-200 rounded-lg overflow-hidden flex items-center justify-center relative">
             <img src="/img/SCREEN MASK.png" className="absolute inset-0 w-full h-full object-cover" alt="Platform Preview" />
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="flex flex-col md:flex-row items-center justify-between w-full py-20 md:py-24 px-5 md:px-10 max-w-7xl mx-auto gap-[59px]">
        <div className="w-full md:w-1/2 flex justify-center order-2 md:order-1">
          <div className="relative w-full max-w-[389px] aspect-[4/3] rounded-full flex items-center justify-center">
             <img src="/img/Vector-23.svg" className="absolute w-32 h-32 object-contain hidden" alt="" />
             {/* Using briefcase as placeholder for the undraw image in Figma */}
             <Briefcase className="w-32 h-32 text-[#2091f9]" />
          </div>
        </div>
        <div className="w-full md:w-1/2 flex flex-col gap-[10px] items-center md:items-start text-center md:text-left order-1 md:order-2">
          <h3 className="text-[20px] font-bold text-[#252b42] leading-[28px] tracking-[0.1px]">Al alcance de tus manos</h3>
          <h2 className="text-[48px] text-[#252b42] font-normal leading-[55px] tracking-[0.2px] mb-4">
            Control total de tu operación con Incoterms FOB
          </h2>
          <p className="text-[20px] font-bold text-[#252b42] leading-[28px] tracking-[0.1px]">
            Te ayudamos a migrar de CIF a FOB para que tú elijas los tiempos
          </p>
          
          <form onSubmit={handleNewsletterSubmit} className="flex flex-col gap-3 mt-8 w-full max-w-[353px] md:max-w-lg mx-auto md:mx-0">
            <div className="flex flex-col md:flex-row items-stretch gap-[12px] w-full">
              <Input 
                type="email"
                required
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="Ingresa tu correo empresarial" 
                disabled={newsletterStatus === "loading"}
                className="rounded-[39px] bg-[#f4f4f4] border-[#e8e8e8] py-[19px] px-[35px] text-[14px] h-auto w-full focus:bg-white"
              />
              <Button 
                type="submit"
                disabled={newsletterStatus === "loading"}
                className="bg-[#2091f9] hover:bg-blue-600 text-white rounded-[35px] px-[35px] py-[17px] h-auto text-[18px] md:text-[20px] w-full md:w-auto font-normal cursor-pointer transition-all flex items-center justify-center gap-2"
              >
                {newsletterStatus === "loading" ? "Enviando..." : "Suscribirse"}
              </Button>
            </div>
            {newsletterStatus === "success" && (
              <p className="text-emerald-600 text-sm font-semibold mt-1">
                {newsletterMsg}
              </p>
            )}
            {newsletterStatus === "error" && (
              <p className="text-red-500 text-sm mt-1">
                {newsletterMsg}
              </p>
            )}
          </form>
        </div>
      </section>

      <Separator className="w-full max-w-7xl mx-auto" />

      {/* PARTNERS */}
      <section className="flex flex-col items-center w-full py-[50px] md:py-24 px-[20px] md:px-4 bg-white">
        <div className="flex flex-col gap-[7px] items-center text-center w-full max-w-4xl mb-[80px]">
          <h2 className="text-[48px] leading-[55px] text-[#252b42] tracking-[0.2px]">Confían en nosotros</h2>
          <p className="text-[28px] leading-[40px] text-[#374754] tracking-[0.2px]">
            En Trust Container, nuestra mayor preocupación siempre es la comodidad de nuestros clientes
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-[30px] md:gap-12 max-w-6xl mx-auto w-full">
          <div className="border border-[#d8d8d8] py-[25px] px-[40px] flex items-center justify-center w-full md:w-[260px] h-[115px]">
            <img 
              src="/img/sura-logo.png" 
              alt="SURA de Venezuela" 
              className="max-h-[55px] max-w-[170px] w-auto h-auto object-contain grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300" 
            />
          </div>
          <div className="border border-[#d8d8d8] py-[25px] px-[40px] flex items-center justify-center w-full md:w-[260px] h-[115px]">
            <img 
              src="/img/redvital-logo.png" 
              alt="Redvital" 
              className="max-h-[50px] max-w-[170px] w-auto h-auto object-contain grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300" 
            />
          </div>
          <div className="border border-[#d8d8d8] py-[25px] px-[40px] flex items-center justify-center w-full md:w-[260px] h-[115px]">
            <img 
              src="/img/valcro-logo.png" 
              alt="Valcro" 
              className="max-h-[55px] max-w-[170px] w-auto h-auto object-contain grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300" 
            />
          </div>
        </div>
        
        <div className="mt-[80px]">
          <Button asChild className="bg-[#2091f9] hover:bg-blue-600 text-white rounded-[35px] px-[40px] py-[16px] h-auto text-[20px] font-bold leading-[28px] w-[236px]">
            <a href="#cotizaciones">Cotiza Gratis</a>
          </Button>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="flex flex-col items-center w-full py-[100px] md:py-24 px-5 bg-gray-50 border-t border-b border-gray-200">
        <h2 className="text-[48px] leading-[55px] text-[#252b42] tracking-[0.2px] text-center mb-[80px]">Testimonios</h2>
        
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto gap-[44px] mb-[80px]">
          <div className="flex items-center justify-center">
            <img src="/img/logos_ibm.svg" alt="IBM" className="h-[50px] object-contain grayscale" />
          </div>
          <p className="text-[13.5px] md:text-[24px] text-[#374754] font-bold leading-[17px] md:leading-relaxed max-w-md">
            "En Trust Container, la logística dejó de ser una preocupación para convertirse en nuestra mayor ventaja competitiva."
          </p>
          <div className="flex items-center gap-[11px]">
            <img src="/img/Ellipse 2.png" className="w-[42px] h-[42px] rounded-full object-cover" alt="Avatar" />
            <div className="flex flex-col items-start">
              <span className="text-[10px] md:text-sm font-bold text-[#374754] leading-[15px]">Héctor Vásquez</span>
              <span className="text-[12.5px] md:text-sm text-[#252b42] font-normal leading-[23px]">Director General y Comercial</span>
            </div>
          </div>
        </div>
        
        <Button className="bg-[#2091f9] hover:bg-blue-600 text-white rounded-[35px] px-[47px] py-[16px] h-auto text-[20px] font-bold leading-[28px]">
          Más Testimonios
        </Button>
      </section>

      {/* PRICING */}
      <section id="cotizaciones" className="flex flex-col items-center w-full py-[100px] md:py-24 px-4 sm:px-6 md:px-8 bg-[#252b42] scroll-mt-10">
        <div className="flex flex-col gap-[7px] text-center mb-[50px] md:mb-[70px]">
          <h2 className="text-[36px] md:text-[48px] leading-[44px] md:leading-[55px] text-white tracking-[0.2px] font-bold">Nuestros Servicios</h2>
          <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[36px] text-white/80 tracking-[0.2px] max-w-2xl font-light">
            Soluciones logísticas adaptadas a cada necesidad. Desde carga consolidada hasta operaciones puerta a puerta.
          </p>
        </div>
        
        <div className="flex flex-col gap-8 max-w-5xl w-full mx-auto">
          {/* 1 ARRIBA - Trust Full Container Loaded (FCL) */}
          <div className="bg-gradient-to-br from-[#2091f9] via-[#1a85e8] to-[#126ec5] rounded-2xl md:rounded-3xl p-8 md:p-12 shadow-2xl border border-blue-400/30 relative overflow-hidden text-white w-full">
            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none" />
            
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 relative z-10">
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md text-white text-xs md:text-sm font-bold px-3.5 py-1.5 rounded-full mb-3">
                  <Ship className="w-4 h-4" />
                  <span>Más Popular • FCL</span>
                </div>
                <span className="block text-xs md:text-sm font-semibold text-white/80 uppercase tracking-widest">
                  Contenedor Completo
                </span>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mt-1 mb-3">
                  Trust Full Container Loaded (FCL)
                </h3>
                <div className="inline-flex items-center gap-2 bg-white/15 border border-white/25 rounded-xl px-4 py-2 my-1">
                  <span className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white tracking-tight">
                    Desde cualquier origen
                  </span>
                </div>
              </div>

              <div className="lg:w-72 flex-shrink-0 flex flex-col justify-center">
                <Button 
                  onClick={() => setIsFullModalOpen(true)}
                  className="w-full bg-white hover:bg-slate-100 text-[#2091f9] hover:text-[#1778d0] rounded-full py-6 text-lg font-bold cursor-pointer shadow-xl hover:shadow-2xl transition-all"
                >
                  Solicitar Cotización
                </Button>
              </div>
            </div>

            <div className="w-full h-[1px] bg-white/20 my-6" />

            {/* FCL Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full relative z-10">
              {[
                'FCL 20\' y 40\' a cualquier destino',
                'Negociación directa con navieras',
                'Gestión aduanera completa',
                'Seguro a todo riesgo',
                'Migración de CIF a FOB',
                'Asesor logístico dedicado',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 text-white text-sm md:text-base">
                  <Check className="w-5 h-5 text-white mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 2 ABAJO - Trust Premium & Trust Express */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
            {/* Card Abajo 1 - Trust Premium */}
            <div className="bg-white rounded-2xl md:rounded-3xl p-8 md:p-10 flex flex-col justify-between gap-6 shadow-xl border border-gray-100 hover:shadow-2xl transition-all">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-semibold text-[#2091f9] uppercase tracking-wider">
                    Door-to-Door
                  </span>
                  <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-[#2091f9]">
                    <Truck className="w-5 h-5" />
                  </div>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-[#252b42]">Trust Premium</h3>
                
                <div className="mt-4 mb-6">
                  <span className="text-3xl md:text-4xl font-extrabold text-[#252b42] block">
                    A su medida
                  </span>
                  <span className="text-xs text-slate-500 font-medium">Servicio integral personalizado</span>
                </div>

                <div className="w-full h-[1px] bg-gray-200 mb-6" />

                <div className="flex flex-col gap-3 w-full">
                  {[
                    'Servicio puerta a puerta',
                    'Transporte multimodal integral',
                    'Desaduanamiento en destino',
                    'Almacenaje y distribución',
                    'Seguro premium todo riesgo',
                    'Soporte 24/7 dedicado',
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3 text-[#252b42] text-sm md:text-base">
                      <Check className="w-5 h-5 text-[#2091f9] mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Button 
                onClick={() => {
                  setConsolidadaDoorMode("door-to-door");
                  setIsConsolidadaDoorModalOpen(true);
                }}
                className="w-full mt-4 bg-[#2091f9] hover:bg-blue-600 text-white rounded-full py-6 text-lg font-bold cursor-pointer shadow-md hover:shadow-lg transition-all"
              >
                Solicitar Cotización
              </Button>
            </div>

            {/* Card Abajo 2 - Trust Express */}
            <div className="bg-white rounded-2xl md:rounded-3xl p-8 md:p-10 flex flex-col justify-between gap-6 shadow-xl border border-gray-100 hover:shadow-2xl transition-all">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-semibold text-[#2091f9] uppercase tracking-wider">
                    Carga Consolidada
                  </span>
                  <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-[#2091f9]">
                    <Package className="w-5 h-5" />
                  </div>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-[#252b42]">Trust Express</h3>
                
                <div className="mt-4 mb-6">
                  <span className="text-3xl md:text-4xl font-extrabold text-[#252b42] block">
                    Según Origen
                  </span>
                  <span className="text-xs text-slate-500 font-medium">Tarifa optimizada por ruta y volumen</span>
                </div>

                <div className="w-full h-[1px] bg-gray-200 mb-6" />

                <div className="flex flex-col gap-3 w-full">
                  {[
                    'Envíos LCL desde cualquier origen',
                    'Consolidación de carga',
                    'Seguimiento en tiempo real',
                    'Seguro básico incluido',
                    'Asesoría documental',
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3 text-[#252b42] text-sm md:text-base">
                      <Check className="w-5 h-5 text-[#2091f9] mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Button 
                onClick={() => {
                  setConsolidadaDoorMode("consolidada");
                  setIsConsolidadaDoorModalOpen(true);
                }}
                className="w-full mt-4 bg-[#2091f9] hover:bg-blue-600 text-white rounded-full py-6 text-lg font-bold cursor-pointer shadow-md hover:shadow-lg transition-all"
              >
                Solicitar Cotización
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="flex flex-col items-center w-full py-[100px] md:py-24 px-5 md:px-4 bg-white border-t border-gray-100">
        <div className="flex flex-col gap-[7px] text-center mb-[80px]">
          <h2 className="text-[48px] leading-[55px] text-[#252b42] tracking-[0.2px] max-w-xl mx-auto">¿Listo para importar sin estrés?</h2>
          <p className="text-[28px] leading-[40px] text-[#374754] tracking-[0.2px] max-w-2xl mx-auto">Queremos conocer tu proyecto y diseñarte la ruta más eficiente.</p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-16 max-w-6xl mx-auto w-full items-start">
          <div className="w-full md:w-1/2">
            <form onSubmit={handleContactSubmit} className="bg-white p-10 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] border border-gray-100 flex flex-col gap-6">
              <h3 className="text-2xl font-bold text-[#252b42]">Contáctanos</h3>
              <Input 
                placeholder="Tu nombre" 
                required
                value={contactName}
                onChange={(e) => setContactName(e.target.value)}
                className="rounded-full bg-gray-50 border-gray-200 py-6 px-6 text-lg" 
              />
              <Input 
                placeholder="Email" 
                type="email" 
                required
                value={contactEmail}
                onChange={(e) => setContactEmail(e.target.value)}
                className="rounded-full bg-gray-50 border-gray-200 py-6 px-6 text-lg" 
              />
              <textarea 
                placeholder="Tu mensaje" 
                required
                value={contactMessage}
                onChange={(e) => setContactMessage(e.target.value)}
                className="w-full min-h-[150px] p-6 rounded-2xl bg-gray-50 border border-gray-200 text-lg outline-none focus:ring-2 focus:ring-[#2091f9]/50"
              />
              <Button type="submit" className="bg-[#2091f9] hover:bg-blue-600 text-white rounded-full px-12 py-6 text-lg self-start cursor-pointer">
                Enviar
              </Button>
            </form>
          </div>
          
          <div className="w-full md:w-1/2 flex flex-col gap-10">
            <div className="flex flex-col gap-8">
              <div className="flex items-center gap-4">
                <img src="/img/bx_bx-map.svg" className="w-8 h-8" alt="" />
                <span className="text-lg text-[#374754]">C.C. Concepto La Granja, Torre Empresarial, Piso 4, Of. 4-02, Naguanagua, Edo. Carabobo</span>
              </div>
              <div className="flex items-center gap-4">
                <img src="/img/ic_baseline-phone-android.svg" className="w-8 h-8" alt="" />
                <a href="https://wa.me/584244742482" target="_blank" rel="noopener noreferrer" className="text-lg text-[#374754] hover:text-[#2091f9] transition-colors">+58 424-4742482</a>
              </div>
              <div className="flex items-center gap-4">
                <img src="/img/ant-design_mail-outlined.svg" className="w-8 h-8" alt="" />
                <a href="mailto:ventas1@trustcontainer.com" className="text-lg text-[#374754] hover:text-[#2091f9] transition-colors">ventas1@trustcontainer.com</a>
              </div>
            </div>
            
            <div className="w-full h-[300px] bg-gray-200 rounded-3xl overflow-hidden mt-4 relative shadow-md">
               <img src="/img/@ map screen.png" className="absolute inset-0 w-full h-full object-cover" alt="Map" />
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="w-full py-[50px] md:py-16 bg-[#252b42] px-[20px] md:px-10">
        <div className="max-w-6xl mx-auto flex flex-col justify-center items-center gap-[40px] text-center">
          <img src="/img/Rectangle 4.png" alt="Trust Container" className="h-[58px] brightness-0 invert object-contain mb-[20px]" />
          <div className="flex flex-col items-center gap-[20px] text-white w-full">
            <div className="flex items-center gap-[10px]">
              <MapPin className="w-[30px] h-[30px]" />
              <span className="text-[20px] leading-[28px] font-bold">C.C. Concepto La Granja, Naguanagua, Edo. Carabobo</span>
            </div>
            <div className="flex items-center gap-[10px]">
              <Smartphone className="w-[30px] h-[30px]" />
              <span className="text-[20px] leading-[28px] font-bold">+58 424-4742482</span>
            </div>
            <div className="flex gap-[24px] mt-[30px]">
              <Button asChild variant="ghost" size="icon" className="text-white hover:bg-white/10 rounded-full w-[40px] h-[40px] p-0">
                <a 
                  href="https://www.linkedin.com/company/trust-container" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <img src="/img/ant-design_linkedin-filled.svg" className="w-full h-full brightness-0 invert" alt="LinkedIn" />
                </a>
              </Button>
              <Button asChild variant="ghost" size="icon" className="text-white hover:bg-white/10 rounded-full w-[40px] h-[40px] p-0">
                <a 
                  href="https://www.instagram.com/fullcontainertrust/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <img src="/img/ant-design_instagram-outlined.svg" className="w-full h-full brightness-0 invert" alt="Instagram" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </footer>

      {/* QUOTE MODALS */}
      <TrustFullModal
        isOpen={isFullModalOpen}
        onClose={() => setIsFullModalOpen(false)}
      />

      <TrustConsolidadaDoorModal
        isOpen={isConsolidadaDoorModalOpen}
        onClose={() => setIsConsolidadaDoorModalOpen(false)}
        defaultMode={consolidadaDoorMode}
      />
    </div>
  );
}
