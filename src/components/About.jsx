"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
    FaGithub,
    FaLinkedin,
    FaInstagram,
    FaMapMarkerAlt,
    FaGraduationCap,
    FaSchool,
} from "react-icons/fa";

// ─── DATA ────────────────────────────────────────────────────────────────────

const socials = [
    {
        icon: <FaGithub />,
        label: "GitHub",
        href: "https://github.com/Mahato-Rambabu",
        color: "#ffffff",
    },
    {
        icon: <FaLinkedin />,
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/rambabumahato/", // ← update
        color: "#0A66C2",
    },
    {
        icon: <FaInstagram />,
        label: "Instagram",
        href: "https://www.instagram.com/im_.ram._", // ← update
        color: "#E1306C",
    },
];

const education = [
    {
        icon: <FaGraduationCap />,
        title: "BCA – Computer",
        institution: "MIT Art's Commerce and Science College, Pune",
        year: "2021 – 2024",
        marks: "CGPA: 7.70",
        color: "#A259FF",
    },
    {
        icon: <FaSchool />,
        title: "HSC – Science (PCM)",
        institution: "Nowrosjee Wadia College, Pune",
        year: "2019 – 2021",
        marks: "81.17%",
        color: "#6C63FF",
    },
];

const skills = [
    { name: "React / Next.js", pct: 90 },
    { name: "Node.js / Express", pct: 85 },
    { name: "JavaScript", pct: 90 },
    { name: "Tailwind CSS", pct: 95 },
    { name: "MongoDB", pct: 85 },
    { name: "SQL / PostgreSQL", pct: 90 },
    { name: "PHP", pct: 95 },
    { name: "Java", pct: 85 },
];

const experience = [
    {
        role: "Developer Intern — Aakrutii Technology",
        type: "Internship",
        period: "May 2025 – Nov 2025",
        location: "Pune, India",
        desc: "Developed and deployed multiple client-facing web applications using React, Node.js, and PostgreSQL. Designed RESTful APIs to streamline business workflows and improve operational efficiency. Maintained version control and sprint tracking using Git and JIRA in an agile environment.",
        color: "#6C63FF",
    },
    {
        role: "Game Test Intern — Ubisoft",
        type: "Internship",
        period: "Feb 2024 – Aug 2024",
        location: "Pune, India",
        desc: "Independently applied and secured an internship at Ubisoft, one of the world's largest game studios. Executed 50+ detailed test cases improving bug identification speed, logged structured bug reports via JIRA, and ensured QA reliability with precise documentation in an agile environment.",
        color: "#A259FF",
    }
    
];

// ─── ANIMATION HELPER ────────────────────────────────────────────────────────

const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 28 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, delay },
});

// ─── SUB-COMPONENTS ──────────────────────────────────────────────────────────

function SectionTag({ label }) {
    return (
        <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-8 bg-[#A259FF]" />
            <span className="text-xs font-semibold tracking-widest uppercase text-[#A259FF]">
                {label}
            </span>
        </div>
    );
}

function Card({ children, className = "" }) {
    return (
        <div
            className={`rounded-2xl p-5 ${className}`}
            style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(162,89,255,0.15)",
            }}
        >
            {children}
        </div>
    );
}

function SkillBar({ name, pct, delay }) {
    return (
        <motion.div {...fadeUp(delay)}>
            <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-300">{name}</span>
                <span className="text-[#A259FF] font-semibold">{pct}%</span>
            </div>
            <div className="h-1.5 rounded-full bg-white/10 overflow-hidden">
                <motion.div
                    className="h-full rounded-full"
                    style={{ background: "linear-gradient(90deg,#A259FF,#6C63FF)" }}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${pct}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9, delay, ease: "easeOut" }}
                />
            </div>
        </motion.div>
    );
}

// ─── MAIN COMPONENT ──────────────────────────────────────────────────────────

