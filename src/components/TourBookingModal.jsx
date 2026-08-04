import React, { useState, useEffect } from "react";
import { X, Calendar, Users, Hotel, CreditCard, User, Phone, CheckCircle, MessageSquare, AlertCircle } from "lucide-react";
import { TOURS_DATA } from "../data/tours";
import { createTourBookingWhatsAppUrl } from "../utils/whatsapp";

export default function TourBookingModal({ isOpen, onClose, selectedTour }) {
  const [formData, setFormData] = useState({
    tourId: "",
    tourTitle: "",
    date: "",
    persons: 2,
    name: "",
    phone: "",
    hotel: "",
    paymentMethod: "الدفع خلال الرحلة (نقداً للمرشد)",
    notes: ""
  });

  useEffect(() => {
    if (selectedTour) {
      setFormData((prev) => ({
        ...prev,
        tourId: selectedTour.id,
        tourTitle: selectedTour.title
      }));
    } else if (TOURS_DATA.length > 0) {
      setFormData((prev) => ({
        ...prev,
        tourId: TOURS_DATA[0].id,
        tourTitle: TOURS_DATA[0].title
      }));
    }

    // Default to tomorrow's date
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const dateStr = tomorrow.toISOString().split("T")[0];
    setFormData((prev) => ({ ...prev, date: dateStr }));
  }, [selectedTour, isOpen]);

  if (!isOpen) return null;

  const handleTourChange = (e) => {
    const tourId = e.target.value;
    const tourObj = TOURS_DATA.find((t) => t.id === tourId);
    setFormData({
      ...formData,
      tourId: tourId,
      tourTitle: tourObj ? tourObj.title : tourId
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const whatsappUrl = createTourBookingWhatsAppUrl(formData);
    window.open(whatsappUrl, "_blank");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn overflow-y-auto">
      <div
        className="relative w-full max-w-lg bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-red-500/20 overflow-hidden my-8 transform transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-red-600 to-rose-700 p-5 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center font-bold">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-extrabold text-lg sm:text-xl">تأكيد حجز الرحلة السياحية</h3>
              <p className="text-xs text-rose-100 mt-0.5">TBA Group - تركيا بعيون عربية</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Form Body */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          
          {/* Tour Selection Dropdown */}
          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-200 mb-1.5">
              اختر الرحلة السياحية *
            </label>
            <select
              value={formData.tourId}
              onChange={handleTourChange}
              required
              className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl px-4 py-3 text-sm font-semibold text-slate-900 dark:text-white focus:ring-2 focus:ring-red-500 focus:outline-none"
            >
              {TOURS_DATA.map((tour) => (
                <option key={tour.id} value={tour.id}>
                  {tour.title} ({tour.price} {tour.currency})
                </option>
              ))}
            </select>
          </div>

          {/* Date & Persons in 2 Columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Date Picker */}
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-200 mb-1.5 flex items-center gap-1">
                <Calendar className="w-4 h-4 text-red-600" />
                <span>تاريخ الرحلة (التاريخ) *</span>
              </label>
              <input
                type="date"
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                required
                className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl px-4 py-2.5 text-sm font-medium text-slate-900 dark:text-white focus:ring-2 focus:ring-red-500 focus:outline-none"
              />
            </div>

            {/* Number of Persons */}
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-200 mb-1.5 flex items-center gap-1">
                <Users className="w-4 h-4 text-red-600" />
                <span>عدد الأشخاص *</span>
              </label>
              <div className="flex items-center border border-slate-300 dark:border-slate-700 rounded-xl overflow-hidden bg-slate-50 dark:bg-slate-800">
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, persons: Math.max(1, formData.persons - 1) })}
                  className="px-3 py-2.5 bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-white font-bold hover:bg-slate-300"
                >
                  -
                </button>
                <input
                  type="number"
                  min="1"
                  max="50"
                  value={formData.persons}
                  onChange={(e) => setFormData({ ...formData, persons: parseInt(e.target.value) || 1 })}
                  required
                  className="w-full text-center bg-transparent text-sm font-bold text-slate-900 dark:text-white focus:outline-none"
                />
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, persons: formData.persons + 1 })}
                  className="px-3 py-2.5 bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-white font-bold hover:bg-slate-300"
                >
                  +
                </button>
              </div>
            </div>
          </div>

          {/* User Name & Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-200 mb-1.5 flex items-center gap-1">
                <User className="w-4 h-4 text-red-600" />
                <span>الاسم الكامل *</span>
              </label>
              <input
                type="text"
                placeholder="أحمد علي"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl px-4 py-2.5 text-sm font-medium text-slate-900 dark:text-white focus:ring-2 focus:ring-red-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-200 mb-1.5 flex items-center gap-1">
                <Phone className="w-4 h-4 text-red-600" />
                <span>رقم الهاتف / الواتساب *</span>
              </label>
              <input
                type="tel"
                placeholder="+966 50 123 4567"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
                className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl px-4 py-2.5 text-sm font-medium text-slate-900 dark:text-white focus:ring-2 focus:ring-red-500 focus:outline-none"
              />
            </div>
          </div>

          {/* Hotel Name / Room Number */}
          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-200 mb-1.5 flex items-center gap-1">
              <Hotel className="w-4 h-4 text-red-600" />
              <span>اسم الفندق ورقم الغرفة (الفندق) *</span>
            </label>
            <input
              type="text"
              placeholder="فندق ريكسوس Pera / غرفة 304"
              value={formData.hotel}
              onChange={(e) => setFormData({ ...formData, hotel: e.target.value })}
              required
              className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl px-4 py-2.5 text-sm font-medium text-slate-900 dark:text-white focus:ring-2 focus:ring-red-500 focus:outline-none"
            />
          </div>

          {/* Read-Only Payment Method Requirement */}
          <div className="p-3.5 bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-800/50 rounded-2xl flex items-center gap-3">
            <CheckCircle className="w-5 h-5 text-red-600 shrink-0" />
            <div>
              <span className="text-xs font-extrabold text-red-700 dark:text-red-400 block">
                طريقة الدفع: الدفع خلال الرحلة
              </span>
              <p className="text-[11px] text-slate-600 dark:text-slate-300">
                لا يلزمك دفع أي مبالغ مقدمة. تسلم القيمة نقداً للمرشد السياحي يوم الرحلة.
              </p>
            </div>
          </div>

          {/* Notes Optional */}
          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-200 mb-1">
              ملاحظات إضافية (اختياري)
            </label>
            <input
              type="text"
              placeholder="مثال: نريد كسي أطفال / كبار السن معانا"
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl px-4 py-2 text-sm font-medium text-slate-900 dark:text-white focus:ring-2 focus:ring-red-500 focus:outline-none"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full mt-2 bg-gradient-to-r from-red-600 to-rose-700 hover:from-red-700 hover:to-rose-800 text-white font-extrabold py-3.5 rounded-2xl shadow-lg shadow-red-600/30 flex items-center justify-center gap-3 text-base transition-all transform hover:-translate-y-0.5"
          >
            <MessageSquare className="w-5 h-5 animate-pulse" />
            <span>تأكيد الحجز عبر واتساب (+905060977779)</span>
          </button>
        </form>
      </div>
    </div>
  );
}
