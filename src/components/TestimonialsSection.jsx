import React from "react";
import { motion } from "framer-motion";
import { TESTIMONIALS_DATA } from "../data/testimonials";
import { FAQS_DATA } from "../data/faqs";
import { Star, Quote, HelpCircle } from "lucide-react";

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Customer Reviews Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-100 dark:bg-red-950/60 text-red-600 dark:text-red-400 font-bold text-xs mb-3 border border-red-200 dark:border-red-800">
            <Quote className="w-4 h-4" />
            <span>آراء عملائنا الأفاضل</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            ماذا يقول المسافرون <span className="text-red-600">عن خدماتنا؟</span>
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-300 text-base sm:text-lg">
            نفخر بخدمة آلاف العائلات والمسافرين العرب سنوياً في تركيا، ويسعدنا مشاركة انطباعاتهم.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {TESTIMONIALS_DATA.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl flex flex-col justify-between relative"
            >
              <Quote className="w-10 h-10 text-red-600/10 dark:text-red-500/20 absolute top-6 left-6 pointer-events-none" />

              <div className="space-y-4">
                {/* Stars */}
                <div className="flex items-center gap-1 text-yellow-400">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-relaxed italic">
                  "{item.text}"
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <div>
                  <h4 className="font-extrabold text-sm text-slate-900 dark:text-white">{item.name}</h4>
                  <span className="text-xs text-red-600 font-bold block">{item.country}</span>
                </div>
                <span className="text-[11px] text-slate-400 bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded-full">
                  {item.tour}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* FAQ Accordion Section */}
        <div className="max-w-4xl mx-auto pt-10 border-t border-slate-200 dark:border-slate-800">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-bold text-xs mb-2">
              <HelpCircle className="w-4 h-4 text-red-600" />
              <span>الأسئلة الشائعة</span>
            </div>
            <h3 className="text-2xl font-black text-slate-900 dark:text-white">
              إجابات على أكثر استفساراتكم تكراراً
            </h3>
          </div>

          <div className="space-y-4">
            {FAQS_DATA.map((faq, i) => (
              <div
                key={i}
                className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-md"
              >
                <h4 className="font-extrabold text-base text-slate-900 dark:text-white flex items-center gap-2 mb-2">
                  <span className="text-red-600">Q:</span> {faq.question}
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed pr-6">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
