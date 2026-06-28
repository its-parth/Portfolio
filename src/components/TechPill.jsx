import { motion } from "framer-motion";

export default function TechPill({
  icon: Icon,
  name,
  duration,
  delay,
}) {
  return (
    <motion.div
      animate={{
        y: [0, -8, 0, 6, 0],
        x: [0, 4, 0, -3, 0],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
      whileHover={{
        y: -12,
        rotate: -2,
        scale: 1.08,
      }}
      whileTap={{
        scale: 0.98,
      }}
      className="group"
    >
      <div
        className="
          flex items-center gap-3
          rounded-full
          border border-white/10
          bg-white/[0.04]
          backdrop-blur-xl
          px-6 py-3
          transition-all
          duration-500
          cursor-default
          group-hover:bg-white
          group-hover:border-white
          group-hover:shadow-[0_15px_60px_rgba(255,255,255,0.08)]
        "
      >
        <Icon
          size={20}
          className="text-neutral-300 transition-colors duration-500 group-hover:text-black"
        />

        <span className="font-medium text-white transition-colors duration-500 group-hover:text-black">
          {name}
        </span>
      </div>
    </motion.div>
  );
}