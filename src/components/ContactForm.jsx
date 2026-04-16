"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import { motion, AnimatePresence } from "framer-motion";

// ─── SHARED INPUT STYLES ─────────────────────────────────────────────────────

const inputClass =
  "w-full bg-[#1e1e2e] border border-[#A259FF]/20 text-white placeholder-gray-500 text-sm rounded-xl px-4 py-3 outline-none focus:border-[#A259FF] focus:ring-1 focus:ring-[#A259FF]/40 transition-all duration-200";

// ─── EMPTY STATES ────────────────────────────────────────────────────────────

const emptyHire = {
  firstName: "",
  lastName: "",
  email: "",
  company: "",
  role: "",
  message: "",
};

const emptyFreelance = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  budget: "",
  timeline: "",
  message: "",
};

// ─── HIRE ME FORM ────────────────────────────────────────────────────────────

function HireForm() {
  const [form, setForm] = useState(emptyHire);
  const [loading, setLoading] = useState(false);

  const handle = (e) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const id = toast.loading("Sending...");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, type: "hire" }),
      });
      const data = await res.json();
      if (res.ok) {
        toast.success("Message sent! I'll get back to you soon", { id });
        setForm(emptyHire);
      } else {
        toast.error(data.error || "Something went wrong!", { id });
      }
    } catch {
      toast.error("Error sending message", { id });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={submit} className="space-y-4">
      {/* Name row */}
      <div className="grid grid-cols-2 gap-4">
        <input
          name="firstName"
          value={form.firstName}
          onChange={handle}
          required
          placeholder="First Name"
          className={inputClass}
        />
        <input
          name="lastName"
          value={form.lastName}
          onChange={handle}
          required
          placeholder="Last Name"
          className={inputClass}
        />
      </div>

      {/* Email */}
      <input
        name="email"
        value={form.email}
        onChange={handle}
        type="email"
        required
        placeholder="Work Email"
        className={inputClass}
      />

      {/* Company + Role */}
      <div className="grid grid-cols-2 gap-4">
        <input
          name="company"
          value={form.company}
          onChange={handle}
          placeholder="Company Name (optional)"
          className={inputClass}
        />
        <input
          name="role"
          value={form.role}
          onChange={handle}
          placeholder="Role (e.g. Frontend Dev)"
          className={inputClass}
        />
      </div>

      {/* Message */}
      <textarea
        name="message"
        value={form.message}
        onChange={handle}
        required
        rows={4}
        placeholder="Tell me about the role, team, or opportunity..."
        className={inputClass}
      />

      {/* Info note */}
      <p className="text-xs text-gray-500">
        I'm open to full-time, hybrid, or remote roles. I'll respond within 24 hours.
      </p>

      <SubmitButton loading={loading} label="Send Message →" />
    </form>
  );
}

// ─── FREELANCE FORM ──────────────────────────────────────────────────────────

