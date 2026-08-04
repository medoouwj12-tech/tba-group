import React, { useState, useEffect } from "react";
import { useTheme } from "../context/ThemeContext";
import { Sun, Moon, PhoneCall, Menu, X, MessageSquare, Compass, Car, Building, Info, MessageCircle } from "lucide-react";
import { createGeneralInquiryWhatsAppUrl } from "../utils/whatsapp";

export default function Navbar({ onOpenTourModal }) {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "الرحلات السياحية", href: "#tours", icon: Compass },
    { name: "ترانسفير المطارات", href: "#transfers", icon: Car },
    { name: "معالم إسطنبول", href: "#landmarks", icon: Building },
    { name: "عن الشركة", href: "#about", icon: Info },
    { name: "تواصل معنا", href: "#contact", icon: MessageCircle }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "glass-effect shadow-lg py-2.5 border-b border-red-600/10 dark:border-red-500/20"
          : "bg-gradient-to-b from-black/80 via-black/40 to-transparent py-4 text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo Section */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative w-11 h-11 rounded-full overflow-hidden border-2 border-red-600 shadow-md transform group-hover:scale-105 transition-transform duration-300">
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
            <div className="flex flex-col">
              <span className={`font-extrabold text-xl tracking-wide ${isScrolled ? "text-slate-900 dark:text-white" : "text-white"}`}>
                TBA <span className="text-red-600">GROUP</span>
              </span>
              <span className="text-[10px] text-red-500 font-semibold tracking-wider">
                تركيا بعيون عربية
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`flex items-center gap-1.5 font-medium text-sm transition-colors duration-200 hover:text-red-600 ${
                    isScrolled
                      ? "text-slate-700 dark:text-slate-200 dark:hover:text-red-500"
                      : "text-slate-100 hover:text-red-400"
                  }`}
                >
                  <Icon className="w-4 h-4 text-red-500" />
                  <span>{link.name}</span>
                </a>
              );
            })}
          </nav>

          {/* Action Controls */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Dark/Light Mode Toggle */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle Theme"
              className={`p-2.5 rounded-full transition-all duration-300 ${
                isScrolled
                  ? "bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-yellow-400 hover:bg-slate-200 dark:hover:bg-slate-700"
                  : "bg-white/10 text-yellow-300 hover:bg-white/20 backdrop-blur-md"
              }`}
              title={theme === "dark" ? "الوضع المضيء" : "الوضع الداكن"}
            >
              {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            {/* Direct WhatsApp CTA Button */}
            <a
              href={createGeneralInquiryWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-4 py-2.5 rounded-full text-xs font-bold shadow-md shadow-red-600/30 hover:shadow-lg hover:shadow-red-600/40 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <MessageSquare className="w-4 h-4 animate-bounce" />
              <span>حجز واتساب مباشر</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full ${isScrolled ? "text-slate-800 dark:text-white" : "text-white"}`}
            >
              {theme === "dark" ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5" />}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-lg ${
                isScrolled ? "text-slate-800 dark:text-white" : "text-white"
              }`}
            >
              {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="sm:hidden glass-effect border-b border-red-600/20 px-4 pt-3 pb-6 space-y-3 animate-fadeIn">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-base font-semibold text-slate-800 dark:text-slate-100 hover:bg-red-500/10 hover:text-red-600 transition-colors"
              >
                <Icon className="w-5 h-5 text-red-600" />
                <span>{link.name}</span>
              </a>
            );
          })}
          <div className="pt-2 border-t border-slate-200 dark:border-slate-800">
            <a
              href={createGeneralInquiryWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full bg-red-600 text-white py-3 rounded-xl font-bold shadow-md"
            >
              <MessageSquare className="w-5 h-5" />
              <span>تواصل واتساب (+90 506 097 77 79)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
