import React, { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, MessageSquare, Clock, Send, CheckCircle2 } from "lucide-react";
import { createGeneralInquiryWhatsAppUrl } from "../utils/whatsapp";

export default function ContactSection() {
  const [msgData, setMsgData] = useState({
    name: "",
    phone: "",
    subject: "استفسار عام",
    message: ""
  });

  const handleSend = (e) => {
    e.preventDefault();
    const text = `السلام عليكم ورحمة الله، أنا ${msgData.name}\nرقم التواصل: ${msgData.phone}\nموضوع الرسالة: ${msgData.subject}\nتفاصيل الاستفسار:\n${msgData.message}`;
    const url = createGeneralInquiryWhatsAppUrl(text);
    window.open(url, "_blank");
  };

  return (
    <section id="contact" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-600/20 text-red-400 font-bold text-xs mb-3 border border-red-500/30">
            <MessageSquare className="w-4 h-4" />
            <span>نحن هنا لخدمتك دائماً</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            تواصل معنا <span className="text-red-500">في أي وقت</span>
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            فريق خدمة العملاء جاهز للرد على استفساراتكم وتنسيق حجزكم في إسطنبول وجميع أنحاء تركيا على مدار الساعة.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Contact Details Card */}
          <div className="lg:col-span-5 bg-slate-800/80 border border-slate-700 rounded-3xl p-8 space-y-8 flex flex-col justify-between">
            <div className="space-y-6">
              <h3 className="text-2xl font-black text-white border-b border-slate-700 pb-4">
                معلومات الاتصال المباشر
              </h3>

              {/* Phone / WhatsApp */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-red-600/20 text-red-500 flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 font-semibold block">الهاتف والواتساب المباشر</span>
                  <a
                    href="https://wa.me/905060977779"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-extrabold text-white hover:text-red-400 transition-colors dir-ltr block text-right mt-0.5"
                  >
                    +90 506 097 77 79
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-red-600/20 text-red-500 flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 font-semibold block">البريد الإلكتروني الرسمي</span>
                  <a
                    href="mailto:info@tbagroup.com"
                    className="text-lg font-bold text-white hover:text-red-400 transition-colors block mt-0.5"
                  >
                    info@tbagroup.com
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-red-600/20 text-red-500 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 font-semibold block">مقر الشركة والموقع</span>
                  <p className="text-sm font-bold text-white mt-0.5">
                    إسطنبول - تركيا (الفاتح / تقسيم)
                  </p>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-red-600/20 text-red-500 flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 font-semibold block">ساعات العمل والدعم</span>
                  <p className="text-sm font-bold text-white mt-0.5">
                    24 ساعة / 7 أيام في الأسبوع
                  </p>
                </div>
              </div>
            </div>

            {/* Quick WhatsApp button */}
            <div className="pt-4 border-t border-slate-700">
              <a
                href={createGeneralInquiryWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold py-3.5 rounded-2xl flex items-center justify-center gap-3 transition-colors shadow-lg shadow-emerald-600/20"
              >
                <MessageSquare className="w-5 h-5" />
                <span>محادثة واتساب فورية</span>
              </a>
            </div>
          </div>

          {/* Quick Contact Form */}
          <div className="lg:col-span-7 bg-slate-800/40 border border-slate-700/60 rounded-3xl p-8">
            <h3 className="text-2xl font-black text-white mb-6">أرسل استفسارك السريع</h3>
            <form onSubmit={handleSend} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1.5">الاسم *</label>
                  <input
                    type="text"
                    required
                    placeholder="اسمك الكريم"
                    value={msgData.name}
                    onChange={(e) => setMsgData({ ...msgData, name: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:ring-2 focus:ring-red-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1.5">رقم الواتساب *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+966 50 000 0000"
                    value={msgData.phone}
                    onChange={(e) => setMsgData({ ...msgData, phone: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:ring-2 focus:ring-red-500 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1.5">موضوع الاستفسار</label>
                <input
                  type="text"
                  placeholder="حجز رحلة خاصة / ترانسفير مطار / برنامج كامل"
                  value={msgData.subject}
                  onChange={(e) => setMsgData({ ...msgData, subject: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:ring-2 focus:ring-red-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1.5">نص الرسالة أو التفاصيل *</label>
                <textarea
                  rows="4"
                  required
                  placeholder="اكتب تفاصيل حجزك المفضل، عدد الأشخاص، والتواريخ المتوقعة..."
                  value={msgData.message}
                  onChange={(e) => setMsgData({ ...msgData, message: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:ring-2 focus:ring-red-500 focus:outline-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white font-extrabold py-4 rounded-2xl flex items-center justify-center gap-2 transition-colors shadow-lg shadow-red-600/30"
              >
                <Send className="w-5 h-5 rotate-180" />
                <span>إرسال الاستفسار عبر الواتساب</span>
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
