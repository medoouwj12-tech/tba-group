import React, { useState } from "react";
import { motion } from "framer-motion";
import { TOURS_DATA, TOUR_CATEGORIES } from "../data/tours";
import { Star, Clock, CheckCircle2, ArrowRight, Compass, MapPin, Zap, Car, Bus, Crown, MessageSquare, ShieldCheck, Sparkles } from "lucide-react";
import { createGeneralInquiryWhatsAppUrl } from "../utils/whatsapp";

export default function ToursSection({ onBookTour }) {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredTours = activeCategory === "all"
    ? TOURS_DATA
    : TOURS_DATA.filter((tour) => tour.category === activeCategory);

  const groupTours = TOURS_DATA.filter((t) => t.category === "group");
  const vipTours = TOURS_DATA.filter((t) => t.category === "vip");

  return (
    <section id="tours" className="py-20 bg-slate-50 dark:bg-slate-900/50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-100 dark:bg-red-950/60 text-red-600 dark:text-red-400 font-bold text-xs mb-3 border border-red-200 dark:border-red-800">
            <Compass className="w-4 h-4" />
            <span>برامج توركيا بعيون عربية السياحية</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            الرحلات السياحية <span className="text-red-600">الجماعية والخاصة</span>
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
            اختر بين <strong>رحلات جماعية بباص</strong> شاملة وجاهزة، أو <strong>رحلات بسيارة خاصة VIP</strong> بمرسيدس فيتو تمنحك وعائلتك الراحة والحرية التامة.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {TOUR_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-3 rounded-2xl text-xs sm:text-sm font-black transition-all duration-300 flex items-center gap-2 ${
                activeCategory === cat.id
                  ? "bg-red-600 text-white shadow-lg shadow-red-600/30 scale-105"
                  : "bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700"
              }`}
            >
              {cat.id === "group" && <Bus className="w-4 h-4" />}
              {cat.id === "vip" && <Crown className="w-4 h-4" />}
              <span>{cat.label}</span>
            </button>
          ))}
        </div>

        {/* Tour Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTours.map((tour, idx) => (
            <motion.div
              key={tour.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group bg-white dark:bg-slate-800/90 rounded-3xl overflow-hidden shadow-xl border border-slate-100 dark:border-slate-700/60 hover:border-red-500/40 transition-all duration-300 flex flex-col justify-between transform hover:-translate-y-2"
            >
              {/* Card Image Header */}
              <div>
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={tour.image}
                    alt={tour.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />
                  
                  {/* Badge */}
                  <span className="absolute top-4 right-4 bg-red-600 text-white px-3.5 py-1.5 rounded-full text-xs font-black shadow-md">
                    {tour.badge}
                  </span>

                  {/* Rating */}
                  <div className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-md text-yellow-400 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 fill-yellow-400" />
                    <span>{tour.rating}</span>
                    <span className="text-slate-300 text-[10px]">({tour.reviewsCount})</span>
                  </div>

                  {/* Duration + Category overlay */}
                  <div className="absolute bottom-3 right-4 left-4 flex items-center justify-between text-white text-xs font-medium">
                    <span className="flex items-center gap-1 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-bold">
                      <Clock className="w-3.5 h-3.5 text-red-400" />
                      {tour.duration}
                    </span>
                    <span className="bg-red-950/80 backdrop-blur-md text-red-300 px-2.5 py-1 rounded-full text-[11px] font-bold flex items-center gap-1">
                      {tour.category === "vip" ? <Crown className="w-3 h-3 text-amber-400" /> : <Bus className="w-3 h-3 text-blue-400" />}
                      {tour.categoryLabel}
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-lg font-black text-slate-900 dark:text-white leading-snug group-hover:text-red-600 transition-colors">
                      {tour.title}
                    </h3>
                    <p className="mt-1.5 text-xs text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-2">
                      {tour.subtitle}
                    </p>
                  </div>

                  {/* What's Included */}
                  <div className="pt-3 border-t border-slate-100 dark:border-slate-700/50">
                    <p className="text-[10px] font-black text-green-600 dark:text-green-400 uppercase tracking-wider mb-2 flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      يشمل السعر
                    </p>
                    <div className="space-y-1.5">
                      {tour.includes.map((item, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300 font-medium leading-snug">
                          <span className="shrink-0 mt-0.5 text-green-500">✓</span>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Stops / Highlights */}
                  {tour.stops && tour.stops.length > 0 && (
                    <div className="pt-3 border-t border-slate-100 dark:border-slate-700/50">
                      <p className="text-[10px] font-black text-red-600 dark:text-red-400 uppercase tracking-wider mb-2 flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" />
                        محطات الرحلة
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {tour.stops.slice(0, 4).map((stop, i) => (
                          <span key={i} className="bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 px-2 py-0.5 rounded-lg text-[10px] font-semibold">
                            {stop}
                          </span>
                        ))}
                        {tour.stops.length > 4 && (
                          <span className="bg-red-50 dark:bg-red-950/50 text-red-600 dark:text-red-400 px-2 py-0.5 rounded-lg text-[10px] font-bold">
                            +{tour.stops.length - 4} أكثر
                          </span>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Optional Activities */}
                  {tour.optionals && tour.optionals.length > 0 && (
                    <div className="pt-3 border-t border-slate-100 dark:border-slate-700/50">
                      <p className="text-[10px] font-black text-amber-600 dark:text-amber-400 uppercase tracking-wider mb-2 flex items-center gap-1">
                        <Zap className="w-3.5 h-3.5" />
                        أنشطة إضافية اختيارية
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {tour.optionals.map((opt, i) => (
                          <span key={i} className="bg-amber-50 dark:bg-amber-950/30 text-amber-700 dark:text-amber-300 px-2 py-0.5 rounded-lg text-[10px] font-semibold border border-amber-200/60 dark:border-amber-700/30">
                            {opt}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Card Footer: Clean Price & CTA */}
              <div className="p-6 pt-0 mt-auto">
                <div className="pt-4 border-t border-slate-100 dark:border-slate-700/50 flex items-center justify-between gap-3">
                  <div className="min-w-0">
                    <span className="text-[10px] text-slate-500 dark:text-slate-400 block font-semibold">
                      السعر الثابت
                    </span>
                    <div className="flex items-baseline gap-2 flex-wrap">
                      <span className="text-xl font-black text-red-600 dark:text-red-500">
                        {tour.price} {tour.currency}
                      </span>
                      {tour.originalPrice && (
                        <span className="text-xs text-slate-400 line-through">
                          {tour.originalPrice} {tour.currency}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Book Now Button */}
                  <button
                    onClick={() => onBookTour(tour)}
                    className="shrink-0 flex items-center gap-1.5 bg-gradient-to-r from-red-600 to-rose-700 hover:from-red-700 hover:to-rose-800 text-white px-4 py-2.5 rounded-2xl text-xs font-black shadow-md shadow-red-600/30 transition-all transform hover:scale-105 active:scale-95"
                  >
                    <span>احجز الآن</span>
                    <ArrowRight className="w-3.5 h-3.5 rotate-180" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dedicated Special Section: VIP Private Car Booking Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 border-2 border-amber-500/40 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden text-white"
        >
          <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full filter blur-3xl pointer-events-none" />
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/20 text-amber-400 text-xs font-black border border-amber-500/30">
                <Crown className="w-4 h-4 text-amber-400" />
                <span>حجز رحلات بسيارة خاصة VIP</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                هل تفضل الراحة والخصوصية العائلية التامة؟
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                نوفر لك أفخم فانات مرسيدس فيتو VIP المزودة بمقاعد مريحة ورعاية خاصة مع سائق عربي محترف لتستمتع بجولتك السياحية بدون التقيد بمواعيد الباصات الجماعية.
              </p>
              
              {/* Quick Private Price Highlights */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                <div className="bg-slate-800/80 border border-slate-700 rounded-2xl p-3 text-center">
                  <p className="text-[10px] text-slate-400 font-semibold">إسطنبول الأوروبية</p>
                  <p className="text-lg font-black text-amber-400">120 $</p>
                </div>
                <div className="bg-slate-800/80 border border-slate-700 rounded-2xl p-3 text-center">
                  <p className="text-[10px] text-slate-400 font-semibold">إسطنبول الآسيوية</p>
                  <p className="text-lg font-black text-amber-400">130 $</p>
                </div>
                <div className="bg-slate-800/80 border border-slate-700 rounded-2xl p-3 text-center">
                  <p className="text-[10px] text-slate-400 font-semibold">سبانجا ومعشوقية</p>
                  <p className="text-lg font-black text-amber-400">175 $</p>
                </div>
                <div className="bg-slate-800/80 border border-slate-700 rounded-2xl p-3 text-center">
                  <p className="text-[10px] text-slate-400 font-semibold">رحلة بورصة</p>
                  <p className="text-lg font-black text-amber-400">280 $</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col justify-center items-center bg-amber-500/10 border border-amber-500/30 rounded-2xl p-6 text-center space-y-4">
              <Car className="w-12 h-12 text-amber-400 animate-pulse" />
              <div>
                <h4 className="text-lg font-black text-white">احجز رحلتك الخاصة الآن</h4>
                <p className="text-xs text-slate-300 mt-1">سائق خاص سيقوم باستقبالكم من الفندق في الوقت المحدد</p>
              </div>
              <a
                href={createGeneralInquiryWhatsAppUrl("مرحباً TBA Group 🇹🇷 أود حجز رحلة سياحية بسيارة عائلية خاصة VIP.")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-black py-3.5 rounded-2xl flex items-center justify-center gap-2 shadow-xl shadow-amber-500/20 transition-all transform hover:scale-105"
              >
                <MessageSquare className="w-5 h-5" />
                <span>حجز سيارة خاصة VIP عبر الواتساب</span>
              </a>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
