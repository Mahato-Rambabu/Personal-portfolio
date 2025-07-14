"use client";

import { useState, useRef, useEffect } from "react";
import { FaComments, FaTimes } from "react-icons/fa";

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hi! I'm Ram's AI assistant. Ask me anything.", type: "bot" },
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  const handleSend = async () => {
    if (!input.trim()) return;
    const userMessage = { text: input, type: "user" };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: input }),
      });
      const data = await res.json();
      const botMessage = { text: data.message || "Something went wrong!", type: "bot" };
      setMessages((prev) => [...prev, botMessage]);
    } catch (err) {
      setMessages((prev) => [...prev, { text: "Error fetching response.", type: "bot" }]);
    }
  };

  // Scroll to bottom when new message added
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const getInputBg = () => {
    if (input.length > 100) return "bg-[#2a2d3d]";
    if (input.length > 50) return "bg-[#23203b]";
    return "bg-[#1a172b]";
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!isOpen ? (
        <button
          className="p-4 rounded-full bg-purple-700/50 text-white shadow-xl backdrop-blur-md hover:bg-purple-600/60 transition"
          onClick={() => setIsOpen(true)}
        >
          <FaComments size={24} />
        </button>
      ) : (
        <div className="w-[90vw] sm:w-[350px] h-[80vh] bg-[#1f1b2e]/90 text-white rounded-2xl shadow-2xl border border-purple-500/30 backdrop-blur-md flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-2 bg-[#2a2348]/60 border-b border-purple-400/20">
            <span className="font-semibold text-sm">AI Chat Assistant</span>
            <button onClick={() => setIsOpen(false)} className="text-white hover:text-red-400 transition">
              <FaTimes />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-3 overflow-auto space-y-2 text-sm">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`p-2 rounded-lg max-w-[80%] break-words ${
                  msg.type === "user"
                    ? "ml-auto bg-purple-600/50 text-right"
                    : "mr-auto bg-white/10 text-left"
                }`}
              >
                {msg.text}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 bg-[#2a2348]/50 border-t border-purple-400/20">
            <div className="flex gap-2 flex-wrap">
              <input
                type="text"
                className={`flex-1 min-w-0 px-3 py-2 rounded-lg text-sm text-white placeholder-gray-400 outline-none ${getInputBg()}`}
                placeholder="Type a message..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
              />
              <button
                onClick={handleSend}
                className="px-4 py-2 rounded-lg bg-purple-500 hover:bg-purple-600 text-sm font-semibold text-white"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
