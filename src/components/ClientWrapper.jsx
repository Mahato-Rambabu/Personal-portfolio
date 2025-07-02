"use client";

import { useState } from "react";
import Navbar from "./Navbar";
import ContactForm from "./ContactForm";
import Hero from "./Hero";
import Services from "./Services";
import Footer from "./Footer";

export default function ClientWrapper({ children }) {
  const [showModal, setShowModal] = useState(false);

  const openContactModal = () => setShowModal(true);
  const closeContactModal = () => setShowModal(false);

  return (
    <>
      <Navbar scrollToContact={openContactModal} />

      {/* ✅ Only one Hero section here */}
      <Hero onHireMeClick={openContactModal} />


      <div className="pt-10">{children}</div>

      <Services onContactClick={openContactModal} />

      <Footer />
      {showModal && (
        <div
          className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center px-4"
          onClick={closeContactModal}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-xl bg-[#1f1f2e]/80 border border-blue-400 rounded-2xl backdrop-blur-lg p-6 text-white shadow-2xl"
          >
            <button
              onClick={closeContactModal}
              className="absolute top-3 right-3 text-white bg-blue-500 hover:bg-blue-600 rounded-full w-8 h-8 flex items-center justify-center"
            >
              ✕
            </button>

            <h2 className="text-2xl font-semibold mb-4 text-center text-[#A259FF]">
              Let&apos;s Work Together
            </h2>
            <ContactForm />
          </div>
        </div>
      )}
    </>
  );
}
