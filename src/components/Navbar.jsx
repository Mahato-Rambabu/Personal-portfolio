"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const Navbar = ({ scrollToContact }) => {
    const [activeSection, setActiveSection] = useState("about");
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const dropdownRef = useRef(null);

    const sections = ["about", "projects", "skills", "services"];

    // IntersectionObserver for active section tracking
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                for (let entry of entries) {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                }
            },
            { threshold: 0.6 }
        );

        sections.forEach((id) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target)
            ) {
                setIsMenuOpen(false);
            }
        };

        if (isMenuOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isMenuOpen]);

    const getLinkClass = (id) =>
        `px-4 py-2 rounded-md transition duration-300 text-base md:text-lg ${
            activeSection === id
                ? "bg-[#6C63FF]/20 border border-[#6C63FF]/30 text-[#A259FF]"
                : "hover:bg-[#6C63FF]/20 hover:border hover:border-[#6C63FF]/30 hover:text-[#A259FF]"
        }`;

    return (
        <header className="w-full fixed top-0 z-50">
            <nav className="max-w-[76rem] mx-auto mt-4 px-4 md:px-8 relative">
                <div
                    ref={dropdownRef}
                    className="backdrop-blur-sm bg-[#2A2A2E]/80 border border-[#A259FF]/30 rounded-2xl px-6 md:px-10 py-2 flex items-center justify-between shadow-md relative"
                >
                    {/* Left Side: Hamburger + Logo */}
                    <div className="flex items-center gap-3">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="md:hidden text-white text-2xl focus:outline-none transition-all duration-200 mb-1"
                        >
                            {isMenuOpen ? "×" : "☰"}
                        </button>

                        <div className="text-lg md:text-2xl font-bold text-[#E0E0E0]">
                            Ram Mahato
                        </div>
                    </div>

                    {/* Desktop Navigation */}
                    <ul className="hidden md:flex items-center gap-2 text-[#E0E0E0] font-medium">
                        {sections.map((id) => (
                            <li key={id}>
                                <Link href={`#${id}`} className={getLinkClass(id)}>
                                    {id.charAt(0).toUpperCase() + id.slice(1)}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* Contact Button */}
                    <button
                        onClick={scrollToContact}
                        className="text-sm md:text-base bg-[#A259FF] hover:bg-[#6C63FF] text-white font-semibold px-4 md:px-5 py-2 rounded-md transition"
                    >
                        Contact Me
                    </button>

                    {/* Mobile Dropdown Menu */}
                    {isMenuOpen && (
                        <div className="absolute left-0 right-0 top-full mt-2 rounded-xl bg-[#2A2A2E]/95 border border-[#A259FF]/30 text-[#E0E0E0] shadow-md flex flex-col py-4 px-6 md:hidden z-40">
                            {sections.map((id) => (
                                <Link
                                    key={id}
                                    href={`#${id}`}
                                    onClick={() => setIsMenuOpen(false)}
                                    className={`${getLinkClass(id)} mb-2`}
                                >
                                    {id.charAt(0).toUpperCase() + id.slice(1)}
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
