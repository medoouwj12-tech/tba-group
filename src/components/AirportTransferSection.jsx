import React, { useState } from "react";
import { motion } from "framer-motion";
import { AIRPORTS_DATA, FLEET_DATA } from "../data/transfers";
import { Car, Plane, CheckCircle2, ShieldCheck, Clock, MapPin, MessageSquare, Sparkles, Users, Luggage } from "lucide-react";
import { createTransferBookingWhatsAppUrl } from "../utils/whatsapp";

export default function AirportTransferSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    airport: "مطار إسطنبول الدولي (IST)",
    flightNumber: "",
    date: "",
    time: "",
    hotel: "",
    vehicle: "مرسيدس فيتو VIP (Mercedes Vito)",
    passengers: "4 ركاب + 4 حقائب"
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const url = createTransferBookingWhatsAppUrl(formData);
    window.open(url, "_blank");
  };

  return (
    <section id="transfers" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Subtle Red Accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/10 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-rose-600/10 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-600/20 text-red-400 font-bold text-xs mb-3 border border-red-500/30">
            <Plane className="w-4 h-4" />
            <span>خدمات الاستقبال والتوصيل VIP</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            حجز <span className="text-red-500">ترانسفير المطارات VIP</span>
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed">
            استقبال مباشر وخاص فور وصول طائرتكم في مطارات إسطنبول بأحدث السيارات الفاخرة وسائقين يتحدثون العربية بأسعار ثابتة بدون مفاجآت.
          </p>
        </div>

        {/* Airports Showcase Cards (Sabiha & Istanbul Airport) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {AIRPORTS_DATA.map((airport, idx) => (
            <motion.div
              key={airport.id}
              initial={{ opacity: 0, x: idx % 2 === 0 ? 30 : -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-slate-800/90 border border-slate-700/80 rounded-3xl overflow-hidden shadow-2xl flex flex-col justify-between hover:border-red-500/50 transition-all duration-300 group"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={airport.image}
                  alt={airport.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
                <span className="absolute top-4 right-4 bg-red-600 text-white font-black px-3.5 py-1 rounded-full text-xs shadow-md">
                  كود المطار: {airport.code}
                </span>
                <div className="absolute bottom-4 right-4 left-4">
                  <h3 className="text-2xl font-black text-white">{airport.name}</h3>
                  <p className="text-xs text-slate-300 flex items-center gap-1 mt-1">
                    <MapPin className="w-3.5 h-3.5 text-red-500" />
                    {airport.location}
                  </p>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {airport.description}
                </p>

                <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-700/60">
                  {airport.features.map((feat, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-200 font-semibold">
                      <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Fleet Showcase Grid */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-white mb-8">
            ✈️ خدمة استقبال وتوصيل المطارات
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {FLEET_DATA.map((car) => (
              <div
                key={car.id}
                className="bg-slate-800/60 border border-slate-700 rounded-3xl p-6 flex flex-col gap-5 hover:border-red-500/40 transition-colors"
              >
                {/* Top: Image + Name */}
                <div className="flex flex-col sm:flex-row items-center gap-5">
                  <div className="w-full sm:w-2/5 h-40 rounded-2xl overflow-hidden relative shrink-0">
                    <img src={car.image} alt={car.name} className="w-full h-full object-cover" />
                    <span className="absolute top-2 right-2 bg-red-600 text-white text-[11px] font-bold px-2.5 py-1 rounded-full">
                      {car.tag}
                    </span>
                  </div>
                  <div className="w-full sm:w-3/5 space-y-2">
                    <h4 className="text-xl font-black text-white">{car.name}</h4>
                    <p className="text-xs text-red-400 font-bold flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {car.capacity}
                    </p>
                    <ul className="space-y-1.5 pt-1">
                      {car.features.map((f, i) => (
                        <li key={i} className="text-xs text-slate-300 flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-green-500 shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Pricing Table */}
                {car.pricing && car.pricing.length > 0 && (
                  <div className="border-t border-slate-700/60 pt-4">
                    <p className="text-[11px] text-slate-400 font-bold uppercase tracking-widest mb-3">
                      💰 الأسعار
                    </p>
                    <div className="grid grid-cols-2 gap-3">
                      {car.pricing.map((p, i) => (
                        <div key={i} className="bg-slate-900/70 rounded-2xl p-3 text-center border border-slate-700/60">
                          <p className="text-[10px] text-slate-400 mb-1 leading-snug">{p.airport}</p>
                          <p className="text-xl font-black text-green-400">{p.price}</p>
                          <p className="text-[10px] text-slate-500">للرحلة كاملة</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Dedicated Quick-Booking Form for Transfers */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-b from-slate-800 to-slate-900 border border-red-500/30 rounded-3xl p-6 sm:p-10 shadow-2xl max-w-4xl mx-auto"
        >
          <div className="flex items-center gap-3 mb-6 border-b border-slate-700 pb-4">
            <div className="w-12 h-12 rounded-2xl bg-red-600/20 text-red-500 flex items-center justify-center font-bold">
              <Car className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-black text-white">استمارة حجز ترانسفير المطار المباشر</h3>
              <p className="text-xs text-slate-400">ادخل بيانات رحلتك وسيتم تحويلك فوراً للواتساب لتأكيد الاستقبال</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            {/* Full Name */}
            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1.5">الاسم الكامل *</label>
              <input
                type="text"
                placeholder="أحمد المحمد"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:ring-2 focus:ring-red-500 focus:outline-none"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1.5">رقم الهاتف / الواتساب *</label>
              <input
                type="tel"
                placeholder="+966 55 123 4567"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:ring-2 focus:ring-red-500 focus:outline-none"
              />
            </div>

            {/* Airport Choice */}
            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1.5">اختر المطار *</label>
              <select
                value={formData.airport}
                onChange={(e) => setFormData({ ...formData, airport: e.target.value })}
                className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white font-semibold focus:ring-2 focus:ring-red-500 focus:outline-none"
              >
                <option value="مطار إسطنبول الدولي (IST)">مطار إسطنبول الدولي (IST) - الأوروبي</option>
                <option value="مطار صبيحة كوكجن (SAW)">مطار صبيحة كوكجن (SAW) - الآسيوي</option>
              </select>
            </div>

            {/* Flight Number */}
            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1.5">رقم الطيران / الهبوط *</label>
              <input
                type="text"
                placeholder="مثال: TK 1420 / SV 260"
                required
                value={formData.flightNumber}
                onChange={(e) => setFormData({ ...formData, flightNumber: e.target.value })}
                className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:ring-2 focus:ring-red-500 focus:outline-none"
              />
            </div>

            {/* Date */}
            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1.5">تاريخ الوصول *</label>
              <input
                type="date"
                required
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:ring-2 focus:ring-red-500 focus:outline-none"
              />
            </div>

            {/* Time */}
            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1.5">توقيت الهبوط المتوقع *</label>
              <input
                type="time"
                required
                value={formData.time}
                onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:ring-2 focus:ring-red-500 focus:outline-none"
              />
            </div>

            {/* Destination Hotel */}
            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1.5">الفندق أو وجهة التوصيل *</label>
              <input
                type="text"
                placeholder="مثال: فندق هيلتون الفاتح / تقسيم"
                required
                value={formData.hotel}
                onChange={(e) => setFormData({ ...formData, hotel: e.target.value })}
                className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:ring-2 focus:ring-red-500 focus:outline-none"
              />
            </div>

            {/* Vehicle Selection */}
            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1.5">نوع السيارة *</label>
              <select
                value={formData.vehicle}
                onChange={(e) => setFormData({ ...formData, vehicle: e.target.value })}
                className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white font-semibold focus:ring-2 focus:ring-red-500 focus:outline-none"
              >
                <option value="مرسيدس فيتو VIP (Mercedes Vito)">مرسيدس فيتو VIP (حتى 7 ركاب)</option>
                <option value="مرسيدس سبرينتر VIP (Mercedes Sprinter)">مرسيدس سبرينتر VIP (حتى 16 راكب)</option>
              </select>
            </div>

            {/* Submit Button spanning full width */}
            <div className="md:col-span-2 pt-4">
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-red-600 via-red-600 to-rose-700 hover:from-red-700 hover:to-rose-800 text-white font-black py-4 rounded-2xl shadow-xl shadow-red-600/30 flex items-center justify-center gap-3 text-base transition-all transform hover:-translate-y-0.5"
              >
                <MessageSquare className="w-5 h-5 animate-pulse" />
                <span>تأكيد حجز الترانسفير عبر الواتساب (+905060977779)</span>
              </button>
            </div>
          </form>
        </motion.div>

      </div>
    </section>
  );
}
