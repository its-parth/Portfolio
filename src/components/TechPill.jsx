import { motion, useMotionValue, useSpring } from "framer-motion";

export default function TechPill({
  icon: Icon,
  name,
  duration,
  delay,
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, {
    stiffness: 220,
    damping: 18,
  });

  const springY = useSpring(y, {
    stiffness: 220,
    damping: 18,
  });

  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;

    x.set(distanceX * 0.18);
    y.set(distanceY * 0.18);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      style={{
        x: springX,
        y: springY,
      }}
      animate={{
        y: [0, -8, 0, 6, 0],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
      whileHover={{
        scale: 1.08,
      }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className="group"
    >
      <div
        className="
        flex items-center gap-3
        rounded-full
        border border-white/10
        bg-white/[0.04]
        px-6 py-3
        cursor-default
        backdrop-blur-xl
        transition-all
        duration-300
        group-hover:bg-white
        group-hover:border-white
        group-hover:shadow-[0_20px_70px_rgba(255,255,255,0.12)]
      "
      >
        <motion.div
          whileHover={{ rotate: 12 }}
          transition={{ duration: .2 }}
        >
          <Icon
            size={20}
            className="text-neutral-300 group-hover:text-black transition-colors"
          />
        </motion.div>

        <span className="font-medium text-white group-hover:text-black transition-colors">
          {name}
        </span>
      </div>
    </motion.div>
  );
}