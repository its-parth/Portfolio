import { motion } from "framer-motion";
import LeetCodeHeatmap from "./LeetCodeHeatmap";
import GitHubHeatmap from "./GitHubHeatmap";

export default function Activity() {
  return (
    <section
      id="activity"
      className="relative overflow-hidden border-t border-white/5 bg-[#121212] py-15"
    >
      {/* Background Glow */}

      <div className="absolute left-1/2 top-1/2 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.03] blur-[180px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="mb-24"
        >
          <p className="uppercase tracking-[0.45em] text-neutral-500 text-sm">
            ACTIVITY
          </p>

          <h2 className="mt-4 text-5xl md:text-7xl font-semibold tracking-tight">
            Consistency Speaks.
          </h2>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-neutral-400">
            Coding is a long-term journey. These live contribution graphs
            reflect my commitment to continuous learning, problem solving,
            and building software every week.
          </p>
        </motion.div>

        {/* Heatmaps */}

        <div className="space-y-8">

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .7 }}
          >
            <LeetCodeHeatmap />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .7 }}
          >
            <GitHubHeatmap />
          </motion.div>

        </div>

      </div>
    </section>
  );
}