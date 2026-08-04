import React, { useState } from "react";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ToursSection from "./components/ToursSection";
import AirportTransferSection from "./components/AirportTransferSection";
import LandmarksSection from "./components/LandmarksSection";
import WhyUsSection from "./components/WhyUsSection";
import TestimonialsSection from "./components/TestimonialsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import TourBookingModal from "./components/TourBookingModal";

import { createGeneralInquiryWhatsAppUrl } from "./utils/whatsapp";

function AppContent() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTour, setSelectedTour] = useState(null);

  const handleOpenBookingModal = (tour = null) => {
    setSelectedTour(tour);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedTour(null);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300 relative selection:bg-red-600 selection:text-white">
      {/* Sticky Header Navigation */}
      <Navbar onOpenTourModal={handleOpenBookingModal} />

      {/* Main Sections */}
      <main>
        <Hero onOpenTourModal={handleOpenBookingModal} />
        <ToursSection onBookTour={handleOpenBookingModal} />
        <AirportTransferSection />
        <LandmarksSection />
        <WhyUsSection />
        <TestimonialsSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Booking Modal System */}
      <TourBookingModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        selectedTour={selectedTour}
      />

      {/* Floating Sticky WhatsApp Button with Official Logo */}
      <a
        href={createGeneralInquiryWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Direct WhatsApp Contact"
        className="fixed bottom-6 left-6 z-40 bg-[#25D366] hover:bg-[#20ba59] text-white p-4 rounded-full shadow-2xl shadow-green-600/50 flex items-center justify-center transition-all duration-300 transform hover:scale-110"
        style={{ boxShadow: "0 0 0 0 rgba(37,211,102,0.5)", animation: "whatsapp-pulse 2s infinite" }}
        title="تواصل مباشر عبر الواتساب"
      >
        {/* Official WhatsApp SVG Logo */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
          width="30"
          height="30"
          fill="white"
          aria-hidden="true"
        >
          <path d="M4.868 43.303l2.694-9.835a18.958 18.958 0 0 1-2.535-9.489C5.032 13.514 13.548 5 24.014 5c5.079.002 9.845 1.979 13.43 5.566a18.858 18.858 0 0 1 5.554 13.42c-.004 10.465-8.522 18.98-18.986 18.98a19.04 19.04 0 0 1-9.073-2.308L4.868 43.303zm10.733-6.189l.573.34a15.847 15.847 0 0 0 8.074 2.208c8.745 0 15.867-7.116 15.87-15.863a15.771 15.771 0 0 0-4.636-11.202 15.788 15.788 0 0 0-11.228-4.658c-8.749 0-15.867 7.114-15.87 15.86a15.826 15.826 0 0 0 2.42 8.507l.376.597-1.597 5.836 5.018-1.325zM33.992 27.95c-.116-.194-.424-.31-.887-.543-.461-.234-2.726-1.346-3.148-1.5-.424-.155-.732-.233-1.04.234-.307.466-1.193 1.5-1.463 1.808-.27.309-.54.348-1.001.116-.462-.233-1.95-.718-3.716-2.293-1.373-1.225-2.3-2.737-2.57-3.2-.27-.465-.028-.717.203-.949.208-.208.462-.543.693-.815.23-.27.307-.465.461-.775.155-.31.078-.582-.04-.815-.115-.233-1.04-2.504-1.424-3.43-.376-.9-.757-.778-1.04-.792-.27-.01-.578-.013-.887-.013-.309 0-.81.117-1.234.582-.424.466-1.618 1.58-1.618 3.852 0 2.271 1.657 4.465 1.888 4.775.233.309 3.26 4.976 7.895 6.978 1.103.476 1.963.76 2.634.973 1.106.351 2.113.301 2.908.183.887-.133 2.726-1.115 3.11-2.19.386-1.075.386-1.997.271-2.19z"/>
        </svg>
      </a>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
