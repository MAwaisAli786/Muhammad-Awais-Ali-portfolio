// src/app/components/Navbar.js → Updated with Skills Link (2025 Premium Edition)
'use client';

import { useState, useEffect } from 'react';
import { motion } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 🔥 UPDATED: Skills link add kiya gaya
  const navItems = ['Home', 'Education', 'Skills', 'Projects', 'About', 'Contact'];

  // Helper function to handle internal links
  const getHref = (item) => {
    if (item === 'Home') return '/';
    // Baqi sab sections ke liye #id use kar rahe hain (single page scroll)
    return `#${item.toLowerCase()}`;
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 
        ${scrolled ? 'bg-black/90 backdrop-blur-xl shadow-2xl shadow-purple-900/30' : 'bg-black/70 backdrop-blur-xl'}
        border-b border-purple-500/20`}
    >
      <div className="container mx-auto px-6 py-6">
        <div className="flex justify-between items-center">

          {/* Logo / Name */}
          <a href="/" className="relative group">
            <span className="text-3xl font-black bg-linear-to-r from-indigo-400 via-purple-400 to-pink-500 bg-clip-text text-transparent 
                             group-hover:from-pink-400 group-hover:to-indigo-400 transition-all duration-700">
              M. Awais Ali
            </span>
            <span className="absolute -bottom-1 left-0 w-0 h-1 bg-linear-to-r from-purple-400 to-pink-400 
                             group-hover:w-full transition-all duration-500"></span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-10 lg:gap-12">
            {navItems.map((item, index) => (
              <motion.a
                key={item}
                href={getHref(item)}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
                className="relative text-lg font-medium text-gray-300 
                         hover:text-white transition-all duration-300 
                         after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 
                         after:bg-linear-to-r after:from-purple-400 after:to-pink-400 
                         after:transition-all after:duration-500 
                         hover:after:w-full"
              >
                {item}
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative p-2 group"
          >
            <div className="space-y-1.5">
              <motion.span
                animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 8 : 0 }}
                className="block w-8 h-0.5 bg-linear-to-r from-purple-400 to-pink-400"
              />
              <motion.span
                animate={{ opacity: isOpen ? 0 : 1 }}
                className="block w-8 h-0.5 bg-linear-to-r from-indigo-400 to-purple-400"
              />
              <motion.span
                animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -8 : 0 }}
                className="block w-8 h-0.5 bg-linear-to-r from-pink-400 to-indigo-400"
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="md:hidden overflow-hidden bg-black/95 backdrop-blur-2xl border-t border-purple-500/30 mt-4"
        >
          <div className="py-8 px-6 space-y-6 text-center">
            {navItems.map((item) => (
              <motion.a
                key={item}
                href={getHref(item)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(false)}
                className="block text-2xl font-semibold text-gray-300 
                         hover:text-transparent hover:bg-clip-text 
                         hover:bg-linear-to-r hover:from-indigo-400 hover:via-purple-400 hover:to-pink-400 
                         transition-all duration-500"
              >
                {item}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
}