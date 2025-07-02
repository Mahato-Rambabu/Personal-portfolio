"use client";

import { useState } from "react";
import toast from "react-hot-toast";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    budget: "",
    timeline: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const loadingToast = toast.loading("Sending message...");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (res.ok) {
        toast.success("Message sent successfully!", { id: loadingToast });
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          budget: "",
          timeline: "",
          message: "",
        });
      } else {
        toast.error(result.error || "Something went wrong!", { id: loadingToast });
      }
    } catch (error) {
      console.error("Submit Error:", error);
      toast.error("Error sending message", { id: loadingToast });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <input
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          type="text"
          required
          placeholder="First Name"
          className="input-style"
        />
        <input
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          type="text"
          required
          placeholder="Last Name"
          className="input-style"
        />
      </div>

      <input
        name="email"
        value={formData.email}
        onChange={handleChange}
        type="email"
        required
        placeholder="Email"
        className="input-style w-full"
      />
      <input
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        type="tel"
        required
        placeholder="Phone Number"
        className="input-style w-full"
      />

      <fieldset className="flex flex-wrap gap-3 text-gray-400">
        <legend className="text-sm mb-1">What budget range are you in?</legend>
        {["10k - 20k", "20k - 60k", "60k - 100k", "100k+"].map((label, idx) => (
          <label key={idx} className="flex items-center space-x-2">
            <input
              type="radio"
              name="budget"
              value={label}
              checked={formData.budget === label}
              onChange={handleChange}
              className="accent-[#A259FF]"
            />
            <span className="text-sm">{label}</span>
          </label>
        ))}
      </fieldset>

      <select
        name="timeline"
        value={formData.timeline}
        onChange={handleChange}
        className="input-style w-full bg-[#2A2A3A]/60 text-gray-400"
      >
        <option value="" disabled>
          Select Timeline
        </option>
        <option value="1-2 weeks">1-2 weeks</option>
        <option value="2-4 weeks">2-4 weeks</option>
        <option value="1-2 months">1-2 months</option>
        <option value="2+ months">2+ months</option>
      </select>

      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        required
        placeholder="Eg: Hello, I'm looking for a full-stack developer to help me out with..."
        className="input-style w-full h-24 text-sm"
      />

      <button
        type="submit"
        className="bg-[#A259FF] hover:bg-[#6C63FF] text-white px-6 py-2 rounded-md"
      >
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
