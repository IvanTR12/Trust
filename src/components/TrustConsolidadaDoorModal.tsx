import React, { useState, useEffect } from "react";
import { 
  X, 
  Package, 
  CheckCircle2, 
  User, 
  Mail, 
  Phone, 
  Building2, 
  Ship, 
  Plane, 
  DollarSign, 
  Scale, 
  Box, 
  MapPin, 
  ArrowRight,
  Send,
  Sparkles,
  Truck
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { t, usesWhatsApp } from "@/i18n";
import { sendInquiry } from "@/lib/inquiry";

export type ServiceMode = "consolidada" | "door-to-door";

interface TrustConsolidadaDoorModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultMode?: ServiceMode;
}

export function TrustConsolidadaDoorModal({ 
  isOpen, 
  onClose, 
  defaultMode = "consolidada" 
}: TrustConsolidadaDoorModalProps) {
  const m = t.modal;
  const l = t.modal.lcl;
  // Info Personal
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [correo, setCorreo] = useState("");
  const [numero, setNumero] = useState("");
  const [empresa, setEmpresa] = useState("");

  // Carga & Logística
  const [packing, setPacking] = useState("Paletas / Pallets");
  const [packingDetalle, setPackingDetalle] = useState("");
  const [valorFob, setValorFob] = useState("");
  const [volumen, setVolumen] = useState("");
  const [peso, setPeso] = useState("");
  const [unidadPeso, setUnidadPeso] = useState<"kg" | "ton">("kg");
  
  // Modos requeridos por el usuario
  const [tipoTransporte, setTipoTransporte] = useState<"Marítimo" | "Aéreo">("Marítimo");
  const [tipoModalidad, setTipoModalidad] = useState<"Regular" | "DoorToDoor">(
    defaultMode === "door-to-door" ? "DoorToDoor" : "Regular"
  );

  // Origen y Destino
  const [origen, setOrigen] = useState("");
  const [destino, setDestino] = useState("Venezuela");
  const [notas, setNotas] = useState("");

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  // Sync defaultMode when opened
  useEffect(() => {
    if (isOpen) {
      setTipoModalidad(defaultMode === "door-to-door" ? "DoorToDoor" : "Regular");
    }
  }, [defaultMode, isOpen]);

  // Handle escape key
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
      setErrorMsg(l.errorPersonal);
      return;
    }
    if (!volumen.trim() || !peso.trim() || !valorFob.trim()) {
      setErrorMsg(l.errorCargo);
      return;
    }

    setErrorMsg("");

    const fullPacking = packingDetalle.trim() 
      ? `${packing} (${packingDetalle.trim()})`
      : packing;

    // Structured message for WhatsApp
    const message = `📦 *SOLICITUD DE COTIZACIÓN - ${tipoModalidad === "DoorToDoor" ? "DOOR-TO-DOOR (TRUST PREMIUM)" : "CARGA CONSOLIDADA (TRUST EXPRESS)"}* 📦

👤 *Información Personal:*
• *Nombre:* ${nombre} ${apellido}
• *Empresa:* ${empresa.trim() || "No especificada"}
• *Correo:* ${correo}
• *Teléfono/WhatsApp:* ${numero}

📋 *Especificaciones de la Carga:*
• *Modalidad de Servicio:* ${tipoModalidad === "DoorToDoor" ? "Door to Door (Puerta a Puerta)" : "Regular (Puerto a Puerto / LCL)"}
• *Vía de Transporte:* ${tipoTransporte === "Marítimo" ? "🚢 Marítimo" : "✈️ Aéreo"}
• *Packing / Empaque:* ${fullPacking}
• *Valor FOB:* $${valorFob} USD
• *Volumen:* ${volumen} CBM (m³)
• *Peso:* ${peso} ${unidadPeso}

📍 *Ruta:*
• *Origen:* ${origen.trim() || "Por definir"}
• *Destino:* ${destino.trim() || "Por definir"}
${notas.trim() ? `\n📝 *Detalles adicionales:* ${notas}` : ""}

_Enviado desde el formulario web de Trust Container._`;

    // WhatsApp (es/en) o email (zh)
    sendInquiry(
      `Solicitud de cotización ${tipoModalidad === "DoorToDoor" ? "Door-to-Door" : "LCL"} - ${nombre} ${apellido}`,
      message
    );
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  const isDoor = tipoModalidad === "DoorToDoor";
  const serviceName = isDoor ? l.serviceDoor : l.serviceLcl;
  const transportName = tipoTransporte === "Marítimo" ? l.sea : l.air;
  const packingLabel = l.packingTypes.find((o) => o.value === packing)?.label ?? packing;

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
        <div className="bg-gradient-to-r from-[#1e293b] via-[#2091f9] to-[#0ea5e9] p-6 text-white relative flex-shrink-0">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center shadow-inner">
                {isDoor ? <Truck className="w-6 h-6 text-white" /> : <Package className="w-6 h-6 text-white" />}
              </div>
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-blue-100 bg-white/15 px-2.5 py-0.5 rounded-full inline-block mb-1">
                  {isDoor ? l.badgeDoor : l.badgeLcl}
                </span>
                <h3 className="text-2xl font-bold text-white leading-tight">
                  {isDoor ? l.titleDoor : l.titleLcl}
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
            {l.intro}
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
                {l.successTitle}
              </h4>
              <p className="text-slate-600 max-w-md mb-6 text-sm">
                {usesWhatsApp ? l.successWhatsApp(serviceName) : l.successEmail(serviceName)}
              </p>

              {/* Summary Box */}
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 w-full text-left text-xs sm:text-sm text-slate-700 space-y-2 mb-6">
                <div><span className="font-semibold text-slate-900">{m.summaryClient}</span> {nombre} {apellido} {empresa ? `(${empresa})` : ""}</div>
                <div><span className="font-semibold text-slate-900">{l.summaryMode}</span> {isDoor ? l.modeDoor : l.modeRegular} | {transportName}</div>
                <div><span className="font-semibold text-slate-900">{l.summaryPacking}</span> {packingLabel} {packingDetalle ? `(${packingDetalle})` : ""}</div>
                <div><span className="font-semibold text-slate-900">{l.summaryFob}</span> ${valorFob} USD</div>
                <div><span className="font-semibold text-slate-900">{l.summaryVolWeight}</span> {volumen} CBM / {peso} {unidadPeso}</div>
                <div><span className="font-semibold text-slate-900">{m.summaryRoute}</span> {origen || m.notSpecified} ➔ {destino || m.notSpecified}</div>
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

              {/* Toggle 1: Modalidad (Regular vs DoorToDoor) */}
              <div>
                <label className="block text-xs font-bold text-[#252b42] uppercase tracking-wider mb-2">
                  {l.modeLabel} <span className="text-red-500">*</span>
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setTipoModalidad("Regular")}
                    className={`py-3 px-4 rounded-xl font-medium text-sm border flex items-center justify-center gap-2 transition ${
                      tipoModalidad === "Regular"
                        ? "bg-[#2091f9] text-white border-[#2091f9] shadow-md shadow-blue-500/20"
                        : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                    }`}
                  >
                    <Package className="w-4 h-4" />
                    <span>{l.modeRegular}</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setTipoModalidad("DoorToDoor")}
                    className={`py-3 px-4 rounded-xl font-medium text-sm border flex items-center justify-center gap-2 transition ${
                      tipoModalidad === "DoorToDoor"
                        ? "bg-[#2091f9] text-white border-[#2091f9] shadow-md shadow-blue-500/20"
                        : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                    }`}
                  >
                    <Truck className="w-4 h-4" />
                    <span>{l.modeDoor}</span>
                  </button>
                </div>
              </div>

              {/* Toggle 2: Tipo Marítimo vs Aéreo */}
              <div>
                <label className="block text-xs font-bold text-[#252b42] uppercase tracking-wider mb-2">
                  {l.transportLabel} <span className="text-red-500">*</span>
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setTipoTransporte("Marítimo")}
                    className={`py-3 px-4 rounded-xl font-medium text-sm border flex items-center justify-center gap-2 transition ${
                      tipoTransporte === "Marítimo"
                        ? "bg-slate-800 text-white border-slate-800 shadow-sm"
                        : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                    }`}
                  >
                    <Ship className="w-4 h-4 text-sky-400" />
                    <span>{l.sea}</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setTipoTransporte("Aéreo")}
                    className={`py-3 px-4 rounded-xl font-medium text-sm border flex items-center justify-center gap-2 transition ${
                      tipoTransporte === "Aéreo"
                        ? "bg-slate-800 text-white border-slate-800 shadow-sm"
                        : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                    }`}
                  >
                    <Plane className="w-4 h-4 text-sky-400" />
                    <span>{l.air}</span>
                  </button>
                </div>
              </div>

              {/* Section 1: Info Personal */}
              <div>
                <div className="flex items-center gap-2 text-sm font-bold text-[#252b42] uppercase tracking-wider mb-3">
                  <User className="w-4 h-4 text-[#2091f9]" />
                  <span>{l.section1}</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      {m.firstName} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder={l.firstNamePh}
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
                      placeholder={l.lastNamePh}
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
                      {l.phone} <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                      <input
                        type="tel"
                        required
                        placeholder={l.phonePh}
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
                        placeholder={l.companyPh}
                        value={empresa}
                        onChange={(e) => setEmpresa(e.target.value)}
                        className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2091f9] text-sm text-slate-800 transition"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 2: Packing, Valor FOB, Volumen, Peso */}
              <div>
                <div className="flex items-center gap-2 text-sm font-bold text-[#252b42] uppercase tracking-wider mb-3">
                  <Box className="w-4 h-4 text-[#2091f9]" />
                  <span>{l.section2}</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Packing */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      {l.packingLabel} <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={packing}
                      onChange={(e) => setPacking(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2091f9] text-sm text-slate-800 transition cursor-pointer"
                    >
                      {l.packingTypes.map((o) => (
                        <option key={o.value} value={o.value}>{o.label}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      {l.packingDetail}
                    </label>
                    <input
                      type="text"
                      placeholder={l.packingDetailPh}
                      value={packingDetalle}
                      onChange={(e) => setPackingDetalle(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2091f9] text-sm text-slate-800 transition"
                    />
                  </div>

                  {/* Valor FOB */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      {l.fobLabel} <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <DollarSign className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                      <input
                        type="number"
                        min="1"
                        step="any"
                        required
                        placeholder={l.fobPh}
                        value={valorFob}
                        onChange={(e) => setValorFob(e.target.value)}
                        className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2091f9] text-sm text-slate-800 transition"
                      />
                    </div>
                  </div>

                  {/* Volumen */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      {l.volumeLabel} <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Box className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                      <input
                        type="number"
                        min="0.1"
                        step="any"
                        required
                        placeholder={l.volumePh}
                        value={volumen}
                        onChange={(e) => setVolumen(e.target.value)}
                        className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2091f9] text-sm text-slate-800 transition"
                      />
                    </div>
                  </div>

                  {/* Peso */}
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      {l.weightLabel} <span className="text-red-500">*</span>
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      <div className="col-span-2 relative">
                        <Scale className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                        <input
                          type="number"
                          min="1"
                          step="any"
                          required
                          placeholder={l.weightPh}
                          value={peso}
                          onChange={(e) => setPeso(e.target.value)}
                          className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2091f9] text-sm text-slate-800 transition"
                        />
                      </div>
                      <select
                        value={unidadPeso}
                        onChange={(e) => setUnidadPeso(e.target.value as "kg" | "ton")}
                        className="w-full px-2.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2091f9] text-xs font-medium text-slate-800 transition cursor-pointer"
                      >
                        <option value="kg">{l.kg}</option>
                        <option value="ton">{l.ton}</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 3: Rutas */}
              <div>
                <div className="flex items-center gap-2 text-sm font-bold text-[#252b42] uppercase tracking-wider mb-3">
                  <MapPin className="w-4 h-4 text-[#2091f9]" />
                  <span>{l.section3}</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      {l.originLabel}
                    </label>
                    <input
                      type="text"
                      placeholder={l.originPh}
                      value={origen}
                      onChange={(e) => setOrigen(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2091f9] text-sm text-slate-800 transition"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      {isDoor ? l.destLabelDoor : l.destLabelLcl}
                    </label>
                    <input
                      type="text"
                      placeholder={isDoor ? l.destPhDoor : l.destPhLcl}
                      value={destino}
                      onChange={(e) => setDestino(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2091f9] text-sm text-slate-800 transition"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      {l.notes}
                    </label>
                    <textarea
                      rows={2}
                      placeholder={l.notesPh}
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
                  <span>
                    {l.submit(serviceName)}
                  </span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <p className="text-center text-xs text-slate-400 mt-2">
                  {l.privacy}
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
