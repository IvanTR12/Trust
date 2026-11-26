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
import { t, usesWhatsApp } from "@/i18n";
import { sendInquiry } from "@/lib/inquiry";

interface TrustFullModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function TrustFullModal({ isOpen, onClose }: TrustFullModalProps) {
  const m = t.modal;
  const f = t.modal.fcl;
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [correo, setCorreo] = useState("");
  const [numero, setNumero] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [tipoCarga, setTipoCarga] = useState(f.cargoTypes[0].value);
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
      setErrorMsg(f.errorPersonal);
      return;
    }
    if (!origen.trim() || !destino.trim()) {
      setErrorMsg(f.errorRoute);
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

    // WhatsApp (es/en) o email (zh)
    sendInquiry(`Solicitud de cotización FCL - ${nombre} ${apellido}`, message);
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
                  {f.badge}
                </span>
                <h3 className="text-2xl font-bold text-white leading-tight">
                  {f.title}
                </h3>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-white/80 hover:text-white bg-black/10 hover:bg-black/25 rounded-full p-2 transition-colors"
              aria-label={m.close}
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <p className="text-sm text-blue-100 mt-2 font-light">
            {f.intro}
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
                {f.successTitle}
              </h4>
              <p className="text-slate-600 max-w-md mb-6 text-sm">
                {usesWhatsApp ? f.successWhatsApp : f.successEmail}
              </p>

              {/* Summary Box */}
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 w-full text-left text-xs sm:text-sm text-slate-700 space-y-2 mb-6">
                <div><span className="font-semibold text-slate-900">{m.summaryClient}</span> {nombre} {apellido} {empresa ? `(${empresa})` : ""}</div>
                <div><span className="font-semibold text-slate-900">{f.summaryCargo}</span> {tipoCarga === "Otro" ? otroTipoCarga : f.cargoTypes.find((o) => o.value === tipoCarga)?.label ?? tipoCarga}</div>
                <div><span className="font-semibold text-slate-900">{f.summaryContainers}</span> {nroContenedores}x {tipoContenedor}</div>
                <div><span className="font-semibold text-slate-900">{m.summaryRoute}</span> {origen} ➔ {destino}</div>
                <div><span className="font-semibold text-slate-900">{f.summaryDate}</span> {fechaLista || m.toBeDefined}</div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 w-full justify-center">
                <Button 
                  onClick={handleSubmit} 
                  className="bg-[#2091f9] hover:bg-blue-600 text-white rounded-full py-5 px-6 font-semibold flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  {usesWhatsApp ? m.reopenWhatsApp : m.reopenEmail}
                </Button>
                <Button 
                  variant="outline"
                  onClick={handleReset} 
                  className="rounded-full py-5 px-6"
                >
                  {m.close}
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
                  <span>{f.section1}</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      {m.firstName} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder={f.firstNamePh}
                      value={nombre}
                      onChange={(e) => setNombre(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2091f9] text-sm text-slate-800 transition"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      {m.lastName} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder={f.lastNamePh}
                      value={apellido}
                      onChange={(e) => setApellido(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2091f9] text-sm text-slate-800 transition"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      {m.email} <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                      <input
                        type="email"
                        required
                        placeholder={m.emailPh}
                        value={correo}
                        onChange={(e) => setCorreo(e.target.value)}
                        className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2091f9] text-sm text-slate-800 transition"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      {f.phone} <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                      <input
                        type="tel"
                        required
                        placeholder={f.phonePh}
                        value={numero}
                        onChange={(e) => setNumero(e.target.value)}
                        className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2091f9] text-sm text-slate-800 transition"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      {m.company}
                    </label>
                    <div className="relative">
                      <Building2 className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                      <input
                        type="text"
                        placeholder={f.companyPh}
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
                  <span>{f.section2}</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      {f.cargoType} <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={tipoCarga}
                      onChange={(e) => setTipoCarga(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2091f9] text-sm text-slate-800 transition cursor-pointer"
                    >
                      {f.cargoTypes.map((o) => (
                        <option key={o.value} value={o.value}>{o.label}</option>
                      ))}
                    </select>
                    {tipoCarga === "Otro" && (
                      <input
                        type="text"
                        placeholder={f.cargoOtherPh}
                        value={otroTipoCarga}
                        onChange={(e) => setOtroTipoCarga(e.target.value)}
                        className="mt-2 w-full px-3.5 py-2 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-[#2091f9] text-sm text-slate-800"
                      />
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      {f.containers} <span className="text-red-500">*</span>
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
                        <option value="Open Top / Flat Rack">{f.special}</option>
                      </select>
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      {f.readyDate} <span className="text-red-500">*</span>
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
                  <span>{f.section3}</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      {f.originLabel} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder={f.originPh}
                      value={origen}
                      onChange={(e) => setOrigen(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2091f9] text-sm text-slate-800 transition"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      {f.destLabel} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder={f.destPh}
                      value={destino}
                      onChange={(e) => setDestino(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2091f9] text-sm text-slate-800 transition"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      {f.notes}
                    </label>
                    <textarea
                      rows={2}
                      placeholder={f.notesPh}
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
                  <span>{f.submit}</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <p className="text-center text-xs text-slate-400 mt-2">
                  {f.privacy}
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
