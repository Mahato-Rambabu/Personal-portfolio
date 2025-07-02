"use client";

import { motion } from "framer-motion";
import { FaCode, FaMobileAlt, FaRocket, FaServer } from "react-icons/fa";
import Image from "next/image";

// Services data
const services = [
  {
    icon: <FaCode size={28} />,
    title: "Full-Stack Web Development",
    description:
      "Modern, scalable web apps using React, Next.js, Node.js, PostgreSQL or MongoDB.",
  },
  {
    icon: <FaMobileAlt size={28} />,
    title: "PWA & QR Ordering Systems",
    description:
      "Progressive Web Apps for restaurants with QR scanning, dynamic menu, and real-time ordering.",
  },
  {
    icon: <FaServer size={28} />,
    title: "Backend/API Integration",
    description:
      "Secure, RESTful APIs, third-party integrations, and scalable backend logic.",
  },
  {
    icon: <FaRocket size={28} />,
    title: "Freelance / Consulting",
    description:
      "Need tech advice or a fast MVP? I help startups and individuals get their product off the ground.",
  },
];

// Static Image Component
const QrarImage = () => {
  return (
    <div className="relative w-full h-[220px] md:h-full md:min-h-[350px] md:aspect-[16/10] overflow-hidden border-t md:border-t-0 md:border-l border-blue-400 bg-blue-500/10 backdrop-blur-md">
      <Image
        src="/projects/qrar.png"
        alt="QRAR"
        fill
        priority
        className="object-cover w-full h-full"
      />
    </div>
  );
};

const Services = ({ onContactClick }) => {
  return (
    <section id="services" className="py-36 px-6 text-[#E0E0E0] bg-[#12121c]">
      {/* Title */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-2">Services</h2>
        <p className="text-[#AAAAAA] max-w-xl mx-auto text-sm md:text-base">
          Helping businesses and creators build high-quality web products.
        </p>
      </div>

      {/* QRAR Startup Showcase */}
      <div className="mt-10 flex flex-col md:flex-row items-center justify-center">
        <div className="flex flex-col md:flex-row w-full max-w-4xl rounded-2xl overflow-hidden shadow-2xl border border-[#A259FF]/30 bg-[#A259FF]/10 backdrop-blur-md">
          {/* Image: Top on mobile, right on desktop */}
          <div className="order-1 md:order-2 w-full md:w-1/2">
            <QrarImage />
          </div>

          {/* Text: Below image on mobile, left on desktop */}
          <div className="order-2 md:order-1 w-full md:w-1/2 p-6 md:p-10 flex flex-col justify-between">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                QRAR Startup
              </h3>
              <p className="text-[#DDDDDD] text-sm md:text-md leading-relaxed">
                Discover a smarter way to dine with <strong>QRAR</strong> — a
                powerful PWA that lets customers scan, browse, and order
                instantly from dynamic menus. No app download needed. Just tap,
                explore, and enjoy.
              </p>
            </div>
            <div className="mt-6">
              <a
                href="https://qrar-lyart.vercel.app/login"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-6 py-2 text-sm font-medium bg-[#A259FF] hover:bg-[#6C63FF] text-white rounded-full transition relative overflow-hidden"
              >
                Try Now
                <span className="inline-block transform transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="flex items-center justify-center gap-5 mt-8">
        <p className="text-[#AAAAAA] italic text-md">How can I help you?</p>
        <button
          onClick={onContactClick}
          className="inline-block px-6 py-3 text-sm rounded-full bg-[#A259FF] hover:bg-[#6C63FF] transition text-white shadow-md"
        >
          Let’s Connect
        </button>
      </div>

      {/* Services Grid */}
      <div className="grid mt-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            className="bg-[#A259FF]/10 border border-[#A259FF]/30 backdrop-blur-sm rounded-2xl p-6 
              shadow-md transition-all duration-300 ease-in-out hover:shadow-[0_0_25px_#A259FF55]"
          >
            <div className="text-[#A259FF] mb-4">{service.icon}</div>
            <h4 className="text-lg font-semibold mb-2 text-white">
              {service.title}
            </h4>
            <p className="text-[#AAAAAA] text-sm">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
