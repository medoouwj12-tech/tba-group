import React from "react";
import { motion } from "framer-motion";
import { LANDMARKS_DATA } from "../data/landmarks";
import { MapPin, Building, Sparkles } from "lucide-react";

export default function LandmarksSection() {
  return (
    <section id="landmarks" className="py-20 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-100 dark:bg-red-950/60 text-red-600 dark:text-red-400 font-bold text-xs mb-3 border border-red-200 dark:border-red-800">
            <Building className="w-4 h-4" />
            <span>دليل السائح الفاخر</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            إسطنبول <span className="text-red-600">وأبرز معالمها الخالدة</span>
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
            اكتشف سحر المدينة الساحرة التي جمعت الحضارات بين القارتين الأوروبية والآسيوية، ونظم زيارتك لأجمل معالمها التاريخية والطبيعية.
          </p>
        </div>

        {/* Landmarks Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {LANDMARKS_DATA.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:border-red-500/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter brightness-95"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />
                  
                  <span className="absolute top-4 right-4 bg-red-600 text-white text-xs font-black px-3.5 py-1.5 rounded-full shadow-md">
                    {item.tag}
                  </span>

                  <div className="absolute bottom-4 right-4 left-4 text-white">
                    <h3 className="text-xl font-black">{item.title}</h3>
                    <p className="text-xs text-rose-300 flex items-center gap-1 mt-1 font-medium">
                      <MapPin className="w-3.5 h-3.5 text-red-500" />
                      {item.location}
                    </p>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <a
                  href="#tours"
                  className="block text-center w-full py-2.5 rounded-xl border border-red-600/30 text-red-600 dark:text-red-400 hover:bg-red-600 hover:text-white font-bold text-xs transition-colors"
                >
                  استكشف الرحلات المنظمة هنا
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
