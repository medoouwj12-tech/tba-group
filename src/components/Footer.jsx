import React from "react";
import { Phone, Mail, MapPin, MessageSquare, Compass, Car, Building, Info, Heart } from "lucide-react";
import { createGeneralInquiryWhatsAppUrl } from "../utils/whatsapp";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-12">
          
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-4">
            <a href="#" className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-red-600 shadow-md shrink-0">
                <img
                  src="/logo.jpg"
                  alt="TBA Group Logo"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://placehold.co/100x100/DC2626/ffffff?text=TBA";
                  }}
                />
              </div>
              <div>
                <span className="font-black text-2xl text-white tracking-wide block">
                  TBA <span className="text-red-600">GROUP</span>
                </span>
                <span className="text-xs text-red-500 font-semibold">
                  تركيا بعيون عربية
                </span>
              </div>
            </a>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed pt-2">
              الرواد في تقديم خدمات السياحة الفاخرة، الرحلات اليومية الشاملة، واستقبال مطارات إسطنبول بأحدث فانات مرسيدس VIP وسائقين يتقنون اللغة العربية.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={createGeneralInquiryWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-10 h-10 rounded-full bg-slate-800 hover:bg-emerald-600 text-white flex items-center justify-center transition-colors"
              >
                <MessageSquare className="w-5 h-5" />
              </a>
              <a
                href="mailto:info@tbagroup.com"
                aria-label="Email"
                className="w-10 h-10 rounded-full bg-slate-800 hover:bg-red-600 text-white flex items-center justify-center transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="tel:+905060977779"
                aria-label="Phone"
                className="w-10 h-10 rounded-full bg-slate-800 hover:bg-red-600 text-white flex items-center justify-center transition-colors"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-white font-extrabold text-base border-b border-slate-800 pb-2">
              روابط سريعة
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a href="#tours" className="hover:text-red-500 transition-colors flex items-center gap-2">
                  <Compass className="w-4 h-4 text-red-600" />
                  <span>الرحلات السياحية اليومية</span>
                </a>
              </li>
              <li>
                <a href="#transfers" className="hover:text-red-500 transition-colors flex items-center gap-2">
                  <Car className="w-4 h-4 text-red-600" />
                  <span>ترانسفير المطارات VIP</span>
                </a>
              </li>
              <li>
                <a href="#landmarks" className="hover:text-red-500 transition-colors flex items-center gap-2">
                  <Building className="w-4 h-4 text-red-600" />
                  <span>دليل معالم إسطنبول</span>
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-red-500 transition-colors flex items-center gap-2">
                  <Info className="w-4 h-4 text-red-600" />
                  <span>عن شركة TBA Group</span>
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-red-500 transition-colors flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-red-600" />
                  <span>تواصل معنا للحجز</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-5 space-y-4">
            <h4 className="text-white font-extrabold text-base border-b border-slate-800 pb-2">
              معلومات الاتصال المباشر
            </h4>
            <div className="space-y-3 text-xs sm:text-sm">
              <div className="flex items-center gap-3 text-slate-300">
                <Phone className="w-4 h-4 text-red-600 shrink-0" />
                <span>الهاتف والواتساب: </span>
                <a href="https://wa.me/905060977779" target="_blank" rel="noopener noreferrer" className="font-bold text-white hover:text-red-400 dir-ltr">
                  +90 506 097 77 79
                </a>
              </div>

              <div className="flex items-center gap-3 text-slate-300">
                <Mail className="w-4 h-4 text-red-600 shrink-0" />
                <span>البريد الإلكتروني: </span>
                <a href="mailto:info@tbagroup.com" className="font-bold text-white hover:text-red-400">
                  info@tbagroup.com
                </a>
              </div>

              <div className="flex items-center gap-3 text-slate-300">
                <MapPin className="w-4 h-4 text-red-600 shrink-0" />
                <span>العنوان: إسطنبول، تركيا</span>
              </div>
            </div>

            <div className="pt-2">
              <div className="p-4 bg-slate-900 border border-slate-800 rounded-2xl flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-emerald-500 animate-ping" />
                <span className="text-xs text-slate-300 font-bold">
                  فريقنا متواجد أونلاين الآن ومستعد لاستقبال حجوزاتكم.
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} TBA Group. جميع الحقوق محفوظة - تركيا بعيون عربية.</p>
          <p className="flex items-center gap-1">
            صُمم بخصائص الفخامة والأناقة لخدمة زوار تركيا
          </p>
        </div>

      </div>
    </footer>
  );
}