export default function About() {
    const [activeTab, setActiveTab] = useState("experience");

    return (
        <section
            id="about"
            className="w-full py-20 px-6 md:px-[8.5rem] bg-[#181823] text-white"
        >
            {/* ── Heading ── */}
            <motion.div {...fadeUp(0)} className="mb-12">
                <SectionTag label="About Me" />
                <h2 className="text-3xl sm:text-4xl font-bold">
                    Who I <span className="text-[#A259FF]">Am</span>
                </h2>
            </motion.div>

            {/* ══ ROW 1 — Intro + Location + Socials ══ */}
            <div className="grid md:grid-cols-3 gap-6 mb-6">

                {/* Intro */}
                <motion.div {...fadeUp(0.1)} className="md:col-span-2">
                    <Card>
                        <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                            I'm{" "}
                            <span className="text-white font-semibold">Rambabu Mahato</span> a
                            Full-Stack Developer based in{" "}
                            <span className="text-[#A259FF] font-medium">Pune, India</span>.
                            I graduated with a{" "}
                            <span className="text-white font-semibold">BCA from MIT Pune in 2024</span>{" "}
                            and independently secured an internship at {" "}
                            <span className="text-[#A259FF] font-semibold">Ubisoft </span> 
                            one of the world's largest game studios, before most of my peers
                            even started applying.
                        </p>
                        <p className="text-gray-400 leading-relaxed text-sm mt-3">
                            Since graduating, I've been building real products
                            a live QR-based{" "}
                            <span className="text-white font-medium">Restaurant SaaS</span>,
                            a{" "}
                            <span className="text-white font-medium">Gym Trainer platform</span>,
                            and an{" "}
                            <span className="text-white font-medium">E-Commerce Online Grocery App </span>
                            while actively looking for a{" "}
                            <span className="text-[#A259FF] font-semibold">
                                full-time developer role
                            </span>{" "}
                            where I can grow fast and ship things that matter.
                        </p>
                    </Card>
                </motion.div>

                {/* Location + Socials + Badge */}
                <motion.div {...fadeUp(0.15)} className="flex flex-col gap-4">
                    <Card className="flex items-center gap-3">
                        <FaMapMarkerAlt className="text-[#A259FF] text-lg flex-shrink-0" />
                        <div>
                            <p className="text-xs text-gray-500 uppercase tracking-wider">
                                Location
                            </p>
                            <p className="text-sm text-white font-medium">Pune, India</p>
                        </div>
                    </Card>

                    <Card>
                        <p className="text-xs text-gray-500 uppercase tracking-wider mb-3">
                            Connect
                        </p>
                        <div className="flex gap-3">
                            {socials.map((s) => (
                                <a
                                    key={s.label}
                                    href={s.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    title={s.label}
                                    className="w-9 h-9 rounded-lg flex items-center justify-center text-lg transition-all duration-200 hover:scale-110"
                                    style={{
                                        background: "rgba(255,255,255,0.06)",
                                        color: s.color,
                                    }}
                                >
                                    {s.icon}
                                </a>
                            ))}
                        </div>
                    </Card>

                    {/* Open to work pulsing badge */}
                </motion.div>
            </div>

            {/* ══ ROW 2 — Education ══ */}
            <motion.div {...fadeUp(0.2)} className="mb-6">
                <Card>
                    <p className="text-xs text-gray-500 uppercase tracking-wider mb-4">
                        Education
                    </p>
                    <div className="grid sm:grid-cols-2 gap-4">
                        {education.map((e, i) => (
                            <div
                                key={i}
                                className="rounded-xl p-4 flex flex-col gap-1"
                                style={{
                                    background: "rgba(162,89,255,0.06)",
                                    border: "1px solid rgba(162,89,255,0.12)",
                                }}
                            >
                                <div className="text-xl mb-1" style={{ color: e.color }}>
                                    {e.icon}
                                </div>
                                <p className="text-white font-semibold text-sm leading-snug">
                                    {e.title}
                                </p>
                                <p className="text-gray-400 text-xs">{e.institution}</p>
                                <p className="text-gray-500 text-xs">{e.year}</p>
                                <span
                                    className="mt-1 inline-block text-xs font-semibold px-2 py-0.5 rounded-full w-fit"
                                    style={{
                                        background: "rgba(162,89,255,0.15)",
                                        color: "#A259FF",
                                    }}
                                >
                                    {e.marks}
                                </span>
                            </div>
                        ))}
                    </div>
                </Card>
            </motion.div>

            {/* ══ ROW 3 — Experience / Proficiency tabs ══ */}
            <motion.div {...fadeUp(0.25)}>
                <Card>
                    {/* Tab switcher */}
                    <div className="flex gap-2 mb-6">
                        {["experience"].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className="px-4 py-1.5 rounded-full text-xs font-semibold capitalize transition-all duration-200"
                                style={
                                    activeTab === tab
                                        ? {
                                            background: "#A259FF",
                                            color: "#fff",
                                            boxShadow: "0 0 16px rgba(162,89,255,0.5)",
                                        }
                                        : {
                                            background: "rgba(255,255,255,0.06)",
                                            color: "#9ca3af",
                                        }
                                }
                            >
                                {tab}
                            </button>
                        ))}
                    </div>

                    {/* ── Experience tab ── */}
                    {activeTab === "experience" && (
                        <div className="flex flex-col gap-6">
                            {experience.map((exp, i) => (
                                <motion.div key={i} {...fadeUp(i * 0.1)} className="flex gap-4">
                                    {/* Timeline dot + line */}
                                    <div className="flex flex-col items-center pt-1">
                                        <div
                                            className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                                            style={{ background: exp.color }}
                                        />
                                        {i < experience.length - 1 && (
                                            <div className="w-px flex-1 mt-1 bg-[#A259FF]/20" />
                                        )}
                                    </div>

                                    <div className="pb-2">
                                        {/* Role + type badge */}
                                        <div className="flex flex-wrap items-center gap-2 mb-0.5">
                                            <span className="text-white font-semibold text-sm">
                                                {exp.role}
                                            </span>
                                            <span
                                                className="text-xs px-2 py-0.5 rounded-full font-medium"
                                                style={{
                                                    background:
                                                        exp.type === "Internship"
                                                            ? "rgba(162,89,255,0.2)"
                                                            : "rgba(108,99,255,0.2)",
                                                    color:
                                                        exp.type === "Internship" ? "#A259FF" : "#8B85FF",
                                                }}
                                            >
                                                {exp.type}
                                            </span>
                                        </div>

                                        {/* Period + location */}
                                        <p className="text-gray-500 text-xs mb-2">
                                            {exp.period} · {exp.location}
                                        </p>

                                        {/* Description */}
                                        <p className="text-gray-400 text-xs leading-relaxed">
                                            {exp.desc}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    )}

                </Card>
            </motion.div>
        </section>
    );
}