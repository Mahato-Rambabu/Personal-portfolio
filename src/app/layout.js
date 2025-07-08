import "./globals.css";
import { Poppins } from "next/font/google";
import ClientWrapper from "@/components/ClientWrapper";
import { Toaster } from "react-hot-toast";
import ChatBot from "@/components/ChatBot"; // ✅ Imported here

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "My Portfolio",
  description: "Rambabu | Full Stack Developer Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable}`}>
      <body className="bg-[#12121c] text-[#E0E0E0] font-sans">
        <Toaster position="top-right" />
        <ClientWrapper>
          {children}
          <ChatBot />
        </ClientWrapper>
      </body>
    </html>
  );
}
