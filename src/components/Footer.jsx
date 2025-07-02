"use client";

import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#1f1f2e]/80 backdrop-blur-lg border-t border-[#A259FF]/30 text-white py-8 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Left - Branding */}
        <div>
          <h2 className="text-2xl font-bold text-[#A259FF] mb-2">Let’s Collaborate</h2>
          <p className="text-sm text-gray-300 mb-2">
            💬 Let's build something amazing together.
          </p>
          <p className="text-sm text-blue-200">📩 mahatorambabu114@gmail.com</p>
        </div>

        {/* Middle - Navigation */}
        <div>
          <h4 className="text-lg font-semibold mb-3 text-[#A259FF]">Quick Links</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <Link href="#about" className="hover:text-[#A259FF] transition">
                About Me
              </Link>
            </li>
            <li>
              <Link href="#projects" className="hover:text-[#A259FF] transition">
                Projects
              </Link>
            </li>
            <li>
              <Link href="#skills" className="hover:text-[#A259FF] transition">
                Skills
              </Link>
            </li>
            <li>
              <Link href="#services" className="hover:text-[#A259FF] transition">
                Services
              </Link>
            </li>
          </ul>
        </div>

        {/* Right - Social */}
        <div>
          <h4 className="text-lg font-semibold mb-3 text-[#A259FF]">Connect</h4>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/Mahato-Rambabu/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl text-gray-300 hover:text-[#A259FF] transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/rambabumahato/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl text-gray-300 hover:text-[#A259FF] transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:mahatorambabu114@gmail.com"
              className="text-xl text-gray-300 hover:text-[#A259FF] transition"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom - Copyright */}
      <div className="mt-8 text-center text-xs text-gray-400 border-t border-[#A259FF]/10 pt-4">
        © {new Date().getFullYear()} Rambabu Mahato. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
