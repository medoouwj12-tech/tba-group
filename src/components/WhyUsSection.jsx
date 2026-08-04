import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Car, Users, Headset, Award, BadgeCheck, CheckCircle } from "lucide-react";

export default function WhyUsSection() {
  const features = [
    {
      icon: Car,
      title: "أحدث فانات مرسيدس VIP",
      description: "أسطول سيارات حديث 2024 مجهز بمقاعد جلد مبردة، شاشات LCD، إنترنت Wi-Fi وسقف نجوم لراحة عائلتك."
    },
    {
      icon: Users,
      title: "سائقون مرخصون يتحدثون العربية",
      description: "فريق سائقين محترفين وعلى دراية تامة بكافة الطرق والمعالم السياحية في إسطنبول والمدن التركية."
    },
    {
      icon: BadgeCheck,
      title: "أسعار ثابتة وبدون زيادات خفية",
      description: "نلتزم بالمصداقية التامة، الدفع يكون نقداً خلال الرحلة وبدون أي رسوم إلغاء أو إضافات مفاجئة."
    },
    {
      icon: Headset,
      title: "دعم ومتابعة عربية 24/7",
      description: "فريق خدمة عملاء متواجد على مدار الساعة لمتابعة رحلاتكم وتنسيق استقبالكم فور وصول الطائرة."
    }
  ];

  return (
    <section id="about" className="py-20 bg-slate-100 dark:bg-slate-900/60 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Content Left/Right */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-600/10 text-red-600 dark:text-red-400 font-bold text-xs border border-red-500/20">
              <Award className="w-4 h-4" />
              <span>عن TBA Group</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white leading-tight">
              لماذا تختار <span className="text-red-600">TBA Group</span> لرحلتك القادمة؟
            </h2>

            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
              شركة <strong className="text-red-600">TBA Group</strong> هي الخيار الأول للمسافرين العرب في تركيا. نحن متخصصون في تقديم خدمات السياحة الفاخرة، والرحلات اليومية الشاملة، واستقبال مطارات إسطنبول بسيارات VIP مخصصة لتلبية أعلى معايير الراحة والرفاهية.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-red-600 shrink-0" />
                <span className="text-sm font-extrabold text-slate-800 dark:text-slate-100">
                  خبرة تمتد لسنوات في قطاع السياحة التركية
                </span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-red-600 shrink-0" />
                <span className="text-sm font-extrabold text-slate-800 dark:text-slate-100">
                  مرونة فائقة في تعديل المواعيد والبرامج السياحية
                </span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-red-600 shrink-0" />
                <span className="text-sm font-extrabold text-slate-800 dark:text-slate-100">
                  استقبال VIP محترف من باب الطائرة وحتى باب الفندق
                </span>
              </div>
            </div>
          </motion.div>

          {/* Cards Grid Right/Left */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((feat, idx) => {
              const Icon = feat.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-white dark:bg-slate-800 p-6 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-lg hover:border-red-500/40 transition-colors"
                >
                  <div className="w-12 h-12 rounded-2xl bg-red-600/10 text-red-600 dark:text-red-400 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-extrabold text-lg text-slate-900 dark:text-white mb-2">
                    {feat.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    {feat.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
