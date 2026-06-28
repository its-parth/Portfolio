import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-25 bg-[#121212] border-t border-white/5 overflow-hidden"
    >
      {/* Glow */}

      <div className="absolute left-1/2 top-1/2 w-[900px] h-[900px] rounded-full bg-white/[0.03] blur-[180px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="mb-24"
        >
          <p className="uppercase tracking-[0.45em] text-neutral-500 text-sm">
            ABOUT
          </p>

          <h2 className="mt-4 text-5xl md:text-7xl font-semibold tracking-tight">
            More Than Code.
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .8 }}
          >

            <p className="text-2xl md:text-3xl leading-relaxed text-white">
              Building software isn't just about writing code.
              I enjoy transforming ideas into products that solve
              real-world problems with thoughtful engineering and
              intuitive user experiences.
            </p>

            <p className="mt-10 text-neutral-400 leading-8 text-lg">
              I'm currently pursuing my Bachelor's in Computer Engineering
              while building production-ready full-stack applications,
              strengthening my problem-solving skills through Data Structures
              & Algorithms, and continuously exploring modern web technologies.
            </p>

            <p className="mt-8 text-neutral-400 leading-8 text-lg">
              My goal is to become a software engineer who creates
              scalable products that people genuinely enjoy using.
            </p>

          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .8 }}
            className="flex justify-center"
          >

            <div className="relative group">

              {/* Border */}

              <div className="absolute -inset-2 rounded-[36px] bg-gradient-to-br from-white/20 to-transparent opacity-40 blur-xl group-hover:opacity-80 transition" />

              <div className="relative overflow-hidden rounded-[30px] border border-white/10">

                <img
                  src="/about/parth.png"
                  alt="Parth Magar"
                  className="w-[380px] h-[500px] object-cover transition duration-700 group-hover:scale-105"
                />

              </div>

            </div>

          </motion.div>

        </div>

        {/* Bottom */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="grid md:grid-cols-4 gap-8 mt-28 border-t border-white/10 pt-14"
        >

          <Info
            title="Location"
            value="Pune, India"
          />

          <Info
            title="Education"
            value="B.E. Computer Engineering"
          />

          <Info
            title="Learning"
            value="System Design • Next.js • Redis"
          />

          <Info
            title="Beyond Coding"
            value="Gym • Games • Building Products"
          />

        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: .3 }}
          className="mt-24 text-center text-neutral-500 italic text-lg"
        >
          "Great software is built through curiosity, consistency and continuous learning."
        </motion.p>

      </div>
    </section>
  );
}

function Info({ title, value }) {
  return (
    <div>
      <p className="uppercase tracking-[0.35em] text-xs text-neutral-500">
        {title}
      </p>

      <p className="mt-4 text-lg text-white leading-8">
        {value}
      </p>
    </div>
  );
}