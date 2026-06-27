import React from "react";
import { motion, useTransform } from "framer-motion";

export default function Overlay({ scrollProgress }) {
  // Hero
  const opacity1 = useTransform(scrollProgress, [0, 0.15, 0.25], [1, 1, 0]);
  const y1 = useTransform(scrollProgress, [0, 0.25], [0, -100]);
  const blur1 = useTransform(scrollProgress, [0.15, 0.25], [0, 10]);

  // Second
  const opacity2 = useTransform(
    scrollProgress,
    [0.2, 0.3, 0.45, 0.55],
    [0, 1, 1, 0]
  );
  const y2 = useTransform(scrollProgress, [0.2, 0.3, 0.55], [100, 0, -100]);
  const blur2 = useTransform(
    scrollProgress,
    [0.2, 0.3, 0.45, 0.55],
    [10, 0, 0, 10]
  );

  // Third
  const opacity3 = useTransform(
    scrollProgress,
    [0.55, 0.65, 0.8, 0.95],
    [0, 1, 1, 0]
  );
  const y3 = useTransform(scrollProgress, [0.55, 0.65, 0.95], [100, 0, -100]);
  const blur3 = useTransform(
    scrollProgress,
    [0.55, 0.65, 0.8, 0.95],
    [10, 0, 0, 10]
  );
  const scrollOpacity = useTransform(
  scrollProgress,
  [0, 0.04, 0.08],
  [1, 1, 0]
);

const scrollY = useTransform(
  scrollProgress,
  [0, 0.08],
  [0, 20]
);
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden text-white">

      {/* ================= DESKTOP ================= */}
      <div className="hidden lg:block">

        {/* Hero */}
        <motion.div
          style={{
            opacity: opacity1,
            y: y1,
            filter: useTransform(blur1, (v) => `blur(${v}px)`),
          }}
          className="absolute left-1/2 bottom-[8%] -translate-x-1/2 text-center"
        >
          <h1 className="text-7xl lg:text-[7rem] font-semibold tracking-tight">
            Parth Magar
          </h1>

          <p className="mt-4 text-base uppercase tracking-[0.45em] text-neutral-400">
            Full Stack Developer
          </p>
        </motion.div>

        {/* Left */}
        <motion.div
          style={{
            opacity: opacity2,
            y: y2,
            filter: useTransform(blur2, (v) => `blur(${v}px)`),
          }}
          className="absolute top-1/2 left-[7%] -translate-y-1/2"
        >
          <p className="uppercase tracking-[0.45em] text-neutral-500 text-sm mb-5">
            Building
          </p>

          <h2 className="text-7xl lg:text-8xl font-semibold leading-[0.9] tracking-tight">
            Modern
            <br />
            Web Apps
          </h2>
        </motion.div>

        {/* Right */}
        <motion.div
          style={{
            opacity: opacity3,
            y: y3,
            filter: useTransform(blur3, (v) => `blur(${v}px)`),
          }}
          className="absolute top-1/2 right-[7%] -translate-y-1/2 text-right"
        >
          <p className="uppercase tracking-[0.45em] text-neutral-500 text-sm mb-5">
            Engineer
          </p>

          <h2 className="text-7xl lg:text-8xl font-semibold leading-[0.9] tracking-tight">
            Ideas
            <br />
            Into Reality
          </h2>
        </motion.div>

        <div className="absolute bottom-8 left-8 text-xs uppercase tracking-[0.35em] text-neutral-500">
          Pune, India
        </div>

        <div className="absolute bottom-8 right-8 text-xs uppercase tracking-[0.35em] text-green-400">
          Available for Work
        </div>
      </div>

      {/* ================= MOBILE ================= */}

      {/* Hero */}
      <motion.div
        style={{
          opacity: opacity1,
          y: y1,
          filter: useTransform(blur1, (v) => `blur(${v}px)`),
        }}
        className="absolute lg:hidden left-1/2 bottom-14 -translate-x-1/2 w-full px-6 text-center"
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight">
          Parth Magar
        </h1>

        <p className="mt-2 text-xs sm:text-sm md:text-base uppercase tracking-[0.35em] text-neutral-400">
          Full Stack Developer
        </p>
      </motion.div>

      {/* Second */}
      <motion.div
        style={{
          opacity: opacity2,
          y: y2,
          filter: useTransform(blur2, (v) => `blur(${v}px)`),
        }}
        className="absolute lg:hidden left-1/2 bottom-14 -translate-x-1/2 w-full px-6 text-center"
      >
        <p className="uppercase tracking-[0.35em] text-neutral-500 text-xs mb-2">
          Building
        </p>

        <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-[0.95] tracking-tight">
          Modern
          <br />
          Web Apps
        </h2>
      </motion.div>

      {/* Third */}
      <motion.div
        style={{
          opacity: opacity3,
          y: y3,
          filter: useTransform(blur3, (v) => `blur(${v}px)`),
        }}
        className="absolute lg:hidden left-1/2 bottom-14 -translate-x-1/2 w-full px-6 text-center"
      >
        <p className="uppercase tracking-[0.35em] text-neutral-500 text-xs mb-2">
          Engineer
        </p>

        <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-[0.95] tracking-tight">
          Ideas
          <br />
          Into Reality
        </h2>
      </motion.div>

      <motion.div
  style={{
    opacity: scrollOpacity,
    y: scrollY,
  }}
  className="hidden lg:block absolute right-16 top-1/2 -translate-y-1/2"
>
  <div className="flex flex-col items-center">
    <motion.div
      animate={{ y: [0, 18, 0] }}
      transition={{
        duration: 1.8,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="w-3 h-3 rounded-full bg-white"
    />

    <div className="mt-3 h-24 border-l border-white/30"></div>

    <span className="mt-6 text-xs uppercase tracking-[0.5em] text-neutral-400">
      SCROLL
    </span>
  </div>
</motion.div>

    </div>
  );
}