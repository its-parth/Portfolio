import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const navLinks = [
  { name: "Projects", href: "#projects" },
  { name: "Achievements", href: "#achievements" },
  { name: "Journey", href: "#journey" },
  { name: "Resume", href: "#resume" },
];

export default function Navbar() {
  const [heroFinished, setHeroFinished] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const hero = document.getElementById("hero");

      if (!hero) return;

      const heroBottom = hero.getBoundingClientRect().bottom;

      // Navbar becomes solid only after hero finishes
      setHeroFinished(heroBottom <= window.innerHeight);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      className={`fixed top-0 left-0 w-full z-50 transition-[background-color,backdrop-filter,padding,border-color] duration-700 ease-out ${heroFinished
          ? "bg-[#121212]/90 backdrop-blur-md border-b border-white/10 py-4"
          : "bg-transparent py-6"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-16 flex items-center justify-between">
        <a
          href="#"
          className="text-xl font-medium tracking-tighter text-white"
        >
          PM.
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-light text-gray-300 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}

          <a
            href="mailto:hello@example.com"
            className="px-5 py-2 rounded-full border border-white/20 hover:bg-white hover:text-black transition-all"
          >
            Let's Talk
          </a>
        </div>

        <button className="md:hidden uppercase tracking-widest text-sm text-white">
          Menu
        </button>
      </div>
    </motion.nav>
  );
}