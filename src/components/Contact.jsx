import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  Download,
  ArrowRight,
} from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#121212] border-t border-white/5 py-25"
    >
      {/* Glow */}

      <div className="absolute left-1/2 top-1/2 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.03] blur-[180px]" />

      <div className="relative max-w-6xl mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="text-center"
        >

          <p className="uppercase tracking-[0.45em] text-neutral-500 text-sm">
            CONTACT
          </p>

          <h2 className="mt-6 text-5xl md:text-7xl font-semibold tracking-tight leading-tight">
            Let's Build
            <br />
            Something Amazing.
          </h2>

          <p className="mt-10 max-w-3xl mx-auto text-lg leading-8 text-neutral-400">
            Whether it's an internship, freelance project,
            startup idea or simply a conversation about technology,
            I'd love to connect.
          </p>

        </motion.div>

        {/* Terminal */}

        <motion.div
          initial={{ opacity: 0, scale: .97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="mt-24 rounded-3xl border border-white/10 bg-white/[0.03] overflow-hidden"
        >

          {/* Top */}

          <div className="flex items-center gap-2 border-b border-white/10 px-6 py-4">

            <div className="h-3 w-3 rounded-full bg-red-500" />
            <div className="h-3 w-3 rounded-full bg-yellow-500" />
            <div className="h-3 w-3 rounded-full bg-green-500" />

            <span className="ml-4 text-sm text-neutral-500">
              ~/parth/contact
            </span>

          </div>

          {/* Body */}

          <div className="space-y-8 p-8 font-mono text-lg">

            <div>

              <p className="text-neutral-500">
                $ status
              </p>

              <p className="mt-2 text-green-400">
                ● Available for Internships
              </p>

            </div>

            <div>

              <p className="text-neutral-500">
                $ location
              </p>

              <p className="mt-2">
                Pune, Maharashtra, India
              </p>

            </div>

            <div>

              <p className="text-neutral-500">
                $ response_time
              </p>

              <p className="mt-2">
                Within 24 Hours
              </p>

            </div>

            <div>

              <p className="text-neutral-500">
                $ email
              </p>

              <p className="mt-2">
                your@email.com
              </p>

            </div>

          </div>

        </motion.div>

        {/* Socials */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: .2 }}
          className="mt-16 flex flex-wrap justify-center gap-4"
        >

          <Social
            href="https://github.com/"
            icon={<Github size={20} />}
            title="GitHub"
          />

          <Social
            href="https://linkedin.com/"
            icon={<Linkedin size={20} />}
            title="LinkedIn"
          />

          <Social
            href="https://leetcode.com/"
            title="LeetCode"
          />

        </motion.div>

        {/* Buttons */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: .3 }}
          className="mt-20 flex flex-wrap justify-center gap-5"
        >

          <a
            href="/resume.pdf"
            download
            className="group flex items-center gap-3 rounded-full border border-white/10 px-8 py-4 hover:bg-white hover:text-black transition-all duration-300"
          >
            <Download size={20} />
            Download Resume
          </a>

          <a
            href="mailto:your@email.com"
            className="group flex items-center gap-3 rounded-full bg-white px-8 py-4 text-black transition hover:scale-105"
          >
            <Mail size={20} />

            Say Hello

            <ArrowRight
              size={18}
              className="transition group-hover:translate-x-1"
            />

          </a>

        </motion.div>

      </div>
    </section>
  );
}

function Social({ href, icon, title }) {
  return (
    <a
      href={href}
      target="_blank"
      className="group flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-6 py-3 transition-all duration-300 hover:bg-white hover:text-black"
    >
      {icon}

      <span>{title}</span>
    </a>
  );
}