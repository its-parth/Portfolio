import { motion } from "framer-motion";

export default function TechChip({ icon: Icon, name }) {
  return (
    <motion.div
      whileHover={{
        y: -6,
        scale: 1.05,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
      className="group"
    >
      <div
        className="
        flex items-center gap-3
        px-6 py-4
        rounded-2xl
        bg-white/[0.03]
        border border-white/10
        backdrop-blur-md
        transition-all duration-500
        hover:bg-white
        hover:border-white
        hover:shadow-[0_15px_40px_rgba(255,255,255,0.08)]
      "
      >
        <motion.div
          whileHover={{
            rotate: 8,
          }}
          transition={{
            duration: 0.25,
          }}
        >
          <Icon
            size={22}
            className="text-gray-300 group-hover:text-black transition-colors duration-500"
          />
        </motion.div>

        <span className="font-medium text-white group-hover:text-black transition-colors duration-500">
          {name}
        </span>
      </div>
    </motion.div>
  );
}