function FreelanceForm() {
  const [form, setForm] = useState(emptyFreelance);
  const [loading, setLoading] = useState(false);

  const handle = (e) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const id = toast.loading("Sending...");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, type: "freelance" }),
      });
      const data = await res.json();
      if (res.ok) {
        toast.success("Project inquiry sent! Talk soon", { id });
        setForm(emptyFreelance);
      } else {
        toast.error(data.error || "Something went wrong!", { id });
      }
    } catch {
      toast.error("Error sending message", { id });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={submit} className="space-y-4">
      {/* Name row */}
      <div className="grid grid-cols-2 gap-4">
        <input
          name="firstName"
          value={form.firstName}
          onChange={handle}
          required
          placeholder="First Name"
          className={inputClass}
        />
        <input
          name="lastName"
          value={form.lastName}
          onChange={handle}
          required
          placeholder="Last Name"
          className={inputClass}
        />
      </div>

      {/* Email + Phone */}
      <div className="grid grid-cols-2 gap-4">
        <input
          name="email"
          value={form.email}
          onChange={handle}
          type="email"
          required
          placeholder="Email"
          className={inputClass}
        />
        <input
          name="phone"
          value={form.phone}
          onChange={handle}
          type="tel"
          placeholder="Phone (optional)"
          className={inputClass}
        />
      </div>

      {/* Budget */}
      <div>
        <p className="text-xs text-gray-500 mb-2">Budget Range</p>
        <div className="flex flex-wrap gap-3">
          {["₹10k – ₹20k", "₹20k – ₹60k", "₹60k – ₹1L", "₹1L+"].map((label) => (
            <label
              key={label}
              className="flex items-center gap-2 cursor-pointer group"
            >
              <input
                type="radio"
                name="budget"
                value={label}
                checked={form.budget === label}
                onChange={handle}
                className="accent-[#A259FF]"
              />
              <span
                className="text-xs px-3 py-1.5 rounded-full border transition-all duration-200"
                style={{
                  background:
                    form.budget === label
                      ? "rgba(162,89,255,0.2)"
                      : "rgba(255,255,255,0.04)",
                  borderColor:
                    form.budget === label
                      ? "#A259FF"
                      : "rgba(255,255,255,0.1)",
                  color: form.budget === label ? "#A259FF" : "#9ca3af",
                }}
              >
                {label}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Timeline */}
      <select
        name="timeline"
        value={form.timeline}
        onChange={handle}
        className={`${inputClass} bg-[#1e1e2e]`}
      >
        <option value="" disabled>
          Project Timeline
        </option>
        {["1–2 weeks", "2–4 weeks", "1–2 months", "2+ months"].map((t) => (
          <option key={t} value={t}>
            {t}
          </option>
        ))}
      </select>

      {/* Message */}
      <textarea
        name="message"
        value={form.message}
        onChange={handle}
        required
        rows={4}
        placeholder="Describe your project — what do you need built?"
        className={inputClass}
      />

      <SubmitButton loading={loading} label="Send Project Brief →" />
    </form>
  );
}

// ─── SHARED SUBMIT BUTTON ────────────────────────────────────────────────────

function SubmitButton({ loading, label }) {
  return (
    <button
      type="submit"
      disabled={loading}
      className="w-full py-3 rounded-xl text-sm font-semibold text-white transition-all duration-200 disabled:opacity-60"
      style={{
        background: loading
          ? "rgba(162,89,255,0.5)"
          : "linear-gradient(135deg,#A259FF,#6C63FF)",
        boxShadow: loading ? "none" : "0 0 20px rgba(162,89,255,0.35)",
      }}
    >
      {loading ? "Sending..." : label}
    </button>
  );
}

// ─── MAIN EXPORT ─────────────────────────────────────────────────────────────

const tabs = [
  {
    id: "hire",
    label: "Hire Me",
    sublabel: "Full-time / Part-time role",
  },
  {
    id: "freelance",
    label: "Freelance Project",
    sublabel: "Build something together",
  },
];

export default function ContactForm() {
  const [activeTab, setActiveTab] = useState("hire");

  return (
    <div className="w-full">
      {/* ── Tab switcher ── */}
      <div className="grid grid-cols-2 gap-3 mb-8">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className="rounded-xl px-4 py-3 text-left transition-all duration-200"
            style={{
              background:
                activeTab === tab.id
                  ? "rgba(162,89,255,0.15)"
                  : "rgba(255,255,255,0.03)",
              border:
                activeTab === tab.id
                  ? "1px solid rgba(162,89,255,0.5)"
                  : "1px solid rgba(255,255,255,0.08)",
              boxShadow:
                activeTab === tab.id
                  ? "0 0 20px rgba(162,89,255,0.15)"
                  : "none",
            }}
          >
            <p
              className="text-sm font-semibold"
              style={{
                color: activeTab === tab.id ? "#A259FF" : "#9ca3af",
              }}
            >
              {tab.label}
            </p>
            <p className="text-xs text-gray-500 mt-0.5">{tab.sublabel}</p>
          </button>
        ))}
      </div>

      {/* ── Form area ── */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.25 }}
        >
          {activeTab === "hire" ? <HireForm /> : <FreelanceForm />}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}