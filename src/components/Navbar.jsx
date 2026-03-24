import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const navLinks = [
  { name: 'Projects', href: '#projects' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Journey', href: '#journey' },
  { name: 'Resume', href: '#resume' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-transparent py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-16 flex items-center justify-between">
        <a href="#" className="text-xl font-medium tracking-tighter text-white">
          PM.
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-light text-gray-400 hover:text-white transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
          <a
            href="mailto:hello@example.com"
            className="px-5 py-2 text-sm font-medium border border-white/20 rounded-full hover:bg-white hover:text-black transition-colors duration-300"
          >
            Let's Talk
          </a>
        </div>

        {/* Mobile Navigation Toggle (Simple text toggle for minimalism) */}
        <div className="md:hidden">
          <button className="text-sm font-light text-gray-300 hover:text-white uppercase tracking-widest">
            Menu
          </button>
        </div>
      </div>
    </motion.nav>
  );
}
