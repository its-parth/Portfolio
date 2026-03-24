import React from 'react';
import { motion, useTransform } from 'framer-motion';

export default function Overlay({ scrollProgress }) {
  // Center Text 0% - 20%
  const opacity1 = useTransform(scrollProgress, [0, 0.15, 0.25], [1, 1, 0]);
  const y1 = useTransform(scrollProgress, [0, 0.25], [0, -100]);
  const blur1 = useTransform(scrollProgress, [0.15, 0.25], [0, 10]);

  // Left Text 30% - 50%
  const opacity2 = useTransform(scrollProgress, [0.2, 0.3, 0.45, 0.55], [0, 1, 1, 0]);
  const y2 = useTransform(scrollProgress, [0.2, 0.3, 0.55], [100, 0, -100]);
  const blur2 = useTransform(scrollProgress, [0.2, 0.3, 0.45, 0.55], [10, 0, 0, 10]);

  // Right Text 60% - 80%
  const opacity3 = useTransform(scrollProgress, [0.55, 0.65, 0.8, 0.95], [0, 1, 1, 0]);
  const y3 = useTransform(scrollProgress, [0.55, 0.65, 0.95], [100, 0, -100]);
  const blur3 = useTransform(scrollProgress, [0.55, 0.65, 0.8, 0.95], [10, 0, 0, 10]);

  return (
    <div className="absolute inset-0 pointer-events-none flex flex-col items-center justify-center text-white px-8 md:px-16 overflow-hidden">
      
      {/* 0% Center */}
      <motion.div 
        style={{ 
          opacity: opacity1, 
          y: y1, 
          filter: useTransform(blur1, v => `blur(${v}px)`) 
        }}
        className="absolute bottom-[-5%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-full"
      >
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-medium tracking-tight whitespace-nowrap drop-shadow-lg">
          Parth Magar
        </h1>
      </motion.div>

      {/* 30% Left */}
      <motion.div 
        style={{ 
          opacity: opacity2, 
          y: y2, 
          filter: useTransform(blur2, v => `blur(${v}px)`) 
        }}
        className="absolute top-[55%] left-[2%] md:left-[5%] lg:left-[10%] max-w-[600px] -translate-y-1/2"
      >
        <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-medium leading-tight text-left drop-shadow-lg">
          127.0.0.1<br/>
          <span className="text-gray-400">HOME</span>
        </h2>
      </motion.div>

      {/* 60% Right */}
      <motion.div 
        style={{ 
          opacity: opacity3, 
          y: y3, 
          filter: useTransform(blur3, v => `blur(${v}px)`) 
        }}
        className="absolute top-1/2 right-[5%] md:right-[5%] lg:right-[8%] max-w-[600px] -translate-y-1/2"
      >
        <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-medium leading-tight text-right drop-shadow-lg">
          git commit<br/>
          <span className="text-gray-400">TRUST ME</span>
        </h2>
      </motion.div>

    </div>
  );
}
