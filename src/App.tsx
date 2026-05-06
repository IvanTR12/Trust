import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { 
  Briefcase, 
  MapPin,
  Smartphone,
  Menu
} from "lucide-react";

export default function App() {
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
            backgroundImage: 'url("/Trust/img/Rectangle 9.png")', 
            backgroundSize: 'cover', 
            backgroundPosition: 'center top',
            backgroundRepeat: 'no-repeat'
          }}
        />
        
        {/* HEADER / NAVBAR (Transparent & Absolute) */}
        <header className="absolute top-0 w-full h-[78px] md:h-[100px] flex items-center justify-between px-4 md:px-10 z-50">
          {/* Empty left div to balance flex space-between if needed on desktop */}
          <div className="flex-1 hidden md:block"></div>
          
          {/* Centered Logo */}
          <div className="flex-1 flex justify-start md:justify-center">
            <img src="/Trust/img/Rectangle 4.png" alt="Trust Container" className="h-[58px] brightness-0 invert object-contain" />
          </div>

          {/* Right Menu (Mobile) / Social Icons (Desktop) */}
          <div className="flex-1 flex justify-end items-center gap-6">
            {/* Desktop Socials */}
            <div className="hidden md:flex items-center gap-6">
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/20 hover:text-white rounded-full">
                <img src="/Trust/img/ant-design_twitter-outlined.svg" className="w-8 h-8 brightness-0 invert" alt="Twitter" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/20 hover:text-white rounded-full">
                <img src="/Trust/img/ant-design_facebook-filled.svg" className="w-8 h-8 brightness-0 invert" alt="Facebook" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/20 hover:text-white rounded-full">
                <img src="/Trust/img/ant-design_linkedin-filled.svg" className="w-8 h-8 brightness-0 invert" alt="LinkedIn" />
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
          <div className="mt-8">
            <Button asChild className="bg-[#2091f9] hover:bg-blue-600 text-white rounded-full px-12 py-8 text-[20px]">
              <a href="https://wa.link/nz14jx" target="_blank" rel="noopener noreferrer">Cotizar Ahora.</a>
            </Button>
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
              <img src="/Trust/img/mdi_drawing.svg" className="w-full h-full" alt="" />
            </div>
            <h3 className="text-[20px] leading-[28px] font-bold text-[#252b42]">Alcance Global</h3>
            <p className="text-[18px] leading-[25px] text-[#374754]">
              Llegamos a donde tu negocio necesite estar con transporte multimodal marítimo, aéreo y terrestre.
            </p>
          </div>
          
          <div className="flex flex-col items-center text-center gap-[10px] max-w-[255px] mx-auto">
            <div className="mb-2 flex items-center justify-center w-[56px] h-[56px]">
              <img src="/Trust/img/mdi_draw.svg" className="w-full h-full" alt="" />
            </div>
            <h3 className="text-[20px] leading-[28px] font-bold text-[#252b42]">Seguridad Total</h3>
            <p className="text-[18px] leading-[25px] text-[#374754]">
              Cuidamos tu carga como si fuera nuestra, ofreciendo seguros a todo riesgo para proteger tu inversión.
            </p>
          </div>
          
          <div className="flex flex-col items-center text-center gap-[10px] max-w-[255px] mx-auto">
            <div className="mb-2 flex items-center justify-center w-[61px] h-[61px]">
              <img src="/Trust/img/mdi_brush.svg" className="w-full h-full" alt="" />
            </div>
            <h3 className="text-[20px] leading-[28px] font-bold text-[#252b42]">Experiencia Real</h3>
            <p className="text-[18px] leading-[25px] text-[#374754]">
              Soluciones inteligentes para desafíos aduaneros y logísticos complejos diseñadas por expertos.
            </p>
          </div>
        </div>
        
        <div className="relative w-full max-w-5xl aspect-[16/9] bg-gray-200 rounded-[40px] flex items-center justify-center shadow-2xl overflow-hidden group cursor-pointer">
          <img src="/Trust/img/screen.png" className="absolute inset-0 w-full h-full object-cover" alt="Video Screen" />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10" />
          <img src="/Trust/img/el_play.svg" className="w-24 h-24 z-20 opacity-90 group-hover:scale-110 transition-transform" alt="Play" />
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
            <a href="https://wa.link/nz14jx" target="_blank" rel="noopener noreferrer">Ver Servicios</a>
          </Button>
        </div>
        
        <div className="relative w-full max-w-2xl bg-white p-4 rounded-xl shadow-xl">
          <div className="aspect-[16/10] bg-gray-200 rounded-lg overflow-hidden flex items-center justify-center relative">
             <img src="/Trust/img/SCREEN MASK.png" className="absolute inset-0 w-full h-full object-cover" alt="Platform Preview" />
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="flex flex-col md:flex-row items-center justify-between w-full py-20 md:py-24 px-5 md:px-10 max-w-7xl mx-auto gap-[59px]">
        <div className="w-full md:w-1/2 flex justify-center order-2 md:order-1">
          <div className="relative w-full max-w-[389px] aspect-[4/3] rounded-full flex items-center justify-center">
             <img src="/Trust/img/Vector-23.svg" className="absolute w-32 h-32 object-contain hidden" alt="" />
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
          
          <div className="flex flex-col md:flex-row items-stretch gap-[12px] mt-8 w-full max-w-[353px] md:max-w-lg mx-auto md:mx-0">
            <Input 
              placeholder="Email" 
              className="rounded-[39px] bg-[#f4f4f4] border-[#e8e8e8] py-[19px] px-[35px] text-[14px] h-auto w-full"
            />
            <Button className="bg-[#2091f9] hover:bg-blue-600 text-white rounded-[35px] px-[35px] py-[17px] h-auto text-[20px] w-full md:w-auto font-normal">
              Subscribe
            </Button>
          </div>
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
          <div className="border border-[#d8d8d8] py-[25px] px-[40px] flex items-center justify-center w-full md:w-auto max-w-[275px]">
            <img src="/Trust/img/logos_google.svg" alt="Google" className="h-[63px] object-contain grayscale opacity-50 hover:opacity-100 hover:grayscale-0 transition-all" />
          </div>
          <div className="border border-[#d8d8d8] py-[25px] px-[40px] flex items-center justify-center w-full md:w-auto max-w-[275px]">
            <img src="/Trust/img/Rectangle.png" alt="Amazon" className="h-[58px] object-contain grayscale opacity-50 hover:opacity-100 hover:grayscale-0 transition-all" />
          </div>
          <div className="border border-[#d8d8d8] py-[25px] px-[40px] flex items-center justify-center w-full md:w-auto max-w-[275px]">
            <img src="/Trust/img/Rectangle-1.png" alt="Microsoft" className="h-[77px] object-contain grayscale opacity-50 hover:opacity-100 hover:grayscale-0 transition-all" />
          </div>
        </div>
        
        <div className="mt-[80px]">
          <Button asChild className="bg-[#2091f9] hover:bg-blue-600 text-white rounded-[35px] px-[40px] py-[16px] h-auto text-[20px] font-bold leading-[28px] w-[236px]">
            <a href="https://wa.link/nz14jx" target="_blank" rel="noopener noreferrer">Try For Free</a>
          </Button>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="flex flex-col items-center w-full py-[100px] md:py-24 px-5 bg-gray-50 border-t border-b border-gray-200">
        <h2 className="text-[48px] leading-[55px] text-[#252b42] tracking-[0.2px] text-center mb-[80px]">Testimonios</h2>
        
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto gap-[44px] mb-[80px]">
          <div className="flex items-center justify-center">
            <img src="/Trust/img/logos_ibm.svg" alt="IBM" className="h-[50px] object-contain grayscale" />
          </div>
          <p className="text-[13.5px] md:text-[24px] text-[#374754] font-bold leading-[17px] md:leading-relaxed max-w-md">
            "En Trust Container, la logística dejó de ser una preocupación para convertirse en nuestra mayor ventaja competitiva."
          </p>
          <div className="flex items-center gap-[11px]">
            <img src="/Trust/img/Ellipse 2.png" className="w-[42px] h-[42px] rounded-full object-cover" alt="Avatar" />
            <div className="flex flex-col items-start">
              <span className="text-[10px] md:text-sm font-bold text-[#374754] leading-[15px]">Organize across</span>
              <span className="text-[12.5px] md:text-sm text-[#252b42] font-normal leading-[23px]">Ui designer</span>
            </div>
          </div>
        </div>
        
        <Button className="bg-[#2091f9] hover:bg-blue-600 text-white rounded-[35px] px-[47px] py-[16px] h-auto text-[20px] font-bold leading-[28px]">
          Más Testimonios
        </Button>
      </section>

      {/* PRICING */}
      <section className="flex flex-col items-center w-full py-[100px] md:py-24 px-[28px] md:px-4 bg-[#252b42]">
        <div className="flex flex-col gap-[7px] text-center mb-[80px]">
          <h2 className="text-[48px] leading-[55px] text-white tracking-[0.2px]">Pricing</h2>
          <p className="text-[28px] leading-[40px] text-white tracking-[0.2px] max-w-2xl font-light">
            Tenemos las cotizaciones más competitivas del mercado
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Pricing Card 1 */}
          <div className="bg-white rounded-xl p-10 flex flex-col items-center gap-6 shadow-xl w-full max-w-[340px] mx-auto">
            <div className="text-center">
              <h3 className="text-xl font-bold text-[#252b42] uppercase">Orígenes de<br/>Europa</h3>
            </div>
            <div className="flex items-start justify-center">
              <span className="text-2xl font-bold text-[#252b42] mt-4">$</span>
              <span className="text-7xl font-bold text-[#252b42]">100</span>
              <span className="text-sm text-[#374754] mt-12 ml-2">A partir de</span>
            </div>
            <div className="flex flex-col gap-4 w-full mt-4">
              {['Valencia', 'Barcelona', 'Bilbao', 'Algeciras', 'Y más...'].map((item, i) => (
                <div key={i} className="flex items-center justify-center text-[#252b42] text-lg">
                  {item}
                </div>
              ))}
            </div>
            <Button asChild className="w-full mt-6 bg-[#2091f9] hover:bg-blue-600 text-white rounded-full py-6 text-lg">
              <a href="https://wa.link/nz14jx" target="_blank" rel="noopener noreferrer">Consulta Ahora</a>
            </Button>
          </div>

          {/* Pricing Card 2 (Featured) */}
          <div className="bg-[#2091f9] rounded-xl p-10 flex flex-col items-center gap-6 shadow-2xl transform scale-105 w-full max-w-[340px] mx-auto z-10 border border-[#2091f9]">
            <div className="text-center">
              <h3 className="text-xl font-bold text-white uppercase">Orígenes de<br/>China</h3>
            </div>
            <div className="flex items-start justify-center text-white">
              <span className="text-2xl font-bold mt-4">$</span>
              <span className="text-7xl font-bold">100</span>
              <span className="text-sm mt-12 ml-2">A partir de</span>
            </div>
            <div className="flex flex-col gap-4 w-full mt-4">
              {['Shanghai', 'Shenzhen', 'Shekou', 'Yantian', 'Y más...'].map((item, i) => (
                <div key={i} className="flex items-center justify-center text-white text-lg">
                  {item}
                </div>
              ))}
            </div>
            <Button asChild className="w-full mt-6 bg-white hover:bg-gray-100 text-[#2091f9] rounded-full py-6 text-lg">
              <a href="https://wa.link/nz14jx" target="_blank" rel="noopener noreferrer">Consulta Ahora</a>
            </Button>
          </div>

          {/* Pricing Card 3 */}
          <div className="bg-white rounded-xl p-10 flex flex-col items-center gap-6 shadow-xl w-full max-w-[340px] mx-auto">
            <div className="text-center">
              <h3 className="text-xl font-bold text-[#252b42] uppercase">Orígenes de Turquía<br/>e India</h3>
            </div>
            <div className="flex items-start justify-center">
              <span className="text-2xl font-bold text-[#252b42] mt-4">$</span>
              <span className="text-7xl font-bold text-[#252b42]">100</span>
              <span className="text-sm text-[#374754] mt-12 ml-2">A partir de</span>
            </div>
            <div className="flex flex-col gap-4 w-full mt-4">
              {['Mundra', 'Nhava Sheva', 'Gemlik', 'Estambul', 'y más...'].map((item, i) => (
                <div key={i} className="flex items-center justify-center text-[#252b42] text-lg">
                  {item}
                </div>
              ))}
            </div>
            <Button asChild className="w-full mt-6 bg-[#2091f9] hover:bg-blue-600 text-white rounded-full py-6 text-lg">
              <a href="https://wa.link/nz14jx" target="_blank" rel="noopener noreferrer">Consulta Ahora</a>
            </Button>
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
            <div className="bg-white p-10 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] border border-gray-100 flex flex-col gap-6">
              <h3 className="text-2xl font-bold text-[#252b42]">Contáctanos</h3>
              <Input placeholder="Tu nombre" className="rounded-full bg-gray-50 border-gray-200 py-6 px-6 text-lg" />
              <Input placeholder="Email" type="email" className="rounded-full bg-gray-50 border-gray-200 py-6 px-6 text-lg" />
              <textarea 
                placeholder="Tu mensaje" 
                className="w-full min-h-[150px] p-6 rounded-2xl bg-gray-50 border border-gray-200 text-lg outline-none focus:ring-2 focus:ring-[#2091f9]/50"
              />
              <Button className="bg-[#2091f9] hover:bg-blue-600 text-white rounded-full px-12 py-6 text-lg self-start">
                Enviar
              </Button>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 flex flex-col gap-10">
            <div className="flex flex-col gap-8">
              <div className="flex items-center gap-4">
                <img src="/Trust/img/bx_bx-map.svg" className="w-8 h-8" alt="" />
                <span className="text-lg text-[#374754]">Naguanagua, Venezuela</span>
              </div>
              <div className="flex items-center gap-4">
                <img src="/Trust/img/ic_baseline-phone-android.svg" className="w-8 h-8" alt="" />
                <span className="text-lg text-[#374754]">+58 424-4742482</span>
              </div>
              <div className="flex items-center gap-4">
                <img src="/Trust/img/ant-design_mail-outlined.svg" className="w-8 h-8" alt="" />
                <span className="text-lg text-[#374754]">Ventas1@trustcontainer.com</span>
              </div>
            </div>
            
            <div className="w-full h-[300px] bg-gray-200 rounded-3xl overflow-hidden mt-4 relative shadow-md">
               <img src="/Trust/img/@ map screen.png" className="absolute inset-0 w-full h-full object-cover" alt="Map" />
            </div>
          </div>
      {/* FOOTER */}
      <footer className="w-full py-[50px] md:py-16 bg-[#252b42] px-[20px] md:px-10">
        <div className="max-w-6xl mx-auto flex flex-col justify-center items-center gap-[40px] text-center">
          <img src="/Trust/img/Rectangle 4.png" alt="Trust Container" className="h-[58px] brightness-0 invert object-contain mb-[20px]" />
          <div className="flex flex-col items-center gap-[20px] text-white w-full">
            <div className="flex items-center gap-[10px]">
              <MapPin className="w-[30px] h-[30px]" />
              <span className="text-[20px] leading-[28px] font-bold">Naguanagua, Venezuela</span>
            </div>
            <div className="flex items-center gap-[10px]">
              <Smartphone className="w-[30px] h-[30px]" />
              <span className="text-[20px] leading-[28px] font-bold">+58 424-4742482</span>
            </div>
            <div className="flex gap-[24px] mt-[30px]">
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 rounded-full w-[40px] h-[40px] p-0">
                <img src="/Trust/img/ant-design_twitter-outlined.svg" className="w-full h-full brightness-0 invert" alt="Twitter" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 rounded-full w-[40px] h-[40px] p-0">
                <img src="/Trust/img/ant-design_facebook-filled.svg" className="w-full h-full brightness-0 invert" alt="Facebook" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 rounded-full w-[40px] h-[40px] p-0">
                <img src="/Trust/img/ant-design_linkedin-filled.svg" className="w-full h-full brightness-0 invert" alt="LinkedIn" />
              </Button>
            </div>
          </div>
        </div>
      </footer>iv>
        </div>
      </footer>
    </div>
  );
}
