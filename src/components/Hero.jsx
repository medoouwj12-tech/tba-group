import React from "react";
import { motion } from "framer-motion";
import { Compass, Car, ShieldCheck, Star, Sparkles, MapPin, Users, Award, Clock } from "lucide-react";

export default function Hero({ onOpenTourModal }) {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-slate-950">
      {/* Background Image with Dark & Red Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=1920&q=85"
          alt="Istanbul Bosphorus View"
          className="w-full h-full object-cover object-center scale-105 filter brightness-75"
        />
        {/* Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-black/60" />
        <div className="absolute inset-0 bg-radial from-red-600/20 via-transparent to-transparent" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        
        {/* Top Floating Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-red-600/90 backdrop-blur-md text-white px-5 py-2 rounded-full text-xs sm:text-sm font-bold shadow-lg shadow-red-600/30 mb-6 border border-red-400/40"
        >
          <Sparkles className="w-4 h-4 text-yellow-300 animate-spin" />
          <span>تركيا بعيون عربية - أفضل شركة سياحة وترانسفير في إسطنبول 🇹🇷</span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-tight max-w-5xl mx-auto drop-shadow-md"
        >
          عش تجربة الفخامة مع{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-rose-400 to-white">
            TBA GROUP
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-6 text-base sm:text-xl text-slate-200 max-w-3xl mx-auto leading-relaxed font-normal"
        >
          رحلات يومية ساحرة إلى سبانجا، بورصة، وجزر الأميرات، وخدمات ترانسفير المطارات VIP بأحدث فانات المرسيدس مع سائقين يتحدثون العربية.
        </motion.p>

        {/* Call To Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
        >
          {/* CTA 1: Book Tour Now */}
          <a
            href="#tours"
            className="flex items-center justify-center gap-3 w-full sm:w-auto bg-gradient-to-r from-red-600 via-red-600 to-rose-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-4 rounded-2xl font-extrabold text-base sm:text-lg shadow-xl shadow-red-600/40 hover:shadow-red-600/60 transform hover:-translate-y-1 transition-all duration-300 border border-red-500/50 pulse-red"
          >
            <Compass className="w-6 h-6" />
            <span>احجز رحلتك الآن</span>
          </a>

          {/* CTA 2: Airport Transfer */}
          <a
            href="#transfers"
            className="flex items-center justify-center gap-3 w-full sm:w-auto bg-slate-900/80 hover:bg-slate-800/90 text-white px-8 py-4 rounded-2xl font-extrabold text-base sm:text-lg backdrop-blur-md border border-white/20 hover:border-red-500/50 shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <Car className="w-6 h-6 text-red-500" />
            <span>استقبال المطار VIP</span>
          </a>
        </motion.div>

        {/* Feature Highlights Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto"
        >
          <div className="bg-white/10 dark:bg-slate-900/60 backdrop-blur-md p-4 rounded-2xl border border-white/10 text-center hover:border-red-500/40 transition-colors">
            <div className="w-10 h-10 mx-auto mb-2 bg-red-600/20 rounded-xl flex items-center justify-center text-red-500">
              <Users className="w-6 h-6" />
            </div>
            <h4 className="font-extrabold text-xl sm:text-2xl text-white">+15,000</h4>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">سائح عربي سعيد</p>
          </div>

          <div className="bg-white/10 dark:bg-slate-900/60 backdrop-blur-md p-4 rounded-2xl border border-white/10 text-center hover:border-red-500/40 transition-colors">
            <div className="w-10 h-10 mx-auto mb-2 bg-red-600/20 rounded-xl flex items-center justify-center text-red-500">
              <Car className="w-6 h-6" />
            </div>
            <h4 className="font-extrabold text-xl sm:text-2xl text-white">+50 سيارة</h4>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">فانات VIP حديثة</p>
          </div>

          <div className="bg-white/10 dark:bg-slate-900/60 backdrop-blur-md p-4 rounded-2xl border border-white/10 text-center hover:border-red-500/40 transition-colors">
            <div className="w-10 h-10 mx-auto mb-2 bg-red-600/20 rounded-xl flex items-center justify-center text-red-500">
              <Award className="w-6 h-6" />
            </div>
            <h4 className="font-extrabold text-xl sm:text-2xl text-white">4.9 / 5.0</h4>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">تقييم المسافرين</p>
          </div>

          <div className="bg-white/10 dark:bg-slate-900/60 backdrop-blur-md p-4 rounded-2xl border border-white/10 text-center hover:border-red-500/40 transition-colors">
            <div className="w-10 h-10 mx-auto mb-2 bg-red-600/20 rounded-xl flex items-center justify-center text-red-500">
              <Clock className="w-6 h-6" />
            </div>
            <h4 className="font-extrabold text-xl sm:text-2xl text-white">24/7</h4>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">دعم وتواصل عربي</p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
