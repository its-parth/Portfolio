import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  ArrowUp,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-[#121212] overflow-hidden">

      {/* Glow */}

      <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-white/[0.02] blur-[140px]" />

      <div className="relative max-w-7xl mx-auto px-6 py-20">

        {/* Top */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row justify-between gap-12"
        >

          {/* Left */}

          <div>

            <h2 className="text-4xl font-semibold tracking-tight">
              PARTH
            </h2>

            <p className="mt-5 text-neutral-400 leading-8 max-w-sm">
              Building thoughtful digital experiences with
              modern web technologies.
            </p>

          </div>

          {/* Right */}

          <div className="flex gap-4">

            <Social
              href="https://github.com/its-parth"
              icon={<Github size={20} />}
            />

            <Social
              href="https://linkedin.com/in/parth-magar"
              icon={<Linkedin size={20} />}
            />

            <Social
              href="https://leetcode.com/its-parth"
              text="LC"
            />

          </div>

        </motion.div>

        {/* Divider */}

        <div className="my-12 border-t border-white/5"></div>

        {/* Bottom */}

        <div className="flex flex-col md:flex-row justify-between items-center gap-6">

          <p className="text-neutral-500 text-sm">
            © {new Date().getFullYear()} Parth Magar.
            All rights reserved.
          </p>

          <p className="text-neutral-500 text-sm">
            Designed & Developed by Parth.
          </p>

          <a
            href="#"
            className="group flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition"
          >
            Back to Top

            <ArrowUp
              size={16}
              className="transition group-hover:-translate-y-1"
            />
          </a>

        </div>

      </div>

    </footer>
  );
}

function Social({ href, icon, text }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="
      h-12
      w-12
      rounded-full
      border
      border-white/10
      bg-white/[0.04]
      flex
      items-center
      justify-center
      transition-all
      duration-300
      hover:bg-white
      hover:text-black
      hover:-translate-y-1
      "
    >
      {icon || <span className="font-semibold">{text}</span>}
    </a>
  );
}