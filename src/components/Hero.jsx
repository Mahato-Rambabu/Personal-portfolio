"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const roles = ["QRAR Founder", "Freelancer", "Full Stack Developer"];

const Hero = ({ onHireMeClick }) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [text, setText] = useState("");

  useEffect(() => {
    const currentText = roles[index];

    if (!deleting && subIndex < currentText.length) {
      setTimeout(() => {
        setSubIndex(subIndex + 1);
        setText(currentText.substring(0, subIndex + 1));
      }, 100);
    } else if (deleting && subIndex > 0) {
      setTimeout(() => {
        setSubIndex(subIndex - 1);
        setText(currentText.substring(0, subIndex - 1));
      }, 50);
    } else if (!deleting && subIndex === currentText.length) {
      setTimeout(() => setDeleting(true), 1500);
    } else if (deleting && subIndex === 0) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % roles.length);
    }
  }, [subIndex, deleting, index]);

  return (
    <section
      id="about"
      className="w-full min-h-[95vh] flex flex-col-reverse md:flex-row items-center justify-around px-6 md:px-[8.5rem] pt-24 text-white"
    >
      {/* Left Text Area */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex-1 md:mr-12 text-center md:text-left"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          Hi, I’m <span className="text-[#A259FF]">Ram</span>
        </h1>

        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-300 mb-4 h-10">
          I’m a {text}
          <span className="border-r-2 border-gray-300 animate-pulse ml-1"></span>
        </h2>

        <p className="text-gray-400 mb-6 text-md max-w-xl mx-auto md:mx-0">
          I work closely with founders and teams to bring their ideas to life — designing and developing modern web apps that are fast, functional, and easy to manage.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <button
            onClick={onHireMeClick}
            className="bg-[#A259FF] text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition font-semibold shadow-md"
          >
           Let&apos;s Work Together
          </button>
          <a
            href="/resume.pdf"
            download="Ram-Mahato-Resume"
            className="border border-[#A259FF] text-[#A259FF] px-6 py-3 rounded-lg hover:bg-purple-100 transition font-semibold"
          >
            Download CV
          </a>
        </div>
      </motion.div>

      {/* Right Image Area */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex-1 md:ml-8 flex justify-end items-center h-full"
      >
        <div
          className="relative group w-[250px] sm:w-[300px] md:w-[350px] aspect-square rounded-full 
            bg-gradient-to-br from-[#A259FF] to-[#6C63FF]
            shadow-[0_0_40px_rgba(162,89,255,0.7)]
            overflow-hidden transition-all duration-500 ease-in-out
            hover:shadow-[0_0_70px_rgba(162,89,255,0.7)]"
        >
          <img
            src="/profile.png"
            alt="profile"
            className="w-full h-full object-cover rounded-full translate-y-4"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
