import React from 'react';
import { motion } from 'framer-motion';

const achievements = [
  {
    id: 1,
    title: 'Site of the Day',
    organization: 'Awwwards',
    year: '2024',
    description: 'Recognized for excellent design, creativity, and usability on the cinematic portfolio.',
  },
  {
    id: 2,
    title: 'Developer Award',
    organization: 'FWA',
    year: '2023',
    description: 'Awarded for cutting-edge technological achievement in a web application.',
  },
  {
    id: 3,
    title: 'Top Rated Talent',
    organization: 'Upwork',
    year: '2022 - Present',
    description: 'Maintained 100% job success score with exceptional client feedback across 30+ projects.',
  },
  {
    id: 4,
    title: 'Hackathon Winner',
    organization: 'Web3 Global',
    year: '2022',
    description: 'First place finish among 1,000+ developers for building a decentralized creative platform.',
  }
];

export default function Achievements() {
  return (
    <section id="achievements" className="relative z-10 bg-[#121212] py-32 px-6 md:px-16 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mb-20"
        >
          <h3 className="text-5xl md:text-7xl font-medium tracking-tight">Achievements</h3>
          <p className="mt-4 text-gray-400 text-lg md:text-xl max-w-2xl">
            Milestones and recognitions reflecting a continuous drive for excellence in digital craftsmanship.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
          {achievements.map((item, idx) => (
             <motion.div
               key={item.id}
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true, margin: '-50px' }}
               transition={{ duration: 0.6, delay: idx * 0.1, ease: 'easeOut' }}
               className="group relative p-8 md:p-10 rounded-3xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:border-white/10 transition-all duration-500 overflow-hidden"
             >
               {/* Hover Glow */}
               <div className="absolute -inset-full top-0 left-0 bg-gradient-to-r from-transparent via-white/[0.05] to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-[shimmer_2s_infinite] pointer-events-none transform -skew-x-12"></div>

               <div className="flex justify-between items-start mb-6">
                 <h4 className="text-2xl md:text-3xl font-medium text-white">{item.title}</h4>
                 <span className="text-sm font-mono text-gray-500 bg-white/5 px-3 py-1 rounded-full">
                   {item.year}
                 </span>
               </div>
               
               <p className="text-lg text-gray-300 font-light mb-4">{item.organization}</p>
               <p className="text-sm text-gray-500 leading-relaxed">{item.description}</p>
             </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
