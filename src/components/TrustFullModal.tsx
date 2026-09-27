import React, { useState, useEffect } from "react";
import { 
  X, 
  Ship, 
  CheckCircle2, 
  User, 
  Mail, 
  Phone, 
  Building2, 
  Calendar, 
  MapPin, 
  Layers, 
  ArrowRight,
  Send,
  Sparkles
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface TrustFullModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function TrustFullModal({ isOpen, onClose }: TrustFullModalProps) {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [correo, setCorreo] = useState("");
  const [numero, setNumero] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [tipoCarga, setTipoCarga] = useState("Carga General");
  const [otroTipoCarga, setOtroTipoCarga] = useState("");
  const [nroContenedores, setNroContenedores] = useState("1");
  const [tipoContenedor, setTipoContenedor] = useState("40' High Cube (HQ)");
  const [fechaLista, setFechaLista] = useState("");
  const [origen, setOrigen] = useState("");
  const [destino, setDestino] = useState("Puerto Cabello, Venezuela");
  const [notas, setNotas] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nombre.trim() || !apellido.trim() || !correo.trim() || !numero.trim()) {
      setErrorMsg("Por favor, completa los campos obligatorios de información personal.");
      return;
    }
    if (!origen.trim() || !destino.trim()) {
      setErrorMsg("Por favor, indica el origen y el destino de la carga.");
      return;
    }

    setErrorMsg("");

    const finalTipoCarga = tipoCarga === "Otro" && otroTipoCarga.trim() ? otroTipoCarga.trim() : tipoCarga;

    // Build structured WhatsApp message
    const message = `🚢 *SOLICITUD DE COTIZACIÓN - CONTENEDOR COMPLETO (TRUST FULL)* 🚢

👤 *Datos del Cliente:*
• *Nombre:* ${nombre} ${apellido}
• *Empresa:* ${empresa.trim() || "No especificada"}
• *Correo:* ${correo}
• *Teléfono/WhatsApp:* ${numero}

📦 *Detalles de la Carga:*
• *Tipo de Carga:* ${finalTipoCarga}
• *Nro. de Contenedores:* ${nroContenedores} (${tipoContenedor})
• *Fecha que estará lista:* ${fechaLista || "Por definir"}

📍 *Ruta de Transporte:*
• *Origen:* ${origen}
• *Destino:* ${destino}
${notas.trim() ? `\n📝 *Comentarios adicionales:* ${notas}` : ""}

_Enviado desde el formulario web de Trust Container._`;

    const encoded = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/584244742482?text=${encoded}`;

    // Open WhatsApp
    window.open(whatsappUrl, "_blank");
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm transition-opacity animate-in fade-in duration-200"
        onClick={onClose}
      />

      {/* Modal Dialog Card */}
      <div className="relative bg-white rounded-2xl md:rounded-3xl shadow-2xl max-w-2xl w-full max-h-[92vh] flex flex-col z-10 overflow-hidden border border-slate-100 animate-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-[#1d273b] via-[#2091f9] to-[#1a7cdb] p-6 text-white relative flex-shrink-0">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center shadow-inner">
                <Ship className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-blue-100 bg-white/15 px-2.5 py-0.5 rounded-full inline-block mb-1">
                  Trust Full • FCL
                </span>
                <h3 className="text-2xl font-bold text-white leading-tight">
                  Contenedor Completo
                </h3>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-white/80 hover:text-white bg-black/10 hover:bg-black/25 rounded-full p-2 transition-colors"
              aria-label="Cerrar"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <p className="text-sm text-blue-100 mt-2 font-light">
            Completa la información a continuación y nuestro equipo te enviará la cotización personalizada de forma inmediata.
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6 md:p-8 overflow-y-auto flex-1">
          {isSubmitted ? (
            <div className="flex flex-col items-center text-center py-6">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-4 shadow-md">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-bold text-[#252b42] mb-2">
                ¡Solicitud Registrada con Éxito!
              </h4>
              <p className="text-slate-600 max-w-md mb-6 text-sm">
                Hemos preparado tu requerimiento para <strong>Contenedor Completo (Trust Full)</strong> y se ha iniciado el canal de WhatsApp con un asesor logístico dedicado.
              </p>

              {/* Summary Box */}
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 w-full text-left text-xs sm:text-sm text-slate-700 space-y-2 mb-6">
                <div><span className="font-semibold text-slate-900">Cliente:</span> {nombre} {apellido} {empresa ? `(${empresa})` : ""}</div>
                <div><span className="font-semibold text-slate-900">Tipo de Carga:</span> {tipoCarga === "Otro" ? otroTipoCarga : tipoCarga}</div>
                <div><span className="font-semibold text-slate-900">Contenedores:</span> {nroContenedores}x {tipoContenedor}</div>
                <div><span className="font-semibold text-slate-900">Ruta:</span> {origen} ➔ {destino}</div>
                <div><span className="font-semibold text-slate-900">Fecha de Carga:</span> {fechaLista || "Por coordinar"}</div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 w-full justify-center">
                <Button 
                  onClick={handleSubmit} 
                  className="bg-[#2091f9] hover:bg-blue-600 text-white rounded-full py-5 px-6 font-semibold flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  Abrir WhatsApp nuevamente
                </Button>
                <Button 
                  variant="outline"
                  onClick={handleReset} 
                  className="rounded-full py-5 px-6"
                >
                  Cerrar
                </Button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {errorMsg && (
                <div className="bg-red-50 border border-red-200 text-red-600 text-sm px-4 py-3 rounded-xl flex items-center gap-2">
                  <span>{errorMsg}</span>
                </div>
              )}

              {/* Section 1: Personal Info */}
              <div>
                <div className="flex items-center gap-2 text-sm font-bold text-[#252b42] uppercase tracking-wider mb-3">
                  <User className="w-4 h-4 text-[#2091f9]" />
                  <span>1. Información Personal y de Empresa</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Nombre <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ej. Carlos"
                      value={nombre}
                      onChange={(e) => setNombre(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2091f9] text-sm text-slate-800 transition"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Apellido <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ej. Mendoza"
                      value={apellido}
                      onChange={(e) => setApellido(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2091f9] text-sm text-slate-800 transition"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Correo Electrónico <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                      <input
                        type="email"
                        required
                        placeholder="tu@empresa.com"
                        value={correo}
                        onChange={(e) => setCorreo(e.target.value)}
                        className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2091f9] text-sm text-slate-800 transition"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Número de Contacto / WhatsApp <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                      <input
                        type="tel"
                        required
                        placeholder="Ej. +58 412 1234567"
                        value={numero}
                        onChange={(e) => setNumero(e.target.value)}
                        className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2091f9] text-sm text-slate-800 transition"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Empresa
                    </label>
                    <div className="relative">
                      <Building2 className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                      <input
                        type="text"
                        placeholder="Nombre de tu empresa o negocio"
                        value={empresa}
                        onChange={(e) => setEmpresa(e.target.value)}
                        className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2091f9] text-sm text-slate-800 transition"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 2: Cargo details */}
              <div>
                <div className="flex items-center gap-2 text-sm font-bold text-[#252b42] uppercase tracking-wider mb-3">
                  <Layers className="w-4 h-4 text-[#2091f9]" />
                  <span>2. Información de los Contenedores y Carga</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Tipo de Carga <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={tipoCarga}
                      onChange={(e) => setTipoCarga(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2091f9] text-sm text-slate-800 transition cursor-pointer"
                    >
                      <option value="Carga General (Mercancía Seca)">Carga General (Mercancía Seca)</option>
                      <option value="Maquinaria / Repuestos">Maquinaria / Repuestos</option>
                      <option value="Materia Prima Industrial">Materia Prima Industrial</option>
                      <option value="Electrónica y Tecnología">Electrónica y Tecnología</option>
                      <option value="Textiles / Calzado">Textiles / Calzado</option>
                      <option value="Alimentos no perecederos">Alimentos no perecederos</option>
                      <option value="Refrigerada / Perecedera (Reefer)">Refrigerada / Perecedera (Reefer)</option>
                      <option value="Carga Peligrosa (IMO)">Carga Peligrosa (IMO)</option>
                      <option value="Otro">Otro (Especificar)</option>
                    </select>
                    {tipoCarga === "Otro" && (
                      <input
                        type="text"
                        placeholder="Especifica el tipo de carga"
                        value={otroTipoCarga}
                        onChange={(e) => setOtroTipoCarga(e.target.value)}
                        className="mt-2 w-full px-3.5 py-2 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-[#2091f9] text-sm text-slate-800"
                      />
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Número de Contenedores <span className="text-red-500">*</span>
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      <input
                        type="number"
                        min="1"
                        max="100"
                        required
                        value={nroContenedores}
                        onChange={(e) => setNroContenedores(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2091f9] text-sm text-slate-800 transition"
                      />
                      <select
                        value={tipoContenedor}
                        onChange={(e) => setTipoContenedor(e.target.value)}
                        className="w-full px-2.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2091f9] text-xs text-slate-800 transition cursor-pointer"
                      >
                        <option value="40' High Cube (HQ)">40' HQ</option>
                        <option value="40' Standard (ST)">40' ST</option>
                        <option value="20' Standard (ST)">20' ST</option>
                        <option value="40' Reefer">40' Reefer</option>
                        <option value="Open Top / Flat Rack">Especial</option>
                      </select>
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Fecha en que estará lista la carga <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Calendar className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                      <input
                        type="date"
                        required
                        value={fechaLista}
                        onChange={(e) => setFechaLista(e.target.value)}
                        className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2091f9] text-sm text-slate-800 transition cursor-pointer"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 3: Origin & Destination */}
              <div>
                <div className="flex items-center gap-2 text-sm font-bold text-[#252b42] uppercase tracking-wider mb-3">
                  <MapPin className="w-4 h-4 text-[#2091f9]" />
                  <span>3. Origen y Destino</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Origen (Puerto o Ciudad) <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ej. Ningbo, Shanghái, Miami, etc."
                      value={origen}
                      onChange={(e) => setOrigen(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2091f9] text-sm text-slate-800 transition"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Destino (Puerto o Ciudad) <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ej. Puerto Cabello, La Guaira, etc."
                      value={destino}
                      onChange={(e) => setDestino(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2091f9] text-sm text-slate-800 transition"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Comentarios o Requerimientos Especiales (Opcional)
                    </label>
                    <textarea
                      rows={2}
                      placeholder="Indica cualquier detalle relevante (Incoterm preferido, peso estimado por contenedor, etc.)"
                      value={notas}
                      onChange={(e) => setNotas(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2091f9] text-sm text-slate-800 transition resize-none"
                    />
                  </div>
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <Button
                  type="submit"
                  className="w-full bg-[#2091f9] hover:bg-blue-600 text-white rounded-full py-6 text-base md:text-lg font-bold shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-3 group"
                >
                  <Sparkles className="w-5 h-5 text-amber-300" />
                  <span>Solicitar Cotización de Contenedor Completo</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <p className="text-center text-xs text-slate-400 mt-2">
                  🔒 Tus datos están protegidos. Respuesta garantizada en menos de 24 horas.
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
