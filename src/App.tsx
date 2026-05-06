import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { 
  Briefcase, 
  MapPin,
  Smartphone
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
        <header className="absolute top-0 w-full h-[100px] flex items-center justify-between px-10 z-50">
          {/* Empty left div to balance flex space-between if needed, or we just use absolute positioning for center */}
          <div className="flex-1"></div>
          
          {/* Centered Logo */}
          <div className="flex-1 flex justify-center">
            <img src="/Trust/img/Rectangle 4.png" alt="Trust Container" className="h-[58px] brightness-0 invert" />
          </div>

          {/* Right Social Icons */}
          <div className="flex-1 flex justify-end items-center gap-6">
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
        </header>

        {/* HERO CONTENT */}
        <div className="relative z-10 flex flex-col items-center pt-[250px] gap-8 max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-[74px] font-bold text-white tracking-tight leading-tight md:leading-[84px] text-center">
            El mundo es pequeño <br/>
            cuando tienes el aliado correcto.
          </h1>
          <p className="text-xl md:text-[28px] text-white/90 font-light max-w-3xl text-center leading-[40px] mt-4">
            No solo movemos contenedores; movemos oportunidades, <br/>
            sueños y crecimiento para empresas que no conocen fronteras.
          </p>
          <div className="mt-8">
            <Button className="bg-[#2091f9] hover:bg-blue-600 text-white rounded-full px-12 py-8 text-[20px]">
              Cotizar Ahora.
            </Button>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="flex flex-col items-center w-full py-24 px-4 bg-white">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-[#252b42] mb-4">Características del Servicio</h2>
          <p className="text-xl text-[#374754]">¿Por qué elegirnos como tu partner logístico?</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto mb-20">
          <div className="flex flex-col items-center text-center gap-4">
            <div className="bg-blue-50 p-6 rounded-full text-[#2091f9] mb-2 flex items-center justify-center w-24 h-24">
              <img src="/Trust/img/mdi_drawing.svg" className="w-12 h-12" alt="" />
            </div>
            <h3 className="text-2xl font-bold text-[#252b42]">Alcance Global</h3>
            <p className="text-lg text-[#374754] max-w-xs">
              Llegamos a donde tu negocio necesite estar con transporte multimodal marítimo, aéreo y terrestre.
            </p>
          </div>
          
          <div className="flex flex-col items-center text-center gap-4">
            <div className="bg-blue-50 p-6 rounded-full text-[#2091f9] mb-2 flex items-center justify-center w-24 h-24">
              <img src="/Trust/img/mdi_draw.svg" className="w-12 h-12" alt="" />
            </div>
            <h3 className="text-2xl font-bold text-[#252b42]">Seguridad Total</h3>
            <p className="text-lg text-[#374754] max-w-xs">
              Cuidamos tu carga como si fuera nuestra, ofreciendo seguros a todo riesgo para proteger tu inversión.
            </p>
          </div>
          
          <div className="flex flex-col items-center text-center gap-4">
            <div className="bg-blue-50 p-6 rounded-full text-[#2091f9] mb-2 flex items-center justify-center w-24 h-24">
              <img src="/Trust/img/mdi_brush.svg" className="w-12 h-12" alt="" />
            </div>
            <h3 className="text-2xl font-bold text-[#252b42]">Experiencia Real</h3>
            <p className="text-lg text-[#374754] max-w-xs">
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
      <section className="flex flex-col md:flex-row items-center justify-center w-full py-24 px-10 bg-gray-50 gap-16">
        <div className="flex flex-col gap-8 max-w-lg">
          <h2 className="text-4xl md:text-5xl text-[#252b42] font-normal leading-tight">
            Trust Express: Eficiencia en envíos LCL
          </h2>
          <p className="text-xl md:text-2xl text-[#374754] font-light">
            La solución perfecta para quienes buscan enviar carga consolidada o servicio Door-to-Door sin necesidad de completar un contenedor.
          </p>
          <Button className="bg-[#2091f9] hover:bg-blue-600 text-white rounded-full px-10 py-6 text-xl self-start">
            Ver Servicios
          </Button>
        </div>
        
        <div className="relative w-full max-w-2xl bg-white p-4 rounded-xl shadow-xl">
          <div className="aspect-[16/10] bg-gray-200 rounded-lg overflow-hidden flex items-center justify-center relative">
             <img src="/Trust/img/SCREEN MASK.png" className="absolute inset-0 w-full h-full object-cover" alt="Platform Preview" />
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="flex flex-col md:flex-row items-center justify-between w-full py-24 px-10 max-w-7xl mx-auto gap-16">
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="relative w-full max-w-md aspect-square bg-blue-50 rounded-full flex items-center justify-center">
             <Briefcase className="w-32 h-32 text-[#2091f9]" />
          </div>
        </div>
        <div className="w-full md:w-1/2 flex flex-col gap-6">
          <h3 className="text-xl font-bold text-[#252b42]">Al alcance de tus manos</h3>
          <h2 className="text-4xl md:text-5xl text-[#252b42] font-normal leading-tight mb-4">
            Control total de tu operación con Incoterms FOB
          </h2>
          <p className="text-xl font-bold text-[#252b42]">
            Te ayudamos a migrar de CIF a FOB para que tú elijas los tiempos
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-8 w-full max-w-lg">
            <Input 
              placeholder="Email" 
              className="rounded-full bg-gray-100 border-gray-200 py-6 px-6 text-lg w-full"
            />
            <Button className="bg-[#2091f9] hover:bg-blue-600 text-white rounded-full px-8 py-6 text-lg w-full sm:w-auto">
              Subscríbete
            </Button>
          </div>
        </div>
      </section>

      <Separator className="w-full max-w-7xl mx-auto" />

      {/* PARTNERS */}
      <section className="flex flex-col items-center w-full py-24 px-4 bg-white">
        <h2 className="text-4xl md:text-5xl text-[#252b42] text-center mb-6">Confían en nosotros</h2>
        <p className="text-xl md:text-2xl text-[#374754] text-center max-w-2xl font-light mb-16">
          En Trust Container, nuestra mayor preocupación siempre es la comodidad de nuestros clientes
        </p>
        
        <div className="flex flex-wrap justify-center items-center gap-12 max-w-6xl mx-auto">
          <img src="/Trust/img/logos_google.svg" alt="Google" className="h-12 object-contain grayscale opacity-50 hover:opacity-100 hover:grayscale-0 transition-all" />
          <img src="/Trust/img/Rectangle.png" alt="Partner 1" className="h-12 object-contain grayscale opacity-50 hover:opacity-100 hover:grayscale-0 transition-all" />
          <img src="/Trust/img/Rectangle-1.png" alt="Partner 2" className="h-12 object-contain grayscale opacity-50 hover:opacity-100 hover:grayscale-0 transition-all" />
          <img src="/Trust/img/Rectangle-2.png" alt="Partner 3" className="h-12 object-contain grayscale opacity-50 hover:opacity-100 hover:grayscale-0 transition-all" />
          <img src="/Trust/img/Rectangle-3.png" alt="Partner 4" className="h-12 object-contain grayscale opacity-50 hover:opacity-100 hover:grayscale-0 transition-all" />
          <img src="/Trust/img/logos_ibm.svg" alt="IBM" className="h-12 object-contain grayscale opacity-50 hover:opacity-100 hover:grayscale-0 transition-all" />
        </div>
        
        <div className="mt-16">
          <Button className="bg-[#2091f9] hover:bg-blue-600 text-white rounded-full px-10 py-6 text-xl">
            Contactar
          </Button>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="flex flex-col items-center w-full py-24 px-4 bg-gray-50 border-t border-b border-gray-200">
        <h2 className="text-4xl md:text-5xl text-[#252b42] text-center mb-16">Testimonios</h2>
        
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto gap-8 mb-12">
          <div className="text-4xl text-[#2091f9] font-serif">"</div>
          <p className="text-2xl md:text-3xl text-[#374754] font-light leading-relaxed">
            En Trust Container, la logística dejó de ser una preocupación para convertirse en nuestra mayor ventaja competitiva.
          </p>
          <div className="flex items-center gap-4 mt-6">
            <Avatar className="w-16 h-16 border-2 border-[#2091f9]">
              <AvatarImage src="/Trust/img/Ellipse 2.png" alt="Ivan Tortolero" />
              <AvatarFallback>IT</AvatarFallback>
            </Avatar>
            <div className="flex flex-col items-start">
              <span className="text-lg font-bold text-[#374754]">Ivan Tortolero</span>
              <span className="text-md text-[#252b42]">CEO de EPA</span>
            </div>
          </div>
        </div>
        
        <Button className="bg-[#2091f9] hover:bg-blue-600 text-white rounded-full px-10 py-6 text-xl">
          Más Testimonios
        </Button>
      </section>

      {/* PRICING */}
      <section className="flex flex-col items-center w-full py-24 px-4 bg-[#252b42]">
        <h2 className="text-4xl md:text-5xl text-white text-center mb-6">Pricing</h2>
        <p className="text-xl md:text-2xl text-white/90 text-center max-w-2xl font-light mb-16">
          Tenemos las cotizaciones más competitivas del mercado
        </p>
        
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
            <Button className="w-full mt-6 bg-[#2091f9] hover:bg-blue-600 text-white rounded-full py-6 text-lg">
              Consulta Ahora
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
            <Button className="w-full mt-6 bg-white hover:bg-gray-100 text-[#2091f9] rounded-full py-6 text-lg">
              Consulta Ahora
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
            <Button className="w-full mt-6 bg-[#2091f9] hover:bg-blue-600 text-white rounded-full py-6 text-lg">
              Consulta Ahora
            </Button>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="flex flex-col items-center w-full py-24 px-4 bg-white border-t border-gray-100">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-[#252b42] mb-4">¿Listo para importar sin estrés?</h2>
          <p className="text-xl text-[#374754]">Queremos conocer tu proyecto y diseñarte la ruta más eficiente.</p>
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
        </div>
      </section>

      {/* FOOTER */}
      <footer className="w-full py-16 bg-[#252b42] px-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <img src="/Trust/img/Rectangle 4.png" alt="Trust Container" className="h-8 brightness-0 invert" />
          <div className="flex flex-col sm:flex-row gap-8 items-start sm:items-center">
            <div className="flex items-center gap-3 text-white/90">
              <MapPin className="w-5 h-5" />
              <span>Naguanagua, Venezuela</span>
            </div>
            <div className="flex items-center gap-3 text-white/90">
              <Smartphone className="w-5 h-5" />
              <span>+58 424-4742482</span>
            </div>
            <div className="flex gap-4 ml-0 sm:ml-8">
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 hover:text-white rounded-full">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 hover:text-white rounded-full">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/></svg>
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 hover:text-white rounded-full">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 114.126 0 2.062 2.062 0 01-2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
