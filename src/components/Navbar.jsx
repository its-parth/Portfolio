import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const navLinks = [
  { name: "Projects", href: "#projects" },
  { name: "Journey", href: "#journey" },
  { name: "Activity", href: "#activity" },
  { name: "Toolkit", href: "#toolkit" },
  { name: "About", href: "#about" },
];

export default function Navbar() {
  const [heroFinished, setHeroFinished] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const hero = document.getElementById("hero");

      if (!hero) return;

      const heroBottom = hero.getBoundingClientRect().bottom;

      setHeroFinished(heroBottom <= window.innerHeight);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll while mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-700 ${
          heroFinished
            ? "bg-[#121212]/90 backdrop-blur-md border-b border-white/10 h-20"
            : "bg-transparent h-24"
        }`}
      >
        <div className="max-w-6xl h-full mx-auto px-6 lg:px-10 flex items-center justify-between">

          {/* LOGO */}
          <a href="#" className="group">
            <div className="text-xl lg:text-2xl tracking-[0.3em] uppercase font-medium text-white">
              PARTH
            </div>

            <div className="mt-1 h-[1px] w-0 bg-white transition-all duration-500 group-hover:w-full"></div>
          </a>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative text-[15px] text-gray-300 hover:text-white transition-colors duration-300 group"
              >
                {link.name}

                <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}

            <a
              href="#contact"
              className="px-5 py-2 rounded-full border border-white/20 hover:bg-white hover:text-black transition-all duration-300"
            >
              Let's Talk
            </a>
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="lg:hidden relative z-[120] w-8 h-8 flex flex-col justify-center items-center"
          >
            <span
              className={`absolute h-[2px] w-6 bg-white transition-all duration-300 ${
                menuOpen ? "rotate-45" : "-translate-y-2"
              }`}
            ></span>

            <span
              className={`absolute h-[2px] w-6 bg-white transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            ></span>

            <span
              className={`absolute h-[2px] w-6 bg-white transition-all duration-300 ${
                menuOpen ? "-rotate-45" : "translate-y-2"
              }`}
            ></span>
          </button>
        </div>
      </motion.nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -60 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -60 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-[90] bg-[#121212]"
          >
            <div className="h-full flex flex-col justify-center items-center gap-10">

              {navLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={closeMenu}
                  whileHover={{ scale: 1.08 }}
                  className="text-4xl font-medium text-white"
                >
                  {link.name}
                </motion.a>
              ))}

              <a
                href="#contact"
                onClick={closeMenu}
                className="mt-8 px-8 py-3 rounded-full border border-white/20 text-white hover:bg-white hover:text-black transition-all"
              >
                Let's Talk
              </a>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}