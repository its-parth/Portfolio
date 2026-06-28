import React from "react";
import { motion } from "framer-motion";
import AnimatedCounter from "./AnimatedCounter";
const stats = [
  {
    value: 1,
    suffix: "st",
    title: "SIH Internal Hackathon Winner",
    description:
      "Secured first place in Smart India Hackathon internal round in software.",
  },
  {
    value: 2,
    suffix: "nd",
    title: "PBL Second Rank",
    description:
      "Winner of the college Project Based Learning.",
  },
  {
    value: 1,
    prefix: "#",
    title: "Blind Coding Winner",
    description:
      "Winner of the diploma Blind Coding Competition.",
  },
  {
    value: 8.88,
    decimals: 2,
    title: "Current CGPA",
    description:
      "Maintaining consistent academic performance in Computer Engineering.",
  },
  {
    value: 93.06,
    suffix: "%",
    decimals: 2,
    title: "Diploma Percentage",
    description:
      "Graduated with distinction in Information Technology.",
  },
  {
    value: 3,
    suffix: "+",
    title: "Projects Built",
    description:
      "Built full-stack applications using modern web technologies.",
  },
];

export default function DeveloperStats() {
  return (
    <section
      id="stats"
      className="relative z-10 bg-[#121212] py-32 px-6 md:px-16 border-t border-white/5 overflow-hidden"
    >
      {/* Background Glow */}

      <div className="absolute left-1/2 top-1/2 w-[900px] h-[900px] rounded-full bg-white/[0.02] blur-[180px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="mb-24"
        >
          <h2 className="text-5xl md:text-7xl font-semibold tracking-tight tabular-nums">
            Developer Stats
          </h2>

          <p className="mt-6 text-lg text-gray-400 max-w-3xl leading-relaxed">
            A snapshot of my engineering journey through projects,
            problem solving, academics and competitions.
          </p>
        </motion.div>

        {/* HERO STAT */}

        <motion.div
          initial={{ opacity: 0, scale: .95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="mb-20 rounded-[40px] border border-white/10 bg-white/[0.03] p-12 md:p-16 text-center group hover:border-white/20 transition-all duration-500"
        >

          <div className="text-7xl md:text-[8rem] font-semibold tracking-tight tabular-nums">

            <div className="text-7xl md:text-[8rem] font-semibold   tabular-nums">
            <AnimatedCounter
                end={400}
                duration={2400}
            />
            +
            </div>


          </div>

          <h3 className="mt-4 text-3xl md:text-5xl font-medium">
            DSA Problems Solved
          </h3>

          <p className="mt-5 text-gray-400 max-w-2xl mx-auto leading-8">
            Consistently solving data structures and algorithms problems
            to strengthen problem-solving and interview readiness.
          </p>

        </motion.div>

        {/* OTHER STATS */}

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

          {stats.map((stat, index) => (

            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: .7,
                delay: index * .1,
              }}
              className="group rounded-3xl border border-white/10 bg-white/[0.03] p-10 hover:bg-white/[0.05] hover:border-white/20 transition-all duration-500"
            >

              <div className="text-5xl md:text-6xl font-semibold tracking-tight  tabular-nums">


                <AnimatedCounter
                end={stat.value}
                duration={2200}
                decimals={stat.decimals || 0}
                prefix={stat.prefix || ""}
                suffix={stat.suffix || ""}
                />

              </div>

              <h3 className="mt-5 text-2xl font-medium">
                {stat.title}
              </h3>

              <p className="mt-4 text-gray-400 leading-7">
                {stat.description}
              </p>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}