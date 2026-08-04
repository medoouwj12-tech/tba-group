const WHATSAPP_PHONE = "905060977779";

/**
 * Formats a tour booking request into an Arabic WhatsApp URL
 */
export function createTourBookingWhatsAppUrl(data) {
  const {
    tourTitle,
    date,
    persons,
    name,
    phone,
    hotel,
    paymentMethod = "الدفع خلال الرحلة",
    notes
  } = data;

  const message = `✨ *طلب حجز رحلة سياحية - TBA Group* ✨
-----------------------------------
📍 *الرحلة المطلوبة:* ${tourTitle || "غير محدد"}
📅 *تاريخ الرحلة:* ${date || "لم يحدد"}
👥 *عدد الأشخاص:* ${persons || "1"} شخص
👤 *اسم العميل:* ${name || "غير مدون"}
📞 *رقم التواصل:* ${phone || "غير مدون"}
🏨 *الفندق ورقم الغرفة:* ${hotel || "غير مدون"}
💳 *طريقة الدفع:* ${paymentMethod}
${notes ? `📝 *ملاحظات إضافية:* ${notes}\n` : ""}-----------------------------------
يسعدنا تأكيد الحجز معكم وإرسال تفاصيل انطلاق الرحلة. شكراً لثقتكم بـ TBA Group 🇹🇷`;

  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
}

/**
 * Formats an airport transfer booking request into an Arabic WhatsApp URL
 */
export function createTransferBookingWhatsAppUrl(data) {
  const {
    name,
    phone,
    airport,
    flightNumber,
    date,
    time,
    hotel,
    vehicle,
    passengers
  } = data;

  const message = `🚘 *طلب حجز ترانسفير مطار VIP - TBA Group* 🚘
-----------------------------------
✈️ *المطار:* ${airport || "مطار إسطنبول / صبيحة"}
🔢 *رقم الطيران:* ${flightNumber || "غير مدون"}
📅 *تاريخ الوصول:* ${date || "لم يحدد"}
⏰ *توقيت الهبوط:* ${time || "غير مدون"}
👤 *اسم المسافر:* ${name || "غير مدون"}
📞 *رقم الهاتف:* ${phone || "غير مدون"}
🏨 *الفندق أو الوجهة:* ${hotel || "غير مدون"}
🚐 *نوع السيارة VIP:* ${vehicle || "مرسيدس فيتو VIP"}
👨‍👩‍👧‍👦 *عدد الركاب والحقائب:* ${passengers || "لم يحدد"}
-----------------------------------
نرجو الاستقبال في المطار وتأكيد السائق المباشر. شكراً لخدمتكم 🇹🇷`;

  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
}

/**
 * Quick general inquiry link
 */
export function createGeneralInquiryWhatsAppUrl(customText = "") {
  const defaultText = "مرحباً TBA Group 🇹🇷 أود الاستفسار عن الخدمات والرحلات السياحية المتاحة لديكم.";
  const text = customText || defaultText;
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(text)}`;
}
