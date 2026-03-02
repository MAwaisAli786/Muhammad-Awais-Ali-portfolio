// src/app/layout.js → FINAL 100% WORKING VERSION

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from './components/Navbar';   // ← Already hai, perfect

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Muhammad Awais Ali - Full Stack Developer",
  description: "Full-Stack Developer | Next.js, Node.js, MySQL | Pakistan",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}>
        
        {/* Navbar fixed rahega har page pe */}
        <Navbar/ >

        {/* Content navbar ke neeche se shuru hoga */}
        <main className="pt-20 min-h-screen">
          {children}
        </main>

      </body>
    </html>
  );
}